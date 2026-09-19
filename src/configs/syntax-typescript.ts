import { mergeConfigs } from '../configMerger.ts'

import { canonicalTypescriptConfig } from './plugins/canonical/syntax-typescript.ts'
import { importTypescriptConfig } from './plugins/import-x/syntax-typescript.ts'
import { sonarjsTypescriptConfig } from './plugins/sonarjs/syntax-typescript.ts'
import { typescriptConfig } from './plugins/typescript-eslint/syntax-typescript.ts'


export const syntaxTypescriptConfig = mergeConfigs(
  typescriptConfig,
  canonicalTypescriptConfig,
  importTypescriptConfig,
  sonarjsTypescriptConfig
)
