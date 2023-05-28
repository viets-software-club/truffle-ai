# This is a multi-stage Dockerfile
# run this file only from ../../

# available arguments from --build-arg
ARG SERVER_PORT

# build stage
FROM node:18-alpine as build
## init envs
ENV NODE_ENV=build
## copy package.json's to setup workspaces
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY env.sh env.sh
## copy package.json
WORKDIR /app/packages/graphql_server
COPY ./packages/graphql_server/package.json package.json
## install all packages
## see https://github.com/nodejs/docker-node/issues/282#issuecomment-358907790
RUN apk --no-cache --virtual build-dependencies add \
  python3 \
  make \
  g++ \
  && npm ci -w graphql_server \
  && apk del build-dependencies
## copy files from 'graphql_server' service
COPY ./packages/graphql_server .
## build service
RUN npm run build

#########################################################################

# serve stage
FROM node:18-alpine as serve
## init envs
ARG SERVER_PORT
ENV SERVER_PORT=${SERVER_PORT}
ENV NODE_ENV=production
## copy package.json's to setup workspaces
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY env.sh env.sh
## copy build 'build' stage
COPY --from=build /app/packages/graphql_server/package.json /app/packages/graphql_server/package.json
COPY --from=build /app/packages/graphql_server/dist /app/packages/graphql_server/dist
## install production dependencies
RUN npm ci --omit=dev -w graphql_server
## serve on SERVER_PORT
EXPOSE ${SERVER_PORT}
CMD ["npm", "run", "serve", "-w", "graphql_server"]