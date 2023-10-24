'use strict';

const { mergeConfigs } = require('../../utils.js');
const nodeCommonJsConfig = require('../environment-node-source-type-commonjs.js')
const vanillaConfig = require('../vanilla.js')


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {Array<import('eslint').Linter.FlatConfig>} */
module.exports = mergeConfigs(vanillaConfig, nodeCommonJsConfig, {
  files: ['**/scripts/**'],
  rules: {
    // OFF as we use it often in dev script tools
    'no-console': [OFF, {
      allow: [''], // default
    }],
    // OFF as we need shebang to execute scripts
    'n/shebang': [OFF],
    // OFF as we need to import devDependencies
    'import/no-extraneous-dependencies': [OFF, {
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false, // default
      bundledDependencies: false,
      includeInternal: true,
      includeTypes: true,
    }],
  },
})
