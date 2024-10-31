import { mergeConfigs } from '../configMerger'

import { ERROR } from '../constants'

import { arrayFunctionVanillaConfig } from './plugins/array-func/vanilla'
import { eslintVanillaConfig } from './plugins/eslint/vanilla'
import { eslintCommentsVanillaConfig } from './plugins/eslint-comments/vanilla'
import { filenamesVanillaConfig } from './plugins/filenames-simple/vanilla'
import { importVanillaConfig } from './plugins/import/vanilla'
import { listenersVanillaConfig } from './plugins/listeners/vanilla'
import { noConstructorBindVanillaConfig } from './plugins/no-constructor-bind/vanilla'
import { noSecretsVanillaConfig } from './plugins/no-secrets/vanilla'
import { noUnsanitizedVanillaConfig } from './plugins/no-unsanitized/vanilla'
import { noUseExtendNativeVanillaConfig } from './plugins/no-use-extend-native/vanilla'
import { perfectionistVanillaConfig } from './plugins/perfectionist/vanilla'
import { promiseVanillaConfig } from './plugins/promise/vanilla'
import { securityVanillaConfig } from './plugins/security/vanilla'
import { simpleImportSortConfig } from './plugins/simple-import-sort/source-type-module'
import { sonarJsVanillaConfig } from './plugins/sonarjs/vanilla'
import { ternaryVanillaConfig } from './plugins/ternary/vanilla'
import { unicornVanillaConfig } from './plugins/unicorn/vanilla'

export const vanillaConfig = mergeConfigs(
  {
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: ERROR,
    },
  },
  eslintVanillaConfig,
  arrayFunctionVanillaConfig,
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
  simpleImportSortConfig,
  sonarJsVanillaConfig,
  ternaryVanillaConfig,
  unicornVanillaConfig,
)
