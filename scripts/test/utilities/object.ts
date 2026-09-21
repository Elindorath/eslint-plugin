type ObjectKeys<Type extends object> = `${Exclude<keyof Type, symbol>}`

export {
  objectEntries,
  objectKeys,
}

/*
 * The standard library reports the values of a literal-keyed object as `unknown`, since `entries`
 * also sees properties the type doesn't declare. The objects read here are built in this
 * repository, so their declared shape is exhaustive.
 */
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion -- See comment above
const objectEntries = Object.entries as <Type extends object>(object: Type) => Array<{
  [Key in keyof Type]: [Key, Type[Key]];
}[keyof Type]>

const objectKeys = Object.keys as <Type extends object>(object: Type) => Array<ObjectKeys<Type>>
