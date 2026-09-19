import { ERROR, OFF } from '../../constants.ts'
import { defineProject } from '../../defineProject.ts'

import { overrideEslintConfig } from '../overrides/eslint-config.ts'
import { overrideJestTestsConfig } from '../overrides/jest-tests.ts'
import { overrideMarkdownConfig } from '../overrides/markdown.ts'
import { overrideWebpackConfig } from '../overrides/webpack-config.ts'


const cssFilesGlob = '**/*.css.ts'

export const projectReactConfig = [
  ...defineProject({
    environment: ['browser'],
    files: ['**/*.ts', '**/*.tsx'],
    library: ['react'],
    overrides: [
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
    ],
    rules: {
      // OFF as it is unpractical in react projects
      'import-x/no-relative-parent-imports': [OFF],
    },
    syntax: ['typescript', 'jsx'],
  }),
  overrideEslintConfig,
  overrideJestTestsConfig,
  overrideMarkdownConfig,
  ...overrideWebpackConfig,
]
