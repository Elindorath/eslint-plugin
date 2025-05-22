/* eslint-disable filenames-simple/no-index -- This is the entrypoint */

import { name, version } from '../package.json' with { type: 'json' }

import { configs } from './configs.ts'
import { environments } from './environments.ts'
import { languages } from './languages.ts'
import { processors } from './processors.ts'
import { rules } from './rules.ts'
import * as utilities from './utilities.ts'


const plugin = {
  meta: {
    name,
    version,
  },

  /* ----- Keeping meta on top ----- */
  configs,
  environments,
  languages,
  processors,
  rules,
  utilities,
}

// eslint-disable-next-line no-restricted-exports -- Required by the ESLint plugin convention
export default plugin

/* eslint-enable */
