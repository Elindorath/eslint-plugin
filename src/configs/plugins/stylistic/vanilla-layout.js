/* eslint-disable max-lines -- TODO: Might be splitted */
'use strict'

const stylisticPlugin = require('@stylistic/eslint-plugin')

const { OFF, ERROR } = require('../../../constants')


const CODE_MAX_LEN = 180
const TAB_WIDTH = 2
const INDENT_SPACE_COUNT = 2
const ALWAYS_MULTILINE = 'always-multiline'
const LINE_ALIGNED = 'line-aligned'
const PARENS_NEW_LINE = 'parens-new-line'

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    '@stylistic': stylisticPlugin,
  },

  /**
   * This plugin is a combination of 4 different plugins:
   *   - @stylistic/eslint-plugin-js
   *   - @stylistic/eslint-plugin-ts
   *   - @stylistic/eslint-plugin-jsx
   *   - @stylistic/eslint-plugin-plus
   * TODO: We might want to split the configuration tailored for each syntax
   */

  rules: {
    '@stylistic/array-bracket-newline': [ERROR, 'consistent'],
    '@stylistic/array-bracket-spacing': [ERROR, 'never', {
      singleValue: false, // default
      objectsInArrays: false, // default
      arraysInArrays: false, // default
    }],
    '@stylistic/array-element-newline': [ERROR, 'consistent'],
    '@stylistic/arrow-parens': [ERROR, 'always', {}], // default
    '@stylistic/arrow-spacing': [ERROR, {
      before: true, // default
      after: true, // default
    }],
    '@stylistic/block-spacing': [ERROR, 'always'], // default
    '@stylistic/brace-style': [ERROR, '1tbs', {
      allowSingleLine: false, // default
    }],
    '@stylistic/comma-dangle': [ERROR, {
      arrays: ALWAYS_MULTILINE,
      objects: ALWAYS_MULTILINE,
      imports: ALWAYS_MULTILINE,
      exports: ALWAYS_MULTILINE,
      functions: 'only-multiline',
    }],
    '@stylistic/comma-spacing': [ERROR, {
      before: false, // default
      after: true, // default
    }],
    '@stylistic/comma-style': [ERROR, 'last', {
      exceptions: {
        ArrayExpression: false, // default
        ArrayPattern: false, // default
        ArrowFunctionExpression: false, // default
        CallExpression: false, // default
        FunctionDeclaration: false, // default
        FunctionExpression: false, // default
        ImportDeclaration: false, // default
        ObjectExpression: false, // default
        ObjectPattern: false, // default
        VariableDeclaration: false, // default
        NewExpression: false, // default
      },
    }],
    '@stylistic/computed-property-spacing': [ERROR, 'never', {
      enforceForClassMembers: true, // default
    }],
    // TODO: might be configured by kind of blocks, notably to handle declaring noop function
    '@stylistic/curly-newline': [ERROR, 'always'],
    '@stylistic/dot-location': [ERROR, 'property'],
    '@stylistic/eol-last': [ERROR, 'always'],
    '@stylistic/func-call-spacing': [ERROR, 'never'],
    '@stylistic/function-call-argument-newline': [ERROR, 'consistent'],
    '@stylistic/function-call-spacing': [ERROR, 'never'],
    '@stylistic/function-paren-newline': [ERROR, 'multiline-arguments'],
    '@stylistic/generator-star-spacing': [ERROR, {
      before: false,
      after: true,
      anonymous: {
        before: false,
        after: true,
      },
      named: {
        before: false,
        after: true,
      },
      method: {
        before: false,
        after: true,
      },
    }],
    '@stylistic/implicit-arrow-linebreak': [ERROR, 'beside'],
    '@stylistic/indent': [ERROR, INDENT_SPACE_COUNT, {
      SwitchCase: 1,
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 3,
      },
      outerIIFEBody: 1, // default
      MemberExpression: 1, // default
      FunctionDeclaration: {
        parameters: 'first',
        body: 1, // default
      },
      FunctionExpression: {
        parameters: 'first',
        body: 1, // default
      },
      StaticBlock: {
        body: 1, // default
      },
      CallExpression: {
        arguments: 1, // default
      },
      ArrayExpression: 1, // default
      ObjectExpression: 1, // default
      ImportDeclaration: 1, // default
      flatTernaryExpressions: false, // default
      offsetTernaryExpressions: true, // default
      ignoredNodes: [], // default
      ignoreComments: false, // default
    }],
    '@stylistic/indent-binary-ops': [ERROR, INDENT_SPACE_COUNT],
    '@stylistic/key-spacing': [ERROR, {
      singleLine: {
        beforeColon: false, // default
        afterColon: true, // default
        mode: 'strict', // default
      },
      multiLine: {
        // align: {
        //   beforeColon: false,
        //   afterColon: true,
        //   on: 'colon',
        //   mode: 'strict',
        // },
        beforeColon: false, // default
        afterColon: true, // default
        mode: 'strict', // default
      },
    }],
    '@stylistic/keyword-spacing': [ERROR, {
      before: true, // default
      after: true, // default
      overrides: {},
    }],
    '@stylistic/line-comment-position': [ERROR, {
      position: 'above', // default
      // Default ignore patterns are: 'eslint', 'jshint', 'jslint', 'istanbul', 'global', 'exported', 'jscs', 'falls through'
      ignorePattern: '', // default
      applyDefaultIgnorePatterns: true, // default
    }],
    '@stylistic/linebreak-style': [ERROR, 'unix'],
    '@stylistic/lines-around-comment': [ERROR, {
      beforeBlockComment: true, // default
      afterBlockComment: false,
      beforeLineComment: false,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: false,
      allowClassStart: true,
      allowClassEnd: false,
      allowObjectStart: true,
      allowObjectEnd: false,
      allowArrayStart: true,
      allowArrayEnd: false,
      ignorePattern: '',
      applyDefaultIgnorePatterns: true,
      // afterHashbangComment: true,
    }],
    '@stylistic/lines-between-class-members': [ERROR, 'always', {
      exceptAfterSingleLine: false, // default
    }],
    '@stylistic/max-len': [ERROR, CODE_MAX_LEN, TAB_WIDTH, {
      code: CODE_MAX_LEN,
      tabWidth: TAB_WIDTH,
      comments: CODE_MAX_LEN,
      ignorePattern: '^\\s*it\\(.+\\{|Lorem ipsum.+;|mailto:.+;',
      ignoreComments: false,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: true,
    }],
    '@stylistic/max-statements-per-line': [ERROR, {
      max: 1,
    }],
    '@stylistic/member-delimiter-style': [ERROR, {
      multiline: {
        delimiter: 'semi', // default
        requireLast: true, // default
      },
      singleline: {
        delimiter: 'semi', // default
        requireLast: true,
      },
      multilineDetection: 'brackets', // default
      overrides: {},
    }],
    '@stylistic/multiline-comment-style': [ERROR, 'starred-block'],
    '@stylistic/multiline-ternary': [ERROR, ALWAYS_MULTILINE, {
      ignoreJSX: false, // default (kind of undocumented)
    }],
    '@stylistic/new-parens': [ERROR, 'always'],
    '@stylistic/newline-per-chained-call': [ERROR, {
      ignoreChainWithDepth: 2, // default
    }],
    '@stylistic/no-confusing-arrow': [ERROR, {
      allowParens: true, // default
      onlyOneSimpleParam: false, // default
    }],
    '@stylistic/no-extra-parens': [ERROR, 'all', { // default
      conditionalAssign: true,
      returnAssign: true,
      nestedBinaryExpressions: false,
      ternaryOperandBinaryExpressions: true,
      ignoreJSX: 'multi-line',
      enforceForArrowConditionals: true,
      enforceForSequenceExpressions: true,
      enforceForNewInMemberExpressions: true,
      enforceForFunctionPrototypeMethods: true,
      allowParensAfterCommentPattern: '@type',
    }],
    '@stylistic/no-extra-semi': [ERROR],
    '@stylistic/no-floating-decimal': [ERROR],
    '@stylistic/no-mixed-operators': [ERROR, {
      groups: [
        ['+', '-', '*', '/', '%', '**'], // default
        ['&', '|', '^', '~', '<<', '>>', '>>>'], // default
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='], // default
        ['&&', '||', '??', '?:'],
        ['in', 'instanceof'], // default
      ],
      allowSamePrecedence: true, // default
    }],
    '@stylistic/no-mixed-spaces-and-tabs': [ERROR, 'smart-tabs'],
    '@stylistic/no-multi-spaces': [ERROR, {
      ignoreEOLComments: false, // default
      exceptions: {
        Property: false,
      },
    }],
    '@stylistic/no-multiple-empty-lines': [ERROR, {
      max: 2, // default
      maxEOF: 1,
      maxBOF: 0,
    }],
    '@stylistic/no-tabs': [ERROR, {
      allowIndentationTabs: false, // default
    }],
    '@stylistic/no-trailing-spaces': [ERROR, {
      skipBlankLines: false, // default
      ignoreComments: false, // default
    }],
    '@stylistic/no-whitespace-before-property': [ERROR],
    '@stylistic/nonblock-statement-body-position': [ERROR, 'below', {
      overrides: {
        if: 'below',
        else: 'below',
        while: 'below',
        do: 'below',
        for: 'below',
      },
    }],
    '@stylistic/object-curly-newline': [ERROR, {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true },
      ImportDeclaration: { consistent: true },
      ExportDeclaration: { consistent: true },
    }],
    '@stylistic/object-curly-spacing': [ERROR, 'always', {
      arraysInObjects: true,
      objectsInObjects: true,
    }],
    '@stylistic/object-property-newline': [ERROR, {
      allowAllPropertiesOnSameLine: true,
    }],
    '@stylistic/one-var-declaration-per-line': [ERROR, 'always'],
    '@stylistic/operator-linebreak': [ERROR, 'before', {
      overrides: {
        '=': 'none',
        '+=': 'none',
        '-=': 'none',
        '*=': 'none',
        '/=': 'none',
        '%=': 'none',
        '**=': 'none',
        '<<=': 'none',
        '>>=': 'none',
        '>>>=': 'none',
        '&=': 'none',
        '^=': 'none',
        '|=': 'none',
        '&&=': 'none',
        '||=': 'none',
        '??=': 'none',
      },
    }],
    '@stylistic/padded-blocks': [ERROR, {
      blocks: 'never',
      classes: 'always',
      switches: 'never',
    }, {
      allowSingleLineBlocks: false,
    }],
    '@stylistic/padding-line-between-statements': [ERROR,
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'always', prev: ['*'], next: ['const', 'let', 'var'] },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },

      /**
       * "block-like"
       * "block"
       * "break"
       * "case"
       * "class"
       * "const"
       * "continue"
       * "debugger"
       * "default"
       * "directive"
       * "do"
       * "empty"
       * "export"
       * "exports"
       * "expression"
       * "for"
       * "function"
       * "if"
       * "iife"
       * "import"
       * "interface"
       * "let"
       * "multiline-block-like"
       * "multiline-const"
       * "multiline-expression"
       * "multiline-let"
       * "multiline-var"
       * "require"
       * "return"
       * "singleline-const"
       * "singleline-let"
       * "singleline-var"
       * "switch"
       * "throw"
       * "try"
       * "type"
       * "var"
       * "while"
       * "with"
       */
    ],
    '@stylistic/quote-props': [ERROR, 'consistent-as-needed', {
      keywords: false, // default
      unnecessary: true, // default
      numbers: false, // default
    }],
    '@stylistic/quotes': [ERROR, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    '@stylistic/rest-spread-spacing': [ERROR, 'never'],
    '@stylistic/semi': [ERROR, 'never', {
      beforeStatementContinuationChars: 'never',
    }],
    '@stylistic/semi-spacing': [ERROR, {
      before: false, // default
      after: true, // default
    }],
    '@stylistic/semi-style': [ERROR, 'last'],
    '@stylistic/space-before-blocks': [ERROR, {
      functions: 'always', // default
      keywords: 'always', // default
      classes: 'always', // default
    }],
    '@stylistic/space-before-function-paren': [ERROR, {
      anonymous: 'always', // default
      named: 'never',
      asyncArrow: 'always', // default
    }],
    '@stylistic/space-in-parens': [ERROR, 'never', { // default
      exceptions: [], // default
    }],
    '@stylistic/space-infix-ops': [ERROR, {
      int32Hint: false, // default
    }],
    '@stylistic/space-unary-ops': [ERROR, {
      words: true, // default
      nonwords: false, // default
      overrides: {},
    }],
    '@stylistic/spaced-comment': [ERROR, 'always', { // default
      exceptions: [],
      markers: [],
      line: {
        exceptions: [],
        markers: [],
      },
      block: {
        exceptions: ['*'],
        markers: [],
        balanced: true,
      },
    }],
    '@stylistic/switch-colon-spacing': [ERROR, {
      before: false, // default
      after: true, // default
    }],
    '@stylistic/template-curly-spacing': [ERROR, 'never'], // default
    '@stylistic/template-tag-spacing': [ERROR, 'never'], // default
    '@stylistic/type-annotation-spacing': [ERROR, {
      before: false, // default
      after: true, // default
      overrides: {},
    }],
    '@stylistic/type-generic-spacing': [ERROR],
    '@stylistic/type-named-tuple-spacing': [ERROR],
    '@stylistic/wrap-iife': [ERROR, 'inside', {
      functionPrototypeMethods: true,
    }],
    '@stylistic/wrap-regex': [ERROR],
    '@stylistic/yield-star-spacing': [ERROR, {
      before: false, // default
      after: true, // default
    }],
    '@stylistic/jsx-child-element-spacing': [ERROR],
    '@stylistic/jsx-closing-bracket-location': [ERROR, {
      nonEmpty: LINE_ALIGNED,
      selfClosing: LINE_ALIGNED,
    }],
    '@stylistic/jsx-closing-tag-location': [ERROR, LINE_ALIGNED],
    '@stylistic/jsx-curly-brace-presence': [ERROR, {
      props: 'never', // default
      children: 'always',
      propElementValues: 'always',
    }],
    '@stylistic/jsx-curly-newline': [ERROR, {
      multiline: 'require',
      singleline: 'forbid',
    }],
    '@stylistic/jsx-curly-spacing': [ERROR, {
      when: 'never', // default
      allowMultiline: true, // default
      attributes: { when: 'never', allowMultiline: true }, // default
      children: { when: 'never', allowMultiline: true },
      spacing: { objectLiterals: 'never' }, // default
    }],
    '@stylistic/jsx-equals-spacing': [ERROR, 'never'],
    '@stylistic/jsx-first-prop-new-line': [ERROR, 'multiline'],
    '@stylistic/jsx-function-call-newline': [ERROR, 'multiline'],
    '@stylistic/jsx-indent-props': [ERROR, {
      indentMode: 'first',
      ignoreTernaryOperator: false, // default
    }],
    '@stylistic/jsx-max-props-per-line': [ERROR, {
      maximum: 1, // default
      when: 'multiline',
    }],
    // OFF as we don't enforce new line between adjacent JSX elements
    '@stylistic/jsx-newline': [OFF, {
      prevent: false, // default
      allowMultilines: false, // default
    }],
    '@stylistic/jsx-one-expression-per-line': [ERROR, {
      allow: 'none', // default
    }],
    '@stylistic/jsx-pascal-case': [ERROR, {
      allowAllCaps: false, // default
      allowLeadingUnderscore: false, // default
      allowNamespace: true,
      ignore: [], // default
    }],
    '@stylistic/jsx-props-no-multi-spaces': [ERROR],
    '@stylistic/jsx-quotes': [ERROR, 'prefer-double'],
    '@stylistic/jsx-self-closing-comp': [ERROR, {
      component: true, // default
      html: true, // default
    }],
    '@stylistic/jsx-sort-props': [ERROR, {
      callbacksLast: true,
      shorthandFirst: true,
      shorthandLast: false, // default
      multiline: 'ignore', // default
      ignoreCase: true,
      noSortAlphabetically: false, // default
      reservedFirst: true,
      locale: 'auto', // default
    }],
    '@stylistic/jsx-tag-spacing': [ERROR, {
      closingSlash: 'never', // default
      beforeSelfClosing: 'always', // default
      afterOpening: 'never', // default
      beforeClosing: 'never',
    }],
    '@stylistic/jsx-wrap-multilines': [ERROR, {
      declaration: PARENS_NEW_LINE,
      assignment: PARENS_NEW_LINE,
      return: PARENS_NEW_LINE,
      arrow: PARENS_NEW_LINE,
      condition: PARENS_NEW_LINE,
      logical: PARENS_NEW_LINE,
      prop: 'ignore', // default
    }],
  },
}

/* eslint-enable */
