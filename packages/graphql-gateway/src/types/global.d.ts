export {}
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			SUPABASE_URL: string
			SUPABASE_SERVICE_KEY: string
			SUPABASE_JWT_SECRET: string
			NODE_ENV: 'development' | 'production'
			GRAPHQL_GATEWAY_PORT: number
		}
	}
}
