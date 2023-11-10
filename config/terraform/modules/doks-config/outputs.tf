# output "load_balancer_ip" {
#   value = kubernetes_ingress_v1.this.status.0.load_balancer.0.ingress.0.ip
# }
# output "load_balancer_hostname" {
#   value = kubernetes_ingress_v1.this.status.0.load_balancer.0.ingress.0.hostname
# }
output "load_balancer_ip" {
  value = data.kubernetes_service.nginx_ingress_controller.status.0.load_balancer.0.ingress.0.ip
}
output "host_url" {
  value = data.kubernetes_service.nginx_ingress_controller.spec.rule.host
}