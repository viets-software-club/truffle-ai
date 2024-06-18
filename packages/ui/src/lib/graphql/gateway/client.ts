import { PUBLIC_GATEWAY_URL } from "$env/static/public";
import { supabaseClient } from "$lib/supabase/index";
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
} from "@apollo/client/core/index.js";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
	uri: PUBLIC_GATEWAY_URL,
});
const authLink = setContext(async (_, { headers }) => {
	const { data, error } = await supabaseClient.auth.getSession();

	if (error) console.error("Error: ", error.message);

	const token = data ? data.session?.access_token : "";

	return {
		headers: {
			...headers,
			"x-server": "server",
			Authorization: token ? `Bearer ${token}` : "",
			"Content-Type": "application/json",
		},
	};
});
const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: PUBLIC_GATEWAY_URL,
	// headers: {
	// 	'x-server': 'server',
	// 	Authorization: `Bearer ${PUBLIC_SUPABASE_ANON_KEY}`,
	// 	apiKey: PUBLIC_SUPABASE_ANON_KEY
	// }

	link: authLink.concat(httpLink),

	// link: ApolloLink.split(
	// 	(operation) => operation.getContext().clientName === 'supabase',
	// 	supabaseGraphQLEndpoint,
	// 	backendServerEndpoint
	// )
});

export default client;
