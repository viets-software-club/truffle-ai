# repo_job

### What it is for

The repo_job is a cron job that is run as specified in the `deployment.template.yml` file (currently: once every hour).
It is responsible for updating the database.

### How it works

The `npm run start` script leads to the `index.ts` being run.

In `index.ts` an `axios.get(...)` request is sent to the endpoint of the graphql-server-service, which is specified in the `deployment.template.yml` file. When this endpoint (currently: `/updateDatabase`) is called the database is updated.
This endpoint can not be called from 3rd parties.
