output "prod_load_balancer_output" {
  value = data.digitalocean_loadbalancer.prod.ip
}
output "dev_load_balancer_output" {
  value = data.digitalocean_loadbalancer.dev.ip
}