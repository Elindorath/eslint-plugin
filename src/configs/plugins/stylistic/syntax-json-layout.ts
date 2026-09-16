import stylisticPlugin from '@stylistic/eslint-plugin'

import { getRuleConfig } from '../../../utilities.ts'

import { stylisticVanillaLayoutConfig } from './vanilla-layout.ts'

import type { Linter } from 'eslint'


export const stylisticJsonLayoutConfig = {
  plugins: {
    '@stylistic': stylisticPlugin,
  },

  rules: {
    // `jsonc` exposes no counterpart, and this rule only looks at the raw text.
    '@stylistic/eol-last': getRuleConfig('@stylistic/eol-last', stylisticVanillaLayoutConfig),
  },
} as const satisfies Linter.Config
