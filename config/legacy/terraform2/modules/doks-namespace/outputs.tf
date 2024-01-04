output "namespace_name" {
  value = kubernetes_namespace.this.metadata.0.name
}
