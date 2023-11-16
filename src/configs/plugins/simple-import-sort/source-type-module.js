'use strict'

const { builtinModules } = require('node:module')

const simpleImportSortPlugin = require('eslint-plugin-simple-import-sort')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'


/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    'simple-import-sort': simpleImportSortPlugin,
  },

  rules: {
    'simple-import-sort/imports': [ERROR, {
      groups: [
        // regular import begin
        // builtins
        [`^(${builtinModules.join('|')})(\\/|$)`, '^node:'],
        // externals
        ['^@?\\w'],
        // internals
        // eslint-disable-next-line @stylistic/array-element-newline -- More readable
        ['^common'], ['^models'], ['^hooks'], ['^components'],
        // parents
        ['^\\.\\.(?!\\/?$)', '^\\.\\.\\/?$'],
        // siblings
        ['^\\.\\/(?=.*\\/)(?!\\/?$)', '^\\.(?!\\/?$)', '^\\.\\/?$'],
        // styles
        ['\\.s?css(\\.tsx?)?$'],
        // regular import end

        // side-effects begin
        [
          '^\\u0000@?\\w',
          '^\\u0000common',
          '^\\u0000models',
          '^\\u0000hooks',
          '^\\u0000components',
          '^\\u0000\\.\\.(?!\\/?$)',
          '^\\u0000\\.\\.\\/?$',
          '^\\u0000\\.\\/(?=.*\\/)(?!\\/?$)',
          '^\\u0000\\.(?!\\/?$)',
          '^\\u0000\\.\\/?$',
        ],
        // side-effects end

        // types begin
        // builtins
        [`^(${builtinModules.join('|')})(\\/.*\\u0000$|\\u0000$)`, '^node:.*\\u0000$'],
        // externals
        ['\\w\\u0000$'],
        // internals
        ['^common.*\\u0000$', '^models.*\\u0000$', '^hooks.*\\u0000$', '^components.*\\u0000$'],
        // parents
        ['^\\.\\.\\/.+\\u0000$', '^\\.\\.\\/?\\u0000$'],
        // siblings
        ['^\\.\\/(?=.*\\/)(?!\\/?$).*\\u0000$', '^\\.(?!\\/?$).*\\u0000$', '^\\.\\/?\\u0000$'],
        // types end
      ],
    }],
    'simple-import-sort/exports': [ERROR],
  },
}
