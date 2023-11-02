# Environment variables and build_args

## graphql_gateway (build_args and envs)

```ts
/** NOTE: port must be manually changed in `.meshrc.yaml` **/

// build-args:
SUPABASE_SERVICE_KEY
GRAPHQL_SERVER_URL = 'http://0.0.0.0:3002/graphql'
SUPABASE_GRAPHQL_URL = 'https://<project_ref>.supabase.co/graphql/v1' // insert <project_ref>
// envs:
SUPABASE_URL = 'https://<project_ref>.supabase.co' // insert <project_ref>
SUPABASE_SERVICE_KEY
NODE_ENV = 'production' | <any> // enables logs for non production use
```

## graphql_server

```ts
NODE_ENV = 'development' | 'production' // pino-pretty logging
SUPABASE_URL = 'https://<project_ref>.supabase.co' // insert <project_ref>'
SUPABASE_SERVICE_KEY
GITHUB_API_TOKEN
GITHUB_API_URL
OPEN_API_KEY
SCRAPING_BOT_USER_NAME
SCRAPING_BOT_API_KEY
SCRAPING_BOT_API_ENDPOINT
SCRAPER_API_API_KEY?
```

## preview_job

```ts
// no envs
```

## repo_job

```ts
GRAPHQL_SERVER_PORT = '3002'
```

## ui

```ts
NEXT_PUBLIC_API_GRAPHQL_URL = 'https://api.truffle.tools/graphql'
NEXT_PUBLIC_API_URL = 'https://api.truffle.tools'
NEXT_PUBLIC_SITE_URL = 'https://truffle.tools'
NEXT_PUBLIC_SUPABASE_URL = 'https://<project_ref>.supabase.co'
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

# ConfigMaps and Secrets

- ${APP}-supabase-config, ${APP}-supabase-secret
- ${APP}-scrapingbot-config, ${APP}-scrapingbot-secret
- ${APP}-
