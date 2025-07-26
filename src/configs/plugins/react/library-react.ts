import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


const DISALLOW_IN_FUNC = 'disallow-in-func'
const STATIC_PUBLIC_FIELD = 'static public field'
/* eslint-disable unicorn/no-unused-properties -- Keep this enum */
const FUNCTION_TYPE = {
  ARROW: 'arrow-function',
  DECLARATION: 'function-declaration',
  EXPRESSION: 'function-expression',
}
/* eslint-enable */

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
  },

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
    'react/boolean-prop-naming': [ERROR, {
      message: `Prop name ({{ propName }}) doesn't match the rule ({{ pattern }})`,
      propTypeNames: ['bool'],
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      validateNested: false,
    }],
    // OFF as it is replaced by the @eslint-react/dom/no-missing-button-type rule
    'react/button-has-type': [OFF, {
      button: true,
      reset: true,
      submit: true,
    }],
    'react/checked-requires-onchange-or-readonly': [ERROR, {
      ignoreExclusiveCheckedAttribute: false,
      ignoreMissingProperties: false,
    }],
    'react/default-props-match-prop-types': [ERROR, {
      allowRequiredDefaults: false,
    }],
    // OFF as it is replaced by the @eslint-react/prefer-destructuring-assignment rule
    'react/destructuring-assignment': [OFF, 'always', {
      // Configured value
      destructureInSignature: 'always',
      ignoreClassFields: false,
    }],
    // OFF as it is replaced by the @eslint-react/no-missing-component-display-name rule
    'react/display-name': [OFF, {
      ignoreTranspilerName: false,
      // Configured value
      checkContextObjects: true,
    }],
    'react/forbid-component-props': [ERROR, {
      /* Default props with extended messages */
      // Configured value
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
      // Configured value
      forbid: [
        {
          propName: 'id',
          message: `Avoid using 'id's, it is a bad practice. See: https://dev.to/clairecodes/reasons-not-to-use-ids-in-css-4ni4`,
        },
      ],
    }],
    'react/forbid-elements': [ERROR, {
      forbid: [],
    }],
    'react/forbid-foreign-prop-types': [ERROR, {
      allowInPropTypes: false,
    }],
    // OFF as it is replaced by the @eslint-react/no-prop-types rule
    'react/forbid-prop-types': [OFF, {
      // Configured value
      checkChildContextTypes: true,
      // Configured value
      checkContextTypes: true,
      forbid: ['any', 'array', 'object'],
    }],
    // OFF as it is replaced by the @eslint-react/no-useless-forward-ref rule
    'react/forward-ref-uses-ref': [OFF],
    'react/function-component-definition': [ERROR, {
      // Configured value
      namedComponents: FUNCTION_TYPE.ARROW,
      // Configured value
      unnamedComponents: FUNCTION_TYPE.ARROW,
    }],
    // OFF as it is replaced by the @eslint-react/naming-convention/use-state rule
    'react/hook-use-state': [OFF, {
      allowDestructuredState: false,
    }],
    // OFF as it is replaced by the @eslint-react/dom/no-missing-iframe-sandbox rule
    'react/iframe-missing-sandbox': [OFF],
    // OFF as it is replaced by the @eslint-react/no-access-state-in-setstate rule
    'react/no-access-state-in-setstate': [OFF],
    'react/no-adjacent-inline-elements': [ERROR],
    // OFF as it is replaced by the @eslint-react/no-array-index-key rule
    'react/no-array-index-key': [OFF],
    'react/no-arrow-function-lifecycle': [ERROR],
    // OFF as it is replaced by the @eslint-react/no-children-prop rule
    'react/no-children-prop': [OFF, {
      allowFunctions: false,
    }],
    // OFF as it is replaced by the @eslint-react/dom/no-dangerously-set-innerhtml rule
    'react/no-danger': [OFF, {
      customComponentNames: [],
    }],
    // OFF as it is replaced by the @eslint-react/dom/no-dangerously-set-innerhtml-with-children rule
    'react/no-danger-with-children': [OFF],

    /**
     * OFF as it is replaced by the following rules:
     * - @eslint-react/no-component-will-mount
     * - @eslint-react/no-component-will-receive-props
     * - @eslint-react/no-component-will-update
     * - @eslint-react/no-create-ref
     * - @eslint-react/no-forward-ref
     */
    'react/no-deprecated': [OFF],
    // OFF as it is replaced by the @eslint-react/no-set-state-in-component-did-mount rule
    'react/no-did-mount-set-state': [OFF, DISALLOW_IN_FUNC],
    // OFF as it is replaced by the @eslint-react/no-set-state-in-component-did-update rule
    'react/no-did-update-set-state': [OFF, DISALLOW_IN_FUNC],
    // OFF as it is replaced by the @eslint-react/no-direct-mutation-state rule
    'react/no-direct-mutation-state': [OFF],
    // OFF as it is replaced by the @eslint-react/dom/no-find-dom-node rule
    'react/no-find-dom-node': [OFF],
    'react/no-invalid-html-attribute': [ERROR, ['rel']],
    'react/no-is-mounted': [ERROR],

    /**
     * TODO: Might be disabled to allow namespaced components.
     * Or we juste might want to keep them splitted and form the namespace in an index file.
     * In this case, we would need a way to ensure we can't import a single component outside of its namespace.
     */
    'react/no-multi-comp': [ERROR, {
      ignoreStateless: false,
    }],
    // OFF as it is replaced by the @eslint-react/dom/no-namespace rule
    'react/no-namespace': [OFF],
    // OFF as it is replaced by the @eslint-react/no-unstable-default-props rule
    'react/no-object-type-as-default-prop': [OFF],
    // OFF as it is replaced by the @eslint-react/no-redundant-should-component-update rule
    'react/no-redundant-should-component-update': [OFF],
    // OFF as it is replaced by the @eslint-react/dom/no-render-return-value rule
    'react/no-render-return-value': [OFF],
    // OFF as we use (even enforce) local component state
    'react/no-set-state': [OFF],
    // OFF as it is replaced by the @eslint-react/no-string-refs rule
    'react/no-string-refs': [OFF, {
      // Configured value
      noTemplateLiterals: true,
    }],
    'react/no-this-in-sfc': [ERROR],
    'react/no-typos': [ERROR],
    'react/no-unescaped-entities': [ERROR, {
      /* Default chars extended with alternatives */
      // Configured value
      forbid: [
        {
          alternatives: ['&gt;'],
          char: '>',
        },
        {
          alternatives: ['&quot;', '&ldquo;', '&#34;', '&rdquo;'],
          char: '"',
        },
        {
          alternatives: ['&apos;', '&lsquo;', '&#39;', '&rsquo;'],
          char: `'`,
        },
        {
          alternatives: ['&#125;'],
          char: '}',
        },
      ],
    }],
    // OFF as it is replaced by the @eslint-react/dom/no-unknown-property rule
    'react/no-unknown-property': [OFF, {
      ignore: [],
    }],

    /**
     * OFF as it is replaced by the following rules:
     * - @eslint-react/no-unsafe-component-will-mount
     * - @eslint-react/no-unsafe-component-will-receive-props
     * - @eslint-react/no-unsafe-component-will-update
     */
    'react/no-unsafe': [OFF, {
      // Configured value
      checkAliases: true,
    }],
    // OFF as it is replaced by the @eslint-react/no-nested-component-definitions rule
    'react/no-unstable-nested-components': [OFF, {
      allowAsProps: false,
      customValidators: [],
    }],
    // OFF as it is replaced by the @eslint-react/no-unused-class-component-members rule
    'react/no-unused-class-component-methods': [OFF],
    // OFF as it is replaced by the @eslint-react/no-prop-types rule
    'react/no-unused-prop-types': [OFF, {
      customValidators: [],
      ignore: [],
      skipShapeProps: true,
    }],
    // OFF as it is replaced by the @eslint-react/no-unused-state rule
    'react/no-unused-state': [OFF],
    // OFF as it is replaced by the @eslint-react/no-set-state-in-component-will-update rule
    'react/no-will-update-set-state': [OFF, DISALLOW_IN_FUNC],
    // OFF as it is replaced by the @eslint-react/no-prop-types rule
    'react/prefer-es6-class': [OFF, 'always'],
    // OFF as it is replaced by the @eslint-react/no-prop-types rule
    'react/prefer-exact-props': [OFF],
    // OFF as it is replaced by the @eslint-react/prefer-read-only-props rule
    'react/prefer-read-only-props': [OFF],
    'react/prefer-stateless-function': [ERROR, {
      ignorePureComponents: false,
    }],
    // OFF as it is replaced by the @eslint-react/no-prop-types rule
    'react/prop-types': [OFF, {
      customValidators: [],
      ignore: [],
      skipUndeclared: false,
    }],
    // OFF as we use the JSX transform from React 17
    'react/react-in-jsx-scope': [OFF],
    // OFF as it is replaced by the @eslint-react/no-prop-types rule
    'react/require-default-props': [OFF, {
      classes: 'defaultProps',
      // Configured value
      forbidDefaultForRequired: true,
      functions: 'defaultProps',
      // Deprecated
      ignoreFunctionalComponents: false,
    }],
    // OFF as it will add noise before thinking of optimizing
    'react/require-optimization': [OFF, {
      allowDecorators: [],
    }],
    'react/require-render-return': [ERROR],
    // OFF as it is replaced by the @stylistic/jsx-self-closing-comp rule
    'react/self-closing-comp': [OFF, {
      component: true,
      html: true,
    }],
    'react/sort-comp': [ERROR, {
      // Configured value
      groups: {
        'event-handlers': [
          '/^handle.+$/',
        ],
        'rendering': [
          'render',
          '/^render.+$/',
        ],
      },
      // Configured value
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
    }],
    // OFF as it is replaced by the @eslint-react/no-prop-types rule
    'react/sort-default-props': [OFF, {
      // Configured value
      ignoreCase: true,
    }],
    // OFF as it is replaced by the @eslint-react/no-prop-types rule
    'react/sort-prop-types': [OFF, {
      // Configured value
      callbacksLast: true,
      // Configured value
      ignoreCase: true,
      noSortAlphabetically: false,
      // Configured value
      requiredFirst: true,
      // Configured value
      sortShapeProp: true,
    }],
    'react/state-in-constructor': [ERROR, 'never'],
    // Might be changed
    'react/static-property-placement': [ERROR, STATIC_PUBLIC_FIELD, {
      // Configured value
      displayName: STATIC_PUBLIC_FIELD,
      // Configured value
      childContextTypes: STATIC_PUBLIC_FIELD,
      // Configured value
      contextType: STATIC_PUBLIC_FIELD,
      // Configured value
      contextTypes: STATIC_PUBLIC_FIELD,
      // Configured value
      defaultProps: STATIC_PUBLIC_FIELD,
      // Configured value
      propTypes: STATIC_PUBLIC_FIELD,
    }],
    'react/style-prop-object': [ERROR, {
      allow: [],
    }],
    // OFF as it is replaced by the @eslint-react/dom/no-void-elements-with-children rule
    'react/void-dom-elements-no-children': [OFF],
  },
} as const satisfies Linter.Config
