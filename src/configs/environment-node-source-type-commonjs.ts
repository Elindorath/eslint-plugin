import globals from 'globals'

import { mergeConfigs } from '../configMerger'

import { environmentNodeConfig } from './environment-node'
import { sourceTypeCommonJsConfig } from './source-type-commonjs'


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
