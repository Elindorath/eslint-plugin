'use strict';

const unicornPlugin = require('eslint-plugin-unicorn');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/no-document-cookie': [ERROR],
    'unicorn/no-invalid-remove-event-listener': [ERROR],
    'unicorn/prefer-blob-reading-methods': [ERROR],
    'unicorn/prefer-dom-node-append': [ERROR],
    'unicorn/prefer-dom-node-dataset': [ERROR],
    'unicorn/prefer-dom-node-remove': [ERROR],
    'unicorn/prefer-dom-node-text-content': [ERROR],
    'unicorn/prefer-keyboard-event-key': [ERROR],
    'unicorn/prefer-modern-dom-apis': [ERROR],
    'unicorn/prefer-query-selector': [ERROR],
    'unicorn/require-post-message-target-origin': [ERROR],
  },
};
