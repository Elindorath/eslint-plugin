import { mergeConfigs } from '../configMerger.ts'
import { ERROR } from '../constants.ts'

import { canonicalJavascriptLayoutConfig } from './plugins/canonical/language-javascript-layout.ts'
import { importJavascriptLayoutConfig } from './plugins/import-x/language-javascript-layout.ts'
import { stylisticJavascriptLayoutConfig } from './plugins/stylistic/language-javascript-layout.ts'
import { unicornJavascriptLayoutConfig } from './plugins/unicorn/language-javascript-layout.ts'

export const languageJavascriptLayoutConfig = mergeConfigs(
  {
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: ERROR,
      reportUnusedInlineConfigs: ERROR,
    },
  },
  canonicalJavascriptLayoutConfig,
  importJavascriptLayoutConfig,
  stylisticJavascriptLayoutConfig,
  unicornJavascriptLayoutConfig,
)
