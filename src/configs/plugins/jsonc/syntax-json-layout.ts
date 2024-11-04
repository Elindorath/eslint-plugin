import type { ESLint, Linter } from 'eslint'
import jsoncPlugin from 'eslint-plugin-jsonc'
import jsonParser from 'jsonc-eslint-parser'

import { getRuleConfig } from '../../../utils'
import { stylisticVanillaLayoutConfig } from '../stylistic/vanilla-layout'

import { ERROR } from '../../../constants'


export const jsonLayoutConfig: Linter.Config = {
  languageOptions: {
    parser: jsonParser,
  },

  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    jsonc: jsoncPlugin as unknown as ESLint.Plugin,
  },

  rules: {
    /* ----- Extended rules ----- */
    'jsonc/array-bracket-newline': getRuleConfig('@stylistic/array-bracket-newline', stylisticVanillaLayoutConfig),
    'jsonc/array-bracket-spacing': getRuleConfig('@stylistic/array-bracket-spacing', stylisticVanillaLayoutConfig),
    'jsonc/array-element-newline': getRuleConfig('@stylistic/array-element-newline', stylisticVanillaLayoutConfig),
    'jsonc/comma-dangle': [ERROR, {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
    'jsonc/comma-style': getRuleConfig('@stylistic/comma-style', stylisticVanillaLayoutConfig),
    'jsonc/indent': getRuleConfig('@stylistic/indent', stylisticVanillaLayoutConfig),
    'jsonc/key-spacing': getRuleConfig('@stylistic/key-spacing', stylisticVanillaLayoutConfig),
    'jsonc/object-curly-newline': getRuleConfig('@stylistic/object-curly-newline', stylisticVanillaLayoutConfig),
    'jsonc/object-curly-spacing': getRuleConfig('@stylistic/object-curly-spacing', stylisticVanillaLayoutConfig),
    'jsonc/object-property-newline': getRuleConfig('@stylistic/object-property-newline', stylisticVanillaLayoutConfig),
    'jsonc/quote-props': [ERROR, 'always'],
    'jsonc/quotes': [ERROR, 'double', {
      avoidEscape: false,
      allowTemplateLiterals: false,
    }],
    'jsonc/space-unary-ops': getRuleConfig('@stylistic/space-unary-ops', stylisticVanillaLayoutConfig),
  },
}
