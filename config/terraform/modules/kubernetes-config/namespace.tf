resource "kubernetes_namespace" "this" {
  metadata {
    annotations   = null
    name          = "${var.namespace_prefix}-${terraform.workspace}"
    generate_name = null
    labels = {
      name = "${terraform.workspace}"
    }
  }
}
