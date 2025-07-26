/* eslint-disable max-lines -- TODO: Might be splitted */
import stylisticPlugin from '@stylistic/eslint-plugin'

import { ERROR, OFF } from '../../../constants.ts'

import type { ESLint, Linter } from 'eslint'
import type { SetRequired } from 'type-fest'


const CODE_MAX_LEN = 180
const TAB_WIDTH = 2
const INDENT_SPACE_COUNT = 2
const ALWAYS_MULTILINE = 'always-multiline'
const LINE_ALIGNED = 'line-aligned'
const PARENS_NEW_LINE = 'parens-new-line'

export const stylisticVanillaLayoutConfig = {
  plugins: {
    '@stylistic': stylisticPlugin,
  },

  /**
   * This plugin was a combination of 4 different plugins:
   *   - @stylistic/eslint-plugin-js
   *   - @stylistic/eslint-plugin-ts
   *   - @stylistic/eslint-plugin-jsx
   *   - @stylistic/eslint-plugin-plus
   * TODO: We might want to split the configuration tailored for each syntax
   */

  rules: {
    '@stylistic/array-bracket-newline': [ERROR, 'consistent'],
    '@stylistic/array-bracket-spacing': [ERROR, 'never', {
      arraysInArrays: false,
      objectsInArrays: false,
      singleValue: false,
    }],
    '@stylistic/array-element-newline': [ERROR, 'consistent'],
    '@stylistic/arrow-parens': [ERROR, 'always', {}],
    '@stylistic/arrow-spacing': [ERROR, {
      after: true,
      before: true,
    }],
    '@stylistic/block-spacing': [ERROR, 'always'],
    '@stylistic/brace-style': [ERROR, '1tbs', {
      allowSingleLine: false,
    }],
    '@stylistic/comma-dangle': [ERROR, {
      // Configured value
      arrays: ALWAYS_MULTILINE,
      // Configured value
      exports: ALWAYS_MULTILINE,
      // Configured value
      functions: 'only-multiline',
      // Configured value
      imports: ALWAYS_MULTILINE,
      // Configured value
      objects: ALWAYS_MULTILINE,
    }],
    '@stylistic/comma-spacing': [ERROR, {
      after: true,
      before: false,
    }],
    '@stylistic/comma-style': [ERROR, 'last', {
      exceptions: {
        /* eslint-disable @typescript-eslint/naming-convention -- AST Nodes */
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        ClassDeclaration: false,
        ClassExpression: false,
        ExportAllDeclaration: false,
        ExportNamedDeclaration: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ImportExpression: false,
        NewExpression: false,
        ObjectExpression: false,
        ObjectPattern: false,
        SequenceExpression: false,
        TSCallSignatureDeclaration: false,
        TSConstructorType: false,
        TSConstructSignatureDeclaration: false,
        TSDeclareFunction: false,
        TSEmptyBodyFunctionExpression: false,
        TSEnumBody: false,
        TSFunctionType: false,
        TSIndexSignature: false,
        TSInterfaceBody: false,
        TSInterfaceDeclaration: false,
        TSMethodSignature: false,
        TSTupleType: false,
        TSTypeLiteral: false,
        TSTypeParameterDeclaration: false,
        TSTypeParameterInstantiation: false,
        VariableDeclaration: false,
        /* eslint-enable @typescript-eslint/naming-convention */
      },
    }],
    '@stylistic/computed-property-spacing': [ERROR, 'never', {
      enforceForClassMembers: true,
    }],
    // TODO: might be configured by kind of blocks, notably to handle declaring noop function
    '@stylistic/curly-newline': [ERROR, 'always'],
    '@stylistic/dot-location': [ERROR, 'property'],
    '@stylistic/eol-last': [ERROR, 'always'],
    '@stylistic/function-call-argument-newline': [ERROR, 'consistent'],
    '@stylistic/function-call-spacing': [ERROR, 'never'],
    '@stylistic/function-paren-newline': [ERROR, 'multiline-arguments'],
    '@stylistic/generator-star-spacing': [ERROR, {
      // Configured value
      after: true,
      // Configured value
      anonymous: {
        after: true,
        before: false,
      },
      // Configured value
      before: false,
      // Configured value
      method: {
        after: true,
        before: false,
      },
      // Configured value
      named: {
        after: true,
        before: false,
      },
    }],
    '@stylistic/implicit-arrow-linebreak': [ERROR, 'beside'],
    '@stylistic/indent': [ERROR, INDENT_SPACE_COUNT, {
      flatTernaryExpressions: false,
      ignoreComments: false,
      ignoredNodes: [],
      offsetTernaryExpressions: true,
      offsetTernaryExpressionsOffsetCallExpressions: true,
      outerIIFEBody: 1,

      /* ----- AST Node specifics ----- */
      /* eslint-disable @typescript-eslint/naming-convention -- AST Nodes */
      ArrayExpression: 1,
      CallExpression: {
        arguments: 1,
      },
      FunctionDeclaration: {
        body: 1,
        // Configured value
        parameters: 'first',
        // Configured value
        returnType: 0,
      },
      FunctionExpression: {
        body: 1,
        // Configured value
        parameters: 'first',
        // Configured value
        returnType: 0,
      },
      ImportDeclaration: 1,
      MemberExpression: 1,
      ObjectExpression: 1,
      StaticBlock: {
        body: 1,
      },
      // Configured value
      SwitchCase: 1,
      // Configured value
      VariableDeclarator: {
        const: 3,
        let: 2,
        using: 'first',
        var: 2,
      },
      /* eslint-enable @typescript-eslint/naming-convention */
    }],
    '@stylistic/indent-binary-ops': [ERROR, INDENT_SPACE_COUNT],
    '@stylistic/jsx-child-element-spacing': [ERROR],
    '@stylistic/jsx-closing-bracket-location': [ERROR, {
      // Configured value
      nonEmpty: LINE_ALIGNED,
      // Configured value
      selfClosing: LINE_ALIGNED,
    }],
    '@stylistic/jsx-closing-tag-location': [ERROR, LINE_ALIGNED],
    '@stylistic/jsx-curly-brace-presence': [ERROR, {
      // Configured value
      children: 'always',
      // Configured value
      propElementValues: 'always',
      props: 'never',
    }],
    '@stylistic/jsx-curly-newline': [ERROR, {
      // Configured value
      multiline: 'require',
      // Configured value
      singleline: 'forbid',
    }],
    '@stylistic/jsx-curly-spacing': [ERROR, {
      allowMultiline: true,
      attributes: { allowMultiline: true, when: 'never' },
      // Configured value
      children: { allowMultiline: true, when: 'never' },
      spacing: { objectLiterals: 'never' },
      when: 'never',
    }],
    '@stylistic/jsx-equals-spacing': [ERROR, 'never'],
    '@stylistic/jsx-first-prop-new-line': [ERROR, 'multiline'],
    '@stylistic/jsx-function-call-newline': [ERROR, 'multiline'],
    '@stylistic/jsx-indent-props': [ERROR, {
      ignoreTernaryOperator: false,
      // Configured value
      indentMode: 'first',
    }],
    '@stylistic/jsx-max-props-per-line': [ERROR, {
      maximum: 1,
      // Configured value
      when: 'multiline',
    }],
    // OFF as we don't enforce new line between adjacent JSX elements
    '@stylistic/jsx-newline': [OFF, {
      allowMultilines: false,
      prevent: false,
    }],
    '@stylistic/jsx-one-expression-per-line': [ERROR, {
      allow: 'none',
    }],
    '@stylistic/jsx-pascal-case': [ERROR, {
      allowAllCaps: false,
      allowLeadingUnderscore: false,
      // Configured value
      allowNamespace: true,
      ignore: [],
    }],
    '@stylistic/jsx-props-no-multi-spaces': [ERROR],
    '@stylistic/jsx-quotes': [ERROR, 'prefer-double'],
    '@stylistic/jsx-self-closing-comp': [ERROR, {
      component: true,
      html: true,
    }],
    '@stylistic/jsx-sort-props': [ERROR, {
      // Configured value
      callbacksLast: true,
      // Configured value
      ignoreCase: true,
      locale: 'auto',
      multiline: 'ignore',
      noSortAlphabetically: false,
      // Configured value
      reservedFirst: true,
      // Configured value
      shorthandFirst: true,
      shorthandLast: false,
    }],
    '@stylistic/jsx-tag-spacing': [ERROR, {
      afterOpening: 'never',
      // Configured value
      beforeClosing: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never',
    }],
    '@stylistic/jsx-wrap-multilines': [ERROR, {
      // Configured value
      arrow: PARENS_NEW_LINE,
      // Configured value
      assignment: PARENS_NEW_LINE,
      // Configured value
      condition: PARENS_NEW_LINE,
      // Configured value
      declaration: PARENS_NEW_LINE,
      // Configured value
      logical: PARENS_NEW_LINE,
      prop: 'ignore',
      // Configured value
      return: PARENS_NEW_LINE,
    }],
    '@stylistic/key-spacing': [ERROR, {
      multiLine: {
        afterColon: true,
        beforeColon: false,
        mode: 'strict',
      },
      singleLine: {
        afterColon: true,
        beforeColon: false,
        mode: 'strict',
      },
    }],
    '@stylistic/keyword-spacing': [ERROR, {
      after: true,
      before: true,
      overrides: {},
    }],
    '@stylistic/line-comment-position': [ERROR, {
      applyDefaultIgnorePatterns: true,
      // Default ignore patterns are: 'eslint', 'jshint', 'jslint', 'istanbul', 'global', 'exported', 'jscs', 'falls through'
      ignorePattern: '',
      position: 'above',
    }],
    '@stylistic/linebreak-style': [ERROR, 'unix'],
    '@stylistic/lines-around-comment': [ERROR, {
      // Configured value
      afterBlockComment: false,
      // Configured value
      afterHashbangComment: true,
      // Configured value
      afterLineComment: false,
      // Configured value
      allowArrayEnd: false,
      // Configured value
      allowArrayStart: true,
      // Configured value
      allowBlockEnd: false,
      // Configured value
      allowBlockStart: true,
      // Configured value
      allowClassEnd: false,
      // Configured value
      allowClassStart: true,
      // Configured value
      allowObjectEnd: false,
      // Configured value
      allowObjectStart: true,
      // Configured value
      applyDefaultIgnorePatterns: true,
      beforeBlockComment: true,
      // Configured value
      beforeLineComment: false,
      ignorePattern: '',
    }],
    '@stylistic/lines-between-class-members': [ERROR, 'always', {
      exceptAfterSingleLine: false,
    }],
    '@stylistic/max-len': [ERROR, CODE_MAX_LEN, TAB_WIDTH, {
      // Configured value
      code: CODE_MAX_LEN,
      // Configured value
      comments: CODE_MAX_LEN,
      // Configured value
      ignoreComments: false,
      // Configured value
      ignorePattern: String.raw`^\s*it\(.+\{|Lorem ipsum.+;|mailto:.+;`,
      // Configured value
      ignoreRegExpLiterals: true,
      // Configured value
      ignoreStrings: false,
      // Configured value
      ignoreTemplateLiterals: false,
      // Configured value
      ignoreTrailingComments: true,
      // Configured value
      ignoreUrls: true,
      // Configured value
      tabWidth: TAB_WIDTH,
    }],
    '@stylistic/max-statements-per-line': [ERROR, {
      // Configured value
      max: 1,
    }],
    '@stylistic/member-delimiter-style': [ERROR, {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      multilineDetection: 'brackets',
      overrides: {},
      singleline: {
        delimiter: 'semi',
        // Configured value
        requireLast: true,
      },
    }],
    '@stylistic/multiline-comment-style': [ERROR, 'starred-block'],
    '@stylistic/multiline-ternary': [ERROR, ALWAYS_MULTILINE, {
      // Kind of undocumented
      ignoreJSX: false,
    }],
    '@stylistic/new-parens': [ERROR, 'always'],
    '@stylistic/newline-per-chained-call': [ERROR, {
      ignoreChainWithDepth: 2,
    }],
    '@stylistic/no-confusing-arrow': [ERROR, {
      allowParens: true,
      onlyOneSimpleParam: false,
    }],
    '@stylistic/no-extra-parens': [ERROR, 'all', {
      // Configured value
      allowNodesInSpreadElement: {
        /* eslint-disable @typescript-eslint/naming-convention -- AST Nodes */
        AwaitExpression: true,
        ConditionalExpression: true,
        LogicalExpression: true,
        /* eslint-enable @typescript-eslint/naming-convention */
      },
      // Configured value
      allowParensAfterCommentPattern: '@type',
      // Configured value
      conditionalAssign: true,
      // Configured value
      enforceForArrowConditionals: true,
      // Configured value
      enforceForFunctionPrototypeMethods: true,
      // Configured value
      enforceForNewInMemberExpressions: true,
      // Configured value
      enforceForSequenceExpressions: true,
      // Configured value
      ignoreJSX: 'multi-line',
      // Configured value
      nestedBinaryExpressions: false,
      // Configured value
      nestedConditionalExpressions: false,
      // Configured value
      returnAssign: true,
      // Configured value
      ternaryOperandBinaryExpressions: false,
    }],
    '@stylistic/no-extra-semi': [ERROR],
    '@stylistic/no-floating-decimal': [ERROR],
    '@stylistic/no-mixed-operators': [ERROR, {
      allowSamePrecedence: true,
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        // Configured value
        ['&&', '||', '??', '?:'],
        ['in', 'instanceof'],
      ],
    }],
    '@stylistic/no-mixed-spaces-and-tabs': [ERROR, 'smart-tabs'],
    '@stylistic/no-multi-spaces': [ERROR, {
      // Configured value
      exceptions: {
        // eslint-disable-next-line @typescript-eslint/naming-convention -- AST Node
        Property: false,
      },
      ignoreEOLComments: false,
    }],
    '@stylistic/no-multiple-empty-lines': [ERROR, {
      max: 2,
      // Configured value
      maxBOF: 0,
      // Configured value
      maxEOF: 1,
    }],
    '@stylistic/no-tabs': [ERROR, {
      allowIndentationTabs: false,
    }],
    '@stylistic/no-trailing-spaces': [ERROR, {
      ignoreComments: false,
      skipBlankLines: false,
    }],
    '@stylistic/no-whitespace-before-property': [ERROR],
    '@stylistic/nonblock-statement-body-position': [ERROR, 'below', {
      // Configured value
      overrides: {
        do: 'below',
        else: 'below',
        for: 'below',
        if: 'below',
        while: 'below',
      },
    }],
    '@stylistic/object-curly-newline': [ERROR, {
      /* eslint-disable @typescript-eslint/naming-convention -- AST Nodes */
      // Configured value
      ExportDeclaration: { consistent: true },
      // Configured value
      ImportDeclaration: { consistent: true },
      // Configured value
      ObjectExpression: { consistent: true },
      // Configured value
      ObjectPattern: { consistent: true },
      // Configured value
      TSEnumBody: { consistent: true },
      // Configured value
      TSInterfaceBody: { consistent: true },
      // Configured value
      TSTypeLiteral: { consistent: true },
      /* eslint-enable @typescript-eslint/naming-convention */
    }],
    '@stylistic/object-curly-spacing': [ERROR, 'always', {
      // Configured value
      arraysInObjects: true,
      // Configured value
      objectsInObjects: true,
    }],
    '@stylistic/object-property-newline': [ERROR, {
      // Configured value
      allowAllPropertiesOnSameLine: true,
    }],
    '@stylistic/one-var-declaration-per-line': [ERROR, 'always'],
    '@stylistic/operator-linebreak': [ERROR, 'before', {
      // Configured value
      overrides: {
        '%=': 'none',
        '&&=': 'none',
        '&=': 'none',
        '**=': 'none',
        '*=': 'none',
        '+=': 'none',
        '-=': 'none',
        '/=': 'none',
        '<<=': 'none',
        '=': 'none',
        '>>=': 'none',
        '>>>=': 'none',
        '??=': 'none',
        '^=': 'none',
        '|=': 'none',
        '||=': 'none',
      },
    }],
    '@stylistic/padded-blocks': [ERROR, {
      // Configured value
      blocks: 'never',
      // Configured value
      classes: 'always',
      // Configured value
      switches: 'never',
    }, {
      // Configured value
      allowSingleLineBlocks: false,
    }],
    '@stylistic/padding-line-between-statements': [ERROR,
      // Configured value
      { blankLine: 'always', next: 'return', prev: '*' },
      // Configured value
      { blankLine: 'always', next: '*', prev: ['const', 'let', 'var', 'using'] },
      // Configured value
      { blankLine: 'always', next: ['const', 'let', 'var', 'using'], prev: ['*'] },
      // Configured value
      { blankLine: 'any', next: ['const', 'let', 'var', 'using'], prev: ['const', 'let', 'var', 'using'] },

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
       * "using"
       * "var"
       * "while"
       * "with"
       */
    ],
    '@stylistic/quote-props': [ERROR, 'consistent-as-needed', {
      keywords: false,
      numbers: false,
      unnecessary: true,
    }],
    '@stylistic/quotes': [ERROR, 'single', {
      // Configured value
      allowTemplateLiterals: 'avoidEscape',
      // Configured value
      avoidEscape: true,
      ignoreStringLiterals: false,
    }],
    '@stylistic/rest-spread-spacing': [ERROR, 'never'],
    '@stylistic/semi': [ERROR, 'never', {
      // Configured value
      beforeStatementContinuationChars: 'never',
    }],
    '@stylistic/semi-spacing': [ERROR, {
      after: true,
      before: false,
    }],
    '@stylistic/semi-style': [ERROR, 'last'],
    '@stylistic/space-before-blocks': [ERROR, {
      classes: 'always',
      functions: 'always',
      keywords: 'always',
      modules: 'always',
    }],
    '@stylistic/space-before-function-paren': [ERROR, {
      anonymous: 'always',
      asyncArrow: 'always',
      catch: 'always',
      // Configured value
      named: 'never',
    }],
    '@stylistic/space-in-parens': [ERROR, 'never', {
      exceptions: [],
    }],
    '@stylistic/space-infix-ops': [ERROR, {
      ignoreTypes: false,
      int32Hint: false,
    }],
    '@stylistic/space-unary-ops': [ERROR, {
      nonwords: false,
      overrides: {},
      words: true,
    }],
    '@stylistic/spaced-comment': [ERROR, 'always', {
      // Configured value
      block: {
        balanced: true,
        exceptions: ['*'],
        markers: [],
      },
      // Configured value
      exceptions: [],
      // Configured value
      line: {
        exceptions: [],
        markers: [],
      },
      // Configured value
      markers: [],
    }],
    '@stylistic/switch-colon-spacing': [ERROR, {
      after: true,
      before: false,
    }],
    '@stylistic/template-curly-spacing': [ERROR, 'never'],
    '@stylistic/template-tag-spacing': [ERROR, 'never'],
    '@stylistic/type-annotation-spacing': [ERROR, {
      after: true,
      before: false,
      // Configured value
      overrides: {
        arrow: {
          after: true,
          before: true,
        },
      },
    }],
    '@stylistic/type-generic-spacing': [ERROR],
    '@stylistic/type-named-tuple-spacing': [ERROR],
    '@stylistic/wrap-iife': [ERROR, 'inside', {
      // Configured value
      functionPrototypeMethods: true,
    }],
    '@stylistic/wrap-regex': [ERROR],
    '@stylistic/yield-star-spacing': [ERROR, {
      after: true,
      before: false,
    }],
  },
} as const satisfies Linter.Config

