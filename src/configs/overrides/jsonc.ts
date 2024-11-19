import { mergeConfigs } from '../../configMerger'
import { json5Config } from '../plugins/jsonc/syntax-json5'


export const overrideJsoncConfig = mergeConfigs(
  json5Config,
  {
    files: ['**/*.jsonc', '.vscode/*.json', 'tsconfig.json'],
  }
)
