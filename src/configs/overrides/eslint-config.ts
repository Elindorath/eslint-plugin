import process from 'node:process'

import { mergeConfigs } from '../../configMerger.ts'
import { ERROR, OFF } from '../../constants.ts'
import { environmentNodeSourceTypeCommonJsConfig } from '../environment-node-source-type-commonjs.ts'
import { vanillaConfig } from '../vanilla.ts'


export const overrideEslintConfig = mergeConfigs(
  vanillaConfig,
  environmentNodeSourceTypeCommonJsConfig,
  {
    // TODO: Handle 'eslint.config.ts' as well
    files: ['**/eslint.config.js'],
    rules: {
      // OFF as it prevents us to respect the rule configuration format convention
      '@stylistic/array-bracket-newline': [OFF],
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
      'multiline-comment-style': [OFF, 'starred-block'],
      'quote-props': [OFF, 'consistent-as-needed', {
        keywords: false,
        numbers: false,
        unnecessary: true,
      }],
    },
  }
)
