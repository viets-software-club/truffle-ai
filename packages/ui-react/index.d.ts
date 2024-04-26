declare type IconComponentType =
  | import('react-icons').IconType
  | import('@primer/octicons-react').Icon
declare type ID = string

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SUPABASE_URL: string
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string
    NEXT_PUBLIC_GRAPHQL_URL: string
    SUPABASE_SERVICE_KEY: string
    SUPABASE_GRAPHQL_URL: string
    GRAPHQL_SERVER_URL: string
  }
}
