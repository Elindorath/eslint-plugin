/**
 * DON'T EDIT THIS FILE WHICH WAS GENERATED BY 'scripts/generate-foreign.js'.
 */

'use strict';

const { processors } = require('eslint-plugin-sonarjs');


module.exports = Object.entries(processors || {}).reduce((obj, [processorId, processorDefinition]) => ({
  ...obj,
  [`sonarjs/${processorId}`]: processorDefinition,
}), {});