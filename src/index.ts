/* eslint-disable filenames-simple/no-index, canonical/filename-match-exported -- This is the entrypoint */

import { configs } from './configs.ts'
import { defineProject } from './defineProject.ts'
import { environments } from './environments.ts'
import { languages } from './languages.ts'
import { meta } from './meta.ts'
import { processors } from './processors.ts'
import { rules } from './rules.ts'
import * as utilities from './utilities.ts'


const plugin = {
  meta,

  /* ----- Keeping meta on top ----- */
  configs,
  defineProject,
  environments,
  languages,
  processors,
  rules,
  utilities,
}

// eslint-disable-next-line no-restricted-exports -- Required by the ESLint plugin convention
export default plugin

/* eslint-enable */
