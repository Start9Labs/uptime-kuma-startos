import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { existsSync } from 'fs'
import { rm, writeFile } from 'fs/promises'
import { MIGRATION_MARKER } from '../../utils'

export const v2_1_0_0_b0 = VersionInfo.of({
  version: '2.1.0:0-beta.0',
  releaseNotes:
    'Updated upstream to Uptime Kuma 2.1.0. If updating, initial startup can take a very long time, DO NOT INTERRUPT.',
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
