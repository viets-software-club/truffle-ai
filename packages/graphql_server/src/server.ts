import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import mercurius, { MercuriusContext } from 'mercurius'
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
  return {
    user: null
  }
}

// see: https://github.com/mercurius-js/mercurius/blob/master/docs/typescript.md
// had to adjust the return of buildContext to be static to be in accordance
type PromiseType<T> = T extends PromiseLike<infer U> ? U : T

// extends the MercuriusContext with the return type of buildContext
// I feel like the linting error is a bug
declare module 'mercurius' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface MercuriusContext extends PromiseType<ReturnType<typeof buildContext>> {}
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
