'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    require.resolve('./+react-only'),
    require.resolve('./+browser'),
  ],
};
