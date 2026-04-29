import { VersionGraph } from '@start9labs/start-sdk'
import { v_2_2_1_1 } from './v2.2.1.1'
import { v_2_2_1_2 } from './v2.2.1.2'

export const versionGraph = VersionGraph.of({
  current: v_2_2_1_2,
  other: [v_2_2_1_1],
})
