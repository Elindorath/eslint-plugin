/**
 * DON'T EDIT THIS FILE WHICH WAS GENERATED BY 'scripts/generate-foreign.js'.
 */

'use strict';

const { environments } = require('eslint-plugin-react-native-a11y');


module.exports = Object.entries(environments || {}).reduce((obj, [environmentId, environmentDefinition]) => ({
  ...obj,
  [`react-native-a11y/${environmentId}`]: environmentDefinition,
}), {});
