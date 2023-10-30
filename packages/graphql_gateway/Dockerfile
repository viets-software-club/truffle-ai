FROM node:18-alpine as base

# Install dependencies only when needed
FROM base AS deps

## Set NODE_ENV to something other than development
ENV NODE_ENV build

## Set environment variables
ARG SUPABASE_URL
ARG SUPABASE_SERVICE_KEY
ARG SUPABASE_GRAPHQL_URL
ARG SERVER_GRAPHQL_URL
ENV NODE_ENV=build
ENV SUPABASE_URL=${SUPABASE_URL}
ENV SUPABASE_SERVICE_KEY=${SUPABASE_SERVICE_KEY}
ENV SUPABASE_GRAPHQL_URL=${SUPABASE_GRAPHQL_URL}
ENV SERVER_GRAPHQL_URL=${SERVER_GRAPHQL_URL}

## Setup workspaces
WORKDIR /app
COPY package*.json ./
COPY env.sh ./

## Install dependencies
COPY ./packages/graphql_gateway/package*.json ./packages/graphql_gateway/
COPY ./config ./config
RUN apk --no-cache --virtual build-dependencies add python3 make g++
RUN npm ci -w graphql_gateway
RUN apk del build-dependencies

# Rebuild the source code only when needed
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ./config ./config
COPY ./packages/graphql_gateway ./packages/graphql_gateway
COPY package*.json ./
COPY env.sh ./

RUN npm run build -w graphql_gateway

# Serve stage
FROM base as serve

ENV NODE_ENV production
WORKDIR /app
COPY env.sh ./
COPY package*.json ./

## Copy schema file from 'graphql_server' service
COPY ./packages/graphql_server/src/graphql/schema.ts ./packages/graphql_server/src/graphql/schema.ts

## Install production dependencies
WORKDIR /app/packages/graphql_gateway
COPY --from=build /app/packages/graphql_gateway/package*.json ./
COPY --from=build /app/packages/graphql_gateway/dist ./dist

RUN apk --no-cache --virtual build-dependencies add python3 make g++
RUN npm ci --omit=dev
RUN apk del build-dependencies

CMD ["node", "dist/index.js"]