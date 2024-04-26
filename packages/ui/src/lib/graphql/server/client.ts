import { PUBLIC_GATEWAY_GRAPHQL_URL, PUBLIC_SUPABASE_GRAPHQL_URL } from '$env/static/public';
import { HttpLink, ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client/core/index.js';

// const backendServerEndpoint = new HttpLink({
// 	uri: PUBLIC_GATEWAY_GRAPHQL_URL
// });
// const supabaseGraphQLEndpoint = new HttpLink({
// 	uri: PUBLIC_SUPABASE_GRAPHQL_URL
// });

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: PUBLIC_GATEWAY_GRAPHQL_URL,
	headers: {
		'x-server': 'server'
	}
	// link: ApolloLink.split(
	// 	(operation) => operation.getContext().clientName === 'supabase',
	// 	supabaseGraphQLEndpoint,
	// 	backendServerEndpoint
	// )
});
export default client;
