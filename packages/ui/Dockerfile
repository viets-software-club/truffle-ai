FROM node:21-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY ./packages/ui/package.json /app/packages/ui/package.json
COPY ./package.json /app/package.json
COPY ./pnpm-lock.yaml /app/pnpm-lock.yaml
COPY ./pnpm-workspace.yaml /app/pnpm-workspace.yaml
WORKDIR /app

FROM base AS build
ARG SUPABASE_URL
ARG SUPABASE_ANON_KEY
ARG GRAPHQL_URL
ARG UI_HOSTNAME
ARG SUPABASE_GRAPHQL_URL
ENV PUBLIC_SUPABASE_GRAPHQL_URL=${SUPABASE_GRAPHQL_URL}
ENV NODE_ENV build
ENV PUBLIC_SUPABASE_URL=${SUPABASE_URL}
ENV PUBLIC_SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY}
ENV PUBLIC_GRAPHQL_URL=${GRAPHQL_URL}
ENV PUBLIC_UI_HOSTNAME=${UI_HOSTNAME}
COPY ./packages/ui/ /app/packages/ui
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm --filter ui install --frozen-lockfile
RUN PUBLIC_UI_HOSTNAME=${UI_HOSTNAME} SUPABASE_URL=${SUPABASE_URL} SUPABASE_SERVICE_KEY=${SUPABASE_SERVICE_KEY} SUPABASE_GRAPHQL_URL=${SUPABASE_GRAPHQL_URL} GRAPHQL_SERVER_URL=${GRAPHQL_SERVER_URL} pnpm run --filter ui build

FROM base AS production
ARG SUPABASE_URL
ARG SUPABASE_ANON_KEY
ARG GRAPHQL_URL
ARG UI_HOSTNAME
ENV NODE_ENV build
ARG SUPABASE_GRAPHQL_URL
ENV PUBLIC_SUPABASE_GRAPHQL_URL=${SUPABASE_GRAPHQL_URL}

ENV PUBLIC_SUPABASE_URL=${SUPABASE_URL}
ENV PUBLIC_SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY}
ENV PUBLIC_GRAPHQL_URL=${GRAPHQL_URL}
ENV PUBLIC_UI_HOSTNAME=${UI_HOSTNAME}
ARG UI_PORT
ENV PORT=${UI_PORT}
ENV NODE_ENV production
ENV HOSTNAME "0.0.0.0"
ENV HOST "0.0.0.0"
ENV PORT=3000
COPY --from=build /app/packages/ui/build /app/packages/ui/build/
COPY --from=build /app/packages/ui/node_modules /app/packages/ui/node_modules/
COPY --from=build /app/node_modules /app/node_modules/

EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "/app/packages/ui/build/index.js" ]