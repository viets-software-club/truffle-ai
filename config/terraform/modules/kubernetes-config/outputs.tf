output "load_balancer_ip" {
  value = kubernetes_ingress.this.status.0.load_balancer.0.ingress.0.ip
}
