import process from 'node:process'

import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import importPlugin from 'eslint-plugin-import-x'

import { ERROR, OFF } from '../../../constants.ts'

import type { ESLint, Linter } from 'eslint'


const { createNodeResolver } = importPlugin

export const typescriptConfig = {
  plugins: {
    /**
     * We shouldn't override this type but there are inconsistencies with the expected ESLint.Plugin type.
     * TODO: fix this when types are fixed
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- See comment above
    'import-x': importPlugin as unknown as ESLint.Plugin,
  },

  settings: {
    'import-x/extensions': [
      '.ts',
      '.tsx',
      '.json',
      '.json5',
    ],
    'import-x/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import-x/resolver-next': [
      createTypeScriptImportResolver({
        project: process.cwd(),
      }),
      createNodeResolver(),
    ],
  },

  /* ----- Rules ----- */
  rules: {
    /* ----- Helpful warnings ----- */
    // OFF as the plugin doesn't support CommonJS export
    'import-x/no-unused-modules': [OFF, {
      ignoreExports: [],
      // Configured value
      ignoreUnusedTypeExports: true,
      // Configured value
      missingExports: true,
      src: [process.cwd()],
      // Configured value
      unusedExports: true,
    }],

    /* ----- Module systems ----- */
    // OFF as we use commonjs in node context
    'import-x/no-commonjs': [OFF, {
      allowConditionalRequire: true,
      allowPrimitiveModules: false,
      allowRequire: false,
    }],
    // OFF as we use node module in node context
    'import-x/no-nodejs-modules': [OFF, {
      allow: [],
    }],

    /* ----- Style guide ----- */
    /**
     * Might duplicate warning from the '@typescript-eslint/consistent-type-imports' rule
     */
    // Configured value
    'import-x/consistent-type-specifier-style': [ERROR, 'prefer-top-level'],
    // Configured value
    'import-x/extensions': [ERROR, 'always', {
      // Configured value
      checkTypeImports: true,
      // Configured value
      ignorePackages: true,
      // Configured value
      pattern: {
        ts: 'ignorePackages',
        tsx: 'ignorePackages',
      },
    }],
  },
} as const satisfies Linter.Config
