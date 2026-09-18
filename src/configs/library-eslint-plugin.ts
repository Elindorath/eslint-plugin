import { mergeConfigs } from '../configMerger.ts'

import { eslintPluginConfig } from './plugins/eslint-plugin/library-eslint-plugin.ts'


export const libraryEslintPluginConfig = mergeConfigs(
  eslintPluginConfig
)
