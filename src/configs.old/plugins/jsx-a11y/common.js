'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


const labelAttributes = ['label']; // Default
const controlComponents = []; // Default
const imageComponents = ['Image', 'Picture'];
// Default
const interactiveHandlers = [
  'onClick',
  'onMouseDown',
  'onMouseUp',
  'onKeyPress',
  'onKeyDown',
  'onKeyUp',
];


module.exports = {
  rules: {
    '@elindorath/jsx-a11y/accessible-emoji': [ERROR],
    '@elindorath/jsx-a11y/alt-text': [ERROR, {
      elements: ['img', 'object', 'area', 'input[type="image"]'], // Default
      img: imageComponents,
      object: ['Object'],
      area: ['Area'],
      'input[type="image"]': ['InputImage'],
    }],
    '@elindorath/jsx-a11y/anchor-has-content': [ERROR, {
      components: ['Link'],
    }],
    '@elindorath/jsx-a11y/anchor-is-valid': [ERROR, {
      components: ['Link'],
      specialLink: ['href', 'url'],
      aspects: ['noHref', 'invalidHref', 'preferButton'], // Default
    }],
    '@elindorath/jsx-a11y/aria-activedescendant-has-tabindex': [ERROR],
    '@elindorath/jsx-a11y/aria-props': [ERROR],
    '@elindorath/jsx-a11y/aria-proptypes': [ERROR],
    '@elindorath/jsx-a11y/aria-role': [ERROR],
    '@elindorath/jsx-a11y/aria-unsupported-elements': [ERROR],
    '@elindorath/jsx-a11y/autocomplete-valid': [ERROR, {
      inputComponents: ['input', 'Input', 'Field'],
    }],
    '@elindorath/jsx-a11y/click-events-have-key-events': [ERROR],
    '@elindorath/jsx-a11y/control-has-associated-label': [ERROR, {
      labelAttributes,
      controlComponents,
      ignoreElements: [], // Default
      ignoreRoles: [], // Default
      depth: 2, // Default
    }],
    '@elindorath/jsx-a11y/heading-has-content': [ERROR, {
      components: ['Heading'],
    }],
    '@elindorath/jsx-a11y/html-has-lang': [ERROR],
    '@elindorath/jsx-a11y/iframe-has-title': [ERROR],
    '@elindorath/jsx-a11y/img-redundant-alt': [ERROR, {
      components: imageComponents,
      words: ['image', 'photo', 'picture'],
    }],
    '@elindorath/jsx-a11y/interactive-supports-focus': [ERROR, {
      // Default
      tabbable: [
        'button',
        'checkbox',
        'link',
        'searchbox',
        'spinbutton',
        'switch',
        'textbox',
      ],
    }],
    '@elindorath/jsx-a11y/label-has-associated-control': [ERROR, {
      labelComponents: ['Label'],
      labelAttributes,
      controlComponents,
      assert: 'both',
      depth: 2, // Default
    }],
    '@elindorath/jsx-a11y/lang': [ERROR],
    '@elindorath/jsx-a11y/media-has-caption': [ERROR, {
      audio: ['Audio'],
      video: ['Video'],
      track: ['Track'],
    }],
    '@elindorath/jsx-a11y/mouse-events-have-key-events': [ERROR],
    '@elindorath/jsx-a11y/no-access-key': [ERROR],
    // OFF as autofocus could be a major UX improvements
    '@elindorath/jsx-a11y/no-autofocus': [OFF, {
      ignoreNonDOM: false, // Default
    }],
    '@elindorath/jsx-a11y/no-distracting-elements': [ERROR, {
      elements: ['marquee', 'blink'],
    }],
    '@elindorath/jsx-a11y/no-interactive-element-to-noninteractive-role': [ERROR, {
      tr: ['none', 'presentation'],
    }],
    '@elindorath/jsx-a11y/no-noninteractive-element-interactions': [ERROR, {
      // Default
      handlers: interactiveHandlers,
    }],
    '@elindorath/jsx-a11y/no-noninteractive-element-to-interactive-role': [ERROR, {
      ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      table: ['grid'],
      td: ['gridcell'],
    }],
    '@elindorath/jsx-a11y/no-noninteractive-tabindex': [ERROR, {
      tags: [],
      roles: ['tabpanel'],
    }],
    '@elindorath/jsx-a11y/no-onchange': [ERROR],
    '@elindorath/jsx-a11y/no-redundant-roles': [ERROR, {
      nav: ['navigation'],
    }],
    '@elindorath/jsx-a11y/no-static-element-interactions': [ERROR, {
      // Default
      handlers: interactiveHandlers,
    }],
    '@elindorath/jsx-a11y/role-has-required-aria-props': [ERROR],
    '@elindorath/jsx-a11y/role-supports-aria-props': [ERROR],
    '@elindorath/jsx-a11y/scope': [ERROR],
    '@elindorath/jsx-a11y/tabindex-no-positive': [ERROR],
  },
};
