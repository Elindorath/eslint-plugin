import { mergeConfigs } from '../configMerger.ts'

import { libraryReactConfig } from './library-react.ts'
import { syntaxJsxConfig } from './syntax-jsx.ts'


export const libraryReactSyntaxJsxConfig = mergeConfigs(
  libraryReactConfig,
  syntaxJsxConfig
)
