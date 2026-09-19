import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const unicornCssConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/no-deprecated-css-features': [ERROR, {
      allow: [],
    }],
    'unicorn/no-duplicate-css-selectors': [ERROR],
    'unicorn/no-duplicate-font-family-names': [ERROR],
    'unicorn/no-invalid-media-features': [ERROR],
    'unicorn/no-nesting-with-mixed-specificity': [ERROR],
    'unicorn/no-redundant-nested-style-rules': [ERROR],
    'unicorn/no-unknown-css-annotations': [ERROR],
    'unicorn/no-unknown-pseudo-selectors': [ERROR, {
      allow: [],
    }],
    'unicorn/no-unscoped-css-nesting-selector': [ERROR, {
      scopingRootAtRules: [],
    }],
    'unicorn/prefer-media-feature-range-syntax': [ERROR],
  },
} as const satisfies Linter.Config
