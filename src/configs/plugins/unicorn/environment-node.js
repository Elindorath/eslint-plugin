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
    'unicorn/prefer-node-protocol': [ERROR],
  },
};
