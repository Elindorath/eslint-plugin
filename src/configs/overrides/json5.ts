import { mergeConfigs } from '../../configMerger.ts'

import { languageJson5Config } from '../language-json5.ts'
import { languageJson5LayoutConfig } from '../language-json5-layout.ts'


export const overrideJson5Config = mergeConfigs(
  languageJson5Config,
  languageJson5LayoutConfig,
  {
    files: ['**/*.json5'],
  }
)
