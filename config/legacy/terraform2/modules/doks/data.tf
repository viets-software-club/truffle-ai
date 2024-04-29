data "kubernetes_service" "nginx_ingress_controller" {
  depends_on = [helm_release.nginx_ingress]
  metadata {
    name = "nginx-ingress-controller"
  }
}
