<script>
import BookmarkIcon from "lucide-svelte/icons/bookmark";
import CirclePlusIcon from "lucide-svelte/icons/circle-plus";
import TrendingUpIcon from "lucide-svelte/icons/trending-up";
import { Icon } from "svelte-icons-pack";
import { AiOutlinePlus } from "svelte-icons-pack/ai";
import {
	BsBookmarkFill,
	BsBookmarksFill,
	BsThreeDots,
} from "svelte-icons-pack/bs";
import { HiOutlineSquare2Stack } from "svelte-icons-pack/hi";
import { IoBookmark, IoBookmarks, IoTrendingUp } from "svelte-icons-pack/io";

import AddRepo from "$lib/components/impure/AddRepo/index.svelte";
import PlusIcon from "lucide-svelte/icons/plus";

import { page } from "$app/stores";

import { cn } from "$lib/utils";
</script>

<svelte:head>
	<style>
		#mobile-nav a.active {
			@apply text-foreground;
		}
	</style>
</svelte:head>
<nav
	id="mobile-nav"
	{...$$restProps}
	class={cn(
		'border-t w-full text-black-900 flex justify-between fixed bottom-0 text-center text-muted-foreground shadow items-center bg-background',
		$$restProps.class
	)}
>
	<a
		href="/"
		class="w-1/3 flex justify-center p-4 items-center text-foreground/50 hover:text-foreground hover:drop-shadow"
		class:active={$page.url.pathname === '/'}
	>
		<TrendingUpIcon class="w-5 h-5" />
	</a>
	<div
		class="w-1/3 flex justify-center p-4 text-foreground/50 hover:text-foreground hover:drop-shadow"
	>
		<AddRepo>
			<CirclePlusIcon class="w-5 h-5" />
		</AddRepo>
	</div>
	<a
		href="/bookmarks"
		class="w-1/3 flex justify-center p-4 text-foreground/50 hover:text-foreground hover:drop-shadow"
		class:active={$page.url.pathname.includes('/bookmarks')}
	>
		<BookmarkIcon class="w-5 h-5" />
	</a>
</nav>
