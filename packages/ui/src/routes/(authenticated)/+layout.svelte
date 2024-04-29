<script lang="ts">
	import Sidebar from '$lib/components/impure/Sidebar/index.svelte';
	import MobileNavigation from '$lib/components/impure/MobileNavigation.svelte';
	import * as Resizable from '$lib/components/pure/ui/resizable';
	import MenuIcon from 'lucide-svelte/icons/menu';
	import { supabaseClient } from '$lib/supabase/index';
	import { goto } from '$app/navigation';
	import CommandInterface from '$lib/components/impure/CommandInterface/index.svelte';
	let mobile = $state(false);

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
</script>

{#if hasLoadedSession}
	<div class="relative">
		<div class="ml-4 h-[3.75rem] flex items-center absolute top-0 left-0 md:hidden">
			<MenuIcon
				onclick={() => {
					mobile = !mobile;
				}}
			/>
		</div>
	</div>
	<Resizable.PaneGroup direction="horizontal">
		<Resizable.Pane defaultSize={mobile ? 100 : 17} class={mobile ? 'block' : 'hidden md:block'}
			><Sidebar /></Resizable.Pane
		>
		<Resizable.Handle withHandle />
		<Resizable.Pane
			><main class="w-full overflow-hidden overflow-y-auto overflow-x-auto h-full pb-12 md:pb-0">
				<slot />
			</main></Resizable.Pane
		>
	</Resizable.PaneGroup>
	<MobileNavigation class="md:hidden" />
	<CommandInterface />
{/if}
