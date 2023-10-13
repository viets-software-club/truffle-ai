# Truffle AI

Truffle AI is a platform helping VC analysts find early stage tech startups. It automatically collects traces founders leave on the internet, visualizes them in a compelling way and makes it easy for investors to keep track of and potentially reach out to startups they discover.

## Getting Started

You can run the application locally using NodeJS or Docker. We recommend using [NodeJS](https://nodejs.org/) for development and [Docker](https://www.docker.com/products/docker-desktop/) with [Kubernetes](https://kubernetes.io/) for production.

Make sure to set up the correct environment variables before starting to develop and build.
- Create a file called `.env.dev` for NodeJS or `.env` for Docker Compose in the root directory for the backend services.
- Create a file called `.env.local` in the ui package for the frontend application.

Refer to the respective `.env.example` files for a list of all required variables.

Install the [recommended VS Code extensions](./.vscode/extensions.json) for the best development experience.

## Packages

The project consists of four [microservices](./packages):

- [graphql_gateway](./packages/graphql_gateway/)
- [graphql_server](./packages/graphql_server/)
- [repo_job](./packages/repo_job/)
- [ui](./packages/ui/)

### graphql_gateway

Composes multiple GraphQL schemas into one superschema and redirects all queries to the corresponding service, either a [postgraphile Supabase](https://supabase.com/blog/graphql-now-available) or the [graphql_server](./packages/graphql_server).

### graphql_server

Sets up a [Fastify](https://www.fastify.io/) server which runs [Mercurius](https://mercurius.dev/#/) to host a GraphQL schema. It is used to build our own GraphQL schemas and contains all business logic.

Make sure to set the `jwt` cookie before trying to access the gateway.

### repo_job

Consists of a simple cron job that is run in a specified time interval and notifies the graphql_server to update all bookmarked repositories.

### ui

Contains the frontend of Truffle AI, namely a [Next.js](https://nextjs.org/) application using [TailwindCSS](https://tailwindcss.com/) for styling and [urql](https://github.com/urql-graphql/urql) as GraphQL client.

## Important commands

Note: services are served continuously and jobs are run once.

### General
```zsh
npm ci # installs all dependencies from package-lock.json
npm run prepare # installs pre-commit hook (running lint-staged on staged files)

npm run dev # starts all services and jobs in dev mode
npm run dev:jobs # starts all jobs in dev mode
npm run dev:services # starts all services in dev mode

npm run build # builds all services and jobs
npm run build:jobs # builds all jobs
npm run build:services # builds all services
npm run serve # serves all built services
npm run job # starts all jobs

npm run test # checks code for formatting errors and run lint
npm run format # formats code with Pettier
npm run lint # lints code with ESLint

docker compose build # builds Docker containers
docker compose up # builds and runs created Docker containers
```

### Package specific

You can use [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) to run specialized commands of the individual packages from the root directory. Here are a few examples:

```zsh
npm run dev -w ui # starts the frontend dev server
npm run codegen -w ui # generates types and hooks for new GraphQL queries in the ui package
npm run update-types -w graphql_server # updates Supabase GraphQL types in graphql server
npm run react:update-react-imports -w ui # removes redundant import statements of 'react' in components
``````