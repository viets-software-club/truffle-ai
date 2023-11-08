variable "cluster_name" {
  type = string
}

variable "cluster_id" {
  type = string
}
variable "write_kubeconfig" {
  type    = bool
  default = false
}
variable "prefix" {
  type = string
}
variable "subdomain" {
  type = string
}
variable "domain" {
  type = string
}
variable "namespace_prefix" {
  type = string
}
variable "namespaces" {
  description = "Namespaces"
  type        = set(string)
  default     = ["production", "staging", "commit"]
}
variable "image_repository_url" {
  type = string
}
variable "change_cause" {
  type = string
}
variable "image_tag" {
  type = string
}
variable "config_map_dir" {
  type = string
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
variable "cluster_raw_config" {
  type = string
}
variable "cluster_endpoint" {
  type = string
}
variable "cluster_token" {
  type = string
}
variable "cluster_ca_certificate" {
  type = string
}
