<script lang="ts">
import BookmarkGroup from "./BookmarkGroup.svelte";

import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import Logo from "$lib/components/pure/Logo.svelte";
import * as Select from "$lib/components/pure/ui/select";
import * as Sheet from "$lib/components/pure/ui/sheet";
import client from "$lib/graphql/supabase/client";
import {
	SidebarDocument,
	type SidebarQuery as SidebarQueryType,
} from "$lib/graphql/supabase/generated-codegen";
import {
	updateMobileSidebarOpenState,
	updateSidebar,
} from "$lib/store/sidebar";
import { supabaseClient } from "$lib/supabase";
import type { ApolloQueryResult, ObservableQuery } from "@apollo/client/core";
import { XIcon } from "lucide-svelte";
import Bookmark from "lucide-svelte/icons/bookmark";
import LogoutIcon from "lucide-svelte/icons/log-out";
import PaletteIcon from "lucide-svelte/icons/palette";
import SettingsIcon from "lucide-svelte/icons/settings";
import TrendingUp from "lucide-svelte/icons/trending-up";
import { onMount } from "svelte";
import { toast } from "svelte-sonner";

let isThemeSelectionOpen = $state(false);
// let theme = $derived(browser && localStorage?.theme?.length > 0 ? localStorage.theme : 'light');
// let themeLabel = $derived(browser && theme.charAt(0).toUpperCase() + theme.slice(1));

// client.query(e).then((data) => {

// });

// $effect(() => {

// 	const channel = supabaseClient
// 		.channel('table-db-changes')
// 		.on(
// 			'postgres_changes',
// 			{
// 				event: '*',
// 				schema: 'public',
// 				table: 'proj_cat_and_proj_bookmark'
// 			},
// 			update
// 		)
// 		.subscribe();

// 	return () => channel.unsubscribe();
// });

const getTheme = () =>
	browser && localStorage?.theme?.length > 0 ? localStorage.theme : "light";
const getThemeLabel = () =>
	browser && getTheme().charAt(0).toUpperCase() + getTheme().slice(1);

const { ...attrs } = $props();
let queryResult: ApolloQueryResult<SidebarQueryType> | undefined = $state();

const loadData = () => {
	isReloading = true;
	client
		.query({
			fetchPolicy: "network-only",
			query: SidebarDocument,
		})
		.then((res) => {
			isReloading = false;
			queryResult = res;
		})
		.catch((err) => {
			console.error(err);
			toast.error("Error", {
				description:
					"An error occurred while loading the sidebar. Please try again later.",
				action: {
					label: "ok",
					onClick: () => {},
				},
			});
		})
		.finally(() => {
			isReloading = false;
		});
};
let isReloading = false;

onMount(() => {
	loadData();
	let realtimeOn: any;
	supabaseClient.auth.getUser().then((user) => {
		if (user.data.user?.id) {
			console.log("subscribing", user.data.user?.id);
			realtimeOn = supabaseClient
				.channel("table_db_changes")
				// .on(
				// 	"postgres_changes",
				// 	{
				// 		event: "*",
				// 		schema: "public",
				// 		table: "proj_cat",
				// 		filter: `auth_users_id=eq.${user.data.user.id}`,
				// 	},
				// 	(payload) => {
				// 		console.log("update bookmark", isReloading);
				// 		loadData();
				// 	},
				// )
				.on(
					"postgres_changes",
					{
						event: "*",
						schema: "public",
						table: "proj_cat_and_proj_bookmark",
					},
					(payload) => {
						console.log("update proj_cat_and_proj_bookmark", isReloading);
						loadData();
					},
				);
			realtimeOn.subscribe();
		}
	});
	return () => realtimeOn.unsubscribe();
});
// $effect(() => {
// 	client
// 		.query({
// 			query: SidebarDocument,
// 		})
// 		.then((res) => {
// 			queryResult = res;
// 		});
// 	updateSidebar.subscribe((value) => {
// 		client
// 			.query({
// 				query: SidebarDocument,
// 			})
// 			.then((res) => {
// 				queryResult = res;
// 			})
// 			.catch((err) => {
// 				console.error(err);
// 			});
// 	});

// 	// const channel = supabaseClient
// 	// 	.channel('table-db-changes')
// 	// 	.on(
// 	// 		'postgres_changes',
// 	// 		{
// 	// 			event: '*',
// 	// 			schema: 'public',
// 	// 			table: 'proj_cat_and_proj_bookmark'
// 	// 		},
// 	// 		() => {
// 	// 			client
// 	// 				.query({
// 	// 					query: SidebarDocument
// 	// 				})
// 	// 				.then((res) => {
// 	// 					queryResult = res;
// 	// 				})
// 	// 				.catch((err) => {
// 	// 					console.error(err);
// 	// 				});
// 	// 		}
// 	// 	)
// 	// 	.subscribe();

