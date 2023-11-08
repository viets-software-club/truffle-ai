resource "kubernetes_namespace" "this" {
  metadata {
    annotations   = null
    name          = terraform.workspace
    generate_name = null
    labels = {
      name = "${terraform.workspace}"
    }
  }
}
