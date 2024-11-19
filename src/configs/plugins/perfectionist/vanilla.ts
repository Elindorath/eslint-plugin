import perfectionistPlugin from 'eslint-plugin-perfectionist'

import { ERROR } from '../../../constants'

import type { ESLint, Linter } from 'eslint'


export const perfectionistVanillaConfig = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    perfectionist: perfectionistPlugin as unknown as ESLint.Plugin,
  },

  settings: {
    perfectionist: {
      type: 'natural',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      locales: 'en-US', // default
    }

    /**
     * All settings:
     * type
     * order
     * ignoreCase
     * ignorePattern
     * specialCharacters
     * locales
     * partitionByComment
     * partitionByNewLine
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

      groupKind: 'spreads-first', // non default
    }],
    'perfectionist/sort-classes': [ERROR, {
      type: 'natural',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      locales: 'en-US', // default
      partitionByComment: [
        'Group',
      ],
      partitionByNewLine: false,

      ignoreCallbackDependenciesPatterns: [], // default
      newlinesBetween: 'always', // default
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
    'perfectionist/sort-decorators': [ERROR, {
      type: 'natural',
      order: 'asc', // default
      specialCharacters: 'keep', // default
      locales: 'en-US', // default
      partitionByComment: false, // default

      ignoreCase: true, // default
      sortOnClasses: true, // default
      sortOnMethods: true, // default
      sortOnProperties: true, // default
      sortOnAccessors: true, // default
      sortOnParameters: true, // default
      groups: [ // default
        'unknown',
      ],
      // TODO: needs to be defined
      customGroups: {},
    }],
    'perfectionist/sort-enums': [ERROR, {
      type: 'natural',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByComment: false,
      partitionByNewLine: false,

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

      groupKind: 'values-first', // non-default
    }],
    'perfectionist/sort-heritage-clauses': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      locales: 'en-US', // default
      groups: [
        'unknown',
      ],
      customGroups: {},
    }],
    // TODO: Need to choose between this rule, the core sort-imports rule, the import/order and prettier-plugin-sort-imports
    'perfectionist/sort-imports': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      locales: 'en-US', // default

      internalPattern: ['~/**'], // default
      sortSideEffects: false, // default
      partitionByComment: false, // default
      partitionByNewLine: false, // default
      newlinesBetween: 'always', // default
      maxLineLength: undefined, // default
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'index',
        'sibling',
        'unknown',
        'builtin-type',
        'external-type',
        'internal-type',
        'parent-type',
        'index-type',
        'sibling-type',
        'type',
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

      newlinesBetween: 'always', // default
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

      newlinesBetween: 'always', // default
      groups: [], // default
    }],
    // TODO: Might clash with the react/jsx-sort-props rule
    'perfectionist/sort-jsx-props': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      ignorePattern: [],

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
    }],
    'perfectionist/sort-modules': [ERROR, {
      type: 'natural',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByComment: false,
      partitionByNewLine: false,

      newlinesBetween: true,
      groups: [
        'declare-enum',
        'export-enum',
        'enum',
        ['declare-interface', 'declare-type'],
        ['export-interface', 'export-type'],
        ['interface', 'type'],
        'declare-class',
        'class',
        'export-class',
        'declare-function',
        'export-function',
        'function',
      ],
      customGroups: [],
    }],
    'perfectionist/sort-named-exports': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByComment: false,
      partitionByNewLine: false,

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
      partitionByNewLine: true,

      newlinesBetween: 'always', // default
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
      partitionByNewLine: true,

      newlinesBetween: 'always', // default
      destructureOnly: false, // default
      styledComponents: true, // default
      groups: [
        'unknown',
        'multiline',
        'method',
      ],
      customGroups: {},
    }],
    'perfectionist/sort-sets': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByNewLine: false,

      groupKind: 'spreads-first',
    }],
    'perfectionist/sort-switch-case': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      locales: 'en-US', // default
    }],
    // TODO: Might clash with the @typescript-eslint/sort-type-constituents rule
    'perfectionist/sort-union-types': [ERROR, {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByNewLine: false,
      partitionByComment: false,

      newlinesBetween: 'always', // default
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
    }],
  },
} satisfies Linter.Config
