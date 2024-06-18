# Truffle AI

Truffle AI is a platform helping VC analysts find early stage tech startups. It automatically collects traces founders leave on the internet, visualizes them in a compelling way and makes it easy for investors to keep track of and potentially reach out to startups they discover.

## Getting Started

### Requirements

- Golang
- Node
- Docker
- Kubernetes Cluster
- Supabase
- Doctl

### Setup Editor

Install the following extensions:

- rust-analyzer
- Biome
- Go
- Svelte for VS Code
- Tailwind CSS IntelliSense
- Deno
- Docker

then add to `.vscode` or depending on your editor the following:

```json
{
  "deno.enablePaths": [
    "./packages/build-values"
  ],
  "rust-analyzer.linkedProjects": [
    "packages/graphql-gateway/Cargo.toml"
  ]
}
```

### Installation

### Configuration

To configure your project for your environment, fill in the values in `values/input` for your environment (commit, staging, production) and remove the `example.` prefix.

Then run `task values:generate` to generate the Kubernetes ConfigMaps and Secrets in `./k8s`, as well as the `.env` files for all environments (commit, staging, production) in `./envs`.

Next fill in `./envs/.env` the missing values.

## Environment variables

Environment variables are loaded in the order `.env`, `.env.${ENV}` and then `.env.local` for local development.

### Local Development

Just start all services with `ENV=commit t dev`

### Deployment

You can now deploy the application.

### Commands

You can see all commands by executing `t --list-all`.

## Architecture

For authentication, the database, and the database GraphQL layer Supabase is used.
Additionally servers are hosted on DigitalOcean Managed Kubernetes.
A traefik reverse proxy accepts requests if `auth-server` accepts them. It also enables userapikey headers to authenticate and access the whole GraphQL API.
For custom backend logic, the `graphql-server` periodically updates repositiories and allows requests to add respositories in realtime to the database.
The `ui` is a SvelteKit implementation using two GraphQL clients. One to access the database on Supabase directly and one to `graphql-server` to add bookmarks of repositories.

## Structure

### Database (./db)

The database is a Postgre database running the `pg_graphql` extension that's hosted on Supabase. It exposes a full GraphQL API that's secured with sql policies. It is normalized for 3rd Normalform.

### Docker (./docker)

Contains Docker Compose files for local testing.

### Environment Variables (./envs)

Contains all the environment variables (.env, .env.commit, .env.staging, .env.production, .env.local) and a script to source them.

### Kubernetes (./k8s)

Contains the helm charts and the scripts to deploy the application.

### Packages (./packages)

There are four main packages in `./packages`. 

### `apis`

Used to test external APIs like ScrapingBot to get exact output formats. Important for designing the database tables.

### `gateway`

A golang gateway server, that authenticates any requests and proxies them to the Supabase GraphQL API or `graphql-server`. It also accepts userapikey headers to identify a user and give him access to the app's API infrastructure.

### `graphql-gateway`

An http proxy server that takes a request header `x-server` and proxies the request to the correct server based on the header value.
It also does authentication and accepts userapikeys to identify a user.

### `graphql-server`

A golang graphql server that updates the data in the database periodically via cronjobs, allows to fetch data in the future via realtime over graphql subscriptions and inserts new bookmarks to the database in realtime, which requires scraping that is done concurrently.

### `twitter-server`

A server used to access grok AI and generate text based on repository input. Not included in the deployment.

### `ui`

Contains the frontend of Truffle AI. It connects with the Supabase API directly via a GraphQL Client to load content from the database. Another client then connects with `graphql-server` to be able to add bookmarks via the application logic of our own server.

### Terraform (./tf)

Contains the terraform files to create the infrastructure of the application on DigitalOcean.

### Values (./values)

Contains the input for the values used by Kubernetes and the environment variables, contains scripts to generate these values for Kubernetes and environment variables in the right format.