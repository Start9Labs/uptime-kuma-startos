import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { existsSync } from 'fs'
import { rm, writeFile } from 'fs/promises'
import { MIGRATION_MARKER } from '../utils'

export const v_2_3_2_2 = VersionInfo.of({
  version: '2.3.2:2',
  releaseNotes: {
    en_US: `**Bumps**

- Uptime Kuma → 2.3.2
- start-sdk → 1.5.2`,
    es_ES: `**Actualizaciones**

- Uptime Kuma → 2.3.2
- start-sdk → 1.5.2`,
    de_DE: `**Aktualisierungen**

- Uptime Kuma → 2.3.2
- start-sdk → 1.5.2`,
    pl_PL: `**Aktualizacje**

- Uptime Kuma → 2.3.2
- start-sdk → 1.5.2`,
    fr_FR: `**Mises à jour**

- Uptime Kuma → 2.3.2
- start-sdk → 1.5.2`,
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
