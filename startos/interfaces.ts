import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

// Host id (the `sdk.MultiHost.of` group) vs. the interface id exported on it —
// they differ here, so keep both for `sdk.host.getOwn` lookups.
export const mainHostId = 'main'
export const uiInterfaceId = 'ui'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const uiMulti = sdk.MultiHost.of(effects, mainHostId)
  const uiMultiOrigin = await uiMulti.bindPort(uiPort, {
    protocol: 'http',
  })

  const ui = sdk.createInterface(effects, {
    name: i18n('Web UI'),
    id: uiInterfaceId,
    description: i18n('Web Interface'),
    type: 'ui',
    schemeOverride: null,
    masked: false,
    username: null,
    path: '',
    query: {},
  })

  const uiReceipt = await uiMultiOrigin.export([ui])

  return [uiReceipt]
})
