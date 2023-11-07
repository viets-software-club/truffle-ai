locals {
  cluster_name = "${var.repo_name}-cluster"
}

module "doks-cluster" {
  source       = "./modules/doks-cluster"
  cluster_name = local.cluster_name
}

module "kubernetes-config" {
  source               = "./modules/kubernetes-config"
  cluster_name         = local.cluster_name
  cluster_id           = module.doks-cluster.cluster_id
  write_kubeconfig     = var.write_kubeconfig
  domain               = var.domain
  subdomain            = var.is_dev_workspace ? "*.${terraform.workspace}" : (var.is_prod_workspace ? "" : terraform.workspace)
  prefix               = var.is_dev_workspace ? "${var.repo_name}-${terraform.workspace}-${var.git_commit_tag}" : "${var.repo_name}-${terraform.workspace}"
  change_cause         = "${var.git_commit_tag}: ${var.git_commit_message}"
  namespace_prefix     = var.repo_name
  image_repository_url = var.image_repository_url
  image_tag            = var.git_commit_tag
}

module "dns-records" {
  source           = "./modules/dns-records"
  domain           = var.domain
  load_balancer_ip = module.kubernetes-config.load_balancer_ip

}
