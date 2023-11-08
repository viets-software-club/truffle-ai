resource "kubernetes_service" "graphql_backend_service" {
  metadata {
    name      = "${var.prefix}-graphql-backend-service"
    namespace = data.kubernetes_namespace.this.metadata.0.name
  }
  spec {
    selector = {
      app = kubernetes_deployment.graphql_backend_deployment.metadata.0.name
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
    namespace = data.kubernetes_namespace.this.metadata.0.name
  }
  spec {
    selector = {
      app = kubernetes_deployment.ui_deployment.metadata.0.name
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
    namespace = data.kubernetes_namespace.this.metadata.0.name
  }
  spec {
    selector = {
      app = kubernetes_deployment.graphql_backend_deployment.metadata.0.name
    }

    port {
      port        = 3002
      target_port = 3002
    }
  }
}
