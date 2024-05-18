data "kubectl_file_documents" "docs" {
  content = file("${path.module}/../../_configMaps/configMaps.${var.namespace_name}.yml")
}
