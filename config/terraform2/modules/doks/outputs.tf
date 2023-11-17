output "load_balancer_ip" {
  value = data.kubernetes_service.nginx_ingress_controller.status.0.load_balancer.0.ingress.0.ip
}
output "ingress_controller_name" {
  value = data.kubernetes_service.nginx_ingress_controller.metadata.0.name
}
