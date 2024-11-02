import { mergeConfigs } from '../configMerger'

import { libraryJestConfig } from './library-jest'
import { jestTypescriptConfig } from './plugins/jest/library-jest&syntax-typescript'
import { syntaxTypescriptConfig } from './syntax-typescript'


export const libraryJestSyntaxTypescriptConfig = mergeConfigs(
  syntaxTypescriptConfig,
  libraryJestConfig,
  jestTypescriptConfig,
)
