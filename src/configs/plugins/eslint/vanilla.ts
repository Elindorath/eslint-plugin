/* eslint-disable max-lines -- TODO: Could be splitted in subparts */

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'

const NOT_A_FUNCTION_MESSAGE = 'This is not a function.'
const UNEXPECTED_THIS_MESSAGE = 'Unexpected this.'

export const eslintVanillaConfig = {
  rules: {
    /* ----- Possible problems ----- */
    'array-callback-return': [ERROR, {
      // Configured value
      allowImplicit: true,
      allowVoid: false,
      // Configured value
      checkForEach: true,
    }],
    // Should be disabled in Typescript projects as the compiler already checks this
    'constructor-super': [ERROR],
    'for-direction': [ERROR],
    'getter-return': [ERROR, {
      allowImplicit: false,
    }],
    'no-async-promise-executor': [ERROR],
    'no-await-in-loop': [ERROR],
    'no-class-assign': [ERROR],
    'no-compare-neg-zero': [ERROR],
    'no-cond-assign': [ERROR, 'always'],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-const-assign': [ERROR],
    'no-constant-binary-expression': [ERROR],
    'no-constant-condition': [ERROR, {
      checkLoops: true,
    }],
    'no-constructor-return': [ERROR],
    'no-control-regex': [ERROR],
    'no-debugger': [ERROR],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-dupe-args': [ERROR],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-dupe-class-members': [ERROR],
    'no-dupe-else-if': [ERROR],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-dupe-keys': [ERROR],
    'no-duplicate-case': [ERROR],
    'no-duplicate-imports': [ERROR, {
      // Configured value
      allowSeparateTypeImports: true,
      includeExports: true,
    }],
    'no-empty-character-class': [ERROR],
    'no-empty-pattern': [ERROR, {
      allowObjectPatternsAsParameters: false,
    }],
    'no-ex-assign': [ERROR],
    'no-fallthrough': [ERROR, {
      allowEmptyCase: false,
      commentPattern: String.raw`falls?\s?through`,
    }],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-func-assign': [ERROR],
    // Enabled even in Typescript projects despite the compiler already checking it because it catch more cases
    'no-import-assign': [ERROR],
    'no-inner-declarations': [ERROR, 'both'],
    'no-invalid-regexp': [ERROR, {
      allowConstructorFlags: ['g', 'm', 'i', 'y', 'u', 'v', 's', 'd'],
    }],
    'no-irregular-whitespace': [ERROR, {
      skipComments: false,
      skipJSXText: false,
      skipRegExps: false,
      // Configured value
      skipStrings: false,
      skipTemplates: false,
    }],
    'no-loss-of-precision': [ERROR],
    'no-misleading-character-class': [ERROR, {
      allowEscape: false,
    }],
    'no-new-native-nonconstructor': [ERROR],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-obj-calls': [ERROR],
    'no-promise-executor-return': [ERROR, {
      allowVoid: false,
    }],
    'no-prototype-builtins': [ERROR],
    'no-self-assign': [ERROR, {
      props: true,
    }],
    'no-self-compare': [ERROR],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-setter-return': [ERROR],
    'no-sparse-arrays': [ERROR],
    'no-template-curly-in-string': [ERROR],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-this-before-super': [ERROR],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-undef': [ERROR, {
      // Configured value
      typeof: true,
    }],
    'no-unexpected-multiline': [ERROR],
    'no-unmodified-loop-condition': [ERROR],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-unreachable': [ERROR],
    'no-unreachable-loop': [ERROR, {
      ignore: [],
    }],
    'no-unsafe-finally': [ERROR],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-unsafe-negation': [ERROR, {
      // Configured value
      enforceForOrderingRelations: true,
    }],
    'no-unsafe-optional-chaining': [ERROR, {
      // Configured value
      disallowArithmeticOperators: true,
    }],
    'no-unused-private-class-members': [ERROR],
    // If we change the '*IgnorePattern', we might want to use the '@eslint-community/eslint-plugin-mysticatea/no-use-ignored-vars' rule
    'no-unused-vars': [ERROR, {
      args: 'after-used',
      argsIgnorePattern: '',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '',
      destructuredArrayIgnorePattern: '',
      ignoreClassWithStaticInitBlock: false,
      ignoreRestSiblings: false,
      ignoreUsingDeclarations: false,
      reportUsedIgnorePattern: false,
      vars: 'all',
      varsIgnorePattern: '',
    }],
    'no-use-before-define': [ERROR, {
      // Configured value
      allowNamedExports: true,
      // Configured value
      classes: false,
      // Configured value
      functions: false,
      variables: true,
    }],
    'no-useless-assignment': [ERROR],
    'no-useless-backreference': [ERROR],
    'require-atomic-updates': [ERROR, {
      allowProperties: false,
    }],
    'use-isnan': [ERROR, {
      // Configured value
      enforceForIndexOf: true,
      enforceForSwitchCase: true,
    }],
    'valid-typeof': [ERROR, {
      // Configured value
      requireStringLiterals: true,
    }],

    /* ----- Suggestions ----- */
    'accessor-pairs': [ERROR, {
      enforceForClassMembers: true,
      // Configured value
      enforceForTSTypes: true,
      getWithoutSet: false,
      setWithoutGet: true,
    }],
    // OFF as it decrease readability
    'arrow-body-style': [OFF, 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    'block-scoped-var': [ERROR],
    'camelcase': [ERROR, {
      allow: [],
      ignoreDestructuring: false,
      ignoreGlobals: false,
      ignoreImports: false,
      properties: 'always',
    }],
    'capitalized-comments': [ERROR, 'always', {
      block: {
        ignoreConsecutiveComments: false,
        ignoreInlineComments: false,
        ignorePattern: '',
      },
      line: {
        // Configured value
        ignoreConsecutiveComments: true,
        ignoreInlineComments: false,
        // Configured value
        ignorePattern: '.+',
      },
    }],
    'class-methods-use-this': [ERROR, {
      enforceForClassFields: true,
      exceptMethods: [],
    }],
    // We keep the high default value of 20 for testing, might be turned off in favor of the sonarjs/cognitive-complexity rule
    'complexity': [ERROR, {
      max: 20,
    }],
    'consistent-return': [ERROR, {
      treatUndefinedAsUnspecified: false,
    }],
    // Might be disabled as we don't use this aliasing anymore
    'consistent-this': [ERROR],
    'curly': [ERROR, 'all'],
    'default-case': [ERROR, {
      commentPattern: '^No default$',
    }],
    'default-case-last': [ERROR],
    'default-param-last': [ERROR],
    'dot-notation': [ERROR, {
      allowKeywords: true,
      allowPattern: '',
    }],
    'eqeqeq': [ERROR, 'always', {
      null: 'always',
    }],
    // Might be disabled as we prefer to use arrow functions in those cases
    'func-name-matching': [ERROR, 'always', {
      // Configured value
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: false,
    }],
    'func-names': [ERROR, 'always', {
      generators: 'always',
    }],
    'func-style': [ERROR, 'declaration', {
      allowArrowFunctions: true,
    }],
    'grouped-accessor-pairs': [ERROR, 'getBeforeSet', {
      // Configured value
      enforceForTSTypes: true,
    }],
    // Might be disabled for comfort
    'guard-for-in': [ERROR],
    // Should be populated with known bad naming
    'id-denylist': [ERROR, 'data', 'callback'],
    // Disabled as it is highly arbitrary
    'id-length': [OFF, {
      exceptionPatterns: [],
      exceptions: [],
      max: Number.POSITIVE_INFINITY,
      min: 2,
      properties: 'always',
    }],
    // Disabled as the only naming convention enforced is covered by the `camelcase` rule
    'id-match': [OFF, '^.+$', {
      classFields: false,
      ignoreDestructuring: false,
      onlyDeclarations: false,
      properties: false,
    }],
    'init-declarations': [ERROR, 'always'],
    'logical-assignment-operators': [ERROR, 'always', {
      // Configured value
      enforceForIfStatements: true,
    }],
    'max-classes-per-file': [ERROR, {
      ignoreExpressions: false,
      max: 1,
    }],

    /**
     * Might be tweaked in the future, currently testing Linus Torvalds take on this one
     * @see: https://github.com/torvalds/linux/blob/master/Documentation/process/coding-style.rst
     * Should probably be adapted for jsx
     */
    'max-depth': [ERROR, {
      // Configured value
      max: 2,
    }],
    'max-lines': [ERROR, {
      max: 300,
      // Configured value
      skipBlankLines: true,
      // Configured value
      skipComments: true,
    }],
    'max-lines-per-function': [ERROR, {
      // Configured value
      // eslint-disable-next-line @typescript-eslint/naming-convention -- Defined by the rule
      IIFEs: true,
      max: 50,
      // Configured value
      skipBlankLines: true,
      // Configured value
      skipComments: true,
    }],
    'max-nested-callbacks': [ERROR, {
      // Configured value
      max: 2,
    }],
    'max-params': [ERROR, {
      max: 3,
    }],
    'max-statements': [ERROR, {
      max: 10,
    }, {
      ignoreTopLevelFunctions: false,
    }],
    'new-cap': [ERROR, {
      capIsNew: true,
      capIsNewExceptionPattern: '',
      capIsNewExceptions: [],
      newIsCap: true,
      newIsCapExceptionPattern: '',
      newIsCapExceptions: [],
      properties: true,
    }],
    'no-alert': [ERROR],
    'no-array-constructor': [ERROR],
    'no-bitwise': [ERROR, {
      allow: [],
      int32Hint: false,
    }],
    'no-caller': [ERROR],
    'no-case-declarations': [ERROR],
    'no-console': [ERROR, {
      allow: [''],
    }],
    'no-continue': [ERROR],
    'no-delete-var': [ERROR],
    'no-div-regex': [ERROR],
    'no-else-return': [ERROR, {
      // Configured value
      allowElseIf: false,
    }],
    'no-empty': [ERROR, {
      allowEmptyCatch: false,
    }],
    'no-empty-function': [ERROR, {
      allow: [],
    }],
    'no-empty-static-block': [ERROR],
    'no-eq-null': [ERROR],
    'no-eval': [ERROR, {
      allowIndirect: false,
    }],
    'no-extend-native': [ERROR, {
      exceptions: [],
    }],
    'no-extra-bind': [ERROR],
    'no-extra-boolean-cast': [ERROR, {
      // Configured value
      enforceForLogicalOperands: true,
    }],
    'no-extra-label': [ERROR],
    'no-global-assign': [ERROR, {
      exceptions: [],
    }],
    'no-implicit-coercion': [ERROR, {
      allow: [],
      boolean: true,
      disallowTemplateShorthand: false,
      number: true,
      string: true,
    }],
    'no-implicit-globals': [ERROR, {
      // Configured value
      lexicalBindings: true,
    }],
    'no-implied-eval': [ERROR],
    // Disabled as comment position should be chosen according to the situation
    'no-inline-comments': [OFF, {
      ignorePattern: '',
    }],
    // Should be disabled in Typescript projects as the compiler already checks this with the `noImplicitThis` option
    'no-invalid-this': [ERROR, {
      capIsConstructor: true,
    }],
    'no-iterator': [ERROR],
    'no-label-var': [ERROR],
    'no-labels': [ERROR, {
      allowLoop: false,
      allowSwitch: false,
    }],
    'no-lone-blocks': [ERROR],
    'no-lonely-if': [ERROR],
    'no-loop-func': [ERROR],
    'no-magic-numbers': [ERROR, {
      detectObjects: false,
      // Configured value
      enforceConst: true,
      // Configured value
      ignore: [0],
      ignoreArrayIndexes: false,
      ignoreClassFieldInitialValues: false,
      ignoreDefaultValues: false,
    }],
    'no-multi-assign': [ERROR, {
      ignoreNonDeclaration: false,
    }],
    'no-multi-str': [ERROR],
    'no-negated-condition': [ERROR],
    'no-nested-ternary': [ERROR],
    'no-new': [ERROR],
    'no-new-func': [ERROR],
    'no-new-wrappers': [ERROR],
    'no-nonoctal-decimal-escape': [ERROR],
    'no-object-constructor': [ERROR],
    'no-octal': [ERROR],
    'no-octal-escape': [ERROR],
    'no-param-reassign': [ERROR, {
      ignorePropertyModificationsFor: [],
      ignorePropertyModificationsForRegex: [],
      // Configured value
      props: true,
    }],
    // Disable as the potential error targeted by this rule is really obvious and should be fixed by the formatter
    'no-plusplus': [OFF, {
      // Configured value
      allowForLoopAfterthoughts: true,
    }],
    'no-proto': [ERROR],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-redeclare': [ERROR, {
      builtinGlobals: true,
    }],
    'no-regex-spaces': [ERROR],
    'no-restricted-exports': [ERROR, {
      // Configured value
      restrictDefaultExports: {
        defaultFrom: true,
        direct: true,
        named: true,
        namedFrom: true,
        namespaceFrom: true,
      },
      restrictedNamedExports: [],
    }],
    // TODO: Should be configured by environment: for browser, see https://github.com/facebook/create-react-app/tree/main/packages/confusing-browser-globals
    'no-restricted-globals': [ERROR, {
      // Configured value
      checkGlobalObject: true,
      globalObjects: [],
      globals: [{
        name: 'parseInt',
        message: `Don't use the global form of 'parseInt', prefer using 'Number.parseInt'`,
      }],
    }],
    'no-restricted-imports': [ERROR, {
      paths: [],
      // Configured value
      patterns: [
        {
          allowTypeImports: false,
          group: ['underscore'],
          message: `'underscore' have many issues. Please consider 'radash' if you really need an utility library.`,
        },
        {
          allowTypeImports: false,
          group: ['lodash'],
          message: `'lodash' have many issues. Please consider 'radash' if you really need an utility library.`,
        },
        {
          allowTypeImports: false,
          group: ['moment'],
          message: `'moment' is now considered legacy. Please consider 'date-fns' or 'luxon'.`,
        },
      ],
    }],
    // TODO: should be configured by environment with some rules like `test.only`, useless as is
    'no-restricted-properties': [ERROR],
    // TODO: should be configured by environment
    'no-restricted-syntax': [ERROR,
      // Reproduces the '@eslint-community/eslint-plugin-mysticatea/no-literal-call' rule
      {
        selector: 'CallExpression[callee.type=/^(?:(?:Array|Class|Object)Expression|(?:Template)?Literal)$/u]',
        message: NOT_A_FUNCTION_MESSAGE,
      },
      {
        selector: 'NewExpression[callee.type=/^(?:(?:Array|Object)Expression|(?:Template)?Literal)$/u]',
        message: NOT_A_FUNCTION_MESSAGE,
      },
      {
        selector: 'TaggedTemplateExpression[tag.type=/^(?:(?:Array|Class|Object)Expression|(?:Template)?Literal)$/u]',
        message: NOT_A_FUNCTION_MESSAGE,
      },
      // Reproduces the '@eslint-community/eslint-plugin-mysticatea/no-this-in-static' rule
      {
        selector: `[static=true] [type='ThisExpression']`,
        message: UNEXPECTED_THIS_MESSAGE,
      },
      {
        selector: `[static=true] [type='Super']`,
        message: UNEXPECTED_THIS_MESSAGE,
      },
    ],
    'no-return-assign': [ERROR, 'always'],
    'no-script-url': [ERROR],
    'no-sequences': [ERROR, {
      // Configured value
      allowInParentheses: false,
    }],
    'no-shadow': [ERROR, {
      allow: [],
      // Configured value
      builtinGlobals: true,
      // Configured value
      hoist: 'all',
      ignoreOnInitialization: false,
    }],
    'no-shadow-restricted-names': [ERROR, {
      reportGlobalThis: true,
    }],
    // Disabled as we use them, especially for const initialization
    'no-ternary': [OFF],
    'no-throw-literal': [ERROR],
    'no-unassigned-vars': [ERROR],
    'no-undef-init': [ERROR],
    // OFF as we intend to stop using 'null'
    'no-undefined': [OFF],
    'no-underscore-dangle': [ERROR, {
      allow: [],
      allowAfterSuper: false,
      allowAfterThis: false,
      allowAfterThisConstructor: false,
      allowFunctionParams: true,
      allowInArrayDestructuring: true,
      allowInObjectDestructuring: true,
      // Configured value
      enforceInClassFields: true,
      // Configured value
      enforceInMethodNames: true,
    }],
    'no-unneeded-ternary': [ERROR, {
      // Configured value
      defaultAssignment: false,
    }],
    'no-unused-expressions': [ERROR, {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
      enforceForJSX: false,
      ignoreDirectives: false,
    }],
    'no-unused-labels': [ERROR],
    'no-useless-call': [ERROR],
    'no-useless-catch': [ERROR],
    'no-useless-computed-key': [ERROR, {
      // Configured value
      enforceForClassMembers: true,
    }],
    'no-useless-concat': [ERROR],
    'no-useless-constructor': [ERROR],
    'no-useless-escape': [ERROR, {
      allowRegexCharacters: [],
    }],
    'no-useless-rename': [ERROR, {
      ignoreDestructuring: false,
      ignoreExport: false,
      ignoreImport: false,
    }],
    'no-useless-return': [ERROR],
    'no-var': [ERROR],
    'no-void': [ERROR, {
      allowAsStatement: false,
    }],
    // Disabled as it should be used on a one-time basis to list actions left to do
    'no-warning-comments': [OFF, {
      decoration: [],
      location: 'start',
      terms: ['todo', 'fixme', 'xxx'],
    }],
    'no-with': [ERROR],
    'object-shorthand': [ERROR, 'always', {
      avoidExplicitReturnArrows: false,
      // Configured value
      avoidQuotes: true,
      ignoreConstructors: false,
      methodsIgnorePattern: '',
    }],
    'one-var': [ERROR, {
      // Configured value
      awaitUsing: 'never',
      // Configured value
      const: 'never',
      // Configured value
      let: 'never',
      // Configured value
      separateRequires: true,
      // Configured value
      using: 'never',
      // Configured value
      var: 'never',
    }],
    'operator-assignment': [ERROR, 'always'],
    'prefer-arrow-callback': [ERROR, {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],
    'prefer-const': [ERROR, {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    }],

    /**
     * Disabled object VariableDeclarator
     * It decrease readability for things like the following:
     * `const type = node.data[params.handleType === 'source' ? 'outputs' : 'inputs'][handleId].type`
     */
    'prefer-destructuring': [ERROR, {
      // eslint-disable-next-line @typescript-eslint/naming-convention -- Required by the rule
      AssignmentExpression: {
        array: true,
        object: true,
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention -- Required by the rule
      VariableDeclarator: {
        array: true,
        // Configured value
        object: false,
      },
    }, {
      // Configured value
      enforceForRenamedProperties: true,
    }],
    'prefer-exponentiation-operator': [ERROR],
    'prefer-named-capture-group': [ERROR],
    'prefer-numeric-literals': [ERROR],
    'prefer-object-has-own': [ERROR],
    'prefer-object-spread': [ERROR],
    'prefer-promise-reject-errors': [ERROR, {
      allowEmptyReject: false,
    }],
    'prefer-regex-literals': [ERROR, {
      // Configured value
      disallowRedundantWrapping: true,
    }],
    'prefer-rest-params': [ERROR],
    'prefer-spread': [ERROR],
    'prefer-template': [ERROR],
    'preserve-caught-error': [ERROR, {
      // Configured value
      requireCatchParameter: true,
    }],
    'radix': [ERROR, 'always'],
    'require-await': [ERROR],
    'require-unicode-regexp': [ERROR],
    'require-yield': [ERROR],
    'sort-imports': [ERROR, {
      allowSeparatedGroups: false,
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],
    'sort-keys': [ERROR, 'asc', {
      // Configured value
      allowLineSeparatedGroups: true,
      caseSensitive: true,
      ignoreComputedKeys: false,
      minKeys: 2,
      // Configured value
      natural: true,
    }],
    'sort-vars': [ERROR, {
      ignoreCase: false,
    }],
    'strict': [ERROR, 'safe'],
    'symbol-description': [ERROR],
    'vars-on-top': [ERROR],
    'yoda': [ERROR, 'never', {
      // Configured value
      exceptRange: true,
      onlyEquality: false,
    }],

    /* ----- Layout & Formatting ----- */
    'unicode-bom': [ERROR, 'never'],
  },
} as const satisfies Linter.Config

/* eslint-enable */
