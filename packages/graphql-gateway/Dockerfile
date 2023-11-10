# This is a multi-stage Dockerfile
# run this file only from ../../

# build stage 
FROM node:21-alpine AS build
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

WORKDIR /app
COPY package*.json ./
COPY ./config ./config
COPY ./packages/graphql-gateway ./packages/graphql-gateway/
COPY ./packages/graphql-server/src/graphql/schema.ts ./packages/graphql-server/src/graphql/schema.ts
## install packages
RUN apk --no-cache --virtual build-dependencies add python3 make g++
RUN npm ci -w graphql-gateway
RUN apk del build-dependencies
## build .mesh
RUN npm run build -w graphql-gateway

#########################################################################

# serve stage
FROM node:21-alpine AS serve
## init envs
ENV NODE_ENV production
## setup workspaces
WORKDIR /app
# COPY package*.json ./
# COPY ./config ./config

## Copy schema file from 'graphql-server' service
COPY ./packages/graphql-server/src/graphql/schema.ts ./packages/graphql-server/src/graphql/schema.ts

## Install production dependencies
WORKDIR /app/packages/graphql-gateway
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/packages/graphql-gateway/package.json ./
COPY --from=build /app/packages/graphql-gateway/.mesh ./.mesh
COPY --from=build /app/packages/graphql-gateway/src ./src

RUN npm ci --omit=dev

CMD ["npm", "run", "serve"]