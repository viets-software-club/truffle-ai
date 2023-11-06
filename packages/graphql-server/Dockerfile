# This is a multi-stage Dockerfile
# run this file only from ../../

# build stage
FROM node:21-alpine AS build
## init envs
ENV NODE_ENV=build
## setup workspace
WORKDIR /app
COPY package*.json ./
COPY ./config ./config
COPY ./packages/graphql_server ./packages/graphql_server/
## install packages
RUN apk --no-cache --virtual build-dependencies add python3 make g++
RUN npm ci -w graphql_server
RUN apk del build-dependencies
## build ./dist
RUN npm run build -w graphql_server

#########################################################################

# serve stage
FROM node:21-alpine AS serve
## init envs
ENV NODE_ENV production
## setup workspaces
WORKDIR /app/packages/graphql_server
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/packages/graphql_server/package.json ./
COPY --from=build /app/packages/graphql_server/dist ./dist
# install production dependencies
RUN npm ci --omit=dev
## serve
CMD ["npm", "run", "serve:prod"]