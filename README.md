# Truffle AI

Truffle AI is a platform helping VC analysts find early stage tech startups. It automatically collects traces founders leave on the internet, visualizes them in a compelling way and makes it easy for investors to keep track of and potentially reach out to startups they discover.

## Getting Started

You can run the application locally using NodeJS or Docker. We recommend using [NodeJS](https://nodejs.org/) for development and [Docker](https://www.docker.com/products/docker-desktop/) with [Kubernetes](https://kubernetes.io/) for production.

Make sure to set up the correct environment variables before starting to develop and build:

- Create `.env` in the root directory (refer to `.env.example` for a list of all required variables)
- Run `npm run prepare` to create a symlink for .env in the ui package

Install the [recommended VS Code extensions](./.vscode/extensions.json) for the best development experience.

## Packages

The project consists of four microservices:

### `graphql_gateway`

Composes multiple GraphQL schemas into one superschema and redirects all queries to the corresponding service, either a [postgraphile Supabase](https://supabase.com/blog/graphql-now-available) or the [graphql_server](./packages/graphql_server).

### `graphql_server`

Sets up a [Fastify](https://www.fastify.io/) server which runs [Mercurius](https://mercurius.dev/#/) to host a GraphQL schema. It is used to build our own GraphQL schemas and contains all business logic.

Make sure to set the `jwt` cookie before trying to access the gateway.

### `repo_job`

Consists of a simple cron job that is run in a specified time interval and notifies the graphql_server to update all bookmarked repositories.

### `ui`

Contains the frontend of Truffle AI, a [Next.js](https://nextjs.org/) application using [TailwindCSS](https://tailwindcss.com/) for styling and [urql](https://github.com/urql-graphql/urql) as GraphQL client.

## Important commands

### General

Note: services are served continuously and jobs are run once.

```zsh
kubectl config set-context --current --namespace=<namespace-name>

npm ci # installs all dependencies from package-lock.json
npm run prepare # installs pre-commit hook (running lint-staged on staged files) and creates symlink for .env in ui package

npm run dev # starts all services and jobs in dev mode
npm run dev:jobs # starts all jobs in dev mode
npm run dev:services # starts all services in dev mode
npm run dev:backend # starts graphql_gateway, graphql_server and repo_job in dev mode

npm run build # builds all services and jobs
npm run build:jobs # builds all jobs
npm run build:services # builds all services
npm run build:backend # builds graphql_gateway, graphql_server and repo_job
npm run serve # serves all previously built services
npm run jobs # starts all jobs

npm run prettier:check # checks all packages for formatting issues with Prettier
npm run prettier:fix # automatically fixes formatting issues in all packages with Pettier
npm run lint # lints all packages with ESLint
npm run test # runs prettier:check and lint

docker compose build # builds Docker containers
docker compose up # builds and runs created Docker containers
```

### Package specific

You can use [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) to run specialized commands of the individual packages from the root directory.

```zsh
SUPABASE_REFERENCE_ID # supabase reference id
SUPABASE_URL # supabase url
SUPABASE_GRAPHQL_URL # supabase graphql url
SUPABASE_SERVICE_KEY # supabase service key
SUPABASE_ANON_KEY # supabase anon key
GATEWAY_PORT # port number
SERVER_PORT # port number
SERVER_URL # url to graphql_server
SERVER_GRAPHQL_URL # url to graphql route on graphql-server
NODE_ENV # development|production
GITHUB_API_URL # github api url
GITHUB_API_TOKEN # github api token
OPENAI_API_KEY # openAI api key
SCRAPING_BOT_API_KEY
SCRAPING_BOT_USER_NAME
SCRAPING_BOT_API_ENDPOINT
npm run dev -w ui # starts the frontend dev server
npm run codegen -w ui # generates types and hooks for new GraphQL queries in the ui package
npm run update-types -w graphql_server # updates Supabase GraphQL types in graphql server
npm run react:update-react-imports -w ui # removes redundant import statements of 'react' in components
```
