# Run this file only from ../../ !!!
FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY env.sh env.sh

WORKDIR /app/packages/graphql_server
COPY ./packages/graphql_server/package.json package.json

RUN npm ci --omit=dev -w graphql_server

COPY ./packages/graphql_server .

RUN npm run build

EXPOSE ${SERVER_PORT}
CMD npm run serve