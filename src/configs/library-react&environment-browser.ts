import { mergeConfigs } from '../configMerger.ts'

import { eslintReactBrowserConfig } from './plugins/eslint-react/library-react&environment-browser.ts'


export const libraryReactEnvironmentBrowserConfig = mergeConfigs(
  eslintReactBrowserConfig
)
