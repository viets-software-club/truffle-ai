data "kubectl_file_documents" "docs" {
  content = file("${path.module}/configMaps.${terraform.workspace}.yml")
}

resource "kubectl_manifest" "test" {
  for_each  = data.kubectl_file_documents.docs.manifests
  yaml_body = each.value
}
