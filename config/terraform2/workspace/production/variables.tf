variable "secret_github_api_token" {
  type      = string
  sensitive = true
}
variable "secret_open_api_key" {
  type      = string
  sensitive = true
}
variable "secret_scraping_bot_user_name" {
  type      = string
  sensitive = true
}
variable "secret_scraping_bot_api_key" {
  type      = string
  sensitive = true
}
variable "secret_supabase_anon_key" {
  type      = string
  sensitive = true
  default   = ""
}
variable "secret_supabase_service_key" {
  type      = string
  sensitive = true
}
variable "secret_ghcr_access_token" {
  type      = string
  sensitive = true
}
variable "secret_ghcr_username" {
  type      = string
  sensitive = true
}
variable "image_tag" {
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
variable "repo_name" {
  type    = string
  default = "truffle-ai"
}
variable "org_name" {
  type    = string
  default = "viets-software-club"
}
variable "domain" {
  type = string
}
variable "is_cli" {
  type = bool
}
variable "git_commit_tags" {
  type = list(string)
}