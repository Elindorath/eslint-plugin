import type { ESLint, Linter } from 'eslint'
import jsoncPlugin from 'eslint-plugin-jsonc'
import jsonParser from 'jsonc-eslint-parser'

import { getRuleConfig } from '../../../utils.js'
import { eslintVanillaConfig } from '../eslint/vanilla.js'

import { OFF, ERROR } from '../../../constants'


export const json5Config: Linter.Config = {
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
    // OFF as we don't treat the json files the same as the rest of the codebase
    'jsonc/auto': [OFF],

    'jsonc/key-name-casing': [ERROR, {
      'camelCase': true,
      'PascalCase': false,
      'SCREAMING_SNAKE_CASE': false,
      'kebab-case': false,
      'snake_case': false,
      'ignores': [],
    }],
    'jsonc/no-bigint-literals': [ERROR],
    'jsonc/no-binary-expression': [ERROR],
    'jsonc/no-binary-numeric-literals': [ERROR],
    'jsonc/no-comments': [ERROR],
    'jsonc/no-escape-sequence-in-identifier': [ERROR],
    'jsonc/no-hexadecimal-numeric-literals': [ERROR],
    'jsonc/no-infinity': [ERROR],
    'jsonc/no-nan': [ERROR],
    'jsonc/no-number-props': [ERROR],
    'jsonc/no-numeric-separators': [ERROR],
    'jsonc/no-octal-numeric-literals': [ERROR],
    'jsonc/no-parenthesized': [ERROR],
    'jsonc/no-plus-sign': [ERROR],
    'jsonc/no-regexp-literals': [ERROR],
    'jsonc/no-template-literals': [ERROR],
    'jsonc/no-undefined-value': [ERROR],
    'jsonc/no-unicode-codepoint-escapes': [ERROR],
    'jsonc/sort-array-values': [ERROR, {
      pathPattern: '.*',
      order: {
        type: 'asc',
      },
    }],
    'jsonc/sort-keys': [ERROR, {
      // hasProperties: [''],
      pathPattern: '.*',
      order: {
        type: 'asc',
      },
    }],
    'jsonc/valid-json-number': [ERROR],
    'jsonc/vue-custom-block/no-parsing-error': [ERROR],

    /* ----- Extended rules ----- */
    'jsonc/no-dupe-keys': getRuleConfig('no-dupe-keys', eslintVanillaConfig),
    'jsonc/no-floating-decimal': getRuleConfig('no-floating-decimal', eslintVanillaConfig),
    'jsonc/no-irregular-whitespace': getRuleConfig('no-irregular-whitespace', eslintVanillaConfig),
    'jsonc/no-multi-str': getRuleConfig('no-multi-str', eslintVanillaConfig),
    'jsonc/no-octal-escape': getRuleConfig('no-octal-escape', eslintVanillaConfig),
    'jsonc/no-octal': getRuleConfig('no-octal', eslintVanillaConfig),
    'jsonc/no-sparse-arrays': getRuleConfig('no-sparse-arrays', eslintVanillaConfig),
    'jsonc/no-useless-escape': getRuleConfig('no-useless-escape', eslintVanillaConfig),
  },
}
