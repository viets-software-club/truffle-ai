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
  default = "truffle.tools"
}
variable "cluster_name" {
  type    = string
  default = "truffle-ai-cluster"
}
variable "prod_loadbalancer_name" {
  type = string
  default = "truffle-ai-nginx-ingress-controller-prod"
}
variable "dev_loadbalancer_name" {
  type = string
  default = "truffle-ai-nginx-ingress-controller-dev"
}

variable "do_token" {}