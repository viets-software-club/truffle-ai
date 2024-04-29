FROM node:21-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY ./packages/ui/package.json /app/packages/ui/package.json
COPY ./package.json /app/package.json
COPY ./pnpm-lock.yaml /app/pnpm-lock.yaml
COPY ./pnpm-workspace.yaml /app/pnpm-workspace.yaml
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm --filter ui install --prod --frozen-lockfile

FROM base AS build
ARG SUPABASE_URL
ARG SUPABASE_ANON_KEY
ARG SUPABASE_GRAPHQL_URL
ARG GATEWAY_GRAPHQL_URL
ARG UI_HOSTNAME
ENV PUBLIC_GATEWAY_GRAPHQL_URL=${GATEWAY_GRAPHQL_URL}
ENV PUBLIC_SUPABASE_GRAPHQL_URL=${SUPABASE_GRAPHQL_URL}
ENV PUBLIC_SUPABASE_URL=${SUPABASE_URL}
ENV PUBLIC_SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY}
ENV PUBLIC_UI_HOSTNAME=${UI_HOSTNAME}
COPY ./packages/ui/ /app/packages/ui
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm --filter ui install --frozen-lockfile
RUN pnpm run --filter ui build

FROM base AS production
# ARG SUPABASE_URL
# ARG SUPABASE_ANON_KEY
# ARG SUPABASE_GRAPHQL_URL
# ARG UI_HOSTNAME
ARG UI_PORT

# ARG GATEWAY_GRAPHQL_URL
ENV NODE_ENV production
# ENV PUBLIC_GATEWAY_GRAPHQL_URL=${GATEWAY_GRAPHQL_URL}
# ENV PUBLIC_SUPABASE_GRAPHQL_URL=${SUPABASE_GRAPHQL_URL}
# ENV PUBLIC_SUPABASE_URL=${SUPABASE_URL}
# ENV PUBLIC_SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY}
# ENV PUBLIC_UI_HOSTNAME=${UI_HOSTNAME}
ENV PORT=${UI_PORT}
ENV HOSTNAME "0.0.0.0"
ENV HOST "0.0.0.0"
COPY --from=build /app/packages/ui/build /app/packages/ui/build/
COPY --from=prod-deps /app/packages/ui/node_modules /app/packages/ui/node_modules/
COPY --from=prod-deps /app/node_modules /app/node_modules/

EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "/app/packages/ui/build/index.js" ]