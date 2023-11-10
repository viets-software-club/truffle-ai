resource "kubernetes_secret" "github_secret" {
  metadata {
    name      = "${var.repo_name}-github-secret"
    namespace = var.namespace_name
  }
  data = {
    GITHUB_API_TOKEN = var.secret_github_api_token
  }
}
resource "kubernetes_secret" "graphql_gateway_secret" {
  metadata {
    name      = "${var.repo_name}-graphql-gateway-secret"
    namespace = var.namespace_name
  }
  data = {
  }
}
resource "kubernetes_secret" "graphql_server_secret" {
  metadata {
    name      = "${var.repo_name}-graphql-server-secret"
    namespace = var.namespace_name
  }
  data = {
  }
}
resource "kubernetes_secret" "open_api_secret" {
  metadata {
    name      = "${var.repo_name}-open-api-secret"
    namespace = var.namespace_name
  }
  data = {
    OPEN_API_KEY = var.secret_open_api_key
  }
}
resource "kubernetes_secret" "preview_job_secret" {
  metadata {
    name      = "${var.repo_name}-preview-job-secret"
    namespace = var.namespace_name
  }
  data = {
  }
}
resource "kubernetes_secret" "repo_job_secret" {
  metadata {
    name      = "${var.repo_name}-repo-job-secret"
    namespace = var.namespace_name
  }
  data = {
  }
}
resource "kubernetes_secret" "scraping_bot_secret" {
  metadata {
    name      = "${var.repo_name}-scraping-bot-secret"
    namespace = var.namespace_name
  }
  data = {
    SCRAPING_BOT_USER_NAME = var.secret_scraping_bot_user_name
    SCRAPING_BOT_API_KEY   = var.secret_scraping_bot_api_key
  }
}
resource "kubernetes_secret" "supabase_secret" {
  metadata {
    name      = "${var.repo_name}-supabase-secret"
    namespace = var.namespace_name
  }
  data = {
    SUPABASE_ANON_KEY    = base64encode(var.secret_supabase_anon_key)
    SUPABASE_SERVICE_KEY = base64encode(var.secret_supabase_service_key)
  }
}
resource "kubernetes_secret" "ui_secret" {
  metadata {
    name      = "${var.repo_name}-ui-secret"
    namespace = var.namespace_name
  }
  data = {
    NEXT_PUBLIC_SUPABASE_ANON_KEY = base64encode(var.secret_supabase_anon_key)
  }
}

resource "kubernetes_secret" "ghcr_dockerconfigjson" {
  metadata {
    name      = "${var.repo_name}-dockerconfigjson-secret"
    namespace = var.namespace_name
  }
  type = "kubernetes.io/dockerconfigjson"
  data = {
    ".dockerconfigjson" = jsonencode({
      auths = {
        "ghcr.io" = {
          "username" = var.secret_ghcr_username
          # "password" = var.registry_password
          # "email"    = var.registry_email
          "auth" = base64encode("${var.secret_ghcr_username}:${var.secret_ghcr_access_token}")
        }
      }
    })
  }
}