// 	// return () => channel.unsubscribe();
// });

// let data4: ApolloQueryResult<SidebarQuery> | undefined = $state();
// let sidebarQuerySubscriber = Sidebar({});

// sidebarQuerySubscriber.subscribe((subscribedData) => {
// 	// { title: string; items: { avatarUrl: string; title: string }[] };
// 	data4 = subscribedData;
// });

// $effect(() => {
// 	data = {
// 		title: 'First',
// 		items: [
// 			{
// 				title: 'vercel/vercel',
// 				avatarUrl: 'https://avatars.githubusercontent.com/u/14985020?s=48&v=4'
// 			},
// 			{
// 				title: 'atherosai/ui',
// 				avatarUrl: 'https://avatars.githubusercontent.com/u/34418705?s=48&v=4'
// 			},
// 			{
// 				title: 'elastic/otel-profiling-agent',
// 				avatarUrl: 'https://avatars.githubusercontent.com/u/6764390?s=48&v=4'
// 			}
// 		]
// 	};
// });

const handleThemeButton = (e: any) => {
	e.preventDefault();
	isThemeSelectionOpen = true;
};
const handleThemeSelection = (/** @type {any} */ event: any) => {
	localStorage.theme = event.value;
	if (event.value === "dark") {
		document.documentElement.classList.remove("cosmos");
		document.documentElement.classList.add("dark");
	} else if (event.value === "cosmos") {
		document.documentElement.classList.add("dark", "cosmos");
	} else {
		document.documentElement.classList.remove("dark", "cosmos");
	}
	isThemeSelectionOpen = false;
	// theme = event.value;
	// themeLabel = event.label;
};
const closeSidebar = () => {
	updateMobileSidebarOpenState.set(false);
};
const handleTrendingClick = (e: any) => {
	e.preventDefault();
	goto("/");
	closeSidebar();
};
const handleBookmarkClick = (e: any) => {
	e.preventDefault();
	goto("/bookmarks");
	closeSidebar();
};
const handleSettingsClick = (e: any) => {
	e.preventDefault();
	goto("/settings");
	closeSidebar();
};
</script>

