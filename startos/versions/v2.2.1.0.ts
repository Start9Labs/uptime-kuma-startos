import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { existsSync } from 'fs'
import { rm, writeFile } from 'fs/promises'
import { MIGRATION_MARKER } from '../utils'

export const v_2_2_1_0 = VersionInfo.of({
  version: '2.2.1:0',
  releaseNotes: {
    en_US: 'Update Uptime Kuma to 2.2.1',
    es_ES: 'Actualización de Uptime Kuma a 2.2.1',
    de_DE: 'Update von Uptime Kuma auf 2.2.1',
    pl_PL: 'Aktualizacja Uptime Kuma do 2.2.1',
    fr_FR: 'Mise à jour de Uptime Kuma vers 2.2.1',
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
