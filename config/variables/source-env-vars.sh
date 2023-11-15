#!/bin/bash

export GIT_COMMIT_TAG=$(git log --format=\"%H\" -n 1)
if [ "$ENVIRONMENT" = "production" ] 
then
echo 'sourcing .env.production'
cp .env.production ./packages/ui/.env.local
export $(cat .env.production | grep -v \"#\" | xargs)
elif [ "$ENVIRONMENT" = "staging" ] 
then
echo 'sourcing .env.staging'
cp .env.staging ./packages/ui/.env.local
export $(cat .env.staging | grep -v \"#\" | xargs)
else
export ENVIRONMENT=commit
echo 'sourcing .env.commit'
cp .env.commit ./packages/ui/.env.local
export $(cat .env.commit | grep -v \"#\" | xargs)
fi
$*