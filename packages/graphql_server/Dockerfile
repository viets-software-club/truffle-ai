FROM node:18-alpine as build

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
RUN npm run build -w graphql_server

# Serve stage
FROM node:18-alpine as serve

ENV NODE_ENV production
WORKDIR /app
COPY env.sh ./
COPY package*.json ./

## Install production dependencies
WORKDIR /app/packages/graphql_server
COPY --from=build /app/packages/graphql_server/package*.json ./
COPY --from=build /app/packages/graphql_server/dist ./dist
RUN npm ci --omit=dev

CMD ["npm", "run", "serve:prod"]