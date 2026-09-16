import eslintCommentsPlugin from '@eslint-community/eslint-plugin-eslint-comments'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'

const DIRECTIVES = {
  DISABLE: 'eslint-disable',
  DISABLE_NEXT_LINE: 'eslint-disable-next-line',
  ENABLE: 'eslint-enable',
}

export const eslintCommentsVanillaConfig = {
  plugins: {
    '@eslint-community/eslint-comments': eslintCommentsPlugin,
  },
  rules: {
    /* ----- Best practices ----- */
    '@eslint-community/eslint-comments/disable-enable-pair': [ERROR, {
      allowWholeFile: false,
    }],
    // OFF as we prefer to enable more than necessary rather than the other way around.
    '@eslint-community/eslint-comments/no-aggregating-enable': [OFF],
    '@eslint-community/eslint-comments/no-duplicate-disable': [ERROR],
    '@eslint-community/eslint-comments/no-unlimited-disable': [ERROR],
    '@eslint-community/eslint-comments/no-unused-enable': [ERROR],

    /* ----- Stylistic issues ----- */
    // Does nothing as is, needs a list of glob rules
    '@eslint-community/eslint-comments/no-restricted-disable': [ERROR],
    '@eslint-community/eslint-comments/no-use': [ERROR, {
      additionalDirectives: [],
      allow: [
        DIRECTIVES.ENABLE,
        DIRECTIVES.DISABLE,
        DIRECTIVES.DISABLE_NEXT_LINE,
      ],
    }],
    '@eslint-community/eslint-comments/require-description': [ERROR, {
      additionalDirectives: [],
      ignore: [DIRECTIVES.ENABLE],
    }],
  },
} as const satisfies Linter.Config
