# Run this file only from ../../ !!!
FROM node:18-alpine
ENV NODE_ENV=production
ARG SUPABASE_URL
ARG SUPABASE_API_KEY
ARG SUPABASE_GRAPHQL_URL
ARG SERVER_GRAPHQL_URL
ENV SUPABASE_URL=${SUPABASE_URL}
ENV SUPABASE_GRAPHQL_URL=${SUPABASE_GRAPHQL_URL}
ENV SUPABASE_API_KEY=${SUPABASE_API_KEY}
ENV SERVER_GRAPHQL_URL=${SERVER_GRAPHQL_URL}

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY env.sh env.sh

WORKDIR /app/packages/graphql_server/src/graphql
COPY ./packages/graphql_server/src/graphql/schema.ts schema.ts

WORKDIR /app/packages/graphql_gateway
COPY ./packages/graphql_gateway/package.json package.json

RUN npm ci --omit=dev -w graphql_gateway

COPY ./packages/graphql_gateway .

RUN npm run build

EXPOSE ${GATEWAY_PORT}
CMD npm run serve