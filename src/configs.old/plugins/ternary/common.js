'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/ternary/no-dupe': [ERROR],
    '@elindorath/ternary/no-unreachable': [ERROR, {
      allowDuplicateOrConditions: false,
    }],
    // Conflict with unicorn/no-nested-ternary
    // OFF as we don't want to nest ternary
    '@elindorath/ternary/nesting': [OFF, {
      test: false, // Default
      consequent: true, // Default
      alternate: true, // Default
      depth: 1, // Default
    }],
  },
};
