#!/bin/bash
export $(cat .env.common | grep -v \"#\" | xargs);
export GIT_COMMIT_TAG=$(git rev-parse HEAD);
if [ "$ENVIRONMENT" = "production" ] 
then
echo '\e[2msourcing .env.production\033[0m\n';
cp .env.production ./packages/ui/.env.local;
export $(cat .env.production | grep -v \"#\" | xargs);
elif [ "$ENVIRONMENT" = "staging" ] 
then
echo '\e[2msourcing .env.staging\033[0m\n';
cp .env.staging ./packages/ui/.env.local;
export $(cat .env.staging | grep -v \"#\" | xargs);
else
export ENVIRONMENT=commit;
echo '\e[2msourcing .env.commit\033[0m\n';
cp .env.commit ./packages/ui/.env.local;
export $(cat .env.commit | grep -v \"#\" | xargs);
fi
