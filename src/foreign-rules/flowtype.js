/**
 * DON'T EDIT THIS FILE WHICH WAS GENERATED BY 'scripts/generate-foreign.js'.
 */

'use strict';

const { rules } = require('eslint-plugin-flowtype');


module.exports = Object.entries(rules || {}).reduce((obj, [ruleId, ruleDefinition]) => ({
  ...obj,
  [`flowtype/${ruleId}`]: ruleDefinition,
}), {});