import globals from 'globals'

import { mergeConfigs } from '../configMerger.ts'

import { importCommonJsConfig } from './plugins/import-x/source-type-commonjs.ts'
import { unicornCommonJsConfig } from './plugins/unicorn/source-type-commonjs.ts'


export const sourceTypeCommonJsConfig = mergeConfigs(
  importCommonJsConfig,
  unicornCommonJsConfig,
  {
    languageOptions: {
      globals: {
        ...globals.commonjs,
      },
      sourceType: 'commonjs',
    },
  }
)
