'use strict';

const { getRuleConfig } = require('../../../utils.js');
const baseConfig = require('../core/common.js');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const ALWAYS_MULTILINE = 'always-multiline';


module.exports = {
  parser: '@babel/eslint-parser',
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    '@elindorath/flowtype/array-style-complex-type': [ERROR, 'verbose'], // Default
    '@elindorath/flowtype/array-style-simple-type': [ERROR, 'verbose'], // Default
    '@elindorath/flowtype/arrow-parens': [ERROR, 'always', {
      requireForBlockBody: false, // Default
    }],
    '@elindorath/flowtype/boolean-style': [ERROR, 'boolean'], // Default
    '@elindorath/flowtype/define-flow-type': [ERROR],
    // Related to comma-dangle
    '@elindorath/flowtype/delimiter-dangle': [ERROR, ALWAYS_MULTILINE, ALWAYS_MULTILINE, ALWAYS_MULTILINE],
    '@elindorath/flowtype/generic-spacing': [ERROR, 'never'],
    '@elindorath/flowtype/newline-after-flow-annotation': [ERROR, 'always'],
    '@elindorath/flowtype/no-dupe-keys': [ERROR],
    '@elindorath/flowtype/no-existential-type': [ERROR],
    // WARN only to fix it over time
    '@elindorath/flowtype/no-flow-fix-me-comments': [WARN],
    '@elindorath/flowtype/no-mixed': [ERROR],
    // Might be an issue to store an array of refs
    '@elindorath/flowtype/no-mutable-array': [ERROR],
    '@elindorath/flowtype/no-primitive-constructor-types': [ERROR],
    '@elindorath/flowtype/no-types-missing-file-annotation': [ERROR],
    // Supersed no-unused-expressions
    '@elindorath/flowtype/no-unused-expressions': getRuleConfig('no-unused-expressions', baseConfig),
    '@elindorath/flowtype/no-weak-types': [ERROR, {
      any: true, // Default
      Object: true, // Default
      Function: true, // Default
    }],
    '@elindorath/flowtype/object-type-delimiter': [ERROR, 'comma'], // Default
    '@elindorath/flowtype/require-compound-type-alias': [ERROR, 'always'], // Default
    '@elindorath/flowtype/require-exact-type': [ERROR, 'always'], // Default
    // Might be problematic to declare generic object type
    '@elindorath/flowtype/require-indexer-name': [ERROR, 'always'],
    '@elindorath/flowtype/require-inexact-type': [ERROR, 'always'],
    '@elindorath/flowtype/require-parameter-type': [ERROR, {
      excludeArrowFunctions: false, // Default
      excludeParameterMatch: '^_$',
    }],
    '@elindorath/flowtype/require-readonly-react-props': [ERROR],
    '@elindorath/flowtype/require-return-type': [ERROR, 'always', {
      excludeArrowFunctions: 'expressionsOnly',
      annotateUndefined: 'always',
      excludeMatching: ['constructor'],
    }],
    '@elindorath/flowtype/require-types-at-top': [ERROR, 'always'],
    '@elindorath/flowtype/require-valid-file-annotation': [ERROR, 'always', {
      annotationStyle: 'line',
      strict: false, // Default
    }],
    '@elindorath/flowtype/require-variable-type': [ERROR, {
      excludeVariableMatch: 'a^', // Default
      excludeVariableTypes: {
        var: false, // Default
        let: false, // Default
        const: false, // Default
      },
    }],
    '@elindorath/flowtype/semi': [ERROR, 'always'],
    // OFF as it is a nightmare to maintain for little benefit
    '@elindorath/flowtype/sort-keys': [OFF, 'asc', {
      caseSensitive: false,
      natural: true,
    }],
    '@elindorath/flowtype/space-after-type-colon': [ERROR, 'always', {
      allowLineBreak: false,
    }],
    '@elindorath/flowtype/space-before-generic-bracket': [ERROR, 'never'],
    '@elindorath/flowtype/space-before-type-colon': [ERROR, 'never'],
    '@elindorath/flowtype/spread-exact-type': [ERROR],
    // Start with an uppercase, in pascal case, without ending by `Type`
    '@elindorath/flowtype/type-id-match': [ERROR, '/^(?:[A-Z][a-z0-9]*)+(?<!Type)$/'],
    '@elindorath/flowtype/type-import-style': [ERROR, 'declaration', {
      ignoreTypeDefault: false, // Default
    }],
    '@elindorath/flowtype/union-intersection-spacing': [ERROR, 'always'],
    // Prevent conflict with the core rule no-unused-vars
    '@elindorath/flowtype/use-flow-type': [ERROR],
  },
};
