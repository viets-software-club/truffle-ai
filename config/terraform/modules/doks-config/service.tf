resource "kubernetes_service" "graphql_backend_service" {
  metadata {
    name      = "${var.prefix}-graphql-backend-service"
    namespace = var.namespace_name
  }
  spec {
    selector = {
      app = local.graphql_backend_app_selector
    }

    port {
      port        = 3001
      target_port = 3001
    }
  }
}

resource "kubernetes_service" "ui_service" {
  metadata {
    name      = "${var.prefix}-ui-service"
    namespace = var.namespace_name
  }
  spec {
    selector = {
      app = local.ui_app_selector
    }

    port {
      port        = 3000
      target_port = 3000
    }
  }
}

resource "kubernetes_service" "graphql_server_service" {
  metadata {
    name      = "${var.prefix}-graphql-server-service"
    namespace = var.namespace_name
  }
  spec {
    selector = {
      app = local.graphql_backend_app_selector
    }

    port {
      port        = 3002
      target_port = 3002
    }
  }
}
