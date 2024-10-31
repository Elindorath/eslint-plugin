import { mergeConfigs } from '../../configMerger'
import { environmentNodeSourceTypeCommonJsConfig } from '../environment-node-source-type-commonjs'
import { vanillaConfig } from '../vanilla'

import { OFF } from '../../constants'


export const overrideScriptsConfig = mergeConfigs(
  vanillaConfig,
  environmentNodeSourceTypeCommonJsConfig,
  {
    files: ['**/scripts/**'],
    rules: {
      // OFF as we use it often in dev script tools
      'no-console': [OFF, {
        allow: [''], // default
      }],
      // OFF as we need shebang to execute scripts
      'n/shebang': [OFF],
      // OFF as we need to import devDependencies
      'import/no-extraneous-dependencies': [OFF, {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false, // default
        bundledDependencies: false,
        includeInternal: true,
        includeTypes: true,
      }],
    },
  }
)
