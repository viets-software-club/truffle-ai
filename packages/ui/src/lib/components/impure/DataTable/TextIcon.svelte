<script lang="ts">
import SplitIcon from "$lib/components/pure/SplitIcon.svelte";
import { cn } from "$lib/utils";

type Props = {
	icon1: any;
	icon2?: any;
	value: number;
	max: number;
	children: any;
};

const { icon1: Icon1, icon2: Icon2, value, max, children }: Props = $props();
let color: string | undefined = $state(undefined);
const percentage = (value / max) * 100;

$effect(() => {
	if (percentage <= 10) {
		color = "red-600";
	} else if (percentage <= 20) {
		color = "red-400";
	} else if (percentage >= 80) {
		color = "green-500";
	} else if (percentage >= 90) {
		color = "green-600";
	}
});
</script>

<div class="flex items-center gap-2 text-{color ? color : 'foreground/70'} text-xs">
	{#if Icon2}
		<SplitIcon
			icon1={Icon1}
			icon2={Icon2}
			class="w-4 h-4"
			iconProps={{ class: 'w-2 h-2' }}
			dividerProps={{
				class: cn(`bg-${color ? color : 'foreground/50'}`)
			}}
		/>
	{:else}
		<Icon1 class="w-3 h-3" />
	{/if}
	{@render children()}
</div>
