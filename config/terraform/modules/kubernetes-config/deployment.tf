locals {
  graphql_backend_app_selector = "${var.prefix}-graphql-backend-selector"
  ui_app_selector              = "${var.prefix}-ui-selector"
  graphql_backend              = "${var.prefix}-graphql-backend"
  ui                           = "${var.prefix}-ui"
}
resource "kubernetes_deployment" "graphql_backend" {
  metadata {
    annotations = {
      "kubernetes.io/change-cause" : locals.change_cause
    }
    generate_name = null
    labels = {
      app : locals.graphql_backend_app_selector
    }
    namespace = kubernetes_namespace.this.metadata.0.name
    name      = locals.graphql_backend
  }
  spec {
    # min_ready_seconds = null
    # paused = null
    # progress_deadline_seconds = null
    replicas               = 2
    revision_history_limit = 0
    strategy {
      type = "RollingUpdate"
      rolling_update {
        max_surge       = 2
        max_unavailable = 1
      }
    }
    selector {
      match_labels = {
        app : locals.graphql_backend_app_selector
      }
    }
    template {
      metadata {
        annotations = {
          "kubernetes.io/change-cause" : locals.change_cause
        }
        generate_name = null
        labels = {
          app : locals.graphql_backend_app_selector
        }
      }
      spec {
        # affinity
        active_deadline_seconds         = 600
        automount_service_account_token = true
        container {
          # args
          # command
          # env
          # env_from
          # image
          # image_pull_policy
          # lifecycle
          # lifeness_probe
          name  = "${vars.prefix}-graphql-gateway-container"
          image = "${vars.image_repository_url}/graphql-gateway-image"
          port {
            container_port = 3001
          }
          # readiness_probe
          resources {
            limits = {
              cpu = "1m"
            }
            requests = {
              cpu = "1m"
            }
          }
          # security_context
          # startup_probe
          # stdin
          # stdin_once
          # termination_message_path
          # tty
          # volume_mount
          # working_dir
        }
        container {
          name  = "${vars.prefix}-graphql-server-container"
          image = "${vars.image_repository_url}/graphql-server-image"
          port {
            container_port = 3002
          }
          resources {
            limits = {
              cpu = "1m"
            }
            requests = {
              cpu = "1m"
            }
          }
        }
        # readiness_gate
        # init_container
        dns_policy = "ClusterFirst"
        # dns_config
        enable_service_links = true
        # host_aliases
        host_ipc = false
        # host_network
        # host_pid
        # hostname
        image_pull_secrets {
          name = "ghrc-secret"
        }
        # node_name
        # node_selector
        # priority_class_name
        restart_policy = "Always"
        # runtime_class_name
        # security_context
        # scheduler_name
        # service_account_name
        # share_process_namespace
        # subdomain
        # termination_grace_period_seconds
        # toleration
        # volume
        # container {
      }
    }
  }
  wait_for_rollout = true
}

resource "kubernetes_deployment" "ui" {
  metadata {
    annotations = {
      "kubernetes.io/change-cause" : locals.change_cause
    }
    generate_name = null
    labels = {
      app : locals.ui_app_selector
    }
    namespace = kubernetes_namespace.this.metadata.0.name
    name      = "${locals.ui}-deployment"
  }
  spec {
    replicas               = 2
    revision_history_limit = 0
    strategy {
      type = "RollingUpdate"
      rolling_update {
        max_surge       = 2
        max_unavailable = 1
      }
    }
    selector {
      match_labels = {
        app : locals.ui_app_selector
      }
    }
    template {
      metadata {
        annotations = {
          "kubernetes.io/change-cause" : locals.change_cause
        }
        generate_name = null
        labels = {
          app : locals.ui_app_selector
        }
      }
      spec {
        active_deadline_seconds         = 600
        automount_service_account_token = true
        container {
          name  = "${locals.ui}-container"
          image = "${vars.image_repository_url}/ui-image"
          port {
            container_port = 3000
          }
          resources {
            limits = {
              cpu = "1m"
            }
            requests = {
              cpu = "1m"
            }
          }
        }
        dns_policy           = "ClusterFirst"
        enable_service_links = true
        host_ipc             = false
        image_pull_secrets {
          name = "ghrc-secret"
        }
        restart_policy = "Always"
      }
    }
  }
  wait_for_rollout = true
}