import type { Linter } from 'eslint'
import noUnsanitizedPlugin from 'eslint-plugin-no-unsanitized'

import { ERROR } from '../../../constants'


const SECOND_PROPERTY_INDEX = 1
const TAGGED_TEMPLATES = ['Sanitizer.escapeHTML', 'escapeHTML']
const METHODS = ['Sanitizer.unwrapSafeHTML', 'unwrapSafeHTML']

export const noUnsanitizedVanillaConfig: Linter.Config = {
  plugins: {
    'no-unsanitized': noUnsanitizedPlugin,
  },

  rules: {
    'no-unsanitized/method': [ERROR, {
      objectMatches: undefined, // default
      defaultDisable: false, // default
      escape: {
        taggedTemplates: TAGGED_TEMPLATES, // default
        methods: METHODS, // default
      },
      variableTracing: true, // default
    }, {
      // Check second parameter to .insertAdjacentHTML()
      insertAdjacentHTML: {
        properties: [SECOND_PROPERTY_INDEX],
      },
      // Check first parameter of import()
      import: {
        properties: [0],
      },
      // Check first parameter to createContextualFragment()
      createContextualFragment: {
        properties: [0],
      },
      // Check first parameter to .write(), as long as the preceding object matches the regex "document"
      write: {
        objectMatches: ['document'],
        properties: [0],
      },
      // Check first parameter to .writeLn(), as long as the preceding object matches the regex "document"
      writeln: {
        objectMatches: ['document'],
        properties: [0],
      },
    }],
    'no-unsanitized/property': [ERROR, {
      escape: {
        taggedTemplates: TAGGED_TEMPLATES, // default
        methods: METHODS, // default
      },
      variableTracing: true, // default
    }, {
      innerHTML: {}, // default
      outerHTML: {}, // default
    }],
  },
}
