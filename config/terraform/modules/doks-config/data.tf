# data "digitalocean_kubernetes_cluster" "this" {
#   name = var.cluster_name
# }

# # needed because certificate 
# data "digitalocean_certificate" "this" {
#   depends_on = [digitalocean_certificate.this]
#   name       = "${var.repo_name}-certificate"
# }

# needed because namespace needs to be referenced
# data "kubernetes_namespace" "this" {
#   metadata {
#     name = terraform.workspace
#   }
# }
# needed because helm_release resource doesn't have attribute for load balancer ip
data "kubernetes_service" "nginx_ingress_controller" {
  depends_on = [helm_release.nginx_ingress]
  metadata {
    name = "nginx-ingress-controller"
  }
}
# data "kubernetes_ingress" "this" {
#   metadata {
#     name = "${var.repo_name}-${terraform.workspace}"
#   }
# }
