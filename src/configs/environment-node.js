'use strict'

const globals = require('globals')

const { mergeConfigs } = require('../utils.js')

const nNodeConfig = require('./plugins/n/environment-node.js')
const unicornNodeConfig = require('./plugins/unicorn/environment-node.js')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = mergeConfigs(nNodeConfig, unicornNodeConfig, {
  languageOptions: {
    globals: {
      ...globals.nodeBuiltin,
    },
  },
})
