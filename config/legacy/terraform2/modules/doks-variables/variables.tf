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
variable "repo_name" {
  type = string
}
variable "namespace_name" {
  type = string
}
variable "config_maps" {
  type = map(string)
}
