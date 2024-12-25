import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'

import { ERROR, OFF } from '../../../constants.ts'

import type { ESLint, Linter } from 'eslint'


const INDENT_SPACE_COUNT = 2
const PARENS_NEW_LINE = 'parens-new-line'
const LINE_ALIGNED = 'line-aligned'

export const reactConfig = {
  // files: ['*.jsx', '*.tsx'],

  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- See comment above
    react: reactPlugin as unknown as ESLint.Plugin,
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
    'react/jsx-filename-extension': [OFF, {
      // Configured value
      allow: 'as-needed',
      // Configured value
      extensions: ['.jsx', '.tsx'],
    }],
    'react/jsx-first-prop-new-line': [OFF, 'multiline'],
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
    'react/jsx-key': [ERROR, {
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
    'react/jsx-no-comment-textnodes': [ERROR],
    'react/jsx-no-constructed-context-values': [ERROR],
    'react/jsx-no-duplicate-props': [ERROR, {
      // Configured value
      ignoreCase: true,
    }],
    'react/jsx-no-leaked-render': [ERROR, {
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
    'react/jsx-no-script-url': [ERROR],
    'react/jsx-no-target-blank': [ERROR, {
      allowReferrer: false,
      enforceDynamicLinks: 'always',
      // Configured value
      forms: true,
      links: true,
      // Configured value
      warnOnSpreadAttributes: true,
    }],
    'react/jsx-no-undef': [ERROR, {
      allowGlobals: false,
    }],
    'react/jsx-no-useless-fragment': [ERROR, {
      // TODO: might be turned to true in Typescript context
      allowExpressions: false,
    }],
    'react/jsx-one-expression-per-line': [OFF, {
      allow: 'none',
    }],
    'react/jsx-pascal-case': [OFF, {
      allowAllCaps: false,
      allowLeadingUnderscore: false,
      // Configured value
      allowNamespace: true,
      ignore: [],
    }],
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
