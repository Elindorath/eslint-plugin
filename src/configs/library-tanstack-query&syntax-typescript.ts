import { mergeConfigs } from '../configMerger.ts'

import { tanstackQueryTypescriptConfig } from './plugins/tanstack-query/library-tanstack-query&syntax-typescript.ts'


export const libraryTanstackQuerySyntaxTypescriptConfig = mergeConfigs(
  tanstackQueryTypescriptConfig
)
