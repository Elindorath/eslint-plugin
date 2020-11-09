'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/shopify/jest/no-all-mocks-methods': [ERROR],
    // OFF as we use jest snapshots
    '@elindorath/shopify/jest/no-snapshots': [OFF],
  },
};
