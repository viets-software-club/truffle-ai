# Build-args and Envs graphql_gateway
```ts
// build-args:
SUPABASE_SERVICE_KEY
GRAPHQL_SERVER_URL = 'http://0.0.0.0:3002/graphql'
SUPABASE_GRAPHQL_URL = 'https://<project_ref>.supabase.co/graphql/v1' // insert <project_ref>
// envs:
SUPABASE_URL = 'https://<project_ref>.supabase.co' // insert <project_ref>
SUPABASE_SERVICE_KEY
NODE_ENV = 'production' | <any> // enables logs for non production use
```
port must be manually changed in `.meshrc.yaml`