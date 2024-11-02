import type { Linter } from 'eslint'
import securityPlugin from 'eslint-plugin-security'

import { OFF, ERROR } from '../../../constants'


export const securityVanillaConfig: Linter.Config = {
  plugins: {
    security: securityPlugin,
  },

  rules: {
    'security/detect-bidi-characters': [ERROR],
    'security/detect-buffer-noassert': [ERROR],
    'security/detect-child-process': [ERROR],
    'security/detect-disable-mustache-escape': [ERROR],
    'security/detect-eval-with-expression': [ERROR],
    'security/detect-new-buffer': [ERROR],
    'security/detect-no-csrf-before-method-override': [ERROR],
    // TODO: Should ideally be ERROR but it is very restrictive due to lack of intelligence
    'security/detect-non-literal-fs-filename': [OFF],
    'security/detect-non-literal-regexp': [ERROR],
    // OFF as it is a duplicate of the rule import/no-dynamic-require
    'security/detect-non-literal-require': [OFF],
    // OFF as it is too restrictive
    'security/detect-object-injection': [OFF],
    'security/detect-possible-timing-attacks': [ERROR],
    'security/detect-pseudoRandomBytes': [ERROR],
    'security/detect-unsafe-regex': [ERROR],
  },
}
