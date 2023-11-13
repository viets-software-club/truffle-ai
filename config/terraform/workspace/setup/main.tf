module "certificate" {
  source    = "../../modules/certificate"
  repo_name = var.repo_name
  domain    = var.domain
}


module "doks" {
  source    = "../../modules/doks"
  repo_name = var.repo_name
  cert_uuid = module.certificate.cert_uuid
}
module "dns" {
  source           = "../../modules/dns"
  load_balancer_ip = module.doks.load_balancer_ip
  domain           = var.domain
}
