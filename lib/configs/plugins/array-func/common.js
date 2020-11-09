/* eslint-disable @elindorath/unicorn/prevent-abbreviations -- This is the name of the plugin */

'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/array-func/from-map': [ERROR],
    '@elindorath/array-func/no-unnecessary-this-arg': [ERROR],
    // OFF as it conflicts with the rule unicorn/prefer-spread
    '@elindorath/array-func/prefer-array-from': [OFF],
    '@elindorath/array-func/avoid-reverse': [ERROR],
    '@elindorath/array-func/prefer-flat-map': [ERROR],
    '@elindorath/array-func/prefer-flat': [ERROR],
  },
};

/* eslint-enable @elindorath/unicorn/prevent-abbreviations */
