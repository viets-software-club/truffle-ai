import { PUBLIC_SUPABASE_GRAPHQL_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { ApolloClient, InMemoryCache } from '@apollo/client/core/index.js';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: PUBLIC_SUPABASE_GRAPHQL_URL,
	headers: {
		'x-server': 'server',
		apiKey: PUBLIC_SUPABASE_ANON_KEY
	}
});

export default client;
