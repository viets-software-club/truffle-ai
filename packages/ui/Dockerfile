FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps

## Set NODE_ENV to something other than development
ENV NODE_ENV build

## Setup workspaces
WORKDIR /app
COPY package*.json ./

## Install dependencies
COPY ./packages/ui/package*.json ./packages/ui/
COPY ./config ./config
RUN apk --no-cache --virtual build-dependencies add python3 make g++
RUN npm ci -w ui
RUN apk del build-dependencies

# Rebuild the source code only when needed
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ./config ./config
COPY ./packages/ui ./packages/ui
COPY package*.json ./
COPY .env ./packages/ui/.env.local

## Disable telemetry during the build
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build -w ui

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app/packages/ui

ENV NODE_ENV production
## Disable telemetry during runtime
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build /app/packages/ui/public ./public

## Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

## Automatically leverage output traces to reduce image size
COPY --from=build --chown=nextjs:nodejs /app/packages/ui/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/packages/ui/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

## Set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["node", "packages/ui/server.js"]