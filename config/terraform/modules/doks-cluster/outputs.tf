output "cluster_id" {
  value = digitalocean_kubernetes_cluster.this.id

}

output "cluster_name" {
  value = digitalocean_kubernetes_cluster.this.name
}

output "cluster_raw_config" {
  value     = digitalocean_kubernetes_cluster.this.kube_config[0].raw_config
  sensitive = true
}

output "cluster_endpoint" {
  value = digitalocean_kubernetes_cluster.this.endpoint
}
output "cluster_token" {
  value     = digitalocean_kubernetes_cluster.this.kube_config[0].token
  sensitive = true
}
output "cluster_ca_certificate" {
  value     = digitalocean_kubernetes_cluster.this.kube_config[0].cluster_ca_certificate
  sensitive = true
}
