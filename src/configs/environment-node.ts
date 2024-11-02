import globals from 'globals'

import { mergeConfigs } from '../configMerger'

import { nNodeConfig } from './plugins/n/environment-node'
import { unicornNodeConfig } from './plugins/unicorn/environment-node'


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
