import perfectionistPlugin from 'eslint-plugin-perfectionist'
import { Alphabet } from 'eslint-plugin-perfectionist/alphabet'

import { ERROR, OFF } from '../../../constants.ts'

import type { ESLint, Linter } from 'eslint'


const VALUES_FIRST = 'values-first'
// cspell:disable-next-line -- Expected in regex.
const PROBABLE_IDENTIFIERS_PATTERN = '(^id|Id|ID|^identifier|Identifier|^name|Name|^selector)$'
const PATH_UP_REGEX_PATTERN = String.raw`\.\./`
const LOCALES = 'en-US'

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
      fallbackSort: 'unsorted',
      ignoreCase: true,
      ignorePattern: [],
      locales: LOCALES,
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
      // TODO: needs to be defined
      customGroups: [],
      // Configured value
      groups: [
        'spread',
        'literal',
      ],
      newlinesBetween: 'ignore',
    }],
    'perfectionist/sort-classes': [ERROR, {
      // TODO: needs to be defined
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
      // TODO: needs to be defined
      customGroups: [],
      forceNumericSort: false,
      groups: [
        'unknown',
      ],
      newlinesBetween: 'ignore',
      sortByValue: false,
    }],
    'perfectionist/sort-exports': [ERROR, {
      // TODO: needs to be defined
      customGroups: [],
      groups: [
        'value-export',
        'type-export',
        'unknown',
      ],
      // Configured value
      newlinesBetween: 'always',
    }],
    'perfectionist/sort-heritage-clauses': [ERROR, {
      // TODO: needs to be defined
      customGroups: {},
      groups: [
        'unknown',
      ],
    }],
    // TODO: Need to choose between this rule, the core sort-imports rule, the import/order and prettier-plugin-sort-imports
    'sort-imports': [OFF],
    // eslint-disable-next-line perfectionist/sort-objects -- To keep consistency
    'perfectionist/sort-imports': [ERROR, {
      // Configured value
      customGroups: {
        type: {},
        value: {
          /* eslint-disable @typescript-eslint/no-magic-numbers -- Irrelevant when used with `.repeat` */
          parent1Up: String.raw`^${PATH_UP_REGEX_PATTERN.repeat(1)}[^.]`,
          parent2Up: String.raw`^${PATH_UP_REGEX_PATTERN.repeat(2)}[^.]`,
          parent3Up: String.raw`^${PATH_UP_REGEX_PATTERN.repeat(3)}[^.]`,
          parent4Up: String.raw`^${PATH_UP_REGEX_PATTERN.repeat(4)}[^.]`,
          /* eslint-enable */
        },
      },
      environment: 'node',
      // Configured value
      groups: [
        'builtin',
        'external',
        'internal',
        'parent4Up',
        'parent3Up',
        'parent2Up',
        'parent1Up',
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

      /* ----- Customized alphabet ----- */
      alphabet: Alphabet
        .generateRecommendedAlphabet()
        .sortByNaturalSort(LOCALES)
        .removeCharacters(['&', '-', '_'])
        .pushCharacters(['&', '-', '_'])
        .getCharacters(),
      type: 'custom',
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
      // TODO: needs to be defined
      customGroups: [],
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
      // TODO: needs to be defined
      groups: [],
      newlinesBetween: 'ignore',
    }],

    /**
     * Other option objects can be defined with the following additional key:
     * useConfigurationIf: {
     *   allNamesMatchPattern: 'regex',
     *   tagMatchesPattern: 'regex',
     * }
     */
    // TODO: Might clash with the react/jsx-sort-props rule
    'perfectionist/sort-jsx-props': [ERROR, {
      // TODO: needs to be defined
      customGroups: [],
      groups: [
        'prop',
        'shorthand-prop',
        'unknown',
      ],
      newlinesBetween: 'ignore',
    }],

    /**
     * Other option objects can be defined with the following additional key:
     * useConfigurationIf: {
     *   allNamesMatchPattern: 'regex',
     * }
     */
    'perfectionist/sort-maps': [ERROR, {
      customGroups: [
        {
          groupName: 'probableIdentifiers',
          elementNamePattern: PROBABLE_IDENTIFIERS_PATTERN,
        },
      ],
      groups: [],
      newlinesBetween: 'ignore',
    }],
    'perfectionist/sort-modules': [ERROR, {
      // TODO: needs to be defined
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
      // Currently not in v4.11.0, might be in v4.12.0
      /**
       * // TODO: needs to be defined
       * customGroups: [],
       * groups: [
       *   'value-export',
       *   'type-export',
       *   'unknown',
       * ],
       */
      ignoreAlias: false,
    }],
    // TODO: Might clash with the sort-imports core rule
    'perfectionist/sort-named-imports': [ERROR, {
      // Configured value
      groupKind: VALUES_FIRST,
      // Currently not in v4.11.0, might be in v4.12.0
      /**
       * // TODO: needs to be defined
       * customGroups: [],
       * groups: [
       *   'value-import',
       *   'type-import',
       *   'unknown',
       * ],
       */
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
      // TODO: needs to be defined
      customGroups: [],
      // Configured value
      groups: [
        'required-member',
        'optional-member',
        'unknown',
      ],
      newlinesBetween: 'ignore',
      sortBy: 'name',
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
      customGroups: [
        {
          groupName: 'probableIdentifiers',
          elementNamePattern: PROBABLE_IDENTIFIERS_PATTERN,
        },
      ],
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
      // TODO: needs to be defined
      customGroups: [],
      // Configured value
      groups: [
        'spread',
        'literal',
        'unknown',
      ],
      newlinesBetween: 'ignore',
    }],
    'perfectionist/sort-switch-case': [ERROR],
    // TODO: Might clash with the @typescript-eslint/sort-type-constituents rule
    'perfectionist/sort-union-types': [ERROR, {
      // TODO: needs to be defined
      groups: [],
      newlinesBetween: 'ignore',
    }],
    // TODO: Might be OFF
    'perfectionist/sort-variable-declarations': [ERROR],
  },
} as const satisfies Linter.Config
