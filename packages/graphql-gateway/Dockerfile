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
ARG SUPABASE_SERVICE_KEY
ARG SUPABASE_GRAPHQL_URL
ARG GRAPHQL_SERVER_URL
COPY ./packages/graphql-gateway/ /app/packages/graphql-gateway
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN SUPABASE_URL=${SUPABASE_URL} SUPABASE_SERVICE_KEY=${SUPABASE_SERVICE_KEY} SUPABASE_GRAPHQL_URL=${SUPABASE_GRAPHQL_URL} GRAPHQL_SERVER_URL=${GRAPHQL_SERVER_URL} pnpm run build --filter graphql-gateway

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/packages/graphql-gateway/ /app/packages/graphql-gateway
EXPOSE 8000
CMD [ "pnpm", "start", "--filter", "graphql-gateway" ]
