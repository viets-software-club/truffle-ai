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

mkdir $OUT_DIR
touch $OUT_DIR/deployment.yml
for yml_file in *.yaml; do env envsubst < $yml_file > $OUT_DIR;
for yml_file in $OUT_DIR/*.yaml; do yml_file >> $OUT_DIR/deployment.yml; echo "---" >> $OUT_DIR/deployment.yml;
# deploy_app_files=()
# for i in "${array[@]}"
# do
# 	echo "$i"
# done

# deploy_cronjos=()