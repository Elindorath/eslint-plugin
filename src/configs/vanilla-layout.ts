import { mergeConfigs } from '../configMerger.ts'
import { ERROR } from '../constants.ts'

import { importVanillaLayoutConfig } from './plugins/import-x/vanilla-layout.ts'
import { stylisticVanillaLayoutConfig } from './plugins/stylistic/vanilla-layout.ts'
import { unicornVanillaLayoutConfig } from './plugins/unicorn/vanilla-layout.ts'

export const vanillaLayoutConfig = mergeConfigs(
  {
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: ERROR,
    },
  },
  importVanillaLayoutConfig,
  stylisticVanillaLayoutConfig,
  unicornVanillaLayoutConfig,
)
