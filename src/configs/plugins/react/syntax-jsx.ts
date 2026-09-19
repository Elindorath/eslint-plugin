import reactPlugin from 'eslint-plugin-react'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


const INDENT_SPACE_COUNT = 2
const PARENS_NEW_LINE = 'parens-new-line'
const LINE_ALIGNED = 'line-aligned'

export const reactConfig = {
  // files: ['*.jsx', '*.tsx'],

  plugins: {
    react: reactPlugin,
  },

  /* ----- Language options ----- */
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  /* ----- Settings ----- */
  settings: {
    formComponents: [
      { name: 'Form', formAttribute: 'endpoint' },
    ],
    linkComponents: [
      { name: 'Link', linkAttribute: 'to' },
      { name: 'UniversalLink', linkAttribute: 'href' },
    ],
    propWrapperFunctions: [],
    react: {
      createClass: 'createReactClass',
      fragment: 'Fragment',
      pragma: 'React',
      version: 'detect',
    },
  },

  /* ----- Rules ----- */
  rules: {
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/jsx-boolean-value': [OFF],
    'react/jsx-child-element-spacing': [OFF],
    'react/jsx-closing-bracket-location': [OFF, {
      // Configured value
      nonEmpty: LINE_ALIGNED,
      // Configured value
      selfClosing: LINE_ALIGNED,
    }],
    'react/jsx-closing-tag-location': [OFF, LINE_ALIGNED],
    'react/jsx-curly-brace-presence': [OFF, {
      // Configured value
      children: 'always',
      // Configured value
      propElementValues: 'always',
      props: 'never',
    }],

    /**
     * Might be changed to `consistent` for multiline
     * OFF as it is a formatting rule
     */
    'react/jsx-curly-newline': [OFF, {
      // Configured value
      multiline: 'require',
      // Configured value
      singleline: 'forbid',
    }],
    'react/jsx-curly-spacing': [OFF, {
      allowMultiline: true,
      attributes: { allowMultiline: true, when: 'never' },
      // Configured value
      children: { allowMultiline: true, when: 'never' },
      spacing: { objectLiterals: 'never' },
      when: 'never',
    }],
    'react/jsx-equals-spacing': [OFF, 'never'],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/jsx-filename-extension': [OFF],
    'react/jsx-first-prop-new-line': [OFF, 'multiline'],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/jsx-fragments': [OFF],
    'react/jsx-handler-names': [OFF, {
      // Configured value
      checkInlineFunction: true,
      // Configured value
      checkLocalVariables: true,
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-indent': [OFF, INDENT_SPACE_COUNT, {
      // Configured value
      checkAttributes: true,
      // Configured value
      indentLogicalExpressions: true,
    }],
    'react/jsx-indent-props': [OFF, {
      ignoreTernaryOperator: false,
      // Configured value
      indentMode: 'first',
    }],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/jsx-key': [OFF],
    'react/jsx-max-depth': [OFF, {
      // Configured value
      max: 4,
    }],
    'react/jsx-max-props-per-line': [OFF, {
      maximum: 1,
      // Configured value
      when: 'multiline',
    }],
    // OFF as we don't enforce new line between adjacent JSX elements
    'react/jsx-newline': [OFF, {
      allowMultilines: false,
      prevent: false,
    }],
    // TODO: Tweak this to avoid over optimizations
    'react/jsx-no-bind': [ERROR, {
      allowArrowFunctions: false,
      allowBind: false,
      allowFunctions: false,
      ignoreDOMComponents: false,
      ignoreRefs: false,
    }],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/jsx-no-comment-textnodes': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/jsx-no-constructed-context-values': [OFF],
    'react/jsx-no-duplicate-props': [ERROR, {
      // Configured value
      ignoreCase: true,
    }],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/jsx-no-leaked-render': [OFF],
    'react/jsx-no-literals': [OFF, {
      allowedStrings: [],
      ignoreProps: false,
      // Configured value
      noAttributeStrings: true,
      // Configured value
      noStrings: true,
    }],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/jsx-no-script-url': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/jsx-no-target-blank': [OFF],
    'react/jsx-no-undef': [ERROR, {
      allowGlobals: false,
    }],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/jsx-no-useless-fragment': [OFF],
    'react/jsx-one-expression-per-line': [OFF, {
      allow: 'none',
    }],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/jsx-pascal-case': [OFF],
    'react/jsx-props-no-multi-spaces': [OFF],
    'react/jsx-props-no-spread-multi': [ERROR],
    // OFF as it doesn't allow HOC
    'react/jsx-props-no-spreading': [OFF, {
      custom: 'enforce',
      exceptions: [],
      explicitSpread: 'enforce',
      html: 'enforce',
    }],
    'react/jsx-sort-props': [OFF, {
      // Configured value
      callbacksLast: true,
      // Configured value
      ignoreCase: true,
      locale: 'auto',
      multiline: 'ignore',
      noSortAlphabetically: false,
      // Configured value
      reservedFirst: true,
      // Configured value
      shorthandFirst: true,
      shorthandLast: false,
    }],
    'react/jsx-tag-spacing': [OFF, {
      afterOpening: 'never',
      // Configured value
      beforeClosing: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never',
    }],
    // OFF as we use the JSX transform from React 17
    'react/jsx-uses-react': [OFF],
    'react/jsx-uses-vars': [ERROR],
    'react/jsx-wrap-multilines': [OFF, {
      // Configured value
      arrow: PARENS_NEW_LINE,
      // Configured value
      assignment: PARENS_NEW_LINE,
      // Configured value
      condition: PARENS_NEW_LINE,
      // Configured value
      declaration: PARENS_NEW_LINE,
      // Configured value
      logical: PARENS_NEW_LINE,
      prop: 'ignore',
      // Configured value
      return: PARENS_NEW_LINE,
    }],
  },
} as const satisfies Linter.Config
