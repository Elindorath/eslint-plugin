'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/switch-case/no-case-curly': [ERROR],
    '@elindorath/switch-case/newline-between-switch-case': [ERROR, 'always', {
      fallthrough: 'never',
    }],
  },
};
