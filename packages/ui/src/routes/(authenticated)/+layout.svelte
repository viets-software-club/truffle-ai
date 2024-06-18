<script lang="ts">
import { goto } from "$app/navigation";
import CommandInterface from "$lib/components/impure/CommandInterface/index.svelte";
import MobileNavigation from "$lib/components/impure/MobileNavigation.svelte";
import Sidebar from "$lib/components/impure/Sidebar/index.svelte";
import * as Resizable from "$lib/components/pure/ui/resizable";
import { updateMobileSidebarOpenState } from "$lib/store/sidebar";
import { supabaseClient } from "$lib/supabase/index";
import MenuIcon from "lucide-svelte/icons/menu";

let hasLoadedSession = $state(false);

$effect.pre(() => {
	supabaseClient.auth.getSession().then(({ data }) => {
		if (!data.session) {
			goto("/signin");
		} else {
			hasLoadedSession = true;
		}
	});
});
let pane: any;

updateMobileSidebarOpenState.subscribe((isOpen) => {
	if (pane) {
		if (!isOpen) pane.resize(17);
		else isOpen && pane.resize(100);
	}
});
const isMobileSidebarOpen = $derived($updateMobileSidebarOpenState);

const { children } = $props();
</script>

{#if hasLoadedSession}
	<Resizable.PaneGroup direction="horizontal">
		<!-- {#key isMobileSidebarOpen} -->
			<Resizable.Pane
				bind:pane={pane}
				defaultSize={isMobileSidebarOpen ? 100 : 17}
				class={isMobileSidebarOpen ? 'block' : 'hidden md:block'}><Sidebar /></Resizable.Pane
			>
			<Resizable.Handle withHandle />
			<Resizable.Pane
				><main class="w-full overflow-hidden overflow-y-auto overflow-x-auto h-full pb-12 md:pb-0">
					{@render children()}
				</main></Resizable.Pane
			>
		<!-- {/key} -->
	</Resizable.PaneGroup>
	<MobileNavigation class="md:hidden" />
	<CommandInterface />
{/if}
