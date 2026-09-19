import globals from 'globals'

import { defineProject } from '../../defineProject.ts'

import { overrideEslintConfig } from '../overrides/eslint-config.ts'
import { overrideJestTestsConfig } from '../overrides/jest-tests.ts'
import { overrideMarkdownConfig } from '../overrides/markdown.ts'


export const projectReactNativeConfig = [
  ...defineProject({
    files: ['**/*.ts', '**/*.tsx'],

    /*
     * The browser globals without the browser environment: React Native exposes the same web APIs
     * while having neither a DOM nor the rules that go with one
     */
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    library: ['react', 'react-native'],
    syntax: ['typescript', 'jsx'],
  }),
  overrideEslintConfig,
  overrideJestTestsConfig,
  overrideMarkdownConfig,
]
