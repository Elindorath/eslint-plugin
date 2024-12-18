import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'

import { OFF, ERROR } from '../../../constants'

import type { ESLint, Linter } from 'eslint'


const INDENT_SPACE_COUNT = 2
const PARENS_NEW_LINE = 'parens-new-line'
const LINE_ALIGNED = 'line-aligned'

export const reactConfig: Linter.Config = {
  // files: ['*.jsx', '*.tsx'],

  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    react: reactPlugin as unknown as ESLint.Plugin,
  },

  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
    },
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
    },
    propWrapperFunctions: [],
    linkComponents: [
      { name: 'Link', linkAttribute: 'to' },
      { name: 'UniversalLink', linkAttribute: 'href' },
    ],
    formComponents: [
      { name: 'Form', formAttribute: 'endpoint' },
    ],
  },
  rules: {
    'react/jsx-boolean-value': [OFF, 'never'], // default
    'react/jsx-child-element-spacing': [OFF],
    'react/jsx-closing-bracket-location': [OFF, {
      nonEmpty: LINE_ALIGNED,
      selfClosing: LINE_ALIGNED,
    }],
    'react/jsx-closing-tag-location': [OFF, LINE_ALIGNED],
    'react/jsx-curly-brace-presence': [OFF, {
      props: 'never', // default
      children: 'always',
      propElementValues: 'always',
    }],
    // Might be changed to `consistent` for multiline
    // OFF as it is a formatting rule
    'react/jsx-curly-newline': [OFF, {
      multiline: 'require',
      singleline: 'forbid',
    }],
    'react/jsx-curly-spacing': [OFF, {
      when: 'never', // default
      allowMultiline: true, // default
      attributes: { when: 'never', allowMultiline: true }, // default
      children: { when: 'never', allowMultiline: true },
      spacing: { objectLiterals: 'never' }, // default
    }],
    'react/jsx-equals-spacing': [OFF, 'never'],
    'react/jsx-filename-extension': [OFF, {
      allow: 'as-needed',
      extensions: ['.jsx', '.tsx'],
    }],
    'react/jsx-first-prop-new-line': [OFF, 'multiline'],
    'react/jsx-fragments': [OFF, 'syntax'], // default
    'react/jsx-handler-names': [OFF, {
      eventHandlerPrefix: 'handle', // default
      eventHandlerPropPrefix: 'on', // default
      checkLocalVariables: true,
      checkInlineFunction: true,
    }],
    'react/jsx-indent-props': [OFF, {
      indentMode: 'first',
      ignoreTernaryOperator: false, // default
    }],
    'react/jsx-indent': [OFF, INDENT_SPACE_COUNT, {
      checkAttributes: true,
      indentLogicalExpressions: true,
    }],
    'react/jsx-key': [ERROR, {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
      warnOnDuplicates: true,
    }],
    'react/jsx-max-depth': [OFF, {
      max: 4,
    }],
    'react/jsx-max-props-per-line': [OFF, {
      maximum: 1, // default
      when: 'multiline',
    }],
    // OFF as we don't enforce new line between adjacent JSX elements
    'react/jsx-newline': [OFF, {
      prevent: false, // default
      allowMultilines: false, // default
    }],
    // TODO: Tweak this to avoid over optimizations
    'react/jsx-no-bind': [ERROR, {
      ignoreDOMComponents: false, // default
      ignoreRefs: false, // default
      allowArrowFunctions: false, // default
      allowFunctions: false, // default
      allowBind: false, // default
    }],
    'react/jsx-no-comment-textnodes': [ERROR],
    'react/jsx-no-constructed-context-values': [ERROR],
    'react/jsx-no-duplicate-props': [ERROR, {
      ignoreCase: true,
    }],
    'react/jsx-no-leaked-render': [ERROR, {
      validStrategies: ['ternary', 'coerce'], // default
    }],
    'react/jsx-no-literals': [OFF, {
      noStrings: true,
      allowedStrings: [], // default
      ignoreProps: false, // default
      noAttributeStrings: true,
    }],
    'react/jsx-no-script-url': [ERROR],
    'react/jsx-no-target-blank': [ERROR, {
      allowReferrer: false, // default
      enforceDynamicLinks: 'always', // default
      warnOnSpreadAttributes: true,
      links: true, // default
      forms: true,
    }],
    'react/jsx-no-undef': [ERROR, {
      allowGlobals: false, // default
    }],
    'react/jsx-no-useless-fragment': [ERROR, {
      allowExpressions: false, // default - TODO: might be turned to true in Typescript context
    }],
    'react/jsx-one-expression-per-line': [OFF, {
      allow: 'none', // default
    }],
    'react/jsx-pascal-case': [OFF, {
      allowAllCaps: false, // default
      allowLeadingUnderscore: false, // default
      allowNamespace: true,
      ignore: [], // default
    }],
    'react/jsx-props-no-multi-spaces': [OFF],
    'react/jsx-props-no-spread-multi': [ERROR],
    // OFF as it doesn't allow HOC
    'react/jsx-props-no-spreading': [OFF, {
      html: 'enforce', // default
      custom: 'enforce', // default
      explicitSpread: 'enforce', // default
      exceptions: [], // default
    }],
    'react/jsx-sort-props': [OFF, {
      callbacksLast: true,
      shorthandFirst: true,
      shorthandLast: false, // default
      multiline: 'ignore', // default
      ignoreCase: true,
      noSortAlphabetically: false, // default
      reservedFirst: true,
      locale: 'auto', // default
    }],
    'react/jsx-tag-spacing': [OFF, {
      closingSlash: 'never', // default
      beforeSelfClosing: 'always', // default
      afterOpening: 'never', // default
      beforeClosing: 'never',
    }],
    // OFF as we use the JSX transform from React 17
    'react/jsx-uses-react': [OFF],
    'react/jsx-uses-vars': [ERROR],
    'react/jsx-wrap-multilines': [OFF, {
      declaration: PARENS_NEW_LINE,
      assignment: PARENS_NEW_LINE,
      return: PARENS_NEW_LINE,
      arrow: PARENS_NEW_LINE,
      condition: PARENS_NEW_LINE,
      logical: PARENS_NEW_LINE,
      prop: 'ignore', // default
    }],
  },
}
