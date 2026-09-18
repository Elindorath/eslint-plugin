import { mergeConfigs } from '../configMerger.ts'

import { json5LayoutConfig } from './plugins/jsonc/syntax-json5-layout.ts'
import { stylisticJsonLayoutConfig } from './plugins/stylistic/syntax-json-layout.ts'


export const languageJson5LayoutConfig = mergeConfigs(
  json5LayoutConfig,
  stylisticJsonLayoutConfig
)
