'use strict'

const xssPlugin = require('eslint-plugin-xss')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    xss: xssPlugin,
  },

  rules: {
    'xss/no-mixed-html': [ERROR, {
      htmlVariableRules: ['AsHtml', 'HtmlEncoded/i', '^html$'],
      htmlFunctionRules: ['.asHtml/i', 'toHtml'],
      functions: {
        $: {
          htmlInput: true,
          safe: ['document', 'this'],
        },
        '.html': {
          htmlInput: true,
          htmlOutput: true,
        },
        '.join': {
          passthrough: { obj: true, args: true },
        },
      },
    }],
    'xss/no-location-href-assign': [ERROR, {
      escapeFunc: 'encodeURI',
    }],
  },
}
