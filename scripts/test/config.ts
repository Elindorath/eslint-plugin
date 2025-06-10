import process from 'node:process'
import { pathToFileURL, URL } from 'node:url'

import type { Config } from './types.ts'

const [, rootPath] = process.argv

export const config: Config = {
  pluginConfigurationsDirectoryUrl: new URL('../src/configs/plugins/', pathToFileURL(rootPath)),
}
