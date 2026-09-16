import { mergeConfigs } from '../../configMerger.ts'

import { jsonConfig } from '../plugins/jsonc/syntax-json.ts'
import { jsonLayoutConfig } from '../plugins/jsonc/syntax-json-layout.ts'
import { stylisticJsonLayoutConfig } from '../plugins/stylistic/syntax-json-layout.ts'


export const overrideJsonConfig = mergeConfigs(
  jsonConfig,
  jsonLayoutConfig,
  stylisticJsonLayoutConfig,
  {
    files: ['**/*.json'],
  }
)
