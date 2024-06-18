<script lang="ts">
import type { NonableSortOrder } from "$lib/utils";
import ArrowDown01 from "lucide-svelte/icons/arrow-down-0-1";
import ArrowDownAZ from "lucide-svelte/icons/arrow-down-a-z";
import ArrowUp01 from "lucide-svelte/icons/arrow-up-0-1";
import ArrowUpAZ from "lucide-svelte/icons/arrow-up-a-z";

type Props = {
	sort: NonableSortOrder;
	type: "string" | "number";
};
const { sort, type } = $props();
</script>

{#if sort === 'asc' && type === 'number'}
	<ArrowUp01 class="w-3 h-3 text-foreground/50" />
{:else if sort === 'desc' && type === 'number'}
	<ArrowDown01 class="w-3 h-3 text-foreground/50" />
{:else if sort === 'asc' && type === 'string'}
	<ArrowUpAZ class="w-3 h-3 text-foreground/50" />
{:else if sort === 'desc' && type === 'string'}
	<ArrowDownAZ class="w-3 h-3 text-foreground/50" />
{:else}{/if}
