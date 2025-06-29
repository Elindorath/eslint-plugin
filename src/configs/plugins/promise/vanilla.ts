/**
 * TODO: fix it when this plugin expose typings
 * @see: https://github.com/eslint-community/eslint-plugin-promise/issues/488
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import promisePlugin from 'eslint-plugin-promise'

import { ERROR, OFF } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const promiseVanillaConfig = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
    promise: promisePlugin,
  },

  rules: {
    'promise/always-return': [ERROR, {
      // Configured value, default is ['globalThis']
      ignoreAssignmentVariable: [],
      ignoreLastCallback: false,
    }],
    // Might be turned OFF
    'promise/avoid-new': [ERROR],
    'promise/catch-or-return': [ERROR, {
      // Configured value
      allowFinally: true,
      allowThen: false,
      allowThenStrict: false,
      terminationMethod: '',
    }],
    'promise/no-callback-in-promise': [ERROR, {
      exceptions: [],
      // Configured value
      timeoutsErr: true,
    }],
    'promise/no-multiple-resolved': [ERROR],
    // OFF as we prefer to use the native implementation of Promise
    'promise/no-native': [OFF],
    'promise/no-nesting': [ERROR],
    'promise/no-new-statics': [ERROR],
    'promise/no-promise-in-callback': [ERROR],
    'promise/no-return-in-finally': [ERROR],
    'promise/no-return-wrap': [ERROR, {
      allowReject: false,
    }],
    'promise/param-names': [ERROR, {
      rejectPattern: '^_?reject$',
      resolvePattern: '^_?resolve$',
    }],
    'promise/prefer-await-to-callbacks': [ERROR],
    'promise/prefer-await-to-then': [ERROR, {
      // Configured value
      strict: true,
    }],
    'promise/prefer-catch': [ERROR],
    // TODO: Might be configured to use bluebird
    'promise/spec-only': [ERROR, {
      allowedMethods: [],
    }],
    // Might be disabled in Typescript projects as it already warn about this
    'promise/valid-params': [ERROR, {
      exclude: [],
    }],
  },
} as const satisfies Linter.Config
