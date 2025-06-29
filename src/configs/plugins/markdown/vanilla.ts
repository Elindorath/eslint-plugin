import markdownPlugin from '@eslint/markdown'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'

/**
 * BEWARE: We have a decision to make
 * This plugin can lint code inside code blocks OR lint the markdown itself, not both
 * @see: https://github.com/eslint/markdown/blob/main/docs/processors/markdown.md
 */
export const markdownVanillaConfig = {
  plugins: {
    '@eslint/markdown': markdownPlugin,
  },

  rules: {
    '@eslint/markdown/fenced-code-language': [ERROR, {
      required: [],
    }],
    '@eslint/markdown/heading-increment': [ERROR],
    '@eslint/markdown/no-duplicate-definitions': [ERROR, {
      allowDefinitions: [],
      allowFootnoteDefinitions: [],
    }],
    '@eslint/markdown/no-duplicate-headings': [ERROR, {
      checkSiblingsOnly: false,
    }],
    '@eslint/markdown/no-empty-definitions': [ERROR],
    '@eslint/markdown/no-empty-images': [ERROR],
    '@eslint/markdown/no-empty-links': [ERROR],
    '@eslint/markdown/no-html': [ERROR, {
      allowed: [],
    }],
    '@eslint/markdown/no-invalid-label-refs': [ERROR],
    '@eslint/markdown/no-missing-atx-heading-space': [ERROR],
    '@eslint/markdown/no-missing-label-refs': [ERROR],
    // '@eslint/markdown/no-missing-link-fragments': [ERROR, {
    //   allowPattern: '',
    //   ignoreCase: false,
    // }],
    '@eslint/markdown/no-multiple-h1': [ERROR, {
      // Configured value
      frontmatterTitle: '',
    }],
    '@eslint/markdown/require-alt-text': [ERROR],
    '@eslint/markdown/table-column-count': [ERROR],
  },
} as const satisfies Linter.Config
