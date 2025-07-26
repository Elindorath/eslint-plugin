import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'

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
    globals: {
      ...globals.browser,
    },
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
    // OFF as it is replaced by the @eslint-react/jsx-shorthand-boolean and @eslint-react/avoid-shorthand-boolean rules
    'react/jsx-boolean-value': [OFF, 'never'],
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
    // OFF as it is replaced by the @eslint-react/naming-convention/filename-extension rule
    'react/jsx-filename-extension': [OFF, {
      // Configured value
      allow: 'as-needed',
      // Configured value
      extensions: ['.jsx', '.tsx'],
    }],
    'react/jsx-first-prop-new-line': [OFF, 'multiline'],
    // OFF as it is replaced by the @eslint-react/jsx-shorthand-fragment and @eslint-react/avoid-shorthand-fragment rules
    'react/jsx-fragments': [OFF, 'syntax'],
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
    // OFF as it is replaced by the @eslint-react/no-missing-key rule
    'react/jsx-key': [OFF, {
      // Configured value
      checkFragmentShorthand: true,
      // Configured value
      checkKeyMustBeforeSpread: true,
      // Configured value
      warnOnDuplicates: true,
    }],
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
    // OFF as it is replaced by the @eslint-react/jsx-no-comment-textnodes and @eslint-react/no-comment-textnodes rules
    'react/jsx-no-comment-textnodes': [OFF],
    // OFF as it is replaced by the @eslint-react/no-unstable-context-value rule
    'react/jsx-no-constructed-context-values': [OFF],
    // OFF as it is replaced by the @eslint-react/no-duplicate-jsx-props rule
    'react/jsx-no-duplicate-props': [OFF, {
      // Configured value
      ignoreCase: true,
    }],
    // OFF as it is replaced by the @eslint-react/no-leaked-conditional-rendering rule
    'react/jsx-no-leaked-render': [OFF, {
      validStrategies: ['ternary', 'coerce'],
    }],
    'react/jsx-no-literals': [OFF, {
      allowedStrings: [],
      ignoreProps: false,
      // Configured value
      noAttributeStrings: true,
      // Configured value
      noStrings: true,
    }],
    // OFF as it is replaced by the @eslint-react/dom/no-script-url rule
    'react/jsx-no-script-url': [OFF],
    // OFF as it is replaced by the @eslint-react/dom/no-unsafe-target-blank rule
    'react/jsx-no-target-blank': [OFF, {
      allowReferrer: false,
      enforceDynamicLinks: 'always',
      // Configured value
      forms: true,
      links: true,
      // Configured value
      warnOnSpreadAttributes: true,
    }],
    // OFF as it is replaced by the @eslint-react/jsx-no-undef rule
    'react/jsx-no-undef': [OFF, {
      allowGlobals: false,
    }],
    // OFF as it is replaced by the @eslint-react/no-useless-fragment rule
    'react/jsx-no-useless-fragment': [OFF, {
      // TODO: might be turned to true in Typescript context
      allowExpressions: false,
    }],
    // OFF as it is replaced by the @stylistic/jsx-one-expression-per-line rule
    'react/jsx-one-expression-per-line': [OFF, {
      allow: 'none',
    }],
    // OFF as it is replaced by the @eslint-react/naming-convention/component-name rule
    'react/jsx-pascal-case': [OFF, {
      allowAllCaps: false,
      allowLeadingUnderscore: false,
      // Configured value
      allowNamespace: true,
      ignore: [],
    }],
    // OFF as it is replaced by the @stylistic/jsx-props-no-multi-spaces rule
    'react/jsx-props-no-multi-spaces': [OFF],
    'react/jsx-props-no-spread-multi': [ERROR],
    // OFF as it doesn't allow HOC
    'react/jsx-props-no-spreading': [OFF, {
      custom: 'enforce',
      exceptions: [],
      explicitSpread: 'enforce',
      html: 'enforce',
    }],
    // OFF as it is replaced by the @stylistic/jsx-sort-props rule
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
    // OFF as it is replaced by the @stylistic/jsx-tag-spacing rule
    'react/jsx-tag-spacing': [OFF, {
      afterOpening: 'never',
      // Configured value
      beforeClosing: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never',
    }],
    // OFF as it is replaced by the @eslint-react/jsx-uses-react rule
    'react/jsx-uses-react': [OFF],
    // OFF as it is replaced by the @eslint-react/jsx-uses-vars rule
    'react/jsx-uses-vars': [OFF],
    // OFF as it is replaced by the @stylistic/jsx-wrap-multilines rule
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
