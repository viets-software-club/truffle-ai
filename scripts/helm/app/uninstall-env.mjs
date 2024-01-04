#!/usr/bin/env zx
if (!argv._[0]) {
	console.error('Requires environment to be deleted')
	process.exit(1)
}
const deployments = JSON.parse(
	(
		await $`helm ls --all-namespaces --filter chart-${argv._[0]} --no-headers -o json`
	).stdout
)
deployments.map(async (deployment) => {
	try {
		await $`helm uninstall ${deployment.name} --namespace ${deployment.namespace}`
	} catch {}
	try {
		await $`kubectl delete namespace ${deployment.namespace}`
	} catch {}
})
