#!/bin/bash

if [ "$NAMESPACE" = "production" ] 
then
echo 'sourcing .env.production'
export $(cat ../../.env.production | grep -v \"#\" | xargs)
elif [ "$NAMESPACE" = "staging" ] 
then
echo 'sourcing .env.staging'
export $(cat ../../.env.staging | grep -v \"#\" | xargs)
else
echo 'sourcing .env.commit'
export $(cat ../../.env.commit | grep -v \"#\" | xargs)
fi