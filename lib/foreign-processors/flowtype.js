/**
 * DON'T EDIT THIS FILE WHICH WAS GENERATED BY 'scripts/generate-foreign.js'.
 */

'use strict';

const { processors } = require('eslint-plugin-flowtype');


module.exports = Object.entries(processors || {}).reduce((obj, [processorId, processorDefinition]) => ({
  ...obj,
  [`flowtype/${processorId}`]: processorDefinition,
}), {});
