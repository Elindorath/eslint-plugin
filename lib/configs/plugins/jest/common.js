'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  env: {
    '@elindorath/jest/globals': true,
  },
  rules: {
    '@elindorath/jest/consistent-test-it': [ERROR, {
      fn: 'test', // Default
      withinDescribe: 'it', // Default
    }],
    '@elindorath/jest/expect-expect': [ERROR, {
      assertFunctionNames: ['expect'], // Default
    }],
    '@elindorath/jest/lowercase-name': [ERROR, {
      ignore: [], // Default
      allowedPrefixes: [], // Default
      ignoreTopLevelDescribe: true,
    }],
    '@elindorath/jest/no-alias-methods': [ERROR],
    '@elindorath/jest/no-commented-out-tests': [ERROR],
    '@elindorath/jest/no-conditional-expect': [ERROR],
    '@elindorath/jest/no-deprecated-functions': [ERROR],
    // Only WARN because it is better to have a skipped test than no test at all
    '@elindorath/jest/no-disabled-tests': [WARN],
    '@elindorath/jest/no-done-callback': [ERROR],
    '@elindorath/jest/no-duplicate-hooks': [ERROR],
    '@elindorath/jest/no-export': [ERROR],
    '@elindorath/jest/no-focused-tests': [ERROR],
    // Could be debatable
    '@elindorath/jest/no-hooks': [ERROR, {
      // Default
      // allow: [],
    }],
    '@elindorath/jest/no-identical-title': [ERROR],
    '@elindorath/jest/no-if': [ERROR],
    '@elindorath/jest/no-interpolation-in-snapshots': [ERROR],
    '@elindorath/jest/no-jasmine-globals': [ERROR],
    '@elindorath/jest/no-jest-import': [ERROR],
    '@elindorath/jest/no-large-snapshots': [ERROR, {
      maxSize: 50, // Default
      inlineMaxSize: 50, // Default
      allowedSnapshots: {}, // Default
    }],
    '@elindorath/jest/no-mocks-import': [ERROR],
    // Should be populated with unwanted matchers
    '@elindorath/jest/no-restricted-matchers': [ERROR],
    '@elindorath/jest/no-standalone-expect': [ERROR, {
      additionalTestBlockFunctions: [], // Default
    }],
    '@elindorath/jest/no-test-prefixes': [ERROR],
    '@elindorath/jest/no-test-return-statement': [ERROR],
    '@elindorath/jest/prefer-called-with': [ERROR],
    '@elindorath/jest/prefer-expect-assertions': [ERROR, {
      onlyFunctionsWithAsyncKeyword: true,
    }],
    '@elindorath/jest/prefer-hooks-on-top': [ERROR],
    '@elindorath/jest/prefer-spy-on': [ERROR],
    '@elindorath/jest/prefer-strict-equal': [ERROR],
    '@elindorath/jest/prefer-to-be-null': [ERROR],
    '@elindorath/jest/prefer-to-be-undefined': [ERROR],
    '@elindorath/jest/prefer-to-contain': [ERROR],
    '@elindorath/jest/prefer-to-have-length': [ERROR],
    '@elindorath/jest/prefer-todo': [ERROR],
    '@elindorath/jest/require-to-throw-message': [ERROR],
    '@elindorath/jest/require-top-level-describe': [ERROR],
    '@elindorath/jest/valid-describe': [ERROR],
    '@elindorath/jest/valid-expect': [ERROR, {
      alwaysAwait: true,
      minArgs: 1, // Default
      maxArgs: 1, // Default
    }],
    '@elindorath/jest/valid-expect-in-promise': [ERROR],
    '@elindorath/jest/valid-title': [ERROR, {
      ignoreTypeOfDescribeName: false, // Default
      disallowedWords: [], // Default
      mustNotMatch: {}, // Default
      mustMatch: {
        test: '^that',
        it: '^should',
      },
    }],
  },
};
