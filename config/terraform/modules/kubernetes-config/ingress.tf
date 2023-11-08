resource "helm_release" "nginx_ingress" {
  name      = "nginx-ingress-controller"
  namespace = data.kubernetes_namespace.this.metadata.0.name

  repository = "https://charts.bitnami.com/bitnami"
  chart      = "nginx-ingress-controller"

  set {
    name  = "service.type"
    value = "LoadBalancer"
  }
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-name"
    value = format("%s-nginx-ingress", var.cluster_name)
  }

}

resource "kubernetes_ingress" "this" {
  wait_for_load_balancer = true
  metadata {
    name      = "test-ingress"
    namespace = data.kubernetes_namespace.this.metadata.0.name
    annotations = {
      "kubernetes.io/ingress.class"          = "nginx"
      "ingress.kubernetes.io/rewrite-target" = "/"
    }
  }
  spec {
    rule {
      host = var.subdomain != "" ? "${var.subdomain}.${var.domain}" : var.domain
      http {
        path {
          path = "/api"
          backend {
            service_name = kubernetes_service.graphql_backend_service.metadata.0.name
            service_port = 3001
          }
        }
        path {
          path = "/"
          backend {
            service_name = kubernetes_service.ui_service.metadata.0.name
            service_port = 3000
          }
        }
      }
    }
  }
}
