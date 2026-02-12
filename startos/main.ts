import { sdk } from './sdk'
import { uiPort, MIGRATION_MARKER } from './utils'
import { i18n } from './i18n'
import { existsSync } from 'fs'
import { rm } from 'fs/promises'
import { dbConfig } from './file-models/db-config.json'

const entryPageUrl = `http://uptime-kuma.startos:${uiPort}/api/entry-page`

export const main = sdk.setupMain(async ({ effects }) => {
  console.info('Starting Uptime Kuma')

  await dbConfig.write(effects, { type: 'sqlite' })

  const daemons = sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: await sdk.SubContainer.of(
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
      cwd: '/app',
    },
    ready: {
      display: i18n('Web Interface'),
      fn: () =>
        sdk.healthCheck.checkWebUrl(
          effects,
          'http://uptime-kuma.startos:' + uiPort,
          {
            successMessage: i18n('The web interface is ready'),
            errorMessage: i18n('The web interface is unreachable'),
          },
        ),
    },
    requires: [],
  })

  if (!existsSync(MIGRATION_MARKER)) return daemons

  return daemons.addHealthCheck('migration', {
    ready: {
      display: i18n('Database Migration'),
      fn: async () => {
        try {
          const res = await fetch(entryPageUrl)
          if (res.ok) {
            rm(MIGRATION_MARKER, { force: true }).catch(console.error)
            return {
              result: 'success' as const,
              message: i18n('Database migration complete'),
            }
          }
        } catch {}

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
