'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/no-unsanitized/method': [ERROR, {
      objectMatches: null, // Default
      disableDefault: false, // Default
      escape: {
        taggedTemplates: ['Sanitizer.escapeHTML', 'escapeHTML'], // Default
        methods: ['Sanitizer.unwrapSafeHTML', 'unwrapSafeHTML'], // Default
      },
    }, {
      // Check second parameter to .insertAdjacentHTML()
      insertAdjacentHTML: {
        properties: [1],
      },
      // Check first parameter of import()
      import: {
        properties: [0],
      },
      // Check first parameter to createContextualFragment()
      createContextualFragment: {
        properties: [0],
      },
      // Check first parameter to .write(), as long as the preceeding object matches the regex "document"
      write: {
        objectMatches: ['document'],
        properties: [0],
      },
      // Check first parameter to .writeLn(), as long as the preceeding object matches the regex "document"
      writeln: {
        objectMatches: ['document'],
        properties: [0],
      },
    }],
    '@elindorath/no-unsanitized/property': [ERROR, {
      objectMatches: null, // Default
      disableDefault: false, // Default
      escape: {
        taggedTemplates: ['Sanitizer.escapeHTML', 'escapeHTML'], // Default
        methods: ['Sanitizer.unwrapSafeHTML', 'unwrapSafeHTML'], // Default
      },
    }, {
      innerHTML: {}, // Default
      outerHTML: {}, // Default
    }],
  },
};
