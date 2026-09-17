/* eslint-disable max-lines -- TODO: Could be splitted in subparts */
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import { Alphabet } from 'eslint-plugin-perfectionist/alphabet'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


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
    perfectionist: perfectionistPlugin,
  },

  settings: {
    perfectionist: {
      fallbackSort: 'unsorted',
      ignoreCase: true,
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
     * specialCharacters
     * locales
     * alphabet
     * fallbackSort
     * newlinesBetween
     * newlinesInside
     * partitionByComment
     * partitionByNewLine
     * tsconfig
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
        'literal',
      ],
      newlinesBetween: 'ignore',
      newlinesInside: 'newlinesBetween',
      useConfigurationIf: {},
    }],
    // OFF as the order of an array literal usually carries meaning, `sort-array-includes` and `sort-sets` already cover the cases where it doesn't
    'perfectionist/sort-arrays': [OFF],
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
      newlinesBetween: 1,
      newlinesBetweenOverloadSignatures: 0,
      newlinesInside: 'newlinesBetween',
      useConfigurationIf: {},
      useExperimentalDependencyDetection: true,
    }],
    'perfectionist/sort-decorators': [ERROR, {
      // TODO: needs to be defined
      customGroups: [],
      groups: [
        'unknown',
      ],
      newlinesBetween: 'ignore',
      newlinesInside: 'newlinesBetween',
      sortOnAccessors: true,
      sortOnClasses: true,
      sortOnMethods: true,
      sortOnParameters: true,
      sortOnProperties: true,
    }],
    'perfectionist/sort-enums': [ERROR, {
      // TODO: needs to be defined
      customGroups: [],
      groups: [
        'unknown',
      ],
      newlinesBetween: 'ignore',
      newlinesInside: 'newlinesBetween',
      // Configured value
      sortByValue: 'never',
      useConfigurationIf: {},
      useExperimentalDependencyDetection: true,
    }],
    'perfectionist/sort-export-attributes': [ERROR, {
      // TODO: needs to be defined
      customGroups: [],
      groups: [],
      newlinesBetween: 'ignore',
      newlinesInside: 'newlinesBetween',
      useConfigurationIf: {},
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
      newlinesBetween: 1,
      newlinesInside: 'newlinesBetween',
    }],
    'perfectionist/sort-heritage-clauses': [ERROR, {
      // TODO: needs to be defined
      customGroups: [],
      groups: [
        'unknown',
      ],
      newlinesBetween: 'ignore',
      newlinesInside: 'newlinesBetween',
      useConfigurationIf: {},
    }],
    'perfectionist/sort-import-attributes': [ERROR, {
      // TODO: needs to be defined
      customGroups: [],
      groups: [],
      newlinesBetween: 'ignore',
      newlinesInside: 'newlinesBetween',
      useConfigurationIf: {},
    }],
    // TODO: Need to choose between this rule, the core sort-imports rule, the import/order and prettier-plugin-sort-imports
    'sort-imports': [OFF],
    // eslint-disable-next-line perfectionist/sort-objects -- To keep consistency
    'perfectionist/sort-imports': [ERROR, {
      // Configured value
      customGroups: [
        /* eslint-disable @typescript-eslint/no-magic-numbers -- Irrelevant when used with `.repeat` */
        {
          groupName: 'parent1Up',
          elementNamePattern: `^${PATH_UP_REGEX_PATTERN.repeat(1)}[^.]`,
        },
        {
          groupName: 'parent2Up',
          elementNamePattern: `^${PATH_UP_REGEX_PATTERN.repeat(2)}[^.]`,
        },
        {
          groupName: 'parent3Up',
          elementNamePattern: `^${PATH_UP_REGEX_PATTERN.repeat(3)}[^.]`,
        },
        {
          groupName: 'parent4Up',
          elementNamePattern: `^${PATH_UP_REGEX_PATTERN.repeat(4)}[^.]`,
        },
        /* eslint-enable @typescript-eslint/no-magic-numbers */
      ],
      environment: 'node',
      // Configured value
      groups: [
        'value-builtin',
        'value-external',
        'value-internal',
        'parent4Up',
        'parent3Up',
        'parent2Up',
        'parent1Up',
        'value-index',
        'value-sibling',
        'unknown',
        'type-builtin',
        'type-external',
        'type-internal',
        'type-parent',
        'type-index',
        'type-sibling',
        'style',
      ],
      internalPattern: ['^~/.*'],
      maxLineLength: undefined,
      newlinesBetween: 1,
      newlinesInside: 0,
      sortBy: 'path',
      sortSideEffects: false,
      tsconfig: {
        rootDir: '.',
      },
      useExperimentalDependencyDetection: true,

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
        'required-member',
        'optional-member',
        'unknown',
      ],
      newlinesBetween: 'ignore',
      newlinesInside: 'newlinesBetween',
      sortBy: 'name',
      useConfigurationIf: {},
    }],
    'perfectionist/sort-intersection-types': [ERROR, {
      // TODO: needs to be defined
      customGroups: [],
      groups: [],
      ignoreCallableTypes: true,
      newlinesBetween: 'ignore',
      newlinesInside: 'newlinesBetween',
      useConfigurationIf: {},
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
      newlinesInside: 'newlinesBetween',
      useConfigurationIf: {},
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
      newlinesInside: 'newlinesBetween',
      useConfigurationIf: {},
    }],
    'perfectionist/sort-modules': [ERROR, {
      additionalModuleBlockTypes: [],
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
      newlinesBetweenOverloadSignatures: 0,
      newlinesInside: 'newlinesBetween',
      tsconfig: {
        rootDir: '.',
      },
      useExperimentalDependencyDetection: true,
    }],
    'perfectionist/sort-named-exports': [ERROR, {
      // TODO: needs to be defined
      customGroups: [],
      groups: [
        'value-export',
        'type-export',
        'unknown',
      ],
      ignoreAlias: false,
      newlinesBetween: 'ignore',
      newlinesInside: 'newlinesBetween',
      useConfigurationIf: {},
    }],
    // TODO: Might clash with the sort-imports core rule
    'perfectionist/sort-named-imports': [ERROR, {
      // TODO: needs to be defined
      customGroups: [],
      groups: [
        'value-import',
        'type-import',
        'unknown',
      ],
      ignoreAlias: true,
      newlinesBetween: 'ignore',
      newlinesInside: 'newlinesBetween',
      useConfigurationIf: {},
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
      newlinesInside: 'newlinesBetween',
      sortBy: 'name',
      useConfigurationIf: {},
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
      // Configured value
      groups: [
        'probableIdentifiers',
        ['unknown', 'multiline-member'],
        'method',
      ],
      ignoreCallbackDependenciesPatterns: [],
      newlinesBetween: 'ignore',
      newlinesInside: 'newlinesBetween',
      partitionByComputedKey: false,
      sortBy: 'name',
      styledComponents: true,
      useConfigurationIf: {},
      useExperimentalDependencyDetection: true,
    }],
    'perfectionist/sort-sets': [ERROR, {
      // TODO: needs to be defined
      customGroups: [],
      // Configured value
      groups: [
        'literal',
        'unknown',
      ],
      newlinesBetween: 'ignore',
      newlinesInside: 'newlinesBetween',
      useConfigurationIf: {},
    }],
    'perfectionist/sort-switch-case': [ERROR],
    'perfectionist/sort-union-types': [ERROR, {
      // TODO: needs to be defined
      customGroups: [],
      // TODO: needs to be refined
      groups: [
        'conditional',
        'function',
        'import',
        'intersection',
        'keyword',
        'literal',
        'operator',
        'named',
        'object',
        'tuple',
        'union',
        'nullish',
        'unknown',
      ],
      newlinesBetween: 'ignore',
      newlinesInside: 'newlinesBetween',
      useConfigurationIf: {},
    }],
    // TODO: Might be OFF
    'perfectionist/sort-variable-declarations': [ERROR, {
      // TODO: needs to be defined
      customGroups: [],
      groups: [
        'initialized',
        'uninitialized',
      ],
      ignoreCallbackDependenciesPatterns: [],
      newlinesBetween: 1,
      newlinesInside: 'newlinesBetween',
      useConfigurationIf: {},
      useExperimentalDependencyDetection: true,
    }],
  },
} as const satisfies Linter.Config

/* eslint-enable */
