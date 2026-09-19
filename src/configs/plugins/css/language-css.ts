import css from '@eslint/css'

import { ERROR } from '../../../constants.ts'

import type { ESLint, Linter } from 'eslint'


export const cssLanguageConfig = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- See comment above
    css: css as unknown as ESLint.Plugin,
  },

  /* ----- Language ----- */
  language: 'css/css',

  rules: {
    'css/font-family-fallbacks': [ERROR],
    'css/no-duplicate-imports': [ERROR],
    'css/no-duplicate-keyframe-selectors': [ERROR],
    'css/no-empty-blocks': [ERROR],
    'css/no-important': [ERROR],
    'css/no-invalid-at-rule-placement': [ERROR],
    'css/no-invalid-at-rules': [ERROR],
    'css/no-invalid-named-grid-areas': [ERROR],
    'css/no-invalid-properties': [ERROR, {
      allowUnknownVariables: false,
    }],
    'css/no-unmatchable-selectors': [ERROR],
    'css/prefer-logical-properties': [ERROR, {
      allowProperties: [],
      allowUnits: [],
    }],
    'css/relative-font-units': [ERROR, {
      allowUnits: ['rem'],
    }],

    /*
     * The `max…` limits are left out: the rule defaults them to `Infinity`, while its own
     * `meta.defaultOptions` say `null`, which its schema rejects
     */
    'css/selector-complexity': [ERROR, {
      disallowAttributeMatchers: [],
      disallowAttributes: [],
      disallowCombinators: [],
      disallowPseudoClasses: [],
      disallowPseudoElements: [],
    }],
    'css/use-baseline': [ERROR, {
      allowAtRules: [],
      allowFunctions: [],
      allowMediaConditions: [],
      allowProperties: [],
      allowPropertyValues: {},
      allowSelectors: [],
      allowUnits: [],
      available: 'widely',
    }],
    'css/use-layers': [ERROR, {
      allowUnnamedLayers: false,
      layerNamePattern: '',
      requireImportLayers: true,
    }],
  },
} as const satisfies Linter.Config
