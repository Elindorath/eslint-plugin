import { mergeConfigs } from '../configMerger.ts'

import { json5LanguageConfig } from './plugins/json/language-json5.ts'
import { json5Config } from './plugins/jsonc/syntax-json5.ts'


export const languageJson5Config = mergeConfigs(
  json5LanguageConfig,
  json5Config
)
