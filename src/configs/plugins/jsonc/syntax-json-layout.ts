import jsoncPlugin from 'eslint-plugin-jsonc'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'
import { getRuleConfig } from '../../../utilities.ts'

import { stylisticJavascriptLayoutConfig } from '../stylistic/language-javascript-layout.ts'


const INDENT_SPACE_COUNT = 2

export const jsonLayoutConfig: FixedLinterConfig = {
  plugins: {
    jsonc: jsoncPlugin,
  },

  rules: {
    /* ----- Extended rules ----- */
    'jsonc/array-bracket-newline': [ERROR, 'consistent'],
    'jsonc/array-bracket-spacing': [ERROR, 'never', {
      arraysInArrays: false,
      objectsInArrays: false,
      singleValue: false,
    }],
    'jsonc/array-element-newline': [ERROR, 'consistent'],
    'jsonc/comma-dangle': [ERROR, {
      // Configured value
      arrays: 'never',
      // Configured value
      exports: 'never',
      // Configured value
      functions: 'never',
      // Configured value
      imports: 'never',
      // Configured value
      objects: 'never',
    }],
    'jsonc/comma-style': getRuleConfig('@stylistic/comma-style', stylisticJavascriptLayoutConfig),
    // Same configuration as the @stylistic/indent rule but it diverged slightly
    'jsonc/indent': [ERROR, INDENT_SPACE_COUNT, {
      flatTernaryExpressions: false,
      ignoreComments: false,
      ignoredNodes: [],
      offsetTernaryExpressions: true,
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
      },
      FunctionExpression: {
        body: 1,
        // Configured value
        parameters: 'first',
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
        var: 2,
      },
      /* eslint-enable @typescript-eslint/naming-convention */
    }],
    'jsonc/key-spacing': getRuleConfig('@stylistic/key-spacing', stylisticJavascriptLayoutConfig),
    'jsonc/object-curly-newline': [ERROR, {
      /* eslint-disable @typescript-eslint/naming-convention -- AST Nodes */
      // Configured value
      ExportDeclaration: { consistent: true },
      // Configured value
      ImportDeclaration: { consistent: true },
      // Configured value
      ObjectExpression: { consistent: true },
      // Configured value
      ObjectPattern: { consistent: true },
      /* eslint-enable @typescript-eslint/naming-convention */
    }],
    'jsonc/object-curly-spacing': [ERROR, 'always', {
      // Configured value
      arraysInObjects: true,
      // Configured value
      emptyObjects: 'never',
      // Configured value
      objectsInObjects: true,
    }],
    'jsonc/object-property-newline': [ERROR, {
      // Configured value
      allowAllPropertiesOnSameLine: true,
    }],
    'jsonc/quote-props': [ERROR, 'always'],
    'jsonc/quotes': [ERROR, 'double', {
      // Configured value
      allowTemplateLiterals: false,
      // Configured value
      avoidEscape: false,
    }],
    'jsonc/space-unary-ops': getRuleConfig('@stylistic/space-unary-ops', stylisticJavascriptLayoutConfig),
  },
}
