#! /usr/bin/env -S yarn tsx

import { mkdir, mkdtemp, realpath, rm, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import process from 'node:process'

import { ESLint } from 'eslint'

import { projectFiles, runtimeScenarios } from './test/runtimeScenarios.ts'

import type { Linter } from 'eslint'

import type { PluginExports, RuntimeScenario } from './test/runtimeScenarios.ts'

/**
 * `test-schema` and `test-update` read rules without running them. Here every rule an exported
 * configuration enables runs on a fixture, so that a rule throwing while loading or linting fails
 * the check. What the rules report is ignored.
 */

type Crash = {
  message: string;
  ruleId: string | undefined;
  scenarioName: string;
}

type ExportedConfigs = { [configName: string]: readonly RulesCarrier[] | RulesCarrier; }

type RulesCarrier = { rules?: { [ruleId: string]: unknown; }; }

type ScenarioEntry = [string, RuntimeScenario]

type ScenarioOutcome = {
  crashes: Crash[];
  ranRuleIds: string[];
  unparsedFiles: string[];
}

type ScenarioRun = { crash: Crash; } | { outcome: ScenarioOutcome; }

const FIRST_LINE_ONLY = 1

const temporaryDirectory = await mkdtemp(path.join(os.tmpdir(), 'test-runtime-'))
// ESLint and TypeScript compare paths, which a symbolic link in the temporary directory would fork
const fixtureDirectory = await realpath(temporaryDirectory)

try {
  await main()
} finally {
  await rm(fixtureDirectory, { force: true, recursive: true })
}

async function collectOutcome(eslint: ESLint, filePaths: string[]): Promise<ScenarioOutcome> {
  const results = await eslint.lintFiles(filePaths)

  return { crashes: [], ranRuleIds: await getRanRuleIds(eslint, filePaths), unparsedFiles: collectUnparsedFiles(results) }
}

function collectUnparsedFiles(results: ESLint.LintResult[]) {
  return results.flatMap((result) => {
    return result.messages
      .filter((message) => {
        return message.fatal ?? false
      })
      .map((message) => {
        return `${path.relative(fixtureDirectory, result.filePath)}: ${message.message.split('\n', FIRST_LINE_ONLY)[0]}`
      })
  })
}

function createScenarioLinter(scenario: RuntimeScenario, pluginExports: PluginExports, crashedRuleIds: string[]) {
  return new ESLint({
    cwd: fixtureDirectory,
    overrideConfig: [
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Rule entries written as arrays aren't inferred as ESLint's tuples
      ...scenario.getConfig(pluginExports) as Linter.Config[],
      // `jest/no-deprecated-functions` otherwise reads the version of an installed Jest, which this repository lacks
      { settings: { jest: { version: 30 } } },
      { rules: Object.fromEntries(crashedRuleIds.map((crashedRuleId): [string, Linter.RuleEntry] => {
        return [crashedRuleId, 'off']
      })) },
    ],
    overrideConfigFile: true,
  })
}

function describeCrash(error: unknown, scenarioName: string): Crash {
  // eslint-disable-next-line no-use-extend-native/no-use-extend-native -- `Error.isError` is ES2025, the rule's builtin list predates it
  if (!Error.isError(error)) {
    return { ruleId: undefined, scenarioName, message: 'non-error thrown' }
  }

  // ESLint sets `ruleId` on an error thrown while linting, and names the rule in the message of one thrown while loading
  const ruleId = ('ruleId' in error && typeof error.ruleId === 'string')
    ? error.ruleId
    : (/^Error while loading rule '(?<ruleId>[^']+)'/u).exec(error.message)?.groups?.ruleId

  return { ruleId, scenarioName, message: error.message.split('\n', FIRST_LINE_ONLY)[0] }
}

// A rule usually crashes the same way in every scenario enabling it, so it is listed once
function formatCrashes(crashes: Crash[]) {
  const scenarioNamesByCrash = new Map<string, string[]>()

  for (const crash of crashes) {
    const crashDescription = `${crash.ruleId ?? '(no rule)'} — ${crash.message}`

    scenarioNamesByCrash.set(crashDescription, [...scenarioNamesByCrash.get(crashDescription) ?? [], crash.scenarioName])
  }

  return [...scenarioNamesByCrash].map(([crashDescription, scenarioNames]) => {
    return `${crashDescription} (${scenarioNames.join(', ')})`
  })
}

