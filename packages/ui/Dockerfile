# This is a multi-stage Dockerfile
# run this file only from ../../

# build stage
FROM node:18-alpine AS build
## init envs
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
## setup workspaces
WORKDIR /app
COPY package*.json ./
COPY ./config ./config
COPY ./packages/ui ./packages/ui/
## install packages
RUN apk --no-cache --virtual build-dependencies add python3 make g++
RUN npm ci -w ui
RUN apk del build-dependencies
## build .next
RUN npm run build -w ui

#########################################################################

# serve stage
FROM node:18-alpine AS serve
WORKDIR /app/packages/ui
## init envs
ARG UI_PORT
ENV PORT=${UI_PORT}
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV HOSTNAME "0.0.0.0"
## add nodejs group and nextjs user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
## set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next
## set user
USER nextjs
COPY --from=build --chown=nextjs:nodejs /app/packages/ui/public ./public
COPY --from=build --chown=nextjs:nodejs /app/packages/ui/.next/standalone ./.next/standalone
COPY --from=build --chown=nextjs:nodejs /app/packages/ui/.env.local .next/standalone/packages/ui/.env.local
COPY --from=build --chown=nextjs:nodejs /app/packages/ui/.next/static ./.next/static
## serve
CMD ["node", ".next/standalone/packages/ui/server.js"]