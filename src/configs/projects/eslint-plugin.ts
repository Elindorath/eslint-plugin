import type { Linter } from 'eslint'

import { mergeConfigs } from '../../configMerger'
import { environmentNodeSourceTypeCommonJsConfig } from '../environment-node-source-type-commonjs'
import { overrideEslintConfig } from '../overrides/eslint-config'
import { overridePackageJsonConfig } from '../overrides/package-json'
import { overrideScriptsConfig } from '../overrides/scripts'
import { vanillaConfig } from '../vanilla'

import { OFF, ERROR } from '../../constants'


export const projectEslintPluginConfig: Linter.Config[] = [
  mergeConfigs(
    vanillaConfig,
    environmentNodeSourceTypeCommonJsConfig,
    {
      files: ['**/*.js'],
      rules: {
        'sort-keys': [OFF],
        'no-unused-vars': [ERROR, {
          vars: 'all', // default
          varsIgnorePattern: 'OFF|WARN|ERROR',
          args: 'after-used', // default
          argsIgnorePattern: '', // default
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '', // default
          destructuredArrayIgnorePattern: '', // default
          ignoreRestSiblings: false, // default
        }],
        'multiline-comment-style': [OFF, 'starred-block'], // default
        'quote-props': [OFF, 'consistent-as-needed', {
          keywords: false, // default
          unnecessary: true, // default
          numbers: false, // default
        }],
        'unicorn/no-keyword-prefix': [ERROR, {
          disallowedPrefixes: ['new', 'class'], // default
          checkProperties: false,
          onlyCamelCase: true, // default
        }],
        // OFF to be able to follow eslint normalized format
        // 'n/global-require': [OFF],
        'unicorn/prevent-abbreviations': [ERROR, {
          replacements: {}, // default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L3
          extendDefaultReplacements: true, // default
          allowList: {}, // default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/28e7498ad06679bb92343db53bb40a7b5ba2990a/rules/shared/abbreviations.js#L230
          extendDefaultAllowList: true, // default
          checkDefaultAndNamespaceImports: true,
          checkShorthandImports: true,
          checkShorthandProperties: true,
          checkProperties: false, // default
          checkVariables: true, // default
          checkFilenames: true, // default
          ignore: [], // default
        }],
        // OFF as it prevents us to respect the rule configuration format convention
        '@stylistic/array-bracket-newline': [OFF],
      },
    },
  ),
  overrideEslintConfig,
  overridePackageJsonConfig,
  overrideScriptsConfig,
]

// module.exports = {
//   extends: [
//     require.resolve('./common'),
//     require.resolve('./+script-type'),
//     require.resolve('./+node'),
//     require.resolve('./+eslintrc'),
//     require.resolve('./_override-scripts'),
//   ],
//   rules: {
//     '@elindorath/filenames/match-regex': [ERROR, /^\.?[+-_]?[\da-z-]+$/gu],
//     // OFF to respect the eslint-plugin formatting standard
//     '@elindorath/node/global-require': [OFF],
//     // OFF to respect the eslint-plugin formatting standard
//     '@elindorath/import/max-dependencies': [OFF],
//     // Disabled filenames check to respect eslint plugin name
//     '@elindorath/unicorn/prevent-abbreviations': [ERROR, {
//       replacements: {}, // Default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/rules/prevent-abbreviations.js#L18
//       extendDefaultReplacements: true, // Default
//       whitelist: {}, // Default here: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/rules/prevent-abbreviations.js#L222
//       extendDefaultWhitelist: true, // Default
//       checkDefaultAndNamespaceImports: 'internal', // Default
//       checkShorthandImports: 'internal', // Default
//       checkShorthandProperties: false, // Default
//       checkProperties: false, // Default
//       checkVariables: true, // Default
//       checkFilenames: false,
//     }],
//   },
// };
