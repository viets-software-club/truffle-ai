resource "kubernetes_namespace" "this" {
  metadata {
    annotations   = null
    name          = var.namespace_name
    generate_name = null
    labels = {
      name = var.namespace_name
    }
  }
}
