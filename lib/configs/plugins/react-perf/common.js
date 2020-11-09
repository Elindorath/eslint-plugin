'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/react-perf/jsx-no-new-object-as-prop': [ERROR, {
      nativeAllowList: [], // Default
    }],
    '@elindorath/react-perf/jsx-no-new-array-as-prop': [ERROR, {
      nativeAllowList: [], // Default
    }],
    '@elindorath/react-perf/jsx-no-new-function-as-prop': [ERROR, {
      nativeAllowList: [], // Default
    }],
    '@elindorath/react-perf/jsx-no-jsx-as-prop': [ERROR, {
      nativeAllowList: [], // Default
    }],
  },
};
