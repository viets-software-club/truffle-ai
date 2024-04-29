import { auth, config, connector, graph } from '@grafbase/sdk'

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

export const g = graph.Standalone()

// Data Sources - https://grafbase.com/docs/connectors
//
// const pg = connector.Postgres('pg', { url: g.env('DATABASE_URL') })
// g.datasource(pg)

// Resolvers - https://grafbase.com/docs/resolvers
//
// g.query('helloWorld', {
//   returns: g.string(),
//   resolver: 'hello-world',
// })

// const supabaseProvider = auth.JWT({
//   issuer: 'supabase',
//   secret: g.env('SUPABASE_JWT_SECRET'),
// })

const authorizer = auth.Authorizer({
	name: 'authorizer'
})

const supabase = connector.GraphQL('supabase', {
	url: 'https://countries.trevorblades.com/graphql'

	// headers: headers => {
	//   headers.set('apikey', g.env('SUPABASE_SERVICE_KEY'))
	// }
})

g.datasource(supabase)
export default config({
	graph: g,
	// Authentication - https://grafbase.com/docs/auth
	auth: {
		providers: [authorizer],
		rules: (rules) => {
			rules.groups(['g1'])
		}
	}
	// Caching - https://grafbase.com/docs/graphql-edge-caching
	// cache: {
	//   rules: [
	//     {
	//       types: ['Query'], // Cache everything for 60 seconds
	//       maxAge: 60,
	//       staleWhileRevalidate: 60
	//     }
	//   ]
	// }
})
