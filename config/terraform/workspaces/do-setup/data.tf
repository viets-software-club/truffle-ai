data "digitalocean_certificate" "this" {
  name = "${var.repo_name}-certificate"
}
data "digitalocean_loadbalancer" "this" {
  name = "nginx-ingress-controller"
}
