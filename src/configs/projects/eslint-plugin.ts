import { mergeConfigs } from '../../configMerger'
import { ERROR, OFF } from '../../constants'
import { getRuleConfig } from '../../utils'
import { environmentNodeConfig } from '../environment-node'
import { overrideEslintConfig } from '../overrides/eslint-config'
import { overridePackageJsonConfig } from '../overrides/package-json'
import { overrideScriptsConfig } from '../overrides/scripts'
import { syntaxTypescriptConfig } from '../syntax-typescript'
import { vanillaConfig } from '../vanilla'
import { vanillaLayoutConfig } from '../vanilla-layout'

import type { Linter } from 'eslint'


const typescriptNamingConventionRuleConfig = getRuleConfig('@typescript-eslint/naming-convention', syntaxTypescriptConfig)
const [severity, ...options] = typescriptNamingConventionRuleConfig

export const projectEslintPluginConfig: Linter.Config[] = [
  mergeConfigs(
    vanillaConfig,
    vanillaLayoutConfig,
    syntaxTypescriptConfig,
    environmentNodeConfig,
    {
      files: ['**/*.ts'],
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
        '@typescript-eslint/naming-convention': [severity,
          ...options,
          {
            selector: 'property',
            format: null,
            modifiers: ['requiresQuotes'],
          },
        ],
      },
    },
  ),
  overrideEslintConfig,
  overridePackageJsonConfig,
  overrideScriptsConfig,
]
