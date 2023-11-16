#! /usr/bin/env node

import { readPackageUp } from 'read-package-up';


(async () => {
  console.log(import.meta.url)
  // const packageJson = await readPackageUp({ cwd: import.meta.url })
  const { packageJson: { dependencies } } = await readPackageUp()

  const pluginNames = [Object.keys(dependencies).filter((dependency) => dependency.includes('eslint-plugin'))[0]]

  for (const pluginName of pluginNames) {
    const { default: plugin } = await import(pluginName)

    console.log(plugin)

    const { rules } = plugin
    const rulesArray = Object.entries(rules)

    const [, { meta }] = rulesArray[0]

    console.log(meta)
  }
})()
