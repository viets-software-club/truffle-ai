<script lang="ts">
	import LogoDark from '$lib/assets/images/logo-dark.svg';
	import Separator from '$lib/components/pure/ui/separator/separator.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
	<style>
		.legal-content h2 {
			@apply text-base font-semibold;
		}
		.legal-content h3 {
			@apply text-base font-medium;
		}
		.legal-content p {
			margin-bottom: 1rem;
		}
		.legal-content ul {
			@apply list-disc pl-4 mb-4;
		}
		.legal-content section {
			@apply md:max-w-[90%] text-[0.95rem] md:text-base;
			margin-bottom: 1rem;
		}
		.legal-content a {
			@apply underline underline-offset-4 hover:text-primary;
		}
		.legal-aside .active {
			@apply text-primary font-medium;
		}
		em {
			@apply italic;
		}
	</style>
</svelte:head>

<div class="relative min-h-full flex-col p-10 dark:border-r lg:flex font-geist">
	<aside class="legal-aside relative xl:fixed">
		<div class=" z-20 flex items-center text-xl sm:text-lg font-medium flex-grow-0">
			<a href="/" class="flex items-center cursor-pointer align-middle">
				<img
					src={LogoDark}
					alt="Truffle AI"
					class="mr-2 h-8 w-8 sm:h-7 sm:w-7 dark:invert"
					loading="eager"
				/>
				<div class="leading-none">
					<span class="leading-none mb-[0.175rem] sm:mb-0 sm:leading-normal block">Truffle AI</span>
					<span class="block text-[0.6rem] sm:text-[0.5rem] leading-none pl-[0.06rem]"
						>by La Famiglia VC</span
					>
				</div>
			</a>
		</div>
		<div class="hidden sm:block text-[0.95rem] mt-10">
			<a
				href="/terms-of-service"
				class="block text-foreground/50 mb-3"
				class:active={$page.url.pathname.includes('/terms-of-service')}>Terms of Service</a
			>
			<a
				href="/privacy-policy"
				class="block text-foreground/50 mb-3"
				class:active={$page.url.pathname.includes('/privacy-policy')}>Privacy Policy</a
			>
			<a
				href="/legal-notice"
				class="block text-foreground/50 mb-3"
				class:active={$page.url.pathname.includes('/legal-notice')}>Legal Notice</a
			>
		</div>
	</aside>
	<div class="legal-content mx-auto max-w-4xl mt-8 md:mt-12">
		<slot />
	</div>
	<footer class="mx-auto max-w-4xl w-full mt-8">
		<div
			class="pt-3 flex text-sm justify-between sm:justify-normal sm:text-gray-800 border-t max-w-[90%]"
		>
			<a href="/terms-of-service" class="sm:mr-6 py-1 text-muted-foreground hover:text-primary">
				Terms of Service
			</a>
			<a href="/privacy-policy" class="sm:mr-6 py-1 text-muted-foreground hover:text-primary">
				Privacy Policy
			</a>
			<a href="/legal-notice" class="py-1 text-muted-foreground hover:text-primary">
				Legal Notice
			</a>
		</div>
	</footer>
</div>
