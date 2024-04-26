<script lang="ts">
	import SplitIcon from '$lib/components/pure/SplitIcon.svelte';
	import { cn } from '$lib/utils';

	type Props = {
		icon1: any;
		icon2?: any;
		value: number;
		max: number;
	};

	let { icon1: Icon1, icon2: Icon2, value, max }: Props = $props();
	let color = $state('');
	let percentage = (value / max) * 100;

	$effect(() => {
		if (percentage <= 10) {
			color = 'red-500';
		} else if (percentage <= 20) {
			color = 'red-300';
		} else if (percentage >= 80) {
			color = 'green-300';
		} else if (percentage >= 90) {
			color = 'green-500';
		} else {
			color = 'foreground';
		}
	});
</script>

<div class="flex items-center gap-2 text-{color} text-xs">
	{#if Icon2}
		<SplitIcon
			icon1={Icon1}
			icon2={Icon2}
			class="w-4 h-4"
			iconProps={{ class: 'w-2 h-2' }}
			dividerProps={{
				class: cn('bg-red-500 bg-red-300 bg-green-300 bg-green-500 bg-white', `bg-${color}`)
			}}
		/>
	{:else}
		<Icon1 class="w-3 h-3" />
	{/if}
	<slot />
</div>
