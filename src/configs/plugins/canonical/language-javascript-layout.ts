import canonicalPlugin from 'eslint-plugin-canonical'

import { OFF } from '../../../constants.ts'
import type { FixedLinterConfig } from '../../../types.ts'


export const canonicalJavascriptLayoutConfig: FixedLinterConfig = {
  plugins: {
    canonical: canonicalPlugin,
  },

  /*
   * Every rule here forces one element per line, where the '@stylistic' rules covering the same
   * constructs are configured to accept a single line as long as it stays consistent
   */
  rules: {
    // OFF as the '@stylistic/object-property-newline' rule allows all properties on the same line
    'canonical/destructuring-property-newline': [OFF, {
      allowAllPropertiesOnSameLine: false,
    }],
    // OFF as the '@stylistic/object-curly-newline' rule only asks export specifiers to be consistent
    'canonical/export-specifier-newline': [OFF],
    // OFF as the '@stylistic/object-curly-newline' rule only asks import specifiers to be consistent
    'canonical/import-specifier-newline': [OFF],
  },
}
