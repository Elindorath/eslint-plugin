/**
 * DON'T EDIT THIS FILE WHICH WAS GENERATED BY 'scripts/generate-foreign.js'.
 */

'use strict';

const { environments } = require('eslint-plugin-xss');


module.exports = Object.entries(environments || {}).reduce((obj, [environmentId, environmentDefinition]) => ({
  ...obj,
  [`xss/${environmentId}`]: environmentDefinition,
}), {});
