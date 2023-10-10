'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/toplevel/no-toplevel-var': [ERROR],
    '@elindorath/toplevel/no-toplevel-let': [ERROR],
    // OFF as it is too hard to respect it
    // TODO: Should ideally be ERROR
    '@elindorath/toplevel/no-toplevel-side-effect': [OFF],
  },
};
