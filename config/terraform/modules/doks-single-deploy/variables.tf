variable "fqdn" {
  type = string
}
variable "namespace_name" {
  type = string
}
variable "resource_prefix" {
  type = string
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
variable "repo_name" {
  type = string
}
locals {
  graphql_backend_app_selector = "${var.resource_prefix}-graphql-backend-selector"
  ui_app_selector              = "${var.resource_prefix}-ui-selector"
  graphql_backend              = "${var.resource_prefix}-graphql-backend"
  ui                           = "${var.resource_prefix}-ui"
  change_cause                 = substr(var.change_cause, 0, 63)
  resource_prefix              = substr(var.resource_prefix, 0, 20)
}
