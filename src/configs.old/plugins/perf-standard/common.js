'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/perf-standard/no-instanceof-guard': [ERROR],
    '@elindorath/perf-standard/no-self-in-constructor': [ERROR],
    // OFF as it is too restrictive
    '@elindorath/perf-standard/check-function-inline': [OFF],
    // OFF as we use array iterators
    '@elindorath/perf-standard/no-array-iterators': [OFF],
  },
};
