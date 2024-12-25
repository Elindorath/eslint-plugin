import process from 'node:process'

import { mergeConfigs } from '../../configMerger.ts'
import { ERROR, OFF } from '../../constants.ts'
import { environmentNodeSourceTypeCommonJsConfig } from '../environment-node-source-type-commonjs.ts'
import { environmentNodeConfig } from '../environment-node.ts'
import { syntaxTypescriptConfig } from '../syntax-typescript.ts'
import { vanillaConfig } from '../vanilla.ts'

import type { Linter } from 'eslint'


const webpackRules = {
  'import-x/no-extraneous-dependencies': [ERROR, {
    // Configured value
    bundledDependencies: false,
    // Configured value
    devDependencies: true,
    // Configured value
    includeInternal: true,
    // Configured value
    includeTypes: true,
    // Configured value
    optionalDependencies: false,
    packageDir: process.cwd(),
    peerDependencies: false,
    whitelist: [],
  }],
  // OFF as it is allowed to import nodejs modules
  'import-x/no-nodejs-modules': [OFF],
  // OFF as webpack config can be very extensive
  'max-lines-per-function': [OFF],
  // OFF as webpack require a default export
  'no-restricted-exports': [OFF],
  'unicorn/prevent-abbreviations': [ERROR, {
    // Configured value
    allowList: {
      devServer: true,
      envName: true,
    },
    // Configured value
    checkDefaultAndNamespaceImports: true,
    checkFilenames: true,
    // Configured value
    checkProperties: true,
    // Configured value
    checkShorthandImports: true,
    // Configured value
    checkShorthandProperties: true,
    checkVariables: true,
    extendDefaultAllowList: true,
    extendDefaultReplacements: true,
    ignore: [],
    // Default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L3
    replacements: {},
  }],
} as const satisfies Linter.RulesRecord

export const overrideWebpackConfig = [
  mergeConfigs(
    vanillaConfig,
    environmentNodeSourceTypeCommonJsConfig,
    {
      files: ['**/webpack.config.js'],
      rules: webpackRules,
    }
  ),
  mergeConfigs(
    vanillaConfig,
    environmentNodeConfig,
    syntaxTypescriptConfig,
    {
      files: ['**/webpack.config.ts'],
      rules: webpackRules,
    }
  ),
] satisfies Linter.Config[]
