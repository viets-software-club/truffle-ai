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
COPY ./packages/graphql-server ./packages/graphql-server/
## install packages
RUN apk --no-cache --virtual build-dependencies add python3 make g++
RUN npm ci -w graphql-server
RUN apk del build-dependencies
## build ./dist
RUN npm run build -w graphql-server

#########################################################################

# serve stage
FROM node:21-alpine AS serve
## init envs
ENV NODE_ENV production
## setup workspaces
WORKDIR /app/packages/graphql-server
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/packages/graphql-server/package.json ./
COPY --from=build /app/packages/graphql-server/dist ./dist
# install production dependencies
RUN npm ci --omit=dev
## serve
CMD ["npm", "run", "serve"]