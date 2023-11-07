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