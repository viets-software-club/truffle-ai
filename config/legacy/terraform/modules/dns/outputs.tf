output "commit_fqdn" {
  value = digitalocean_record.commit.fqdn
}
output "staging_fqdn" {
  value = digitalocean_record.staging.fqdn
}
output "production_fqdn" {
  value = digitalocean_record.production.fqdn
}
