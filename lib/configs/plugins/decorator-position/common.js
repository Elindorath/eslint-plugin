'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  parser: '@babel/eslint-parser',
  rules: {
    '@elindorath/decorator-position/decorator-position': [ERROR, {
      printWidth: 20,
      properties: 'prefer-inline', // Default
      methods: 'above', // Default
      overrides: {},
    }],
  },
};
