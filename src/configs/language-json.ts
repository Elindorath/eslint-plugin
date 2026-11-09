import { mergeConfigs } from '../configMerger.ts'

import { jsonLanguageConfig } from './plugins/json/language-json.ts'
import { jsonConfig } from './plugins/jsonc/syntax-json.ts'
import { unicornJsonConfig } from './plugins/unicorn/language-json.ts'


export const languageJsonConfig = mergeConfigs(
  jsonLanguageConfig,
  jsonConfig,
  unicornJsonConfig
)
