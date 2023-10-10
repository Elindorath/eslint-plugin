'use strict';

const eslintCommentsPlugin = require('@eslint-community/eslint-plugin-eslint-comments');

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    'eslint-comments': eslintCommentsPlugin,
  },

  rules: {
    /* ----- Best practices ----- */
    'eslint-comments/disable-enable-pair': [ERROR, {
      allowWholeFile: false,
    }],
    // OFF as we prefer to enable more than necessary rather than the other way around
    'eslint-comments/no-aggregating-enable': [OFF],
    'eslint-comments/no-duplicate-disable': [ERROR],
    'eslint-comments/no-unlimited-disable': [ERROR],
    // BEWARE: this rule is a bit hacky, be careful with eslint updates
    // @see: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html#known-limitations
    'eslint-comments/no-unused-disable': [ERROR],
    'eslint-comments/no-unused-enable': [ERROR],

    /* ----- Stylistic issues ----- */
    // Does nothing as is, needs a list of glob rules
    'eslint-comments/no-restricted-disable': [ERROR],
    'eslint-comments/no-use': [ERROR, {
      allow: [
        'eslint-disable',
        'eslint-enable',
        'eslint-disable-next-line',
      ],
    }],
    'eslint-comments/require-description': [ERROR, {
      ignore: ['eslint-enable'],
    }],
  },
};