function getEnabledRuleIds(configs: Array<RulesCarrier | undefined>) {
  const enabledRuleIds = configs
    .flatMap((config) => {
      return Object.entries(config?.rules ?? {})
    })
    .filter(([, ruleEntry]) => {
      const severity: unknown = Array.isArray(ruleEntry) ? ruleEntry[0] : ruleEntry

      return severity !== 'off' && severity !== 0
    })
    .map(([ruleId]) => {
      return ruleId
    })

  return new Set(enabledRuleIds)
}

async function getRanRuleIds(eslint: ESLint, filePaths: string[]) {
  const fileConfigs = await Promise.all(filePaths.map(async (filePath): Promise<RulesCarrier | undefined> => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- ESLint types the computed configuration as `any`
    return eslint.calculateConfigForFile(filePath)
  }))

  return [...getEnabledRuleIds(fileConfigs)]
}

/**
 * A crashing rule aborts the whole run, so it is turned off and the run starts over until it
 * completes, which reveals every crashing rule rather than the first one.
 */
async function lintScenario(scenarioEntry: ScenarioEntry, pluginExports: PluginExports, crashedRuleIds: string[] = []): Promise<ScenarioOutcome> {
  const run = await runScenario(scenarioEntry, pluginExports, crashedRuleIds)

  if ('outcome' in run) {
    return run.outcome
  }

  const { crash } = run

  if (crash.ruleId === undefined || crashedRuleIds.includes(crash.ruleId)) {
    return { crashes: [crash], ranRuleIds: [], unparsedFiles: [] }
  }

  const nextOutcome = await lintScenario(scenarioEntry, pluginExports, [...crashedRuleIds, crash.ruleId])

  return { ...nextOutcome, crashes: [crash, ...nextOutcome.crashes] }
}

function listConfigs(configs: ExportedConfigs) {
  return Object.values(configs).flatMap((config): RulesCarrier[] => {
    return [config].flat()
  })
}

async function main() {
  process.chdir(fixtureDirectory)

  // Imported from the fixture directory, as configurations resolve `tsconfig.json` and `package.json` from the working directory
  const { configs } = await import('../src/configs.ts')
  const { defineProject } = await import('../src/defineProject.ts')

  await writeFixtures()

  const outcomes = await Promise.all(Object.entries(runtimeScenarios).map(async (scenarioEntry) => {
    return lintScenario(scenarioEntry, { configs, defineProject })
  }))

  reportOutcomes(outcomes, getEnabledRuleIds(listConfigs(configs)))
}

function report(title: string, lines: string[]) {
  if (lines.length === 0) {
    return
  }

  process.exitCode = 1
  console.log(`===== ${title} (${lines.length}) =====`)

  for (const line of lines) {
    console.log(`  ${line}`)
  }
}

function reportOutcomes(outcomes: ScenarioOutcome[], enabledRuleIds: Set<string>) {
  const crashes = outcomes.flatMap((outcome) => {
    return outcome.crashes
  })
  const exercisedRuleIds = new Set(outcomes.flatMap((outcome) => {
    return [...outcome.ranRuleIds, ...outcome.crashes.map((crash) => {
      return crash.ruleId ?? ''
    })]
  }))

  report('Crashing rules', formatCrashes(crashes))
  report('Unparsed fixtures', outcomes.flatMap((outcome) => {
    return outcome.unparsedFiles
  }))
  report('Enabled rules no scenario runs', [...enabledRuleIds].filter((ruleId) => {
    return !exercisedRuleIds.has(ruleId)
  }))

  if (process.exitCode === undefined) {
    console.log(`Every enabled rule ran without crashing (${enabledRuleIds.size} rules)`)
  }
}

async function runScenario([scenarioName, scenario]: ScenarioEntry, pluginExports: PluginExports, crashedRuleIds: string[]): Promise<ScenarioRun> {
  const filePaths = Object.keys(scenario.files)
  const eslint = createScenarioLinter(scenario, pluginExports, crashedRuleIds)

  try {
    return { outcome: await collectOutcome(eslint, filePaths) }
  } catch (error) {
    return { crash: describeCrash(error, scenarioName) }
  }
}

async function writeFixtures() {
  const fixtureEntries = [projectFiles, ...Object.values(runtimeScenarios).map((scenario) => {
    return scenario.files
  })].flatMap((files) => {
    return Object.entries(files)
  })

  await Promise.all(fixtureEntries.map(async ([filePath, content]) => {
    await mkdir(path.dirname(filePath), { recursive: true })
    await writeFile(filePath, content)
  }))
}
