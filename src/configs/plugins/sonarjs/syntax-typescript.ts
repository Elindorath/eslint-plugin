import sonarJsPlugin from 'eslint-plugin-sonarjs'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const sonarjsTypescriptConfig = {
  plugins: {
    sonarjs: sonarJsPlugin,
  },

  rules: {
    'sonarjs/anchor-precedence': [ERROR],
    'sonarjs/argument-type': [ERROR],
    'sonarjs/arguments-order': [ERROR],
    'sonarjs/array-callback-without-return': [ERROR],
    'sonarjs/class-prototype': [ERROR],
    'sonarjs/concise-regex': [ERROR],
    // OFF as the rule '@typescript-eslint/no-deprecated' already check this
    'sonarjs/deprecation': [OFF],
    'sonarjs/different-types-comparison': [ERROR],
    // TODO: Should be put in a library mustache.js, handlebars.js, markdown-it, marked or kramed specific configuration file
    'sonarjs/disabled-auto-escaping': [ERROR],
    // TODO: Should be put in a environment browser specific configuration file
    'sonarjs/disabled-resource-integrity': [ERROR],
    'sonarjs/duplicates-in-character-class': [ERROR],
    'sonarjs/empty-string-repetition': [ERROR],
    'sonarjs/existing-groups': [ERROR],
    // OFF as this is too much of a constraint
    'sonarjs/function-return-type': [OFF],
    'sonarjs/in-operator-type-error': [ERROR],
    'sonarjs/index-of-compare-to-positive-number': [ERROR],
    'sonarjs/jsx-no-leaked-render': [ERROR],
    'sonarjs/max-union-size': [ERROR, {
      threshold: 3,
    }],
    'sonarjs/new-operator-misuse': [ERROR, {
      // Configured value
      considerJSDoc: true,
    }],
    'sonarjs/no-alphabetical-sort': [ERROR],
    'sonarjs/no-array-delete': [ERROR],
    'sonarjs/no-associative-arrays': [ERROR],
    'sonarjs/no-collection-size-mischeck': [ERROR],
    'sonarjs/no-control-regex': [ERROR],
    'sonarjs/no-duplicate-in-composite': [ERROR],
    'sonarjs/no-empty-after-reluctant': [ERROR],
    'sonarjs/no-empty-alternatives': [ERROR],
    'sonarjs/no-empty-character-class': [ERROR],
    'sonarjs/no-empty-group': [ERROR],
    'sonarjs/no-for-in-iterable': [ERROR],
    'sonarjs/no-ignored-return': [ERROR],
    'sonarjs/no-in-misuse': [ERROR],
    'sonarjs/no-incorrect-string-concat': [ERROR],
    'sonarjs/no-invalid-regexp': [ERROR],
    'sonarjs/no-misleading-array-reverse': [ERROR],
    'sonarjs/no-misleading-character-class': [ERROR],
    'sonarjs/no-redundant-optional': [ERROR],
    'sonarjs/no-regex-spaces': [ERROR],
    'sonarjs/no-require-or-define': [ERROR],
    'sonarjs/no-return-type-any': [ERROR],
    'sonarjs/no-selector-parameter': [ERROR],
    'sonarjs/no-try-promise': [ERROR],
    'sonarjs/no-undefined-argument': [ERROR],
    'sonarjs/no-useless-intersection': [ERROR],
    'sonarjs/non-number-in-arithmetic-expression': [ERROR],
    'sonarjs/null-dereference': [ERROR],
    'sonarjs/operation-returning-nan': [ERROR],
    // TODO: Should be put in a environment browser specific configuration file
    'sonarjs/post-message': [ERROR],
    // TODO: Should be put in a library react specific configuration file
    'sonarjs/prefer-read-only-props': [ERROR],
    'sonarjs/prefer-regexp-exec': [ERROR],
    'sonarjs/prefer-type-guard': [ERROR],
    'sonarjs/public-static-readonly': [ERROR],
    'sonarjs/reduce-initial-value': [ERROR],
    // OFF as it improve code readability
    'sonarjs/redundant-type-aliases': [OFF],
    'sonarjs/single-char-in-character-classes': [ERROR],
    'sonarjs/single-character-alternation': [ERROR],
    'sonarjs/slow-regex': [ERROR],
    'sonarjs/strings-comparison': [ERROR],
    'sonarjs/unicode-aware-regex': [ERROR],
    'sonarjs/unused-import': [ERROR],
    'sonarjs/unused-named-groups': [ERROR],
    'sonarjs/use-type-alias': [ERROR],
    'sonarjs/values-not-convertible-to-numbers': [ERROR],
    'sonarjs/void-use': [ERROR],
  },
} as const satisfies Linter.Config
