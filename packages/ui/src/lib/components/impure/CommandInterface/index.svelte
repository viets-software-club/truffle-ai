<script lang="ts">
	import { onMount } from 'svelte';
	import * as Command from '$lib/components/pure/ui/command/index.js';
	import TrendingUpIcon from 'lucide-svelte/icons/trending-up';
	import BookmarkIcon from 'lucide-svelte/icons/bookmark';
	import { goto } from '$app/navigation';
	let open = false;

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				open = !open;
			}
			if (open && e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				handleTrendingClick();
				open = !open;
			}
			if (open && e.key === 'l' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				handleBookmarkClick();
				open = !open;
			}
		}

		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
	const handleTrendingClick = () => {
		goto('/');
	};
	const handleBookmarkClick = () => {
		goto('/bookmarks');
	};
</script>

<Command.Dialog bind:open>
	<Command.Input placeholder="Type a command or search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Suggestions">
			<Command.Item on:click={handleTrendingClick}>
				<TrendingUpIcon class="mr-2 h-3 w-3" />
				<span>Trending</span>
				<Command.Shortcut>⌘K</Command.Shortcut>
			</Command.Item>
			<Command.Item on:click={handleBookmarkClick}>
				<BookmarkIcon class="mr-2 h-3 w-3" />
				<span>Bookmarks</span>
				<Command.Shortcut>⌘L</Command.Shortcut>
			</Command.Item>
		</Command.Group>
		<Command.Separator />
	</Command.List>
</Command.Dialog>
