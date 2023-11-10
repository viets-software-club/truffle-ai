# resource "local_file" "kubeconfig" {
#   count    = var.write_kubeconfig ? 1 : 0
#   content  = data.digitalocean_kubernetes_cluster.this.kube_config[0].raw_config
#   filename = "${path.root}/kubeconfig"
# }
