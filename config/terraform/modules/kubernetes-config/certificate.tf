resource "digitalocean_certificate" "this" {
  name    = "${var.repo_name}-certificate"
  type    = "lets_encrypt"
  domains = [var.domain]
}
