import { defineConfig } from 'eslint/config'
/**
 * TODO: fix it when this plugin expose typings
 * @see: https://github.com/freaktechnik/eslint-plugin-array-func/issues/492
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import arrayFunctionPlugin from 'eslint-plugin-array-func'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const arrayFunctionVanillaConfig = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
    'array-func': arrayFunctionPlugin,
  },

  rules: {
    'array-func/avoid-reverse': [ERROR],
    'array-func/from-map': [ERROR],
    // OFF as the rule 'unicorn/no-array-method-this-argument' check the same thing
    'array-func/no-unnecessary-this-arg': [OFF],
    // OFF as it conflicts with the rule 'unicorn/prefer-spread'
    'array-func/prefer-array-from': [OFF],
    'array-func/prefer-flat': [ERROR],
    // OFF as the rule 'unicorn/prefer-array-flat-map' check the same thing
    'array-func/prefer-flat-map': [OFF],
  },
} as const satisfies Linter.Config

// type PluginConfig<PluginPrefix extends string, PluginInstance> = {
//   plugins: { [key in PluginPrefix]: PluginInstance; };
//   prefix: PluginPrefix;
//   rules: { [key in `${PluginPrefix}/string`] }
// }

// function definePluginConfig<PluginPrefix, PluginInstance>(config: PluginConfig<PluginPrefix, PluginInstance>) {

// }

// definePluginConfig({
//   plugins: { coucou: arrayFunctionPlugin },
//   prefix: 'coucou',
// } as const)
