'use strict'

const { mergeConfigs } = require('../../utils.js')
const jsonConfig = require('../plugins/jsonc/syntax-json5.js')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {Array<import('eslint').Linter.Config>} */
module.exports = mergeConfigs(jsonConfig, {
  files: ['**/*.json5'],
})
