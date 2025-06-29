import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


const labelAttributes: string[] = [] as const
const controlComponents: string[] = [] as const
// Configured value
const imageComponents = ['Image', 'Picture'] as const
// Configured value
const anchorComponents = ['Link'] as const
// Configured value
const inputComponents = ['input', 'Input', 'Field'] as const
// Configured value
const labelComponents = ['Label'] as const
const interactiveHandlers = [
  'onClick',
  'onMouseDown',
  'onMouseUp',
  'onKeyPress',
  'onKeyDown',
  'onKeyUp',
] as const


export const jsxA11yConfig = {
  plugins: {
    'jsx-a11y': jsxA11yPlugin,
  },

  settings: {
    'jsx-a11y': {
      polymorphicPropName: 'as',
      // TODO: Should be configured on a per project basis
      components: {},
    },
  },

  /* ----- Rules ----- */
  rules: {
    'jsx-a11y/alt-text': [ERROR, {
      // Configured value
      'area': ['Area'],
      'elements': ['img', 'object', 'area', 'input[type="image"]'],
      // Configured value
      'img': imageComponents,
      // Configured value
      'input[type="image"]': ['InputImage'],
      // Configured value
      'object': ['Object'],
    }],
    'jsx-a11y/anchor-ambiguous-text': [ERROR, {
      words: ['click here', 'here', 'link', 'a link', 'learn more'],
    }],
    'jsx-a11y/anchor-has-content': [ERROR, {
      // Configured value
      components: anchorComponents,
    }],
    'jsx-a11y/anchor-is-valid': [ERROR, {
      aspects: ['noHref', 'invalidHref', 'preferButton'],
      // Configured value
      components: anchorComponents,
      // Configured value
      specialLink: ['href', 'url'],
    }],
    'jsx-a11y/aria-activedescendant-has-tabindex': [ERROR, {}],
    'jsx-a11y/aria-props': [ERROR, {}],
    'jsx-a11y/aria-proptypes': [ERROR, {}],
    'jsx-a11y/aria-role': [ERROR, {
      allowedInvalidRoles: [],
      ignoreNonDOM: false,
    }],
    'jsx-a11y/aria-unsupported-elements': [ERROR, {}],
    'jsx-a11y/autocomplete-valid': [ERROR, {
      // Configured value
      inputComponents,
    }],
    'jsx-a11y/click-events-have-key-events': [ERROR, {}],
    'jsx-a11y/control-has-associated-label': [ERROR, {
      controlComponents,
      depth: 2,
      ignoreElements: [],
      ignoreRoles: [],
      // Configured value
      labelAttributes,
    }],
    'jsx-a11y/heading-has-content': [ERROR, {
      components: [],
    }],
    'jsx-a11y/html-has-lang': [ERROR, {}],
    'jsx-a11y/iframe-has-title': [ERROR, {}],
    'jsx-a11y/img-redundant-alt': [ERROR, {
      components: imageComponents,
      words: ['image', 'photo', 'picture'],
    }],
    'jsx-a11y/interactive-supports-focus': [ERROR, {
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
    'jsx-a11y/label-has-associated-control': [ERROR, {
      assert: 'both',
      controlComponents,
      depth: 2,
      labelAttributes,
      labelComponents,
    }],
    'jsx-a11y/lang': [ERROR, {}],
    'jsx-a11y/media-has-caption': [ERROR, {
      // Configured value
      audio: ['Audio'],
      // Configured value
      track: ['Track'],
      // Configured value
      video: ['Video'],
    }],
    'jsx-a11y/mouse-events-have-key-events': [ERROR, {
      // Configured value
      hoverInHandlers: [
        'onMouseOver',
        'onMouseEnter',
        'onPointerOver',
        'onPointerEnter',
      ],
      // Configured value
      hoverOutHandlers: [
        'onMouseOut',
        'onMouseLeave',
        'onPointerOut',
        'onPointerLeave',
      ],
    }],
    'jsx-a11y/no-access-key': [ERROR, {}],
    'jsx-a11y/no-aria-hidden-on-focusable': [ERROR, {}],
    // OFF as autofocus could be a major UX improvements
    'jsx-a11y/no-autofocus': [OFF, {
      ignoreNonDOM: false,
    }],
    'jsx-a11y/no-distracting-elements': [ERROR, {
      elements: ['marquee', 'blink'],
    }],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [ERROR, {
      // Configured value
      tr: ['none', 'presentation'],
    }],
    'jsx-a11y/no-noninteractive-element-interactions': [ERROR, {
      handlers: interactiveHandlers,
    }],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [ERROR, {
      // Configured value
      li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      // Configured value
      ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      // Configured value
      table: ['grid'],
      // Configured value
      td: ['gridcell'],
      // Configured value
      ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
    }],
    'jsx-a11y/no-noninteractive-tabindex': [ERROR, {
      // Configured value
      allowExpressionValues: true,
      // Configured value
      roles: ['tabpanel'],
      // Configured value
      tags: [],
    }],
    'jsx-a11y/no-redundant-roles': [ERROR, {
      nav: ['navigation'],
    }],
    'jsx-a11y/no-static-element-interactions': [ERROR, {
      // Configured value
      allowExpressionValues: true,
      handlers: interactiveHandlers,
    }],
    'jsx-a11y/prefer-tag-over-role': [ERROR, {}],
    'jsx-a11y/role-has-required-aria-props': [ERROR, {}],
    'jsx-a11y/role-supports-aria-props': [ERROR, {}],
    'jsx-a11y/scope': [ERROR, {}],
    'jsx-a11y/tabindex-no-positive': [ERROR, {}],
  },
} as const satisfies Linter.Config
