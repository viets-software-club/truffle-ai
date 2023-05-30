#!/bin/bash
if [ "$NODE_ENV" != "production" ] && [ "$NODE_ENV" != "test" ] && [ "$NODE_ENV" != "build" ]
then
export $(cat ../../.env.dev | grep -v \"#\" | xargs)
else
echo 'No development environment loaded'
fi