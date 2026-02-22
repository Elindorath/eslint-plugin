import jsoncPlugin from 'eslint-plugin-jsonc'
import * as jsoncParser from 'jsonc-eslint-parser'

import { ERROR, OFF } from '../../../constants.ts'
import { getRuleConfig } from '../../../utilities.ts'

import { eslintVanillaConfig } from '../eslint/vanilla.ts'

import type { ESLint, Linter } from 'eslint'


export const json5Config = {
  languageOptions: {
    parser: jsoncParser,
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
    // OFF as we don't treat the json files the same as the rest of the codebase
    'jsonc/auto': [OFF],

    'jsonc/key-name-casing': [ERROR, {
      // Configured value
      'camelCase': true,
      // Configured value
      'ignores': [],
      // Configured value
      'kebab-case': false,
      // Configured value
      // eslint-disable-next-line @typescript-eslint/naming-convention -- Required by the rule
      'PascalCase': false,
      // Configured value
      'SCREAMING_SNAKE_CASE': false,
      // Configured value
      // eslint-disable-next-line @typescript-eslint/naming-convention -- Required by the rule
      'snake_case': false,
    }],
    'jsonc/no-bigint-literals': [ERROR],
    'jsonc/no-binary-expression': [ERROR],
    'jsonc/no-binary-numeric-literals': [ERROR],
    'jsonc/no-comments': [ERROR],
    'jsonc/no-escape-sequence-in-identifier': [ERROR],
    'jsonc/no-floating-decimal': [ERROR],
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
      // Configured value
      order: {
        type: 'asc',
      },
      // Configured value
      pathPattern: '.*',
    }],
    'jsonc/sort-keys': [ERROR, {
      // Configured value
      order: {
        type: 'asc',
      },
      // Configured value
      pathPattern: '.*',
      // hasProperties: [''],
    }],
    'jsonc/valid-json-number': [ERROR],
    'jsonc/vue-custom-block/no-parsing-error': [ERROR],

    /* ----- Extended rules ----- */
    'jsonc/no-dupe-keys': getRuleConfig('no-dupe-keys', eslintVanillaConfig),
    'jsonc/no-irregular-whitespace': getRuleConfig('no-irregular-whitespace', eslintVanillaConfig),
    'jsonc/no-multi-str': getRuleConfig('no-multi-str', eslintVanillaConfig),
    'jsonc/no-octal': getRuleConfig('no-octal', eslintVanillaConfig),
    'jsonc/no-octal-escape': getRuleConfig('no-octal-escape', eslintVanillaConfig),
    'jsonc/no-sparse-arrays': getRuleConfig('no-sparse-arrays', eslintVanillaConfig),
    'jsonc/no-useless-escape': getRuleConfig('no-useless-escape', eslintVanillaConfig),
  },
} as const satisfies Linter.Config
