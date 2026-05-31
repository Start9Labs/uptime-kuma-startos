import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.4.0:0',
  releaseNotes: {
    en_US: 'Bumps Uptime Kuma → 2.4.0.',
    es_ES: 'Actualiza Uptime Kuma → 2.4.0.',
    de_DE: 'Aktualisiert Uptime Kuma → 2.4.0.',
    pl_PL: 'Aktualizuje Uptime Kuma → 2.4.0.',
    fr_FR: 'Met à jour Uptime Kuma → 2.4.0.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
