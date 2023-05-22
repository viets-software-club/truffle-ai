# Run this file only from ../../ !!!
FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY env.sh env.sh

WORKDIR /app/packages/graphql_server
COPY ./packages/graphql_server/package.json package.json

# see https://github.com/nodejs/docker-node/issues/282#issuecomment-358907790
RUN apk --no-cache --virtual build-dependencies add \
  python3 \
  make \
  g++ \
  && npm ci --omit=dev -w graphql_server \
  && apk del build-dependencies

COPY ./packages/graphql_server .

RUN npm run build

EXPOSE ${SERVER_PORT}
CMD ["npm", "run", "serve"]