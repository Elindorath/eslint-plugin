'use strict'

const reactHooksPlugin = require('eslint-plugin-react-hooks')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'


/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    'react-hooks': reactHooksPlugin,
  },

  rules: {
    'react-hooks/rules-of-hooks': [ERROR],
    // TODO: 'additionalHooks' should be configured on a per project basis
    'react-hooks/exhaustive-deps': [ERROR, {
      additionalHooks: '', // default
      enableDangerousAutofixThisMayCauseInfiniteLoops: false, // default
    }],
  },
}
