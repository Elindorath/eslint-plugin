'use strict'

const { mergeConfigs } = require('../utils.js')

const jsxA11yConfig = require('./plugins/jsx-a11y/syntax-jsx.js')
const reactConfig = require('./plugins/react/syntax-jsx.js')
const reactPerfConfig = require('./plugins/react-perf/syntax-jsx.js')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = mergeConfigs(jsxA11yConfig, reactConfig, reactPerfConfig, {
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
})
