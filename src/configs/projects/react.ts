import globals from 'globals'

import { mergeConfigs } from '../../configMerger'
import { libraryReactSyntaxJsxConfig } from '../library-react&syntax-jsx'
import { overrideEslintConfig } from '../overrides/eslint-config'
import { overrideJestTestsConfig } from '../overrides/jest-tests'
import { overrideWebpackConfig } from '../overrides/webpack-config'
import { importBrowserConfig } from '../plugins/import-x/environment-browser'
import { typescriptReactConfig } from '../plugins/typescript-eslint/syntax-typescript&library-react'
import { unicornBrowserConfig } from '../plugins/unicorn/environment-browser'
import { syntaxTypescriptConfig } from '../syntax-typescript'
import { vanillaConfig } from '../vanilla'

import { OFF, ERROR } from '../../constants'


const cssFilesGlob = '**/*.css.ts'

export const projectReactConfig = [
  mergeConfigs(
    vanillaConfig,
    libraryReactSyntaxJsxConfig,
    syntaxTypescriptConfig,
    typescriptReactConfig,
    importBrowserConfig,
    unicornBrowserConfig,
    {
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        globals: {
          ...globals.browser,
        },
      },
      rules: {
        // OFF as it is unpractical in react projects
        'import/no-relative-parent-imports': [OFF],
      },
    },
  ),
  {
    files: ['**/*.tsx', cssFilesGlob],
    rules: {
      'unicorn/filename-case': [ERROR, {
        case: 'pascalCase',
        ignore: [
          /\.md$/ui,
        ],
      }],
    },
  },
  {
    files: ['**/main.tsx'],
    rules: {
      'unicorn/filename-case': [ERROR, {
        case: 'kebabCase',
        ignore: [
          /\.md$/ui,
        ],
      }],
    },
  },
  {
    files: [cssFilesGlob],
    rules: {
      // OFF as we want to enforce exporting a unique 'styles' object
      'filenames-simple/named-export': [OFF],
      // OFF as this rule would force us to capitalized the '.css' part
      'unicorn/filename-case': [OFF],
    },
  },
  overrideEslintConfig,
  overrideJestTestsConfig,
  ...overrideWebpackConfig,
]
