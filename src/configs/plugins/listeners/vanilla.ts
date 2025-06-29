/**
 * TODO: fix it when this plugin expose typings
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import listenersPlugin from 'eslint-plugin-listeners'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const listenersVanillaConfig = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
    listeners: listenersPlugin,
  },

  rules: {
    'listeners/matching-remove-event-listener': [ERROR],
    'listeners/no-inline-function-event-listener': [ERROR],
    'listeners/no-missing-remove-event-listener': [ERROR],
  },
} as const satisfies Linter.Config
