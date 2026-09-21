import reactHooksPlugin from 'eslint-plugin-react-hooks'

import { ERROR, OFF } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


/*
 * `configs.flat` nests a second level of configurations under a plugin's `configs`, which the shape
 * ESLint declares for a plugin doesn't allow
 */
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars -- Dropping the key is the point
const { flat, ...reactHooksConfigs } = reactHooksPlugin.configs

export const reactHooksConfig: FixedLinterConfig = {
  plugins: {
    'react-hooks': {
      ...reactHooksPlugin,
      configs: reactHooksConfigs,
    },
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
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react-hooks/error-boundaries': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react-hooks/exhaustive-deps': [OFF],
    // OFF as the react-hooks/exhaustive-deps rule already checks effect dependencies
    'react-hooks/exhaustive-effect-dependencies': [OFF],
    // OFF as it targets the fbt internationalization library, which this plugin doesn't configure
    'react-hooks/fbt': [OFF],
    'react-hooks/gating': [ERROR],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react-hooks/globals': [OFF],
    // OFF as the react-hooks/rules-of-hooks rule already enforces the rules of hooks
    'react-hooks/hooks': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react-hooks/immutability': [OFF],
    'react-hooks/incompatible-library': [ERROR],
    // OFF as it reports React Compiler internal bugs, which are not actionable from the linted code
    'react-hooks/invariant': [OFF],
    // OFF as the react-hooks/exhaustive-deps rule already checks useMemo and useCallback dependencies
    'react-hooks/memo-dependencies': [OFF],
    'react-hooks/memoized-effect-dependencies': [ERROR],
    'react-hooks/no-deriving-state-in-effects': [ERROR],
    'react-hooks/preserve-manual-memoization': [ERROR],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react-hooks/purity': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react-hooks/refs': [OFF],
    'react-hooks/rule-suppression': [ERROR],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react-hooks/rules-of-hooks': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react-hooks/set-state-in-effect': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react-hooks/set-state-in-render': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react-hooks/static-components': [OFF],
    // OFF as the parser already rejects invalid syntax
    'react-hooks/syntax': [OFF],
    // OFF as it reports React Compiler features that are not implemented yet, which are not actionable from the linted code
    'react-hooks/todo': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react-hooks/unsupported-syntax': [OFF],
    // OFF as it is superseded by the '@eslint-react' equivalent
    'react-hooks/use-memo': [OFF],
    'react-hooks/void-use-memo': [ERROR],
  },
}
