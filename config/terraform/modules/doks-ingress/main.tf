resource "kubernetes_ingress_v1" "this" {
  wait_for_load_balancer = true
  metadata {
    name      = "${var.repo_name}-test-ingress"
    namespace = var.namespace_name
    annotations = {
      "kubernetes.io/ingress.class"          = "nginx"
      "ingress.kubernetes.io/rewrite-target" = "/"
    }
  }
  spec {
    ingress_class_name = "nginx"
    dynamic "rule" {
      for_each = var.hosts
      content {
        host = rule.value["host"]
        http {
          path {
            path_type = "Prefix"
            path      = "/api/*"
            backend {
              service {
                name = "${rule.value["resource_prefix"]}-graphql-backend-service"
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
                name = "${rule.value["resource_prefix"]}-ui-service"
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
}
