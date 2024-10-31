'use strict'

import type { Linter } from 'eslint'
import eslintCommentsPlugin from '@eslint-community/eslint-plugin-eslint-comments'

import { OFF, ERROR } from '../../../constants'

const DIRECTIVES = {
  ENABLE: 'eslint-enable',
  DISABLE: 'eslint-disable',
  DISABLE_NEXT_LINE: 'eslint-disable-next-line',
}

export const eslintCommentsVanillaConfig: Linter.Config = {
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

    /**
     * BEWARE: this rule is a bit hacky, be careful with eslint updates.
     * @see: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html#known-limitations
     *
     * OFF as this rule relies on the `CLIEngine` class that were deprecated in ESLint v7.0.0.
     * We use the `linterOptions.reportUnusedDisableDirectives = ERROR` in configurations to achieve the same goal.
     */
    '@eslint-community/eslint-comments/no-unused-disable': [OFF],
    '@eslint-community/eslint-comments/no-unused-enable': [ERROR],

    /* ----- Stylistic issues ----- */
    // Does nothing as is, needs a list of glob rules
    '@eslint-community/eslint-comments/no-restricted-disable': [ERROR],
    '@eslint-community/eslint-comments/no-use': [ERROR, {
      allow: [
        DIRECTIVES.ENABLE,
        DIRECTIVES.DISABLE,
        DIRECTIVES.DISABLE_NEXT_LINE,
      ],
    }],
    '@eslint-community/eslint-comments/require-description': [ERROR, {
      ignore: [DIRECTIVES.ENABLE],
    }],
  },
}