module "certificate" {
   source = "./module/certificate"
   name = var.cert_name
   domain = var.domain
}

