resource "digitalocean_domain" "domain" {
  name = var.domain
}
resource "digitalocean_record" "commit" {
  domain = digitalocean_domain.domain.name
  type   = "A"
  name   = "*.commit"
  value  = var.dev_load_balancer_ip
}
resource "digitalocean_record" "commit" {
  domain = digitalocean_domain.domain.name
  type   = "A"
  name   = "commit"
  value  = var.dev_load_balancer_ip
}
resource "digitalocean_record" "staging" {
  domain = digitalocean_domain.domain.name
  type   = "A"
  name   = "staging"
  value  = var.dev_load_balancer_ip
}
resource "digitalocean_record" "staging-wildcard" {
  domain = digitalocean_domain.domain.name
  type   = "A"
  name   = "*.staging"
  value  = var.dev_load_balancer_ip
}
resource "digitalocean_record" "production-wildcard" {
  domain = digitalocean_domain.domain.name
  type   = "A"
  name   = "*.production"
  value  = var.dev_load_balancer_ip
}
resource "digitalocean_record" "production" {
  domain = digitalocean_domain.domain.name
  type   = "A"
  name   = "@"
  value  = var.prod_load_balancer_ip
}
resource "digitalocean_record" "domain_CNAME" {
  domain = digitalocean_domain.domain.name
  type   = "CNAME"
  name   = "www"
  value  = "@"
}
