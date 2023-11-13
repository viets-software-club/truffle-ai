locals {
  # git_commit_tag_shortened     = substr(var.git_commit_tag, 0, 13)
  # git_commit_message_shortened = substr(var.git_commit_message, 0, 30)
  # change_cause                 = "${local.git_commit_tag_shortened}: ${local.git_commit_message_shortened}"
  # resource_prefix              = var.is_cli ? "${terraform.workspace}-exp${local.git_commit_tag_shortened}" : "${terraform.workspace}-${local.git_commit_tag_shortened}") : terraform.workspace
  hosts = [for git_commit_tag in var.git_commit_tags : {
    host            = "${git_commit_tag}.commit.${var.domain}"
    sha             = git_commit_tag
    resource_prefix = var.is_cli ? "${terraform.workspace}-exp${substr(git_commit_tag, 0, 13)}" : "${terraform.workspace}-${substr(git_commit_tag, 0, 13)}"
  }]
}
module "init" {
  source                        = "../../modules/init"
  secret_github_api_token       = var.secret_github_api_token
  secret_open_api_key           = var.secret_open_api_key
  secret_scraping_bot_api_key   = var.secret_scraping_bot_api_key
  secret_scraping_bot_user_name = var.secret_scraping_bot_user_name
  secret_supabase_anon_key      = var.secret_supabase_anon_key
  secret_supabase_service_key   = var.secret_supabase_service_key
  secret_ghcr_access_token      = var.secret_ghcr_access_token
  secret_ghcr_username          = var.secret_ghcr_username
  repo_name                     = var.repo_name
  namespace_name                = terraform.workspace
  hosts                         = local.hosts
}

module "deployment" {
  depends_on         = [module.init]
  is_dev             = true
  for_each           = var.git_commit_tags
  source             = "../../modules/deployment"
  repo_name          = var.repo_name
  image_tag          = var.image_tag
  git_commit_tag     = each.key
  git_commit_message = "unimportant"
  fqdn               = "${each.key}.commit.${var.domain}"
  namespace_name     = terraform.workspace
  resource_prefix    = var.is_cli ? "${terraform.workspace}-exp${substr(each.key, 0, 13)}" : "${terraform.workspace}-${substr(each.key, 0, 13)}"
  change_cause       = "not important"
}

# module "cleanup" {
#   source         = "../../modules/doks-cleanup"
#   namespace_name = terraform.workspace
#   repo_name      = var.repo_name
# }
