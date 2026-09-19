import { mergeConfigs } from '../configMerger.ts'

import { nNodeConfig } from './plugins/n/syntax-typescript&environment-node.ts'


/*
 * Only what `environment-node` does not already carry: a project reaching this configuration
 * reaches that one too, the registry asking for the node environment before selecting it
 */
export const syntaxTypescriptEnvironmentNodeConfig = mergeConfigs(
  nNodeConfig
)
