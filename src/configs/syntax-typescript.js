'use strict'

const { mergeConfigs } = require('../utils.js')

const importTypescriptConfig = require('./plugins/import/syntax-typescript.js')
const sonarjsTypescriptConfig = require('./plugins/sonarjs/syntax-typescript.js')
const typescriptConfig = require('./plugins/typescript/syntax-typescript.js')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = mergeConfigs(typescriptConfig, importTypescriptConfig, sonarjsTypescriptConfig)
