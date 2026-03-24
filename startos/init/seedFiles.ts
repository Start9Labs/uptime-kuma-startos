import { sdk } from '../sdk'
import { dbConfig } from '../file-models/db-config.json'

export const seedFiles = sdk.setupOnInit(async (effects) => {
  await dbConfig.merge(effects, {})
})
