import globals from 'globals'

import { mergeConfigs } from '../../configMerger'
import { libraryReactSyntaxJsxConfig } from '../library-react&syntax-jsx'
import { libraryReactNativeSyntaxJsxConfig } from '../library-react-native&syntax-jsx'
import { overrideEslintConfig } from '../overrides/eslint-config'
import { overrideJestTestsConfig } from '../overrides/jest-tests'
import { syntaxTypescriptConfig } from '../syntax-typescript'
import { vanillaConfig } from '../vanilla'


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
