import process from 'node:process'

import { mergeConfigs } from '../../configMerger.ts'
import { ERROR, OFF } from '../../constants.ts'

import { environmentNodeConfig } from '../environment-node.ts'
import { syntaxTypescriptConfig } from '../syntax-typescript.ts'
import { syntaxTypescriptEnvironmentNodeConfig } from '../syntax-typescript&environment-node.ts'
import { vanillaConfig } from '../vanilla.ts'
import { vanillaLayoutConfig } from '../vanilla-layout.ts'


const overrideScriptsConfig = mergeConfigs(
  {
    files: ['**/scripts/**'],
  },
  vanillaConfig,
  environmentNodeConfig,
  {
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
      'unicorn/filename-case': [ERROR, {
        cases: {
          camelCase: true,
          kebabCase: true,
          pascalCase: true,
        },
      }],
    },
  }
)

const overrideScriptsTypescriptConfig = mergeConfigs(
  {
    files: ['**/scripts/**/*.ts'],
  },
  vanillaConfig,
  vanillaLayoutConfig,
  syntaxTypescriptConfig,
  environmentNodeConfig,
  syntaxTypescriptEnvironmentNodeConfig,
  {
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
      'unicorn/filename-case': [ERROR, {
        cases: {
          camelCase: true,
          kebabCase: true,
          pascalCase: true,
        },
      }],
    },
  }
)

export {
  overrideScriptsConfig,
  overrideScriptsTypescriptConfig,
}
