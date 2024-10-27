'use strict'

const { mergeConfigs } = require('../utils.js')

const jestConfig = require('./library-jest.js')
const jestTypescriptConfig = require('./plugins/jest/library-jest&syntax-typescript.js')
const typescriptConfig = require('./syntax-typescript.js')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = mergeConfigs(
  typescriptConfig,
  jestConfig,
  jestTypescriptConfig,
)
