import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'

import { ERROR, OFF } from '../../../constants.ts'

import type { ESLint, Linter } from 'eslint'


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
    'react/button-has-type': [ERROR, {
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
    'react/destructuring-assignment': [ERROR, 'always', {
      // Configured value
      destructureInSignature: 'always',
      ignoreClassFields: false,
    }],
    'react/display-name': [ERROR, {
      // Configured value
      checkContextObjects: true,
      ignoreTranspilerName: false,
    }],
    'react/forbid-component-props': [ERROR, {
      /* Default props with extended messages */
      // Configured value
      forbid: [
        {
          message: `Avoid using 'className' as it add a lots of complexity. See: https://medium.com/@JanPaul123/don-t-pass-css-classes-between-components-e9f7ab192785`,
          propName: 'className',
        },
        {
          message: `Avoid using 'style' as it add a lots of complexity. See: https://medium.com/@JanPaul123/don-t-pass-css-classes-between-components-e9f7ab192785`,
          propName: 'style',
        },
      ],
    }],
    'react/forbid-dom-props': [ERROR, {
      // Configured value
      forbid: [
        {
          message: `Avoid using 'id's, it is a bad practice. See: https://dev.to/clairecodes/reasons-not-to-use-ids-in-css-4ni4`,
          propName: 'id',
        },
      ],
    }],
    'react/forbid-elements': [ERROR, {
      forbid: [],
    }],
    'react/forbid-foreign-prop-types': [ERROR, {
      allowInPropTypes: false,
    }],
    'react/forbid-prop-types': [ERROR, {
      // Configured value
      checkChildContextTypes: true,
      // Configured value
      checkContextTypes: true,
      forbid: ['any', 'array', 'object'],
    }],
    'react/forward-ref-uses-ref': [ERROR],
    'react/function-component-definition': [ERROR, {
      // Configured value
      namedComponents: FUNCTION_TYPE.ARROW,
      // Configured value
      unnamedComponents: FUNCTION_TYPE.ARROW,
    }],
    'react/hook-use-state': [ERROR, {
      allowDestructuredState: false,
    }],
    'react/iframe-missing-sandbox': [ERROR],
    'react/no-access-state-in-setstate': [ERROR],
    'react/no-adjacent-inline-elements': [ERROR],
    'react/no-array-index-key': [ERROR],
    'react/no-arrow-function-lifecycle': [ERROR],
    'react/no-children-prop': [ERROR, {
      allowFunctions: false,
    }],
    'react/no-danger': [ERROR, {
      customComponentNames: [],
    }],
    'react/no-danger-with-children': [ERROR],
    'react/no-deprecated': [ERROR],
    'react/no-did-mount-set-state': [ERROR, DISALLOW_IN_FUNC],
    'react/no-did-update-set-state': [ERROR, DISALLOW_IN_FUNC],
    'react/no-direct-mutation-state': [ERROR],
    'react/no-find-dom-node': [ERROR],
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
    'react/no-namespace': [ERROR],
    'react/no-object-type-as-default-prop': [ERROR],
    'react/no-redundant-should-component-update': [ERROR],
    'react/no-render-return-value': [ERROR],
    // OFF as we use (even enforce) local component state
    'react/no-set-state': [OFF],
    'react/no-string-refs': [ERROR, {
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
    'react/no-unknown-property': [ERROR, {
      ignore: [],
    }],
    'react/no-unsafe': [ERROR, {
      // Configured value
      checkAliases: true,
    }],
    'react/no-unstable-nested-components': [ERROR, {
      allowAsProps: false,
      customValidators: [],
    }],
    'react/no-unused-class-component-methods': [ERROR],
    'react/no-unused-prop-types': [ERROR, {
      customValidators: [],
      ignore: [],
      skipShapeProps: true,
    }],
    'react/no-unused-state': [ERROR],
    'react/no-will-update-set-state': [ERROR, DISALLOW_IN_FUNC],
    'react/prefer-es6-class': [ERROR, 'always'],
    // TODO: Might not work properly with Typescript, need testing
    'react/prefer-exact-props': [ERROR],
    'react/prefer-read-only-props': [ERROR],
    'react/prefer-stateless-function': [ERROR, {
      ignorePureComponents: false,
    }],
    'react/prop-types': [ERROR, {
      customValidators: [],
      ignore: [],
      skipUndeclared: false,
    }],
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
      childContextTypes: STATIC_PUBLIC_FIELD,
      // Configured value
      contextType: STATIC_PUBLIC_FIELD,
      // Configured value
      contextTypes: STATIC_PUBLIC_FIELD,
      // Configured value
      defaultProps: STATIC_PUBLIC_FIELD,
      // Configured value
      displayName: STATIC_PUBLIC_FIELD,
      // Configured value
      propTypes: STATIC_PUBLIC_FIELD,
    }],
    'react/style-prop-object': [ERROR, {
      allow: [],
    }],
    'react/void-dom-elements-no-children': [ERROR],
  },
} as const satisfies Linter.Config
