import { PUBLIC_SUPABASE_GRAPHQL_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { HttpLink, ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client/core/index.js';
import { setContext } from '@apollo/client/link/context';
import { supabaseClient } from '$lib/supabase/index';

const httpLink = new HttpLink({
	uri: PUBLIC_SUPABASE_GRAPHQL_URL
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
			Authorization: token ? `Bearer ${token}` : '',
			'Content-Type': 'application/json',
			apiKey: PUBLIC_SUPABASE_ANON_KEY
		}
	};
});
const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: PUBLIC_SUPABASE_GRAPHQL_URL,
	link: authLink.concat(httpLink)
});

export default client;
