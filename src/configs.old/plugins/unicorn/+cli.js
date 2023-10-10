'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    // OFF to allow `const { argv: [,, ...args] } = process;`
    '@elindorath/unicorn/no-unreadable-array-destructuring': [OFF],
  },
};
