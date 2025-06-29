/* eslint-disable unicorn/filename-case, sonarjs/prefer-immediate-return -- Temporary disabled to avoid unnecessary noise */

import { readdir } from 'node:fs/promises'

import { config } from './config.ts'

import type { PluginName } from './types.ts'


export async function getInstalledPluginList(): Promise<PluginName[]> {
  const configuredPluginNames = await readdir(config.pluginConfigurationsDirectoryUrl)

  return configuredPluginNames
}

/* eslint-enable */
