import { mergeConfigs } from '../configMerger.ts'
import { ERROR } from '../constants.ts'

import { arrayFunctionVanillaConfig } from './plugins/array-func/vanilla.ts'
import { cspellVanillaConfig } from './plugins/cspell/vanilla.ts'
import { eslintVanillaConfig } from './plugins/eslint/vanilla.ts'
import { eslintCommentsVanillaConfig } from './plugins/eslint-comments/vanilla.ts'
import { filenamesVanillaConfig } from './plugins/filenames-simple/vanilla.ts'
import { importVanillaConfig } from './plugins/import-x/vanilla.ts'
import { listenersVanillaConfig } from './plugins/listeners/vanilla.ts'
import { noConstructorBindVanillaConfig } from './plugins/no-constructor-bind/vanilla.ts'
import { noSecretsVanillaConfig } from './plugins/no-secrets/vanilla.ts'
import { noUnsanitizedVanillaConfig } from './plugins/no-unsanitized/vanilla.ts'
import { noUseExtendNativeVanillaConfig } from './plugins/no-use-extend-native/vanilla.ts'
import { perfectionistVanillaConfig } from './plugins/perfectionist/vanilla.ts'
import { promiseVanillaConfig } from './plugins/promise/vanilla.ts'
import { securityVanillaConfig } from './plugins/security/vanilla.ts'
import { sonarJsVanillaConfig } from './plugins/sonarjs/vanilla.ts'
import { ternaryVanillaConfig } from './plugins/ternary/vanilla.ts'
import { unicornVanillaConfig } from './plugins/unicorn/vanilla.ts'

export const vanillaConfig = mergeConfigs(
  {
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: ERROR,
      reportUnusedInlineConfigs: ERROR,
    },
  },
  eslintVanillaConfig,
  arrayFunctionVanillaConfig,
  cspellVanillaConfig,
  eslintCommentsVanillaConfig,
  filenamesVanillaConfig,
  importVanillaConfig,
  listenersVanillaConfig,
  noConstructorBindVanillaConfig,
  noSecretsVanillaConfig,
  noUnsanitizedVanillaConfig,
  noUseExtendNativeVanillaConfig,
  perfectionistVanillaConfig,
  promiseVanillaConfig,
  securityVanillaConfig,
  sonarJsVanillaConfig,
  ternaryVanillaConfig,
  unicornVanillaConfig,
)
