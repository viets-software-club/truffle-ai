import Fastify from "fastify";
import mercurius from "mercurius";
import resolvers from "./graphql/resolvers";
import schema from "./graphql/schema";

const ENV = process.env.NODE_ENV || "development"

const envToLogger = {
  development: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
  production: true,
};

const app = Fastify({
  logger: envToLogger[ENV],
});

// https://github.com/mercurius-js/mercurius-typescript/tree/master/examples
app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true, // see http://localhost:3000/graphiql
});

export default app;
