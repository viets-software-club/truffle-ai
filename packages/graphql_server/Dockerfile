FROM node:18-alpine as base

# Install dependencies only when needed
FROM base AS deps

## Set NODE_ENV to something other than development
ENV NODE_ENV build

## Setup workspaces
WORKDIR /app
COPY package*.json ./
COPY env.sh ./

## Install dependencies
COPY ./packages/graphql_server/package*.json ./packages/graphql_server/
COPY ./config ./config
RUN apk --no-cache --virtual build-dependencies add python3 make g++
RUN npm ci -w graphql_server
RUN apk del build-dependencies

# Rebuild the source code only when needed
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ./config ./config
COPY ./packages/graphql_server ./packages/graphql_server
COPY package*.json ./

RUN npm run build -w graphql_server

# Serve stage
FROM base as serve

ENV NODE_ENV production
WORKDIR /app
COPY env.sh ./
COPY package*.json ./

## Install production dependencies
WORKDIR /app/packages/graphql_server
COPY --from=build /app/packages/graphql_server/package*.json ./
COPY --from=build /app/packages/graphql_server/dist ./dist

RUN apk --no-cache --virtual build-dependencies add python3 make g++
RUN npm ci --omit=dev
RUN apk del build-dependencies

CMD ["node", "dist/index.js"]