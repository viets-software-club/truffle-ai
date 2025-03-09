# Truffle AI

Truffle AI is a platform helping VC analysts find early stage tech startups. It automatically collects traces founders leave on the internet, visualizes them in a compelling way and makes it easy for investors to keep track of and potentially reach out to startups they discover.

## ✨ Features

- **View and analyze** GitHub repositories and their associated data 📊
- See timeline graph of **stars** ⭐️, **forks** 🍴, **issues** 📝 in time intervals and normalize data to same beginning
- Scrape multiple APIs for data **concurrently in real-time**
- View GitHub Stats, Discord Invites, LinkedIn URL, Hackernews Comments, Twitter URL, Website URL etc.
- Get **ChatGPT AI** 🤖 simplicfications of the data
- **List Trending repositories** (daily, weekly, month)
- **Bookmark** 📌 GitHub repositories
- **Whitelist** Domains and Emails
- **User API Keys** for API access
- Table View of all repositories with **Filters, Sorting & Hide Columns**
- Take public and private **notes** ✏️ on bookmarks
- Delete your account
- Change **theme** (light/dark)

## 💻 Featured Technologies

- **Svelte 5** frontend with Shadcn
- Golang **gateway with authentication** and access to Supabase or backend server
- Golang backend server with GraphQL
- 3 environments with previews: **commit, staging, production**; in commit env preview urls with git hash
- SvelteKit UI Dashboard with **shadcn-svelte**
- Isolated namespaced **Kubernetes** deployments
- **Docker Compose** files for development
- NGINX Ingress Controller
- **GitHub Action** generated **Docker** images
- GitHub Action for testing and building packages
- Golang and **Terraform** scripts to setup infrastructure
- **PostgreSQL Database** with psql setup command, sql triggers, policies, functions, nested types etc.
- Go **Taskfiles** for setup, development and deployment via command line
- Apollo Clients for **GraphQL** Access typed with **Codegen**
- Supabase Authenticated Login
- Using **Supabase Realtime channels** for updating realtime data
- **Cronjob** updating data daily, weekly and monthly in background

## 📦 Getting Started

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
- Hashicorp Terraform
- Kubernetes

### Configuration

To configure your project for your environment, fill in the values in `values/input` for your environment (commit, staging, production) and remove the `example.` prefix.
Then run `task values:generate` to generate the Kubernetes ConfigMaps and Secrets in `./k8s`, as well as the `.env` files for all environments (commit, staging, production) in `./envs`.
Next fill in `./envs/.env` the missing values.

### Environment variables

Environment variables are loaded in the order `.env`, `.env.${ENV}` and then `.env.local` for local development.

### Local Development

Just start all services with `ENV=commit t dev`

### Deployment

You can now deploy the application as described in the [Taskfiles](./Taskfile.yml).
It might be necessary to apply the `proxy-protocol` to the nginx-ingress-controller config map manually like described [here](https://github.com/nginxinc/kubernetes-ingress/tree/90d40829ca0b92e4a8ebcc36415c220e72da7405/examples/shared-examples/proxy-protocol) and rollout restart afterwards:

`kubectl rollout restart deployment ing-controller-release-nginx-ingress-nginx-ingress-controller`

### Commands

You can see all Taskfile commands by executing `task --list-all`.

## 🏛️ Architecture

The architecture is divided in frontend (UI) and backend (Gateway, Supabase, GraphQL-Server).
The backend is either reached directly from the UI in the case of Supabase or via the Gateway.
An NGINX ingress controller load balances the backend services (except Supabase).

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

## 🗂️ Structure

### Github `(./.github)`

This module contains GitHub Actions for assigning the creator of a PR, verifying PRs, testing and building the `packages`, build the Docker Images and create a released version based on Git Tags.

### Database `(./db)`

Contains the sql files. Has Taskfile commands to delete all tables, policies, types etc. and recreate them via psql. 

### Docker `(./docker)`

Contains Docker Compose files for local testing.

### Environment Variables `(./envs)`

Contains all the environment variables (.env, .env.commit, .env.staging, .env.production, .env.local).

### Kubernetes `(./k8s)`

Contains the helm charts and the scripts to deploy the application via helm.

### Terraform `(./tf)`

Contains the terraform files to create the infrastructure of the application on DigitalOcean.

### Values `(./values)`

Contains the input for the values used by Kubernetes and the environment variables, contains scripts to generate these values for Kubernetes and **.env** files.

### Packages `(./packages)`

There are four main packages 📦 in `./packages`. 

#### apis

Used to test external APIs like ScrapingBot to get exact output formats. Important for designing the database tables.

#### gateway

A golang gateway server, that authenticates any requests and proxies them to the Supabase GraphQL API or `graphql-server`. It also accepts userapikey headers to identify a user and give him access to the app's API infrastructure.

#### graphql-server

A golang graphql server that updates the data in the database periodically via cronjobs, allows to fetch data in the future via realtime over graphql subscriptions and inserts new bookmarks to the database in realtime, which requires scraping that is done concurrently.

#### twitter-server

A server used to access grok AI and generate text based on repository input. Not included in the deployment.

#### ui

Contains the frontend of Truffle AI. It connects with the Supabase API directly via a GraphQL Client to load content from the database. Another client then connects with `graphql-server` to be able to add bookmarks via the application logic of our own server.
