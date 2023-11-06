#!/bin/sh
# destroy every pod in namespace commit after one day
doctl kubernetes cluster kubeconfig save --expiry-seconds 600 $DIGITALOCEAN_CLUSTER_NAME
kubectl get pods --namespace=commit -o go-template --template '{{range .items}}{{.metadata.name}} {{.metadata.creationTimestamp}}{{"\n"}}{{end}}' | awk '$2 <= "'$(date -d 'yesterday' -Ins --utc | sed 's/+0000/Z/')'" { print $1 }' | xargs --no-run-if-empty kubectl delete pod
