import { setupManifest } from '@start9labs/start-sdk'
import { long, migrationAlert, short } from './i18n'

export const manifest = setupManifest({
  id: 'uptime-kuma',
  title: 'Uptime Kuma',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9Labs/uptime-kuma-startos',
  upstreamRepo: 'https://github.com/louislam/uptime-kuma',
  marketingUrl: 'https://github.com/louislam/uptime-kuma',
  donationUrl: 'https://opencollective.com/uptime-kuma',
  description: { short, long },
  preDownloadAlert: {
    message: migrationAlert,
    when: { sourceVersion: '<2.0.0:0' },
  },
  volumes: ['main'],
  images: {
    main: {
      source: {
        dockerTag: `louislam/uptime-kuma:2.5.5`,
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
