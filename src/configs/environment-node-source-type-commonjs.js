'use strict'

const globals = require('globals')

const { mergeConfigs } = require('../utils.js')

const nodeConfig = require('./environment-node.js')
const commonJsConfig = require('./source-type-commonjs.js')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = mergeConfigs(nodeConfig, commonJsConfig, {
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
})
