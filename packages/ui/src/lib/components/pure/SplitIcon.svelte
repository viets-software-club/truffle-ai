<script lang="ts">
import { cn } from "$lib/utils";

export let icon1: any = null;
export let icon2: any = null;
export let iconProps: any = {};
export let dividerProps: any = {};
</script>

<div {...$$restProps} class={cn('relative', $$restProps.class)}>
	<svelte:component
		this={icon1}
		{...iconProps}
		class={cn(
			'absolute left-0 top-0 inline-block align-text-bottom overflow-visible',
			iconProps.class
		)}
	/>
	<div
		{...dividerProps}
		class={cn(
			'absolute h-[1px] -rotate-45 bg-foreground/50 bottom-0 left-0 right-0 top-[50%]',
			dividerProps.class
		)}
	></div>
	<svelte:component
		this={icon2}
		{...iconProps}
		class={cn(
			'absolute bottom-0 right-0  inline-block align-text-bottom overflow-visible',
			iconProps.class
		)}
	/>
</div>

<!-- style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"
display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible; -->
