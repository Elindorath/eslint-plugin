'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    // OFF as it is not supported in CommonJS context
    '@elindorath/shopify/prefer-module-scope-constants': [OFF],
  },
};
