import type { CodegenConfig } from '@graphql-codegen/cli';

let config: null | CodegenConfig = null;

config = {
	overwrite: true,
	documents: './src/lib/graphql/gateway/**/*.graphql',
	schema: 'graphql-schema.server.graphql',
	generates: {
		'src/lib/graphql/gateway/generated-codegen.ts': {
			plugins: ['typescript', 'typescript-operations', 'typed-document-node']
		}
	}
};

export default config;
