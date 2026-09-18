import { mergeConfigs } from '../../configMerger.ts'

import { languageJsoncConfig } from '../language-jsonc.ts'


export const overrideJsoncConfig = mergeConfigs(
  languageJsoncConfig,
  {
    files: ['**/*.jsonc', '.vscode/*.json', 'tsconfig.json'],
  }
)
