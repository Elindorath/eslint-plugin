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
    buildGroupConfig(rootGroup, rootAxes),
    ...overrides.map((override) => {
      return buildGroupConfig(override, resolveAxes(rootAxes, override))
    }),
  ]
}

function buildGroupConfig(group: ProjectGroup, axes: Axes): FixedLinterConfig {
  const ownConfig: FixedLinterConfig = {
    ...group.files !== undefined && { files: group.files },
    ...group.rules !== undefined && { rules: group.rules },
  }

  return mergeConfigs(...selectConfigs(axes, group.layout ?? false), ownConfig)
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
