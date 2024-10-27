'use strict'

const { mergeConfigs } = require('../utils.js')

const reactConfig = require('./plugins/react/library-react.js')
const reactHooksConfig = require('./plugins/react-hooks/library-react.js')
const unicornReactConfig = require('./plugins/unicorn/library-react.js')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = mergeConfigs(reactConfig, reactHooksConfig, unicornReactConfig)
