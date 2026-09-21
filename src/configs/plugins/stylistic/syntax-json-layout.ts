import stylisticPlugin from '@stylistic/eslint-plugin'

import type { FixedLinterConfig } from '../../../types.ts'
import { getRuleConfig } from '../../../utilities.ts'

import { stylisticVanillaLayoutConfig } from './vanilla-layout.ts'


export const stylisticJsonLayoutConfig: FixedLinterConfig = {
  plugins: {
    '@stylistic': stylisticPlugin,
  },

  rules: {
    // `jsonc` exposes no counterpart, and this rule only looks at the raw text.
    '@stylistic/eol-last': getRuleConfig('@stylistic/eol-last', stylisticVanillaLayoutConfig),
  },
}
