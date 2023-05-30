export {}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_API_TOKEN: string
      SUPABASE_URL: string
      SUPABASE_API_KEY: string
      NODE_ENV: 'development' | 'production'
      SERVER_PORT: number
    }
  }
}
