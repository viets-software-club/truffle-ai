terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = ">= 2.4.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.7.0"
    }
    kubectl = {
      source  = "gavinbunney/kubectl"
      version = ">= 1.7.0"
    }
    helm = {
      source  = "hashicorp/helm"
      version = ">= 2.0.1"
    }
  }
}

provider "kubernetes" {
  host  = data.digitalocean_kubernetes_cluster.this.endpoint
  token = data.digitalocean_kubernetes_cluster.this.kube_config[0].token
  cluster_ca_certificate = base64decode(
    data.digitalocean_kubernetes_cluster.this.kube_config[0].cluster_ca_certificate
  )
}
provider "kubectl" {
  host                   = data.digitalocean_kubernetes_cluster.this.endpoint
  token                  = data.digitalocean_kubernetes_cluster.this.kube_config[0].token
  cluster_ca_certificate = base64decode(data.digitalocean_kubernetes_cluster.this.kube_config[0].cluster_ca_certificate)
  load_config_file       = false
}

provider "helm" {
  kubernetes {
    host  = data.digitalocean_kubernetes_cluster.this.endpoint
    token = data.digitalocean_kubernetes_cluster.this.kube_config[0].token
    cluster_ca_certificate = base64decode(
      data.digitalocean_kubernetes_cluster.this.kube_config[0].cluster_ca_certificate
    )
  }
}
