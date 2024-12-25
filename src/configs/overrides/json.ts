import { mergeConfigs } from '../../configMerger.ts'
import { jsonLayoutConfig } from '../plugins/jsonc/syntax-json-layout.ts'
import { jsonConfig } from '../plugins/jsonc/syntax-json.ts'


export const overrideJsonConfig = mergeConfigs(
  jsonConfig,
  jsonLayoutConfig,
  {
    files: ['**/*.json'],
  }
)
