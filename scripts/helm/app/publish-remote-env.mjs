#!/usr/bin/env zx
import 'zx/globals'

$.verbose = true
const sha = (await $`git log -n 1 --pretty=format:"%H"`).stdout
console.log()
const changeCause = (
	await $`git log --oneline --format="%h %s" -n 1`
).stdout.substring(0, 63)
const repoName = process.env.REPO_NAME
const orgName = process.env.ORG_NAME
const env = process.env.ENVIRONMENT || 'commit'
const promptTag = await question('Include git commit tag?\n')
const hasTag = promptTag === 'y' || promptTag === ''
const promptDryRun = await question('Dry Run?\n')
const isDryRun = promptDryRun === 'y' || promptDryRun === ''
const shortSha = sha.substring(0, 7)
const namespace = hasTag ? `${env}-${shortSha}` : env
const hosts = hasTag
	? [`${sha}.${env}.truffle.tools`, `${shortSha}.${env}.truffle.tools`]
	: [`${env}.truffle.tools`]
const chartName = hasTag ? `chart-${env}-${shortSha}` : `chart-${env}`
const args = [
	'--install',
	'--atomic',
	'--create-namespace',
	'--namespace',
	namespace,
	'--set',
	`image.repositoryUrl=ghcr.io/${orgName}/${repoName}/dev`,
	'--set',
	`image.tag=${sha}`,
	// '--set-json',
	// `changeCause=${JSON.stringify(changeCause)}`,
	'--set-json',
	`hosts=${JSON.stringify(hosts)}`,
	'--values',
	`outputs/_configMaps/values.${env}.yml`,
	'--values',
	`outputs/_secrets/values.${env}.yml`,
	'--cleanup-on-fail'
]
if (isDryRun) args.push('--dry-run')
const upgradeCommand = $`helm upgrade ${args} ${chartName} ./config/charts/app-chart`
await spinner('working...', () => upgradeCommand)
console.log(hosts)
