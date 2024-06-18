resource "digitalocean_certificate" "this" {
  name    = "${var.repo_name}-certificate"
  type    = "lets_encrypt"
  domains = [var.domain, "*.production.${var.domain}", "production.${var.domain}", "*.staging.${var.domain}", staging.${var.domain}", "commit.${var.domain}", "*.commit.${var.domain}"]
  # sub subdomains need to be specified to be valid for SSL certificate see: https://stackoverflow.com/questions/2115611/wildcard-ssl-on-sub-subdomain
}

