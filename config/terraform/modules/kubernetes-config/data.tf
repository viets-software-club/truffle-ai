data "digitalocean_kubernetes_cluster" "this" {
  name = var.cluster_name
}
# data "kubernetes_ingress" "this" {
#   metadata {
#     name = "${var.repo_name}-${terraform.workspace}"
#   }
# }
