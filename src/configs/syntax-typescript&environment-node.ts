import globals from 'globals'

import { mergeConfigs } from '../configMerger.ts'

import { nNodeConfig } from './plugins/n/syntax-typescript&environment-node.ts'
import { unicornNodeConfig } from './plugins/unicorn/environment-node.ts'


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
