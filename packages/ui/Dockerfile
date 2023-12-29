# This is a multi-stage Dockerfile
# run this file only from ../../

FROM node:21-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY ./package.json /app/package.json
COPY ./pnpm-lock.yaml /app/pnpm-lock.yaml
COPY ./pnpm-workspace.yaml /app/pnpm-workspace.yaml
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
ARG SUPABASE_URL
ARG SUPABASE_ANON_KEY
ARG GRAPHQL_URL
ENV NODE_ENV build
ENV NEXT_PUBLIC_SUPABASE_URL=${SUPABASE_URL}
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY}
ENV NEXT_PUBLIC_GRAPHQL_URL=${GRAPHQL_URL}
ENV NEXT_TELEMETRY_DISABLED 1
COPY ./packages/graphql-gateway/ /app/packages/graphql-gateway
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN SUPABASE_URL=${SUPABASE_URL} SUPABASE_SERVICE_KEY=${SUPABASE_SERVICE_KEY} SUPABASE_GRAPHQL_URL=${SUPABASE_GRAPHQL_URL} GRAPHQL_SERVER_URL=${GRAPHQL_SERVER_URL} pnpm run build --filter graphql-gateway

FROM base
ARG UI_PORT
ENV PORT=${UI_PORT}
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV HOSTNAME "0.0.0.0"

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
COPY --from=prod-deps --chown=nextjs:nodejs /app/node_modules /app/node_modules
COPY --from=build --chown=nextjs:nodejs /app/packages/ui/public ./packages/ui/public
COPY --from=build --chown=nextjs:nodejs /app/packages/ui/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/packages/ui/.next/static ./packages/ui/.next/static

USER nextjs
EXPOSE 8000
CMD [ "pnpm", "start", "--filter", "ui" ]