import reactHooksPlugin from 'eslint-plugin-react-hooks'

import { ERROR, OFF } from '../../../constants.ts'

import type { ESLint, Linter } from 'eslint'


export const reactHooksConfig = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- See comment above
    'react-hooks': reactHooksPlugin as unknown as ESLint.Plugin,
  },

  settings: {
    'react-hooks': {
      // TODO: should be configured on a per project basis
      additionalEffectHooks: '',
    },
  },

  /* ----- Rules ----- */
  rules: {
    'react-hooks/capitalized-calls': [ERROR],
    'react-hooks/config': [ERROR],
    'react-hooks/error-boundaries': [ERROR],
    // TODO: 'additionalHooks' should be configured on a per project basis
    'react-hooks/exhaustive-deps': [ERROR, {
      additionalHooks: '',
      enableDangerousAutofixThisMayCauseInfiniteLoops: false,
      // eslint-disable-next-line @typescript-eslint/naming-convention, camelcase -- Defined by the rule
      experimental_autoDependenciesHooks: [],
      requireExplicitEffectDeps: false,
    }],
    // OFF as the react-hooks/exhaustive-deps rule already checks effect dependencies
    'react-hooks/exhaustive-effect-dependencies': [OFF],
    // OFF as it targets the fbt internationalization library, which this plugin doesn't configure
    'react-hooks/fbt': [OFF],
    'react-hooks/gating': [ERROR],
    'react-hooks/globals': [ERROR],
    // OFF as the react-hooks/rules-of-hooks rule already enforces the rules of hooks
    'react-hooks/hooks': [OFF],
    'react-hooks/immutability': [ERROR],
    'react-hooks/incompatible-library': [ERROR],
    // OFF as it reports React Compiler internal bugs, which are not actionable from the linted code
    'react-hooks/invariant': [OFF],
    // OFF as the react-hooks/exhaustive-deps rule already checks useMemo and useCallback dependencies
    'react-hooks/memo-dependencies': [OFF],
    'react-hooks/memoized-effect-dependencies': [ERROR],
    'react-hooks/no-deriving-state-in-effects': [ERROR],
    'react-hooks/preserve-manual-memoization': [ERROR],
    'react-hooks/purity': [ERROR],
    'react-hooks/refs': [ERROR],
    'react-hooks/rule-suppression': [ERROR],
    // TODO: 'additionalHooks' should be configured on a per project basis
    'react-hooks/rules-of-hooks': [ERROR, {
      additionalHooks: '',
    }],
    'react-hooks/set-state-in-effect': [ERROR],
    'react-hooks/set-state-in-render': [ERROR],
    'react-hooks/static-components': [ERROR],
    // OFF as the parser already rejects invalid syntax
    'react-hooks/syntax': [OFF],
    // OFF as it reports React Compiler features that are not implemented yet, which are not actionable from the linted code
    'react-hooks/todo': [OFF],
    'react-hooks/unsupported-syntax': [ERROR],
    'react-hooks/use-memo': [ERROR],
    'react-hooks/void-use-memo': [ERROR],
  },
} as const satisfies Linter.Config
