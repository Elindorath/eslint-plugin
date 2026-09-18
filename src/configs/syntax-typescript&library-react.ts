import { mergeConfigs } from '../configMerger.ts'

import { typescriptReactConfig } from './plugins/typescript-eslint/syntax-typescript&library-react.ts'


export const syntaxTypescriptLibraryReactConfig = mergeConfigs(
  typescriptReactConfig
)
