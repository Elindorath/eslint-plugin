import perfectionistPlugin from 'eslint-plugin-perfectionist'

import { ERROR, OFF } from '../../../constants.ts'

import type { ESLint, Linter } from 'eslint'


const VALUES_FIRST = 'values-first'

export const perfectionistVanillaConfig = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    perfectionist: perfectionistPlugin as ESLint.Plugin,
  },

  settings: {
    perfectionist: {
      ignoreCase: true,
      ignorePattern: [],
      locales: 'en-US',
      order: 'asc',
      partitionByComment: [
        '^Group.+',
        '^----- [^-]+ -----$',
      ],
      partitionByNewLine: false,
      specialCharacters: 'keep',
      // Configured value
      type: 'natural',
    },

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

  /* ----- Rules ----- */
  rules: {
    /**
     * Other option objects can be defined with the following additional key:
     * useConfigurationIf: {
     *   allNamesMatchPattern: 'regex',
     * }
     */
    'perfectionist/sort-array-includes': [ERROR, {
      customGroups: [],
      // Configured value
      groups: [
        'spread',
        'literal',
      ],
    }],
    'perfectionist/sort-classes': [ERROR, {
      customGroups: [],
      groups: [
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
      ignoreCallbackDependenciesPatterns: [],
      // Configured value
      newlinesBetween: 'always',
    }],
    'perfectionist/sort-decorators': [ERROR, {
      // TODO: needs to be defined
      customGroups: {},
      groups: [
        'unknown',
      ],
      sortOnAccessors: true,
      sortOnClasses: true,
      sortOnMethods: true,
      sortOnParameters: true,
      sortOnProperties: true,
    }],
    'perfectionist/sort-enums': [ERROR, {
      forceNumericSort: false,
      sortByValue: false,
    }],
    'perfectionist/sort-exports': [ERROR, {
      // Configured value
      groupKind: VALUES_FIRST,
    }],
    'perfectionist/sort-heritage-clauses': [ERROR, {
      customGroups: {},
      groups: [
        'unknown',
      ],
    }],
    // TODO: Need to choose between this rule, the core sort-imports rule, the import/order and prettier-plugin-sort-imports
    'sort-imports': [OFF],
    // eslint-disable-next-line perfectionist/sort-objects -- To keep consistency
    'perfectionist/sort-imports': [ERROR, {
      customGroups: { type: {}, value: {} },
      environment: 'node',
      // Configured value
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
        'style',
      ],
      internalPattern: ['^~/.*'],
      maxLineLength: undefined,
      newlinesBetween: 'always',
      sortSideEffects: false,
    }],

    /**
     * Other option objects can be defined with the following additional key:
     * useConfigurationIf: {
     *   allNamesMatchPattern: 'regex',
     *   declarationMatchesPattern: 'regex',
     * }
     */
    // TODO: Might clash with the @typescript-eslint/adjacent-overload-signatures
    'perfectionist/sort-interfaces': [ERROR, {
      customGroups: {},
      // Configured value
      groups: [
        'required',
        'optional',
        'unknown',
      ],
      newlinesBetween: 'ignore',
    }],
    // TODO: Might clash with the @typescript-eslint/sort-type-constituents rule
    'perfectionist/sort-intersection-types': [ERROR, {
      groups: [],
      newlinesBetween: 'ignore',
    }],
    // TODO: Might clash with the react/jsx-sort-props rule
    'perfectionist/sort-jsx-props': [ERROR, {
      customGroups: {},
      groups: [],
    }],
    'perfectionist/sort-maps': [ERROR],
    'perfectionist/sort-modules': [ERROR, {
      customGroups: [],
      // Configured value
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
      newlinesBetween: 'ignore',
    }],
    'perfectionist/sort-named-exports': [ERROR, {
      // Configured value
      groupKind: VALUES_FIRST,
    }],
    // TODO: Might clash with the sort-imports core rule
    'perfectionist/sort-named-imports': [ERROR, {
      // Configured value
      groupKind: VALUES_FIRST,
      ignoreAlias: true,
    }],

    /**
     * Other option objects can be defined with the following additional key:
     * useConfigurationIf: {
     *   allNamesMatchPattern: 'regex',
     *   declarationMatchesPattern: 'regex',
     * }
     */
    // TODO: Might clash with the @typescript-eslint/adjacent-overload-signatures rule
    'perfectionist/sort-object-types': [ERROR, {
      customGroups: {},
      // Configured value
      groups: [
        'required-member',
        'optional-member',
        'unknown',
      ],
      newlinesBetween: 'ignore',
    }],
    'sort-keys': [OFF],

    /**
     * Other option objects can be defined with the following additional key:
     * useConfigurationIf: {
     *   allNamesMatchPattern: 'regex',
     *   callingFunctionNamePattern: 'regex',
     * }
     */
    // eslint-disable-next-line perfectionist/sort-objects -- To keep consistency
    'perfectionist/sort-objects': [ERROR, {
      // Configured value
      customGroups: {
        // cspell:disable-next-line -- Expected in regex.
        probableIdentifiers: ['^(id|Id|ID)$', '^[iI]dentifier$', '^[nN]ame$', '^selector$'],
      },
      destructuredObjects: true,
      // Configured value
      groups: [
        'probableIdentifiers',
        ['unknown', 'multiline'],
        'method',
      ],
      newlinesBetween: 'ignore',
      objectDeclarations: true,
      styledComponents: true,
    }],
    'perfectionist/sort-sets': [ERROR, {
      customGroups: [],
      // Configured value
      groups: [
        'spread',
        'literal',
        'unknown',
      ],
    }],
    'perfectionist/sort-switch-case': [ERROR],
    // TODO: Might clash with the @typescript-eslint/sort-type-constituents rule
    'perfectionist/sort-union-types': [ERROR, {
      groups: [],
      newlinesBetween: 'ignore',
    }],
    // TODO: Might be OFF
    'perfectionist/sort-variable-declarations': [ERROR],
  },
} as const satisfies Linter.Config
