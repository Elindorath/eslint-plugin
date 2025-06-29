import { mergeConfigs } from '../../configMerger.ts'

import { json5Config } from '../plugins/jsonc/syntax-json5.ts'


export const overrideJsoncConfig = mergeConfigs(
  json5Config,
  {
    files: ['**/*.jsonc', '.vscode/*.json', 'tsconfig.json'],
  }
)
