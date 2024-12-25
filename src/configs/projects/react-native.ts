import globals from 'globals'

import { mergeConfigs } from '../../configMerger.ts'
import { libraryReactSyntaxJsxConfig } from '../library-react&syntax-jsx.ts'
import { libraryReactNativeSyntaxJsxConfig } from '../library-react-native&syntax-jsx.ts'
import { overrideEslintConfig } from '../overrides/eslint-config.ts'
import { overrideJestTestsConfig } from '../overrides/jest-tests.ts'
import { syntaxTypescriptConfig } from '../syntax-typescript.ts'
import { vanillaConfig } from '../vanilla.ts'


export const projectReactNativeConfig = [
  mergeConfigs(
    vanillaConfig,
    libraryReactSyntaxJsxConfig,
    libraryReactNativeSyntaxJsxConfig,
    syntaxTypescriptConfig,
    {
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        globals: {
          ...globals.browser,
        },
      },
    },
  ),
  overrideEslintConfig,
  overrideJestTestsConfig,
]
