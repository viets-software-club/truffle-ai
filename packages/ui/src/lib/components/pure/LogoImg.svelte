<script lang="ts">
import { browser } from "$app/environment";
import LogoCosmos from "$lib/assets/images/logo-cosmos.svg";
import LogoDark from "$lib/assets/images/logo-dark.svg";
import LogoLight from "$lib/assets/images/logo-light.svg";
import { getTheme } from "$lib/utils";
import { onDestroy } from "svelte";
const { ...rest }: any = $props();

let logo = $state(LogoLight);
$effect(() => {
	if (browser) {
		switch (getTheme()) {
			case "dark":
				logo = LogoLight;
				break;
			case "light":
				logo = LogoDark;
				break;
			case "cosmos":
				logo = LogoCosmos;
				break;
			default:
		}
	}
});
if (browser) {
	const attrObserver = new MutationObserver((mutations) => {
		for (const mu of mutations) {
			if (mu.type !== "attributes" && mu.attributeName !== "class") continue;
			if (document.documentElement.classList.contains("cosmos")) {
				logo = LogoCosmos;
			} else if (document.documentElement.classList.contains("dark")) {
				logo = LogoLight;
			} else {
				logo = LogoDark;
			}
		}
	});
	attrObserver.observe(document.documentElement, { attributes: true });
	onDestroy(() => {
		attrObserver.disconnect();
	});
}
</script>

<img src={logo} alt="Truffle AI" {...rest} />
