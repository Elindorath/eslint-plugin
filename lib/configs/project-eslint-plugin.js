'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  extends: [
    require.resolve('./common'),
    require.resolve('./+script-type'),
    require.resolve('./+node'),
    require.resolve('./+eslintrc'),
    require.resolve('./_override-scripts'),
  ],
  rules: {
    '@elindorath/filenames/match-regex': [ERROR, /^\.?[+-_]?[\da-z-]+$/gu],
    // OFF to respect the eslint-plugin formatting standard
    '@elindorath/n/global-require': [OFF],
    // OFF to respect the eslint-plugin formatting standard
    '@elindorath/import/max-dependencies': [OFF],
    // Disabled filenames check to respect eslint plugin name
    '@elindorath/unicorn/prevent-abbreviations': [ERROR, {
      replacements: {}, // Default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/rules/prevent-abbreviations.js#L18
      extendDefaultReplacements: true, // Default
      allowList: {}, // Default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/rules/prevent-abbreviations.js#L222
      extendDefaultAllowList: true, // Default
      checkDefaultAndNamespaceImports: 'internal', // Default
      checkShorthandImports: 'internal', // Default
      checkShorthandProperties: false, // Default
      checkProperties: false, // Default
      checkVariables: true, // Default
      checkFilenames: false,
      ignore: [], // Default
    }],
  },
};
