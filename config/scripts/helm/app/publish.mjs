#!/usr/bin/env zx
import 'zx/globals'

$.verbose = true
const changeCause = 'Production'
const repoName = process.env.REPO_NAME
const orgName = process.env.ORG_NAME
const env = 'production'
const promptDryRun = await question('Dry Run?\n')
const isDryRun = promptDryRun === 'y' || promptDryRun === ''
const namespace = env
const hosts = ['truffle.tools']
const chartName = `chart-${env}`
const args = [
  '--install',
  '--atomic',
  '--create-namespace',
  '--namespace',
  namespace,
  '--set',
  `image.repositoryUrl=ghcr.io/${orgName}/${repoName}/stable`,
  `--set-json`,
  `changeCause=${JSON.stringify(changeCause)}`,
  '--set-json',
  `hosts=${JSON.stringify(hosts)}`,
  '--values',
  `outputs/_configMaps/values.${env}.yml`,
  '--values',
  `outputs/_secrets/values.${env}.yml`,
  '--cleanup-on-fail'
]
if (isDryRun) args.push('--dry-run')
const upgradeCommand = $`helm upgrade ${args} ${chartName} oci://ghcr.io/${$.env.ORG_NAME}/${$.env.REPO_NAME}/stable/app-chart`
await spinner('working...', () => upgradeCommand)
console.log(hosts)
