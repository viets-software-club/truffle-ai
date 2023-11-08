resource "local_file" "kubeconfig" {
  depends_on = [var.cluster_id]
  count      = var.write_kubeconfig ? 1 : 0
  content    = var.cluster_raw_config
  filename   = "${path.root}/kubeconfig"
}
