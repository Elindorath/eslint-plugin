import jsoncPlugin from 'eslint-plugin-jsonc'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'
import { getRuleConfig, getRuleConfigOverride, REMOVE } from '../../../utilities.ts'

import { stylisticJavascriptLayoutConfig } from '../stylistic/language-javascript-layout.ts'


export const json5LayoutConfig: FixedLinterConfig = {
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
    'jsonc/comma-dangle': getRuleConfig('@stylistic/comma-dangle', stylisticJavascriptLayoutConfig),
    'jsonc/comma-style': getRuleConfig('@stylistic/comma-style', stylisticJavascriptLayoutConfig),
    'jsonc/indent': getRuleConfigOverride('@stylistic/indent', stylisticJavascriptLayoutConfig, undefined, {
      // `jsonc` has no counterpart for this option
      assignmentOperator: REMOVE,
      /* eslint-disable @typescript-eslint/naming-convention -- AST Nodes */
      // JSON5 has none of these constructs, and `jsonc` rejects the shape each option carries here
      FunctionDeclaration: REMOVE,
      FunctionExpression: REMOVE,
      jsx: REMOVE,
      offsetTernaryExpressions: REMOVE,
      VariableDeclarator: REMOVE,
      /* eslint-enable @typescript-eslint/naming-convention */
    }),
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
    'jsonc/quote-props': getRuleConfig('@stylistic/quote-props', stylisticJavascriptLayoutConfig),
    'jsonc/quotes': getRuleConfigOverride('@stylistic/quotes', stylisticJavascriptLayoutConfig, undefined, {
      // JSON5 has no template literal, and `jsonc` only accepts a boolean here
      allowTemplateLiterals: REMOVE,
      // `jsonc` has no counterpart for this option
      ignoreStringLiterals: REMOVE,
    }),
    'jsonc/space-unary-ops': getRuleConfig('@stylistic/space-unary-ops', stylisticJavascriptLayoutConfig),
  },
}
