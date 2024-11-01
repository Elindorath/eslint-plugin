'use strict'

const perfectionistPlugin = require('eslint-plugin-perfectionist')

const { ERROR } = require('../../../constants.js')


/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    perfectionist: perfectionistPlugin,
  },

  settings: {
    type: 'natural',
    order: 'asc',
    ignoreCase: true,
    specialCharacters: 'keep',
    matcher: 'minimatch', // default

    /**
     * All settings:
     * type
     * order
     * ignoreCase
     * ignorePattern
     * specialCharacters
     * partitionByComment
     * partitionByNewLine
     * matcher
     */
  },

  rules: {
    'perfectionist/sort-array-includes': [ERROR, {
      type: 'natural',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByComment: [
        'Group',
      ],
      partitionByNewLine: false,
      matcher: 'minimatch',

      groupKind: 'spreads-first', // non default
    }],
    'perfectionist/sort-classes': [ERROR, {
      type: 'natural',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByComment: [
        'Group',
      ],
      matcher: 'minimatch',

      groups: [ // default
        'index-signature',
        'static-property',
        'static-block',
        ['protected-property', 'protected-accessor-property'],
        ['private-property', 'private-accessor-property'],
        ['property', 'accessor-property'],
        'constructor',
        'static-method',
        'protected-method',
        'private-method',
        'method',
        ['get-method', 'set-method'],
        'unknown',
      ],
      customGroups: [], // default
    }],
    'perfectionist/sort-enums': [ERROR, {
      type: 'natural',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByComment: false,
      partitionByNewLine: false,
      matcher: 'minimatch',

      sortByValue: false, // default
      forceNumericSort: false, // default
    }],
    'perfectionist/sort-exports': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByComment: false,
      partitionByNewLine: false,
      matcher: 'minimatch',

      groupKind: 'values-first', // non-default
    }],
    // TODO: Need to choose between this rule, the core sort-imports rule, the import/order and prettier-plugin-sort-imports
    'perfectionist/sort-imports': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      matcher: 'minimatch',

      internalPattern: ['~/**'], // default
      sortSideEffects: false, // default
      newlinesBetween: 'always', // default
      maxLineLength: undefined, // default
      groups: [ // default
        'type',
        ['builtin', 'external'],
        'internal-type',
        'internal',
        ['parent-type', 'sibling-type', 'index-type'],
        ['parent', 'sibling', 'index'],
        'object',
        'unknown',
      ],
      customGroups: { type: {}, value: {} }, // default
      environment: 'node', // default
    }],
    // TODO: Might clash with the @typescript-eslint/adjacent-overload-signatures
    'perfectionist/sort-interfaces': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      ignorePattern: [],
      partitionByComment: false,
      partitionByNewLine: false,
      matcher: 'minimatch',

      groupKind: 'required-first',
      groups: [],
      customGroups: {},
    }],
    // TODO: Might clash with the @typescript-eslint/sort-type-constituents rule
    'perfectionist/sort-intersection-types': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByComment: false,
      partitionByNewLine: false,
      matcher: 'minimatch',

      groups: [], // default
    }],
    // TODO: Might clash with the react/jsx-sort-props rule
    'perfectionist/sort-jsx-props': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      ignorePattern: [],
      matcher: 'minimatch',

      groups: [], // default
      customGroups: {}, // default
    }],
    'perfectionist/sort-maps': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByComment: false,
      partitionByNewLine: false,
      matcher: 'minimatch',
    }],
    'perfectionist/sort-named-exports': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByComment: false,
      partitionByNewLine: false,
      matcher: 'minimatch',

      groupKind: 'values-first',
    }],
    // TODO: Might clash with the sort-imports core rule
    'perfectionist/sort-named-imports': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByComment: false,
      partitionByNewLine: false,
      matcher: 'minimatch',

      ignoreAlias: true,
      groupKind: 'values-first',
    }],
    // TODO: Might clash with the @typescript-eslint/adjacent-overload-signatures rule
    'perfectionist/sort-object-types': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByComment: false,
      partitionByNewLine: false,
      matcher: 'minimatch',

      groupKind: 'required-first',
      groups: [],
      customGroups: {},
    }],
    // TODO: Might clash with the sort-keys core rule
    'perfectionist/sort-objects': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      ignorePattern: [],
      partitionByComment: false,
      partitionByNewLine: false,
      matcher: 'minimatch',

      destructureOnly: false, // default
      styledComponents: true, // default
      groups: [],
      customGroups: {},
    }],
    'perfectionist/sort-sets': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByNewLine: false,
      matcher: 'minimatch',

      groupKind: 'spreads-first',
    }],
    'perfectionist/sort-switch-case': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
    }],
    // TODO: Might clash with the @typescript-eslint/sort-type-constituents rule
    'perfectionist/sort-union-types': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByNewLine: false,
      partitionByComment: false,
      matcher: 'minimatch',

      groups: [],
    }],
    // TODO: Might be OFF
    'perfectionist/sort-variable-declarations': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByNewLine: false,
      partitionByComment: false,
      matcher: 'minimatch',
    }],
  },
}
