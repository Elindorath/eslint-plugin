import jsoncPlugin from 'eslint-plugin-jsonc'
import jsonParser from 'jsonc-eslint-parser'

import { ERROR } from '../../../constants.ts'
import { getRuleConfig } from '../../../utils.ts'
import { stylisticVanillaLayoutConfig } from '../stylistic/vanilla-layout.ts'

import type { ESLint, Linter } from 'eslint'


const INDENT_SPACE_COUNT = 2

export const jsonLayoutConfig = {
  languageOptions: {
    parser: jsonParser,
  },

  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- See comment above
    jsonc: jsoncPlugin as unknown as ESLint.Plugin,
  },

  rules: {
    /* ----- Extended rules ----- */
    'jsonc/array-bracket-newline': getRuleConfig('@stylistic/array-bracket-newline', stylisticVanillaLayoutConfig),
    'jsonc/array-bracket-spacing': getRuleConfig('@stylistic/array-bracket-spacing', stylisticVanillaLayoutConfig),
    'jsonc/array-element-newline': getRuleConfig('@stylistic/array-element-newline', stylisticVanillaLayoutConfig),
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
    'jsonc/comma-style': getRuleConfig('@stylistic/comma-style', stylisticVanillaLayoutConfig),
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
    'jsonc/key-spacing': getRuleConfig('@stylistic/key-spacing', stylisticVanillaLayoutConfig),
    'jsonc/object-curly-newline': getRuleConfig('@stylistic/object-curly-newline', stylisticVanillaLayoutConfig),
    'jsonc/object-curly-spacing': getRuleConfig('@stylistic/object-curly-spacing', stylisticVanillaLayoutConfig),
    'jsonc/object-property-newline': getRuleConfig('@stylistic/object-property-newline', stylisticVanillaLayoutConfig),
    'jsonc/quote-props': [ERROR, 'always'],
    'jsonc/quotes': [ERROR, 'double', {
      // Configured value
      allowTemplateLiterals: false,
      // Configured value
      avoidEscape: false,
    }],
    'jsonc/space-unary-ops': getRuleConfig('@stylistic/space-unary-ops', stylisticVanillaLayoutConfig),
  },
} as const satisfies Linter.Config
