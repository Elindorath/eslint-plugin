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

  /* ----- Language ----- */
  language: '@eslint/markdown/gfm',

  processor: '@eslint/markdown/markdown',

  rules: {
    '@eslint/markdown/fenced-code-language': [ERROR, {
      required: [],
    }],
    '@eslint/markdown/heading-increment': [ERROR, {
      // Configured value
      frontmatterTitle: '',
    }],

    /**
     * This rule requires language: "markdown/gfm"
     * TODO: Might be moved to a gfm specific config
     */
    '@eslint/markdown/no-bare-urls': [ERROR],
    '@eslint/markdown/no-duplicate-definitions': [ERROR, {
      allowDefinitions: [],
      allowFootnoteDefinitions: [],
    }],
    '@eslint/markdown/no-duplicate-headings': [ERROR, {
      checkSiblingsOnly: false,
    }],
    '@eslint/markdown/no-empty-definitions': [ERROR, {
      allowDefinitions: ['//'],
      allowFootnoteDefinitions: [],
      checkFootnoteDefinitions: true,
    }],
    '@eslint/markdown/no-empty-images': [ERROR],
    '@eslint/markdown/no-empty-links': [ERROR],
    '@eslint/markdown/no-html': [ERROR, {
      allowed: [],
      allowedIgnoreCase: false,
    }],
    '@eslint/markdown/no-invalid-label-refs': [ERROR],
    '@eslint/markdown/no-missing-atx-heading-space': [ERROR, {
      // Configured value
      checkClosedHeadings: true,
    }],
    '@eslint/markdown/no-missing-label-refs': [ERROR],
    '@eslint/markdown/no-missing-link-fragments': [ERROR, {
      allowPattern: '',
      // Configured value
      ignoreCase: false,
    }],
    '@eslint/markdown/no-multiple-h1': [ERROR, {
      // Configured value
      frontmatterTitle: '',
    }],
    '@eslint/markdown/no-reversed-media-syntax': [ERROR],
    '@eslint/markdown/no-space-in-emphasis': [ERROR, {
      checkStrikethrough: true,
    }],
    '@eslint/markdown/no-unused-definitions': [ERROR, {
      allowDefinitions: ['//'],
      allowFootnoteDefinitions: [],
    }],
    '@eslint/markdown/require-alt-text': [ERROR],
    '@eslint/markdown/table-column-count': [ERROR, {
      checkMissingCells: true,
    }],
  },
} as const satisfies Linter.Config
