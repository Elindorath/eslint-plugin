import { mergeConfigs } from '../../configMerger.ts'

import { languageJsonConfig } from '../language-json.ts'
import { languageJsonLayoutConfig } from '../language-json-layout.ts'


export const overrideJsonConfig = mergeConfigs(
  languageJsonConfig,
  languageJsonLayoutConfig,
  {
    files: ['**/*.json'],
  }
)
