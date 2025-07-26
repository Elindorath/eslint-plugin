import eslintReactPlugin from '@eslint-react/eslint-plugin'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const eslintReactConfig = {
  plugins: {
    '@eslint-react': eslintReactPlugin,
  },

  rules: {
    /* ----- X ----- */
    '@eslint-react/avoid-shorthand-boolean': [ERROR],
    '@eslint-react/avoid-shorthand-fragment': [ERROR],
    '@eslint-react/no-access-state-in-setstate': [ERROR],
    '@eslint-react/no-array-index-key': [ERROR],
    '@eslint-react/no-children-count': [ERROR],
    '@eslint-react/no-children-for-each': [ERROR],
    '@eslint-react/no-children-map': [ERROR],
    '@eslint-react/no-children-only': [ERROR],
    '@eslint-react/no-children-prop': [ERROR],
    '@eslint-react/no-children-to-array': [ERROR],
    '@eslint-react/no-class-component': [ERROR],
    '@eslint-react/no-clone-element': [ERROR],
    '@eslint-react/no-comment-textnodes': [ERROR],
    '@eslint-react/no-complex-conditional-rendering': [ERROR],
    '@eslint-react/no-component-will-mount': [ERROR],
    '@eslint-react/no-component-will-receive-props': [ERROR],
    '@eslint-react/no-component-will-update': [ERROR],
    '@eslint-react/no-context-provider': [ERROR],
    '@eslint-react/no-create-ref': [ERROR],
    '@eslint-react/no-default-props': [ERROR],
    '@eslint-react/no-direct-mutation-state': [ERROR],
    '@eslint-react/no-duplicate-key': [ERROR],
    '@eslint-react/no-forward-ref': [ERROR],
    '@eslint-react/no-implicit-key': [ERROR],
    '@eslint-react/no-leaked-conditional-rendering': [ERROR],
    '@eslint-react/no-missing-component-display-name': [ERROR],
    '@eslint-react/no-missing-context-display-name': [ERROR],
    '@eslint-react/no-missing-key': [ERROR],
    '@eslint-react/no-misused-capture-owner-stack': [ERROR],
    '@eslint-react/no-nested-component-definitions': [ERROR],
    '@eslint-react/no-nested-lazy-component-declarations': [ERROR],
    '@eslint-react/no-prop-types': [ERROR],
    '@eslint-react/no-redundant-should-component-update': [ERROR],
    '@eslint-react/no-set-state-in-component-did-mount': [ERROR],
    '@eslint-react/no-set-state-in-component-did-update': [ERROR],
    '@eslint-react/no-set-state-in-component-will-update': [ERROR],
    '@eslint-react/no-string-refs': [ERROR],
    '@eslint-react/no-unsafe-component-will-mount': [ERROR],
    '@eslint-react/no-unsafe-component-will-receive-props': [ERROR],
    '@eslint-react/no-unsafe-component-will-update': [ERROR],
    '@eslint-react/no-unstable-context-value': [ERROR],
    '@eslint-react/no-unstable-default-props': [ERROR],
    '@eslint-react/no-unused-class-component-members': [ERROR],
    '@eslint-react/no-unused-state': [ERROR],
    '@eslint-react/no-use-context': [ERROR],
    '@eslint-react/no-useless-forward-ref': [ERROR],
    '@eslint-react/no-useless-fragment': [ERROR, {
      allowExpressions: true,
    }],
    '@eslint-react/prefer-destructuring-assignment': [ERROR],
    '@eslint-react/prefer-react-namespace-import': [ERROR],
    '@eslint-react/prefer-read-only-props': [ERROR],
    '@eslint-react/prefer-shorthand-boolean': [ERROR],
    '@eslint-react/prefer-shorthand-fragment': [ERROR],

    /* ----- Hooks extra ----- */
    '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': [ERROR],
    '@eslint-react/hooks-extra/no-direct-set-state-in-use-layout-effect': [ERROR],
    '@eslint-react/hooks-extra/no-unnecessary-use-callback': [ERROR],
    '@eslint-react/hooks-extra/no-unnecessary-use-memo': [ERROR],
    '@eslint-react/hooks-extra/no-unnecessary-use-prefix': [ERROR],
    '@eslint-react/hooks-extra/prefer-use-state-lazy-initialization': [ERROR],

    /* ----- Naming conventions ----- */
    '@eslint-react/naming-convention/component-name': [ERROR, {
      allowAllCaps: false,
      excepts: [],
      rule: 'PascalCase',
    }],
    '@eslint-react/naming-convention/context-name': [ERROR],
    '@eslint-react/naming-convention/filename': [ERROR, {
      excepts: ['^index$'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      rule: 'PascalCase',
    }],
    '@eslint-react/naming-convention/filename-extension': [ERROR, {
      allow: 'as-needed',
      extensions: ['.jsx', '.tsx'],
      ignoreFilesWithoutCode: true,
    }],
    '@eslint-react/naming-convention/use-state': [ERROR],

    /* ----- Debug ----- */
    '@eslint-react/debug/class-component': [ERROR],
    '@eslint-react/debug/function-component': [ERROR],
    '@eslint-react/debug/hook': [ERROR],
    '@eslint-react/debug/is-from-react': [ERROR],
    '@eslint-react/debug/jsx': [ERROR],

    /* ----- Deprecated ----- */
    // The following rules are deprecated in favor of other rules but are not marked as such in their meta.

    /* ----- X ----- */
    '@eslint-react/ensure-forward-ref-using-ref': [OFF],
    '@eslint-react/no-complicated-conditional-rendering': [OFF],
    '@eslint-react/no-nested-components': [OFF],

    /* ----- Hooks extra ----- */
    '@eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks': [OFF],
    '@eslint-react/hooks-extra/ensure-use-callback-has-non-empty-deps': [OFF],
    '@eslint-react/hooks-extra/ensure-use-memo-has-non-empty-deps': [OFF],
    '@eslint-react/hooks-extra/no-redundant-custom-hook': [OFF],
    '@eslint-react/hooks-extra/no-useless-custom-hooks': [OFF],

    /* ----- Debug ----- */
    '@eslint-react/debug/react-hooks': [OFF],
  },
} as const satisfies Linter.Config
