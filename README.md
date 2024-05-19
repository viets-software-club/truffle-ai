# Truffle AI

Truffle AI is a platform helping VC analysts find early stage tech startups. It automatically collects traces founders leave on the internet, visualizes them in a compelling way and makes it easy for investors to keep track of and potentially reach out to startups they discover.

## Getting Started

You can run the application locally using Taskfile or deploy it via the Taskfile.

Make sure to set up the correct environment variables before starting to develop and build.
Fill in the variables for `./_configMaps` and `./_secrets`. In the latter make sure to remove the `example.` prefix of each file.

Make sure you have Taskfile, golang, zx and Node and pnpm installed.

Then install all packages
`pnpm install`


## Create ENV Variables
Create a file `.env.common` containing:

```bash
REPO_NAME=truffle-ai
ORG_NAME=viets-software-club
PRODUCTION_CLUSTER=
STAGING_CLUSTER=
COMMIT_CLUSTER=
```

Then create a file `.env.override` if you want to override for any environment the values.

Run `task values:k8s` for variables used in deployments and `task values:envs` for local environment variables.
These are stored in either `./outputs` for Kubernetes or `.env.[environment]`.

## Specifying environment

You can run commands in `production`, `staging` and `commit` environment.
Just prefix Taskfile commands with `ENVIRONMENT=production` for example.

## Packages

There are three main packages:

### `graphql-gateway`

An http proxy server that takes a request header `x-server` and proxies the request to the correct server based on the header value.
It also does authentication and accepts userapikeys to identify a user.

### `graphql-server`

A golang graphql server that updates the data in the database periodically and allows to fetch data in realtime and add it to the database. 

### `ui`

Contains the frontend of Truffle AI.


## Deployment

GitHub Actions automatically create images on push and pull request events.
To release to production just tag a commit in main with for example v0.0.1.
Then you can deploy with `ENVIRONMENT=production task k8s:any:publish-production`.