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
