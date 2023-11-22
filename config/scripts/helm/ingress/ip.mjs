#!/usr/bin/env zx
$.verbose = false
import 'zx/globals'
console.log(
  chalk.blue(
    `Load Balancer IP is: ${
      (
        await $`kubectl get svc --namespace default ing-controller-release-nginx-ingress-controller -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`
      ).stdout
    }\n`
  )
)
