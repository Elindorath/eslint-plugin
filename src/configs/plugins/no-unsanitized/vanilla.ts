/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import noUnsanitizedPlugin from 'eslint-plugin-no-unsanitized'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


const SECOND_PROPERTY_INDEX = 1
const TAGGED_TEMPLATES = ['Sanitizer.escapeHTML', 'escapeHTML']
const METHODS = ['Sanitizer.unwrapSafeHTML', 'unwrapSafeHTML']

export const noUnsanitizedVanillaConfig = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
    'no-unsanitized': noUnsanitizedPlugin,
  },

  rules: {
    'no-unsanitized/method': [ERROR, {
      defaultDisable: false,
      escape: {
        methods: METHODS,
        taggedTemplates: TAGGED_TEMPLATES,
      },
      objectMatches: undefined,
      variableTracing: true,
    }, {
      // Check first parameter to createContextualFragment()
      createContextualFragment: {
        properties: [0],
      },
      // Check first parameter of import()
      import: {
        properties: [0],
      },
      // Check second parameter to .insertAdjacentHTML()
      insertAdjacentHTML: {
        properties: [SECOND_PROPERTY_INDEX],
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
        methods: METHODS,
        taggedTemplates: TAGGED_TEMPLATES,
      },
      variableTracing: true,
    }, {
      innerHTML: {},
      outerHTML: {},
    }],
  },
} as const satisfies Linter.Config
