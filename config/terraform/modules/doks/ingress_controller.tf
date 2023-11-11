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
    value = "${var.repo_name}-cluster-nginx-ingress"
    type  = "string"
  }
  # set {
  #   name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-certificate-id"
  #   value = var.cert_uuid
  #   type  = "string"
  # }
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-protocol"
    value = "http"
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
  # set {
  #   name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-redirect-http-to-https"
  #   value = "true"
  #   type  = "string"
  # }
  set {
    name  = "service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-enable-proxy-protocol"
    value = "true"
    type  = "string"
  }
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
    name  = "service.targetPorts.http"
    value = "80"
    type  = "string"
  }
}
