# This is a multi-stage Dockerfile
# run this file only from ../../

FROM alpine:latest
# setup workdir
WORKDIR /app
# install curl
RUN apk --no-cache add curl
# install sudo
RUN set -ex && apk --no-cache add sudo
# get doctl and install
RUN curl -sL https://github.com/digitalocean/doctl/releases/download/v1.100.0/doctl-1.100.0-linux-amd64.tar.gz | tar -xzv
RUN sudo mv /app/doctl /usr/local/bin
COPY ./packages/preview_job/destroy_pods_ns_commit.sh .
RUN chmod +x ./destroy_pods_ns_commit.sh
# run script
CMD ["./destroy_pods_ns_commit.sh"]