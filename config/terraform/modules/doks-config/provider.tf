terraform {
  required_providers {
    # digitalocean = {
    #   source  = "digitalocean/digitalocean"
    #   version = ">= 2.4.0"
    # }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.23.0"
    }
    helm = {
      source  = "hashicorp/helm"
      version = ">= 2.0.1"
    }
  }
}

# provider "helm" {
#   kubernetes {
#     host  = data.digitalocean_kubernetes_cluster.this.endpoint
#     token = data.digitalocean_kubernetes_cluster.this.kube_config[0].token
#     cluster_ca_certificate = base64decode(
#       data.digitalocean_kubernetes_cluster.this.kube_config[0].cluster_ca_certificate
#     )
#   }
# }

# provider "kubernetes" {
#   host  = data.digitalocean_kubernetes_cluster.this.endpoint
#   token = data.digitalocean_kubernetes_cluster.this.kube_config[0].token
#   cluster_ca_certificate = base64decode(
#     data.digitalocean_kubernetes_cluster.this.kube_config[0].cluster_ca_certificate
#   )
# exec {
#   api_version = "client.authentication.k8s.io/v1beta1"
#   command     = "doctl"
#   args = ["kubernetes", "cluster", "kubeconfig", "exec-credential",
#   "--version=v1beta1", data.digitalocean_kubernetes_cluster.this.id]
#   # }
# }
