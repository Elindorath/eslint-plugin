'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/promise/catch-or-return': [ERROR, {
      allowThen: false, // Default
      allowFinally: true,
      terminationMethod: '', // Default
    }],
    '@elindorath/promise/no-return-wrap': [ERROR, {
      allowReject: false, // Default
    }],
    '@elindorath/promise/param-names': [ERROR],
    '@elindorath/promise/always-return': [ERROR],
    '@elindorath/promise/no-native': [ERROR],
    '@elindorath/promise/no-nesting': [ERROR],
    '@elindorath/promise/no-promise-in-callback': [ERROR],
    '@elindorath/promise/no-callback-in-promise': [ERROR],
    '@elindorath/promise/avoid-new': [ERROR],
    '@elindorath/promise/no-new-statics': [ERROR],
    '@elindorath/promise/no-return-in-finally': [ERROR],
    '@elindorath/promise/valid-params': [ERROR],
    '@elindorath/promise/prefer-await-to-then': [ERROR],
    '@elindorath/promise/prefer-await-to-callbacks': [ERROR],
  },
};
