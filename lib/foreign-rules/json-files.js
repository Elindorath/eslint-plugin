/**
 * DON'T EDIT THIS FILE WHICH WAS GENERATED BY 'scripts/generate-foreign.js'.
 */

'use strict';

const { rules } = require('eslint-plugin-json-files');


module.exports = Object.entries(rules || {}).reduce((obj, [ruleId, ruleDefinition]) => ({
  ...obj,
  [`json-files/${ruleId}`]: ruleDefinition,
}), {});
