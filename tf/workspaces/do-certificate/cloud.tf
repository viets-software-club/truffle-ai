terraform {
  cloud {
    organization = "viets-software-club"

    workspaces {
      project = "truffle-ai"
      name    = "do-certificate"
    }
  }
}
