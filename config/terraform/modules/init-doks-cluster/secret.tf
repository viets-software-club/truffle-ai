resource "kubernetes_secret" "github_secret" {
  metadata {
    name      = "${var.namespace_prefix}-github-secret"
    namespace = data.kubernetes_namespace.this.metadata.0.name
  }
  data = {
    GITHUB_API_TOKEN = var.secret_github_api_token
  }
}
resource "kubernetes_secret" "graphql_gateway_secret" {
  metadata {
    name      = "${var.namespace_prefix}-graphql-gateway-secret"
    namespace = data.kubernetes_namespace.this.metadata.0.name
  }
  data = {
  }
}
resource "kubernetes_secret" "graphql_server_secret" {
  metadata {
    name      = "${var.namespace_prefix}-graphql-server-secret"
    namespace = data.kubernetes_namespace.this.metadata.0.name
  }
  data = {
  }
}
resource "kubernetes_secret" "open_api_secret" {
  metadata {
    name      = "${var.namespace_prefix}-open-api-secret"
    namespace = data.kubernetes_namespace.this.metadata.0.name
  }
  data = {
    OPEN_API_KEY = var.secret_open_api_key
  }
}
resource "kubernetes_secret" "preview_job_secret" {
  metadata {
    name      = "${var.namespace_prefix}-preview-job-secret"
    namespace = data.kubernetes_namespace.this.metadata.0.name
  }
  data = {
  }
}
resource "kubernetes_secret" "repo_job_secret" {
  metadata {
    name      = "${var.namespace_prefix}-repo-job-secret"
    namespace = data.kubernetes_namespace.this.metadata.0.name
  }
  data = {
  }
}
resource "kubernetes_secret" "scraping_bot_secret" {
  metadata {
    name      = "${var.namespace_prefix}-scraping-bot-secret"
    namespace = data.kubernetes_namespace.this.metadata.0.name
  }
  data = {
    SCRAPING_BOT_USER_NAME = var.secret_scraping_bot_user_name
    SCRAPING_BOT_API_KEY   = var.secret_scraping_bot_api_key
  }
}
resource "kubernetes_secret" "supabase_secret" {
  metadata {
    name      = "${var.namespace_prefix}-supabase-secret"
    namespace = data.kubernetes_namespace.this.metadata.0.name
  }
  data = {
    SUPABASE_ANON_KEY    = base64encode(var.secret_supabase_anon_key)
    SUPABASE_SERVICE_KEY = base64encode(var.secret_supabase_service_key)
  }
}
resource "kubernetes_secret" "ui_secret" {
  metadata {
    name      = "${var.namespace_prefix}-ui-secret"
    namespace = data.kubernetes_namespace.this.metadata.0.name
  }
  data = {
    NEXT_PUBLIC_SUPABASE_ANON_KEY = base64encode(var.secret_supabase_anon_key)
  }
}

resource "kubernetes_secret" "ghcr_dockerconfigjson" {
  metadata {
    name      = "${var.namespace_prefix}-dockerconfigjson-secret"
    namespace = data.kubernetes_namespace.this.metadata.0.name
  }
  type = "kubernetes.io/dockerconfigjson"
  data = {
    ".dockerconfigjson" = base64encode("{\"auths\":{\"ghcr.io\":{\"auth\":\"${base64encode(var.secret_ghcr_access_token)}\"}}}")
  }
}
