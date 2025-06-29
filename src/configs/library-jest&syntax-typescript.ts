import { mergeConfigs } from '../configMerger.ts'

import { libraryJestConfig } from './library-jest.ts'
import { jestTypescriptConfig } from './plugins/jest/library-jest&syntax-typescript.ts'
import { syntaxTypescriptConfig } from './syntax-typescript.ts'


export const libraryJestSyntaxTypescriptConfig = mergeConfigs(
  syntaxTypescriptConfig,
  libraryJestConfig,
  jestTypescriptConfig,
)
