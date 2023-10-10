'use strict';

const globals = require('globals');
const reactPlugin = require('eslint-plugin-react');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const INDENT_SPACE_COUNT = 2;
const PARENS_NEW_LINE = 'parens-new-line';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  // files: ['*.jsx', '*.tsx'],

  plugins: {
    react: reactPlugin,
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
    'react/jsx-boolean-value': [ERROR, 'never'], // default
    'react/jsx-child-element-spacing': [ERROR],
    'react/jsx-closing-bracket-location': [ERROR, {
      nonEmpty: 'line-aligned',
      selfClosing: 'line-aligned',
    }],
    'react/jsx-closing-tag-location': [ERROR],
    'react/jsx-curly-brace-presence': [ERROR, {
      props: 'never', // default
      children: 'always',
      propElementValues: 'always',
    }],
    // Might be changed to `consistent` for multiline
    'react/jsx-curly-newline': [ERROR, {
      multiline: 'require',
      singleline: 'forbid',
    }],
    'react/jsx-curly-spacing': [ERROR, {
      when: 'never', // default
      allowMultiline: true, // default
      attributes: { when: 'never', allowMultiline: true }, // default
      children: { when: 'never', allowMultiline: true },
      spacing: { objectLiterals: 'never' }, // default
    }],
    'react/jsx-equals-spacing': [ERROR, 'never'],
    'react/jsx-filename-extension': [ERROR, {
      allow: 'as-needed',
      extensions: ['.jsx', '.tsx'],
    }],
    'react/jsx-first-prop-new-line': [ERROR, 'multiline'],
    'react/jsx-fragments': [ERROR, 'syntax'], // default
    'react/jsx-handler-names': [ERROR, {
      eventHandlerPrefix: 'handle', // default
      eventHandlerPropPrefix: 'on', // default
      checkLocalVariables: true,
      checkInlineFunction: true,
    }],
    'react/jsx-indent-props': [ERROR, {
      indentMode: 'first',
      ignoreTernaryOperator: false, // default
    }],
    'react/jsx-indent': [ERROR, INDENT_SPACE_COUNT, {
      checkAttributes: true,
      indentLogicalExpressions: true,
    }],
    'react/jsx-key': [ERROR, {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
      warnOnDuplicates: true,
    }],
    'react/jsx-max-depth': [ERROR, {
      max: 4,
    }],
    'react/jsx-max-props-per-line': [ERROR, {
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
    'react/jsx-no-literals': [ERROR, {
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
    'react/jsx-one-expression-per-line': [ERROR, {
      allow: 'none', // default
    }],
    'react/jsx-pascal-case': [ERROR, {
      allowAllCaps: false, // default
      allowLeadingUnderscore: false, // default
      allowNamespace: true,
      ignore: [], // default
    }],
    'react/jsx-props-no-multi-spaces': [ERROR],
    // OFF as it doesn't allow HOC
    'react/jsx-props-no-spreading': [OFF, {
      html: 'enforce', // default
      custom: 'enforce', // default
      explicitSpread: 'enforce', // default
      exceptions: [], // default
    }],
    'react/jsx-sort-props': [ERROR, {
      callbacksLast: true,
      shorthandFirst: true,
      shorthandLast: false, // default
      multiline: 'ignore', // default
      ignoreCase: true,
      noSortAlphabetically: false, // default
      reservedFirst: true,
      locale: 'auto', // default
    }],
    'react/jsx-tag-spacing': [ERROR, {
      closingSlash: 'never', // default
      beforeSelfClosing: 'always', // default
      afterOpening: 'never', // default
      beforeClosing: 'never',
    }],
    // OFF as we use the JSX transform from React 17
    'react/jsx-uses-react': [OFF],
    'react/jsx-uses-vars': [ERROR],
    'react/jsx-wrap-multilines': [ERROR, {
      declaration: PARENS_NEW_LINE,
      assignment: PARENS_NEW_LINE,
      return: PARENS_NEW_LINE,
      arrow: PARENS_NEW_LINE,
      condition: PARENS_NEW_LINE,
      logical: PARENS_NEW_LINE,
      prop: 'ignore', // default
    }],
  },
};
