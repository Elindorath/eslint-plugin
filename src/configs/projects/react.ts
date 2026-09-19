import { mergeConfigs } from '../../configMerger.ts'
import { ERROR, OFF } from '../../constants.ts'

import { environmentBrowserConfig } from '../environment-browser.ts'
import { libraryReactEnvironmentBrowserConfig } from '../library-react&environment-browser.ts'
import { libraryReactSyntaxJsxConfig } from '../library-react&syntax-jsx.ts'
import { overrideEslintConfig } from '../overrides/eslint-config.ts'
import { overrideJestTestsConfig } from '../overrides/jest-tests.ts'
import { overrideMarkdownConfig } from '../overrides/markdown.ts'
import { overrideWebpackConfig } from '../overrides/webpack-config.ts'
import { syntaxTypescriptConfig } from '../syntax-typescript.ts'
import { syntaxTypescriptLibraryReactConfig } from '../syntax-typescript&library-react.ts'
import { vanillaConfig } from '../vanilla.ts'


const cssFilesGlob = '**/*.css.ts'

export const projectReactConfig = [
  mergeConfigs(
    vanillaConfig,
    libraryReactSyntaxJsxConfig,
    libraryReactEnvironmentBrowserConfig,
    syntaxTypescriptConfig,
    syntaxTypescriptLibraryReactConfig,
    environmentBrowserConfig,
    {
      files: ['**/*.ts', '**/*.tsx'],
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