/* eslint-enable */


type PluginConfig<
  PluginPrefix extends string,
  PluginInstance extends SetRequired<ESLint.Plugin, 'rules'>
> = {
  plugins: { [key in PluginPrefix]: PluginInstance; };
  rules: { [key in `${PluginPrefix}/${ObjectKeys<PluginInstance['rules']>}`]: [Linter.StringSeverity, ...unknown[]] };
}

function definePluginConfig<
  PluginPrefix extends string,
  PluginInstance extends SetRequired<ESLint.Plugin, 'rules'>
>(config: PluginConfig<PluginPrefix, PluginInstance>) {

}

definePluginConfig({
  plugins: { coucou: stylisticPlugin },
  rules: {
    'coucou/toi': [ERROR],
    'coucou/yield-star-spacing': [ERROR, {
      afte: true,
    }],
  },
} as const)

type ObjectKeys<T extends object> = `${Exclude<keyof T, symbol>}`
type InferPluginRuleNames<Plugin extends SetRequired<ESLint.Plugin, 'rules'>> = Plugin['rules'] extends Record<infer Keys, any> ? Keys : never;
type TT = keyof Required<ESLint.Plugin>['rules']

const objectKeys = Object.keys as <T extends object>(object: T) => Array<ObjectKeys<T>>

// function extractRuleNames(plugin: SetRequired<ESLint.Plugin, 'rules'>) {
//   return objectKeys(plugin.rules) as InferPluginRuleNames<typeof plugin>
// }

// const t = extractRuleNames(stylisticPlugin)

function extractRuleNames<Rules extends SetRequired<ESLint.Plugin, 'rules'>['rules']>(rules: Rules) {
  return objectKeys(rules)
}

const t = extractRuleNames(stylisticPlugin.rules)
