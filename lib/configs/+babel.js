'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    require.resolve('./plugins/babel/common'),
    require.resolve('./plugins/decorator-position/common'),
    require.resolve('./plugins/flowtype/common'),
  ],
};
