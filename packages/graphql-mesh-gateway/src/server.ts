import util from 'util'
import { MeshHTTPHandler } from '@graphql-mesh/http'
import { createClient } from '@supabase/supabase-js'
import Fastify, { FastifyRequest } from 'fastify'
import * as jsonwebtoken from 'jsonwebtoken'
import * as winston from 'winston'
import { createBuiltMeshHTTPHandler } from '../.mesh/index'

const app = Fastify({
	trustProxy: true,
	logger: process.env.NODE_ENV !== 'production'
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const meshHttp: MeshHTTPHandler = createBuiltMeshHTTPHandler()

const supabase = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_SERVICE_KEY,
	{
		auth: {
			autoRefreshToken: false,
			persistSession: false,
			detectSessionInUrl: false
		}
	}
)
const logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.json()
	),
	transports: [new winston.transports.Console()]
})

const processAuthorizationHeader = async (req: FastifyRequest) => {
	// read jwt from Authorization Bearer header
	const authorizationHeader = req.headers.authorization
	if (
		typeof authorizationHeader !== 'string' ||
		!authorizationHeader.startsWith('Bearer') ||
		authorizationHeader.length < 7
	) {
		logger.info('Authorization header is not a valid Bearer token')
		throw Error('Authorization header is not a valid Bearer token')
	}
	const jwt = authorizationHeader?.substring(7)
	if (!jwt) {
		logger.warn('No jwt')
		throw Error('No jwt')
	}

	// get user from Supabase if JWT is valid
	const {
		data: { user },
		error
	} = await supabase.auth.getUser(jwt)
	if (error) {
		logger.error('Error when getting user by jwt', error)
		throw Error('Error when getting user')
	}
	if (!user) {
		logger.error("Couldn't get user", error)
		throw Error("Couldn't get user")
	}
	req.headers.authorization = `Bearer ${jwt}`
	req.headers.authusersid = user.id
}

const processUserApiKeyHeader = async (req: FastifyRequest) => {
	if (typeof req.headers.userapikey !== 'string') {
		logger.info('User API Key is no string or empty')
		throw Error('User API Key is no string or empty')
	}
	if (req.headers.userapikey.trim() === '') {
		logger.info('User API Key is empty')
		throw Error('User API Key is empty')
	}
	const userApiKey = req.headers.userapikey
	const { data, error: selectError } = await supabase
		.from('user_api_key')
		.select('auth_users_id')
		.eq('user_api_key', userApiKey)
	if (selectError) {
		logger.info('Error when selecting userapikey from db', selectError)
		throw Error('Error when selecting userapikey from db')
	}
	if (!data?.[0]?.auth_users_id) {
		logger.warn("User ID couldn't be retrieved from db for userapikey")
		throw Error("User ID couldn't be retrieved from db for userapikey")
	}

	const userId = data?.[0]?.auth_users_id as string
	const {
		data: { user },
		error: userByIdError
	} = await supabase.auth.admin.getUserById(userId)

	if (userByIdError) {
		logger.error(
			'Error when getting User by ID',
			userId,
			", User doesn't seem to exist",
			userByIdError
		)
		throw Error('Error when getting User by ID')
	}

	if (!user) {
		logger.warn('User not found')
		throw Error('User not found')
	}

	const jwt = jsonwebtoken.sign(
		{
			sub: user?.id,
			iss: `${process.env.SUPABASE_URL}/auth/v1`,
			aud: user.aud,
			role: user.role,
			email: user.email,
			app_metadata: user.app_metadata,
			user_metadata: user.user_metadata
		},
		process.env.SUPABASE_JWT_SECRET,
		{ expiresIn: '1h' }
	)
	req.headers.authorization = `Bearer ${jwt}`
	req.headers.authusersid = userId
}

app.addHook('preHandler', async (req) => {
	try {
		// if Authorization header exists
		if (req?.headers?.authorization) {
			await processAuthorizationHeader(req)
		}

		// if userApiKey header exists
		if (req?.headers?.userapikey) {
			await processUserApiKeyHeader(req)
		}
	} catch (error) {
		console.error('Error in preHandler', error)
	}
})

app.route({
	url: '/api/graphql',
	method: ['GET', 'POST', 'OPTIONS'],
	async handler(req, reply) {
		try {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
			const response = await meshHttp.handleNodeRequest(req, {
				req,
				reply
			})

			// biome-ignore lint/complexity/noForEach: type is an interface with forEach method
			response.headers.forEach((value: unknown, key: string) => {
				void reply.header(key, value)
			})

			void reply.status(response.status)

			if (response.body === null) {
				reply.code(502).send({ error: 'No response body' })
				return reply
			}

			// eslint-disable-next-line
			const reader = response.body.getReader()

			while (true) {
				const { done, value } = await reader.read()
				if (done) break
				reply.send(value)
			}

			return reply
		} catch (error) {
			console.error('Error occurred', error)
			reply.code(502).send({ error: 'Error, check logs' })
			return reply
		}
	}
})

void app.listen(
	{ port: Number(process.env.GRAPHQL_GATEWAY_PORT), host: '0.0.0.0' },
	(err, address) => {
		if (err) {
			app.log.error(err)
			process.exit(1)
		}
		app.log.info(`server listening on ${address}`)
	}
)
