import type { CodegenConfig } from '@graphql-codegen/cli';

let config: null | CodegenConfig = null;
if (typeof process.env.PUBLIC_SUPABASE_GRAPHQL_URL !== 'string') {
	console.error('PUBLIC_SUPABASE_GRAPHQL_URL is not defined');
} else if (typeof process.env.PUBLIC_SUPABASE_ANON_KEY !== 'string') {
	console.error('PUBLIC_SUPABASE_ANON_KEY is not defined');
} else {
	config = {
		overwrite: true,
		documents: './src/lib/graphql/gateway/**/*.graphql',
		schema: 'graphql-schema.server.graphql',
		// config: {
		// 	clientPath: '../client-supabase' // relative to src/graphql/supabase/generated-codegen.ts (see import statement on first line of this file)
		// },
		generates: {
			'src/lib/graphql/gateway/generated-codegen.ts': {
				plugins: ['typescript', 'typescript-operations', 'typed-document-node']
			}
		}
	};
}
export default config;
