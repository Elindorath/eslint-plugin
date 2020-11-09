'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  parserOptions: {
    ecmaVersion: 12,
  },
  env: {
    es2021: true,
  },
  extends: [
    require.resolve('./plugins/array-func/common'),
    require.resolve('./plugins/core/common'),
    require.resolve('./plugins/eslint-comments/common'),
    require.resolve('./plugins/filenames/common'),
    require.resolve('./plugins/mysticatea/common'),
    require.resolve('./plugins/no-constructor-bind/common'),
    require.resolve('./plugins/no-secrets/common'),
    require.resolve('./plugins/no-use-extend-native/common'),
    require.resolve('./plugins/optimize-regex/common'),
    require.resolve('./plugins/perf-standard/common'),
    require.resolve('./plugins/promise/common'),
    require.resolve('./plugins/sonarjs/common'),
    require.resolve('./plugins/sort-class-members/common'),
    require.resolve('./plugins/switch-case/common'),
    require.resolve('./plugins/ternary/common'),
    require.resolve('./plugins/toplevel/common'),
    require.resolve('./plugins/import/common'),
    require.resolve('./plugins/shopify/common'),
    require.resolve('./plugins/unicorn/common'),
  ],
};
