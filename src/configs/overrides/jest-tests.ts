import { mergeConfigs } from '../../configMerger.ts'

import { languageJavascriptConfig } from '../language-javascript.ts'
import { libraryJestSyntaxTypescriptConfig } from '../library-jest&syntax-typescript.ts'


export const overrideJestTestsConfig = mergeConfigs(
  languageJavascriptConfig,
  libraryJestSyntaxTypescriptConfig,
  {
    files: ['**/*.test.{ts,tsx}'],
  }
)
