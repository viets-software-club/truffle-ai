resource "kubernetes_default_service_account" "this" {
  metadata {
    namespace = var.namespace_name
  }
  image_pull_secret {
    name = "${var.repo_name}-dockerconfigjson-secret"
  }
}
