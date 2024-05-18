<script lang="ts">
	import Sidebar from '$lib/components/impure/Sidebar/index.svelte';
	import MobileNavigation from '$lib/components/impure/MobileNavigation.svelte';
	import * as Resizable from '$lib/components/pure/ui/resizable';
	import MenuIcon from 'lucide-svelte/icons/menu';
	import { supabaseClient } from '$lib/supabase/index';
	import { goto } from '$app/navigation';
	import CommandInterface from '$lib/components/impure/CommandInterface/index.svelte';
	import {updateMobileSidebarOpenState} from '$lib/store/sidebar';

	let hasLoadedSession = $state(false);

	$effect.pre(() => {
		supabaseClient.auth.getSession().then(({ data }) => {
			if (!data.session) {
				goto('/signin');
			} else {
				hasLoadedSession = true;
			}
		});
	});
	let isMobileSidebarOpen = $state($updateMobileSidebarOpenState)
	console.log('isMobilesi', isMobileSidebarOpen)
updateMobileSidebarOpenState.subscribe((value) => {
	console.log('huh', value)
    isMobileSidebarOpen = value;
});


</script>

{#if hasLoadedSession}
		
	
	<Resizable.PaneGroup direction="horizontal">
		{#key isMobileSidebarOpen}
		<Resizable.Pane defaultSize={isMobileSidebarOpen ? 100 : 17} class={isMobileSidebarOpen ? 'block' : 'hidden md:block'}
			><Sidebar /></Resizable.Pane
		>
		<Resizable.Handle withHandle />
		<Resizable.Pane
			><main class="w-full overflow-hidden overflow-y-auto overflow-x-auto h-full pb-12 md:pb-0">
				<slot />
			</main></Resizable.Pane
		>
		{/key}
	</Resizable.PaneGroup>
	<MobileNavigation class="md:hidden" />
	<CommandInterface />
{/if}
