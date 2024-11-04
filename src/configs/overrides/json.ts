import { mergeConfigs } from '../../configMerger'
import { jsonConfig } from '../plugins/jsonc/syntax-json'
import { jsonLayoutConfig } from '../plugins/jsonc/syntax-json-layout'


export const overrideJsonConfig = mergeConfigs(
  jsonConfig,
  jsonLayoutConfig,
  {
    files: ['**/*.json'],
  }
)
