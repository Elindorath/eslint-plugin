import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const unicornVanillaConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/better-regex': [ERROR, {
      sortCharacterClasses: true,
    }],
    'unicorn/catch-error-name': [ERROR, {
      name: 'error',
      ignore: [],
    }],
    // Not safe before ES2015, should be disabled in this case
    'unicorn/consistent-date-clone': [ERROR],
    'unicorn/consistent-destructuring': [ERROR],
    'unicorn/consistent-empty-array-spread': [ERROR],
    'unicorn/consistent-existence-index-check': [ERROR],
    'unicorn/consistent-function-scoping': [ERROR, {
      checkArrowFunctions: true,
    }],
    'unicorn/custom-error-definition': [ERROR],
    'unicorn/error-message': [ERROR],
    'unicorn/escape-case': [ERROR, 'uppercase'],
    // Related to the core rule no-warning-comments
    'unicorn/expiring-todo-comments': [ERROR, {
      allowWarningComments: true,
      ignore: [],
      ignoreDatesOnPullRequests: true,
      // Configured value
      terms: ['todo', 'fixme'],
      // date: '<today>',
    }],
    // Debatable, the usage might prevail
    'unicorn/explicit-length-check': [ERROR, {
      'non-zero': 'greater-than',
    }],
    // TODO: Should be configured for special cases, like component file in react projects
    'unicorn/filename-case': [ERROR, {
      // Configured value
      case: 'kebabCase',
      // Configured value
      ignore: [
        /\.md$/ui,
      ],
    }],
    'unicorn/import-style': [ERROR, {

      checkDynamicImport: true,
      checkExportFrom: false,
      checkImport: true,
      checkRequire: true,
      extendDefaultStyles: true,
      styles: {
        chalk: { default: true },
        path: { default: true },
        util: { named: true },
      },
    }],
    // Related to the core rule no-new-wrappers
    'unicorn/new-for-builtins': [ERROR],
    // TODO: Might be duplicate of the rule eslint-comments/no-unlimited-disable
    'unicorn/no-abusive-eslint-disable': [ERROR],
    'unicorn/no-accessor-recursion': [ERROR],
    'unicorn/no-anonymous-default-export': [ERROR],
    // Debatable, the usage might prevail
    'unicorn/no-array-callback-reference': [ERROR],
    'unicorn/no-array-for-each': [ERROR],
    'unicorn/no-array-method-this-argument': [ERROR],
    // Debatable, but OFF as we want to use reducers
    'unicorn/no-array-reduce': [OFF, {
      allowSimpleOperations: true,
    }],
    'unicorn/no-await-expression-member': [ERROR],
    'unicorn/no-await-in-promise-methods': [ERROR],
    'unicorn/no-console-spaces': [ERROR],
    'unicorn/no-empty-file': [ERROR],
    'unicorn/no-for-loop': [ERROR],
    'unicorn/no-hex-escape': [ERROR],
    'unicorn/no-instanceof-builtins': [ERROR, {
      exclude: [],
      include: [],
      // Configured value
      strategy: 'strict',
      // Configured value
      useErrorIsError: true,
    }],
    'unicorn/no-invalid-fetch-options': [ERROR],
    // Disabled the check of properties as external libraries don't offer much of a choice here
    'unicorn/no-keyword-prefix': [ERROR, {
      // Configured value
      checkProperties: false,
      disallowedPrefixes: ['new', 'class'],
      onlyCamelCase: true,
    }],
    'unicorn/no-lonely-if': [ERROR],
    'unicorn/no-magic-array-flat-depth': [ERROR],
    // TODO: Conflicts with the `import-x/no-named-default` rule, but might report more cases
    'unicorn/no-named-default': [ERROR],
    'unicorn/no-negated-condition': [ERROR],
    'unicorn/no-negation-in-equality-check': [ERROR],
    // Supersedes the core rule no-nested-ternary
    'unicorn/no-nested-ternary': [ERROR],
    'unicorn/no-new-array': [ERROR],
    // TODO: Check if it's could be disabled as it might already be handle by the rule n/no-deprecated-api
    'unicorn/no-new-buffer': [ERROR],
    'unicorn/no-null': [ERROR, {
      // Configured value
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
      // Configured value
      checkGlobalVariables: true,
    }],
    'unicorn/no-unnecessary-array-flat-depth': [ERROR],
    'unicorn/no-unnecessary-array-splice-count': [ERROR],
    'unicorn/no-unnecessary-await': [ERROR],
    // TODO: Should be configured for every supported environments
    'unicorn/no-unnecessary-polyfills': [ERROR, {
      // Configured value
      targets: {
        node: 'current',
      },
    }],
    'unicorn/no-unnecessary-slice-end': [ERROR],
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
      // Configured value
      checkArguments: false,
    }],
    'unicorn/no-zero-fractions': [ERROR],
    'unicorn/number-literal-case': [ERROR, {
      hexadecimalValue: 'uppercase',
    }],
    'unicorn/numeric-separators-style': [ERROR, {
      binary: {
        // Configured value
        groupLength: 4,
        // Configured value
        minimumDigits: 0,
        onlyIfContainsSeparator: false,
      },
      hexadecimal: {
        // Configured value
        groupLength: 2,
        // Configured value
        minimumDigits: 0,
        onlyIfContainsSeparator: false,
      },
      number: {
        // Configured value
        groupLength: 3,
        // Configured value
        minimumDigits: 0,
        onlyIfContainsSeparator: false,
      },
      octal: {
        // Configured value
        groupLength: 4,
        // Configured value
        minimumDigits: 0,
        onlyIfContainsSeparator: false,
      },
    }],
    'unicorn/prefer-add-event-listener': [ERROR, {
      excludedPackages: ['koa', 'sax'],
    }],
    'unicorn/prefer-array-find': [ERROR, {
      // Configured value
      checkFromLast: true,
    }],
    'unicorn/prefer-array-flat': [ERROR, {
      functions: [],
    }],
    'unicorn/prefer-array-flat-map': [ERROR],
    'unicorn/prefer-array-index-of': [ERROR],
    'unicorn/prefer-array-some': [ERROR],
    // Debatable, the usage might prevail
    'unicorn/prefer-at': [ERROR, {
      checkAllIndexAccess: false,
      getLastElementFunctions: [],
    }],
    'unicorn/prefer-code-point': [ERROR],
    'unicorn/prefer-date-now': [ERROR],
    'unicorn/prefer-default-parameters': [ERROR],
    'unicorn/prefer-event-target': [ERROR],
    'unicorn/prefer-export-from': [ERROR, {
      ignoreUsedVariables: false,
    }],
    'unicorn/prefer-global-this': [ERROR],
    'unicorn/prefer-import-meta-properties': [ERROR],
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
      checkInfinity: true,
    }],
    'unicorn/prefer-object-from-entries': [ERROR, {
      functions: [],
    }],
    'unicorn/prefer-optional-catch-binding': [ERROR],
    'unicorn/prefer-prototype-methods': [ERROR],
    'unicorn/prefer-reflect-apply': [ERROR],
    'unicorn/prefer-regexp-test': [ERROR],
    'unicorn/prefer-set-has': [ERROR],
    'unicorn/prefer-set-size': [ERROR],
    'unicorn/prefer-single-call': [ERROR, {
      ignore: [],
    }],
    // Related to the core rule prefer-spread
    'unicorn/prefer-spread': [ERROR],
    'unicorn/prefer-string-raw': [ERROR],
    'unicorn/prefer-string-replace-all': [ERROR],
    'unicorn/prefer-string-slice': [ERROR],
    'unicorn/prefer-string-starts-ends-with': [ERROR],
    'unicorn/prefer-string-trim-start-end': [ERROR],
    'unicorn/prefer-structured-clone': [ERROR, {
      functions: [
        '_.cloneDeep',
        'lodash.cloneDeep',
      ],
    }],
    'unicorn/prefer-switch': [ERROR, {
      emptyDefaultCase: 'no-default-comment',
      minimumCases: 3,
    }],
    'unicorn/prefer-ternary': [ERROR, 'always'],
    'unicorn/prefer-top-level-await': [ERROR],
    'unicorn/prefer-type-error': [ERROR],

    /**
     * Should be configured according to specific project standard
     * TODO: The non default configurations might be debatable
     */
    'unicorn/prevent-abbreviations': [ERROR, {
      // Default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L230
      allowList: {},
      // Configured value
      checkDefaultAndNamespaceImports: true,
      checkFilenames: true,
      // Configured value
      checkProperties: true,
      // Configured value
      checkShorthandImports: true,
      // Configured value
      checkShorthandProperties: true,
      checkVariables: true,
      extendDefaultAllowList: true,
      extendDefaultReplacements: true,
      ignore: [],
      // Default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L3
      replacements: {},
    }],
    // TODO: Testing the 'never' option, but we might find it clearer to use 'always' instead
    'unicorn/relative-url-style': [ERROR, 'never'],
    'unicorn/require-array-join-separator': [ERROR],
    'unicorn/require-number-to-fixed-digits-argument': [ERROR],
    // TODO: Should be configured with commonly used patterns
    'unicorn/string-content': [ERROR, {
      // Configured value
      patterns: {
        '^http:\\/\\/': {
          message: 'Please secure your links or disable the rule on this line',
          suggest: String.raw`^https:\/\/`,
        },
      },
    }],
    'unicorn/template-indent': [ERROR, {
      comments: [
        'HTML',
        'indent',
      ],
      functions: [
        'dedent',
        'stripIndent',
      ],
      selectors: [],
      tags: [
        'outdent',
        'dedent',
        'gql',
        'sql',
        'html',
        'styled',
      ],
    }],
    'unicorn/text-encoding-identifier-case': [ERROR],
    'unicorn/throw-new-error': [ERROR],
  },
} as const satisfies Linter.Config
