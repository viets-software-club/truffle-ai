# This is a multi-stage Dockerfile
# run this file only from ../../

# build stage
FROM node:21-alpine AS build
## init envs
ENV NODE_ENV build
## setup workspaces
WORKDIR /app
COPY package*.json ./
COPY ./config ./config
COPY ./packages/repo-job ./packages/repo-job/
## install packages
RUN npm ci -w repo-job
## build ./dist
RUN npm run build -w repo-job

#########################################################################

# serve stage
FROM node:21-alpine AS serve
## init envs
ENV NODE_ENV production
## setup workspaces
WORKDIR /app/packages/repo_job
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/packages/repo-job/package.json ./
COPY --from=build /app/packages/repo-job/dist ./dist
## install production dependencies
RUN npm ci --omit=dev
## serve
CMD ["npm", "run", "start"]