import type { Linter } from 'eslint'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'

import { OFF, ERROR } from '../../../constants'


const labelAttributes: string[] = [] // default
const controlComponents: string[] = [] // default
const imageComponents = ['Image', 'Picture']
const anchorComponents = ['Link']
const inputComponents = ['input', 'Input', 'Field']
const labelComponents = ['Label']
// default
const interactiveHandlers = [
  'onClick',
  'onMouseDown',
  'onMouseUp',
  'onKeyPress',
  'onKeyDown',
  'onKeyUp',
]


export const jsxA11yConfig: Linter.Config = {
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

  rules: {
    'jsx-a11y/alt-text': [ERROR, {
      'elements': ['img', 'object', 'area', 'input[type="image"]'], // default
      'img': imageComponents,
      'object': ['Object'],
      'area': ['Area'],
      'input[type="image"]': ['InputImage'],
    }],
    'jsx-a11y/anchor-ambiguous-text': [ERROR, {
      words: ['click here', 'here', 'link', 'a link', 'learn more'], // default
    }],
    'jsx-a11y/anchor-has-content': [ERROR, {
      components: anchorComponents,
    }],
    'jsx-a11y/anchor-is-valid': [ERROR, {
      components: anchorComponents,
      specialLink: ['href', 'url'],
      aspects: ['noHref', 'invalidHref', 'preferButton'], // default
    }],
    'jsx-a11y/aria-activedescendant-has-tabindex': [ERROR, {}],
    'jsx-a11y/aria-props': [ERROR, {}],
    'jsx-a11y/aria-proptypes': [ERROR, {}],
    'jsx-a11y/aria-role': [ERROR, {
      allowedInvalidRoles: [],
      ignoreNonDOM: false, // default
    }],
    'jsx-a11y/aria-unsupported-elements': [ERROR, {}],
    'jsx-a11y/autocomplete-valid': [ERROR, {
      inputComponents,
    }],
    'jsx-a11y/click-events-have-key-events': [ERROR, {}],
    'jsx-a11y/control-has-associated-label': [ERROR, {
      labelAttributes,
      controlComponents,
      ignoreElements: [], // default
      ignoreRoles: [], // default
      depth: 2, // default
    }],
    'jsx-a11y/heading-has-content': [ERROR, {
      components: [], // default
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
      labelComponents,
      labelAttributes,
      controlComponents,
      assert: 'both',
      depth: 2, // default
    }],
    'jsx-a11y/lang': [ERROR, {}],
    'jsx-a11y/media-has-caption': [ERROR, {
      audio: ['Audio'],
      video: ['Video'],
      track: ['Track'],
    }],
    'jsx-a11y/mouse-events-have-key-events': [ERROR, {
      hoverInHandlers: [
        'onMouseOver',
        'onMouseEnter',
        'onPointerOver',
        'onPointerEnter',
      ],
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
      ignoreNonDOM: false, // default
    }],
    'jsx-a11y/no-distracting-elements': [ERROR, {
      elements: ['marquee', 'blink'], // default
    }],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [ERROR, {
      tr: ['none', 'presentation'],
    }],
    'jsx-a11y/no-noninteractive-element-interactions': [ERROR, {
      // default
      handlers: interactiveHandlers,
    }],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [ERROR, {
      ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      table: ['grid'],
      td: ['gridcell'],
    }],
    'jsx-a11y/no-noninteractive-tabindex': [ERROR, {
      tags: [],
      roles: ['tabpanel'],
      allowExpressionValues: true,
    }],
    'jsx-a11y/no-redundant-roles': [ERROR, {
      nav: ['navigation'],
    }],
    'jsx-a11y/no-static-element-interactions': [ERROR, {
      // default
      handlers: interactiveHandlers,
      allowExpressionValues: true,
    }],
    'jsx-a11y/prefer-tag-over-role': [ERROR, {}],
    'jsx-a11y/role-has-required-aria-props': [ERROR, {}],
    'jsx-a11y/role-supports-aria-props': [ERROR, {}],
    'jsx-a11y/scope': [ERROR, {}],
    'jsx-a11y/tabindex-no-positive': [ERROR, {}],
  },
}
