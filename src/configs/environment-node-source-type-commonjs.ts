import globals from 'globals'

import { mergeConfigs } from '../configMerger.ts'

import { environmentNodeConfig } from './environment-node.ts'
import { sourceTypeCommonJsConfig } from './source-type-commonjs.ts'


export const environmentNodeSourceTypeCommonJsConfig = mergeConfigs(
  environmentNodeConfig,
  sourceTypeCommonJsConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
)
