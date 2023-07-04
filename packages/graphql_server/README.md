# graphql_server

A server accessing different services and making them available over graphql

### Structure

in `/src`:

- `/api`: files that only call APIs
- `/githubHistory`: files responsible for the star, fork and issue history
- `/graphql`: the graphql resolvers and schema. Some resolvers are refactored into the `/resolver` folder
- `/scraping`: files that do scraping or that call APIs that do scraping
- `/test`: tests. Was only put here as a workaround, so that everything in `/src` is located in the top level of `/dist` after compiling. Should be moved somewhere else asap.
- `/util`: utility function
- `server.ts` initializes the Fastify server with mercurius
- `supabaseClient.ts` creates a supabase client that can be used throughout the program
- `updateProject.ts` contains functions for initiating supabase updates
- `dbUpdater.ts` contains functionality for updating all entries on the db, which is called by the repo_job

in `/types`:

Types that are needed throughout the program. Types correlated to a file called `fileName.ts` can be found in `fileName.d.ts`

### Installation

```bash
npm ci # installs all dependencies
```

### Run

```bash
npm run dev # runs a dev server
npm run build # builds the application to ./dist
npm run serve # serves the build from ./dist
npm run update-types # updates supabase graphql types into the folder specified in package.json f.e. `/types/supabase.d.ts
```

Check [Graphiql](http://localhost:3000/graphiql) with your browser to test the GraphQL server.
