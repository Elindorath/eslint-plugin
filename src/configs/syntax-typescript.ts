import { mergeConfigs } from '../configMerger'

import { importTypescriptConfig } from './plugins/import-x/syntax-typescript'
import { sonarjsTypescriptConfig } from './plugins/sonarjs/syntax-typescript'
import { typescriptConfig } from './plugins/typescript-eslint/syntax-typescript'


export const syntaxTypescriptConfig = mergeConfigs(
  typescriptConfig,
  importTypescriptConfig,
  sonarjsTypescriptConfig
)
