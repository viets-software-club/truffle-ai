resource "helm_release" "nginx_ingress" {
  name = "nginx-ingress-controller"

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
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-certificate-id"
    value = tostring(data.digitalocean_certificate.this.uuid)
    type = "string"
  }
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-protocol"
    value = "https"
  }
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-size-unit"
    value = "1"
    type = "string"
  }
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-disable-lets-encrypt-dns-records"
    value = "false"
    type = "string"
  }
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-redirect-http-to-https"
    value = "true"
    type = "string"
  }
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-enable-proxy-protocol"
    value = "true"
    type = "string"
  }
}
data "kubernetes_service" "nginx_ingress_controller" {
  depends_on = [helm_release.nginx_ingress]
  metadata {
    name = "nginx-ingress-controller"
  }
}
resource "kubernetes_ingress_v1" "this" {
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
    ingress_class_name = "nginx"
    rule {
      host = var.subdomain != "" ? "${var.subdomain}.${var.domain}" : var.domain
      http {
        path {
          path = "/api"
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
          path = "/"
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
