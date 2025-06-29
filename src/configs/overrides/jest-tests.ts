import { mergeConfigs } from '../../configMerger.ts'

import { libraryJestSyntaxTypescriptConfig } from '../library-jest&syntax-typescript.ts'
import { vanillaConfig } from '../vanilla.ts'


export const overrideJestTestsConfig = mergeConfigs(
  vanillaConfig,
  libraryJestSyntaxTypescriptConfig,
  {
    files: ['**/*.test.{ts,tsx}'],
  }
)
