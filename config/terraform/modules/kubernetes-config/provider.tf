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
    helm = {
      source  = "hashicorp/helm"
      version = ">= 2.0.1"
    }
    kubectl = {
      source  = "gavinbunney/kubectl"
      version = ">= 1.7.0"
    }
  }
}

provider "helm" {
  kubernetes {
    host  = var.cluster_endpoint
    token = var.cluster_token
    cluster_ca_certificate = base64decode(
      var.cluster_ca_certificate
    )
  }
}

provider "kubernetes" {
  host  = var.cluster_endpoint
  token = var.cluster_token
  cluster_ca_certificate = base64decode(
    var.cluster_ca_certificate
  )
}
