import type { Linter } from 'eslint'
import listenersPlugin from 'eslint-plugin-listeners'

import { ERROR } from '../../../constants'


export const listenersVanillaConfig: Linter.Config = {
  plugins: {
    listeners: listenersPlugin,
  },

  rules: {
    'listeners/matching-remove-event-listener': [ERROR],
    'listeners/no-inline-function-event-listener': [ERROR],
    'listeners/no-missing-remove-event-listener': [ERROR],
  },
}
