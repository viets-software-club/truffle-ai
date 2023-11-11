module "init-env" {
  source                        = "../../modules/init-env"
  secret_github_api_token       = var.secret_github_api_token
  secret_open_api_key           = var.secret_open_api_key
  secret_scraping_bot_api_key   = var.secret_scraping_bot_api_key
  secret_scraping_bot_user_name = var.secret_scraping_bot_user_name
  secret_supabase_anon_key      = var.secret_supabase_anon_key
  secret_supabase_service_key   = var.secret_supabase_service_key
  secret_ghcr_access_token      = var.secret_ghcr_access_token
  secret_ghcr_username          = var.secret_ghcr_username
  repo_name                     = var.repo_name
  image_tag                     = "latest"
  git_commit_tag                = var.git_commit_tag
  git_commit_message            = var.git_commit_message
  is_prefix_commit_sha          = false
  fqdn                          = "staging.${var.domain}"
  namespace_name                = terraform.workspace
}
