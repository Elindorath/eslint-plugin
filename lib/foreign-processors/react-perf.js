/**
 * DON'T EDIT THIS FILE WHICH WAS GENERATED BY 'scripts/generate-foreign.js'.
 */

'use strict';

const { processors } = require('eslint-plugin-react-perf');


module.exports = Object.entries(processors || {}).reduce((obj, [processorId, processorDefinition]) => ({
  ...obj,
  [`react-perf/${processorId}`]: processorDefinition,
}), {});
