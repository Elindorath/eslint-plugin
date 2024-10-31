import type { Linter } from 'eslint'
import markdownPlugin from '@eslint/markdown'

import { ERROR } from '../../../constants'

/**
 * BEWARE: We have a decision to make
 * This plugin can lint code inside code blocks OR lint the markdown itself, not both
 * @see: https://github.com/eslint/markdown/blob/main/docs/processors/markdown.md
 */
export const markdownVanillaConfig: Linter.Config = {
  plugins: {
    '@eslint/markdown': markdownPlugin,
  },

  rules: {
    '@eslint/markdown/fenced-code-language': [ERROR, {
      required: [], // default
    }],
    '@eslint/markdown/heading-increment': [ERROR],
    '@eslint/markdown/no-duplicate-headings': [ERROR],
    '@eslint/markdown/no-empty-links': [ERROR],
    '@eslint/markdown/no-html': [ERROR, {
      allowed: [], // default
    }],
    '@eslint/markdown/no-invalid-label-refs': [ERROR],
    '@eslint/markdown/no-missing-label-refs': [ERROR],
  },
}