import { mergeConfigs } from './configMerger.ts'
import { selectConfigs } from './registry.ts'

import type { Axes } from './registry.ts'
import type { FixedLinterConfig, FixedRulesRecord } from './types.ts'


/**
 * A group of files and the axes they sit on. An override names the axes it changes and inherits the
 * rest from the declaration it belongs to, so `library: []` is how a group opts out of every library.
 */
type ProjectDeclaration = ProjectGroup & {
  overrides?: ProjectGroup[];
}

type ProjectGroup = Partial<Axes> & {
  files?: string[];
  // For what the axes cannot say, such as globals a group needs without the rules that come with them
  languageOptions?: FixedLinterConfig['languageOptions'];
  layout?: boolean;
  rules?: FixedRulesRecord;
}

const DEFAULT_AXES: Axes = {
  environment: [],
  language: 'javascript',
  library: [],
  sourceType: 'module',
  syntax: [],
}

/** Turns a file architecture into the configurations the declared axes call for. */
export function defineProject(declaration: ProjectDeclaration): FixedLinterConfig[] {
  const { overrides = [], ...rootGroup } = declaration
  const rootAxes = resolveAxes(DEFAULT_AXES, rootGroup)

  return [
    buildGroupConfig(rootGroup, rootAxes, rootGroup.layout ?? false),
    ...overrides.map((override) => {
      const overrideAxes = resolveAxes(rootAxes, override)
      const hasRootLayout = rootGroup.layout ?? false
      const hasSameLayout = (override.layout ?? hasRootLayout) === hasRootLayout

      /*
       * A group that moves no axis is already covered by the one it belongs to, so it carries what
       * it adds and nothing else
       */
      if (hasSameLayout && isSameAxes(rootAxes, overrideAxes)) {
        return buildOwnConfig(override)
      }

      return buildGroupConfig(override, overrideAxes, override.layout ?? hasRootLayout)
    }),
  ]
}

function buildGroupConfig(group: ProjectGroup, axes: Axes, hasLayout: boolean): FixedLinterConfig {
  return mergeConfigs(...selectConfigs(axes, hasLayout), buildOwnConfig(group))
}

function buildOwnConfig(group: ProjectGroup): FixedLinterConfig {
  return {
    ...group.files !== undefined && { files: group.files },
    ...group.languageOptions !== undefined && { languageOptions: group.languageOptions },
    ...group.rules !== undefined && { rules: group.rules },
  }
}

function isSameAxes(left: Axes, right: Axes) {
  if (left.language !== right.language || left.sourceType !== right.sourceType) {
    return false
  }

  return isSameValues(left.syntax, right.syntax)
    && isSameValues(left.environment, right.environment)
    && isSameValues(left.library, right.library)
}

function isSameValues<Value>(left: Value[], right: Value[]) {
  return left.length === right.length && left.every((value) => {
    return right.includes(value)
  })
}

// An axis the group leaves out keeps the value it inherits, and an empty array clears it
function resolveAxes(inherited: Axes, group: ProjectGroup): Axes {
  return {
    environment: group.environment ?? inherited.environment,
    language: group.language ?? inherited.language,
    library: group.library ?? inherited.library,
    sourceType: group.sourceType ?? inherited.sourceType,
    syntax: group.syntax ?? inherited.syntax,
  }
}

export type { ProjectDeclaration, ProjectGroup }
