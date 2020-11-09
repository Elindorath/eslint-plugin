'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const DISALLOW_IN_FUNC = 'disallow-in-func';
const STATIC_PUBLIC_FIELD = 'static public field';
const PARENS_NEW_LINE = 'parens-new-line';

module.exports = {
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
      flowVersion: '0.136.0',
    },
    propWrapperFunctions: [],
    linkComponents: [
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
  rules: {
    /* ----- React ----- */
    '@elindorath/react/boolean-prop-naming': [ERROR, {
      propTypeNames: ['bool'], // Default
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+', // Default
      message: `Prop name ({{ propName }}) doesn't match the rule ({{ pattern }})`, // Default
      validateNested: false, // Default
    }],
    '@elindorath/react/button-has-type': [ERROR, {
      button: true, // Default
      submit: true, // Default
      reset: true, // Default
    }],
    '@elindorath/react/default-props-match-prop-types': [ERROR, {
      allowRequiredDefaults: false, // Default
    }],
    '@elindorath/react/destructuring-assignment': [ERROR, 'always', { // Default
      ignoreClassFields: false, // Default
    }],
    '@elindorath/react/display-name': [ERROR, {
      ignoreTranspilerName: false, // Default
    }],
    '@elindorath/react/forbid-component-props': [ERROR, {
      forbid: ['className', 'style'], // Default
    }],
    '@elindorath/react/forbid-dom-props': [ERROR, {
      forbid: [], // Default
    }],
    '@elindorath/react/forbid-elements': [ERROR, {
      forbid: [], // Default
    }],
    '@elindorath/react/forbid-foreign-prop-types': [ERROR],
    '@elindorath/react/forbid-prop-types': [ERROR, {
      forbid: ['any', 'array', 'object'], // Default
      checkContextTypes: false, // Default
      checkChildContextTypes: false, // Default
    }],
    '@elindorath/react/function-component-definition': [ERROR, {
      namedComponents: 'function-declaration', // Default
      unnamedComponents: 'arrow-function',
    }],
    // Shouldn't warn much because of the rule react/destructuring-assignment
    '@elindorath/react/no-access-state-in-setstate': [ERROR],
    '@elindorath/react/no-adjacent-inline-elements': [ERROR],
    '@elindorath/react/no-array-index-key': [ERROR],
    '@elindorath/react/no-children-prop': [ERROR],
    '@elindorath/react/no-danger': [ERROR],
    '@elindorath/react/no-danger-with-children': [ERROR],
    '@elindorath/react/no-deprecated': [ERROR],
    '@elindorath/react/no-did-mount-set-state': [ERROR, DISALLOW_IN_FUNC],
    '@elindorath/react/no-did-update-set-state': [ERROR, DISALLOW_IN_FUNC],
    '@elindorath/react/no-direct-mutation-state': [ERROR],
    '@elindorath/react/no-find-dom-node': [ERROR],
    '@elindorath/react/no-is-mounted': [ERROR],
    '@elindorath/react/no-multi-comp': [ERROR, {
      ignoreStateless: false, // Default
    }],
    '@elindorath/react/no-redundant-should-component-update': [ERROR],
    '@elindorath/react/no-render-return-value': [ERROR],
    // OFF as we use local component state
    '@elindorath/react/no-set-state': [OFF],
    '@elindorath/react/no-string-refs': [ERROR, {
      noTemplateLiterals: true,
    }],
    '@elindorath/react/no-this-in-sfc': [ERROR],
    '@elindorath/react/no-typos': [ERROR],
    '@elindorath/react/no-unescaped-entities': [ERROR, {
      forbid: ['>', '"', `'`, '}'], // Default
    }],
    '@elindorath/react/no-unknown-property': [ERROR, {
      ignore: [], // Default
    }],
    '@elindorath/react/no-unsafe': [ERROR, {
      checkAliases: true,
    }],
    '@elindorath/react/no-unused-prop-types': [ERROR, {
      customValidators: [], // Default
      skipShapeProps: true, // Default
    }],
    '@elindorath/react/no-unused-state': [ERROR],
    '@elindorath/react/no-will-update-set-state': [ERROR, DISALLOW_IN_FUNC],
    '@elindorath/react/prefer-es6-class': [ERROR, 'always'],
    '@elindorath/react/prefer-read-only-props': [ERROR],
    // OFF as we use class components
    '@elindorath/react/prefer-stateless-function': [OFF, {
      ignorePureComponents: false, // Default
    }],
    '@elindorath/react/prop-types': [ERROR, {
      ignore: [], // Default
      customValidators: [], // Default
      skipUndeclared: false, // Default
    }],
    '@elindorath/react/react-in-jsx-scope': [ERROR],
    '@elindorath/react/require-default-props': [ERROR, {
      forbidDefaultForRequired: true,
      ignoreFunctionalComponents: false, // Default
    }],
    // OFF as it will add noise before thinking of optimizing
    '@elindorath/react/require-optimization': [OFF, {
      allowDecorators: [], // Default
    }],
    '@elindorath/react/require-render-return': [ERROR],
    '@elindorath/react/self-closing-comp': [ERROR, {
      component: true, // Default
      html: true, // Default
    }],
    '@elindorath/react/sort-comp': [ERROR, {
      order: [
        'type-annotations',
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        'rendering',
        'event-handlers',
        'everything-else',
      ],
      groups: {
        rendering: [
          'render',
          '/^render.+$/',
        ],
        'event-handlers': [
          '/^handle.+$/',
        ],
      },
    }],
    '@elindorath/react/sort-prop-types': [ERROR, {
      callbacksLast: true,
      ignoreCase: true,
      requiredFirst: true,
      sortShapeProp: true,
      noSortAlphabetically: true,
    }],
    '@elindorath/react/state-in-constructor': [ERROR, 'always'],
    // Might be changed
    '@elindorath/react/static-property-placement': [ERROR, STATIC_PUBLIC_FIELD, {
      childContextTypes: STATIC_PUBLIC_FIELD,
      contextTypes: STATIC_PUBLIC_FIELD,
      contextType: STATIC_PUBLIC_FIELD,
      defaultProps: STATIC_PUBLIC_FIELD,
      displayName: STATIC_PUBLIC_FIELD,
      propTypes: STATIC_PUBLIC_FIELD,
    }],
    '@elindorath/react/style-prop-object': [ERROR, {
      allow: [], // Default
    }],
    '@elindorath/react/void-dom-elements-no-children': [ERROR],

    /* ----- JSX ----- */
    '@elindorath/react/jsx-boolean-value': [ERROR, 'always'],
    '@elindorath/react/jsx-child-element-spacing': [ERROR],
    '@elindorath/react/jsx-closing-bracket-location': [ERROR, {
      nonEmpty: 'line-aligned',
      selfClosing: 'line-aligned',
    }],
    '@elindorath/react/jsx-closing-tag-location': [ERROR],
    '@elindorath/react/jsx-curly-brace-presence': [ERROR, {
      props: 'never',
      children: 'never',
    }],
    // Might be changed to `consistent` for multiline
    '@elindorath/react/jsx-curly-newline': [ERROR, {
      multiline: 'require',
      singleline: 'forbid',
    }],
    '@elindorath/react/jsx-curly-spacing': [ERROR, {
      when: 'never',
      allowMultiline: true, // Default
      attributes: { when: 'never', allowMultiline: true },
      children: { when: 'never', allowMultiline: true },
      spacing: { objectLiterals: 'never' },
    }],
    '@elindorath/react/jsx-equals-spacing': [ERROR, 'never'],
    '@elindorath/react/jsx-filename-extension': [ERROR, {
      allow: 'as-needed',
      extensions: ['.jsx'],
    }],
    '@elindorath/react/jsx-first-prop-new-line': [ERROR, 'multiline'],
    '@elindorath/react/jsx-fragments': [ERROR, 'element'],
    '@elindorath/react/jsx-handler-names': [ERROR, {
      eventHandlerPrefix: 'handle', // Default
      eventHandlerPropPrefix: 'on', // Default
      checkLocalVariables: false, // Default
      checkInlineFunction: true,
    }],
    '@elindorath/react/jsx-indent': [ERROR, 2, {
      checkAttributes: true,
      indentLogicalExpressions: true,
    }],
    '@elindorath/react/jsx-indent-props': [ERROR, 2],
    '@elindorath/react/jsx-key': [ERROR, {
      checkFragmentShorthand: true,
      // Will be released in the release following v7.21.5
      // checkKeyMustBeforeSpread: true,
    }],
    '@elindorath/react/jsx-max-depth': [ERROR, {
      max: 4,
    }],
    '@elindorath/react/jsx-max-props-per-line': [ERROR, {
      maximum: 1, // Default
      when: 'multiline',
    }],
    // OFF as we don't enforce new line between adjacent JSX elements
    '@elindorath/react/jsx-newline': [OFF],
    '@elindorath/react/jsx-no-bind': [ERROR, {
      ignoreDOMComponents: false, // Default
      ignoreRefs: false, // Default
      allowArrowFunctions: false, // Default
      allowFunctions: false, // Default
      allowBind: false, // Default
    }],
    '@elindorath/react/jsx-no-comment-textnodes': [ERROR],
    '@elindorath/react/jsx-no-duplicate-props': [ERROR, {
      ignoreCase: true,
    }],
    // TODO: Wait for the version >= 7.21.5
    // '@elindorath/react/jsx-no-constructed-context-values': [ERROR],
    '@elindorath/react/jsx-no-literals': [ERROR, {
      noStrings: true,
      allowedStrings: [], // Default
      ignoreProps: true,
      noAttributeStrings: false, // Default
    }],
    '@elindorath/react/jsx-no-script-url': [ERROR],
    '@elindorath/react/jsx-no-target-blank': [ERROR, {
      allowReferrer: false, // Default
      enforceDynamicLinks: 'always',
    }],
    '@elindorath/react/jsx-no-undef': [ERROR, {
      allowGlobals: false, // Default
    }],
    '@elindorath/react/jsx-no-useless-fragment': [ERROR],
    '@elindorath/react/jsx-one-expression-per-line': [ERROR, {
      allow: 'none', // Default
    }],
    '@elindorath/react/jsx-pascal-case': [ERROR, {
      allowAllCaps: false, // Default
      ignore: [], // Default
    }],
    '@elindorath/react/jsx-props-no-multi-spaces': [ERROR],
    // OFF as it doesn't allow HOC
    '@elindorath/react/jsx-props-no-spreading': [OFF, {
      html: 'enforce', // Default
      custom: 'enforce', // Default
      explicitSpread: 'enforce', // Default
      exceptions: [], // Default
    }],
    // OFF as it is a nightmare to maintain for little benefit
    '@elindorath/react/jsx-sort-default-props': [OFF, {
      ignoreCase: true,
    }],
    '@elindorath/react/jsx-sort-props': [ERROR, {
      callbacksLast: true,
      shorthandFirst: true,
      shorthandLast: false, // Default
      ignoreCase: true,
      noSortAlphabetically: true,
      reservedFirst: true,
    }],
    '@elindorath/react/jsx-tag-spacing': [ERROR, {
      closingSlash: 'never', // Default
      beforeSelfClosing: 'always', // Default
      afterOpening: 'never', // Default
      beforeClosing: 'never',
    }],
    '@elindorath/react/jsx-uses-react': [ERROR],
    '@elindorath/react/jsx-uses-vars': [ERROR],
    '@elindorath/react/jsx-wrap-multilines': [ERROR, {
      declaration: PARENS_NEW_LINE,
      assignment: PARENS_NEW_LINE,
      return: PARENS_NEW_LINE,
      arrow: PARENS_NEW_LINE,
      condition: PARENS_NEW_LINE,
      logical: PARENS_NEW_LINE,
      prop: 'ignore', // Default
    }],
  },
};
