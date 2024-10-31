import { mergeConfigs } from '../configMerger'

import { libraryReactConfig } from './library-react'
import { syntaxJsxConfig } from './syntax-jsx'


export const libraryReactSyntaxJsxConfig = mergeConfigs(
  libraryReactConfig,
  syntaxJsxConfig
)
