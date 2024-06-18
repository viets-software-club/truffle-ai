FROM golang:1.22-alpine

WORKDIR /app

COPY ./go.mod ./

RUN go mod download

COPY . ./

RUN go build -o /graphql-server

CMD ["/graphql-server"]