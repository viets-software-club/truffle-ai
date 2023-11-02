# This is a multi-stage Dockerfile
# run this file only from ../../

# build stage 
FROM node:18-alpine AS build
## init build args and envs
ARG SUPABASE_URL
ARG SUPABASE_SERVICE_KEY
ARG SUPABASE_GRAPHQL_URL
ARG GRAPHQL_SERVER_URL
ENV NODE_ENV build
ENV SUPABASE_URL=${SUPABASE_URL}
ENV SUPABASE_SERVICE_KEY=${SUPABASE_SERVICE_KEY}
ENV SUPABASE_GRAPHQL_URL=${SUPABASE_GRAPHQL_URL}
ENV GRAPHQL_SERVER_URL=${GRAPHQL_SERVER_URL}
## setup workspaces
RUN apk update && apk add bash

WORKDIR /app
COPY package*.json ./
COPY ./config ./config
COPY ./packages/graphql_gateway ./packages/graphql_gateway/
COPY ./packages/graphql_server/src/graphql/schema.ts ./packages/graphql_server/src/graphql/schema.ts
## install packages
RUN apk --no-cache --virtual build-dependencies add python3 make g++
RUN npm ci -w graphql_gateway
RUN apk del build-dependencies
## build .mesh
RUN npm run build -w graphql_gateway

#########################################################################

# serve stage
FROM node:18-alpine AS serve
## init envs
ENV NODE_ENV production
## setup workspaces
WORKDIR /app
COPY package*.json ./

## Copy schema file from 'graphql_server' service
COPY ./packages/graphql_server/src/graphql/schema.ts ./packages/graphql_server/src/graphql/schema.ts

## Install production dependencies
WORKDIR /app/packages/graphql_gateway
COPY --from=build /app/packages/graphql_gateway/package*.json ./
COPY --from=build /app/packages/graphql_gateway ./
RUN apk --virtual build-dependencies add python3 make g++
RUN npm ci --omit=dev
RUN apk del build-dependencies

CMD ["npm", "run", "serve:prod"]