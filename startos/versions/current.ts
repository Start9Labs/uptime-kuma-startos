import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { existsSync } from 'fs'
import { rm, writeFile } from 'fs/promises'
import { MIGRATION_MARKER } from '../utils'

export const current = VersionInfo.of({
  version: '2.4.0:1',
  releaseNotes: {
    en_US: 'Internal updates (start-sdk 2.0.x)',
    es_ES: 'Actualizaciones internas (start-sdk 2.0.x)',
    de_DE: 'Interne Aktualisierungen (start-sdk 2.0.x)',
    pl_PL: 'Aktualizacje wewnętrzne (start-sdk 2.0.x)',
    fr_FR: 'Mises à jour internes (start-sdk 2.0.x)',
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
