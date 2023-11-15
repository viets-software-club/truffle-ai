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
module "doks-ingress" {
  depends_on     = [module.doks-namespace]
  source         = "../../modules/doks-ingress"
  repo_name      = var.repo_name
  hosts          = var.hosts
  namespace_name = var.namespace_name
}
