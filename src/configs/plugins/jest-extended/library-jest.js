'use strict'

const jestExtendedPlugin = require('eslint-plugin-jest-extended')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    'jest-extended': jestExtendedPlugin,
  },

  rules: {
    'jest-extended/prefer-to-be-array': [ERROR],
    'jest-extended/prefer-to-be-false': [ERROR],
    'jest-extended/prefer-to-be-object': [ERROR],
    'jest-extended/prefer-to-be-true': [ERROR],
    'jest-extended/prefer-to-have-been-called-once': [ERROR],
  },
}
