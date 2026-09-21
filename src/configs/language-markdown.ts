import { mergeConfigs } from '../configMerger.ts'

import { markdownLanguageConfig } from './plugins/markdown/language-markdown.ts'


export const languageMarkdownConfig = mergeConfigs(
  markdownLanguageConfig
)
