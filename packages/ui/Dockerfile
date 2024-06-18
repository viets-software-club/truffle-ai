ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine as base
ARG PUBLIC_UI_PORT

WORKDIR /usr/src/app
EXPOSE ${PUBLIC_UI_PORT}

FROM base as build
COPY . .
ARG PUBLIC_GATEWAY_URL
ARG PUBLIC_SUPABASE_URL
ARG PUBLIC_SUPABASE_ANON_KEY
ARG PUBLIC_SUPABASE_GRAPHQL_URL
ARG PUBLIC_UI_HOSTNAME
ARG PUBLIC_UI_PORT
ENV PUBLIC_GATEWAY_URL=${PUBLIC_GATEWAY_URL}
ENV PUBLIC_SUPABASE_URL=${PUBLIC_SUPABASE_URL}
ENV PUBLIC_SUPABASE_ANON_KEY=${PUBLIC_SUPABASE_ANON_KEY}
ENV PUBLIC_SUPABASE_GRAPHQL_URL=${PUBLIC_SUPABASE_GRAPHQL_URL}
ENV PUBLIC_UI_HOSTNAME=${PUBLIC_UI_HOSTNAME}
ENV PORT=${PUBLIC_UI_PORT}
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --legacy-peer-deps
RUN npm run build

FROM base as prod
COPY --from=build /usr/src/app/package-lock.json package-lock.json
COPY --from=build /usr/src/app/package.json package.json
COPY --from=build /usr/src/app/build build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev --legacy-peer-deps
USER node
CMD node build/index.js