resource "kubernetes_default_service_account" "this" {
  metadata {
    namespace = terraform.workspace
  }
  image_pull_secret {
    name = "${var.repo_name}-dockerconfigjson-secret"
  }
}
