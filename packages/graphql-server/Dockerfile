FROM golang:1.21-alpine

WORKDIR /app

COPY ./packages/graphql-server/go.mod ./

RUN go mod download

COPY ./packages/graphql-server/**/*.go ./

RUN go build -o /graphql-server

CMD ["/graphql-server"]