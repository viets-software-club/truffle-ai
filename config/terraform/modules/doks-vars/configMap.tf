data "kubectl_file_documents" "docs" {
  content = file("${path.module}/configMaps/configMaps.${terraform.workspace}.yml")
}

resource "kubectl_manifest" "test" {
  depends_on = [data.kubectl_file_documents.docs]
  for_each   = data.kubectl_file_documents.docs.manifests
  yaml_body  = each.value
}
