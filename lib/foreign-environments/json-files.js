/**
 * DON'T EDIT THIS FILE WHICH WAS GENERATED BY 'scripts/generate-foreign.js'.
 */

'use strict';

const { environments } = require('eslint-plugin-json-files');


module.exports = Object.entries(environments || {}).reduce((obj, [environmentId, environmentDefinition]) => ({
  ...obj,
  [`json-files/${environmentId}`]: environmentDefinition,
}), {});
