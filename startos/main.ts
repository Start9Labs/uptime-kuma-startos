import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info('Starting Uptime Kuma')

  return sdk.Daemons.of(effects).addDaemon('primary', {
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
})
