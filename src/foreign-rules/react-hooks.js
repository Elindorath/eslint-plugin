/**
 * DON'T EDIT THIS FILE WHICH WAS GENERATED BY 'scripts/generate-foreign.js'.
 */

'use strict';

const { rules } = require('eslint-plugin-react-hooks');


module.exports = Object.entries(rules || {}).reduce((obj, [ruleId, ruleDefinition]) => ({
  ...obj,
  [`react-hooks/${ruleId}`]: ruleDefinition,
}), {});