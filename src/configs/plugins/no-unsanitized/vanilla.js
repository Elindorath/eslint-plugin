'use strict'

const noUnsanitizedPlugin = require('eslint-plugin-no-unsanitized')

const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

const SECOND_PROPERTY_INDEX = 1;
const TAGGED_TEMPLATES = ['Sanitizer.escapeHTML', 'escapeHTML']
const METHODS = ['Sanitizer.unwrapSafeHTML', 'unwrapSafeHTML']

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  plugins: {
    'no-unsanitized': noUnsanitizedPlugin,
  },

  rules: {
    'no-unsanitized/method': [ERROR, {
      objectMatches: undefined, // default
      disableDefault: false, // default
      escape: {
        taggedTemplates: TAGGED_TEMPLATES, // default
        methods: METHODS, // default
      },
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
      objectMatches: undefined, // default
      disableDefault: false, // default
      escape: {
        taggedTemplates: TAGGED_TEMPLATES, // default
        methods: METHODS, // default
      },
    }, {
      innerHTML: {}, // default
      outerHTML: {}, // default
    }],
  },
};
