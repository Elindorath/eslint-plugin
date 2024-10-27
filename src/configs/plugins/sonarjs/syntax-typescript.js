'use strict'

const sonarJsPlugin = require('eslint-plugin-sonarjs')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    sonarjs: sonarJsPlugin,
  },

  rules: {
    'sonarjs/no-ignored-return': [ERROR],
  },
}
