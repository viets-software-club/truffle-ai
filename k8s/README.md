# k8s

This directory contains scripts for deployment to the Kubernetes cluster and the charts that get deployed.
The `values` folder will contain the values for deployment once they are generated with the top-level `values` module.

There is a script `publish-commit` to publish commits to the Kubernetes cluster and a script `publish-release` that only publishes released version from GitHub on the cluster.