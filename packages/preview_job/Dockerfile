FROM alpine:latest
RUN curl -sL https://github.com/digitalocean/doctl/releases/download/v<version>/doctl-<version>-linux-amd64.tar.gz | tar -xzv
RUN set -ex && apk --no-cache add sudo
RUN sudo mv ~/doctl /usr/local/bin
CMD ["./destroy_pods_ns_commit.sh"]