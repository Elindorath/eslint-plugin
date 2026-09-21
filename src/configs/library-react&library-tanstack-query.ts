import { mergeConfigs } from '../configMerger.ts'

import { tanstackQueryReactConfig } from './plugins/tanstack-query/library-react&library-tanstack-query.ts'


export const libraryReactLibraryTanstackQueryConfig = mergeConfigs(
  tanstackQueryReactConfig
)
