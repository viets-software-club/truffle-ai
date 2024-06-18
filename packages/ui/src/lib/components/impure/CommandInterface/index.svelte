<script lang="ts">
import * as Command from "$lib/components/pure/ui/command/index.js";
import BookmarkIcon from "lucide-svelte/icons/bookmark";
import PlusIcon from "lucide-svelte/icons/plus";
import SettingsIcon from "lucide-svelte/icons/settings";
import TrendingUpIcon from "lucide-svelte/icons/trending-up";
import { onMount } from "svelte";

import { goto } from "$app/navigation";
import { page } from "$app/stores";
import AddRepo from "$lib/components/impure/AddRepo/index.svelte";

let open = $state(false);
let commandList: any;

onMount(() => {
	// commandList.focus();
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			e.stopPropagation();
			open = !open;
			return;
		}
		if (open && e.key === "g" && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			e.stopPropagation();
			handleTrendingSelect();
			return;
		}
		if (open && e.key === "b" && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			e.stopPropagation();
			handleBookmarkSelect();
			return;
		}
		if (open && e.key === "s" && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			e.stopPropagation();
			handleSettingsSelect();
			return;
		}
		if (open && e.key === "a" && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			e.stopPropagation();
			handleAddRepoSelect();
			return;
		}
	}

	document.addEventListener("keydown", handleKeydown);
	return () => {
		document.removeEventListener("keydown", handleKeydown);
	};
});
const handleTrendingSelect = () => {
	goto("/");
	open = false;
};

const handleBookmarkSelect = () => {
	goto("/bookmarks");
	open = false;
};
const handleSettingsSelect = () => {
	goto("/settings");
	open = false;
};

let isAddRepo = $state(false);
const handleAddRepoSelect = () => {
	open = false;
	isAddRepo = true;
};

const handleDialogClose = () => {
	isAddRepo = false;
};
</script>

<Command.Dialog bind:open>
	<Command.Input placeholder="Type a command or search..." />
	<Command.List bind:this={commandList}>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Suggestions">
			<Command.Item onSelect={handleBookmarkSelect}>
				<TrendingUpIcon class="mr-2 h-3 w-3" />
				<span>Trending</span>
				<Command.Shortcut>⌘G</Command.Shortcut>
			</Command.Item>
			<Command.Item  onSelect={handleBookmarkSelect} >
				<BookmarkIcon class="mr-2 h-3 w-3" />
				<span>Bookmarks</span>
				<Command.Shortcut>⌘B</Command.Shortcut>
			</Command.Item>
			<Command.Item  onSelect={handleSettingsSelect} >
				<SettingsIcon class="mr-2 h-3 w-3" />
				<span>Settings</span>
				<Command.Shortcut>⌘S</Command.Shortcut>
			</Command.Item>
			<Command.Item  onSelect={handleAddRepoSelect} >
				<PlusIcon class="mr-2 h-3 w-3" />
				<span>Add Bookmark</span>
				<Command.Shortcut>⌘A</Command.Shortcut>
			</Command.Item>
		</Command.Group>
		<Command.Separator />
	</Command.List>
</Command.Dialog>
{#if isAddRepo}
	<div class="overflow-hidden position-absolute z-10">
		<AddRepo startOpen={true} onDialogOpenChange={handleDialogClose} />
	</div>
{/if}
