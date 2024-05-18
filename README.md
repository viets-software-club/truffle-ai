# Truffle AI

Truffle AI is a platform helping VC analysts find early stage tech startups. It automatically collects traces founders leave on the internet, visualizes them in a compelling way and makes it easy for investors to keep track of and potentially reach out to startups they discover.

## Getting Started

You can run the application locally using NodeJS or Docker. We recommend using [NodeJS](https://nodejs.org/) for development and [Docker](https://www.docker.com/products/docker-desktop/) with [Kubernetes](https://kubernetes.io/) for production.

Make sure to set up the correct environment variables before starting to develop and build:

- Create `.env` in the root directory (refer to `.env.example` for a list of all required variables)
- Run `npm ci` to install all necessary packages and create a symlink for .env in the ui package

Install the [recommended VS Code extensions](./.vscode/extensions.json) for the best development experience.

## Packages

The project consists of four microservices:

### `graphql-gateway`

Composes multiple GraphQL schemas into one superschema and redirects all queries to the corresponding service, either a [postgraphile Supabase](https://supabase.com/blog/graphql-now-available) or the [graphql-server](./packages/graphql-server).

### `graphql-server`

Sets up a [Fastify](https://www.fastify.io/) server which runs [Mercurius](https://mercurius.dev/#/) to host a GraphQL schema. It is used to build our own GraphQL schemas and contains all business logic.

Make sure to set the `jwt` cookie before trying to access the gateway.

### `repo-job`

Consists of a simple cron job that is run in a specified time interval and notifies the graphql-server to update all bookmarked repositories.

### `ui`

Contains the frontend of Truffle AI, a [Next.js](https://nextjs.org/) application using [TailwindCSS](https://tailwindcss.com/) for styling and [urql](https://github.com/urql-graphql/urql) as GraphQL client.

## Important commands

### General

Note: services are served continuously and jobs are run once.

```zsh
npm ci # installs all dependencies from package-lock.json
npm run prepare # installs pre-commit hook (running lint-staged on staged files) and creates symlink for .env in ui package

npm run dev <package> # starts <package> in dev mode
npm run dev:jobs # starts all jobs in dev mode
npm run dev:services # starts all services in dev mode
npm run dev:backend # starts graphql-gateway, graphql-server and repo-job in dev mode

npm run build <package> # builds <package>
npm run build:jobs # builds all jobs
npm run build:services # builds all services
npm run build:backend # builds graphql-gateway, graphql-server and repo-job
npm run serve <package> # serves <package> if previously built

npm run prettier:check # checks all packages for formatting issues with Prettier
npm run prettier:fix # automatically fixes formatting issues in all packages with Pettier
npm run lint # lints all packages with ESLint
npm run test # runs prettier:check and lint
```

### Package specific

You can use [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) to run specialized commands of the individual packages from the root directory.

```zsh
npm run dev -w ui # starts the frontend dev server
npm run codegen -w ui # generates types and hooks for new GraphQL queries in the ui package
npm run update-types -w graphql-server # updates Supabase GraphQL types in graphql server
npm run react:update-react-imports -w ui # removes redundant import statements of 'react' in components
```

### Deployment (wip)

```zsh
docker compose build # builds Docker containers
docker compose up # builds and runs created Docker containers

npm run deploy-app # runs deploy-app script using deno
npm run helm:update # updates helm repo

...

kubectl config set-context --current --namespace=<namespace-name> # changes Kubernetes namespace
```

### Design decisions

- Multi client-side GraphQL connects are not a general thing, that's why we use a GraphQL gateway instead
- `graphql-gateway` depends on `graphql-server` so they should be in the same Kubernetes pod
- Kustomize was discussed, but doesn't offer the features needed when passing dynamic values -> `envsubst` was used instead
- Deno will be used when possible for new services
- We have static sites, so we can show loading screens the fastest, the frontend app does not communicate directly with the backend (e.g. it doesn't do SSR), we can therefore put the frontend in a separate Kubernetes Pod, and we also do not need a service to connect them
- `--env-file` in Docker is not the same as `env_file` in the Docker compose file, the former is used for the compose file the latter is used for containers
- Secrets in Github Actions for reusable workflows have to be defined in the caller workflow and again in the reusable workflow, one can skip the former with the inherit property
- Merge terraform/setup with env when moving to multiple clusters for each environment! Due to using one cluster the terraform/setup workspace was created
