'use strict'

const ternaryPlugin = require('eslint-plugin-ternary')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    ternary: ternaryPlugin,
  },

  rules: {
    'ternary/no-dupe': [ERROR],
    // OFF as it reports false positive
    // See: https://github.com/GrayedFox/eslint-plugin-ternary/issues/9
    'ternary/no-unreachable': [OFF, {
      allowDuplicateOrConditions: false,
    }],
    // Conflicts with unicorn/no-nested-ternary
    // OFF as we don't want to nest ternary
    'ternary/nesting': [OFF, {
      test: false, // default
      consequent: true, // default
      alternate: true, // default
      depth: 1, // default
    }],
  },
}
