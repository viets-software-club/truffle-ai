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
variable "change_cause" {
  type = string
}
variable "resource_prefix" {
  type = string
}
