'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    // OFF as it conflicts with the rule unicorn/filename-case
    '@elindorath/filenames/match-regex': [OFF, /^[\da-z]+[A-Z]?[\da-z]*$/gu], // Default
    // OFF as it doesn't support PascalCase
    '@elindorath/filenames/match-exported': [OFF, ['camel']],
    // OFF as it prevent to organized packages nicely
    '@elindorath/filenames/no-index': [OFF],
  },
};
