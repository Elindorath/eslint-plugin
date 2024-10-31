import type { Linter } from 'eslint'
import jsoncPlugin from 'eslint-plugin-jsonc'
import jsonParser from 'jsonc-eslint-parser'

import { getRuleConfig } from '../../../utils'
import { stylisticVanillaLayoutConfig } from '../stylistic/vanilla-layout'


export const json5LayoutConfig: Linter.Config = {
  languageOptions: {
    parser: jsonParser,
  },

  plugins: {
    jsonc: jsoncPlugin,
  },

  rules: {
    /* ----- Extended rules ----- */
    'jsonc/array-bracket-newline': getRuleConfig('@stylistic/array-bracket-newline', stylisticVanillaLayoutConfig),
    'jsonc/array-bracket-spacing': getRuleConfig('@stylistic/array-bracket-spacing', stylisticVanillaLayoutConfig),
    'jsonc/array-element-newline': getRuleConfig('@stylistic/array-element-newline', stylisticVanillaLayoutConfig),
    'jsonc/comma-dangle': getRuleConfig('@stylistic/comma-dangle', stylisticVanillaLayoutConfig),
    'jsonc/comma-style': getRuleConfig('@stylistic/comma-style', stylisticVanillaLayoutConfig),
    'jsonc/indent': getRuleConfig('@stylistic/indent', stylisticVanillaLayoutConfig),
    'jsonc/key-spacing': getRuleConfig('@stylistic/key-spacing', stylisticVanillaLayoutConfig),
    'jsonc/object-curly-newline': getRuleConfig('@stylistic/object-curly-newline', stylisticVanillaLayoutConfig),
    'jsonc/object-curly-spacing': getRuleConfig('@stylistic/object-curly-spacing', stylisticVanillaLayoutConfig),
    'jsonc/object-property-newline': getRuleConfig('@stylistic/object-property-newline', stylisticVanillaLayoutConfig),
    'jsonc/quote-props': getRuleConfig('@stylistic/quote-props', stylisticVanillaLayoutConfig),
    'jsonc/quotes': getRuleConfig('@stylistic/quotes', stylisticVanillaLayoutConfig),
    'jsonc/space-unary-ops': getRuleConfig('@stylistic/space-unary-ops', stylisticVanillaLayoutConfig),
  },
}
