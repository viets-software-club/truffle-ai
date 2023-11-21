#!/usr/bin/env zx
import 'zx/globals'

$.verbose = true
const sha = (await $`git log -n 1 --pretty=format:"%H"`).stdout
console.log()
const changeCause = (await $`git log --oneline --format="%h %s" -n 1`).stdout.substring(0, 63)
const repoName = process.env.REPO_NAME
const orgName = process.env.ORG_NAME
const env = process.env.ENVIRONMENT
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
  `image.repositoryUrl=ghcr.io/${orgName}/${repoName}/`,
  '--set',
  `image.tag=${sha}`,
  `--set`,
  `changeCause=${changeCause}`,
  '--set-json',
  `hosts=${JSON.stringify(hosts)}`,
  '--values',
  `outputs/_configMaps/values.${env}.yml`,
  '--values',
  `outputs/_secrets/values.${env}.yml`
]
if (isDryRun) args.push('--dry-run')
await spinner('working...', () => $`helm upgrade ${args} ${chartName} ./config/charts/app-chart`)
console.log(hosts)
