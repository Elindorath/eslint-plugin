'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    // OFF as in node context, there is no side effect
    '@elindorath/toplevel/no-toplevel-side-effect': [OFF],
  },
};
