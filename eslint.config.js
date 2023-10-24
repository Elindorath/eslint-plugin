'use strict'

const elindorathPlugin = require('./src/index.js')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

module.exports = (() => /** @type {Array<import('eslint').Linter.FlatConfig>} */ elindorathPlugin.configs['project-eslint-plugin'])()
