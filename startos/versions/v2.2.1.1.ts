import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { existsSync } from 'fs'
import { rm, writeFile } from 'fs/promises'
import { MIGRATION_MARKER } from '../utils'

export const v_2_2_1_1 = VersionInfo.of({
  version: '2.2.1:1',
  releaseNotes: {
    en_US: 'Internal updates (start-sdk 1.2.0)',
    es_ES: 'Actualizaciones internas (start-sdk 1.2.0)',
    de_DE: 'Interne Aktualisierungen (start-sdk 1.2.0)',
    pl_PL: 'Aktualizacje wewnętrzne (start-sdk 1.2.0)',
    fr_FR: 'Mises à jour internes (start-sdk 1.2.0)',
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
