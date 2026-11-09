import unicornPlugin from 'eslint-plugin-unicorn'

import { OFF } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


/**
 * These rules declare the `markdown/*` languages, which ESLint only matches against the key the
 * Markdown plugin is registered under (`@eslint/markdown`) or its `meta.namespace`, which it lacks
 */
export const unicornMarkdownConfig: FixedLinterConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    // OFF as ESLint rejects it under the `@eslint/markdown/gfm` language
    'unicorn/no-empty-link-text': [OFF],
    // OFF as ESLint rejects it under the `@eslint/markdown/gfm` language
    'unicorn/no-javascript-url': [OFF],
    // OFF as ESLint rejects it under the `@eslint/markdown/gfm` language
    'unicorn/require-frontmatter-fields': [OFF],
  },
}
