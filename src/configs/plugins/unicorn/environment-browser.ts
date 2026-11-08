import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const unicornBrowserConfig: FixedLinterConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/dom-node-dataset': [ERROR, {
      preferAttributes: false,
    }],
    'unicorn/no-conflicting-constraints': [ERROR],
    'unicorn/no-document-cookie': [ERROR],
    'unicorn/no-ineffective-csp-directives': [ERROR],
    'unicorn/no-invalid-boolean-attribute-value': [ERROR],
    'unicorn/no-invalid-dom-token': [ERROR],
    'unicorn/no-invalid-integrity': [ERROR],
    'unicorn/no-invalid-remove-event-listener': [ERROR],
    'unicorn/no-invalid-style-set-property': [ERROR],
    'unicorn/no-prevent-default-in-passive-listener': [ERROR],
    'unicorn/prefer-blob-reading-methods': [ERROR],
    'unicorn/prefer-classlist-toggle': [ERROR],
    'unicorn/prefer-dom-node-append': [ERROR],
    'unicorn/prefer-dom-node-remove': [ERROR],
    'unicorn/prefer-dom-node-text-content': [ERROR],
    'unicorn/prefer-keyboard-event-key': [ERROR],
    'unicorn/prefer-modern-dom-apis': [ERROR],
    'unicorn/prefer-query-selector': [ERROR],
    'unicorn/require-post-message-target-origin': [ERROR],
  },
}
