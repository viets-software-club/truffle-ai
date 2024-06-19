<script lang="ts">
import { goto } from "$app/navigation";
import AddRepo from "$lib/components/impure/AddRepo/index.svelte";
import CatDataTable from "$lib/components/impure/CatDataTable/index.svelte";
import CatNotes from "$lib/components/impure/CatNotes/index.svelte";
import ChartView from "$lib/components/impure/ChartView/index.svelte";
import SidebarIcon from "$lib/components/impure/SidebarIcon/index.svelte";
import { Badge } from "$lib/components/pure/ui/badge";
import { Button } from "$lib/components/pure/ui/button";
import client from "$lib/graphql/supabase/client";
import {
	CompareDocument,
	DeleteProjBookmarkOnProjCatByTitleAndIdDocument,
} from "$lib/graphql/supabase/generated-codegen";
import GitCompareIcon from "lucide-svelte/icons/git-compare";
import PlusIcon from "lucide-svelte/icons/plus";
import XIcon from "lucide-svelte/icons/x";
import { toast } from "svelte-sonner";

import { updateSidebar } from "$lib/store/sidebar";
import { untrack } from "svelte";
type Props = {
	title: string;
};
const { title }: Props = $props();
const titleDerived = $derived(title);

type BookmarkType = {
	githubRepoId: number;
	githubOwnerLogin: string;
	githubRepoName: string;
};
let bookmarks: BookmarkType[] = $state([]);

const loadData = () => {
	client
		.query({
			query: CompareDocument,
			variables: {
				title: titleDerived,
			},
		})
		.then((res) => {
			if (
				res.data.projCatCollection?.edges[0].node
					.projCatAndProjBookmarkCollection?.edges
			) {
				bookmarks =
					res.data.projCatCollection?.edges[0].node.projCatAndProjBookmarkCollection?.edges.map(
						(catToProjBookmark: any) => ({
							githubRepoId: Number.parseInt(
								catToProjBookmark.node.projBookmark.projRepo.gthbRepoId,
							),
							githubOwnerLogin:
								catToProjBookmark.node.projBookmark.projRepo.gthbRepo.gthbOwner
									.gthbOwnerLogin,
							githubRepoName:
								catToProjBookmark.node.projBookmark.projRepo.gthbRepo
									.gthbRepoName,
						}),
					);
			} else {
				toast.error("Error", {
					description: "This page doesn't exist. Redirecting....",
					duration: 1000,
				});
				setTimeout(() => {
					goto("/");
				}, 1000);
			}
		})
		.catch(() => {
			toast.error("Error", {
				description:
					"An error occurred while loading the page. Please try again later.",
				action: {
					label: "ok",
					onClick: () => {},
				},
			});
		});
};
function explicitEffect(fn: any, depsFn: any) {
	$effect(() => {
		depsFn();
		untrack(fn);
	});
}
explicitEffect(
	() => {
		console.log("hmm55");
		loadData();
	},
	() => [title],
);
const getHandleDeleteBookmarkFunc = (bookmark: any) => () => {
	if (bookmark) {
		client
			.mutate({
				mutation: DeleteProjBookmarkOnProjCatByTitleAndIdDocument,
				variables: {
					id: bookmark.githubRepoId,
					catTitle: title,
				},
			})
			.then(() => {
				bookmarks = bookmarks.filter((b) => {
					return bookmark.githubRepoId !== b.githubRepoId;
				});
				updateSidebar.set(`${bookmark.githubRepoId}-delete`);

				if (bookmarks.length === 0) {
					goto("/");
				} else {
					toast.success("Successfully Removed Bookmark!", {
						description: "",
						duration: 1000,
					});
				}
			})
			.catch((e) => {
				toast.error("Error", {
					description:
						"An error occurred while loading the page. Please try again later.",
					action: {
						label: "ok",
						onClick: () => {},
					},
				});
			});
	}
};
</script>

<section class="h-[3.75rem] py-2 px-4 pl-0 md:pl-4 flex items-center">
	<div class="flex gap-4 items-center md:hidden">
		<SidebarIcon />
	</div>
	<div class="flex gap-4 items-center ml-auto">
		<AddRepo preSelectedCategories={[title]}
			><Button variant="accent" size="sm">
				<PlusIcon class="h-4 w-4 md:mr-2" /><span class="hidden md:inline">Bookmark</span>
			</Button></AddRepo
		>
	</div>
</section>

<div class="md:flex min-h-full pb-4">
	<div class="w-full">
		<section class="border-t px-8 py-6">
			<div class="flex items-center gap-4 mb-5">
				<GitCompareIcon class="w-8 h-8 text-foreground/50" />
				<h1 class="text-2xl font-bold">{title}</h1>
			</div>
			<div class="flex gap-2 flex-wrap">
				{#each bookmarks as bookmark}
					<Badge class="px-3"
						>{bookmark.githubOwnerLogin}/{bookmark.githubRepoName}
						<!-- svelte-ignore event_directive_deprecated -->
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<div
							class="ml-2 inline"
							role="button"
							tabindex={null}
							on:click={getHandleDeleteBookmarkFunc(bookmark)}
						>
							<XIcon class="w-3 h-3 block" />
						</div></Badge
					>
				{/each}
			</div>
		</section>
		<section class="border-t">
			{#if bookmarks.length > 0}
			<ChartView
				githubRepoIds={bookmarks.map((bookmark) => bookmark.githubRepoId)}
				isNormalizable={bookmarks.length > 1}
			/>
			{/if}
		</section>
		<section class="border-t">
			<CatDataTable {title} />
		</section>
		<section class="border-t md:flex md:gap-4 p-4">
			<div class="w-full md:w-1/2">
				<CatNotes {title} />
			</div>
		</section>
	</div>
</div>
