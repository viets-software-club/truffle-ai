import Fastify from 'fastify'
import mercurius from 'mercurius'
import resolvers from './graphql/resolvers'
import schema from './graphql/schema'

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
app.addHook('preHandler', function (req, reply, done) {
  if (req.body) {
    req.log.info({ body: req.body }, 'parsed body')
  }
  done()
})

// https://github.com/mercurius-js/mercurius-typescript/tree/master/examples
void app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true // see http://localhost:3001/graphiql
})
export default app
