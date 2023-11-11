locals {
  cluster_name                 = "${var.repo_name}-cluster"
  git_commit_tag_shortened     = substr(var.git_commit_tag, 0, 13)
  git_commit_message_shortened = substr(var.git_commit_message, 0, 30)
  change_cause                 = "${local.git_commit_tag_shortened}: ${local.git_commit_message_shortened}"
  resource_prefix              = var.is_prefix_commit_sha ? (var.is_cli ? "${var.namespace_name}-exp${local.git_commit_tag_shortened}" : "${var.namespace_name}-${local.git_commit_tag_shortened}") : var.namespace_name
}

module "doks-namespace" {
  source         = "../../modules/doks-namespace"
  namespace_name = terraform.workspace
}

module "doks-variables" {
  depends_on                    = [module.doks-namespace]
  source                        = "../../modules/doks-variables"
  namespace_name                = var.namespace_name
  secret_github_api_token       = var.secret_github_api_token
  secret_open_api_key           = var.secret_open_api_key
  secret_scraping_bot_api_key   = var.secret_scraping_bot_api_key
  secret_scraping_bot_user_name = var.secret_scraping_bot_user_name
  secret_supabase_anon_key      = var.secret_supabase_anon_key
  secret_supabase_service_key   = var.secret_supabase_service_key
  secret_ghcr_access_token      = var.secret_ghcr_access_token
  secret_ghcr_username          = var.secret_ghcr_username
  repo_name                     = var.repo_name
  config_maps                   = data.kubectl_file_documents.docs.manifests
}

module "doks-single-deploy" {
  depends_on           = [module.doks-namespace, module.doks-variables]
  source               = "../../modules/doks-single-deploy"
  namespace_name       = var.namespace_name
  resource_prefix      = local.resource_prefix
  fqdn                 = var.fqdn
  image_repository_url = var.image_repository_url
  image_tag            = var.image_tag
  change_cause         = local.change_cause
  repo_name            = var.repo_name
}
