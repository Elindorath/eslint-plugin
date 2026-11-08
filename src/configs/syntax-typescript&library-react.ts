import { mergeConfigs } from '../configMerger.ts'

import { eslintReactTypescriptConfig } from './plugins/eslint-react/syntax-typescript&library-react.ts'
import { typescriptReactConfig } from './plugins/typescript-eslint/syntax-typescript&library-react.ts'


export const syntaxTypescriptLibraryReactConfig = mergeConfigs(
  eslintReactTypescriptConfig,
  typescriptReactConfig
)
