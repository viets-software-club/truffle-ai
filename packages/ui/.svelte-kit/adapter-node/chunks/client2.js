import { a as PUBLIC_SUPABASE_GRAPHQL_URL, b as PUBLIC_SUPABASE_ANON_KEY } from "./public.js";
import { ApolloClient, InMemoryCache } from "@apollo/client/core/index.js";
new ApolloClient({
  cache: new InMemoryCache(),
  uri: PUBLIC_SUPABASE_GRAPHQL_URL,
  headers: {
    "x-server": "server",
    apiKey: PUBLIC_SUPABASE_ANON_KEY
  }
});
