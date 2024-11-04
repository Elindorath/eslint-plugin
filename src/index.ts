/* eslint-disable filenames-simple/no-index -- This is the entrypoint */

import { name, version } from '../package.json' with { type: 'json' }

import configs from './configs'
import * as utils from './utils'


const plugin = {
  meta: {
    name,
    version,
  },

  configs,
  // environments,
  // languages,
  // processors,
  // rules,
  utils,
}

export default plugin

/* eslint-enable */
