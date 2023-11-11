resource "kubernetes_ingress_v1" "this" {
  wait_for_load_balancer = true
  metadata {
    name      = "test-ingress"
    namespace = var.namespace_name
    annotations = {
      "kubernetes.io/ingress.class"          = "nginx"
      "ingress.kubernetes.io/rewrite-target" = "/"
    }
  }
  spec {
    ingress_class_name = "nginx"
    rule {
      host = var.fqdn
      http {
        path {
          path_type = "Prefix"
          path      = "/api"
          backend {
            service {
              name = kubernetes_service.graphql_backend_service.metadata.0.name
              port {
                number = 3001
              }
            }
          }
        }
        path {
          path_type = "Prefix"
          path      = "/"
          backend {
            service {
              name = kubernetes_service.ui_service.metadata.0.name
              port {
                number = 3000
              }
            }
          }
        }
      }
    }
  }
}
