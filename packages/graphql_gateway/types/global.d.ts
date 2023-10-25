export {}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SUPABASE_URL: string
      SUPABASE_SERVICE_KEY: string
      NODE_ENV: 'development' | 'production'
      PORT: number
    }
  }
}
