/* eslint-disable max-lines -- Don't want to split it */

'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const ALWAYS_MULTILINE = 'always-multiline';


/**
 * This is the common config of eslint
 * The goal of this config is to be as restrictive as possible
 * For doing so, all rules are listed here in the order they appear
 * in the documentation and treated as error by default
 * When possible, the most verbose options are listed too,
 * even if it is the default usage (in which case it is commented as such)
 * All rules that are not enforce (warning or off) should have comments explaining why
 * Doing so should ease the eslint packages process update
 */
module.exports = {
  rules: {
    /* ----- Possible errors ----- */
    'for-direction': [ERROR],
    'getter-return': [ERROR, {
      allowImplicit: false, // Default
    }],
    'no-async-promise-executor': [ERROR],
    'no-await-in-loop': [ERROR],
    'no-compare-neg-zero': [ERROR],
    'no-cond-assign': [ERROR, 'always'],
    'no-console': [ERROR],
    'no-constant-condition': [ERROR, {
      checkLoops: true, // Default
    }],
    'no-control-regex': [ERROR],
    'no-debugger': [ERROR],
    'no-dupe-args': [ERROR],
    'no-dupe-else-if': [ERROR],
    'no-dupe-keys': [ERROR],
    'no-duplicate-case': [ERROR],
    'no-empty': [ERROR, {
      allowEmptyCatch: false, // Default
    }],
    'no-empty-character-class': [ERROR],
    'no-ex-assign': [ERROR],
    'no-extra-boolean-cast': [ERROR, {
      enforceForLogicalOperands: true,
    }],
    'no-extra-parens': [ERROR, 'all', {
      conditionalAssign: true,
      returnAssign: true,
      nestedBinaryExpressions: true,
      ignoreJSX: 'multi-line',
      enforceForArrowConditionals: true,
      enforceForSequenceExpressions: true,
      enforceForNewInMemberExpressions: true,
      enforceForFunctionPrototypeMethods: true,
    }],
    'no-extra-semi': [ERROR],
    'no-func-assign': [ERROR],
    'no-import-assign': [ERROR],
    'no-inner-declarations': [ERROR, 'both'],
    'no-invalid-regexp': [ERROR, {
      allowConstructorFlags: ['g', 'm', 'i', 'y', 'u', 's'], // Default
    }],
    'no-irregular-whitespace': [ERROR, {
      skipStrings: false,
      skipComments: false, // Default
      skipRegExps: false, // Default
      skipTemplates: false, // Default
    }],
    'no-loss-of-precision': [ERROR],
    'no-misleading-character-class': [ERROR],
    'no-obj-calls': [ERROR],
    'no-promise-executor-return': [ERROR],
    'no-prototype-builtins': [ERROR],
    'no-regex-spaces': [ERROR],
    'no-setter-return': [ERROR],
    'no-sparse-arrays': [ERROR],
    'no-template-curly-in-string': [ERROR],
    'no-unexpected-multiline': [ERROR],
    'no-unreachable': [ERROR],
    'no-unreachable-loop': [ERROR, {
      ignore: [], // Default
    }],
    'no-unsafe-finally': [ERROR],
    'no-unsafe-negation': [ERROR, {
      enforceForOrderingRelations: true,
    }],
    'no-useless-backreference': [ERROR],
    'require-atomic-updates': [ERROR],
    'use-isnan': [ERROR, {
      enforceForSwitchCase: true, // Default
      enforceForIndexOf: true,
    }],
    'valid-typeof': [ERROR, {
      requireStringLiterals: true,
    }],

    /* ----- Best practices ----- */
    'accessor-pairs': [ERROR, {
      setWithoutGet: true, // Default
      getWithoutSet: false, // Default
      enforceForClassMembers: true, // Default
    }],
    'array-callback-return': [ERROR, {
      allowImplicit: false, // Default
      checkForEach: true,
    }],
    'block-scoped-var': [ERROR],
    'class-methods-use-this': [ERROR, {
      exceptMethods: [], // Default
    }],
    // @see https://www.sonarsource.com/docs/CognitiveComplexity.pdf
    complexity: [OFF, {
      max: 6,
    }],
    'consistent-return': [ERROR, {
      treatUndefinedAsUnspecified: false, // Default
    }],
    curly: [ERROR, 'multi-or-nest'],
    'default-case': [ERROR, {
      commentPattern: '/^no default$/i', // Default
    }],
    'default-case-last': [ERROR],
    'default-param-last': [ERROR],
    'dot-location': [ERROR, 'property'],
    'dot-notation': [ERROR, {
      allowKeywords: true, // Default
      allowPattern: '', // Default
    }],
    eqeqeq: [ERROR, 'always', {
      null: 'always', // Default
    }],
    'grouped-accessor-pairs': [ERROR, 'getBeforeSet'],
    'guard-for-in': [ERROR],
    'max-classes-per-file': [ERROR, 1],
    'no-alert': [ERROR],
    'no-caller': [ERROR],
    'no-case-declarations': [ERROR],
    'no-constructor-return': [ERROR],
    'no-div-regex': [ERROR],
    'no-else-return': [ERROR, {
      allowElseIf: false,
    }],
    'no-empty-function': [ERROR, {
      allow: [], // Default
    }],
    'no-empty-pattern': [ERROR],
    'no-eq-null': [ERROR],
    'no-eval': [ERROR, {
      allowIndirect: false, // Default
    }],
    'no-extend-native': [ERROR, {
      exceptions: [], // Default
    }],
    'no-extra-bind': [ERROR],
    'no-extra-label': [ERROR],
    'no-fallthrough': [ERROR, {
      commentPattern: '/falls?\\s?through/i', // Default
    }],
    'no-floating-decimal': [ERROR],
    'no-global-assign': [ERROR, {
      exceptions: [],
    }],
    'no-implicit-coercion': [ERROR, {
      boolean: true, // Default
      number: true, // Default
      string: true, // Default
      allow: [], // Default
    }],
    'no-implicit-globals': [ERROR, {
      lexicalBindings: true,
    }],
    'no-implied-eval': [ERROR],
    'no-invalid-this': [ERROR, {
      capIsConstructor: false,
    }],
    'no-iterator': [ERROR],
    'no-labels': [ERROR, {
      allowLoop: false, // Default
      allowSwitch: false, // Default
    }],
    'no-lone-blocks': [ERROR],
    'no-loop-func': [ERROR],
    'no-magic-numbers': [ERROR, {
      ignore: [], // Default
      ignoreArrayIndexes: false, // Default
      ignoreDefaultValues: true,
      enforceConst: true,
      detectObjects: false, // Default
    }],
    'no-multi-spaces': [ERROR, {
      ignoreEOLComments: false, // Default
      exceptions: {
        Property: false,
      },
    }],
    'no-multi-str': [ERROR],
    'no-new': [ERROR],
    'no-new-func': [ERROR],
    'no-new-wrappers': [ERROR],
    'no-octal': [ERROR],
    'no-octal-escape': [ERROR],
    'no-param-reassign': [ERROR, {
      props: true,
      ignorePropertyModificationsFor: [], // Default
      ignorePropertyModificationsForRegex: [], // Default
    }],
    'no-proto': [ERROR],
    'no-redeclare': [ERROR, {
      builtinGlobals: true, // Default
    }],
    // TODO: should be configured with some rules like `test.only`, useless as is
    'no-restricted-properties': [ERROR],
    'no-return-assign': [ERROR, 'always'],
    'no-return-await': [ERROR],
    'no-script-url': [ERROR],
    'no-self-assign': [ERROR, {
      props: true, // Default
    }],
    'no-self-compare': [ERROR],
    'no-sequences': [ERROR],
    'no-throw-literal': [ERROR],
    'no-unmodified-loop-condition': [ERROR],
    'no-unused-expressions': [ERROR, {
      allowShortCircuit: false, // Default
      allowTernary: false, // Default
      allowTaggedTemplates: false, // Default
    }],
    'no-unused-labels': [ERROR],
    'no-useless-call': [ERROR],
    'no-useless-catch': [ERROR],
    'no-useless-concat': [ERROR],
    'no-useless-escape': [ERROR],
    'no-useless-return': [ERROR],
    'no-void': [ERROR, {
      allowAsStatement: false, // Default
    }],
    // OFF as it is worse not to write anything down and never do it rather than doing it later
    'no-warning-comments': [OFF, {
      terms: [], // Default
      location: 'start', // Default
    }],
    'no-with': [ERROR],
    'prefer-named-capture-group': [ERROR],
    'prefer-promise-reject-errors': [ERROR, {
      allowEmptyReject: false, // Default
    }],
    'prefer-regex-literals': [ERROR, {
      disallowRedundantWrapping: true,
    }],
    radix: [ERROR, 'as-needed'],
    'require-await': [ERROR],
    'require-unicode-regexp': [ERROR],
    'vars-on-top': [ERROR],
    'wrap-iife': [ERROR, 'inside', {
      functionPrototypeMethods: true,
    }],
    yoda: [ERROR, 'never', {
      exceptRange: true,
      onlyEquality: false, // Default
    }],

    /* ----- Strict mode ----- */
    strict: [ERROR, 'safe'], // Default

    /* ----- Variables ----- */
    'init-declarations': [ERROR, 'always'], // Default
    'no-delete-var': [ERROR],
    'no-label-var': [ERROR],
    // TODO: should be configured with some rules, useless as is
    'no-restricted-globals': [ERROR],
    // Could be problematic when using with redux's function `mapDispatchToProps`
    // @see: https://stackoverflow.com/questions/37682705/avoid-no-shadow-eslint-error-with-mapdispatchtoprops
    // TODO: Conflict with node/prefer-global/*
    'no-shadow': [ERROR, {
      builtinGlobals: true,
      hoist: 'all',
      allow: ['Promise'],
    }],
    'no-shadow-restricted-names': [ERROR],
    'no-undef': [ERROR, {
      typeof: true,
    }],
    'no-undef-init': [ERROR],
    'no-undefined': [ERROR],
    // `caughtErrors` is set to none as it is a parsing error to not specify `error` in `catch(error) {}`
    'no-unused-vars': [ERROR, {
      vars: 'all', // Default
      varsIgnorePattern: '', // Default
      args: 'after-used', // Default
      argsIgnorePattern: '', // Default
      ignoreRestSiblings: false, // Default
      caughtErrors: 'none', // Default
      caughtErrorsIgnorePattern: '', // Default
    }],
    // `functions` and `classes` options are false to let use organize code in a top down approach
    'no-use-before-define': [ERROR, {
      functions: false,
      classes: false,
      variables: true, // Default
    }],

    /* ----- Stylistic issues ----- */
    'array-bracket-newline': [ERROR, 'consistent'],
    'array-bracket-spacing': [ERROR, 'never', {
      singleValue: false, // Default
      objectsInArrays: false, // Default
      arraysInArrays: false, // Default
    }],
    'array-element-newline': [ERROR, 'consistent'],
    'block-spacing': [ERROR, 'always'],
    'brace-style': [ERROR, '1tbs', {
      allowSingleLine: false, // Default
    }],
    camelcase: [ERROR, {
      properties: 'always', // Default
      ignoreDestructuring: false, // Default
      ignoreImports: false, // Default
      ignoreGlobals: false, // Default
      allow: [], // Default
    }],
    'capitalized-comments': [ERROR, 'always', {
      line: {
        ignorePattern: '', // Default
        ignoreInlineComments: false, // Default
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '', // Default
        ignoreInlineComments: false, // Default
        ignoreConsecutiveComments: false, // Default
      },
    }],
    'comma-dangle': [ERROR, {
      arrays: ALWAYS_MULTILINE,
      objects: ALWAYS_MULTILINE,
      imports: ALWAYS_MULTILINE,
      exports: ALWAYS_MULTILINE,
      functions: 'only-multiline',
    }],
    'comma-spacing': [ERROR, {
      before: false, // Default
      after: true, // Default
    }],
    'comma-style': [ERROR, 'last', {
      exceptions: {
        ArrayExpression: false, // Default
        ArrayPattern: false, // Default
        ArrowFunctionExpression: false, // Default
        CallExpression: false, // Default
        FunctionDeclaration: false, // Default
        FunctionExpression: false, // Default
        ImportDeclaration: false, // Default
        ObjectExpression: false, // Default
        ObjectPattern: false, // Default
        VariableDeclaration: false, // Default
        NewExpression: false, // Default
      },
    }],
    'computed-property-spacing': [ERROR, 'never', {
      enforceForClassMembers: true, // Default
    }],
    'consistent-this': [ERROR],
    'eol-last': [ERROR, 'always'],
    'func-call-spacing': [ERROR, 'never'],
    'func-name-matching': [ERROR, 'always', {
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: false, // Default
    }],
    'func-names': [ERROR, 'as-needed', {
      generators: 'as-needed',
    }],
    'func-style': [ERROR, 'declaration', {
      allowArrowFunctions: true,
    }],
    'function-call-argument-newline': [ERROR, 'consistent'],
    'function-paren-newline': [ERROR, 'multiline-arguments'],
    // Should be populated with known bad naming
    'id-denylist': [ERROR],
    // OFF as it is highly arbitrary
    'id-length': [OFF, {
      min: 2, // Default
      max: Infinity, // Default
      properties: 'always', // Default
      exceptions: [], // Default
      exceptionPatterns: [], // Default
    }],
    // OFF as the only naming convention enforced is covered by the `camelcase` rule
    'id-match': [OFF, {
      properties: true, // Default
      onlyDeclarations: false, // Default
      ignoreDestructuring: false, // Default
    }],
    'implicit-arrow-linebreak': [ERROR, 'beside'],
    indent: [ERROR, 2, {
      SwitchCase: 1,
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 3,
      },
      outerIIFEBody: 1, // Default
      MemberExpression: 1, // Default
      FunctionDeclaration: {
        parameters: 'first',
        body: 1, // Default
      },
      FunctionExpression: {
        parameters: 'first',
        body: 1, // Default
      },
      CallExpression: {
        arguments: 1, // Default
      },
      ArrayExpression: 1, // Default
      ObjectExpression: 1, // Default
      ImportDeclaration: 1, // Default
      flatTernaryExpressions: false, // Default
      offsetTernaryExpressions: true, // Default
      ignoredNodes: [],
      ignoreComments: false, // Default
    }],
    'jsx-quotes': [ERROR, 'prefer-double'],
    'key-spacing': [ERROR, {
      beforeColon: false, // Default
      afterColon: true, // Default
      mode: 'strict', // Default
    }],
    'keyword-spacing': [ERROR, {
      before: true, // Default
      after: true, // Default
    }],
    // OFF as comment position should be choosen according to the situation
    'line-comment-position': [OFF],
    'linebreak-style': [ERROR, 'unix'],
    'lines-around-comment': [ERROR, {
      beforeBlockComment: true, // Default
      afterBlockComment: false,
      beforeLineComment: false,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: false,
      allowObjectStart: true,
      allowObjectEnd: false,
      allowArrayStart: true,
      allowArrayEnd: false,
      allowClassStart: true,
      allowClassEnd: false,
      applyDefaultIgnorePatterns: true,
      ignorePattern: '',
    }],
    'lines-between-class-members': [ERROR, 'always', {
      exceptAfterSingleLine: false, // Default
    }],
    'max-depth': [ERROR, {
      max: 4, // Default
    }],
    'max-len': [ERROR, {
      code: 180,
      tabWidth: 2,
      comments: 180,
      ignorePattern: '^\\s*it\\(.+\\{|Lorem ipsum.+;|mailto:.+;',
      ignoreComments: false,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: true,
    }],
    // OFF as it is too restrictive
    // TODO: Might be debatable
    'max-lines': [OFF, {
      max: 500,
      skipBlankLines: true,
      skipComments: true,
    }],
    // OFF as it is too restrictive
    // TODO: Might be debatable
    'max-lines-per-function': [OFF, {
      max: 50, // Default
      skipBlankLines: true,
      skipComments: true,
      IIFEs: false, // Default
    }],
    // Arbitrary set to 3 (default is actually 10) as we encourage to use promise style based
    'max-nested-callbacks': [ERROR, {
      max: 3,
    }],
    // Arbitrary set to 4 (default is actually 3)
    'max-params': [ERROR, {
      max: 4,
    }],
    // OFF as it is too restrictive
    // TODO: Might be debatable
    'max-statements': [OFF, {
      max: 10, // Default
    }, {
      ignoreTopLevelFunctions: false, // Default
    }],
    'max-statements-per-line': [ERROR, {
      max: 1, // Default
    }],
    'multiline-comment-style': [ERROR, 'starred-block'],
    'multiline-ternary': [ERROR, 'always-multiline'],
    'new-cap': [ERROR, {
      newIsCap: true, // Default
      capIsNew: true, // Default
      newIsCapExceptions: [], // Default
      newIsCapExceptionPattern: '', // Default
      capIsNewExceptions: [], // Default
      capIsNewExceptionPattern: '', // Default
      properties: true, // Default
    }],
    'new-parens': [ERROR, 'always'], // Default
    'newline-per-chained-call': [ERROR, {
      ignoreChainWithDepth: 3,
    }],
    'no-array-constructor': [ERROR],
    'no-bitwise': [ERROR, {
      allow: [], // Default
      int32Hint: false, // Default
    }],
    'no-continue': [ERROR],
    // OFF as comment position should be choosen according to the situation
    'no-inline-comments': [OFF],
    'no-lonely-if': [ERROR],
    'no-mixed-operators': [ERROR, {
      // Default
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: true, // Default
    }],
    'no-mixed-spaces-and-tabs': [ERROR],
    'no-multi-assign': [ERROR],
    'no-multiple-empty-lines': [ERROR, {
      max: 2,
      maxEOF: 1,
      maxBOF: 0,
    }],
    // Open to debate
    'no-negated-condition': [ERROR],
    'no-nested-ternary': [ERROR],
    'no-new-object': [ERROR],
    // OFF as the potential error targetted by this rule is really obvious and should be catched by the `semi` rule
    'no-plusplus': [OFF, {
      allowForLoopAfterthoughts: false, // Default
    }],
    // OFF as for now, the only features we don't want are already taken care by other rules
    'no-restricted-syntax': [OFF],
    'no-tabs': [ERROR, {
      allowIndentationTabs: false, // Default
    }],
    // OFF as we use then especially for const initialization
    'no-ternary': [OFF],
    'no-trailing-spaces': [ERROR, {
      skipBlankLines: false, // Default
      ignoreComments: false, // Default
    }],
    // Open to debate, could be useful to indicate method privacy
    'no-underscore-dangle': [ERROR, {
      allow: [], // Default
      allowAfterThis: false, // Default
      allowAfterSuper: false, // Default
      allowAfterThisConstructor: false, // Default
      enforceInMethodNames: false, // Default
      allowFunctionParams: true, // Default
    }],
    'no-unneeded-ternary': [ERROR, {
      defaultAssignment: false,
    }],
    'no-whitespace-before-property': [ERROR],
    'nonblock-statement-body-position': [ERROR, 'below'],
    'object-curly-newline': [ERROR, {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true },
      ImportDeclaration: { consistent: true },
      ExportDeclaration: { consistent: true },
    }],
    'object-curly-spacing': [ERROR, 'always', {
      arraysInObjects: true,
      objectsInObjects: true,
    }],
    'object-property-newline': [ERROR, {
      allowAllPropertiesOnSameLine: true,
    }],
    'one-var': [ERROR, {
      var: 'never',
      let: 'never',
      const: 'never',
      separateRequires: true,
    }],
    'one-var-declaration-per-line': [ERROR, 'always'],
    'operator-assignment': [ERROR, 'always'],
    'operator-linebreak': [ERROR, 'before'],
    'padded-blocks': [ERROR, {
      blocks: 'never',
      classes: 'always',
      switches: 'never',
    }, {
      allowSingleLineBlocks: false,
    }],
    // TODO: Add more constraints
    'padding-line-between-statements': [ERROR,
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'always', prev: ['*'], next: ['const', 'let', 'var'] },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      // eslint-disable-next-line array-bracket-newline -- Would break the file pattern
    ],
    'prefer-exponentiation-operator': [ERROR],
    'prefer-object-spread': [ERROR],
    'quote-props': [ERROR, 'as-needed', {
      keywords: false, // Default
      unnecessary: true, // Default
      numbers: false, // Default
    }],
    quotes: [ERROR, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    semi: [ERROR, 'always', {
      omitLastInOneLineBlock: false,
    }],
    'semi-spacing': [ERROR, {
      before: false, // Default
      after: true, // Default
    }],
    'semi-style': [ERROR, 'last'], // Default
    // OFF as it is a nightmare to maintain for little benefit
    'sort-keys': [OFF, 'asc', {
      caseSensitive: false,
      minKeys: 5,
      natural: true,
    }],
    // OFF as it is a nightmare to maintain for little benefit
    'sort-vars': [OFF, {
      ignoreCase: true,
    }],
    'space-before-blocks': [ERROR, {
      functions: 'always', // Default
      keywords: 'always', // Default
      classes: 'always', // Default
    }],
    'space-before-function-paren': [ERROR, {
      anonymous: 'always', // Default
      named: 'never',
      asyncArrow: 'always', // Default
    }],
    'space-in-parens': [ERROR, 'never', { // Default
      exceptions: [], // Default
    }],
    'space-infix-ops': [ERROR, {
      int32Hint: false, // Default
    }],
    'space-unary-ops': [ERROR, {
      words: true, // Default
      nonwords: false, // Default
      overrides: {}, // Default
    }],
    'spaced-comment': [ERROR, 'always', { // Default
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
    'switch-colon-spacing': [ERROR, {
      after: true, // Default
      before: false, // Default
    }],
    'template-tag-spacing': [ERROR, 'never'], // Default
    'unicode-bom': [ERROR, 'never'], // Default
    'wrap-regex': [ERROR],

    /* ----- ECMAScript 6 ----- */
    'arrow-body-style': [ERROR, 'as-needed', { // Default
      requireReturnForObjectLiteral: false, // Default
    }],
    'arrow-parens': [ERROR, 'always'], // Default
    'arrow-spacing': [ERROR, {
      before: true, // Default
      after: true, // Default
    }],
    'constructor-super': [ERROR],
    'generator-star-spacing': [ERROR, {
      before: false,
      after: true,
      named: { before: false, after: true },
      anonymous: { before: false, after: true },
      method: { before: true, after: false },
    }],
    'no-class-assign': [ERROR],
    'no-confusing-arrow': [ERROR, {
      allowParens: true, // Default
    }],
    'no-const-assign': [ERROR],
    'no-dupe-class-members': [ERROR],
    // OFF as it is superseded by import/no-duplicates
    'no-duplicate-imports': [OFF],
    'no-new-symbol': [ERROR],
    'no-restricted-exports': [ERROR, {
      restrictedNamedExports: [], // Default
    }],
    'no-restricted-imports': [ERROR, {
      paths: [
        {
          name: 'fs',
          message: 'Please use fs-extra instead.',
        },
        {
          name: 'lodash',
          message: `Com'on, you can do better!`,
        },
      ],
    }],
    'no-this-before-super': [ERROR],
    'no-useless-computed-key': [ERROR, {
      enforceForClassMembers: true,
    }],
    'no-useless-constructor': [ERROR],
    'no-useless-rename': [ERROR, {
      ignoreImport: false, // Default
      ignoreExport: false, // Default
      ignoreDestructuring: false, // Default
    }],
    'no-var': [ERROR],
    'object-shorthand': [ERROR, 'always', {
      avoidQuotes: true,
      ignoreConstructors: false, // Default
      avoidExplicitReturnArrows: false, // Default
    }],
    'prefer-arrow-callback': [ERROR, {
      allowNamedFunctions: false, // Default
      allowUnboundThis: true, // Default
    }],
    'prefer-const': [ERROR, {
      destructuring: 'any', // Default
      ignoreReadBeforeAssign: false, // Default
    }],
    // OFF as it is less readable when dealing with `this`
    // e.g.: const writableStream = this.cache[path];
    'prefer-destructuring': [OFF, {
      VariableDeclarator: {
        object: true,
        array: true,
      },
      AssignmentExpression: {
        object: true,
        array: true,
      },
    }, {
      enforceForRenamedProperties: true,
    }],
    'prefer-numeric-literals': [ERROR],
    'prefer-rest-params': [ERROR],
    'prefer-spread': [ERROR],
    'prefer-template': [ERROR],
    'require-yield': [ERROR],
    'rest-spread-spacing': [ERROR, 'never'],
    // OFF as we don't care about alphabetical order. Scoped order would be much more interesting
    'sort-imports': [OFF, {
      ignoreCase: false, // Default
      ignoreDeclarationSort: false, // Default
      ignoreMemberSort: false, // Default
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'], // Default
      allowSeparatedGroups: false, // Default
    }],
    'symbol-description': [ERROR],
    'template-curly-spacing': [ERROR, 'never'],
    'yield-star-spacing': [ERROR, {
      before: false, // Default
      after: true, // Default
    }],
  },
};

/* eslint-enable max-lines */
