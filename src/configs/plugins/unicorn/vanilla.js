'use strict'

const unicornPlugin = require('eslint-plugin-unicorn')


const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'


/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/better-regex': [ERROR, {
      sortCharacterClasses: true, // default
    }],
    'unicorn/catch-error-name': [ERROR, {
      name: 'error', // default
      ignore: [], // default
    }],
    'unicorn/consistent-destructuring': [ERROR],
    'unicorn/consistent-empty-array-spread': [ERROR],
    'unicorn/consistent-existence-index-check': [ERROR],
    'unicorn/consistent-function-scoping': [ERROR, {
      checkArrowFunctions: true, // default
    }],
    'unicorn/custom-error-definition': [ERROR],
    'unicorn/error-message': [ERROR],
    'unicorn/escape-case': [ERROR],
    // Related to the core rule no-warning-comments
    'unicorn/expiring-todo-comments': [ERROR, {
      ignoreDatesOnPullRequests: true, // default
      terms: ['todo', 'fixme'],
      allowWarningComments: true, // default
      ignore: [], // default
      // date: '<today>', // default
    }],
    // Debatable, the usage might prevail
    'unicorn/explicit-length-check': [ERROR, {
      'non-zero': 'greater-than', // default
    }],
    // TODO: Should be configured for special cases, like component file in react projects
    'unicorn/filename-case': [ERROR, {
      case: 'kebabCase',
      ignore: [
        /\.md$/ui,
      ],
    }],
    'unicorn/import-style': [ERROR, {
      // default
      styles: {
        util: { named: true },
        path: { default: true },
        chalk: { default: true },
      },
      extendDefaultStyles: true, // default
      checkImport: true, // default
      checkDynamicImport: true, // default
      checkExportFrom: false, // default
      checkRequire: true, // default
    }],
    // Related to the core rule no-new-wrappers
    'unicorn/new-for-builtins': [ERROR],
    // TODO: Might be duplicate of the rule eslint-comments/no-unlimited-disable
    'unicorn/no-abusive-eslint-disable': [ERROR],
    'unicorn/no-anonymous-default-export': [ERROR],
    // Debatable, the usage might prevail
    'unicorn/no-array-callback-reference': [ERROR],
    'unicorn/no-array-for-each': [ERROR],
    'unicorn/no-array-method-this-argument': [ERROR],
    'unicorn/no-array-push-push': [ERROR, {
      ignore: [], // default
    }],
    // Debatable, but OFF as we want to use reducers
    'unicorn/no-array-reduce': [OFF, {
      allowSimpleOperations: true, // default
    }],
    'unicorn/no-await-expression-member': [ERROR],
    'unicorn/no-await-in-promise-methods': [ERROR],
    'unicorn/no-console-spaces': [ERROR],
    'unicorn/no-empty-file': [ERROR],
    'unicorn/no-for-loop': [ERROR],
    'unicorn/no-hex-escape': [ERROR],
    'unicorn/no-instanceof-array': [ERROR],
    'unicorn/no-invalid-fetch-options': [ERROR],
    // Disabled the check of properties as external libraries don't offer much of a choice here
    'unicorn/no-keyword-prefix': [ERROR, {
      disallowedPrefixes: ['new', 'class'], // default
      checkProperties: false,
      onlyCamelCase: true, // default
    }],
    'unicorn/no-length-as-slice-end': [ERROR],
    'unicorn/no-lonely-if': [ERROR],
    'unicorn/no-magic-array-flat-depth': [ERROR],
    'unicorn/no-negated-condition': [ERROR],
    'unicorn/no-negation-in-equality-check': [ERROR],
    // Supersedes the core rule no-nested-ternary
    'unicorn/no-nested-ternary': [ERROR],
    'unicorn/no-new-array': [ERROR],
    // TODO: Check if it's could be disabled as it might already be handle by the rule n/no-deprecated-api
    'unicorn/no-new-buffer': [ERROR],
    'unicorn/no-null': [ERROR, {
      checkStrictEquality: true,
    }],
    'unicorn/no-object-as-default-parameter': [ERROR],
    // Supersedes the core rule no-process-exit
    'unicorn/no-process-exit': [ERROR],
    'unicorn/no-single-promise-in-promise-methods': [ERROR],
    'unicorn/no-static-only-class': [ERROR],
    'unicorn/no-thenable': [ERROR],
    'unicorn/no-this-assignment': [ERROR],
    'unicorn/no-typeof-undefined': [ERROR, {
      checkGlobalVariables: true,
    }],
    'unicorn/no-unnecessary-await': [ERROR],
    // TODO: Should be configured for every supported environments
    'unicorn/no-unnecessary-polyfills': [ERROR, {
      targets: {
        node: 'current',
      },
    }],
    // TODO: Check if the core rule 'prefer-destructuring' needs to be tweaked
    'unicorn/no-unreadable-array-destructuring': [ERROR],
    'unicorn/no-unreadable-iife': [ERROR],
    'unicorn/no-unused-properties': [ERROR],
    'unicorn/no-useless-fallback-in-spread': [ERROR],
    'unicorn/no-useless-length-check': [ERROR],
    'unicorn/no-useless-promise-resolve-reject': [ERROR],
    'unicorn/no-useless-spread': [ERROR],
    'unicorn/no-useless-switch-case': [ERROR],
    'unicorn/no-useless-undefined': [ERROR, {
      checkArguments: false,
    }],
    'unicorn/no-zero-fractions': [ERROR],
    'unicorn/number-literal-case': [ERROR],
    'unicorn/numeric-separators-style': [ERROR, {
      hexadecimal: {
        onlyIfContainsSeparator: false, // default
        minimumDigits: 0,
        groupLength: 2,
      },
      binary: {
        onlyIfContainsSeparator: false, // default
        minimumDigits: 0,
        groupLength: 4,
      },
      octal: {
        onlyIfContainsSeparator: false, // default
        minimumDigits: 0,
        groupLength: 4,
      },
      number: {
        onlyIfContainsSeparator: false, // default
        minimumDigits: 0,
        groupLength: 3,
      },
    }],
    'unicorn/prefer-add-event-listener': [ERROR, {
      excludedPackages: ['koa', 'sax'], // Default
    }],
    'unicorn/prefer-array-find': [ERROR, {
      checkFromLast: true,
    }],
    'unicorn/prefer-array-flat-map': [ERROR],
    'unicorn/prefer-array-flat': [ERROR, {
      functions: [], // default
    }],
    'unicorn/prefer-array-index-of': [ERROR],
    'unicorn/prefer-array-some': [ERROR],
    // Debatable, the usage might prevail
    'unicorn/prefer-at': [ERROR, {
      checkAllIndexAccess: false, // default
      getLastElementFunctions: [], // default
    }],
    'unicorn/prefer-code-point': [ERROR],
    'unicorn/prefer-date-now': [ERROR],
    'unicorn/prefer-default-parameters': [ERROR],
    'unicorn/prefer-event-target': [ERROR],
    'unicorn/prefer-export-from': [ERROR, {
      ignoreUsedVariables: false, // default
    }],
    'unicorn/prefer-global-this': [ERROR],
    'unicorn/prefer-includes': [ERROR],
    'unicorn/prefer-json-parse-buffer': [ERROR],
    'unicorn/prefer-logical-operator-over-ternary': [ERROR],
    'unicorn/prefer-math-min-max': [ERROR],
    'unicorn/prefer-math-trunc': [ERROR],
    'unicorn/prefer-modern-math-apis': [ERROR],
    // Debatable, the usage might prevail
    'unicorn/prefer-module': [ERROR],
    'unicorn/prefer-native-coercion-functions': [ERROR],
    'unicorn/prefer-negative-index': [ERROR],
    'unicorn/prefer-number-properties': [ERROR, {
      checkInfinity: true, // default
    }],
    'unicorn/prefer-object-from-entries': [ERROR, {
      functions: [], // default
    }],
    'unicorn/prefer-optional-catch-binding': [ERROR],
    'unicorn/prefer-prototype-methods': [ERROR],
    'unicorn/prefer-reflect-apply': [ERROR],
    'unicorn/prefer-regexp-test': [ERROR],
    'unicorn/prefer-set-has': [ERROR],
    'unicorn/prefer-set-size': [ERROR],
    // Related to the core rule prefer-spread
    'unicorn/prefer-spread': [ERROR],
    'unicorn/prefer-string-raw': [ERROR],
    'unicorn/prefer-string-replace-all': [ERROR],
    'unicorn/prefer-string-slice': [ERROR],
    'unicorn/prefer-string-starts-ends-with': [ERROR],
    'unicorn/prefer-string-trim-start-end': [ERROR],
    'unicorn/prefer-structured-clone': [ERROR, {
      functions: [
        '_.cloneDeep', // default
        'lodash.cloneDeep', // default
      ],
    }],
    'unicorn/prefer-switch': [ERROR, {
      minimumCases: 3, // default
      emptyDefaultCase: 'no-default-comment', // default
    }],
    'unicorn/prefer-ternary': [ERROR, 'always'], // default
    'unicorn/prefer-top-level-await': [ERROR],
    'unicorn/prefer-type-error': [ERROR],
    // Should be configured according to specific project standard
    // TODO: The non default configurations might be debatable
    'unicorn/prevent-abbreviations': [ERROR, {
      replacements: {}, // default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L3
      extendDefaultReplacements: true, // default
      allowList: {}, // default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L230
      extendDefaultAllowList: true, // default
      checkDefaultAndNamespaceImports: true,
      checkShorthandImports: true,
      checkShorthandProperties: true,
      checkProperties: true,
      checkVariables: true, // default
      checkFilenames: true, // default
      ignore: [], // default
    }],
    // TODO: Testing the 'never' option, but we might find it clearer to use 'always' instead
    'unicorn/relative-url-style': [ERROR, 'never'], // default
    'unicorn/require-array-join-separator': [ERROR],
    'unicorn/require-number-to-fixed-digits-argument': [ERROR],
    // TODO: Should be configured with commonly used patterns
    'unicorn/string-content': [ERROR, {
      patterns: {
        '^http:\\/\\/': {
          suggest: '^https:\\/\\/',
          message: 'Please secure your links or disable the rule on this line',
        },
      },
    }],
    'unicorn/template-indent': [ERROR, {
      // default
      tags: [
        'outdent',
        'dedent',
        'gql',
        'sql',
        'html',
        'styled',
      ],
      // default
      functions: [
        'dedent',
        'stripIndent',
      ],
      selectors: [], // default
      // default
      comments: [
        'HTML',
        'indent',
      ],
    }],
    'unicorn/text-encoding-identifier-case': [ERROR],
    'unicorn/throw-new-error': [ERROR],
  },
}
