#!/usr/bin/env zx
// upgrades ingress
import 'zx/globals'
$.verbose = true
const CERT_ID = (await $`doctl compute certificate list --format ID --no-header`).stdout.replaceAll(
  '\n',
  ''
)
const REPO_NAME = process.env.REPO_NAME || 'truffle-ai'
const getCommaSeparatedConfig = (isProduction) => {
  const config = {
    name: 'nginx-ingress-controller',
    config: {
      'use-proxy-protocol': 'true',
      'use-forwarded-headers': 'true'
    },
    service: {
      type: 'LoadBalancer',
      targetPorts: {
        https: '80'
      },
      annotations: {
        'service.beta.kubernetes.io/do-loadbalancer-name': `${REPO_NAME}-nginx-ingress-controller-${
          isProduction ? 'production' : 'dev'
        }`,
        'service.beta.kubernetes.io/do-loadbalancer-certificate-id': CERT_ID,
        'service.beta.kubernetes.io/do-loadbalancer-protocol': 'https',
        'service.beta.kubernetes.io/do-loadbalancer-size-unit': '1',
        'service.beta.kubernetes.io/do-loadbalancer-disable-lets-encrypt-dns-records': 'false',
        'service.beta.kubernetes.io/do-loadbalancer-redirect-http-to-https': 'true',
        'service.beta.kubernetes.io/do-loadbalancer-enable-proxy-protocol': 'true'
      }
    }
  }
  const commaSeparated = Object.keys(config)
    .map((key) => {
      return `${key}=${JSON.stringify(config[key])}`
    })
    .join(',')
  return commaSeparated
}
const promptEnvironment = await question("Install prod, then type 'production'?\n")
const isProduction = promptEnvironment === 'production'
await spinner(
  'working...',
  () =>
    $`helm upgrade --timeout 10m0s --atomic --install --set-json ${getCommaSeparatedConfig(
      isProduction
    )} ing-controller-release oci://registry-1.docker.io/bitnamicharts/nginx-ingress-controller`
)

console.log(chalk.blue('Done!'))
