data "kubectl_file_documents" "docs" {
  content = file("configMaps.yaml")
}

resource "kubectl_manifest" "test" {
  for_each  = data.kubectl_file_documents.docs.manifests
  yaml_body = each.value
}
