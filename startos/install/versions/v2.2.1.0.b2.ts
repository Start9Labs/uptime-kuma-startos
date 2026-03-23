import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { existsSync } from 'fs'
import { rm, writeFile } from 'fs/promises'
import { MIGRATION_MARKER } from '../../utils'

export const v_2_2_1_0_b2 = VersionInfo.of({
  version: '2.2.1:0-beta.2',
  releaseNotes: {
    en_US: 'Update Uptime Kuma to 2.2.1',
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
