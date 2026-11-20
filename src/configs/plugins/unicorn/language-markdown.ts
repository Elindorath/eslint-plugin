import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const unicornMarkdownConfig: FixedLinterConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/no-empty-link-text': [ERROR],
    'unicorn/no-javascript-url': [ERROR],
    'unicorn/require-frontmatter-fields': [ERROR, {
      fields: [],
    }],
  },
}
