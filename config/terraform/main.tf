locals {
  cluster_name                 = "${var.repo_name}-cluster"
  git_commit_tag_shortened     = substr(var.git_commit_tag, 0, 13)
  git_commit_message_shortened = substr(var.git_commit_message, 0, 30)
  resource_prefix              = var.is_cli != "" ? "exp${substr(var.git_commit_tag, 0, 13)}" : substr(var.git_commit_tag, 0, 13)
}

module "doks-cluster" {
  source       = "./modules/doks-cluster"
  cluster_name = local.cluster_name
}
module "doks-namespace" {
  source       = "./modules/doks-namespace"
  cluster_name = local.cluster_name

}
module "doks-vars" {
  source                        = "./modules/doks-vars"
  cluster_name                  = local.cluster_name
  secret_github_api_token       = var.secret_github_api_token
  secret_open_api_key           = var.secret_open_api_key
  secret_scraping_bot_api_key   = var.secret_scraping_bot_api_key
  secret_scraping_bot_user_name = var.secret_scraping_bot_user_name
  secret_supabase_anon_key      = var.secret_supabase_anon_key
  secret_supabase_service_key   = var.secret_supabase_service_key
  secret_ghcr_access_token      = var.secret_ghcr_access_token
  secret_ghcr_username          = var.secret_ghcr_username
  repo_name                     = var.repo_name

}
module "kubernetes-config" {
  source                 = "./modules/kubernetes-config"
  cluster_name           = module.doks-cluster.cluster_name
  cluster_id             = module.doks-cluster.cluster_id
  write_kubeconfig       = var.write_kubeconfig
  domain                 = var.domain
  subdomain              = var.is_dev_workspace ? "${var.git_commit_tag}.${terraform.workspace}" : (var.is_prod_workspace ? "" : terraform.workspace)
  prefix                 = var.is_dev_workspace ? "${var.repo_name}-${terraform.workspace}-${local.resource_prefix}" : "${var.repo_name}-${terraform.workspace}"
  change_cause           = "${local.git_commit_tag_shortened}: ${local.git_commit_message_shortened}"
  repo_name              = var.repo_name
  image_repository_url   = "${var.image_repository_url}/${terraform.workspace}"
  image_tag              = var.image_tag
  config_map_dir         = "config/envs"
  cluster_raw_config     = module.doks-cluster.cluster_raw_config
  cluster_ca_certificate = module.doks-cluster.cluster_ca_certificate
  cluster_endpoint       = module.doks-cluster.cluster_endpoint
  cluster_token          = module.doks-cluster.cluster_endpoint

}

module "dns-records" {
  source           = "./modules/dns-records"
  domain           = var.domain
  load_balancer_ip = module.kubernetes-config.load_balancer_ip
}
