import {
	PUBLIC_SUPABASE_ANON_KEY,
	PUBLIC_SUPABASE_GRAPHQL_URL,
} from "$env/static/public";
import { supabaseClient } from "$lib/supabase/index";
import {
	ApolloClient,
	ApolloLink,
	HttpLink,
	InMemoryCache,
} from "@apollo/client/core/index.js";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
	uri: PUBLIC_SUPABASE_GRAPHQL_URL,
});
const authLink = setContext(async (_, { headers }) => {
	const { data, error } = await supabaseClient.auth.getSession();

	if (error) console.error("Error: ", error.message);

	const token = data ? data.session?.access_token : "";

	return {
		headers: {
			...headers,
			Authorization: token ? `Bearer ${token}` : "",
			"Content-Type": "application/json",
			apiKey: PUBLIC_SUPABASE_ANON_KEY,
		},
	};
});
const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: PUBLIC_SUPABASE_GRAPHQL_URL,
	link: authLink.concat(httpLink),
	queryDeduplication: true,
});

export default client;
