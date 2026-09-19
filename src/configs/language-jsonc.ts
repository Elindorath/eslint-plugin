import { mergeConfigs } from '../configMerger.ts'
import { OFF } from '../constants.ts'

import { jsoncLanguageConfig } from './plugins/json/language-jsonc.ts'
import { jsonConfig } from './plugins/jsonc/syntax-json.ts'


/*
 * JSONC is JSON with comments, and nothing else: none of what JSON5 adds beyond them —
 * unquoted keys, single quotes, `Infinity`, hexadecimal — belongs here
 */
export const languageJsoncConfig = mergeConfigs(
  jsoncLanguageConfig,
  jsonConfig,
  {
    rules: {
      // OFF as the dialect exists to carry comments
      'jsonc/no-comments': [OFF],
    },
  }
)
