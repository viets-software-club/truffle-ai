#!/usr/bin/env zx

if (!argv._[0]) {
  console.error('Missing argument <app-namespace>')
  process.exit(1)
}
argv._.map(async (namespace) => {
  try {
    await $`helm uninstall chart-${namespace} --namespace=${namespace}`
  } catch {}
  try {
    await $`kubectl delete namespace ${namespace}`
  } catch {}
})
