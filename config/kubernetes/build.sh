#!/bin/sh
# -----------
# required arguments:
# OUTPUT_PATH for the yml file
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

mkdir $OUTPUT_PATH
touch $OUTPUT_PATH/deployment.yml
for yml_file in *.yaml; do env envsubst < $yml_file > $OUTPUT_PATH;
for yml_file in $OUTPUT_PATH/*.yaml; do yml_file >> $OUTPUT_PATH/deployment.yml; echo "---" >> $OUTPUT_PATH/deployment.yml;