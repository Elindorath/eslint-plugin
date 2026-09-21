import { mergeConfigs } from '../configMerger.ts'

import { tanstackQueryConfig } from './plugins/tanstack-query/library-tanstack-query.ts'


export const libraryTanstackQueryConfig = mergeConfigs(
  tanstackQueryConfig
)
