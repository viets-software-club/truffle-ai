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
    value = var.cert_uuid
    type  = "string"
  }
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-protocol"
    value = "https"
  }
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-size-unit"
    value = "1"
    type  = "string"
  }
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-disable-lets-encrypt-dns-records"
    value = "false"
    type  = "string"
  }
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-redirect-http-to-https"
    value = "true"
    type  = "string"
  }
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-enable-proxy-protocol"
    value = "true"
    type  = "string"
  }
  # set {
  #   name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-tls-passthrough"
  #   value = "true"
  #   type  = "string"
  # }
  # set {
  #   name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-tls-ports"
  #   value = "443"
  #   type  = "string"
  # }
  # set {
  #   name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-hostname"
  #   value = var.domain
  #   type  = "string"
  # }
  set {
    name  = "config.use-proxy-protocol"
    value = "true"
    type  = "string"
  }
  set {
    name  = "config.use-forwarded-headers"
    value = "true"
    type  = "string"
  }
  set {
    name  = "service.targetPorts.https"
    value = "80"
    type  = "string"
  }
}


# resource "digitalocean_loadbalancer" "this" {
#   name                   = format("%s-nginx-ingress2", var.cluster_name)
#   region                 = "fra1"
#   size                   = "lb-small"
#   enable_proxy_protocol  = true
#   redirect_http_to_https = true

#   forwarding_rule {
#     certificate_name = "${var.repo_name}-certificate"
#     entry_port       = 80
#     entry_protocol   = "http"

#     target_port     = 443
#     target_protocol = "https"
#   }
#   forwarding_rule {
#     certificate_name = "${var.repo_name}-certificate"
#     entry_port       = 443
#     entry_protocol   = "http"

#     target_port     = 443
#     target_protocol = "https"
#   }

#   healthcheck {
#     port     = 22
#     protocol = "tcp"
#   }

#   # droplet_ids = [digitalocean_droplet.web.id]
# }

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
      host = var.subdomain != "" ? "${var.subdomain}.${var.domain}" : var.domain
      http {
        path {
          path_type = "Prefix"
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
          path_type = "Prefix"
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
