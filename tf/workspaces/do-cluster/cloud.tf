terraform {
  cloud {
    organization = "viets-software-club"

    workspaces {
      project = "truffle-ai"
      tags    = ["do-cluster", "do-cluster-prod", "do-cluster-dev"]
    }
  }
}
