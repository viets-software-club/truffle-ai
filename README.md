# truffle-ai-backend

## Getting Started

You can run the application locally using NodeJS or Docker.<br />
For **development purposes** we recommend using [NodeJS](https://nodejs.org/), for **production** we recommend using [Docker](https://www.docker.com/products/docker-desktop/) with [Kubernetes](https://kubernetes.io/).

**Important**<br />
Before continuing make sure you have set up the [environment variables](#environment-variables), for Docker in a file called `.env` and for NodeJS in a file called `.env.dev`

### Running the app locally with Docker (production)

We recommend you to install [Docker](https://www.docker.com/products/docker-desktop/) for production.<br />
To build all Docker images and serve them in containers with `docker-compose`, run

```
docker compose up
```

in a terminal.<br />Your production ready images should now be created and served locally. You can run them in a Kubernetes cluster, see `./config/deployment.template.yml` for configuration.

### Developing & Building the app with NodeJS

To get started with the development of the application, install [NodeJS](https://nodejs.org/).<br />
Then run the following in a terminal

```zsh
cd truffle-ai-backend # project root
npm ci # install dependencies
```

to install all dependencies.<br /><br />
To run the application in development mode, run

```zsh
npm run dev:services # dev mode
```

To build and serve the application with NodeJS run

```zsh
npm run build:services # builds the app
npm run serve # serve the app
```

## Services and Jobs

The project consists of three [microservices](./packages)

- **graphql_gateway** a gateway composing multiple GraphQL schemas into one, authentication check with jwt cookie
- **graphql_server** a Graphql server
- **repo_job** a CronJob running at 2am to fetch data from APIs

### graphql_gateway

The gateway service composes schemas into one superschema and redirects the queries to the corresponding service. This is currently a [postgraphile Supabase](https://supabase.com/blog/graphql-now-available) and the [graphql_server service](./packages/graphql_server).

### graphql_server

The graphql server service sets up a [Fastify](https://www.fastify.io/) server, that runs [Mercurius](https://mercurius.dev/#/) to host a GraphQL schema. It will be used to build our own GraphQL schemas.

```zsh
npm run update-types # updates supabase graphql types
```

### repo_job

The repo job service runs a script every day at 2am to get essential data for the app from external sources.
<br /><br/>
To work with all services simultaneously you can use [NPM workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces).

## List of Commands

Note: Services are served continuously and Jobs are run once.

```zsh
npm ci # install all dependencies from package-lock.json

npm run prepare # installs pre-commit hook (running lint-staged on staged files)
npm run dev # start services and jobs in dev mode
npm run dev:jobs # start jobs in dev mode
npm run dev:services # start services in dev mode
npm run build # build services and jobs
npm run build:jobs # build jobs
npm run build:services # build services
npm run serve # serve the built services (excluding jobs)
npm run job # starts all jobs

npm run test # check your files format and lint them
npm run format # format all your files with Pettier
npm run lint # lint your files with ESLintr

docker compose build # builds the Docker containers
docker compose up # builds and runs created Docker containers
```

## Environment Variables

Before starting to develop and build check that you have setup your environment variables in `.env.dev` for NodeJS or `.env` for Docker-Compose.

```zsh
SUPABASE_REFERENCE_ID # supabase reference id
SUPABASE_URL # supabase url
SUPABASE_GRAPHQL_URL # supabase graphql url
SUPABASE_API_KEY # supabase api key
GATEWAY_PORT # port number
SERVER_PORT # port number
SERVER_URL # url to graphql_server
SERVER_GRAPHQL_URL # url to graphql route on graphql-server
NODE_ENV # development|production
GITHUB_API_TOKEN # github api token
OPENAI_API_KEY # openAI api key
```
