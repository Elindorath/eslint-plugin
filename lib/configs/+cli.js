'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  extends: [
    require.resolve('./plugins/n/+cli'),
    require.resolve('./plugins/unicorn/+cli'),
  ],
  rules: {
    'no-console': [OFF],
    '@elindorath/n/prefer-global/console': [OFF],
    '@elindorath/import/no-extraneous-dependencies': [ERROR, {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false, // Default
      bundledDependencies: false,
    }],
  },
};
