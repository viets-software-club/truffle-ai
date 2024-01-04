# Not used to not invalidate the Certificate, through too many retries
# module "certificate" {
#   source    = "../../modules/certificate"
#   repo_name = var.repo_name
#   domain    = var.domain
# }

# Ingress Controller (i.e. Load Balancer is set up by app-chart)

# setup DNS with LB IP
module "dns" {
  source           = "../../modules/dns"
  load_balancer_ip = data.digitalocean_loadbalancer.this.ip
  domain           = var.domain
}
