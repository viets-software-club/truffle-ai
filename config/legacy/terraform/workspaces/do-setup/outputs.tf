output "cert_uuid" {
    value = data.digitalocean_certificate.this.uuid
}
output "lb_output" {
  value = data.digitalocean_loadbalancer.this.ip
}