<aside class="flex flex-col overflow-auto overflow-x-hidden h-full relative" {...attrs}>
	<section class="pl-6 pr-0 h-[3.8125rem] border-b flex items-center">
		<div onclick={closeSidebar} onkeydown={null} role="button" tabindex={null}>
		<Logo showText={true} />
	</div>
		{#if $updateMobileSidebarOpenState}
			<div class="p-5 ml-auto" onclick={closeSidebar} role="button" tabindex={null} onkeydown={null}>
				<XIcon class="w-5 h-5 ml-auto cursor-pointer" />
			</div>
		{/if}
	</section>
	<section class="py-2">
		<h2
			class="overflow-hidden whitespace-nowrap w-full truncate text-sm dark:text-foreground/50 dark:text-normal dark:uppercase dark:text-xs px-6 py-2.5 font-medium items-center text-opacity-50"
		>
			Navigation
		</h2>
		<div class="w-full">
			<a
				class="px-4 mx-2 flex hover:bg-muted rounded-sm gap-[0.4rem] items-center py-2 text-[0.8rem] text-opacity-10"
				onclick={handleTrendingClick}

				href="/"
				><TrendingUp class="w-3.5 h-3.5 dark:text-foreground/50 truncate flex-shrink-0" />
				<span class="truncate">Trending</span></a
			>
			<a
				class="px-4 mx-2 flex hover:bg-muted rounded-sm gap-[0.4rem] items-center py-2 text-[0.8rem] text-opacity-10"
				onclick={handleBookmarkClick}
				href="/bookmarks"
				><Bookmark class="w-3.5 h-3.5 dark:text-foreground/50 truncate flex-shrink-0 -mt-[2px]" />
				<span class="truncate">Bookmarked</span></a
			>
		</div>
	</section>
	<section class="py-2 border-t overflow-y-auto flex-1">
		<!-- <ScrollArea> -->
		<h2
			class="truncate text-sm dark:text-foreground/50 dark:text-normal dark:uppercase dark:text-xs px-6 py-2.5 font-medium items-center"
		>
			Categories
		</h2>
		<!-- <BookmarkGroup sortGroup="x" {data} />
		<BookmarkGroup sortGroup="x" data={data2} />
		<BookmarkGroup sortGroup="x" data={data3} /> -->
		<!-- <BookmarkGroup
			title="First"
			actionHref="/compare/web-tech"
			actionText="Compare"
			sortGroup="x"
			items={[
				{
					title: 'vercel/vercel',
					icon: 'https://avatars.githubusercontent.com/u/14985020?s=48&v=4',
					href: '/repo/vercel/vercel'
				},
				{
					title: 'atherosai/ui',
					icon: 'https://avatars.githubusercontent.com/u/34418705?s=48&v=4',
					href: '/repo/vercel/vercel'
				},
				{
					title: 'elastic/otel-profiling-agent',
					icon: 'https://avatars.githubusercontent.com/u/6764390?s=48&v=4',
					href: '/repo/vercel/vercel'
				}
			]}
		/>
		<BookmarkGroup
			title="Hundred"
			actionHref="/compare/web-tech"
			actionText="Compare"
			sortGroup="x"
			items={[
				{
					title: 'pytorch/torchtune',
					icon: 'https://avatars.githubusercontent.com/u/21003710?s=48&v=4',
					href: '/repo/vercel/vercel'
				},
				{
					title: 'meta-llama/PurpleLlama',
					icon: 'https://avatars.githubusercontent.com/u/153379578?s=48&v=4',
					href: '/repo/vercel/vercel'
				},
				{
					title: 'typst/typst',
					icon: 'https://avatars.githubusercontent.com/u/67595261?s=48&v=4',
					href: '/repo/vercel/vercel'
				}
			]}
		/>
		<BookmarkGroup
			title="Thousand"
			actionHref="/compare/web-tech"
			actionText="Compare"
			sortGroup="x"
			items={[
				{
					title: 'ollama/ollama',
					icon: 'https://avatars.githubusercontent.com/u/151674099?s=48&v=4',
					href: '/repo/vercel/vercel'
				},
				{
					title: 'google/material-design-icons',
					icon: 'https://avatars.githubusercontent.com/u/1342004?s=48&v=4',
					href: '/repo/vercel/vercel'
				},
				{
					title: 'square/okhttp',
					icon: 'https://avatars.githubusercontent.com/u/82592?s=48&v=4',
					href: '/repo/vercel/vercel'
				}
			]}
		/> -->
		
			{#if queryResult && !queryResult.loading && queryResult.data?.projCatCollection?.edges}
				{#each queryResult.data?.projCatCollection?.edges as edge}
					<BookmarkGroup
						title={edge?.node?.title}
						actionHref={`/compare/${edge?.node?.title}`}
						actionText="Compare"
						sortGroup={edge?.node?.title}
						items={edge?.node?.projCatAndProjBookmarkCollection?.edges.map(({ node }) => ({
							title: node?.projBookmark?.projRepo?.gthbRepo?.gthbRepoName,
							icon: node?.projBookmark?.projRepo?.gthbRepo?.gthbOwner?.avatarUrl,
							href: `/repo/${node?.projBookmark?.projRepo?.gthbRepo?.gthbOwner?.gthbOwnerLogin}/${node?.projBookmark?.projRepo?.gthbRepo?.gthbRepoName}`
						}))}
					/>
				{/each}
			{/if}
		

		<!-- {#each fetchedData as item}{/each} -->
		<!-- </ScrollArea> -->
	</section>
	<section
		class="relative flex bottom-0 left-0 right-0 h-10 text-foreground/50 text-xs justify-evenly mb-2 py-2 items-center z-50 bg-background md:border-t md:pb-0"
	>
		<button
			onclick={handleThemeButton}
			class="p-2 block hover:bg-muted align-middle hover:rounded-md"
			><PaletteIcon class="w-5 h-5 md:w-4 md:h-4" /></button
		>
		<a href="/settings" onclick={handleSettingsClick} class="p-2 block hover:bg-muted hover:rounded-md"
			><SettingsIcon class="w-5 h-5 md:w-4 md:h-4 block" /></a
		>
		<a 
			href="/signout"
			data-sveltekit-preload-data="false"
			class="p-2 block hover:bg-muted hover:rounded-md"
			><LogoutIcon class="w-5 h-5 md:w-4 md:h-4 block" /></a
		>
	</section>
</aside>
<Sheet.Root bind:open={isThemeSelectionOpen}>
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title>UI Theme</Sheet.Title>
			<Sheet.Description>Select your favourite theme.</Sheet.Description>
		</Sheet.Header>
		<div class="py-4">
			<Select.Root
				selected={{ label: getThemeLabel(), value: getTheme() }}
				onSelectedChange={handleThemeSelection}
			>
				<Select.Trigger class="w-[180px]">
					<Select.Value />
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="light">Light</Select.Item>
					<Select.Item value="dark">Dark</Select.Item>
					<Select.Item value="cosmos">Cosmos</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
	</Sheet.Content>
</Sheet.Root>
