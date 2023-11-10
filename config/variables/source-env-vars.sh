#!/bin/bash

if [ "$NAMESPACE" = "production" ] 
then
echo 'sourcing .env.production'
cp .env.production ./packages/ui/.env.local
export $(cat .env.production | grep -v \"#\" | xargs)
elif [ "$NAMESPACE" = "staging" ] 
then
echo 'sourcing .env.staging'
cp .env.staging ./packages/ui/.env.local
export $(cat .env.staging | grep -v \"#\" | xargs)
else
echo 'sourcing .env.commit'
cp .env.commit ./packages/ui/.env.local
export $(cat .env.commit | grep -v \"#\" | xargs)
fi
$*