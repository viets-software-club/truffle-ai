resource "kubernetes_config_map" "api_url" {
  metadata {
    name      = "${var.repo_name}-${var.resource_prefix}-graphql-url-config"
    namespace = var.namespace_name
  }
  data = {
    GRAPHQL_URL = kubernetes_service.ui_service.metadata.0.name
  }
}
