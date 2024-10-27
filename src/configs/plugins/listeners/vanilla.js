'use strict'

const listenersPlugin = require('eslint-plugin-listeners')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    listeners: listenersPlugin,
  },

  rules: {
    'listeners/matching-remove-event-listener': [ERROR],
    'listeners/no-inline-function-event-listener': [ERROR],
    'listeners/no-missing-remove-event-listener': [ERROR],
  },
}
