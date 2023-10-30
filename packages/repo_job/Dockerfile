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
COPY ./packages/repo_job/package*.json ./packages/repo_job/
COPY ./config ./config
RUN npm ci -w repo_job

# Rebuild the source code only when needed
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ./config ./config
COPY ./packages/repo_job ./packages/repo_job
COPY package*.json ./
COPY env.sh ./

RUN npm run build -w repo_job

# Serve stage
FROM base as serve

ENV NODE_ENV production
WORKDIR /app
COPY env.sh ./
COPY package*.json ./

## Install production dependencies
WORKDIR /app/packages/repo_job
COPY --from=build /app/packages/repo_job/package*.json ./
COPY --from=build /app/packages/repo_job/dist ./dist

RUN apk --no-cache --virtual build-dependencies add python3 make g++
RUN npm ci --omit=dev

CMD ["node", "dist/index.js"]