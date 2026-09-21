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
    'jsonc/array-bracket-newline': getRuleConfig('@stylistic/array-bracket-newline', stylisticJavascriptLayoutConfig),
    'jsonc/array-bracket-spacing': getRuleConfig('@stylistic/array-bracket-spacing', stylisticJavascriptLayoutConfig),
    'jsonc/array-element-newline': getRuleConfig('@stylistic/array-element-newline', stylisticJavascriptLayoutConfig),
    'jsonc/comma-dangle': getRuleConfig('@stylistic/comma-dangle', stylisticJavascriptLayoutConfig),
    'jsonc/comma-style': getRuleConfig('@stylistic/comma-style', stylisticJavascriptLayoutConfig),
    'jsonc/indent': getRuleConfigOverride('@stylistic/indent', stylisticJavascriptLayoutConfig, undefined, {
      // `jsonc` has no counterpart for this option
      assignmentOperator: REMOVE,
      /* eslint-disable @typescript-eslint/naming-convention -- AST Nodes */
      // JSON5 has none of these constructs, and `jsonc` rejects the shape each option carries here
      FunctionDeclaration: REMOVE,
      FunctionExpression: REMOVE,
      offsetTernaryExpressions: REMOVE,
      VariableDeclarator: REMOVE,
      /* eslint-enable @typescript-eslint/naming-convention */
    }),
    'jsonc/key-spacing': getRuleConfig('@stylistic/key-spacing', stylisticJavascriptLayoutConfig),
    // Same configuration as the @stylistic/object-curly-newline rule but it diverged slightly
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
    'jsonc/object-curly-spacing': getRuleConfigOverride('@stylistic/object-curly-spacing', stylisticJavascriptLayoutConfig, undefined, {
      // `jsonc` has no counterpart for this option
      overrides: REMOVE,
    }),
    'jsonc/object-property-newline': getRuleConfig('@stylistic/object-property-newline', stylisticJavascriptLayoutConfig),
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
