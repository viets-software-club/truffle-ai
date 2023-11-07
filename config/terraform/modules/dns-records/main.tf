resource "digitalocean_domain" "domain" {
  name = var.domain
}

resource "digitalocean_record" "commit" {
  domain = digitalocean_domain.domain.name
  type   = "A"
  name   = "*.commit"
  value  = var.load_balancer_ip
}
resource "digitalocean_record" "staging" {
  domain = digitalocean_domain.domain.name
  type   = "A"
  name   = "staging"
  value  = var.load_balancer_ip
}

resource "digitalocean_record" "production" {
  domain = digitalocean_domain.domain.name
  type   = "A"
  name   = "@"
  value  = var.load_balancer_ip
}

resource "digitalocean_record" "domain_CNAME" {
  domain = digitalocean_domain.domain.name
  type   = "CNAME"
  name   = "www"
  value  = var.load_balancer_ip
}
