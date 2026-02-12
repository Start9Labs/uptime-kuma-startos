import { matches, FileHelper } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const { object, literal } = matches

const shape = object({
  type: literal('sqlite').onMismatch('sqlite'),
})

export const dbConfig = FileHelper.json(
  {
    base: sdk.volumes.main,
    subpath: 'db-config.json',
  },
  shape,
)
