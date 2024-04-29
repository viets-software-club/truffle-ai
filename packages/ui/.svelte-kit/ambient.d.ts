
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const GRAPHQL_SERVER_PORT: string;
	export const GRAPHQL_SERVER_URL: string;
	export const GITHUB_API_URL: string;
	export const GRAPHQL_GATEWAY_PORT: string;
	export const GRAPHQL_GATEWAY_URL: string;
	export const GO_ENV: string;
	export const SCRAPING_BOT_API_ENDPOINT: string;
	export const UI_PORT: string;
	export const SUPABASE_REFERENCE_ID: string;
	export const SUPABASE_URL: string;
	export const SUPABASE_GRAPHQL_URL: string;
	export const NODE_ENV: string;
	export const TZ: string;
	export const GITHUB_API_TOKEN: string;
	export const DIGITALOCEAN_ACCESS_TOKEN: string;
	export const OPENAI_API_KEY: string;
	export const SCRAPING_BOT_USER_NAME: string;
	export const SCRAPING_BOT_API_KEY: string;
	export const SUPABASE_ANON_KEY: string;
	export const SUPABASE_SERVICE_KEY: string;
	export const SUPABASE_JWT_SECRET: string;
	export const SUPABASE_DATABASE_URL: string;
	export const NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
	export const COMMIT_CLUSTER: string;
	export const NVM_INC: string;
	export const STARSHIP_SHELL: string;
	export const LDFLAGS: string;
	export const TERM_PROGRAM: string;
	export const NVM_CD_FLAGS: string;
	export const TERM: string;
	export const SHELL: string;
	export const TMPDIR: string;
	export const CPPFLAGS: string;
	export const TERM_PROGRAM_VERSION: string;
	export const ZDOTDIR: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const PNPM_HOME: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const PRODUCTION_CLUSTER: string;
	export const COMMAND_MODE: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const PATH: string;
	export const COMPOSE_DOCKER_CLI_BUILD: string;
	export const __CFBundleIdentifier: string;
	export const USER_ZDOTDIR: string;
	export const PWD: string;
	export const EDITOR: string;
	export const LANG: string;
	export const REPO_NAME: string;
	export const NODE_PATH: string;
	export const XPC_FLAGS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const FORCE_COLOR: string;
	export const ENVIRONMENT: string;
	export const XPC_SERVICE_NAME: string;
	export const DOCKER_BUILDKIT: string;
	export const CXX: string;
	export const STAGING_CLUSTER: string;
	export const VSCODE_INJECTION: string;
	export const SHLVL: string;
	export const HOME: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_PATH_PREFIX: string;
	export const STARSHIP_SESSION_KEY: string;
	export const LOGNAME: string;
	export const VISUAL: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const NVM_BIN: string;
	export const ORG_NAME: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const GIT_ASKPASS: string;
	export const GIT_COMMIT_TAG: string;
	export const UI_HOSTNAME: string;
	export const COLORTERM: string;
	export const VITE_USER_NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_GATEWAY_GRAPHQL_URL: string;
	export const PUBLIC_SUPABASE_URL: string;
	export const PUBLIC_SUPABASE_GRAPHQL_URL: string;
	export const PUBLIC_SUPABASE_ANON_KEY: string;
	export const PUBLIC_UI_PORT: string;
	export const PUBLIC_UI_HOSTNAME: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		GRAPHQL_SERVER_PORT: string;
		GRAPHQL_SERVER_URL: string;
		GITHUB_API_URL: string;
		GRAPHQL_GATEWAY_PORT: string;
		GRAPHQL_GATEWAY_URL: string;
		GO_ENV: string;
		SCRAPING_BOT_API_ENDPOINT: string;
		UI_PORT: string;
		SUPABASE_REFERENCE_ID: string;
		SUPABASE_URL: string;
		SUPABASE_GRAPHQL_URL: string;
		NODE_ENV: string;
		TZ: string;
		GITHUB_API_TOKEN: string;
		DIGITALOCEAN_ACCESS_TOKEN: string;
		OPENAI_API_KEY: string;
		SCRAPING_BOT_USER_NAME: string;
		SCRAPING_BOT_API_KEY: string;
		SUPABASE_ANON_KEY: string;
		SUPABASE_SERVICE_KEY: string;
		SUPABASE_JWT_SECRET: string;
		SUPABASE_DATABASE_URL: string;
		NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
		COMMIT_CLUSTER: string;
		NVM_INC: string;
		STARSHIP_SHELL: string;
		LDFLAGS: string;
		TERM_PROGRAM: string;
		NVM_CD_FLAGS: string;
		TERM: string;
		SHELL: string;
		TMPDIR: string;
		CPPFLAGS: string;
		TERM_PROGRAM_VERSION: string;
		ZDOTDIR: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		PNPM_HOME: string;
		USER: string;
		NVM_DIR: string;
		PRODUCTION_CLUSTER: string;
		COMMAND_MODE: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		PATH: string;
		COMPOSE_DOCKER_CLI_BUILD: string;
		__CFBundleIdentifier: string;
		USER_ZDOTDIR: string;
		PWD: string;
		EDITOR: string;
		LANG: string;
		REPO_NAME: string;
		NODE_PATH: string;
		XPC_FLAGS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		FORCE_COLOR: string;
		ENVIRONMENT: string;
		XPC_SERVICE_NAME: string;
		DOCKER_BUILDKIT: string;
		CXX: string;
		STAGING_CLUSTER: string;
		VSCODE_INJECTION: string;
		SHLVL: string;
		HOME: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_PATH_PREFIX: string;
		STARSHIP_SESSION_KEY: string;
		LOGNAME: string;
		VISUAL: string;
		VSCODE_GIT_IPC_HANDLE: string;
		NVM_BIN: string;
		ORG_NAME: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		GIT_ASKPASS: string;
		GIT_COMMIT_TAG: string;
		UI_HOSTNAME: string;
		COLORTERM: string;
		VITE_USER_NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_GATEWAY_GRAPHQL_URL: string;
		PUBLIC_SUPABASE_URL: string;
		PUBLIC_SUPABASE_GRAPHQL_URL: string;
		PUBLIC_SUPABASE_ANON_KEY: string;
		PUBLIC_UI_PORT: string;
		PUBLIC_UI_HOSTNAME: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
