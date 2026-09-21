import css from '@eslint/css'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const cssLanguageConfig: FixedLinterConfig = {
  plugins: {
    css,
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
    'css/selector-complexity': [ERROR, {
      disallowAttributeMatchers: [],
      disallowAttributes: [],
      disallowCombinators: [],
      disallowPseudoClasses: [],
      disallowPseudoElements: [],
      maxAttributes: Number.POSITIVE_INFINITY,
      maxClasses: Number.POSITIVE_INFINITY,
      maxCombinators: Number.POSITIVE_INFINITY,
      maxCompounds: Number.POSITIVE_INFINITY,
      // Configured value
      maxIds: 1,
      maxPseudoClasses: Number.POSITIVE_INFINITY,
      maxTypes: Number.POSITIVE_INFINITY,
      // Configured value
      maxUniversals: 1,
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
}
