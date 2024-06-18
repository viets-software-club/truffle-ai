data "digitalocean_certificate" "this" {
  name = "${var.repo_name}-certificate"
}
data "digitalocean_loadbalancer_prod" "this" {
  name = var.loadbalancer_prod
}

data "digitalocean_loadbalancer_dev" "this" {
  name = var.loadbalancer_dev
}
