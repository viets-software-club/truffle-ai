# Truffle AI

Truffle AI is a platform helping VC analysts find early stage tech startups. It automatically collects traces founders leave on the internet, visualizes them in a compelling way and makes it easy for investors to keep track of and potentially reach out to startups they discover.

This monorepo contains four microservices which make this possible, as well as the necessary configuration files to deploy them to a Kubernetes cluster.

## Packages

### `graphql-gateway`

Composes multiple GraphQL schemas into one superschema and redirects all queries to the corresponding service, either a [postgraphile Supabase](https://supabase.com/blog/graphql-now-available) or the [graphql-server](./packages/graphql-server).

### `graphql-server`

Sets up a [Fastify](https://www.fastify.io/) server which runs [Mercurius](https://mercurius.dev/#/) to host a GraphQL schema. It is used to build our own GraphQL schemas and contains all business logic.

Make sure to set the `jwt` cookie before trying to access the gateway.

### `repo-job`

Consists of a simple cron job that is run in a specified time interval and notifies the graphql-server to update all bookmarked repositories.

### `ui`

Contains the frontend of Truffle AI, a [Next.js](https://nextjs.org/) application using [TailwindCSS](https://tailwindcss.com/) for styling and [urql](https://github.com/urql-graphql/urql) as GraphQL client.

## Development

The following section describes how to get started, run and build services and features the most important commands needed. Refer to [package.json](./package.json) for a full list of available commands.

### Setting up environment

- Make sure you have installed a recent version of [Node.js](https://nodejs.org/)
- Set up environment variables by creating `.env.common` as well as `.env.<environment>` files for commit, staging and production in the root directory (refer to `.env.example` for a list of all required variables)
- Run `npm i` to install dependencies
- (Install [recommended VS Code extensions](./.vscode/extensions.json) for the best development experience)

### Running services locally

- To run GraphQL server, gateway and UI concurrently in development mode, use `npm run dev:app`
- Alternatively, run any individual service using `npm run dev <service>`

### During development

- Whenever the Supabase schema changes, use `npm run update-types` to update the types in GraphQL server
- After you update queries or mutations in the UI package, use `npm run codegen` to regenerate types and custom hooks
- You can use [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) to run specialized commands of the individual packages from the root directory

### Building services

- To create production builds of all services concurrently, use `npm run build:all`
- Alternatively, build any individual service using `npm run dev <service>`

### Code formatting and linting

- All services are checked for formatting issues using [Prettier](https://prettier.io/) and linted with [ESLint](https://eslint.org/) whenever you push changes
- To install a precommit hook that checks all your staged files for formatting and linting errors before you commit, run `npm run husky:install` (disabled by default due to large size of the repo)
- To manually check for formatting or linting errors, use `npm run prettier:check` (replace check with write to fix automatically fixable errors) or `npm run lint`

## Deployment

Along with the packages mentioned above, this repository also includes a lot of configuration files required to set up the infrastructure initially and deploy to it.

### Create a Kubernetes cluster

- Create a DigitalOcean account and add your payment details
- Add DNS records to your domain registrar that point to DigitalOcean's nameservers to be able to manage DNS records
- ...
- Set up a Kubernetes cluster as well as DNS records using Terraform, run `npm run terraform`

### Build Docker images

- Each package contains a multi-stage Dockerfile to create an optimized Docker image
- To ensure that environment variables are passed correctly, the Dockerfiles should only be executed from the root directory though
- This can be done using Docker compose by running `npm run compose:up` (or down)

### Push Docker images to container registry

- Docker images are automatically built and pushed to the [Github container registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) using Github Actions whenever you push changes

### Deploy Ingress controller

...

### Create and install Helm chart

- Check out the branch you want to deploy
- Make sure you have set the correct environment variables in `.env.<environment>`
- Run `npm run k8s:<environment>` to change the Kubernetes cluster configuration to the given environment
- Run `npm run alias:install` to install aliases
- Run `npm run variables:env` and `npm run variables:values` to generate config and secret maps
- To deploy to the dev cluster, run `npm run helm:app:local` to create and install a new Helm chart (dry run is enabled by default)
- To deploy to the prod cluster, first create a new release by running `git tag <version>` and then `git push --tags`, then run `npm run helm:app:publish` and use the version you tagged the release with
- To uninstall previously installed charts, use `npm run helm:app:uninstall:<environment>`

## Design decisions

- Multi client-side GraphQL connects are not a general thing, that's why we use a GraphQL gateway instead
- `graphql-gateway` depends on `graphql-server` so they should be in the same Kubernetes pod
- Kustomize was discussed, but doesn't offer the features needed when passing dynamic values -> `envsubst` was used instead
- Deno will be used when possible for new services
- We have static sites, so we can show loading screens the fastest, the frontend app does not communicate directly with the backend (e.g. it doesn't do SSR), we can therefore put the frontend in a separate Kubernetes Pod, and we also do not need a service to connect them
- `--env-file` in Docker is not the same as `env_file` in the Docker compose file, the former is used for the compose file the latter is used for containers
- Secrets in Github Actions for reusable workflows have to be defined in the caller workflow and again in the reusable workflow, one can skip the former with the inherit property
- Merge terraform/setup with env when moving to multiple clusters for each environment. Due to using one cluster the terraform/setup workspace was created
