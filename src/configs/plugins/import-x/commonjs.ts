import importPlugin from 'eslint-plugin-import-x'

import { OFF } from '../../../constants.ts'

import type { ESLint, Linter } from 'eslint'


export const commonJsConfig = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- See comment above
    'import-x': importPlugin as unknown as ESLint.Plugin,
  },

  rules: {
    /* ----- Helpful warnings ----- */
    // OFF as the plugin doesn't support CommonJS export
    'import-x/no-unused-modules': [OFF],

    /* ----- Module systems ----- */
    // OFF as we use commonjs in node context
    'import-x/no-commonjs': [OFF, {
      allowConditionalRequire: true,
      allowPrimitiveModules: false,
      allowRequire: false,
    }],
    // OFF as we use node module in node context
    'import-x/no-nodejs-modules': [OFF, {
      allow: [],
    }],
  },
} as const satisfies Linter.Config
