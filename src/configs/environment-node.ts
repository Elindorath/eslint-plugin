import globals from 'globals'

import { mergeConfigs } from '../configMerger.ts'

import { nNodeConfig } from './plugins/n/environment-node.ts'
import { unicornNodeConfig } from './plugins/unicorn/environment-node.ts'


export const environmentNodeConfig = mergeConfigs(
  nNodeConfig,
  unicornNodeConfig,
  {
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
      },
    },
  }
)
