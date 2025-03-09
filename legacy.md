# Deprecated Technologies
Over the course of this project, several technologies were used and later replaced. Here's a list of those technologies and what they were replaced with:

- **Rust API gateway**: Replaced with Golang Gateway as it is simpler to maintain and refactor.
- **ZX JavaScript Deployment Scripts**: Replaced with Golang Deployment Scripts, reducing the overhead of maintaining too many technologies.
- **GraphQL Mesh**: Replaced with Golang Gateway as it had a memory issue when used with external server logic (for Auth) e.g. Fastify (running Supabase GraphQL queries with complex filters crashed)
- **Grafbase Gateway**: Replaced with Golang Gateway as it couldn't handle the documented authentication logic, it was below v1.0.0
- **Next.js**: Replaced with SvelteKit and Svelte 5 because of speed, simplicity, less code, clean code refactoring, developer change and maintainability.
- **Terraform Kubernetes Config**: Replaced with Helm; Kubernetes deployments in Terraform were too slow and inflexible.
- **PNPM**: Used for disallowing hoisting in GraphQL Mesh because of dependency issues. Now there is only one npm module and no GraphQL Mesh anymore. Replaced with standard NPM.
- **Node.js Backend**: Replaced with Golang backend server so that scraping can be done in realtime and concurrently. Golang provides for most APIs REST libraries and is faster.
- **Deno env variable scripts**: Replaced with Golang scripts

Each of these technologies served a purpose at the time, but were eventually replaced as the needs of the project evolved.
