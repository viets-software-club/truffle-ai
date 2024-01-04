output "image_pull_secret" {
  value = kubernetes_secret.ghcr_dockerconfigjson.metadata.0.name
}
