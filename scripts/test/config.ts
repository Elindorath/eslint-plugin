import process from 'node:process'
import { pathToFileURL, URL } from 'node:url'

import type { Config } from './types.ts'

const [, rootPath] = process.argv

export const config: Config = {
  jsonIndentationSpacesCount: 2,
  pluginConfigurationsDirectoryUrl: new URL('../src/configs/plugins/', pathToFileURL(rootPath)),
  pluginRulesSchemaDirectoryUrl: new URL('../artifacts/rules-schema/', pathToFileURL(rootPath)),
}
