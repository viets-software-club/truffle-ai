# locals {
#   cluster_name                 = "${var.repo_name}-cluster"
#   git_commit_tag_shortened     = substr(var.git_commit_tag, 0, 13)
#   git_commit_message_shortened = substr(var.git_commit_message, 0, 30)
#   change_cause                 = "${local.git_commit_tag_shortened}: ${local.git_commit_message_shortened}"
# }

module "doks-single-deploy" {
  source               = "../../modules/doks-single-deploy"
  namespace_name       = var.namespace_name
  fqdn                 = var.fqdn
  image_repository_url = "${var.image_repository_url}/${terraform.workspace}"
  image_tag            = var.image_tag
  change_cause         = var.change_cause
  repo_name            = var.repo_name
  is_dev               = var.is_dev
  resource_prefix      = var.resource_prefix
}
variable "is_dev" {
  type    = bool
  default = false
}
