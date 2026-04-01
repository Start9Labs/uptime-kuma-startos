import { setupManifest } from '@start9labs/start-sdk'
import { alertUpdate, long, short } from './i18n'

export const manifest = setupManifest({
  id: 'uptime-kuma',
  title: 'Uptime Kuma',
  license: 'MIT',
  packageRepo:
    'https://github.com/Start9Labs/uptime-kuma-startos',
  upstreamRepo: 'https://github.com/louislam/uptime-kuma',
  marketingUrl: 'https://github.com/louislam/uptime-kuma',
  donationUrl: 'https://opencollective.com/uptime-kuma',
  docsUrls: ['https://github.com/louislam/uptime-kuma/wiki'],
  description: { short, long },
  volumes: ['main'],
  images: {
    main: {
      source: {
        dockerTag: `louislam/uptime-kuma:2.2.1`,
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  alerts: {
    install: null,
    update: alertUpdate,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
