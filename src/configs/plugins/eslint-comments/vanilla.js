'use strict'

const eslintCommentsPlugin = require('@eslint-community/eslint-plugin-eslint-comments')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

const DIRECTIVES = {
  ENABLE: 'eslint-enable',
  DISABLE: 'eslint-disable',
  DISABLE_NEXT_LINE: 'eslint-disable-next-line',
}

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    '@eslint-community/eslint-comments': eslintCommentsPlugin,
  },

  rules: {
    /* ----- Best practices ----- */
    '@eslint-community/eslint-comments/disable-enable-pair': [ERROR, {
      allowWholeFile: false,
    }],
    // OFF as we prefer to enable more than necessary rather than the other way around
    '@eslint-community/eslint-comments/no-aggregating-enable': [OFF],
    '@eslint-community/eslint-comments/no-duplicate-disable': [ERROR],
    '@eslint-community/eslint-comments/no-unlimited-disable': [ERROR],
    // BEWARE: this rule is a bit hacky, be careful with eslint updates
    // @see: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html#known-limitations
    '@eslint-community/eslint-comments/no-unused-disable': [ERROR],
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
