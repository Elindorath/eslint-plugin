'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  settings: {
    'import/resolver': {
      node: {},
    },
  },
  rules: {
    /* ----- Helpful warnings ----- */
    // OFF as the plugin doesn't support CommonJS export
    '@elindorath/import/no-unused-modules': [OFF],

    /* ----- Module systems ----- */
    // OFF as we commonjs in node context
    '@elindorath/import/no-commonjs': [OFF, {
      allowRequire: false, // Default
      allowConditionalRequire: true, // Default
      allowPrimitiveModules: false, // Default
    }],
    // OFF as we use node module in node context
    '@elindorath/import/no-nodejs-modules': [OFF, {
      allow: [], // Default
    }],
  },
};
