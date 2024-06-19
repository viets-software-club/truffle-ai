data "digitalocean_loadbalancer" "prod" {
  name = var.prod_loadbalancer_name
}

data "digitalocean_loadbalancer" "dev" {
  name = var.dev_loadbalancer_name
}
