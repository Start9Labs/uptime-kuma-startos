import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v_2_4_0_1 } from './v2.4.0_1'

export const versionGraph = VersionGraph.of({
  current,
  other: [v_2_4_0_1],
})
