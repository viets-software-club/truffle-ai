data "digitalocean_kubernetes_cluster" "this" {
  name = var.cluster_name
}

data "digitalocean_certificate" "this" {
  name = "${var.repo_name}-certificate"
}

data "kubernetes_namespace" "this" {
  metadata {
    name = terraform.workspace
  }
}
# data "kubernetes_ingress" "this" {
#   metadata {
#     name = "${var.repo_name}-${terraform.workspace}"
#   }
# }
