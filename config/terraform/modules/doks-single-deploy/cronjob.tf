locals {
  preview_cronjob_app_selector = "${local.resource_prefix}-graphql-backend-selector"
  repo_cronjob_app_selector    = "${local.resource_prefix}-repo-cronjob-selector"
  preview_cronjob              = "${local.resource_prefix}-preview-cronjob"
  repo_cronjob                 = "${local.resource_prefix}-repo-cronjob"
}

resource "kubernetes_cron_job_v1" "preview_cronjob" {
  metadata {
    name      = local.preview_cronjob
    namespace = var.namespace_name
    annotations = {
      "kubernetes.io/change-cause" : local.change_cause
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
          "kubernetes.io/change-cause" : local.change_cause
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
              "kubernetes.io/change-cause" : local.change_cause
            }
            generate_name = null
            labels = {
              app : local.preview_cronjob_app_selector
            }
          }
          spec {
            container {
              env_from {
                config_map_ref {
                  name = "${var.repo_name}-nodejs-config"
                }
              }
              env_from {
                config_map_ref {
                  name = "${var.repo_name}-preview-job-config"
                }
              }
              env_from {
                secret_ref {
                  name = "${var.repo_name}-preview-job-secret"
                }
              }
              name  = "${local.resource_prefix}-preview-cronjob-container"
              image = "${var.image_repository_url}/preview-job:${var.image_tag}"
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_cron_job_v1" "repo_cronjob" {
  metadata {
    name      = local.repo_cronjob
    namespace = var.namespace_name
    annotations = {
      "kubernetes.io/change-cause" : local.change_cause
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
          "kubernetes.io/change-cause" : local.change_cause
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
              "kubernetes.io/change-cause" : local.change_cause
            }
            generate_name = null
            labels = {
              app : local.repo_cronjob_app_selector
            }
          }
          spec {
            container {
              env_from {
                config_map_ref {
                  name = "${var.repo_name}-nodejs-config"
                }
              }
              env_from {
                config_map_ref {
                  name = "${var.repo_name}-repo-job-config"
                }
              }
              env_from {
                secret_ref {
                  name = "${var.repo_name}-repo-job-secret"
                }
              }
              name  = "${local.resource_prefix}-repo-cronjob-container"
              image = "${var.image_repository_url}/repo-job:${var.image_tag}"
            }
          }
        }
      }
    }
  }
}
