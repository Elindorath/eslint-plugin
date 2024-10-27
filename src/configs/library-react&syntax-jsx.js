'use strict'

const { mergeConfigs } = require('../utils.js')

const reactConfig = require('./library-react.js')
const jsxConfig = require('./syntax-jsx.js')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = mergeConfigs(reactConfig, jsxConfig)
