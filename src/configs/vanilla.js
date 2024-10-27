'use strict'

/* eslint-disable import/max-dependencies -- We need to require all of that here */

const { mergeConfigs } = require('../utils.js')

const arrayFunctionVanillaConfig = require('./plugins/array-func/vanilla.js')
const eslintVanillaConfig = require('./plugins/eslint/vanilla.js')
const eslintCommentsVanillaConfig = require('./plugins/eslint-comments/vanilla.js')
const filenamesVanillaConfig = require('./plugins/filenames-simple/vanilla.js')
const importVanillaConfig = require('./plugins/import/vanilla.js')
const listenersVanillaConfig = require('./plugins/listeners/vanilla.js')
const noConstructorBindVanillaConfig = require('./plugins/no-constructor-bind/vanilla.js')
const noSecretsVanillaConfig = require('./plugins/no-secrets/vanilla.js')
const noUnsanitizedVanillaConfig = require('./plugins/no-unsanitized/vanilla.js')
const noUseExtendNativeVanillaConfig = require('./plugins/no-use-extend-native/vanilla.js')
const promiseVanillaConfig = require('./plugins/promise/vanilla.js')
const securityVanillaConfig = require('./plugins/security/vanilla.js')
const simpleImportSortConfig = require('./plugins/simple-import-sort/source-type-module.js')
const sonarJsVanillaConfig = require('./plugins/sonarjs/vanilla.js')
const stylisticVanillaConfig = require('./plugins/stylistic/vanilla-layout.js')
const ternaryVanillaConfig = require('./plugins/ternary/vanilla.js')
const unicornVanillaConfig = require('./plugins/unicorn/vanilla.js')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = mergeConfigs(
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
  promiseVanillaConfig,
  securityVanillaConfig,
  simpleImportSortConfig,
  sonarJsVanillaConfig,
  stylisticVanillaConfig,
  ternaryVanillaConfig,
  unicornVanillaConfig,
)

/* eslint-enable */
