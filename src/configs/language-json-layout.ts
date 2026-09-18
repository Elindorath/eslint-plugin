import { mergeConfigs } from '../configMerger.ts'

import { jsonLayoutConfig } from './plugins/jsonc/syntax-json-layout.ts'
import { stylisticJsonLayoutConfig } from './plugins/stylistic/syntax-json-layout.ts'


export const languageJsonLayoutConfig = mergeConfigs(
  jsonLayoutConfig,
  stylisticJsonLayoutConfig
)
