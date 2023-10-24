'use strict'

const { mergeConfigs } = require('../../utils.js')
const jsonFilesConfig = require('../plugins/json-files/vanilla.js')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {Array<import('eslint').Linter.FlatConfig>} */
module.exports = mergeConfigs(jsonFilesConfig, {
  files: ['**/package.json'],
})
