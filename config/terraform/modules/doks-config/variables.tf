variable "cluster_name" {
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
variable "repo_name" {
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
variable "cert_uuid" {
  type = string
}
variable "namespace_name" {
  type = string
}
locals {
  graphql_backend_app_selector = "${var.prefix}-graphql-backend-selector"
  ui_app_selector              = "${var.prefix}-ui-selector"
  graphql_backend              = "${var.prefix}-graphql-backend"
  ui                           = "${var.prefix}-ui"
}
