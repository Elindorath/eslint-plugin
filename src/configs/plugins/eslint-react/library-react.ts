import eslintReactPlugin from '@eslint-react/eslint-plugin'

import { ERROR, OFF } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const eslintReactConfig: FixedLinterConfig = {
  plugins: {
    '@eslint-react': eslintReactPlugin,
  },

  /* ----- Rules ----- */
  rules: {
    '@eslint-react/error-boundaries': [ERROR],
    // TODO: 'additionalHooks' should be configured on a per project basis
    '@eslint-react/exhaustive-deps': [ERROR, {
      additionalHooks: '',
      enableDangerousAutofixThisMayCauseInfiniteLoops: false,
      // eslint-disable-next-line @typescript-eslint/naming-convention, camelcase -- Defined by the rule
      experimental_autoDependenciesHooks: [],
      requireExplicitEffectDeps: false,
    }],
    '@eslint-react/globals': [ERROR],
    '@eslint-react/immutability': [ERROR],
    '@eslint-react/naming-convention-context-name': [ERROR],
    '@eslint-react/naming-convention-id-name': [ERROR],
    '@eslint-react/naming-convention-ref-name': [ERROR],
    '@eslint-react/no-access-state-in-setstate': [ERROR],
    '@eslint-react/no-array-index-key': [ERROR],
    '@eslint-react/no-children-count': [ERROR],
    '@eslint-react/no-children-for-each': [ERROR],
    '@eslint-react/no-children-map': [ERROR],
    '@eslint-react/no-children-only': [ERROR],
    '@eslint-react/no-children-to-array': [ERROR],
    '@eslint-react/no-class-component': [ERROR],
    '@eslint-react/no-clone-element': [ERROR],
    '@eslint-react/no-component-will-mount': [ERROR],
    '@eslint-react/no-component-will-receive-props': [ERROR],
    '@eslint-react/no-component-will-update': [ERROR],
    '@eslint-react/no-context-provider': [ERROR],
    '@eslint-react/no-create-ref': [ERROR],
    '@eslint-react/no-direct-mutation-state': [ERROR],
    '@eslint-react/no-duplicate-key': [ERROR],
    '@eslint-react/no-forward-ref': [ERROR],
    '@eslint-react/no-implicit-children': [ERROR],
    '@eslint-react/no-implicit-key': [ERROR],
    '@eslint-react/no-implicit-ref': [ERROR],
    '@eslint-react/no-leaked-conditional-rendering': [ERROR],
    '@eslint-react/no-missing-component-display-name': [ERROR],
    '@eslint-react/no-missing-context-display-name': [ERROR],
    '@eslint-react/no-missing-key': [ERROR],
    '@eslint-react/no-misused-capture-owner-stack': [ERROR],
    '@eslint-react/no-nested-component-definitions': [ERROR],
    '@eslint-react/no-nested-lazy-component-declarations': [ERROR],
    '@eslint-react/no-set-state-in-component-did-mount': [ERROR],
    '@eslint-react/no-set-state-in-component-did-update': [ERROR],
    '@eslint-react/no-set-state-in-component-will-update': [ERROR],
    '@eslint-react/no-unnecessary-use-prefix': [ERROR],
    '@eslint-react/no-unsafe-component-will-mount': [ERROR],
    '@eslint-react/no-unsafe-component-will-receive-props': [ERROR],
    '@eslint-react/no-unsafe-component-will-update': [ERROR],
    '@eslint-react/no-unstable-context-value': [ERROR],
    '@eslint-react/no-unstable-default-props': [ERROR, {
      safeDefaultProps: [],
    }],
    '@eslint-react/no-unused-class-component-members': [ERROR],
    '@eslint-react/no-unused-props': [ERROR],
    '@eslint-react/no-unused-state': [ERROR],
    '@eslint-react/no-use-context': [ERROR],
    '@eslint-react/purity': [ERROR],
    '@eslint-react/refs': [ERROR],
    '@eslint-react/rsc-function-definition': [ERROR],
    // TODO: 'additionalHooks' should be configured on a per project basis
    '@eslint-react/rules-of-hooks': [ERROR, {
      additionalHooks: '',
    }],
    '@eslint-react/set-state-in-effect': [ERROR],
    '@eslint-react/set-state-in-render': [ERROR],
    '@eslint-react/static-components': [ERROR],
    '@eslint-react/unsupported-syntax': [ERROR],
    '@eslint-react/use-memo': [ERROR],
    '@eslint-react/use-state': [ERROR, {
      enforceSetterName: true,
      enforceAssignment: true,
      enforceLazyInitialization: true,
    }],
    // OFF as it is an alias of '@eslint-react/error-boundaries'
    '@eslint-react/x-error-boundaries': [OFF],
    // OFF as it is an alias of '@eslint-react/exhaustive-deps'
    '@eslint-react/x-exhaustive-deps': [OFF],
    // OFF as it is an alias of '@eslint-react/globals'
    '@eslint-react/x-globals': [OFF],
    // OFF as it is an alias of '@eslint-react/immutability'
    '@eslint-react/x-immutability': [OFF],
    // OFF as it is an alias of '@eslint-react/no-access-state-in-setstate'
    '@eslint-react/x-no-access-state-in-setstate': [OFF],
    // OFF as it is an alias of '@eslint-react/no-array-index-key'
    '@eslint-react/x-no-array-index-key': [OFF],
    // OFF as it is an alias of '@eslint-react/no-children-count'
    '@eslint-react/x-no-children-count': [OFF],
    // OFF as it is an alias of '@eslint-react/no-children-for-each'
    '@eslint-react/x-no-children-for-each': [OFF],
    // OFF as it is an alias of '@eslint-react/no-children-map'
    '@eslint-react/x-no-children-map': [OFF],
    // OFF as it is an alias of '@eslint-react/no-children-only'
    '@eslint-react/x-no-children-only': [OFF],
    // OFF as it is an alias of '@eslint-react/no-children-to-array'
    '@eslint-react/x-no-children-to-array': [OFF],
    // OFF as it is an alias of '@eslint-react/no-class-component'
    '@eslint-react/x-no-class-component': [OFF],
    // OFF as it is an alias of '@eslint-react/no-clone-element'
    '@eslint-react/x-no-clone-element': [OFF],
    // OFF as it is an alias of '@eslint-react/no-component-will-mount'
    '@eslint-react/x-no-component-will-mount': [OFF],
    // OFF as it is an alias of '@eslint-react/no-component-will-receive-props'
    '@eslint-react/x-no-component-will-receive-props': [OFF],
    // OFF as it is an alias of '@eslint-react/no-component-will-update'
    '@eslint-react/x-no-component-will-update': [OFF],
    // OFF as it is an alias of '@eslint-react/no-context-provider'
    '@eslint-react/x-no-context-provider': [OFF],
    // OFF as it is an alias of '@eslint-react/no-create-ref'
    '@eslint-react/x-no-create-ref': [OFF],
    // OFF as it is an alias of '@eslint-react/no-direct-mutation-state'
    '@eslint-react/x-no-direct-mutation-state': [OFF],
    // OFF as it is an alias of '@eslint-react/no-duplicate-key'
    '@eslint-react/x-no-duplicate-key': [OFF],
    // OFF as it is an alias of '@eslint-react/no-forward-ref'
    '@eslint-react/x-no-forward-ref': [OFF],
    // OFF as it is an alias of '@eslint-react/no-implicit-children'
    '@eslint-react/x-no-implicit-children': [OFF],
    // OFF as it is an alias of '@eslint-react/no-implicit-key'
    '@eslint-react/x-no-implicit-key': [OFF],
    // OFF as it is an alias of '@eslint-react/no-implicit-ref'
    '@eslint-react/x-no-implicit-ref': [OFF],
    // OFF as it is an alias of '@eslint-react/no-leaked-conditional-rendering'
    '@eslint-react/x-no-leaked-conditional-rendering': [OFF],
    // OFF as it is an alias of '@eslint-react/no-missing-component-display-name'
    '@eslint-react/x-no-missing-component-display-name': [OFF],
    // OFF as it is an alias of '@eslint-react/no-missing-context-display-name'
    '@eslint-react/x-no-missing-context-display-name': [OFF],
    // OFF as it is an alias of '@eslint-react/no-missing-key'
    '@eslint-react/x-no-missing-key': [OFF],
    // OFF as it is an alias of '@eslint-react/no-misused-capture-owner-stack'
    '@eslint-react/x-no-misused-capture-owner-stack': [OFF],
    // OFF as it is an alias of '@eslint-react/no-nested-component-definitions'
    '@eslint-react/x-no-nested-component-definitions': [OFF],
    // OFF as it is an alias of '@eslint-react/no-nested-lazy-component-declarations'
    '@eslint-react/x-no-nested-lazy-component-declarations': [OFF],
    // OFF as it is an alias of '@eslint-react/no-set-state-in-component-did-mount'
    '@eslint-react/x-no-set-state-in-component-did-mount': [OFF],
    // OFF as it is an alias of '@eslint-react/no-set-state-in-component-did-update'
    '@eslint-react/x-no-set-state-in-component-did-update': [OFF],
    // OFF as it is an alias of '@eslint-react/no-set-state-in-component-will-update'
    '@eslint-react/x-no-set-state-in-component-will-update': [OFF],
    // OFF as it is an alias of '@eslint-react/no-unnecessary-use-prefix'
    '@eslint-react/x-no-unnecessary-use-prefix': [OFF],
    // OFF as it is an alias of '@eslint-react/no-unsafe-component-will-mount'
    '@eslint-react/x-no-unsafe-component-will-mount': [OFF],
    // OFF as it is an alias of '@eslint-react/no-unsafe-component-will-receive-props'
    '@eslint-react/x-no-unsafe-component-will-receive-props': [OFF],
    // OFF as it is an alias of '@eslint-react/no-unsafe-component-will-update'
    '@eslint-react/x-no-unsafe-component-will-update': [OFF],
    // OFF as it is an alias of '@eslint-react/no-unstable-context-value'
    '@eslint-react/x-no-unstable-context-value': [OFF],
    // OFF as it is an alias of '@eslint-react/no-unstable-default-props'
    '@eslint-react/x-no-unstable-default-props': [OFF],
    // OFF as it is an alias of '@eslint-react/no-unused-class-component-members'
    '@eslint-react/x-no-unused-class-component-members': [OFF],
    // OFF as it is an alias of '@eslint-react/no-unused-props'
    '@eslint-react/x-no-unused-props': [OFF],
    // OFF as it is an alias of '@eslint-react/no-unused-state'
    '@eslint-react/x-no-unused-state': [OFF],
    // OFF as it is an alias of '@eslint-react/no-use-context'
    '@eslint-react/x-no-use-context': [OFF],
    // OFF as it is an alias of '@eslint-react/purity'
    '@eslint-react/x-purity': [OFF],
    // OFF as it is an alias of '@eslint-react/refs'
    '@eslint-react/x-refs': [OFF],
    // OFF as it is an alias of '@eslint-react/rules-of-hooks'
    '@eslint-react/x-rules-of-hooks': [OFF],
    // OFF as it is an alias of '@eslint-react/set-state-in-effect'
    '@eslint-react/x-set-state-in-effect': [OFF],
    // OFF as it is an alias of '@eslint-react/set-state-in-render'
    '@eslint-react/x-set-state-in-render': [OFF],
    // OFF as it is an alias of '@eslint-react/static-components'
    '@eslint-react/x-static-components': [OFF],
    // OFF as it is an alias of '@eslint-react/unsupported-syntax'
    '@eslint-react/x-unsupported-syntax': [OFF],
    // OFF as it is an alias of '@eslint-react/use-memo'
    '@eslint-react/x-use-memo': [OFF],
    // OFF as it is an alias of '@eslint-react/use-state'
    '@eslint-react/x-use-state': [OFF],
  },
}
