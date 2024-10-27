'use strict'

const sonarJsPlugin = require('eslint-plugin-sonarjs')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

const MAX_COGNITIVE_COMPLEXITY = 15
const MAX_SWITCH_CASES = 30
const MIN_FUNCTION_BODY_LINE_COUNT = 3

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    sonarjs: sonarJsPlugin,
  },

  rules: {
    'sonarjs/cognitive-complexity': [ERROR, MAX_COGNITIVE_COMPLEXITY], // default
    'sonarjs/elseif-without-else': [ERROR],
    'sonarjs/max-switch-cases': [ERROR, MAX_SWITCH_CASES], // default
    'sonarjs/no-all-duplicated-branches': [ERROR],
    'sonarjs/no-collapsible-if': [ERROR],
    'sonarjs/no-collection-size-mischeck': [ERROR],
    'sonarjs/no-duplicate-string': [ERROR, {
      threshold: 2,
      ignoreStrings: 'application/json', // default
    }],
    'sonarjs/no-duplicated-branches': [ERROR],
    'sonarjs/no-element-overwrite': [ERROR],
    'sonarjs/no-empty-collection': [ERROR],
    // Might be turned OFF in Typescript projects as it already enforce this
    'sonarjs/no-extra-arguments': [ERROR],
    'sonarjs/no-gratuitous-expressions': [ERROR],
    'sonarjs/no-identical-conditions': [ERROR],
    'sonarjs/no-identical-expressions': [ERROR],
    'sonarjs/no-identical-functions': [ERROR, MIN_FUNCTION_BODY_LINE_COUNT],
    // OFF as it requires Typescript
    'sonarjs/no-ignored-return': [OFF],
    'sonarjs/no-inverted-boolean-check': [ERROR],
    'sonarjs/no-nested-switch': [ERROR],
    'sonarjs/no-one-iteration-loop': [ERROR],
    'sonarjs/no-redundant-boolean': [ERROR],
    'sonarjs/no-redundant-jump': [ERROR],
    'sonarjs/no-same-line-conditional': [ERROR],
    'sonarjs/no-small-switch': [ERROR],
    'sonarjs/no-unused-collection': [ERROR],
    'sonarjs/no-use-of-empty-return-value': [ERROR],
    'sonarjs/no-useless-catch': [ERROR],
    'sonarjs/non-existent-operator': [ERROR],
    'sonarjs/prefer-immediate-return': [ERROR],
    'sonarjs/prefer-object-literal': [ERROR],
    'sonarjs/prefer-single-boolean-return': [ERROR],
    'sonarjs/prefer-while': [ERROR],
  },
}
