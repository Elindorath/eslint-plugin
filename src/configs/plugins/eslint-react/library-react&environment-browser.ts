import eslintReactPlugin from '@eslint-react/eslint-plugin'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const eslintReactBrowserConfig = {
  plugins: {
    '@eslint-react': eslintReactPlugin,
  },

  /* ----- Rules ----- */
  rules: {
    '@eslint-react/dom-no-dangerously-set-innerhtml': [ERROR],
    '@eslint-react/dom-no-dangerously-set-innerhtml-with-children': [ERROR],
    '@eslint-react/dom-no-find-dom-node': [ERROR],
    '@eslint-react/dom-no-flush-sync': [ERROR],
    '@eslint-react/dom-no-hydrate': [ERROR],
    '@eslint-react/dom-no-missing-button-type': [ERROR],
    '@eslint-react/dom-no-missing-iframe-sandbox': [ERROR],
    '@eslint-react/dom-no-render': [ERROR],
    '@eslint-react/dom-no-render-return-value': [ERROR],
    '@eslint-react/dom-no-script-url': [ERROR],
    '@eslint-react/dom-no-string-style-prop': [ERROR],
    '@eslint-react/dom-no-unknown-property': [ERROR, {
      ignore: [],
      requireDataLowercase: false,
    }],
    '@eslint-react/dom-no-unsafe-iframe-sandbox': [ERROR],
    '@eslint-react/dom-no-unsafe-target-blank': [ERROR],
    '@eslint-react/dom-no-use-form-state': [ERROR],
    '@eslint-react/dom-no-void-elements-with-children': [ERROR],
    '@eslint-react/web-api-no-leaked-event-listener': [ERROR],
    '@eslint-react/web-api-no-leaked-fetch': [ERROR],
    '@eslint-react/web-api-no-leaked-intersection-observer': [ERROR],
    '@eslint-react/web-api-no-leaked-interval': [ERROR],
    '@eslint-react/web-api-no-leaked-resize-observer': [ERROR],
    '@eslint-react/web-api-no-leaked-timeout': [ERROR],
  },
} as const satisfies Linter.Config
