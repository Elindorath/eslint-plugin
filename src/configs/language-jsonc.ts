import { mergeConfigs } from '../configMerger.ts'

import { jsoncLanguageConfig } from './plugins/json/language-jsonc.ts'
import { json5Config } from './plugins/jsonc/syntax-json5.ts'


export const languageJsoncConfig = mergeConfigs(
  jsoncLanguageConfig,
  json5Config
)
