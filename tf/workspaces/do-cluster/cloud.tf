terraform {
  cloud {
    organization = "viets-software-club"

    workspaces {
      project = "truffle-ai"
      tags    = ["do-cluster"]
    }
  }
}
