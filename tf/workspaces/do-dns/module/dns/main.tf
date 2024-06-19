# resource "digitalocean_domain" "domain" {
#   name = var.domain
# }
resource "digitalocean_record" "commit-wildcard" {
  domain = var.domain
  type   = "A"
  name   = "*.commit"
  value  = var.dev_load_balancer_ip
}
resource "digitalocean_record" "commit" {
  domain = var.domain
  type   = "A"
  name   = "commit"
  value  = var.dev_load_balancer_ip
}
resource "digitalocean_record" "staging" {
  domain = var.domain
  type   = "A"
  name   = "staging"
  value  = var.dev_load_balancer_ip
}
resource "digitalocean_record" "staging-wildcard" {
  domain = var.domain
  type   = "A"
  name   = "*.staging"
  value  = var.dev_load_balancer_ip
}
resource "digitalocean_record" "production-wildcard" {
  domain = var.domain
  type   = "A"
  name   = "*.production"
  value  = var.dev_load_balancer_ip
}
resource "digitalocean_record" "production" {
  domain = var.domain
  type   = "A"
  name   = "production"
  value  = var.dev_load_balancer_ip
}
resource "digitalocean_record" "public" {
  domain = var.domain
  type   = "A"
  name   = "@"
  value  = var.prod_load_balancer_ip
}
resource "digitalocean_record" "domain_CNAME" {
  domain = var.domain
  type   = "CNAME"
  name   = "www"
  value  = "@"
}
