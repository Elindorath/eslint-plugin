'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/react-hooks/rules-of-hooks': [ERROR],
    '@elindorath/react-hooks/exhaustive-deps': [ERROR, {
      additionalHooks: '', // Default
      enableDangerousAutofixThisMayCauseInfiniteLoops: false, // Default
    }],
  },
};
