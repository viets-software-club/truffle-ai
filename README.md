# Truffle AI

Truffle AI is a platform helping VC analysts find early stage tech startups. It automatically collects traces founders leave on the internet, visualizes them in a compelling way and makes it easy for investors to keep track of and potentially reach out to startups they discover.

## Features

- View and analyze GitHub repositories and their associated data.
- See timeline of stars, forks, issues in time intervals and normalize data to same beginning
- Scrape multiple services concurrently in realtime
- View GitHub Stats, Discord Invites, LinkedIn URL, Hackernews Comments, Twitter URL, Website URL etc.
- Get AI simplicfications of data
- List Trending repositories (daily, weekly, month)
- Bookmark repositories
- Whitelist Domains and Emails
- User API Keys for API access
- Table View with Filters, Sorting & Hide Columns
- Take Notes
- Delete your account
- Change theme

## Featured Technologies

- 3 environments: commit, staging, production
- Commit specific urls
- SvelteKit UI Dashboard with shadcn-svelte
- Golang Gateway for Supabase and Custom GraphQL Server
- GraphQL server
- Isolated namespaced Kubernetes deployments
- Docker Compose files for development
- NGINX Ingress Controller
- GitHub Action generated Docker images
- GitHub Action testing and building packages
- Golang and Terraform scripts to setup infrastructure
- Postgre Database with psql setup command, sql triggers, policies, functions, 
- Taskfiles for setup, development and deployment via command line
- Apollo Clients for GraphQL Access with Codegen
- Supabase Authentication
- Using Supabase Realtime channels for updating realtime data
- Cronjob updating data daily, weekly and monthly in background

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

- Biome
- Go
- Svelte for VS Code
- Tailwind CSS IntelliSense
- Docker
- GitHub Actions

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

You can now deploy the application. See the Taskfiles.

### Commands

You can see all Taskfile commands by executing `t --list-all`.

## Architecture

The architecture is divided in frontend (UI) and backend (Gateway, Supabase, GraphQL-Server).
The backend is either reached directly from the UI in the case of Supabase or via the Gateway.
An NGINX ingress controller load balances the backend services except Supabase.

### Supabase

The Postgre database is hosted on Supabase with activated role-level security. It is normalized for 3rd Normalform.
Supabase provides a GraphQL Layer via the pg_graphql extension, the UI makes extensive use of this GraphQL API.
Authentication is also done via Supabase.

### Gateway

The golang gateway acts as a proxy, that proxies requests to Supabase and GraphQL Server.
Before it proxies, it authenticates requests. It can also accept User API Keys to authenticate users.

### GraphQL Server

The golang graphql server allows to mutate data in the database for complex operations that require custom server logic.
It is able to scrape multiple services in realtime and add the data to the database.
It also runs cronjobs that update the database data continously.

### UI

The Svelte 5 UI is integrated with Shadcn, TailwindCSS, Biome. It usually makes requests via the Apollo GraphQL clients to the Gateway or Supabase directly.

## Structure

### Github (./.github)

This module contains GitHub Actions for assigning the creator of a PR, verifying PRs, testing and building the `packages`, build the Docker Images and create a released version based on Git Tags.

### Database (./db)

Contains the sql files. Has Taskfile commands to delete all tables, policies, types etc. and recreate them via psql. 

### Docker (./docker)

Contains Docker Compose files for local testing.

### Environment Variables (./envs)

Contains all the environment variables (.env, .env.commit, .env.staging, .env.production, .env.local).

### Kubernetes (./k8s)

Contains the helm charts and the scripts to deploy the application via helm.

### Packages (./packages)

There are four main packages in `./packages`. 

### `apis`

Used to test external APIs like ScrapingBot to get exact output formats. Important for designing the database tables.

### `gateway`

A golang gateway server, that authenticates any requests and proxies them to the Supabase GraphQL API or `graphql-server`. It also accepts userapikey headers to identify a user and give him access to the app's API infrastructure.

### `graphql-server`

A golang graphql server that updates the data in the database periodically via cronjobs, allows to fetch data in the future via realtime over graphql subscriptions and inserts new bookmarks to the database in realtime, which requires scraping that is done concurrently.

### `twitter-server`

A server used to access grok AI and generate text based on repository input. Not included in the deployment.

### `ui`

Contains the frontend of Truffle AI. It connects with the Supabase API directly via a GraphQL Client to load content from the database. Another client then connects with `graphql-server` to be able to add bookmarks via the application logic of our own server.

### Terraform (./tf)

Contains the terraform files to create the infrastructure of the application on DigitalOcean.

### Values (./values)

Contains the input for the values used by Kubernetes and the environment variables, contains scripts to generate these values for Kubernetes and .env files.

## Deprecated Technologies

Over the course of this project, several technologies were used and later replaced. Here's a list of those technologies and what they were replaced with:

- **Rust API gateway**: Replaced with Golang Gateway as it is simpler to maintan
- **ZX Deployment Scripts**: Replaced with Golang Deployment Scripts
- **GraphQL Mesh**: Replaced with Golang Gateway as it had a memory issue when used with external server logic e.g. Fastify (running Supabase GraphQL queries with complex filters through it crashed)
- **Grafbase Gateway**: Replaced with Golang Gateway as it couldn't handle the documented authentication logic, it was below v1.0.0
- **Next.js**: Replaced with SvelteKit and Svelte 5 because of speed, simplicity, less code, clean code refactoring, developer change and maintainability.
- **Terraform Kubernetes Config**: Replaced with Helm; Kubernetes Deployments in Terraform were too slow and inflexible.
- **PNPM**: Used for disallowing hoisting in GraphQL Mesh because of dependency issues. Now there is only one npm module and no GraphQL Mesh anymore. Replaced with NPM.
- **Node.js Backend**: Replaced with Golang backend server so that scraping can be done in realtime and concurrently. Golang provides for most APIs REST libraries and is faster.
- **Deno env variable scripts**: Replaced with Golang scripts

Each of these technologies served a purpose at the time, but were eventually replaced as the needs of the project evolved.