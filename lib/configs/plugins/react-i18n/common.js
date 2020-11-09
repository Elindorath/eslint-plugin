/* eslint-disable @elindorath/unicorn/prevent-abbreviations -- False positive */

'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


const functionNames = ['t']; // Default


module.exports = {
  rules: {
    '@elindorath/react-i18n/no-dynamic-translation-keys': [ERROR, {
      functionNames,
    }],
    '@elindorath/react-i18n/no-missing-interpolation-keys': [ERROR, {
      functionNames,
      prefix: '{{', // Default
      suffix: '}}', // Default
    }],
  },
};

/* eslint-enable @elindorath/unicorn/prevent-abbreviations */
