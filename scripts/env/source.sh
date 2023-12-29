#!/bin/bash
arg1=${1:-"."}
export $(cat $arg1/.env.common | grep -v \"#\" | xargs);
export GIT_COMMIT_TAG=$(git rev-parse HEAD);
if [ "$ENVIRONMENT" = "production" ] 
then
zx << 'EOF'
echo(`sourcing ${chalk.cyan.bold('.env.production')}`);
EOF
cp $arg1/.env.production $arg1/packages/ui/.env.local;
export $(cat $arg1/.env.production | grep -v \"#\" | xargs);
elif [ "$ENVIRONMENT" = "staging" ] 
then
zx << 'EOF'
echo(`sourcing ${chalk.cyan.bold('.env.staging')}`);
EOF
cp $arg1/.env.staging $arg1/packages/ui/.env.local;
export $(cat $arg1/.env.staging | grep -v \"#\" | xargs);
else
zx << 'EOF'
echo(`sourcing ${chalk.cyan.bold('.env.commit')}`);
EOF
export ENVIRONMENT=commit;
cp $arg1/.env.commit $arg1/packages/ui/.env.local;
export $(cat $arg1/.env.commit | grep -v \"#\" | xargs);
fi;
export $(cat $arg1/.env.override | grep -v \"#\" | xargs);
