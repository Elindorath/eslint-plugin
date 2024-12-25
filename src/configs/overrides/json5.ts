import { mergeConfigs } from '../../configMerger.ts'
import { json5LayoutConfig } from '../plugins/jsonc/syntax-json5-layout.ts'
import { json5Config } from '../plugins/jsonc/syntax-json5.ts'


export const overrideJson5Config = mergeConfigs(
  json5Config,
  json5LayoutConfig,
  {
    files: ['**/*.json5'],
  }
)
