/**
 * DON'T EDIT THIS FILE WHICH WAS GENERATED BY 'scripts/generate-foreign.js'.
 */

'use strict';

const { environments } = require('eslint-plugin-node');


module.exports = Object.entries(environments || {}).reduce((obj, [environmentId, environmentDefinition]) => ({
  ...obj,
  [`node/${environmentId}`]: environmentDefinition,
}), {});