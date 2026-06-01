import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { existsSync } from 'fs'
import { rm, writeFile } from 'fs/promises'
import { MIGRATION_MARKER } from '../utils'

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
    up: async ({ effects }) => {
      if (existsSync('/media/startos/volumes/main/kuma.db')) {
        await writeFile(MIGRATION_MARKER, '')
      }
      await rm('/media/startos/volumes/main/start9', {
        recursive: true,
        force: true,
      }).catch(console.error)
    },
    down: IMPOSSIBLE,
  },
})
