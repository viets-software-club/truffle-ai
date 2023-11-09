output "kubeconfig_path" {
  value = var.write_kubeconfig ? abspath("${path.root}/kubeconfig") : "none"
}
output "load_balancer_ip" {
  value = module.kubernetes-config.load_balancer_ip
}

output "cert-id" {
  value = module.kubernetes-config.cert-id
}