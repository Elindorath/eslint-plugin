import { defineProject } from '../../defineProject.ts'

import { overrideEslintConfig } from '../overrides/eslint-config.ts'
import { overrideJestTestsConfig } from '../overrides/jest-tests.ts'
import { overrideMarkdownConfig } from '../overrides/markdown.ts'


export const projectReactNativeConfig = [
  ...defineProject({
    // A `react-native-web` project declares the browser environment instead, and gets its globals
    environment: ['native'],
    files: ['**/*.ts', '**/*.tsx'],
    library: ['react', 'react-native'],
    syntax: ['typescript', 'jsx'],
  }),
  overrideEslintConfig,
  overrideJestTestsConfig,
  overrideMarkdownConfig,
]
