import { mergeConfigs } from '../configMerger.ts'
import { ERROR } from '../constants.ts'

import { arrayFunctionJavascriptConfig } from './plugins/array-func/language-javascript.ts'
import { canonicalJavascriptConfig } from './plugins/canonical/language-javascript.ts'
import { cspellJavascriptConfig } from './plugins/cspell/language-javascript.ts'
import { eslintJavascriptConfig } from './plugins/eslint/language-javascript.ts'
import { eslintCommentsJavascriptConfig } from './plugins/eslint-comments/language-javascript.ts'
import { filenamesJavascriptConfig } from './plugins/filenames-simple/language-javascript.ts'
import { importJavascriptConfig } from './plugins/import-x/language-javascript.ts'
import { listenersJavascriptConfig } from './plugins/listeners/language-javascript.ts'
import { noConstructorBindJavascriptConfig } from './plugins/no-constructor-bind/language-javascript.ts'
import { noSecretsJavascriptConfig } from './plugins/no-secrets/language-javascript.ts'
import { noUnsanitizedJavascriptConfig } from './plugins/no-unsanitized/language-javascript.ts'
import { noUseExtendNativeJavascriptConfig } from './plugins/no-use-extend-native/language-javascript.ts'
import { perfectionistJavascriptConfig } from './plugins/perfectionist/language-javascript.ts'
import { promiseJavascriptConfig } from './plugins/promise/language-javascript.ts'
import { securityJavascriptConfig } from './plugins/security/language-javascript.ts'
import { sonarJsJavascriptConfig } from './plugins/sonarjs/language-javascript.ts'
import { unicornJavascriptConfig } from './plugins/unicorn/language-javascript.ts'

export const languageJavascriptConfig = mergeConfigs(
  {
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: ERROR,
      reportUnusedInlineConfigs: ERROR,
    },
  },
  eslintJavascriptConfig,
  arrayFunctionJavascriptConfig,
  canonicalJavascriptConfig,
  cspellJavascriptConfig,
  eslintCommentsJavascriptConfig,
  filenamesJavascriptConfig,
  importJavascriptConfig,
  listenersJavascriptConfig,
  noConstructorBindJavascriptConfig,
  noSecretsJavascriptConfig,
  noUnsanitizedJavascriptConfig,
  noUseExtendNativeJavascriptConfig,
  perfectionistJavascriptConfig,
  promiseJavascriptConfig,
  securityJavascriptConfig,
  sonarJsJavascriptConfig,
  unicornJavascriptConfig,
)
