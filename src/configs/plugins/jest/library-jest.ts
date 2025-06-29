import jestPlugin from 'eslint-plugin-jest'
import globals from 'globals'

import { ERROR, OFF, WARN } from '../../../constants.ts'

import type { Linter } from 'eslint'


const additionalTestBlockFunctions = [
  'test',
  'test.each',
  'test.concurrent',
  'test.concurrent.each',
  'test.concurrent.only.each',
  'test.concurrent.skip.each',
  'test.each',
  'test.failing',
  'test.failing.each',
  'test.only.failing',
  'test.skip.failing',
  'test.only',
  'test.only.each',
  'test.skip',
  'test.skip.each',
  'it',
  'it.each',
  'it.concurrent',
  'it.concurrent.each',
  'it.concurrent.only.each',
  'it.concurrent.skip.each',
  'it.each',
  'it.failing',
  'it.failing.each',
  'it.only.failing',
  'it.skip.failing',
  'it.only',
  'it.only.each',
  'it.skip',
  'it.skip.each',
]

export const jestConfig = {
  plugins: {
    jest: jestPlugin,
  },

  /* ----- Language options ----- */
  languageOptions: {
    globals: {
      ...globals.jest,
    },
  },

  rules: {
    'jest/consistent-test-it': [ERROR, {
      fn: 'test',
      withinDescribe: 'it',
    }],
    'jest/expect-expect': [ERROR, {
      additionalTestBlockFunctions,
      assertFunctionNames: ['expect'],
    }],
    'jest/max-expects': [ERROR, {
      max: 5,
    }],
    'jest/max-nested-describe': [ERROR, {
      max: 5,
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
      allow: [''],
    }],
    'jest/no-identical-title': [ERROR],
    'jest/no-interpolation-in-snapshots': [ERROR],
    'jest/no-jasmine-globals': [ERROR],
    'jest/no-large-snapshots': [ERROR, {
      allowedSnapshots: {},
      inlineMaxSize: 50,
      maxSize: 50,
    }],
    'jest/no-mocks-import': [ERROR],
    // TODO: Should be populated with unwanted jest methods
    'jest/no-restricted-jest-methods': [ERROR, {}],
    // TODO: Should be populated with unwanted matchers
    'jest/no-restricted-matchers': [ERROR, {}],
    'jest/no-standalone-expect': [ERROR, {
      additionalTestBlockFunctions,
    }],
    'jest/no-test-prefixes': [ERROR],
    'jest/no-test-return-statement': [ERROR],
    // OFF as it requires typescript
    'jest/no-untyped-mock-factory': [OFF],
    'jest/padding-around-after-all-blocks': [ERROR],
    'jest/padding-around-after-each-blocks': [ERROR],
    'jest/padding-around-all': [ERROR],
    'jest/padding-around-before-all-blocks': [ERROR],
    'jest/padding-around-before-each-blocks': [ERROR],
    'jest/padding-around-describe-blocks': [ERROR],
    'jest/padding-around-expect-groups': [ERROR],
    'jest/padding-around-test-blocks': [ERROR],
    'jest/prefer-called-with': [ERROR],
    'jest/prefer-comparison-matcher': [ERROR],
    'jest/prefer-each': [ERROR],
    'jest/prefer-ending-with-an-expect': [ERROR, {
      additionalTestBlockFunctions,
      assertFunctionNames: ['expect'],
    }],
    'jest/prefer-equality-matcher': [ERROR],
    'jest/prefer-expect-assertions': [ERROR, {
      // Configured value
      onlyFunctionsWithAsyncKeyword: true,
      // Configured value
      onlyFunctionsWithExpectInCallback: true,
      // Configured value
      onlyFunctionsWithExpectInLoop: true,
    }],
    'jest/prefer-expect-resolves': [ERROR],
    'jest/prefer-hooks-in-order': [ERROR],
    'jest/prefer-hooks-on-top': [ERROR],
    'jest/prefer-importing-jest-globals': [ERROR, {
      types: [],
    }],
    'jest/prefer-jest-mocked': [ERROR],
    'jest/prefer-lowercase-title': [ERROR, {
      allowedPrefixes: [],
      ignore: [],
      ignoreTopLevelDescribe: false,
    }],
    'jest/prefer-mock-promise-shorthand': [ERROR],
    'jest/prefer-snapshot-hint': [ERROR, 'multi'],
    'jest/prefer-spy-on': [ERROR],
    'jest/prefer-strict-equal': [ERROR],
    'jest/prefer-to-be': [ERROR],
    'jest/prefer-to-contain': [ERROR],
    'jest/prefer-to-have-length': [ERROR],
    'jest/require-hook': [ERROR, {
      allowedFunctionCalls: [],
    }],
    'jest/require-to-throw-message': [ERROR],
    'jest/require-top-level-describe': [ERROR, {
      // Configured value
      maxNumberOfTopLevelDescribes: 1,
    }],
    'jest/valid-describe-callback': [ERROR],
    'jest/valid-expect': [ERROR, {
      // Configured value
      alwaysAwait: true,
      asyncMatchers: [
        'toResolve',
        'toReject',
      ],
      maxArgs: 1,
      minArgs: 1,
    }],
    'jest/valid-expect-in-promise': [ERROR],
    'jest/valid-title': [ERROR, {
      ignoreTypeOfDescribeName: false,
      ignoreTypeOfTestName: false,
      disallowedWords: [],
      ignoreSpaces: false,
      // Configured value
      mustMatch: {
        it: ['^should'],
        test: ['^that'],
      },
      mustNotMatch: {},
    }],
  },
} as const satisfies Linter.Config
