data "digitalocean_kubernetes_versions" "this" {
  version_prefix = "1.28."
}

resource "digitalocean_kubernetes_cluster" "this" {
  name                 = "${var.repo_name}-cluster"
  region               = "fra1"
  version              = data.digitalocean_kubernetes_versions.this.latest_version # Grab the latest version slug from `doctl kubernetes options versions`
  vpc_uuid             = null
  auto_upgrade         = true
  surge_upgrade        = false
  ha                   = false
  registry_integration = false
  node_pool {
    name       = "worker-pool"
    size       = "s-1vcpu-2gb"
    node_count = 1
    auto_scale = false
    # min_nodes  = 1
    # max_nodes  = 1
    tags   = null
    labels = null
  }
  tags = null
  maintenance_policy {
    day        = "monday"
    start_time = "04:00"
  }
  destroy_all_associated_resources = true
}
