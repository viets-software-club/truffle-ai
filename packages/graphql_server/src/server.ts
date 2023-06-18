import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import mercurius from 'mercurius'
import resolvers from './graphql/resolvers'
import schema from './graphql/schema'
import supbaseClient from './supabase'
import { UserResponse } from '@supabase/supabase-js'
const ENV = process.env.NODE_ENV || 'development'

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname'
      }
    }
  },
  production: true
}

const app = Fastify({
  logger: envToLogger[ENV]
})

const getJWTFromRequest = (request: FastifyRequest) => {
  const authorizationHeader = request?.headers?.authorization
  if (
    typeof authorizationHeader !== 'string' ||
    !authorizationHeader.startsWith('Bearer') ||
    authorizationHeader.length < 7
  )
    return null
  return authorizationHeader?.substring(7)
}

const buildContext = async (request: FastifyRequest, reply: FastifyReply) => {
  const jwt = getJWTFromRequest(request)
  if (jwt) {
    const response: void | UserResponse = await supbaseClient.auth.getUser(jwt).catch((error) => {
      reply.log.error(error)
    })
    if (response?.error) {
      reply.log.error(response?.error)
    }
    return {
      user: response?.data?.user
    }
  }
  return {}
}

// https://github.com/mercurius-js/mercurius-typescript/tree/master/examples
void app.register(mercurius, {
  schema,
  resolvers,
  context: buildContext,
  // @TODO for security
  // validationRules: process.env.NODE_ENV === 'production' ? [NoSchemaIntrospectionCustomRule] : [],
  graphiql: true // see http://localhost:3001/graphiql
})
export default app
