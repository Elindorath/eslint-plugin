'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  extends: [
    require.resolve('./+script-type'),
    require.resolve('./+dev'),
    require.resolve('./+node'),
  ],
  rules: {
    /* ----- Best practices ----- */
    // OFF as it would decrease readability in this type of file
    'no-magic-numbers': [OFF],

    /* ----- Variables ----- */
    // Only allow OFF, WARN and ERROR vars to not be used
    'no-unused-vars': [ERROR, {
      vars: 'all', // Default
      varsIgnorePattern: 'OFF|WARN|ERROR',
      args: 'after-used', // Default
      argsIgnorePattern: '', // Default
      ignoreRestSiblings: false, // Default
      caughtErrors: 'none', // Default
      caughtErrorsIgnorePattern: '', // Default
    }],

    /* ----- Stylistic issues ----- */
    // OFF as it doesn't allow us to follow the desired formatting in this type of file
    // 'array-bracket-newline': [OFF],
    // OFF as it decrease readability in this type of files
    'multiline-comment-style': [OFF],

    '@elindorath/filenames/match-regex': [ERROR, /^\.eslintrc$/gu],
  },
};
