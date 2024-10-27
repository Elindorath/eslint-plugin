'use strict'

const globals = require('globals')

const { mergeConfigs } = require('../../utils.js')
const reactJsxConfig = require('../library-react&syntax-jsx.js')
const reactNativeJsxConfig = require('../library-react-native&syntax-jsx.js')
const overrideEslintConfig = require('../overrides/eslint-config.js')
const overrideJestTestsConfig = require('../overrides/jest-tests.js')
const typescriptConfig = require('../syntax-typescript.js')
const vanillaConfig = require('../vanilla.js')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {Array<import('eslint').Linter.Config>} */
module.exports = [
  mergeConfigs(
    vanillaConfig,
    reactJsxConfig,
    reactNativeJsxConfig,
    typescriptConfig,
    {
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        globals: {
          ...globals.browser,
        },
      },
    },
  ),
  overrideEslintConfig,
  overrideJestTestsConfig,
]
