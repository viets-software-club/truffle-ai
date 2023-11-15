data "digitalocean_certificate" "this" {
  name = var.cluster_name
}
data "digitalocean_loadbalancer" "this" {
  name = "nginx-ingress-controller"
}