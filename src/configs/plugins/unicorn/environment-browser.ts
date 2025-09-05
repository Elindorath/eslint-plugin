import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const unicornBrowserConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/no-document-cookie': [ERROR],
    'unicorn/no-invalid-remove-event-listener': [ERROR],
    'unicorn/prefer-blob-reading-methods': [ERROR],
    'unicorn/prefer-classlist-toggle': [ERROR],
    'unicorn/prefer-dom-node-append': [ERROR],
    'unicorn/prefer-dom-node-dataset': [ERROR],
    'unicorn/prefer-dom-node-remove': [ERROR],
    'unicorn/prefer-dom-node-text-content': [ERROR],
    'unicorn/prefer-keyboard-event-key': [ERROR],
    'unicorn/prefer-modern-dom-apis': [ERROR],
    'unicorn/prefer-query-selector': [ERROR],
    'unicorn/require-post-message-target-origin': [ERROR],
  },
} as const satisfies Linter.Config
