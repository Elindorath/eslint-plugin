import globals from 'globals'

import { mergeConfigs } from '../configMerger.ts'

import { importBrowserConfig } from './plugins/import-x/environment-browser.ts'
import { unicornBrowserConfig } from './plugins/unicorn/environment-browser.ts'


export const environmentBrowserConfig = mergeConfigs(
  importBrowserConfig,
  unicornBrowserConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  }
)
