# terraform module

Terraform is used to get the infrastructure started, to deploy the application we use Helm. See the `k8s` folder for this.
The terraform module is splitted in two workspaces. One creates the cluster first, after that the second is used to create the HTTPS certificate and load balancer.

Create in Terraform cloud three workspaces `do-cluster-dev`, `do-cluster-prod`, `do-setup`.

