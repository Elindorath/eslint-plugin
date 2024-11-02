import { mergeConfigs } from '../../configMerger'
import { json5Config } from '../plugins/jsonc/syntax-json5'
import { json5LayoutConfig } from '../plugins/jsonc/syntax-json5-layout'


export const overrideJson5Config = mergeConfigs(
  json5Config,
  json5LayoutConfig,
  {
    files: ['**/*.json5'],
  }
)
