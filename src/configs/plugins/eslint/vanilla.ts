/* eslint-disable max-lines -- TODO: Could be splitted in subparts */

import { Linter } from 'eslint';

import { OFF, ERROR } from '../../../constants';

const NOT_A_FUNCTION_MESSAGE = 'This is not a function.'
const UNEXPECTED_THIS_MESSAGE = 'Unexpected this.'

export const eslintVanillaConfig: Linter.Config = {
  rules: {
    // Possible problems
    'array-callback-return': [ERROR, {
      allowImplicit: true,
      checkForEach: true,
      allowVoid: false, // default
    }],
    // Should be disabled in Typescript projects as the compiler already checks this
    'constructor-super': [ERROR],
    'for-direction': [ERROR],
    'getter-return': [ERROR, {
      allowImplicit: false, // default
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
      checkLoops: true, // default
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
      includeExports: true,
    }],
    'no-empty-character-class': [ERROR],
    'no-empty-pattern': [ERROR, {
      allowObjectPatternsAsParameters: false, // default
    }],
    'no-ex-assign': [ERROR],
    'no-fallthrough': [ERROR, {
      commentPattern: 'falls?\\s?through', // default without case insensitiveness
      allowEmptyCase: false, // default
    }],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-func-assign': [ERROR],
    // Enabled even in Typescript projects despite the compiler already checking it because it catch more cases
    'no-import-assign': [ERROR],
    'no-inner-declarations': [ERROR, 'both'],
    'no-invalid-regexp': [ERROR, {
      allowConstructorFlags: ['g', 'm', 'i', 'y', 'u', 'v', 's', 'd'], // default
    }],
    'no-irregular-whitespace': [ERROR, {
      skipStrings: false,
      skipComments: false, // default
      skipRegExps: false, // default
      skipTemplates: false, // default
      skipJSXText: false, // default
    }],
    'no-loss-of-precision': [ERROR],
    'no-misleading-character-class': [ERROR],
    'no-new-native-nonconstructor': [ERROR],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-new-symbol': [ERROR],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-obj-calls': [ERROR],
    'no-promise-executor-return': [ERROR, {
      allowVoid: false, // default
    }],
    'no-prototype-builtins': [ERROR],
    'no-self-assign': [ERROR, {
      props: true, // default
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
      enforceForOrderingRelations: true,
    }],
    'no-unsafe-optional-chaining': [ERROR, {
      disallowArithmeticOperators: true,
    }],
    'no-unused-private-class-members': [ERROR],
    // If we change the '*IgnorePattern', we might want to use the '@eslint-community/eslint-plugin-mysticatea/no-use-ignored-vars' rule
    'no-unused-vars': [ERROR, {
      vars: 'all', // default
      varsIgnorePattern: '', // default
      args: 'after-used', // default
      argsIgnorePattern: '', // default
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '', // default
      destructuredArrayIgnorePattern: '', // default
      ignoreRestSiblings: false, // default
    }],
    'no-use-before-define': [ERROR, {
      functions: false,
      classes: false,
      variables: true, // default
      allowNamedExports: true,
    }],
    'no-useless-backreference': [ERROR],
    'require-atomic-updates': [ERROR, {
      allowProperties: false, // default
    }],
    'use-isnan': [ERROR, {
      enforceForSwitchCase: true, // default
      enforceForIndexOf: true,
    }],
    'valid-typeof': [ERROR, {
      requireStringLiterals: true,
    }],

    // Suggestions
    'accessor-pairs': [ERROR, {
      setWithoutGet: true, // default
      getWithoutSet: false, // default
      enforceForClassMembers: true, // default
    }],
    // OFF as it decrease readability
    'arrow-body-style': [OFF, 'as-needed', {
      requireReturnForObjectLiteral: false, // default
    }],
    'block-scoped-var': [ERROR],
    'camelcase': [ERROR, {
      properties: 'always', // default
      ignoreDestructuring: false, // default
      ignoreImports: false, // default
      ignoreGlobals: false, // default
      allow: [], // default
    }],
    'capitalized-comments': [ERROR, 'always', {
      line: {
        ignorePattern: '.+', // default
        ignoreInlineComments: false, // default
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '', // default
        ignoreInlineComments: false, // default
        ignoreConsecutiveComments: false, // default
      },
    }],
    'class-methods-use-this': [ERROR, {
      exceptMethods: [], // default
      enforceForClassFields: true, // default
    }],
    'complexity': [ERROR, {
      max: 6,
    }],
    'consistent-return': [ERROR, {
      treatUndefinedAsUnspecified: false, // default
    }],
    // Might be disabled as we don't use this aliasing anymore
    'consistent-this': [ERROR],
    'curly': [ERROR, 'all'], // default
    'default-case': [ERROR, {
      commentPattern: '^No default$', // default without case insensitiveness
    }],
    'default-case-last': [ERROR],
    'default-param-last': [ERROR],
    'dot-notation': [ERROR, {
      allowKeywords: true, // default
      allowPattern: '', // default
    }],
    'eqeqeq': [ERROR, 'always', {
      null: 'always', // default
    }],
    // Might be disabled as we prefer to use arrow functions in those cases
    'func-name-matching': [ERROR, 'always', {
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: false, // default
    }],
    'func-names': [ERROR, 'always', {
      generators: 'always', // default
    }],
    'func-style': [ERROR, 'declaration', {
      allowArrowFunctions: true,
    }],
    'grouped-accessor-pairs': [ERROR, 'getBeforeSet'],
    // Might be disabled for comfort
    'guard-for-in': [ERROR],
    // Should be populated with known bad naming
    'id-denylist': [ERROR, 'data', 'callback'],
    // Disabled as it is highly arbitrary
    'id-length': [OFF, {
      min: 2, // default
      max: Number.POSITIVE_INFINITY, // default
      properties: 'always', // default
      exceptions: [], // default
      exceptionPatterns: [], // default
    }],
    // Disabled as the only naming convention enforced is covered by the `camelcase` rule
    'id-match': [OFF, '^.+$', {
      properties: false, // default
      classFields: false, // default
      onlyDeclarations: false, // default
      ignoreDestructuring: false, // default
    }],
    'init-declarations': [ERROR, 'always'],
    'logical-assignment-operators': [ERROR, 'always', {
      enforceForIfStatements: true,
    }],
    'max-classes-per-file': [ERROR, {
      ignoreExpressions: false, // default
      max: 1,
    }],
    // Might be tweaked in the future, currently testing Linus Torvalds take on this one
    // Should probably be adapted for jsx
    'max-depth': [ERROR, {
      max: 2,
    }],
    'max-lines': [ERROR, {
      max: 300, // default
      skipBlankLines: true,
      skipComments: true,
    }],
    'max-lines-per-function': [ERROR, {
      max: 50, // default
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],
    'max-nested-callbacks': [ERROR, {
      max: 2,
    }],
    'max-params': [ERROR, {
      max: 3, // default
    }],
    'max-statements': [ERROR, {
      max: 10, // default
    }, {
        ignoreTopLevelFunctions: false, // default
      }],
    'multiline-comment-style': [ERROR, 'starred-block'], // default
    'new-cap': [ERROR, {
      newIsCap: true, // default
      capIsNew: true, // default
      newIsCapExceptions: [], // default
      newIsCapExceptionPattern: '', // default
      capIsNewExceptions: [], // default
      capIsNewExceptionPattern: '', // default
      properties: true, // default
    }],
    'no-alert': [ERROR],
    'no-array-constructor': [ERROR],
    'no-bitwise': [ERROR, {
      allow: [], // default
      int32Hint: false, // default
    }],
    'no-caller': [ERROR],
    'no-case-declarations': [ERROR],
    'no-confusing-arrow': [ERROR, {
      allowParens: true, // default
      onlyOneSimpleParam: false, // default
    }],
    'no-console': [ERROR, {
      allow: [''], // default
    }],
    'no-continue': [ERROR],
    'no-delete-var': [ERROR],
    'no-div-regex': [ERROR],
    'no-else-return': [ERROR, {
      allowElseIf: false,
    }],
    'no-empty': [ERROR, {
      allowEmptyCatch: false, // default
    }],
    'no-empty-function': [ERROR, {
      allow: [], // default
    }],
    'no-empty-static-block': [ERROR],
    'no-eq-null': [ERROR],
    'no-eval': [ERROR, {
      allowIndirect: false, // default
    }],
    'no-extend-native': [ERROR, {
      exceptions: [], // default
    }],
    'no-extra-bind': [ERROR],
    'no-extra-boolean-cast': [ERROR, {
      enforceForLogicalOperands: true,
    }],
    'no-extra-label': [ERROR],
    'no-extra-semi': [ERROR],
    'no-floating-decimal': [ERROR],
    'no-global-assign': [ERROR, {
      exceptions: [], // default
    }],
    'no-implicit-coercion': [ERROR, {
      boolean: true, // default
      number: true, // default
      string: true, // default
      disallowTemplateShorthand: false, // default
      allow: [], // default
    }],
    'no-implicit-globals': [ERROR, {
      lexicalBindings: true,
    }],
    'no-implied-eval': [ERROR],
    // Disabled as comment position should be chosen according to the situation
    'no-inline-comments': [OFF, {
      ignorePattern: '', // default
    }],
    // Should be disabled in Typescript projects as the compiler already checks this with the `noImplicitThis` option
    'no-invalid-this': [ERROR, {
      capIsConstructor: true, // default
    }],
    'no-iterator': [ERROR],
    'no-label-var': [ERROR],
    'no-labels': [ERROR, {
      allowLoop: false, // default
      allowSwitch: false, // default
    }],
    'no-lone-blocks': [ERROR],
    'no-lonely-if': [ERROR],
    'no-loop-func': [ERROR],
    'no-magic-numbers': [ERROR, {
      ignore: [0],
      ignoreArrayIndexes: false, // default
      ignoreDefaultValues: false, // default
      ignoreClassFieldInitialValues: false, // default
      enforceConst: true,
      detectObjects: false, // default
    }],
    'no-mixed-operators': [ERROR, {
      groups: [
        ['+', '-', '*', '/', '%', '**'], // default
        ['&', '|', '^', '~', '<<', '>>', '>>>'], // default
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='], // default
        ['&&', '||', '??', '?:'],
        ['in', 'instanceof'], // default
      ],
      allowSamePrecedence: true, // default
    }],
    'no-multi-assign': [ERROR, {
      ignoreNonDeclaration: false, // default
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
      props: true,
      ignorePropertyModificationsFor: [], // default
      ignorePropertyModificationsForRegex: [], // default
    }],
    // Disable as the potential error targeted by this rule is really obvious and should be fixed by the formatter
    'no-plusplus': [OFF, {
      allowForLoopAfterthoughts: true,
    }],
    'no-proto': [ERROR],
    // Should be disabled in Typescript projects as the compiler already checks this
    'no-redeclare': [ERROR, {
      builtinGlobals: true, // default
    }],
    'no-regex-spaces': [ERROR],
    'no-restricted-exports': [ERROR, {
      restrictedNamedExports: [],
      restrictDefaultExports: {
        direct: true,
        named: true,
        defaultFrom: true,
        namedFrom: true,
        namespaceFrom: true,
      },
    }],
    // TODO: Should be configured by environment: for browser, see https://github.com/facebook/create-react-app/tree/main/packages/confusing-browser-globals
    'no-restricted-globals': [ERROR, {
      name: 'parseInt',
      message: `Don't use the global form of 'parseInt', prefer using 'Number.parseInt'`,
    }],
    'no-restricted-imports': [ERROR, {
      paths: [],
      patterns: [
        {
          group: ['underscore'],
          message: `'underscore' have many issues. Please consider 'radash' if you really need an utility library.`,
        },
        {
          group: ['lodash'],
          message: `'lodash' have many issues. Please consider 'radash' if you really need an utility library.`,
        },
        {
          group: ['moment'],
          message: `'moment' is now considered legacy. Please consider 'date-fns' or 'luxon'.`,
        },
      ],
    }],
    // TODO: should be configured by environment with some rules like `test.only`, useless as is
    'no-restricted-properties': [ERROR],
    // TODO: should be configured by environment
    'no-restricted-syntax': [ERROR,
      // Reproduces the '@eslint-community/eslint-plugin-mysticatea/no-instanceof-wrapper' rule
      {
        selector: `BinaryExpression[operator='instanceof'][right.name='Boolean']`,
        message: `Unexpected 'instanceof' operator. Use "typeof x === 'boolean'" instead.`,
      },
      {
        selector: `BinaryExpression[operator='instanceof'][right.name='Number']`,
        message: `Unexpected 'instanceof' operator. Use "typeof x === 'number'" instead.`,
      },
      {
        selector: `BinaryExpression[operator='instanceof'][right.name='String']`,
        message: `Unexpected 'instanceof' operator. Use "typeof x === 'string'" instead.`,
      },
      {
        selector: `BinaryExpression[operator='instanceof'][right.name='Object']`,
        message: `Unexpected 'instanceof' operator. Use "typeof x === 'object'" instead.`,
      },
      {
        selector: `BinaryExpression[operator='instanceof'][right.name='Function']`,
        message: `Unexpected 'instanceof' operator. Use "typeof x === 'function'" instead.`,
      },
      {
        selector: `BinaryExpression[operator='instanceof'][right.name='Symbol']`,
        message: `Unexpected 'instanceof' operator. Use "typeof x === 'symbol'" instead.`,
      },
      // Reproduces the '@eslint-community/eslint-plugin-mysticatea/no-literal-call' rule
      {
        selector: `CallExpression[callee.type=/^(?:(?:Array|Class|Object)Expression|(?:Template)?Literal)$/u]`,
        message: NOT_A_FUNCTION_MESSAGE,
      },
      {
        selector: `NewExpression[callee.type=/^(?:(?:Array|Object)Expression|(?:Template)?Literal)$/u]`,
        message: NOT_A_FUNCTION_MESSAGE,
      },
      {
        selector: `TaggedTemplateExpression[tag.type=/^(?:(?:Array|Class|Object)Expression|(?:Template)?Literal)$/u]`,
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
      allowInParentheses: false,
    }],
    'no-shadow': [ERROR, {
      builtinGlobals: true,
      hoist: 'all',
      allow: [], // default
      ignoreOnInitialization: false, // default
    }],
    'no-shadow-restricted-names': [ERROR],
    // Disabled as we use them, especially for const initialization
    'no-ternary': [OFF],
    'no-throw-literal': [ERROR],
    'no-undef-init': [ERROR],
    // OFF as we intend to stop using 'null'
    'no-undefined': [OFF],
    'no-underscore-dangle': [ERROR, {
      allow: [], // default
      allowAfterThis: false, // default
      allowAfterSuper: false, // default
      allowAfterThisConstructor: false, // default
      enforceInMethodNames: true,
      enforceInClassFields: true,
      allowInArrayDestructuring: true, // default
      allowInObjectDestructuring: true, // default
      allowFunctionParams: true, // default
    }],
    'no-unneeded-ternary': [ERROR, {
      defaultAssignment: false,
    }],
    'no-unused-expressions': [ERROR, {
      allowShortCircuit: false, // default
      allowTernary: false, // default
      allowTaggedTemplates: false, // default
      enforceForJSX: false, // default
    }],
    'no-unused-labels': [ERROR],
    'no-useless-call': [ERROR],
    'no-useless-catch': [ERROR],
    'no-useless-computed-key': [ERROR, {
      enforceForClassMembers: true,
    }],
    'no-useless-concat': [ERROR],
    'no-useless-constructor': [ERROR],
    'no-useless-escape': [ERROR],
    'no-useless-rename': [ERROR, {
      ignoreDestructuring: false, // default
      ignoreImport: false, // default
      ignoreExport: false, // default
    }],
    'no-useless-return': [ERROR],
    'no-var': [ERROR],
    'no-void': [ERROR, {
      allowAsStatement: false, // default
    }],
    // Disabled as it should be used on a one-time basis to list actions left to do
    'no-warning-comments': [OFF, {
      terms: ['todo', 'fixme', 'xxx'], // default
      location: 'start', // default
      decoration: [], // default
    }],
    'no-with': [ERROR],
    'object-shorthand': [ERROR, 'always', {
      avoidQuotes: true,
      ignoreConstructors: false, // default
      methodsIgnorePattern: '', // default
      avoidExplicitReturnArrows: false, // default
    }],
    'one-var': [ERROR, {
      var: 'never',
      let: 'never',
      const: 'never',
      separateRequires: true,
    }],
    'operator-assignment': [ERROR, 'always'],
    'prefer-arrow-callback': [ERROR, {
      allowNamedFunctions: false, // default
      allowUnboundThis: true, // default
    }],
    'prefer-const': [ERROR, {
      destructuring: 'any', // default
      ignoreReadBeforeAssign: false, // default
    }],
    // Disabled object VariableDeclarator
    // It decrease readability for things like the following:
    // `const type = node.data[params.handleType === 'source' ? 'outputs' : 'inputs'][handleId].type`
    'prefer-destructuring': [ERROR, {
      VariableDeclarator: {
        object: false,
        array: true,
      },
      AssignmentExpression: {
        object: true,
        array: true,
      },
    }, {
        enforceForRenamedProperties: true,
      }],
    'prefer-exponentiation-operator': [ERROR],
    'prefer-named-capture-group': [ERROR],
    'prefer-numeric-literals': [ERROR],
    'prefer-object-has-own': [ERROR],
    'prefer-object-spread': [ERROR],
    'prefer-promise-reject-errors': [ERROR, {
      allowEmptyReject: false, // default
    }],
    'prefer-regex-literals': [ERROR, {
      disallowRedundantWrapping: true,
    }],
    'prefer-rest-params': [ERROR],
    'prefer-spread': [ERROR],
    'prefer-template': [ERROR],
    'radix': [ERROR, 'always'],
    'require-await': [ERROR],
    'require-unicode-regexp': [ERROR],
    'require-yield': [ERROR],
    // Disabled as we don't care about alphabetical order. Scoped order would be much more interesting.
    'sort-imports': [ERROR, {
      ignoreCase: false, // default
      ignoreDeclarationSort: false, // default
      ignoreMemberSort: false, // default
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'], // default
      allowSeparatedGroups: false, // default
    }],
    // OFF as it decrease code readability
    'sort-keys': [OFF, 'asc', {
      caseSensitive: true, // default
      natural: true,
      minKeys: 2, // default
      allowLineSeparatedGroups: false, // default
    }],
    'sort-vars': [ERROR, {
      ignoreCase: false, // default
    }],
    'spaced-comment': [ERROR, 'always', {
      line: {
        markers: [],
        exceptions: [],
      },
      block: {
        markers: [],
        exceptions: ['*'],
        balanced: true,
      },
    }],
    'strict': [ERROR, 'safe'], // default
    'symbol-description': [ERROR],
    'vars-on-top': [ERROR],
    'yoda': [ERROR, 'never', {
      exceptRange: true,
      onlyEquality: false, // default
    }],

    // Layout & Formatting
    // All formatting rules are disabled in favor of a dedicated formatter tool
    'line-comment-position': [OFF],
    'unicode-bom': [OFF],
  },
};

/* eslint-enable */
