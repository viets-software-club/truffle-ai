#!/bin/sh
# -----------
# required arguments:
# OUT_DIR for the yml file
# APP = truffle
# NAMESPACE = production | staging | commit
# ENVIRONMENT = production | staging
# PREFIX = production | staging | commit-<hash>
# CERTIFICATE_ID = (from DigitalOcean)
# CHANGE_CAUSE = 
# UI_PORT
# UI_IMAGE
# GRAPHQL_GATEWAY_PORT
# GRAPHQL_GATEWAY_IMAGE
# GRAPHQL_SERVER_IMAGE
# GRAPHQL_SERVER_PORT
# REPO_CRONJOB_IMAGE

mkdir ./deployment;
touch ./deployment/$2;
env envsubst < $1 > ./deployment/$2;