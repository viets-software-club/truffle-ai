module "dns" {
  source           = "./module/dns"
  prod_load_balancer_ip = data.digitalocean_loadbalancer.prod.ip
  dev_load_balancer_ip = data.digitalocean_loadbalancer.dev.ip
  domain           = var.domain
}
