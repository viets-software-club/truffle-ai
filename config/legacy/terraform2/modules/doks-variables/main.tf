resource "kubectl_manifest" "test" {
  for_each  = var.config_maps
  yaml_body = each.value
}
