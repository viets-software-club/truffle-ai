resource "kubernetes_service_account" "cleanup" {
  metadata {
    name      = "cleanup-service-account"
    namespace = var.namespace_name
  }
}
resource "kubernetes_cluster_role" "cleanup" {
  metadata {
    name = "cleanup-role"
  }
  rule {
    api_groups = [""]
    resources  = ["pods", "services", "cronjobs"]
    verbs      = ["get", "list", "delete"]
  }
}
resource "kubernetes_role_binding" "cleanup" {
  metadata {
    name      = "cleanup-role-binding"
    namespace = var.namespace_name
  }
  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "Role"
    name      = "cleanup-role"
  }
  subject {
    kind      = "ServiceAccount"
    name      = "cleanup-service-account"
    namespace = var.namespace_name
  }

}
resource "kubernetes_cron_job_v1" "cleanup_cronjob" {
  metadata {
    name          = "cleanup-cronjob"
    namespace     = var.namespace_name
    generate_name = null
    labels = {
      app : "cleanup-cronjob-selector"
    }
  }
  spec {
    concurrency_policy = "Replace"
    schedule           = "0 * * * *"
    job_template {
      metadata {
        generate_name = null
        labels = {
          app : "cleanup-cronjob-selector"
        }
      }
      spec {
        template {
          metadata {
            generate_name = null
            labels = {
              app : "cleanup-cronjob-selector"
            }
          }
          spec {
            service_account_name = "cleanup-service-account"
            container {
              name  = "cleanup-pod"
              image = "bitnami/kubectl:latest"
              command = tolist([
                "bin/bash",
                "-c",
                "kubectl delete jobs -n ${var.namespace_name} --field-selector status.successful=1",
                "kubectl get deployments -n ${var.namespace_name} -o go-template --template '{{range .items}}{{.metadata.name}} {{.metadata.creationTimestamp}}{{\"\n\"}}{{end}}' | awk '$2 <= \"'$(date -d 'yesterday' -Ins --utc | sed 's/+0000/Z/')'\" { print $1 }' | xargs --no-run-if-empty kubectl delete deployment",
                "kubectl get pods -n ${var.namespace_name} -o go-template --template '{{range .items}}{{.metadata.name}} {{.metadata.creationTimestamp}}{{\"\n\"}}{{end}}' | awk '$2 <= \"'$(date -d 'yesterday' -Ins --utc | sed 's/+0000/Z/')'\" { print $1 }' | xargs --no-run-if-empty kubectl delete pod",
                "kubectl get services -n ${var.namespace_name} -o go-template --template '{{range .items}}{{.metadata.name}} {{.metadata.creationTimestamp}}{{\"\n\"}}{{end}}' | awk '$2 <= \"'$(date -d 'yesterday' -Ins --utc | sed 's/+0000/Z/')'\" { print $1 }' | xargs --no-run-if-empty kubectl delete service",
                "kubectl delete cronjobs -n commit --all"
              ])

            }
          }

        }
      }
    }
  }
}
