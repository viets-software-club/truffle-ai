variable "write_kubeconfig" {
  type    = bool
  default = false
}

variable "domain" {
  type = string
}
variable "git_commit_tag" {
  type    = string
  default = "no-tag"
}

variable "git_commit_message" {
  type    = string
  default = "no message"
}
variable "org_name" {
  type = string
}
variable "repo_name" {
  type    = string
  default = "truffle-ai"
}

variable "is_dev_workspace" {
  type    = bool
  default = false
}

variable "is_prod_workspace" {
  type    = bool
  default = false
}

variable "image_repository_url" {
  type    = string
  default = "ghcr.io/viets-software-club/truffle-ai"
}
variable "image_tag" {
  type    = string
  default = ""
}
variable "secret_github_api_token" {
  type = string
}
variable "secret_open_api_key" {
  type = string
}
variable "secret_scraping_bot_user_name" {
  type = string
}
variable "secret_scraping_bot_api_key" {
  type = string
}
variable "secret_supabase_anon_key" {
  type = string
}
variable "secret_supabase_service_key" {
  type = string
}
variable "secret_ghcr_access_token" {
  type = string
}
variable "secret_ghcr_username" {
  type = string
}
variable "is_cli" {
  type    = bool
  default = false
}
