# truffle-ai-backend

## Installation

Install Docker from https://www.docker.com/ and install dependencies with `npm ci`.<br/>
Before starting to develop check that you have setup your environment variables, see section [Environment Variables](#Environment-variables)

## Commands

```zsh
npm ci # install all dependencies from package-lock.json

npm run prepare # installs pre-commit hook (running lint-staged on staged files)
npm run dev # start services in dev mode
npm run build # build services
npm run serve # serve the built services from an endpoint

npm run test # check your files format and lint them
npm run format # format all your files with Prettier
npm run lint:fix # lint your files with ESLint and try to fix errors

docker compose build # builds the Docker containers
docker compose up # run created Docker containers
```

## Services

The project consists of two services

- **./packages/graphql_gateway** # Gateway composing multiple GraphQL schemas into one, authentication check on jwt cookies
- **./packages/graphql_server** # Graphql server

### graphql_gateway

The gateway service composes schemas into one superschema and redirects the queries to the corresponding service. This is currently [postgraphile Supabase](https://supabase.com/blog/graphql-now-available) and the [graphql_server service](./packages/graphql_server).

### graphql_server

The graphql server service sets up a [Fastify](https://www.fastify.io/) server, that runs [Mercurius](https://mercurius.dev/#/) to host a GraphQL schema. It will be used to build our own GraphQL schemas.
<br /><br/>
Both services expose a graphiql endpoint. To work with these services you can use [NPM workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces).

## Environment variables

Before starting to develop check that you have setup your Environment variables in `.env.dev`! They are provided to you in the official channels. The script `env.sh` checks they are loaded only during development.

```zsh
SUPABASE_REFERENCE_ID # supabase reference id
SUPABASE_URL # supabase url
SUPABASE_GRAPHQL_URL # supabase graphql url
SUPABASE_API_KEY # apiKey
GATEWAY_PORT # number
SERVER_PORT # number
SERVER_URL # url to graphql_server
SERVER_GRAPHQL_URL # url to graphql route on graphql_server
NODE_ENV # development|production
GITHUB_API_KEY # github api key
OPENAI_API_KEY # openAI api key
```
