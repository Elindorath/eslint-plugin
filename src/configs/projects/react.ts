import globals from 'globals'

import { mergeConfigs } from '../../configMerger.ts'
import { ERROR, OFF } from '../../constants.ts'

import { libraryReactSyntaxJsxConfig } from '../library-react&syntax-jsx.ts'
import { overrideEslintConfig } from '../overrides/eslint-config.ts'
import { overrideJestTestsConfig } from '../overrides/jest-tests.ts'
import { overrideMarkdownConfig } from '../overrides/markdown.ts'
import { overrideWebpackConfig } from '../overrides/webpack-config.ts'
import { importBrowserConfig } from '../plugins/import-x/browser.ts'
import { typescriptReactConfig } from '../plugins/typescript-eslint/syntax-typescript&library-react.ts'
import { unicornBrowserConfig } from '../plugins/unicorn/environment-browser.ts'
import { syntaxTypescriptConfig } from '../syntax-typescript.ts'
import { vanillaConfig } from '../vanilla.ts'


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
        'import-x/no-relative-parent-imports': [OFF],
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
  overrideMarkdownConfig,
  ...overrideWebpackConfig,
]
