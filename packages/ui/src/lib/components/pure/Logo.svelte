<script lang="ts">
	import LogoDark from '$lib/assets/images/logo-dark.svg';
	import LogoLight from '$lib/assets/images/logo-light.svg';
	import LogoCosmos from '$lib/assets/images/logo-cosmos.svg';
	import { onDestroy } from 'svelte';
	import { getTheme } from '$lib/utils';
	import { browser } from '$app/environment';
	let { showText } = $props();

	let logo = $state(LogoLight);
	$effect(() => {
		if (browser) {
			switch (getTheme()) {
				case 'dark':
					logo = LogoLight;
					break;
				case 'light':
					logo = LogoDark;
					break;
				case 'cosmos':
					logo = LogoCosmos;
					break;
				default:
			}
		}
	});
	if (browser) {
		const attrObserver = new MutationObserver((mutations) => {
			mutations.forEach((mu) => {
				if (mu.type !== 'attributes' && mu.attributeName !== 'class') return;
				if (document.documentElement.classList.contains('cosmos')) {
					logo = LogoCosmos;
				} else if (document.documentElement.classList.contains('dark')) {
					logo = LogoLight;
				} else {
					logo = LogoDark;
				}
			});
		});
		attrObserver.observe(document.documentElement, { attributes: true });
		onDestroy(() => {
			attrObserver.disconnect();
		});
	}
</script>

<div class="z-20 flex items-center text-xl sm:text-base font-medium flex-grow-0 w-full">
	<a href="/" class="flex items-center cursor-pointer align-middle">
		<img src={logo} alt="Truffle AI" class="mr-2 h-6 w-6 sm:h-6 sm:w-6" loading="eager" />
		{#if showText}<div
				class="leading-none flex items-center sm:block text-base sm:text-base sm:mb-[0.175rem] sm:mb-0 sm:leading-snug truncate w-full whitespace-nowrap overflow-hidden"
			>
				Truffle AI
				<!-- <span class="block text-[0.6rem] sm:text-[0.5rem] leading-none pl-[0.06rem]"
				>by La Famiglia VC</span
			> -->
			</div>
		{/if}
	</a>
</div>
