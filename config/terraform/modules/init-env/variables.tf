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
variable "fqdn" {
  type = string
}
variable "image_repository_url" {
  type    = string
  default = "ghcr.io/viets-software-club/truffle-ai"
}
variable "image_tag" {
  type = string
}
variable "repo_name" {
  type = string
}
variable "namespace_name" {
  type = string
}
variable "git_commit_tag" {
  type = string
}
variable "git_commit_message" {
  type = string
}
variable "is_cli" {
  type    = bool
  default = false
}
variable "is_prefix_commit_sha" {
  type = bool
}
