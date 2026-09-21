import jsoncPlugin from 'eslint-plugin-jsonc'

import { ERROR, OFF } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'
import { getRuleConfig } from '../../../utilities.ts'

import { eslintVanillaConfig } from '../eslint/vanilla.ts'


export const json5Config: FixedLinterConfig = {
  plugins: {
    jsonc: jsoncPlugin,
  },

  rules: {
    // OFF as we don't treat the JSON files the same as the rest of the codebase
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
    // OFF as JSON5 exists to carry comments
    'jsonc/no-comments': [OFF],
    'jsonc/no-escape-sequence-in-identifier': [ERROR],
    'jsonc/no-floating-decimal': [ERROR],
    // OFF as JSON5 allows them, and JavaScript only asks for their case through 'unicorn/number-literal-case'
    'jsonc/no-hexadecimal-numeric-literals': [OFF],
    // OFF as JSON5 allows it
    'jsonc/no-infinity': [OFF],
    // OFF as JSON5 allows it
    'jsonc/no-nan': [OFF],
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

    /*
     * OFF as it rejects every number JSON rejects, `Infinity`, `NaN` and hexadecimal included.
     * What stays forbidden here is forbidden by its own rule
     */
    'jsonc/valid-json-number': [OFF],
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
}
