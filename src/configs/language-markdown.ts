import { mergeConfigs } from '../configMerger.ts'

import { markdownLanguageConfig } from './plugins/markdown/language-markdown.ts'
import { unicornMarkdownConfig } from './plugins/unicorn/language-markdown.ts'


export const languageMarkdownConfig = mergeConfigs(
  markdownLanguageConfig,
  unicornMarkdownConfig
)
