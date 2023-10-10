'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    /* ----- Best practices ----- */
    '@elindorath/eslint-comments/disable-enable-pair': [ERROR, {
      allowWholeFile: false,
    }],
    // OFF as we prefer to enable more than necessary rather than the other way around
    '@elindorath/eslint-comments/no-aggregating-enable': [OFF],
    '@elindorath/eslint-comments/no-duplicate-disable': [ERROR],
    '@elindorath/eslint-comments/no-unlimited-disable': [ERROR],
    // BEWARE: this rule is a bit hacky, be careful with eslint updates
    // @see: https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html#known-limitations
    '@elindorath/eslint-comments/no-unused-disable': [ERROR],
    '@elindorath/eslint-comments/no-unused-enable': [ERROR],

    /* ----- Stylistic issues ----- */
    // Does nothing as is, needs a list of glob rules
    '@elindorath/eslint-comments/no-restricted-disable': [ERROR],
    '@elindorath/eslint-comments/no-use': [ERROR, {
      allow: [
        'eslint-disable',
        'eslint-enable',
        'eslint-disable-next-line',
      ],
    }],
    '@elindorath/eslint-comments/require-description': [ERROR, {
      ignore: ['eslint-enable'],
    }],
  },
};
