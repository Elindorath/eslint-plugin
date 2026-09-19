type ExportedConfigs = { [configName: string]: readonly RulesCarrier[] | RulesCarrier; }

type RulesCarrier = { rules?: { [ruleId: string]: unknown; }; }

/** Collects every rule identifier a consumer can reach through the exported configurations. */
export function getReachableRuleIdSet(configs: ExportedConfigs) {
  const configEntries = Object.values(configs).flatMap((config) => {
    return isConfigList(config) ? config : [config]
  })

  const ruleIds = configEntries.flatMap((configEntry) => {
    return Object.keys(configEntry.rules ?? {})
  })

  return new Set(ruleIds)
}

function isConfigList(config: readonly RulesCarrier[] | RulesCarrier): config is readonly RulesCarrier[] {
  return Array.isArray(config)
}
