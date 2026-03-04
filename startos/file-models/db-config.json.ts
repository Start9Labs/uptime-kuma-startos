import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z.object({
  type: z.literal('sqlite').catch('sqlite'),
})

export const dbConfig = FileHelper.json(
  {
    base: sdk.volumes.main,
    subpath: 'db-config.json',
  },
  shape,
)
