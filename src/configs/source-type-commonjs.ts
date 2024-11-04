
import globals from 'globals'

import { mergeConfigs } from '../configMerger'

import { importCommonJsConfig } from './plugins/import-x/source-type-commonjs'
import { unicornCommonJsConfig } from './plugins/unicorn/source-type-commonjs'


export const sourceTypeCommonJsConfig = mergeConfigs(
  importCommonJsConfig,
  unicornCommonJsConfig,
  {
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.commonjs,
      },
    },
  }
)
