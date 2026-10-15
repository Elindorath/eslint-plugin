#! /usr/bin/env -S yarn tsx

import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

import { isPlainObject } from 'is-what'

import { configs } from '../src/configs.ts'
import { CODEBASE_KNOBS } from '../src/projectCodebase.ts'

import { objectEntries } from './test/utilities/object.ts'


/*
 * The settings `defineProject` exposes name rule options and settings keys by hand. A dependency
 * renaming one would leave a setting silently writing into nothing, so both directions are
 * checked: every target must exist, and every rule a configuration marks as belonging to the
 * project must be reachable through a setting.
 */
const PROJECT_MARKER = 'per project basis'
const PLUGIN_CONFIGURATIONS_DIRECTORY = path.resolve(import.meta.dirname, '../src/configs/plugins')
const FIRST_OPTION_INDEX = 1
const NEXT_LINE_OFFSET = 1
const SINGLE_FAILURE_COUNT = 1

/** Only what this check reads, so the exported configurations can keep their own shapes. */
type InspectedConfig = {
  rules?: { [key: string]: unknown; };
  settings?: { [key: string]: unknown; };
}

const flatConfigs: InspectedConfig[] = objectEntries(configs).flatMap(([, value]) => {
  return Array.isArray(value) ? value : [value]
})

const failures = [...findUnreachableTargets(), ...await findUnexposedMarkedRules()]

if (failures.length > 0) {
  for (const failure of failures) {
    console.log(failure)
  }

  console.log(`\n${failures.length} project setting${failures.length > SINGLE_FAILURE_COUNT ? 's' : ''} out of reach`)
  process.exitCode = 1
} else {
  console.log(`${Object.keys(CODEBASE_KNOBS).length} project settings, every target reachable`)
}

// A marker sits directly above what it describes, a rule entry or a key inside `settings`
function findFollowingRuleId(lines: string[], markerIndex: number) {
  const following = lines[markerIndex + NEXT_LINE_OFFSET] ?? ''
  const ruleId = (/^\s*'(?<ruleId>[^']+)': \[/u).exec(following)?.groups?.ruleId

  return ruleId === undefined ? [] : [ruleId]
}

async function findUnexposedMarkedRules() {
  const targetedRuleIds = new Set(Object.values(CODEBASE_KNOBS).flatMap((knob) => {
    return knob.rules.map(({ rule }) => {
      return rule
    })
  }))

  const markedRuleIds = await readMarkedRuleIds()

  return markedRuleIds
    .filter((ruleId) => {
      return !targetedRuleIds.has(ruleId)
    })
    .map((ruleId) => {
      return `'${ruleId}' is marked as belonging to the project but no project setting targets it`
    })
}

function findUnreachableTargets() {
  return Object.entries(CODEBASE_KNOBS).flatMap(([knobName, knob]) => {
    const unreachableRules = knob.rules
      .filter(({ option, rule }) => {
        return !isRuleOptionConfigured(rule, option)
      })
      .map(({ option, rule }) => {
        return `${knobName}: no configured '${rule}' carries the '${option}' option`
      })

    const unreachableSettings = knob.settings
      .filter(({ key, namespace }) => {
        return !isSettingConfigured(namespace, key)
      })
      .map(({ key, namespace }) => {
        return `${knobName}: no configuration sets '${key}' under the '${namespace}' settings`
      })

    return [...unreachableRules, ...unreachableSettings]
  })
}

function isRuleOptionConfigured(ruleId: string, option: string) {
  return flatConfigs.some((config) => {
    const entry = config.rules?.[ruleId]
    const firstOption = Array.isArray(entry) ? entry[FIRST_OPTION_INDEX] : undefined

    /*
     * The index signature makes the second check look redundant to the type system, which is
     * exactly what this verifies: whether the option is really there
     */
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- See comment above
    return isPlainObject(firstOption) && Object.hasOwn(firstOption, option)
  })
}

function isSettingConfigured(namespace: string, key: string) {
  return flatConfigs.some((config) => {
    const namespaceSettings = config.settings?.[namespace]

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- See the comment above
    return isPlainObject(namespaceSettings) && Object.hasOwn(namespaceSettings, key)
  })
}

async function readMarkedRuleIds() {
  const fileNames = await readPluginConfigFileNames()
  const contents = await Promise.all(fileNames.map(async (fileName) => {
    return readFile(fileName, 'utf8')
  }))

  return contents.flatMap((content) => {
    return readMarkedRuleIdsFromLines(content.split('\n'))
  })
}

function readMarkedRuleIdsFromLines(lines: string[]) {
  return lines.flatMap((line, index) => {
    return line.includes(PROJECT_MARKER) ? findFollowingRuleId(lines, index) : []
  })
}

async function readPluginConfigFileNames() {
  const entries = await readdir(PLUGIN_CONFIGURATIONS_DIRECTORY, { recursive: true, withFileTypes: true })

  return entries
    .filter((entry) => {
      return entry.isFile() && entry.name.endsWith('.ts')
    })
    .map((entry) => {
      return path.join(entry.parentPath, entry.name)
    })
}
