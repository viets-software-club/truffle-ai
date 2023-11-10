data "digitalocean_kubernetes_cluster" "this" {
  depends_on = [module.doks-cluster]
  name       = "${var.repo_name}-cluster"
}
