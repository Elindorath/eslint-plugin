/**
 * DON'T EDIT THIS FILE WHICH WAS GENERATED BY 'scripts/generate-foreign.js'.
 */

'use strict';

const { rules } = require('eslint-plugin-n');


module.exports = Object.entries(rules || {}).reduce((prefixedRules, [ruleId, ruleDefinition]) => ({
  ...prefixedRules,
  [`n/${ruleId}`]: ruleDefinition,
}), {});