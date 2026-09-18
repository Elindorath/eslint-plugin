import typescriptEslint from 'typescript-eslint'

import { mergeConfigs } from '../../configMerger.ts'

import { markdownVanillaConfig } from '../plugins/markdown/vanilla.ts'

const overrideMarkdownConfig = mergeConfigs(
  markdownVanillaConfig,
  {
    files: ['**/*.md'],
  }
)

// The markdown processor turns fenced code blocks into virtual files, which no tsconfig lists
const overrideMarkdownCodeBlockConfig = mergeConfigs(
  typescriptEslint.configs.disableTypeChecked,
  {
    files: ['**/*.md/**'],
  }
)

export {
  overrideMarkdownCodeBlockConfig,
  overrideMarkdownConfig,
}
