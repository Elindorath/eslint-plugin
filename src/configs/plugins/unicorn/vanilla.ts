/* eslint-disable max-lines -- TODO: Could be splitted in subparts */
import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const unicornVanillaConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/better-dom-traversing': [ERROR],
    'unicorn/catch-error-name': [ERROR, {
      name: 'error',
      ignore: [],
    }],
    'unicorn/class-reference-in-static-methods': [ERROR, {
      preferSuper: true,
      preferThis: true,
    }],
    'unicorn/comment-content': [ERROR, {
      checkUniformCase: true,
      extendDefaultReplacements: true,
      replacements: {},
    }],
    // OFF as it contradicts the `requireBodyBraces` option of the sonarjs/arrow-function-convention rule
    'unicorn/consistent-arrow-return-style': [OFF],
    'unicorn/consistent-boolean-name': [ERROR, {
      checkArguments: 'always',
      checkFields: 'never',
      checkFunctions: 'always',
      checkMethods: 'never',
      checkVariables: 'always',
      ignore: [],
      wrappers: {},
    }],
    'unicorn/consistent-class-member-order': [ERROR, {
      order: [
        'static-field',
        'static-block',
        'static-method',
        'private-field',
        'public-field',
        'constructor',
        'private-method',
        'public-method',
      ],
    }],
    'unicorn/consistent-compound-words': [ERROR, {}],
    'unicorn/consistent-conditional-object-spread': [ERROR, 'logical'],
    // Not safe before ES2015, should be disabled in this case
    'unicorn/consistent-date-clone': [ERROR],
    'unicorn/consistent-destructuring': [ERROR],
    'unicorn/consistent-empty-array-spread': [ERROR],
    'unicorn/consistent-existence-index-check': [ERROR],
    'unicorn/consistent-export-decorator-position': [ERROR, 'above'],
    'unicorn/consistent-function-scoping': [ERROR, {
      checkArrowFunctions: true,
    }],
    'unicorn/consistent-function-style': [ERROR, {
      callbacks: 'ignore',
      default: 'ignore',
      namedExports: 'ignore',
      namedFunctions: 'ignore',
      objectProperties: 'ignore',
      reassignedVariables: 'ignore',
      typedVariables: 'ignore',
    }],
    'unicorn/consistent-json-file-read': [ERROR, 'buffer'],
    'unicorn/consistent-optional-chaining': [ERROR],
    'unicorn/consistent-template-literal-escape': [ERROR],
    'unicorn/consistent-tuple-labels': [ERROR],
    'unicorn/custom-error-definition': [ERROR],
    'unicorn/default-export-style': [ERROR, {
      classes: 'inline',
      functions: 'inline',
    }],
    'unicorn/error-message': [ERROR],
    'unicorn/escape-case': [ERROR, 'uppercase'],
    // Related to the core rule no-warning-comments
    'unicorn/expiring-todo-comments': [ERROR, {
      allowWarningComments: true,
      // Configured value
      checkDates: true,
      checkDatesOnPullRequests: false,
      ignore: [],
      // Configured value
      terms: ['todo', 'fixme'],
      // date: '<today>',
    }],
    // Debatable, the usage might prevail
    'unicorn/explicit-length-check': [ERROR, {
      'non-zero': 'greater-than',
    }],
    'unicorn/explicit-timer-delay': [ERROR, 'always'],
    // TODO: Should be configured for special cases, like component file in react projects
    'unicorn/filename-case': [ERROR, {
      // Configured value
      case: 'kebabCase',
      // Configured value
      ignore: [
        /\.md$/ui,
      ],
    }],
    'unicorn/id-match': [ERROR, '^.+$', {
      checkNamedSpecifiers: true,
      classFields: false,
      ignoreDestructuring: false,
      onlyDeclarations: false,
      properties: false,
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
    'unicorn/isolated-functions': [ERROR, {
      comments: ['@isolated'],
      functions: ['makeSynchronous'],
      overrideGlobals: undefined,
      selectors: [],
    }],
    'unicorn/iteration-fallback-style': [ERROR, 'guard'],
    'unicorn/logical-assignment-operators': [ERROR, 'always'],
    'unicorn/max-nested-calls': [ERROR, {
      max: 3,
    }],
    'unicorn/name-replacements': [ERROR, {
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
    // Related to the core rule no-new-wrappers
    'unicorn/new-for-builtins': [ERROR],
    // TODO: Might be duplicate of the rule eslint-comments/no-unlimited-disable
    'unicorn/no-abusive-eslint-disable': [ERROR],
    'unicorn/no-accessor-recursion': [ERROR],
    'unicorn/no-accidental-bitwise-operator': [ERROR],
    'unicorn/no-anonymous-default-export': [ERROR],
    // Debatable, the usage might prevail
    'unicorn/no-array-callback-reference': [ERROR],
    'unicorn/no-array-concat-in-loop': [ERROR],
    'unicorn/no-array-fill-with-reference-type': [ERROR],
    'unicorn/no-array-from-fill': [ERROR],
    'unicorn/no-array-front-mutation': [ERROR],
    'unicorn/no-array-method-this-argument': [ERROR],
    // Debatable, but OFF as we want to use reducers
    'unicorn/no-array-reduce': [OFF, {
      allowSimpleOperations: true,
    }],
    'unicorn/no-array-reverse': [ERROR, {
      // Configured value
      allowExpressionStatement: false,
    }],
    'unicorn/no-array-sort': [ERROR, {
      // Configured value
      allowExpressionStatement: false,
    }],
    'unicorn/no-array-sort-for-min-max': [ERROR],
    'unicorn/no-array-splice': [ERROR],
    // OFF as it would reformat every documentation comment, to be revisited on its own
    'unicorn/no-asterisk-prefix-in-documentation-comments': [OFF],
    'unicorn/no-async-promise-finally': [ERROR],
    'unicorn/no-await-expression-member': [ERROR],
    'unicorn/no-await-in-promise-methods': [ERROR],
    'unicorn/no-barrel-files': [ERROR],
    'unicorn/no-blob-to-file': [ERROR],
    'unicorn/no-boolean-sort-comparator': [ERROR],
    'unicorn/no-break-in-nested-loop': [ERROR],
    'unicorn/no-canvas-to-image': [ERROR],
    'unicorn/no-chained-comparison': [ERROR],
    'unicorn/no-collection-bracket-access': [ERROR],
    'unicorn/no-computed-property-existence-check': [ERROR],
    'unicorn/no-confusing-array-splice': [ERROR],
    'unicorn/no-confusing-array-with': [ERROR],
    'unicorn/no-console-spaces': [ERROR],
    'unicorn/no-constant-zero-expression': [ERROR],
    'unicorn/no-declarations-before-early-exit': [ERROR],
    'unicorn/no-double-comparison': [ERROR],
    'unicorn/no-duplicate-if-branches': [ERROR],
    'unicorn/no-duplicate-logical-operands': [ERROR],
    'unicorn/no-duplicate-loops': [ERROR],
    'unicorn/no-duplicate-set-values': [ERROR],
    'unicorn/no-empty-file': [ERROR],
    'unicorn/no-error-property-assignment': [ERROR],
    'unicorn/no-exports-in-scripts': [ERROR],
    'unicorn/no-for-each': [ERROR],
    'unicorn/no-for-loop': [ERROR],
    'unicorn/no-global-object-property-assignment': [ERROR],
    'unicorn/no-immediate-mutation': [ERROR],
    'unicorn/no-impossible-length-comparison': [ERROR],
    'unicorn/no-incorrect-query-selector': [ERROR],
    'unicorn/no-incorrect-template-string-interpolation': [ERROR],
    'unicorn/no-instanceof-builtins': [ERROR, {
      exclude: [],
      include: [],
      // Configured value
      strategy: 'strict',
      // Configured value
      useErrorIsError: true,
    }],
    'unicorn/no-invalid-argument-count': [ERROR, {}],
    'unicorn/no-invalid-character-comparison': [ERROR],
    'unicorn/no-invalid-fetch-options': [ERROR],
    'unicorn/no-invalid-file-input-accept': [ERROR],
    'unicorn/no-invalid-well-known-symbol-methods': [ERROR],
    // Disabled the check of properties as external libraries don't offer much of a choice here
    'unicorn/no-keyword-prefix': [ERROR, {
      // Configured value
      checkProperties: false,
      disallowedPrefixes: ['new', 'class'],
      onlyCamelCase: true,
    }],
    'unicorn/no-late-current-target-access': [ERROR],
    'unicorn/no-late-event-control': [ERROR],
    'unicorn/no-lonely-if': [ERROR],
    'unicorn/no-loop-iterable-mutation': [ERROR],
    'unicorn/no-magic-array-flat-depth': [ERROR],
    'unicorn/no-manually-wrapped-comments': [ERROR],
    'unicorn/no-mismatched-map-key': [ERROR],
    'unicorn/no-misrefactored-assignment': [ERROR],
    'unicorn/no-missing-local-resource': [ERROR],
    'unicorn/no-multiple-promise-resolver-calls': [ERROR],
    // TODO: Conflicts with the `import-x/no-named-default` rule, but might report more cases
    'unicorn/no-named-default': [ERROR],
    'unicorn/no-negated-array-predicate': [ERROR],
    'unicorn/no-negated-comparison': [ERROR, {
      checkLogicalExpressions: false,
    }],
    'unicorn/no-negated-condition': [ERROR],
    'unicorn/no-negation-in-equality-check': [ERROR],
    // Supersedes the core rule no-nested-ternary
    'unicorn/no-nested-ternary': [ERROR],
    'unicorn/no-new-array': [ERROR],
    // TODO: Check if it's could be disabled as it might already be handle by the rule n/no-deprecated-api
    'unicorn/no-new-buffer': [ERROR],
    'unicorn/no-non-function-verb-prefix': [ERROR, {
      ignore: [],
      verbs: [
        'get',
        'set',
        'unset',
        'delete',
        'add',
        'remove',
        'destroy',
        'create',
      ],
    }],
    'unicorn/no-nonstandard-builtin-properties': [ERROR],
    'unicorn/no-null': [ERROR, {
      // Configured value
      checkStrictEquality: true,
    }],
    'unicorn/no-object-as-default-parameter': [ERROR],
    'unicorn/no-object-methods-with-collections': [ERROR],
    'unicorn/no-optional-chaining-on-undeclared-variable': [ERROR],
    // Supersedes the core rule no-process-exit
    'unicorn/no-process-exit': [ERROR],
    'unicorn/no-redundant-comparison': [ERROR],
    'unicorn/no-return-array-push': [ERROR],
    'unicorn/no-selector-as-dom-name': [ERROR],
    'unicorn/no-shorthand-property-overrides': [ERROR],

    'unicorn/no-single-promise-in-promise-methods': [ERROR],
    'unicorn/no-static-only-class': [ERROR],
    'unicorn/no-subtraction-comparison': [ERROR],
    'unicorn/no-thenable': [ERROR],
    'unicorn/no-this-assignment': [ERROR],
    'unicorn/no-this-outside-of-class': [ERROR],
    'unicorn/no-top-level-assignment-in-function': [ERROR],
    'unicorn/no-top-level-side-effects': [ERROR],
    'unicorn/no-transition-all': [ERROR],
    'unicorn/no-typeof-undefined': [ERROR, {
      // Configured value
      checkGlobalVariables: true,
    }],
    'unicorn/no-uncalled-method': [ERROR],
    'unicorn/no-undeclared-class-members': [ERROR],
    'unicorn/no-unnecessary-array-flat-depth': [ERROR],
    'unicorn/no-unnecessary-array-flat-map': [ERROR],
    'unicorn/no-unnecessary-array-splice-count': [ERROR],
    'unicorn/no-unnecessary-await': [ERROR],
    'unicorn/no-unnecessary-boolean-comparison': [ERROR],
    'unicorn/no-unnecessary-fetch-options': [ERROR],
    'unicorn/no-unnecessary-global-this': [ERROR],
    'unicorn/no-unnecessary-nested-ternary': [ERROR],
    // TODO: Should be configured for every supported environments
    'unicorn/no-unnecessary-polyfills': [ERROR, {
      // Configured value
      targets: {
        node: 'current',
      },
    }],
    'unicorn/no-unnecessary-slice-end': [ERROR],
    'unicorn/no-unnecessary-splice': [ERROR],
    'unicorn/no-unnecessary-string-trim': [ERROR],
    // TODO: Check if the core rule 'prefer-destructuring' needs to be tweaked
    'unicorn/no-unreadable-array-destructuring': [ERROR],
    'unicorn/no-unreadable-for-of-expression': [ERROR],
    'unicorn/no-unreadable-iife': [ERROR],
    'unicorn/no-unreadable-new-expression': [ERROR],
    'unicorn/no-unreadable-object-destructuring': [ERROR],
    'unicorn/no-unsafe-buffer-conversion': [ERROR],
    'unicorn/no-unsafe-dom-html': [ERROR],
    'unicorn/no-unsafe-promise-all-settled-values': [ERROR],
    'unicorn/no-unsafe-property-key': [ERROR],
    'unicorn/no-unsafe-sqlite-interpolation': [ERROR],
    'unicorn/no-unsafe-string-replacement': [ERROR],
    'unicorn/no-unused-array-method-return': [ERROR],
    'unicorn/no-unused-properties': [ERROR],
    'unicorn/no-useless-boolean-cast': [ERROR],
    'unicorn/no-useless-coercion': [ERROR],
    'unicorn/no-useless-collection-argument': [ERROR],
    'unicorn/no-useless-compound-assignment': [ERROR],
    'unicorn/no-useless-concat': [ERROR],
    'unicorn/no-useless-continue': [ERROR],
    'unicorn/no-useless-delete-check': [ERROR],
    'unicorn/no-useless-else': [ERROR],
    'unicorn/no-useless-error-capture-stack-trace': [ERROR],
    'unicorn/no-useless-fallback-in-spread': [ERROR],
    'unicorn/no-useless-iterator-to-array': [ERROR],
    'unicorn/no-useless-length-check': [ERROR],
    'unicorn/no-useless-logical-operand': [ERROR],
    'unicorn/no-useless-override': [ERROR],
    'unicorn/no-useless-promise-resolve-reject': [ERROR],
    'unicorn/no-useless-re-export': [ERROR],
    'unicorn/no-useless-recursion': [ERROR],
    'unicorn/no-useless-spread': [ERROR],
    'unicorn/no-useless-switch-case': [ERROR],
    'unicorn/no-useless-template-literals': [ERROR],
    'unicorn/no-useless-undefined': [ERROR, {
      // Configured value
      checkArguments: false,
    }],
    'unicorn/no-xor-as-exponentiation': [ERROR],
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
    'unicorn/operator-assignment': [ERROR, 'always'],
    'unicorn/prefer-abort-signal-any': [ERROR],
    'unicorn/prefer-abort-signal-timeout': [ERROR],
    'unicorn/prefer-add-event-listener': [ERROR, {
      excludedPackages: ['koa', 'sax'],
    }],
    'unicorn/prefer-add-event-listener-options': [ERROR],
    'unicorn/prefer-aggregate-error': [ERROR],
    'unicorn/prefer-array-find': [ERROR, {
      // Configured value
      checkFromLast: true,
    }],
    'unicorn/prefer-array-flat': [ERROR, {
      functions: [],
    }],
    'unicorn/prefer-array-flat-map': [ERROR],
    'unicorn/prefer-array-from-async': [ERROR],
    'unicorn/prefer-array-from-map': [ERROR],
    'unicorn/prefer-array-from-range': [ERROR],
    'unicorn/prefer-array-index-of': [ERROR],
    'unicorn/prefer-array-iterable-methods': [ERROR],
    'unicorn/prefer-array-last-methods': [ERROR],
    'unicorn/prefer-array-slice': [ERROR],
    'unicorn/prefer-array-some': [ERROR],
    // Debatable, the usage might prevail
    'unicorn/prefer-at': [ERROR, {
      checkAllIndexAccess: false,
      getLastElementFunctions: [],
    }],
    'unicorn/prefer-await': [ERROR],
    'unicorn/prefer-bigint-literals': [ERROR],
    'unicorn/prefer-block-statement-over-iife': [ERROR],
    'unicorn/prefer-boolean-return': [ERROR],
    'unicorn/prefer-class-fields': [ERROR],
    'unicorn/prefer-code-point': [ERROR],
    'unicorn/prefer-continue': [ERROR, {
      maximumStatements: 1,
    }],
    'unicorn/prefer-date-now': [ERROR],
    'unicorn/prefer-default-parameters': [ERROR],
    'unicorn/prefer-direct-iteration': [ERROR],
    'unicorn/prefer-dispose': [ERROR],
    'unicorn/prefer-dom-node-html-methods': [ERROR, {
      checkGetHTML: true,
      checkSetHTML: false,
    }],
    'unicorn/prefer-dom-node-replace-children': [ERROR],
    'unicorn/prefer-early-return': [ERROR, {
      maximumStatements: 1,
    }],
    'unicorn/prefer-else-if': [ERROR],
    'unicorn/prefer-error-is-error': [ERROR],
    'unicorn/prefer-event-target': [ERROR],
    // OFF as it only targets CSS, which this plugin doesn't lint yet
    'unicorn/prefer-explicit-viewport-units': [OFF],
    'unicorn/prefer-export-from': [ERROR, {
      checkUsedVariables: true,
    }],
    'unicorn/prefer-flat-math-min-max': [ERROR],
    'unicorn/prefer-get-or-insert-computed': [ERROR],
    // OFF as it contradicts the `checkInfinity` option of the unicorn/prefer-number-properties rule
    'unicorn/prefer-global-number-constants': [OFF],
    'unicorn/prefer-global-this': [ERROR],
    'unicorn/prefer-group-by': [ERROR],
    'unicorn/prefer-has-check': [ERROR],
    'unicorn/prefer-hoisting-branch-code': [ERROR],
    'unicorn/prefer-https': [ERROR, {
      ignore: [],
    }],
    'unicorn/prefer-identifier-import-export-specifiers': [ERROR],
    'unicorn/prefer-import-meta-properties': [ERROR],
    'unicorn/prefer-includes': [ERROR],
    'unicorn/prefer-includes-over-repeated-comparisons': [ERROR, {
      minimumComparisons: 3,
    }],
    'unicorn/prefer-iterable-in-constructor': [ERROR],
    'unicorn/prefer-iterator-concat': [ERROR],
    'unicorn/prefer-iterator-helpers': [ERROR],
    'unicorn/prefer-iterator-to-array': [ERROR],
    'unicorn/prefer-iterator-to-array-at-end': [ERROR],
    'unicorn/prefer-location-assign': [ERROR],
    'unicorn/prefer-logical-operator-over-ternary': [ERROR],
    'unicorn/prefer-map-from-entries': [ERROR],
    'unicorn/prefer-math-abs': [ERROR],
    'unicorn/prefer-math-constants': [ERROR],
    'unicorn/prefer-math-min-max': [ERROR],
    'unicorn/prefer-math-trunc': [ERROR],
    'unicorn/prefer-minimal-ternary': [ERROR, {
      checkComputedMemberAccess: false,
      checkVaryingBase: false,
    }],
    'unicorn/prefer-modern-math-apis': [ERROR],
    // Debatable, the usage might prevail
    'unicorn/prefer-module': [ERROR],
    'unicorn/prefer-native-coercion-functions': [ERROR],
    'unicorn/prefer-negative-index': [ERROR],
    'unicorn/prefer-number-coercion': [ERROR],
    'unicorn/prefer-number-is-safe-integer': [ERROR],
    'unicorn/prefer-number-properties': [ERROR, {
      checkInfinity: true,
    }],
    'unicorn/prefer-object-define-properties': [ERROR],
    'unicorn/prefer-object-destructuring-defaults': [ERROR],
    'unicorn/prefer-object-from-entries': [ERROR, {
      functions: [],
    }],
    'unicorn/prefer-object-iterable-methods': [ERROR],
    'unicorn/prefer-observer-apis': [ERROR],
    'unicorn/prefer-optional-catch-binding': [ERROR],
    'unicorn/prefer-path2d': [ERROR],
    'unicorn/prefer-private-class-fields': [ERROR],
    'unicorn/prefer-promise-try': [ERROR],
    'unicorn/prefer-promise-with-resolvers': [ERROR],
    'unicorn/prefer-prototype-methods': [ERROR],
    'unicorn/prefer-queue-microtask': [ERROR, {
      checkSetImmediate: false,
      checkSetTimeout: false,
    }],
    'unicorn/prefer-reflect-apply': [ERROR],
    'unicorn/prefer-regexp-escape': [ERROR],
    'unicorn/prefer-regexp-test': [ERROR],
    'unicorn/prefer-response-static-json': [ERROR],
    'unicorn/prefer-scoped-selector': [ERROR],
    'unicorn/prefer-set-has': [ERROR],
    'unicorn/prefer-set-methods': [ERROR],
    'unicorn/prefer-set-size': [ERROR],
    'unicorn/prefer-short-arrow-method': [ERROR, 'always'],
    'unicorn/prefer-simple-condition-first': [ERROR],
    'unicorn/prefer-simple-sort-comparator': [ERROR],
    'unicorn/prefer-simplified-conditions': [ERROR],
    'unicorn/prefer-single-array-predicate': [ERROR],
    'unicorn/prefer-single-call': [ERROR, {
      ignore: [],
    }],
    'unicorn/prefer-single-object-destructuring': [ERROR],
    'unicorn/prefer-single-replace': [ERROR],
    'unicorn/prefer-smaller-scope': [ERROR],
    'unicorn/prefer-split-limit': [ERROR],
    // Related to the core rule prefer-spread
    'unicorn/prefer-spread': [ERROR],
    'unicorn/prefer-string-match-all': [ERROR],
    'unicorn/prefer-string-pad-start-end': [ERROR],
    'unicorn/prefer-string-raw': [ERROR],
    'unicorn/prefer-string-repeat': [ERROR, {
      minimumRepetitions: 3,
    }],
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
    'unicorn/prefer-temporal': [ERROR, {
      checkDateNow: false,
      checkMethods: false,
      checkReferences: false,
    }],
    'unicorn/prefer-ternary': [ERROR, 'always'],
    'unicorn/prefer-then-catch': [ERROR],
    'unicorn/prefer-toggle-attribute': [ERROR],
    'unicorn/prefer-top-level-await': [ERROR],
    'unicorn/prefer-type-error': [ERROR],
    'unicorn/prefer-type-literal-last': [ERROR],
    'unicorn/prefer-uint8array-base64': [ERROR],
    'unicorn/prefer-unary-minus': [ERROR],
    'unicorn/prefer-unicode-code-point-escapes': [ERROR],
    'unicorn/prefer-url-can-parse': [ERROR],
    'unicorn/prefer-url-href': [ERROR],
    'unicorn/prefer-url-search-parameters': [ERROR],
    'unicorn/prefer-while-loop-condition': [ERROR],

    /**
     * Should be configured according to specific project standard
     * TODO: The non default configurations might be debatable
     */
    // TODO: Testing the 'never' option, but we might find it clearer to use 'always' instead
    'unicorn/relative-url-style': [ERROR, 'never'],
    'unicorn/require-array-join-separator': [ERROR],
    'unicorn/require-array-sort-compare': [ERROR],
    'unicorn/require-css-escape': [ERROR, {
      checkAllSelectors: false,
    }],
    'unicorn/require-frontmatter-fields': [ERROR, {
      fields: [],
    }],
    'unicorn/require-module-attributes': [ERROR],
    'unicorn/require-module-specifiers': [ERROR],
    'unicorn/require-number-to-fixed-digits-argument': [ERROR],
    'unicorn/require-passive-events': [ERROR],
    'unicorn/require-proxy-trap-boolean-return': [ERROR],
    // OFF as it would reformat every documentation comment, to be revisited on its own
    'unicorn/single-line-block-comment-style': [OFF, 'multiline', {
      ignore: [],
    }],
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
    'unicorn/switch-case-break-position': [ERROR],
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
    'unicorn/text-encoding-identifier-case': [ERROR, {
      withDash: false,
    }],
    'unicorn/throw-new-error': [ERROR],
    'unicorn/try-complexity': [ERROR, {
      max: 1,
    }],
  },
} as const satisfies Linter.Config

/* eslint-enable */
