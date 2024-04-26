<script lang="ts">
	import * as Card from '$lib/components/pure/ui/card/index.js';
	import { Icon } from 'svelte-icons-pack';
	import { FaBrandsSquareHackerNews } from 'svelte-icons-pack/fa';
</script>

<Card.Root {...$$restProps}>
	<Card.Header>
		<Card.Title class="flex gap-2 items-center"
			><Icon src={FaBrandsSquareHackerNews} size="1rem" />Hackernews Comments</Card.Title
		>
		<Card.Description>Auto generated AI sentiment</Card.Description>
	</Card.Header>
	<Card.Content>
		<p
			class="h-92 text-ellipsis overflow-hidden w-full inline-block text-sm leading-relaxed"
			style="display: -webkit-box; -webkit-line-clamp: 10; -webkit-box-orient: vertical;"
		>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
			sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
			esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
			sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
			occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
			laborum. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
			mollit anim id est laborum.
		</p></Card.Content
	>
</Card.Root>
