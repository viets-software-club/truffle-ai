# This is a multi-stage Dockerfile
# run this file only from ../../

# build stage
FROM node:21-alpine AS build
## init envs
ARG SUPABASE_URL
ARG SUPABASE_ANON_KEY
ARG GRAPHQL_URL
ENV NODE_ENV build
ENV NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}
ENV NEXT_PUBLIC_GRAPHQL_URL=${NEXT_PUBLIC_GRAPHQL_URL}
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
## setup workspaces
WORKDIR /app
COPY package*.json ./
COPY ./config ./config
COPY ./packages/ui ./packages/ui/
## install packages
RUN apk --no-cache --virtual build-dependencies add python3 make g++ libc6-compat
RUN npm ci -w ui
RUN apk del build-dependencies

# build .next
RUN npm run build -w ui

#########################################################################

# serve stage
FROM node:21-alpine AS serve
WORKDIR /
## init envs
ARG UI_PORT
ENV PORT=${UI_PORT}
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV HOSTNAME "0.0.0.0"

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=build --chown=nextjs:nodejs /app/packages/ui/public ./packages/ui/public
COPY --from=build --chown=nextjs:nodejs /app/packages/ui/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/packages/ui/.next/static ./packages/ui/.next/static

USER nextjs

## serve
CMD ["node", "./packages/ui/server.js"]