terraform {
  cloud {
    organization = "viets-software-club"

    workspaces {
      project = "truffle-ai"
      tags    = ["do-setup", "do-setup-dev", "do-setup-prod"]
    }
  }
}
