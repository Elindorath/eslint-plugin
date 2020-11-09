'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/unicorn/prefer-add-event-listener': [ERROR, {
      excludedPackages: ['koa', 'sax'], // Default
    }],
    '@elindorath/unicorn/prefer-dataset': [ERROR],
    '@elindorath/unicorn/prefer-event-key': [ERROR],
    '@elindorath/unicorn/prefer-modern-dom-apis': [ERROR],
    '@elindorath/unicorn/prefer-node-append': [ERROR],
    '@elindorath/unicorn/prefer-node-remove': [ERROR],
    '@elindorath/unicorn/prefer-query-selector': [ERROR],
  },
};
