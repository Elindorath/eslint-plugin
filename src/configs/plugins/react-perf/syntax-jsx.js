'use strict';

const reactPerfPlugin = require('eslint-plugin-react-perf');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    'react-perf': reactPerfPlugin,
  },

  rules: {
    'react-perf/jsx-no-new-object-as-prop': [ERROR, {
      nativeAllowList: [], // default
    }],
    'react-perf/jsx-no-new-array-as-prop': [ERROR, {
      nativeAllowList: [], // default
    }],
    'react-perf/jsx-no-new-function-as-prop': [ERROR, {
      nativeAllowList: [], // default
    }],
    'react-perf/jsx-no-jsx-as-prop': [ERROR, {
      nativeAllowList: [], // default
    }],
  },
};
