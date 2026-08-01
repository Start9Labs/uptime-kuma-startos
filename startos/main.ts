import { existsSync } from 'fs'
import { rm, writeFile } from 'fs/promises'
import { i18n } from './i18n'
import { mainHostId, uiInterfaceId } from './interfaces'
import { sdk } from './sdk'
import { MIGRATION_MARKER } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info('Starting Uptime Kuma')

  // The service's own LXC-bridge (lxcbr0) URL for its `ui` interface, e.g.
  // `http://10.0.3.1:54269`. Replaces the retired `uptime-kuma.startos:<port>`
  // DNS name for in-box self-checks, so they no longer resolve through (and
  // depend on) the Tor/DNS layer. The map fn returns just the resolved URL, so
  // `.const()` re-runs `main` only if that URL changes (binding removed/re-added)
  // — the health checks just close over the resolved string.
  const uiUrl = await sdk.host
    .getOwn(effects, mainHostId, (host) => {
      const iface = Object.values(host?.bindings ?? {})
        .flatMap((b) => Object.values(b.interfaces))
        .find((i) => i.id === uiInterfaceId)
      return iface
        ? iface.addressInfo
          .filter({ kind: 'bridge', predicate: (h) => !h.ssl })
          .format('urlstring')[0]
        : undefined
    })
    .const()

  // The StartOS root CA, extracted from a generated fullchain
  // ([leaf, intermediate, root]). Subcontainers can't bind-mount host paths,
  // so the PEM is written into the `main` volume (mounted at /app/data) for
  // NODE_EXTRA_CA_CERTS. `.const()` re-runs main if the CA rotates.
  const [, , rootCa] = await sdk
    .getSslCertificate(effects, ['127.0.0.1'])
    .const()
  await writeFile('/media/startos/volumes/main/startos-root-ca.crt', rootCa)

  const daemons = sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: sdk.SubContainer.of(
      effects,
      {
        imageId: 'main',
      },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/app/data',
        readonly: false,
      }),
      'main',
    ),
    exec: {
      command: sdk.useEntrypoint(),
      env: {
        NODE_EXTRA_CA_CERTS: '/app/data/startos-root-ca.crt',
      },
      cwd: '/app',
    },
    ready: {
      display: i18n('Web Interface'),
      fn: () =>
        uiUrl
          ? sdk.healthCheck.checkWebUrl(effects, uiUrl, {
            successMessage: i18n('The web interface is ready'),
            errorMessage: i18n('The web interface is unreachable'),
          })
          : Promise.resolve({
            result: 'starting' as const,
            message: i18n('The web interface is unreachable'),
          }),
    },
    requires: [],
  })

  if (!existsSync(MIGRATION_MARKER)) return daemons

  return daemons.addHealthCheck('migration', {
    ready: {
      display: i18n('Database Migration'),
      fn: async () => {
        try {
          if (uiUrl) {
            const res = await fetch(`${uiUrl}/api/entry-page`)
            if (res.ok) {
              rm(MIGRATION_MARKER, { force: true }).catch(console.error)
              return {
                result: 'success' as const,
                message: i18n('Database migration complete'),
              }
            }
          }
        } catch { }

        return {
          result: 'loading' as const,
          message: i18n(
            'Database migration in progress. This may take a long time. Do NOT restart.',
          ),
        }
      },
    },
    requires: [],
  })
})
