import eslintReactPlugin from '@eslint-react/eslint-plugin'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const eslintReactConfig = {
  plugins: {
    '@eslint-react': eslintReactPlugin,
  },

  rules: {
    /* ----- JSX ----- */
    '@eslint-react/jsx-key-before-spread': [ERROR],
    '@eslint-react/jsx-no-duplicate-props': [ERROR],
    '@eslint-react/jsx-no-iife': [ERROR],
    '@eslint-react/jsx-no-undef': [ERROR],
    '@eslint-react/jsx-uses-react': [ERROR],
    '@eslint-react/jsx-uses-vars': [ERROR],

    /* ----- Deprecated ----- */
    // The following rules are deprecated in favor of other rules but are not marked as such in their meta.

    /* ----- JSX ----- */
    '@eslint-react/no-duplicate-jsx-props': [OFF],
    '@eslint-react/use-jsx-vars': [OFF],
  },
} as const satisfies Linter.Config
