'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    // TODO: Might conflict with the rule import/dynamic-import-chunkname
    '@elindorath/shopify/webpack/no-unnamed-dynamic-imports': [ERROR],
  },
};
