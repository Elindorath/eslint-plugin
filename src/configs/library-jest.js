'use strict'

const globals = require('globals')

const { mergeConfigs } = require('../utils.js')

const jestConfig = require('./plugins/jest/library-jest.js')
const jestDomConfig = require('./plugins/jest-dom/library-jest.js')
const jestExtendedConfig = require('./plugins/jest-extended/library-jest.js')
const jestFormattingConfig = require('./plugins/jest-formatting/library-jest.js')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = mergeConfigs(
  jestConfig,
  jestDomConfig,
  jestExtendedConfig,
  jestFormattingConfig,
  {
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
)
