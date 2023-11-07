locals {
  preview_cronjob_app_selector = "${var.prefix}-graphql-backend-selector"
  repo_cronjob_app_selector    = "${var.prefix}-repo-cronjob-selector"
  preview_cronjob              = "${var.prefix}-preview-cronjob"
  repo_cronjob                 = "${var.prefix}-repo-cronjob"
}

resource "kubernetes_cron_job" "preview_cronjob" {
  metadata {
    name      = local.preview_cronjob
    namespace = kubernetes_namespace.this.metadata.0.name
    annotations = {
      "kubernetes.io/change-cause" : var.change_cause
    }
    generate_name = null
    labels = {
      app : local.preview_cronjob_app_selector
    }
  }
  spec {

    concurrency_policy        = "Replace"
    failed_jobs_history_limit = 5
    schedule                  = "10 * * * *"
    job_template {
      metadata {
        annotations = {
          "kubernetes.io/change-cause" : var.change_cause
        }
        generate_name = null
        labels = {
          app : local.preview_cronjob_app_selector
        }
      }
      spec {
        template {
          metadata {
            annotations = {
              "kubernetes.io/change-cause" : var.change_cause
            }
            generate_name = null
            labels = {
              app : local.preview_cronjob_app_selector
            }
          }
          spec {
            container {
              name  = "${prefix}-preview-cronjob-container"
              image = "${var.image_repository_url}/preview-job:${var.image_tag}"
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_cron_job" "repo_cronjob" {
  metadata {
    name      = local.repo_cronjob
    namespace = kubernetes_namespace.this.metadata.0.name
    annotations = {
      "kubernetes.io/change-cause" : var.change_cause
    }
    generate_name = null
    labels = {
      app : local.repo_cronjob_app_selector
    }
  }
  spec {

    concurrency_policy        = "Replace"
    failed_jobs_history_limit = 5
    schedule                  = "10 * * * *"
    job_template {
      metadata {
        annotations = {
          "kubernetes.io/change-cause" : var.change_cause
        }
        generate_name = null
        labels = {
          app : local.repo_cronjob_app_selector
        }
      }
      spec {
        template {
          metadata {
            annotations = {
              "kubernetes.io/change-cause" : var.change_cause
            }
            generate_name = null
            labels = {
              app : local.repo_cronjob_app_selector
            }
          }
          spec {
            container {
              name  = "${prefix}-repo-cronjob-container"
              image = "${var.image_repository_url}/repo-job:${var.image_tag}"
            }
          }
        }
      }
    }
  }
}
