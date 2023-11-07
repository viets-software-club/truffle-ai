resource "kubernetes_service" "graphql_backend_service" {
  metadata {
    name      = "${var.prefix}-graphql-backend-service"
    namespace = kubernetes_namespace.this.metadata.0.name
  }
  spec {
    selector = {
      app = kubernetes_deployment.this.metadata.0.name
    }

    port {
      port        = 3001
      target_port = 3001
    }
  }
}

resource "kubernetes_service" "ui_service" {
  metadata {
    name      = "${var.prefix}-graphql-backend-service"
    namespace = kubernetes_namespace.this.metadata.0.name
  }
  spec {
    selector = {
      app = kubernetes_deployment.this.metadata.0.name
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
    namespace = kubernetes_namespace.this.metadata.0.name
  }
  spec {
    selector = {
      app = kubernetes_deployment.this.metadata.0.name
    }

    port {
      port        = 3002
      target_port = 3002
    }
  }
}
