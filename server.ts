import Fastify from "fastify";
import mercurius from "mercurius";
import resolvers from "./graphql/resolvers";
import schema from "./graphql/schema";

const app = Fastify({
  logger: process.env.NODE_ENV == "production" ? false : true,
});

// https://github.com/mercurius-js/mercurius-typescript/tree/master/examples
app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true, // see http://localhost:3000/graphiql
});

export default app;
