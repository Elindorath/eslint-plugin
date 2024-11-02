import { mergeConfigs } from '../../configMerger'
import { libraryJestSyntaxTypescriptConfig } from '../library-jest&syntax-typescript'
import { vanillaConfig } from '../vanilla'


export const overrideJestTestsConfig = mergeConfigs(
  vanillaConfig,
  libraryJestSyntaxTypescriptConfig,
  {
    files: ['**/*.test.{ts,tsx}'],
  }
)
