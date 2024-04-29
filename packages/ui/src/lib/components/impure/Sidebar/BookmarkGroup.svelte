<script lang="ts">
	import * as Collapsible from '$lib/components/pure/ui/collapsible/index';
	import {
		AiFillFolder,
		AiOutlineArrowRight,
		AiOutlineFolder,
		AiOutlineFolderOpen
	} from 'svelte-icons-pack/ai';
	import FolderClosed from 'lucide-svelte/icons/folder-closed';
	import FolderOpen from 'lucide-svelte/icons/folder-open';

	import { Icon } from 'svelte-icons-pack';
	import { SortableList } from '@sonderbase/svelte-sortablejs';
	import { Blocks } from 'lucide-svelte';
	import * as Avatar from '$lib/components/pure/ui/avatar/avatar.svelte';
	import { goto } from '$app/navigation';

	type Props = {
		title: string;
		actionHref: string;
		actionText: string;
		sortGroup: string;
		items: { icon: string; title: string; href: string }[];
	};
	let { title, actionHref, actionText, sortGroup, items }: Props = $props();
	let isOpen = $state(true);

	const handleAction = () => {
		goto(actionHref);
	};
	const handleActionClick = () => {
		handleAction();
	};
	const handleActioneKeydown = (event: any) => {
		if (event.key === 'Enter') {
			handleAction();
		}
	};

	const getHandleItemClickFunc = (bookmark: { href: string }) => () => {
		goto(bookmark.href);
	};
	const getHandleItemKeydownFunc = (bookmark: { href: string }) => (event: any) => {
		if (event.key === 'Enter') {
			goto(bookmark.href);
		}
	};
</script>

<Collapsible.Root bind:open={isOpen} class="px-2 w-full">
	<Collapsible.Trigger class="w-full">
		<div
			class="overflow-hidden flex items-center cursor-pointer pl-4 pr-[0.225rem] py-[0.225rem] hover:bg-muted rounded-md group capitalize font-normal text-foreground"
		>
			{#if isOpen}
				<FolderOpen class="block w-3 shrink-0 dark:text-foreground/50" />
			{:else}
				<FolderClosed class="block w-3 shrink-0 dark:text-foreground/50" />
			{/if}

			<div class="pl-1.5 w-full text-left text-[0.8rem] truncate">
				{title}
			</div>
			<div
				tabindex={0}
				role="button"
				on:click|stopPropagation={handleActionClick}
				on:keydown={handleActioneKeydown}
				class=" group group/link relative invisible flex items-center gap-1 leading-none rounded-md px-1 opacity-0 transition-all duration-100 hover:bg-muted-overlay group-hover:visible group-hover:opacity-100"
			>
				<span
					class="text-foreground py-2 px-1 pr-0 flex-1 invisible max-w-0 text-[0.7rem] opacity-0 transition-all delay-100 duration-200 group-hover/link:visible group-hover/link:max-w-[55px] group-hover/link:opacity-100"
					>{actionText}</span
				>
				<Icon
					src={AiOutlineArrowRight}
					className="text-muted-foreground w-[0.75rem] flex-1 rounded-md box-content group-hover/link:visible group-hover/link:max-w-[55px] group-hover/link:opacity-100"
				/>
			</div>
		</div>
	</Collapsible.Trigger>
	<Collapsible.Content>
    {#key items}
		<SortableList class="" group={sortGroup}>
			{#each items as item}
				<div
					tabindex={0}
					role="button"
					on:click={getHandleItemClickFunc(item)}
					on:keydown={getHandleItemKeydownFunc(item)}
					class="flex items-center p-2 pl-6 hover:bg-muted rounded-md text-foreground/70 truncate cursor-pointer"
				>
					<img src={item.icon} class="rounded-full w-4 border" alt="avatar" />
					<span class="pl-2 truncate text-[0.8rem]">{item.title}</span>
				</div>
			{/each}
		</SortableList>
    {/key}
	</Collapsible.Content>
</Collapsible.Root>
