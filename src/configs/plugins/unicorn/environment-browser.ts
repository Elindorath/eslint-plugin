import unicornPlugin from 'eslint-plugin-unicorn'

import { ERROR } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const unicornBrowserConfig: FixedLinterConfig = {
  plugins: {
    unicorn: unicornPlugin,
  },

  rules: {
    'unicorn/better-dom-traversing': [ERROR],
    'unicorn/dom-node-dataset': [ERROR, {
      preferAttributes: false,
    }],
    'unicorn/no-canvas-to-image': [ERROR],
    'unicorn/no-conflicting-constraints': [ERROR],
    'unicorn/no-document-cookie': [ERROR],
    'unicorn/no-incorrect-query-selector': [ERROR],
    'unicorn/no-ineffective-csp-directives': [ERROR],
    'unicorn/no-invalid-boolean-attribute-value': [ERROR],
    'unicorn/no-invalid-dom-token': [ERROR],
    'unicorn/no-invalid-file-input-accept': [ERROR],
    'unicorn/no-invalid-integrity': [ERROR],
    'unicorn/no-invalid-remove-event-listener': [ERROR],
    'unicorn/no-invalid-style-set-property': [ERROR],
    'unicorn/no-late-current-target-access': [ERROR],
    'unicorn/no-late-event-control': [ERROR],
    'unicorn/no-prevent-default-in-passive-listener': [ERROR],
    'unicorn/no-selector-as-dom-name': [ERROR],
    'unicorn/no-unsafe-dom-html': [ERROR],
    'unicorn/prefer-add-event-listener': [ERROR, {
      excludedPackages: ['koa', 'sax'],
    }],
    'unicorn/prefer-add-event-listener-options': [ERROR],
    'unicorn/prefer-blob-reading-methods': [ERROR],
    'unicorn/prefer-classlist-toggle': [ERROR],
    'unicorn/prefer-dom-node-append': [ERROR],
    'unicorn/prefer-dom-node-html-methods': [ERROR, {
      checkGetHTML: true,
      checkSetHTML: false,
    }],
    'unicorn/prefer-dom-node-remove': [ERROR],
    'unicorn/prefer-dom-node-replace-children': [ERROR],
    'unicorn/prefer-dom-node-text-content': [ERROR],
    'unicorn/prefer-keyboard-event-key': [ERROR],
    'unicorn/prefer-location-assign': [ERROR],
    'unicorn/prefer-modern-dom-apis': [ERROR],
    'unicorn/prefer-observer-apis': [ERROR],
    'unicorn/prefer-path2d': [ERROR],
    'unicorn/prefer-query-selector': [ERROR],
    'unicorn/prefer-scoped-selector': [ERROR],
    'unicorn/prefer-toggle-attribute': [ERROR],
    'unicorn/require-css-escape': [ERROR, {
      checkAllSelectors: false,
    }],
    'unicorn/require-passive-events': [ERROR],
    'unicorn/require-post-message-target-origin': [ERROR],
  },
}
