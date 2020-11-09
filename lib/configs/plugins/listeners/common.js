'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/listeners/no-missing-remove-event-listener': [ERROR],
    '@elindorath/listeners/matching-remove-event-listener': [ERROR],
    '@elindorath/listeners/no-inline-function-event-listener': [ERROR],
  },
};
