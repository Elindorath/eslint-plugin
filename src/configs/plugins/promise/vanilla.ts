import type { Linter } from 'eslint'

/**
 * TODO: fix it when this plugin expose typings
 * @see: https://github.com/eslint-community/eslint-plugin-promise/issues/488
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import promisePlugin from 'eslint-plugin-promise'

import { OFF, ERROR } from '../../../constants'


export const promiseVanillaConfig: Linter.Config = {
  plugins: {
    promise: promisePlugin,
  },

  rules: {
    'promise/always-return': [ERROR, {
      ignoreLastCallback: false, // default
      // Implemented in main, still not in last published version
      // ignoreAssignmentVariable: [],
    }],
    // Might be turned OFF
    'promise/avoid-new': [ERROR],
    'promise/catch-or-return': [ERROR, {
      allowThen: false, // default
      allowFinally: true,
      terminationMethod: '', // default
    }],
    'promise/no-callback-in-promise': [ERROR, {
      exceptions: [], // default
    }],
    'promise/no-multiple-resolved': [ERROR],
    // OFF as we prefer to use the native implementation of Promise
    'promise/no-native': [OFF],
    'promise/no-nesting': [ERROR],
    'promise/no-new-statics': [ERROR],
    'promise/no-promise-in-callback': [ERROR],
    'promise/no-return-in-finally': [ERROR],
    'promise/no-return-wrap': [ERROR, {
      allowReject: false, // default
    }],
    'promise/param-names': [ERROR, {
      resolvePattern: '^_?resolve$', // default
      rejectPattern: '^_?reject$', // default
    }],
    'promise/prefer-await-to-callbacks': [ERROR],
    'promise/prefer-await-to-then': [ERROR, {
      strict: true,
    }],
    // TODO: Might be configured to use bluebird
    'promise/spec-only': [ERROR, {
      allowedMethods: [], // default
    }],
    // Might be disabled in Typescript projects as it already warn about this
    'promise/valid-params': [ERROR],
  },
}
