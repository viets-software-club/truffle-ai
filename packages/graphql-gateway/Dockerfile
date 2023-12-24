# This is a multi-stage Dockerfile
# run this file only from ../../

# build stage 
FROM node:21-alpine AS build
## init build args and envs
ARG SUPABASE_URL
ARG SUPABASE_SERVICE_KEY
ARG SUPABASE_GRAPHQL_URL
ARG GRAPHQL_SERVER_URL

WORKDIR /app
COPY package*.json ./
COPY ./packages/graphql-gateway ./packages/graphql-gateway/
## install packages
RUN apk --no-cache --virtual build-dependencies add python3 make g++
RUN npm ci -w graphql-gateway
RUN apk del build-dependencies
## build .mesh
RUN SUPABASE_URL=${SUPABASE_URL} SUPABASE_SERVICE_KEY=${SUPABASE_SERVICE_KEY} SUPABASE_GRAPHQL_URL=${SUPABASE_GRAPHQL_URL} GRAPHQL_SERVER_URL=${GRAPHQL_SERVER_URL} npm run build -w graphql-gateway

#########################################################################

# serve stage
FROM node:21-alpine AS serve
## init envs
ENV NODE_ENV production
## setup workspaces
WORKDIR /app

## Install production dependencies
WORKDIR /app/packages/graphql-gateway
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/packages/graphql-gateway/package.json ./
COPY --from=build /app/packages/graphql-gateway/.mesh ./.mesh
COPY --from=build /app/packages/graphql-gateway/src ./src

RUN npm ci --omit=dev
ENV DEBUG 1
CMD ["npm", "run", "start"]