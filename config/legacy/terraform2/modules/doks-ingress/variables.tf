variable "repo_name" {
  type = string
}
variable "namespace_name" {
  type = string
}
variable "hosts" {
  type = list(object({
    host            = string
    resource_prefix = string
  }))
}
