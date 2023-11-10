output "kubeconfig_path" {
  value = var.write_kubeconfig ? abspath("${path.root}/kubeconfig") : "none"
}
output "load_balancer_ip" {
  value = module.doks-config.load_balancer_ip
}

output "cert_uuid" {
  value = module.certificate.cert_uuid
}
output "host" {
  value = data.kubernetes_service.nginx_ingress_controller.spec.rule.host
}