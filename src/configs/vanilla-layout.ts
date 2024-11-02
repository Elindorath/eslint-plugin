import { mergeConfigs } from '../configMerger'

import { ERROR } from '../constants'

import { importVanillaLayoutConfig } from './plugins/import/vanilla-layout'
import { stylisticVanillaLayoutConfig } from './plugins/stylistic/vanilla-layout'
import { unicornVanillaLayoutConfig } from './plugins/unicorn/vanilla-layout'

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
