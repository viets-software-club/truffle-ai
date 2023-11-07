variable "cluster_version" {
  default = "1.22"
}

variable "write_kubeconfig" {
  type    = bool
  default = false
}

variable "domain" {
  type = string
}
variable "git_commit_tag" {
  type = string
}

variable "git_commit_message" {
  type = string
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
