import eslintReactPlugin from '@eslint-react/eslint-plugin'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const eslintReactJsxConfig = {
  plugins: {
    '@eslint-react': eslintReactPlugin,
  },

  /* ----- Rules ----- */
  rules: {
    '@eslint-react/jsx-no-children-prop': [ERROR],
    '@eslint-react/jsx-no-children-prop-with-children': [ERROR],
    '@eslint-react/jsx-no-comment-textnodes': [ERROR],
    '@eslint-react/jsx-no-key-after-spread': [ERROR],
    '@eslint-react/jsx-no-leaked-dollar': [ERROR],
    '@eslint-react/jsx-no-leaked-semicolon': [ERROR],
    '@eslint-react/jsx-no-namespace': [ERROR],
    '@eslint-react/jsx-no-useless-fragment': [ERROR, {
      allowEmptyFragment: false,
      allowExpressions: false,
    }],
  },
} as const satisfies Linter.Config
