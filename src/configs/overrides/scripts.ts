import process from 'node:process'

import { mergeConfigs } from '../../configMerger.ts'
import { ERROR, OFF } from '../../constants.ts'
import { environmentNodeSourceTypeCommonJsConfig } from '../environment-node-source-type-commonjs.ts'
import { vanillaConfig } from '../vanilla.ts'


export const overrideScriptsConfig = mergeConfigs(
  vanillaConfig,
  environmentNodeSourceTypeCommonJsConfig,
  {
    files: ['**/scripts/**'],
    rules: {
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
      // OFF as we need shebang to execute scripts
      'n/shebang': [OFF],
      // OFF as we use it often in dev script tools
      'no-console': [OFF, {
        allow: [''],
      }],
    },
  }
)
