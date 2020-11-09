'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    // Might overlap feature from the rule unicorn/better-regex
    '@elindorath/optimize-regex/optimize-regex': [ERROR, {
      whitelist: [],
      blacklist: [],
    }],
  },
};
