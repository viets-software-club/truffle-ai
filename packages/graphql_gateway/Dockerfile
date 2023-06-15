# This is a multi-stage Dockerfile
# run this file only from ../../

# build stage 
FROM node:18-alpine as build
## init envs
ARG SUPABASE_URL
ARG SUPABASE_API_KEY
ARG SUPABASE_GRAPHQL_URL
ARG SERVER_GRAPHQL_URL
ENV NODE_ENV=build
ENV SUPABASE_URL=${SUPABASE_URL}
ENV SUPABASE_API_KEY=${SUPABASE_API_KEY}
ENV SUPABASE_GRAPHQL_URL=${SUPABASE_GRAPHQL_URL}
ENV SERVER_GRAPHQL_URL=${SERVER_GRAPHQL_URL}
## copy package.json's to setup workspaces
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY env.sh env.sh
## copy schema file from 'graphql_server' service
WORKDIR /app/packages/graphql_server/src/graphql
COPY ./packages/graphql_server/src/graphql/schema.ts schema.ts
## copy package.json
WORKDIR /app/packages/graphql_gateway
COPY ./packages/graphql_gateway/package.json package.json
## install all packages
## see https://github.com/nodejs/docker-node/issues/282#issuecomment-358907790
RUN apk --no-cache --virtual build-dependencies add \
  python3 \
  make \
  g++ \
  && npm ci -w graphql_gateway \
  && apk del build-dependencies
## copy files from 'graphql_gateway' service
COPY ./packages/graphql_gateway .
## build service
RUN npm run build

######################################################################

# serve stage
FROM node:18-alpine as serve
## init envs
ENV NODE_ENV=production
## copy package.json's to setup workspaces
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY env.sh env.sh
## copy build with 'graphql_server's schema from 'build' stage
COPY --from=build /app/packages/graphql_gateway/ /app/packages/graphql_gateway/
COPY --from=build /app/packages/graphql_server/src/graphql/schema.ts /app/packages/graphql_server/src/graphql/schema.ts
## install production dependencies
RUN npm ci --omit=dev -w graphql_gateway
## serve
CMD ["npm", "run", "serve", "-w", "graphql_gateway"]