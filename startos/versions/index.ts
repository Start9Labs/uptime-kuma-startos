import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v_2_3_2_1 } from './v2.3.2.1'

export const versionGraph = VersionGraph.of({
  current,
  other: [v_2_3_2_1],
})
