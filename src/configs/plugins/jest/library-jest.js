'use strict';

const globals = require('globals');
const jestPlugin = require('eslint-plugin-jest')

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    jest: jestPlugin,
  },

  languageOptions: {
    globals: {
      ...globals.jest,
    },
  },

  rules: {
    'jest/consistent-test-it': [ERROR, {
      fn: 'test', // default
      withinDescribe: 'it', // default
    }],
    'jest/expect-expect': [ERROR, {
      assertFunctionNames: ['expect'], // default
      additionalTestBlockFunctions: [], // default
    }],
    'jest/max-expects': [ERROR, {
      max: 5, // default
    }],
    'jest/max-nested-describe': [ERROR, {
      max: 5, // default
    }],
    'jest/no-alias-methods': [ERROR],
    'jest/no-commented-out-tests': [ERROR],
    'jest/no-conditional-expect': [ERROR],
    'jest/no-conditional-in-test': [ERROR],
    'jest/no-confusing-set-timeout': [ERROR],
    'jest/no-deprecated-functions': [ERROR],
    // Only WARN because it is better to have a skipped test than no test at all
    'jest/no-disabled-tests': [WARN],
    'jest/no-done-callback': [ERROR],
    'jest/no-duplicate-hooks': [ERROR],
    'jest/no-export': [ERROR],
    'jest/no-focused-tests': [ERROR],
    // Could be debatable
    'jest/no-hooks': [ERROR, {
      allow: [], // default
    }],
    'jest/no-identical-title': [ERROR],
    'jest/no-interpolation-in-snapshots': [ERROR],
    'jest/no-jasmine-globals': [ERROR],
    'jest/no-large-snapshots': [ERROR, {
      maxSize: 50, // default
      inlineMaxSize: 50, // default
      allowedSnapshots: {}, // default
    }],
    'jest/no-mocks-import': [ERROR],
    // Should be populated with unwanted jest methods
    'jest/no-restricted-jest-methods': [ERROR],
    // Should be populated with unwanted matchers
    'jest/no-restricted-matchers': [ERROR],
    'jest/no-standalone-expect': [ERROR, {
      additionalTestBlockFunctions: [], // default
    }],
    'jest/no-test-prefixes': [ERROR],
    'jest/no-test-return-statement': [ERROR],
    // OFF as it requires typescript
    'jest/no-untyped-mock-factory': [OFF],
    'jest/prefer-called-with': [ERROR],
    'jest/prefer-comparison-matcher': [ERROR],
    'jest/prefer-each': [ERROR],
    'jest/prefer-equality-matcher': [ERROR],
    'jest/prefer-expect-assertions': [ERROR, {
      onlyFunctionsWithAsyncKeyword: true,
      onlyFunctionsWithExpectInLoop: true,
      onlyFunctionsWithExpectInCallback: true,
    }],
    'jest/prefer-expect-resolves': [ERROR],
    'jest/prefer-hooks-in-order': [ERROR],
    'jest/prefer-hooks-on-top': [ERROR],
    'jest/prefer-lowercase-title': [ERROR, {
      ignore: [], // default
      allowedPrefixes: [], // default
      ignoreTopLevelDescribe: false, // default
    }],
    'jest/prefer-mock-promise-shorthand': [ERROR],
    'jest/prefer-snapshot-hint': [ERROR, 'multi'],
    'jest/prefer-spy-on': [ERROR],
    'jest/prefer-strict-equal': [ERROR],
    'jest/prefer-to-be': [ERROR],
    'jest/prefer-to-contain': [ERROR],
    'jest/prefer-to-have-length': [ERROR],
    'jest/prefer-todo': [ERROR],
    'jest/require-hook': [ERROR, {
      allowedFunctionCalls: [], // default
    }],
    'jest/require-to-throw-message': [ERROR],
    'jest/require-top-level-describe': [ERROR, {
      maxNumberOfTopLevelDescribes: 1,
    }],
    // OFF as it requires typescript
    'jest/unbound-method': [OFF],
    'jest/valid-describe-callback': [ERROR],
    'jest/valid-expect-in-promise': [ERROR],
    'jest/valid-expect': [ERROR, {
      alwaysAwait: true,
      // default
      asyncMatchers: [
        'toResolve',
        'toReject',
      ],
      minArgs: 1, // default
      maxArgs: 1, // default
    }],
    'jest/valid-title': [ERROR, {
      ignoreSpaces: false, // default
      ignoreTypeOfDescribeName: false, // default
      disallowedWords: [], // default
      mustNotMatch: {}, // default
      mustMatch: {
        test: ['^that'],
        it: ['^should'],
      },
    }],
  },
};
