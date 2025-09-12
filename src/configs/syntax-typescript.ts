import { mergeConfigs } from '../configMerger.ts'

import { importTypescriptConfig } from './plugins/import-x/typescript.ts'
import { sonarjsTypescriptConfig } from './plugins/sonarjs/syntax-typescript.ts'
import { typescriptConfig } from './plugins/typescript-eslint/syntax-typescript.ts'


export const syntaxTypescriptConfig = mergeConfigs(
  typescriptConfig,
  importTypescriptConfig,
  sonarjsTypescriptConfig
)
