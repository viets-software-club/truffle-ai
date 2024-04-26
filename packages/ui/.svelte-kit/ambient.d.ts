
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
	export const UI_HOSTNAME: string;
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
	export const NVM_INC: string;
	export const npm_package_devDependencies__fontsource_fira_mono: string;
	export const LDFLAGS: string;
	export const STARSHIP_SHELL: string;
	export const COREPACK_ROOT: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_dependencies_bits_ui: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_typescript: string;
	export const INIT_CWD: string;
	export const SHELL: string;
	export const TERM: string;
	export const npm_package_devDependencies_vite: string;
	export const TMPDIR: string;
	export const CPPFLAGS: string;
	export const npm_package_dependencies_svelte_sonner: string;
	export const npm_package_scripts_lint: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_dependencies_gql_tada: string;
	export const npm_package_dependencies_tailwind_variants: string;
	export const npm_package_scripts_dev: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const ZDOTDIR: string;
	export const npm_package_dependencies_paneforge: string;
	export const npm_package_dependencies_uuid: string;
	export const npm_package_dependencies_lucide_svelte: string;
	export const npm_package_devDependencies__0no_co_graphqlsp: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies_svelte_icons_pack: string;
	export const npm_config_registry: string;
	export const PNPM_HOME: string;
	export const npm_package_dependencies_chartjs_adapter_luxon: string;
	export const npm_package_dependencies_formsnap: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const npm_package_scripts_codegen: string;
	export const npm_package_devDependencies__sonderbase_svelte_sortablejs: string;
	export const npm_config_recursive: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const npm_package_devDependencies_svelte_headless_table: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_sync: string;
	export const npm_package_devDependencies__graphql_codegen_cli: string;
	export const npm_package_devDependencies__types_luxon: string;
	export const npm_config_frozen_lockfile: string;
	export const npm_package_dependencies_tailwind_merge: string;
	export const PATH: string;
	export const COMPOSE_DOCKER_CLI_BUILD: string;
	export const npm_package_devDependencies__sveltejs_adapter_node: string;
	export const npm_package_dependencies_luxon: string;
	export const __CFBundleIdentifier: string;
	export const USER_ZDOTDIR: string;
	export const PWD: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_command: string;
	export const npm_package_scripts_preview: string;
	export const EDITOR: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const npm_package_name: string;
	export const npm_package_devDependencies__graphql_codegen_client_preset: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_scripts_test_integration: string;
	export const npm_package_dependencies_mode_watcher: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_build: string;
	export const XPC_FLAGS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_package_devDependencies_vitest: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const DOCKER_BUILDKIT: string;
	export const ENVIRONMENT: string;
	export const CXX: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_dependencies_chart_js: string;
	export const VSCODE_INJECTION: string;
	export const npm_package_devDependencies__graphql_codegen_introspection: string;
	export const npm_package_devDependencies__graphql_codegen_typescript_document_nodes: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_dependencies_svelte_chartjs: string;
	export const HOME: string;
	export const SHLVL: string;
	export const npm_package_devDependencies_graphql_codegen_svelte_apollo: string;
	export const npm_package_type: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_package_scripts_test: string;
	export const npm_package_devDependencies__graphql_codegen_typescript: string;
	export const npm_package_devDependencies_graphql: string;
	export const LOGNAME: string;
	export const STARSHIP_SESSION_KEY: string;
	export const VSCODE_PATH_PREFIX: string;
	export const npm_package_scripts_format: string;
	export const VISUAL: string;
	export const npm_package_dependencies_zod: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_package_devDependencies_houdini: string;
	export const NVM_BIN: string;
	export const npm_package_dependencies__supabase_supabase_js: string;
	export const npm_package_devDependencies__types_uuid: string;
	export const npm_config_user_agent: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const npm_package_dependencies_clsx: string;
	export const npm_package_dependencies_sveltekit_superforms: string;
	export const npm_package_dependencies_cmdk_sv: string;
	export const npm_package_devDependencies_houdini_svelte: string;
	export const GIT_COMMIT_TAG: string;
	export const npm_package_dependencies__apollo_client: string;
	export const npm_package_scripts_check: string;
	export const npm_package_devDependencies__graphql_codegen_typed_document_node: string;
	export const COLORTERM: string;
	export const npm_package_scripts_test_unit: string;
	export const npm_package_devDependencies__graphql_codegen_typescript_operations: string;
	export const npm_package_dependencies_geist: string;
	export const npm_node_execpath: string;
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
		UI_HOSTNAME: string;
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
		NVM_INC: string;
		npm_package_devDependencies__fontsource_fira_mono: string;
		LDFLAGS: string;
		STARSHIP_SHELL: string;
		COREPACK_ROOT: string;
		npm_package_devDependencies_prettier: string;
		npm_package_dependencies_bits_ui: string;
		TERM_PROGRAM: string;
		NODE: string;
		NVM_CD_FLAGS: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_typescript: string;
		INIT_CWD: string;
		SHELL: string;
		TERM: string;
		npm_package_devDependencies_vite: string;
		TMPDIR: string;
		CPPFLAGS: string;
		npm_package_dependencies_svelte_sonner: string;
		npm_package_scripts_lint: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_dependencies_gql_tada: string;
		npm_package_dependencies_tailwind_variants: string;
		npm_package_scripts_dev: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		ZDOTDIR: string;
		npm_package_dependencies_paneforge: string;
		npm_package_dependencies_uuid: string;
		npm_package_dependencies_lucide_svelte: string;
		npm_package_devDependencies__0no_co_graphqlsp: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies_svelte_icons_pack: string;
		npm_config_registry: string;
		PNPM_HOME: string;
		npm_package_dependencies_chartjs_adapter_luxon: string;
		npm_package_dependencies_formsnap: string;
		USER: string;
		NVM_DIR: string;
		npm_package_scripts_codegen: string;
		npm_package_devDependencies__sonderbase_svelte_sortablejs: string;
		npm_config_recursive: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		npm_package_devDependencies_svelte_headless_table: string;
		PNPM_SCRIPT_SRC_DIR: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_tslib: string;
		npm_execpath: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_sync: string;
		npm_package_devDependencies__graphql_codegen_cli: string;
		npm_package_devDependencies__types_luxon: string;
		npm_config_frozen_lockfile: string;
		npm_package_dependencies_tailwind_merge: string;
		PATH: string;
		COMPOSE_DOCKER_CLI_BUILD: string;
		npm_package_devDependencies__sveltejs_adapter_node: string;
		npm_package_dependencies_luxon: string;
		__CFBundleIdentifier: string;
		USER_ZDOTDIR: string;
		PWD: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_command: string;
		npm_package_scripts_preview: string;
		EDITOR: string;
		npm_lifecycle_event: string;
		LANG: string;
		npm_package_name: string;
		npm_package_devDependencies__graphql_codegen_client_preset: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_scripts_test_integration: string;
		npm_package_dependencies_mode_watcher: string;
		NODE_PATH: string;
		npm_package_scripts_build: string;
		XPC_FLAGS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_package_devDependencies_vitest: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		DOCKER_BUILDKIT: string;
		ENVIRONMENT: string;
		CXX: string;
		npm_package_version: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_dependencies_chart_js: string;
		VSCODE_INJECTION: string;
		npm_package_devDependencies__graphql_codegen_introspection: string;
		npm_package_devDependencies__graphql_codegen_typescript_document_nodes: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_dependencies_svelte_chartjs: string;
		HOME: string;
		SHLVL: string;
		npm_package_devDependencies_graphql_codegen_svelte_apollo: string;
		npm_package_type: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_package_scripts_test: string;
		npm_package_devDependencies__graphql_codegen_typescript: string;
		npm_package_devDependencies_graphql: string;
		LOGNAME: string;
		STARSHIP_SESSION_KEY: string;
		VSCODE_PATH_PREFIX: string;
		npm_package_scripts_format: string;
		VISUAL: string;
		npm_package_dependencies_zod: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_package_devDependencies_houdini: string;
		NVM_BIN: string;
		npm_package_dependencies__supabase_supabase_js: string;
		npm_package_devDependencies__types_uuid: string;
		npm_config_user_agent: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_package_devDependencies__playwright_test: string;
		npm_package_dependencies_clsx: string;
		npm_package_dependencies_sveltekit_superforms: string;
		npm_package_dependencies_cmdk_sv: string;
		npm_package_devDependencies_houdini_svelte: string;
		GIT_COMMIT_TAG: string;
		npm_package_dependencies__apollo_client: string;
		npm_package_scripts_check: string;
		npm_package_devDependencies__graphql_codegen_typed_document_node: string;
		COLORTERM: string;
		npm_package_scripts_test_unit: string;
		npm_package_devDependencies__graphql_codegen_typescript_operations: string;
		npm_package_dependencies_geist: string;
		npm_node_execpath: string;
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
