export {}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      OPENAI_API_KEY: string
      GITHUB_API_TOKEN: string
      SUPABASE_URL: string
      SUPABASE_SERVICE_API_KEY: string
      NODE_ENV: 'development' | 'production'
      SERVER_PORT: number
    }
  }
}
