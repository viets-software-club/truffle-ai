FROM rust:1.75 as builder
WORKDIR /usr/src/graphql-gateway
COPY ./packages/graphql-gateway/ .
RUN cargo install --path .

# FROM debian:bullseye-slim
# RUN apt-get update && rm -rf /var/lib/apt/lists/*
# COPY --from=builder /usr/local/cargo/bin/graphql-gateway /usr/local/bin/graphql-gateway
CMD ["graphql-gateway"]