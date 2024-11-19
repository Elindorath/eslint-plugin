import globals from 'globals'

import { mergeConfigs } from '../configMerger'

import { nNodeConfig } from './plugins/n/syntax-typescript&environment-node'
import { unicornNodeConfig } from './plugins/unicorn/environment-node'


export const syntaxTypescriptEnvironmentNodeConfig = mergeConfigs(
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
