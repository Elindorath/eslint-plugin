'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    // OFF as we override the global native object Promise by bluebird a lot
    // TODO: Make a PR to the plugin to allow extending specific native objects
    '@elindorath/no-use-extend-native/no-use-extend-native': [OFF],
  },
};
