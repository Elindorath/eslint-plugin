'use strict'

const promisePlugin = require('eslint-plugin-promise')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    promise: promisePlugin,
  },

  rules: {
    'promise/always-return': [ERROR],
    // Might be turned OFF
    'promise/avoid-new': [ERROR],
    'promise/catch-or-return': [ERROR, {
      allowThen: false, // default
      allowFinally: true,
      terminationMethod: '', // default
    }],
    'promise/no-callback-in-promise': [ERROR, {
      exceptions: [], // default
    }],
    'promise/no-multiple-resolved': [ERROR],
    // OFF as we prefer to use the native implementation of Promise
    'promise/no-native': [OFF],
    'promise/no-nesting': [ERROR],
    'promise/no-new-statics': [ERROR],
    'promise/no-promise-in-callback': [ERROR],
    'promise/no-return-in-finally': [ERROR],
    'promise/no-return-wrap': [ERROR, {
      allowReject: false, // default
    }],
    'promise/param-names': [ERROR, {
      resolvePattern: '^_?resolve$', // default
      rejectPattern: '^_?reject$', // default
    }],
    'promise/prefer-await-to-callbacks': [ERROR],
    'promise/prefer-await-to-then': [ERROR],
    // Might be disabled in Typescript projects as it already warn about this
    'promise/valid-params': [ERROR],
  },
}
