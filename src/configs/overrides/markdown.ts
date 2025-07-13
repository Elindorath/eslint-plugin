import { mergeConfigs } from '../../configMerger.ts'

import { markdownVanillaConfig } from '../plugins/markdown/vanilla.ts'

export const overrideMarkdownConfig = mergeConfigs(
  markdownVanillaConfig,
  {
    files: ['**/*.md'],
  }
)
