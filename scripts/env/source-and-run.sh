#!/bin/bash
export $(cat .env.common | grep -v \"#\" | xargs);
export GIT_COMMIT_TAG=$(git rev-parse HEAD);
if [ "$ENVIRONMENT" = "production" ] 
then
zx << 'EOF'
echo(`sourcing ${chalk.cyan.bold('.env.production')}`);
EOF
cp .env.production ./packages/ui/.env.local;
export $(cat .env.production | grep -v \"#\" | xargs);
elif [ "$ENVIRONMENT" = "staging" ] 
then
zx << 'EOF'
echo(`sourcing ${chalk.cyan.bold('.env.staging')}`);
EOF
cp .env.staging ./packages/ui/.env.local;
export $(cat .env.staging | grep -v \"#\" | xargs);
else
export ENVIRONMENT=commit;
zx << 'EOF'
echo(`sourcing ${chalk.cyan.bold('.env.commit')}`);
EOF
cp .env.commit ./packages/ui/.env.local;
export $(cat .env.commit | grep -v \"#\" | xargs);
fi
export $(cat .env.override | grep -v \"#\" | xargs);

cmd=$(envsubst <<< $@)
$cmd