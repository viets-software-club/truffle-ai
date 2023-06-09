# This is a multi-stage Dockerfile
# run this file only from ../../

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
WORKDIR /app/packages/repo_job
COPY ./packages/repo_job/package.json package.json
## install all packages
## see https://github.com/nodejs/docker-node/issues/282#issuecomment-358907790
RUN apk --no-cache --virtual build-dependencies add \
  python3 \
  make \
  g++ \
  && npm ci -w repo_job \
  && apk del build-dependencies
## copy files from 'repo_job' service
COPY ./packages/repo_job .
## build service
RUN npm run build

#########################################################################

# run stage
FROM node:18-alpine as run
## init envs
ENV NODE_ENV=production
## copy package.json's to setup workspaces
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY env.sh env.sh
## copy build 'build' stage
COPY --from=build /app/packages/repo_job/dist /app/packages/repo_job/dist
## install production dependencies
RUN npm ci --omit=dev -w repo_job
## start
CMD ["npm", "run", "start", "-w", "repo_job"]