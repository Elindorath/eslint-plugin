'use strict';

const reactPlugin = require('eslint-plugin-react');
const globals = require('globals');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const DISALLOW_IN_FUNC = 'disallow-in-func';
const STATIC_PUBLIC_FIELD = 'static public field';
/* eslint-disable unicorn/no-unused-properties -- Keep this enum */
const FUNCTION_TYPE = {
  DECLARATION: 'function-declaration',
  ARROW: 'arrow-function',
  EXPRESSION: 'function-expression',
}
/* eslint-enable */

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  // files: ['*.jsx', '*.tsx'],

  plugins: {
    react: reactPlugin,
  },

  languageOptions: {
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
    'react/boolean-prop-naming': [ERROR, {
      propTypeNames: ['bool'], // default
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+', // default
      message: `Prop name ({{ propName }}) doesn't match the rule ({{ pattern }})`, // default
      validateNested: false, // default
    }],
    'react/button-has-type': [ERROR, {
      button: true, // default
      submit: true, // default
      reset: true, // default
    }],
    'react/default-props-match-prop-types': [ERROR, {
      allowRequiredDefaults: false, // default
    }],
    'react/destructuring-assignment': [ERROR, 'always', { // default
      ignoreClassFields: false, // default
      destructureInSignature: 'always',
    }],
    'react/display-name': [ERROR, {
      ignoreTranspilerName: false, // default
      checkContextObjects: true,
    }],
    'react/forbid-component-props': [ERROR, {
      // default props with extended messages
      forbid: [
        {
          propName: 'className',
          message: `Avoid using 'className' as it add a lots of complexity. See: https://medium.com/@JanPaul123/don-t-pass-css-classes-between-components-e9f7ab192785`,
        },
        {
          propName: 'style',
          message: `Avoid using 'style' as it add a lots of complexity. See: https://medium.com/@JanPaul123/don-t-pass-css-classes-between-components-e9f7ab192785`,
        },
      ],
    }],
    'react/forbid-dom-props': [ERROR, {
      forbid: [
        {
          propName: 'id',
          message: `Avoid using 'id's, it is a bad practice. See: https://dev.to/clairecodes/reasons-not-to-use-ids-in-css-4ni4`,
        }
      ],
    }],
    'react/forbid-elements': [ERROR, {
      forbid: [], // default
    }],
    'react/forbid-foreign-prop-types': [ERROR, {
      allowInPropTypes: false, // default
    }],
    'react/forbid-prop-types': [ERROR, {
      forbid: ['any', 'array', 'object'], // default
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],
    'react/function-component-definition': [ERROR, {
      namedComponents: FUNCTION_TYPE.ARROW,
      unnamedComponents: FUNCTION_TYPE.ARROW,
    }],
    'react/hook-use-state': [ERROR, {
      allowDestructuredState: false, // default
    }],
    'react/iframe-missing-sandbox': [ERROR],
    'react/no-access-state-in-setstate': [ERROR],
    'react/no-adjacent-inline-elements': [ERROR],
    'react/no-array-index-key': [ERROR],
    'react/no-arrow-function-lifecycle': [ERROR],
    'react/no-children-prop': [ERROR, {
      allowFunctions: false, // default
    }],
    'react/no-danger-with-children': [ERROR],
    'react/no-danger': [ERROR],
    'react/no-deprecated': [ERROR],
    'react/no-did-mount-set-state': [ERROR, DISALLOW_IN_FUNC],
    'react/no-did-update-set-state': [ERROR, DISALLOW_IN_FUNC],
    'react/no-direct-mutation-state': [ERROR],
    'react/no-find-dom-node': [ERROR],
    'react/no-invalid-html-attribute': [ERROR],
    'react/no-is-mounted': [ERROR],
    // TODO: Might be disabled to allow namespaced components.
    // Or we juste might want to keep them splitted and form the namespace in an index file.
    // In this case, we would need a way to ensure we can't import a single component outside of its namespace.
    'react/no-multi-comp': [ERROR, {
      ignoreStateless: false, // default
    }],
    'react/no-namespace': [ERROR],
    'react/no-object-type-as-default-prop': [ERROR],
    'react/no-redundant-should-component-update': [ERROR],
    'react/no-render-return-value': [ERROR],
    // OFF as we use (even enforce) local component state
    'react/no-set-state': [OFF],
    'react/no-string-refs': [ERROR, {
      noTemplateLiterals: true,
    }],
    'react/no-this-in-sfc': [ERROR],
    'react/no-typos': [ERROR],
    'react/no-unescaped-entities': [ERROR, {
      // default chars extended with alternatives
      forbid: [
        {
          char: '>',
          alternatives: ['&gt;'],
        },
        {
          char: '"',
          alternatives: ['&quot;', '&ldquo;', '&#34;', '&rdquo;'],
        },
        {
          char: `'`,
          alternatives: ['&apos;', '&lsquo;', '&#39;', '&rsquo;'],
        },
        {
          char: '}',
          alternatives: ['&#125;'],
        },
      ],
    }],
    'react/no-unknown-property': [ERROR, {
      ignore: [], // default
    }],
    'react/no-unsafe': [ERROR, {
      checkAliases: true,
    }],
    'react/no-unstable-nested-components': [ERROR, {
      allowAsProps: false, // default
      customValidators: [], // default
    }],
    'react/no-unused-class-component-methods': [ERROR],
    'react/no-unused-prop-types': [ERROR, {
      ignore: [],
      customValidators: [], // default
      skipShapeProps: true, // default
    }],
    'react/no-unused-state': [ERROR],
    'react/no-will-update-set-state': [ERROR, DISALLOW_IN_FUNC],
    'react/prefer-es6-class': [ERROR, 'always'],
    // TODO: Might not work properly with Typescript, need testing
    'react/prefer-exact-props': [ERROR],
    'react/prefer-read-only-props': [ERROR],
    'react/prefer-stateless-function': [ERROR, {
      ignorePureComponents: false, // default
    }],
    'react/prop-types': [ERROR, {
      ignore: [], // default
      customValidators: [], // default
      skipUndeclared: false, // default
    }],
    // OFF as we use the JSX transform from React 17
    'react/react-in-jsx-scope': [OFF],
    'react/require-default-props': [ERROR, {
      forbidDefaultForRequired: true,
      classes: 'defaultProps', // default
      functions: 'defaultProps', // default
      ignoreFunctionalComponents: false, // default and deprecated anyway
    }],
    // OFF as it will add noise before thinking of optimizing
    'react/require-optimization': [OFF, {
      allowDecorators: [], // default
    }],
    'react/require-render-return': [ERROR],
    'react/self-closing-comp': [ERROR, {
      component: true, // default
      html: true, // default
    }],
    'react/sort-comp': [ERROR, {
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
    'react/sort-default-props': [ERROR, {
      ignoreCase: true,
    }],
    'react/sort-prop-types': [ERROR, {
      callbacksLast: true,
      ignoreCase: true,
      requiredFirst: true,
      sortShapeProp: true,
      noSortAlphabetically: false, // default
    }],
    'react/state-in-constructor': [ERROR, 'never'],
    // Might be changed
    'react/static-property-placement': [ERROR, STATIC_PUBLIC_FIELD, {
      childContextTypes: STATIC_PUBLIC_FIELD,
      contextTypes: STATIC_PUBLIC_FIELD,
      contextType: STATIC_PUBLIC_FIELD,
      defaultProps: STATIC_PUBLIC_FIELD,
      displayName: STATIC_PUBLIC_FIELD,
      propTypes: STATIC_PUBLIC_FIELD,
    }],
    'react/style-prop-object': [ERROR, {
      allow: [], // default
    }],
    'react/void-dom-elements-no-children': [ERROR],
  },
};
