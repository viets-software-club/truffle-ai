import { createClient } from '@supabase/supabase-js'
import { g } from '../../grafbase.config'
// const supabase = createClient(
// 	g.env(''),
// 	process.env.SUPABASE_SERVICE_KEY,
// 	{
// 		auth: {
// 			autoRefreshToken: false,
// 			persistSession: false,
// 			detectSessionInUrl: false
// 		}
// 	}
// )

export default function ({ request }) {
	const { headers } = request
	console.log('what')
	// console.error("so", g.env('SUPABASE_GRAPHQL_URL'))
	return { identity: { sub: 'user1', groups: ['g2'] } }

	// const authorizationHeader = headers.authorization
	// if (
	// 	typeof authorizationHeader !== 'string' ||
	// 	!authorizationHeader.startsWith('Bearer') ||
	// 	authorizationHeader.length < 7
	// ) {
	// 	throw Error('Authorization header is not a valid Bearer token')
	// }
	// const jwt = authorizationHeader?.substring(7)
	// if (!jwt) {
	// 	throw Error('No jwt')
	// }
	// const {
	// 	data: { user },
	// 	error
	// } = await supabase.auth.getUser(jwt)
	// if (error) {
	// 	logger.error('Error when getting user by jwt', error)
	// 	throw Error('Error when getting user')
	// }
	// if (!user) {
	// 	logger.error("Couldn't get user", error)
	// 	throw Error("Couldn't get user")
	// }
	// req.headers.authorization = `Bearer ${jwt}`
	// req.headers.authusersid = user.id

	// Verify JWT...

	// return { identity: { sub: 'user1', groups: ['g1'] } }
}
