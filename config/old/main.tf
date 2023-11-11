# locals {
#   cluster_name                 = "${var.repo_name}-cluster"
#   git_commit_tag_shortened     = substr(var.git_commit_tag, 0, 13)
#   git_commit_message_shortened = substr(var.git_commit_message, 0, 30)
# }
# locals {
#   change_cause = "${local.git_commit_tag_shortened}: ${local.git_commit_message_shortened}"
# }
# module "do-certificate" {
#   source    = "./modules/do-certificate"
#   repo_name = var.repo_name
#   domain    = var.domain
# }
# module "doks-cluster" {
#   source    = "./modules/doks-cluster"
#   repo_name = var.repo_name
# }
module "doks-namespace" {
  # depends_on     = [module.doks-cluster]
  source         = "./modules/doks-namespace"
  namespace_name = terraform.workspace
  # namespace_name = each.key
}
# module "doks-variables" {
#   depends_on     = [module.doks-cluster, module.doks-namespace]
#   source         = "./modules/doks-variables"
#   for_each       = var.environment_set
#   namespace_name = each.key
#   //
#   secret_github_api_token       = var.secret_github_api_token
#   secret_open_api_key           = var.secret_open_api_key
#   secret_scraping_bot_api_key   = var.secret_scraping_bot_api_key
#   secret_scraping_bot_user_name = var.secret_scraping_bot_user_name
#   secret_supabase_anon_key      = var.secret_supabase_anon_key
#   secret_supabase_service_key   = var.secret_supabase_service_key
#   secret_ghcr_access_token      = var.secret_ghcr_access_token
#   secret_ghcr_username          = var.secret_ghcr_username
#   repo_name                     = var.repo_name
# }
# module "doks-shared" {
#   depends_on = [module.doks-cluster]
#   source     = "./modules/doks-shared"
#   repo_name  = var.repo_name
#   cert_uuid  = module.do-certificate.cert_uuid
# }
# module "commit" {
#   depends_on                 = [module.doks-cluster, module.doks-namespace]
#   source                     = "./environment/commit"
#   additional_resource_prefix = var.is_cli != "" ? "exp${local.git_commit_tag_shortened}" : local.git_commit_tag_shortened
#   image_tag                  = var.git_commit_tag
#   repo_name                  = var.repo_name
#   change_cause               = local.change_cause
#   image_repository_url       = var.image_repository_url
#   fqdn                       = "${var.git_commit_tag}.commit.${var.domain}"

# }
# module "staging" {
#   depends_on           = [module.doks-cluster, module.doks-namespace]
#   source               = "./environment/staging"
#   image_tag            = "latest"
#   repo_name            = var.repo_name
#   change_cause         = local.change_cause
#   image_repository_url = var.image_repository_url
#   fqdn                 = "staging.${var.domain}"
# }
# module "production" {
#   depends_on           = [module.doks-cluster, module.doks-namespace]
#   source               = "./environment/production"
#   image_tag            = "latest"
#   repo_name            = var.repo_name
#   change_cause         = local.change_cause
#   image_repository_url = var.image_repository_url
#   fqdn                 = "production.${var.domain}"
# }
# module "dns" {
#   source           = "./modules/dns"
#   domain           = "truffle.tools"
#   load_balancer_ip = "1.1.1.1"
# }
