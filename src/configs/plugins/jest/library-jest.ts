import type { Linter } from 'eslint'

/**
 * TODO: fix it when this plugin expose typings
 * @see: https://github.com/jest-community/eslint-plugin-jest/issues/1469
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import jestPlugin from 'eslint-plugin-jest'
import globals from 'globals'

import { OFF, WARN, ERROR } from '../../../constants'


export const jestConfig: Linter.Config = {
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
      allow: [''], // default
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
    // TODO: Should be populated with unwanted jest methods
    'jest/no-restricted-jest-methods': [ERROR, {}], // default
    // TODO: Should be populated with unwanted matchers
    'jest/no-restricted-matchers': [ERROR, {}], // default
    'jest/no-standalone-expect': [ERROR, {
      additionalTestBlockFunctions: [], // default
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
    'jest/prefer-equality-matcher': [ERROR],
    'jest/prefer-expect-assertions': [ERROR, {
      onlyFunctionsWithAsyncKeyword: true,
      onlyFunctionsWithExpectInLoop: true,
      onlyFunctionsWithExpectInCallback: true,
    }],
    'jest/prefer-expect-resolves': [ERROR],
    'jest/prefer-hooks-in-order': [ERROR],
    'jest/prefer-hooks-on-top': [ERROR],
    'jest/prefer-importing-jest-globals': [ERROR, {
      types: [], // default
    }],
    'jest/prefer-jest-mocked': [ERROR],
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
    'jest/require-hook': [ERROR, {
      allowedFunctionCalls: [], // default
    }],
    'jest/require-to-throw-message': [ERROR],
    'jest/require-top-level-describe': [ERROR, {
      maxNumberOfTopLevelDescribes: 1,
    }],
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
      ignoreTypeOfTestName: false, // default
      disallowedWords: [], // default
      mustNotMatch: {}, // default
      mustMatch: {
        test: ['^that'],
        it: ['^should'],
      },
    }],
  },
}
