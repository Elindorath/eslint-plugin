'use strict';

const path = require('path');

const { ESLint, CLIEngine } = require('eslint');
const Promise = require('bluebird');
const fs = require('fs-extra');


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const configsPath = path.resolve(__dirname, 'build', 'configs.js');


module.exports = {
  buildPrefixedRulesFromConfig,
  getRuleConfig,
  compileConfig,
  generateEslintConfig,
};


function buildPrefixedRulesFromConfig(prefix, rules, config) {
  return rules.reduce((agg, rule) => ({
    ...agg,
    [rule]: [OFF],
    [`${prefix}/${rule}`]: getRuleConfig(rule, config),
  }), {});
}

function getRuleConfig(rule, config) {
  const { rules: { [rule]: ruleConfig } } = config;

  return ruleConfig;
}

async function compileConfig() {
  await fs.emptyDir(path.resolve(__dirname, 'build'));

  // eslint-disable-next-line @elindorath/security/detect-non-literal-fs-filename -- Safe as no value holds user input
  const files = await fs.readdir(`${path.resolve(__dirname, 'projects')}`);

  const configs = await Promise.reduce(files, async (agg, fileName) => {
    const key = path.basename(fileName, '.js');
    const eslint = new ESLint({
      useEslintrc: false,
      baseConfig: require(path.resolve(__dirname, 'projects', fileName)),
    });

    const config = await eslint.calculateConfigForFile(path.resolve(__dirname, 'projects', fileName));

    return {
      ...agg,
      [key]: {
        ...config,
        // eslint-disable-next-line no-undefined -- This is required when dealing with JSON
        ignorePatterns: undefined,
      },
    };
  }, {});

  return fs.outputFile(configsPath, `module.exports = ${JSON.stringify(configs, null, 2)};`);
}

function generateEslintConfig(config) {
  const configs = require(configsPath);
  const { extends: baseExtends, rules: baseRules, overrides } = config;

  const basePluginsUnique = new Set(baseExtends.flatMap((name) => configs[normalizeConfigName(name)].plugins));

  const overridesWithoutDuplicatePlugins = overrides.map((overrideConfig) => {
    const { files, ...overrideConfigWithoutFiles } = overrideConfig;
    const { extends: overridesExtend, rules: overridesRules } = overrideConfigWithoutFiles;

    const cliEngine = new CLIEngine({
      useEslintrc: false,
      baseConfig: overrideConfigWithoutFiles,
    });

    const pluginsUnique = new Set(overridesExtend.flatMap((name) => configs[normalizeConfigName(name)].plugins));

    // eslint-disable-next-line no-unused-vars -- The ignorePatterns var is not used, we use rest operator to exclude it
    const { ignorePatterns, ...computedConfig } = cliEngine.getConfigForFile('./.eslintrc.js');

    return {
      ...computedConfig,
      plugins: [...differenceRight(basePluginsUnique, pluginsUnique)],
      rules: {
        ...computedConfig.rules,
        ...baseRules,
        ...overridesRules,
      },
      files,
    };
  });

  return {
    ...config,
    overrides: overridesWithoutDuplicatePlugins,
  };
}

function normalizeConfigName(name) {
  return name.slice(32);
}

function differenceRight(setA, setB) {
  const diff = new Set(setB);

  for (const element of setA)
    diff.delete(element);

  return diff;
}
