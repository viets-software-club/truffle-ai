import {
	PUBLIC_GATEWAY_GRAPHQL_URL,
	PUBLIC_SUPABASE_GRAPHQL_URL,
	PUBLIC_SUPABASE_ANON_KEY
} from '$env/static/public';
import { HttpLink, ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client/core/index.js';
import { setContext } from '@apollo/client/link/context';

import { supabaseClient } from '$lib/supabase/index';

// const backendServerEndpoint = new HttpLink({
// 	uri: PUBLIC_GATEWAY_GRAPHQL_URL
// });
// const supabaseGraphQLEndpoint = new HttpLink({
// 	uri: PUBLIC_SUPABASE_GRAPHQL_URL
// });
const httpLink = new HttpLink({
	uri: PUBLIC_GATEWAY_GRAPHQL_URL
});
const authLink = setContext(async (_, { headers }) => {
	// get the authentication token from local storage if it exists
	const { data, error } = await supabaseClient.auth.getSession();

	if (error) console.error('Error: ', error.message);

	const token = data ? data.session?.access_token : '';

	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			'x-server': 'server',
			Authorization: token ? `Bearer ${token}` : '',
			'Content-Type': 'application/json'
		}
	};
});
console.log(PUBLIC_GATEWAY_GRAPHQL_URL);
const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: PUBLIC_GATEWAY_GRAPHQL_URL,
	// headers: {
	// 	'x-server': 'server',
	// 	Authorization: `Bearer ${PUBLIC_SUPABASE_ANON_KEY}`,
	// 	apiKey: PUBLIC_SUPABASE_ANON_KEY
	// }

	link: authLink.concat(httpLink)

	// link: ApolloLink.split(
	// 	(operation) => operation.getContext().clientName === 'supabase',
	// 	supabaseGraphQLEndpoint,
	// 	backendServerEndpoint
	// )
});

export default client;
