/**
 * DON'T EDIT THIS FILE WHICH WAS GENERATED BY 'scripts/generate-foreign.js'.
 */

'use strict';

const { environments } = require('@shopify/eslint-plugin');


module.exports = Object.entries(environments || {}).reduce((obj, [environmentId, environmentDefinition]) => ({
  ...obj,
  [`shopify/${environmentId}`]: environmentDefinition,
}), {});
