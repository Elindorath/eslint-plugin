import { mergeConfigs } from '../configMerger.ts'

import { cssLanguageConfig } from './plugins/css/language-css.ts'
import { unicornCssConfig } from './plugins/unicorn/language-css.ts'


export const languageCssConfig = mergeConfigs(
  cssLanguageConfig,
  unicornCssConfig
)
