#!/bin/bash
if [ "$NODE_ENV" != "production" ]
then
export $(cat ../../.env.dev | grep -v \"#\" | xargs)
else
echo 'No development environment loaded'
fi