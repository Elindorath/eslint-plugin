import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


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
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/button-has-type': [OFF],
    'react/checked-requires-onchange-or-readonly': [ERROR, {
      ignoreExclusiveCheckedAttribute: false,
      ignoreMissingProperties: false,
    }],
    'react/default-props-match-prop-types': [ERROR, {
      allowRequiredDefaults: false,
    }],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/destructuring-assignment': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/display-name': [OFF],
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
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/forbid-prop-types': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/forward-ref-uses-ref': [OFF],
    'react/function-component-definition': [ERROR, {
      // Configured value
      namedComponents: FUNCTION_TYPE.ARROW,
      // Configured value
      unnamedComponents: FUNCTION_TYPE.ARROW,
    }],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/hook-use-state': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/iframe-missing-sandbox': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-access-state-in-setstate': [OFF],
    'react/no-adjacent-inline-elements': [ERROR],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-array-index-key': [OFF],
    'react/no-arrow-function-lifecycle': [ERROR],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-children-prop': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-danger': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-danger-with-children': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-deprecated': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-did-mount-set-state': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-did-update-set-state': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-direct-mutation-state': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-find-dom-node': [OFF],
    'react/no-invalid-html-attribute': [ERROR, ['rel']],
    'react/no-is-mounted': [ERROR],

    /**
     * TODO: Might be disabled to allow namespaced components.
     * Or we just might want to keep them splitted and form the namespace in an index file.
     * In this case, we would need a way to ensure we can't import a single component outside of its namespace.
     */
    'react/no-multi-comp': [ERROR, {
      ignoreStateless: false,
    }],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-namespace': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-object-type-as-default-prop': [OFF],
    'react/no-redundant-should-component-update': [ERROR],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-render-return-value': [OFF],
    // OFF as we use (even enforce) local component state
    'react/no-set-state': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-string-refs': [OFF],
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
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-unknown-property': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-unsafe': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-unstable-nested-components': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent, which the upstream `disable-conflict` misses under its former name
    'react/no-unused-class-component-methods': [OFF],
    'react/no-unused-prop-types': [ERROR, {
      customValidators: [],
      ignore: [],
      skipShapeProps: true,
    }],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-unused-state': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/no-will-update-set-state': [OFF],
    'react/prefer-es6-class': [ERROR, 'always'],
    // TODO: Might not work properly with TypeScript, need testing
    'react/prefer-exact-props': [ERROR],
    'react/prefer-read-only-props': [ERROR],
    'react/prefer-stateless-function': [ERROR, {
      ignorePureComponents: false,
    }],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/prop-types': [OFF],
    // OFF as we use the JSX transform from React 17
    'react/react-in-jsx-scope': [OFF],
    'react/require-default-props': [ERROR, {
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
    'react/self-closing-comp': [ERROR, {
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
    'react/sort-default-props': [ERROR, {
      // Configured value
      ignoreCase: true,
    }],
    'react/sort-prop-types': [ERROR, {
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
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react/void-dom-elements-no-children': [OFF],
  },
} as const satisfies Linter.Config
