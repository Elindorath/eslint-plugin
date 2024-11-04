import type { Linter } from 'eslint'

/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
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
