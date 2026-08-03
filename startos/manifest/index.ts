import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'uptime-kuma',
  title: 'Uptime Kuma',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9Labs/uptime-kuma-startos',
  upstreamRepo: 'https://github.com/louislam/uptime-kuma',
  marketingUrl: 'https://github.com/louislam/uptime-kuma',
  donationUrl: 'https://opencollective.com/uptime-kuma',
  description: { short, long },
  volumes: ['main'],
  images: {
    main: {
      source: {
        dockerTag: `louislam/uptime-kuma:2.5.0`,
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
