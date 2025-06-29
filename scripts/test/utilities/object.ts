/* eslint-disable no-use-before-define -- TODO: fix the eslint configuration for scripts */

import type { WritableDeep } from 'type-fest'

type ArrayElement<ArrayType> = ArrayType extends ReadonlyArray<infer Type>
  ? Type
  : never

type Cast<TestedType, CastedType> = TestedType extends CastedType ? TestedType : CastedType

type FromEntries<Type> = Type extends Array<[infer InferredKey, unknown]>
  ? { [Key in Cast<InferredKey, string>]: Extract<ArrayElement<Type>, [Key, unknown]>[1] }
  : { [Key in string]: unknown }

type ObjectKeys<T extends object> = `${Exclude<keyof T, symbol>}`

export {
  objectEntries,
  objectFromEntries,
  objectKeys,
}

const objectEntries = Object.entries as <Type extends object>(object: Type) => Array<{
  [Key in keyof Type]: [Key, Type[Key]];
}[keyof Type]>

const objectFromEntries = Object.fromEntries as <Type>(entries: Type) => FromEntries<WritableDeep<Type>>

const objectKeys = Object.keys as <Type extends object>(object: Type) => Array<ObjectKeys<Type>>

/* eslint-enable */
