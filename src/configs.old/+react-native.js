'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  env: {
    '@elindorath/react-native/react-native': true,
  },
  extends: [
    require.resolve('./+react-only'),
    require.resolve('./plugins/react-native/common'),
    require.resolve('./plugins/react-native-a11y/common'),
  ],
};
