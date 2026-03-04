import { sdk } from '../sdk'
import { dbConfig } from '../file-models/db-config.json'

export const seedFiles = sdk.setupOnInit(async (effects, kind) => {
  if (kind !== 'install') return
  await dbConfig.merge(effects, {})
})
