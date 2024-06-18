<script lang="ts">
import { goto } from "$app/navigation";
import { page } from "$app/stores";
import AddRepo from "$lib/components/impure/AddRepo/index.svelte";
import ChartView from "$lib/components/impure/ChartView/index.svelte";
import HnSentiment from "$lib/components/impure/HnSentiment/index.svelte";
import Notes from "$lib/components/impure/RepoNotes/index.svelte";
import RepoSidebar from "$lib/components/impure/RepoSidebar/index.svelte";
import SidebarIcon from "$lib/components/impure/SidebarIcon/index.svelte";
import Button from "$lib/components/pure/ui/button/button.svelte";
import client from "$lib/graphql/supabase/client";
import {
	DeleteProjBookmarkByGthbNameDocument,
	DetailDocument,
	type DetailQuery as DetailQueryType,
	DetailUpAndDownDocument,
	type DetailUpAndDownQuery,
} from "$lib/graphql/supabase/generated-codegen";
import { updateSidebar } from "$lib/store/sidebar";
import ChevronDownIcon from "lucide-svelte/icons/chevron-down";
import ChevronUpIcon from "lucide-svelte/icons/chevron-up";
import XIcon from "lucide-svelte/icons/x";
import PlusIcon from "lucide-svelte/icons/plus";
import MinusIcon from "lucide-svelte/icons/minus";
import { onDestroy, onMount, untrack } from "svelte";
import { toast } from "svelte-sonner";

type Props = {
	repoName: string;
	ownerLogin: string;
};

type Data = {
	eli5: string;
	description: string;
	githubRepoId: number;
	gthbOwnerId: number;
	isBookmarked: boolean;
	projRepoId: number;
	avatarUrl: string;
	projBookmarkId: number | undefined;
} | null;

let data: Data = $state(null);
let navigation: any = $state({ beforeDisabled: true, afterDisabled: true });
let prevPage: string | null = $state(null);
let upDownData: any = null;
onDestroy(() => {
	data = null;
	navigation = null;
	prevPage = null;
	upDownData = null;
});

const loadData = (
	ownerLogin: string,
	repoName: string,
	dataSearchParam: any,
) => {
	client
		.query({
			fetchPolicy: "network-only",
			query: DetailDocument,
			variables: {
				ownerLogin: ownerLogin,
				repoName: repoName,
			},
		})
		.then((res) => {
			if (res?.data?.fGetProjRepoByGthbName?.edges[0]?.node) {
				// console.log('going on ', res?.data?.fGetProjRepoByGthbName?.edges[0]?.node)
				// console.log(res?.data?.fGetProjRepoByGthbName?.edges[0]?.node)
				data = {
					eli5:
						res?.data?.fGetProjRepoByGthbName?.edges[0]?.node?.repoEli5 || "",
					description:
						res?.data?.fGetGthbRepoByGthbName?.edges[0]?.node
							?.gthbRepoDescription || "",
					githubRepoId:
						Number.parseInt(
							res?.data?.fGetGthbRepoByGthbName?.edges[0]?.node?.gthbRepoId,
						) || -1,
					isBookmarked: !!res?.data?.fGetProjBookmarkByGthbName?.edges[0]?.node,
					projBookmarkId:
						res?.data?.fGetProjBookmarkByGthbName?.edges[0]?.node
							?.projBookmarkId || undefined,
					projRepoId:
						res?.data?.fGetProjRepoByGthbName?.edges[0]?.node?.projRepoId || -1,
					avatarUrl:
						res?.data?.fGetGthbOwnerByGthbName?.edges[0]?.node?.avatarUrl || "",
					gthbOwnerId:
						Number.parseInt(
							res?.data?.fGetGthbOwnerByGthbName?.edges[0]?.node?.gthbOwnerId,
						) || -1,
				};
				// console.log('description', data.description);
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
		.catch((e: any) => {
			console.error(e);
			toast.error("Error", {
				description:
					"An error occurred while loading the page. Please try again later.",
				action: {
					label: "ok",
					onClick: () => {},
				},
			});
		});
	if (dataSearchParam) {
		try {
			const data = JSON.parse(dataSearchParam as any);

			prevPage = data.page;

			client
				.query<DetailUpAndDownQuery>({
					query: DetailUpAndDownDocument,
					variables: {
						title: "",
						dateRange: "",
						...data.variables,
						cursor: data.cursor,
						isTrending: data.page === "trending",
						isCategory: data.page.startsWith("compare"),
						isBookmarks: data.page === "bookmarks",
					},
				} as any)
				.then((res) => {
					let before: any;
					let after: any;
					if (data.page === "trending") {
						before = res?.data?.beforeTrendingRepo;
						after = res?.data?.afterTrendingRepo;
					} else if (data.page.startsWith("compare")) {
						before = res?.data?.beforeCategoryRepo;
						after = res?.data?.afterCategoryRepo;
					} else if (data.page === "bookmarks") {
						before = res?.data?.beforeBookmarkRepo;
						after = res?.data?.afterBookmarkRepo;
					}
					upDownData = data;

					navigation = {
						beforeCursor: before?.edges[0]?.cursor,
						before: `${before?.edges[0]?.node?.gthbOwner?.gthbOwnerLogin}/${before?.edges[0]?.node?.gthbRepoName}`,
						beforeDisabled: before?.edges && before?.edges?.length === 0,
						afterCursor: after?.edges[0]?.cursor,
						after: `${after?.edges[0]?.node?.gthbOwner?.gthbOwnerLogin}/${after?.edges[0]?.node?.gthbRepoName}`,
						afterDisabled: after?.edges && after?.edges?.length === 0,
					};
				})
				.catch((e: any) => {
					console.error(e);
					toast.error("Error", {
						description:
							"An error occurred while loading the up and down buttons of page. Please try again later.",
						action: {
							label: "ok",
							onClick: () => {},
						},
					});
				});
		} catch (e) {
			console.error(e);
			toast.error("Error", {
				description:
					"An error occurred while loading the up and down buttons of page. Please try again later.",
				action: {
					label: "ok",
					onClick: () => {},
				},
			});
		}
	}
	return data;
};
let currentParams: {
	ownerLogin: string;
	repoName: string;
} | null = $state(null);
page.subscribe((e) => {
	if (
		e.params.owner_login !== currentParams?.ownerLogin ||
		e.params.repo_name !== currentParams?.repoName
	) {
		currentParams = {
			ownerLogin: e.params.owner_login,
			repoName: e.params.repo_name,
		};
		if (e.params.owner_login && e.params.repo_name)
			loadData(
				e.params.owner_login,
				e.params.repo_name,
				e.url.searchParams?.get("data"),
			);
	}
});

const handleRemoveBookmark = () => {
	if (currentParams)
		client
			.mutate({
				mutation: DeleteProjBookmarkByGthbNameDocument,
				variables: {
					repoName: currentParams.repoName,
					ownerLogin: currentParams.ownerLogin,
				},
			})
			.then(() => {
				updateSidebar.set(`${$page.params.repo_name}-remove`);
				goto("/");
				toast.success("Bookmark removed");
			})
			.catch((e) => {
				console.error(e);
				toast.error("Error", {
					description:
						"An error occurred while removing the bookmark. Please try again later.",
					action: {
						label: "ok",
						onClick: () => {},
					},
				});
			});
};

const handleXClick = () => {
	if (prevPage?.startsWith("compare")) goto(`/${prevPage}`);
	else if (prevPage === "bookmarks") goto("/bookmarks");
	else goto("/");
};
const handleUpClick = () => {
	const param = {
		...upDownData,
		cursor: navigation.beforeCursor,
	};
	goto(
		`/repo/${navigation.before}?data=${encodeURIComponent(JSON.stringify(param))}`,
	);
};
const handleDownClick = () => {
	const param = {
		...upDownData,
		cursor: navigation.afterCursor,
	};
	goto(
		`/repo/${navigation.after}?data=${encodeURIComponent(JSON.stringify(param))}`,
	);
};
</script>

<section class="h-[3.75rem] py-2 px-4 pl-0 md:pl-4 flex items-center">
	<div class="flex gap-4 items-center md:hidden">
		<SidebarIcon />
	</div>
	<div class="flex gap-4 items-center ml-auto md:ml-0">
		<Button variant="ghost" size="icon2" on:click={handleXClick}>
			<XIcon class="h-4 w-4" />
		</Button>
		<Button
			variant="outline"
			size="icon2"
			disabled={navigation.beforeDisabled}
			on:click={handleUpClick}
		>
			<ChevronUpIcon class="h-3.5 w-3.5" />
		</Button>
		<Button
			variant="outline"
			size="icon2"
			disabled={navigation.afterDisabled}
			on:click={handleDownClick}
		>
			<ChevronDownIcon class="h-3.5 w-3.5" />
		</Button>
	</div>

	<div class="flex gap-4 items-center ml-auto">
		{#if data && data.isBookmarked}<Button variant="outline" size="sm" on:click={handleRemoveBookmark}>
			<MinusIcon class="h-4 w-4 md:mr-2" /><span class="hidden md:inline">Remove</span>
			</Button>{/if}
	{#if currentParams}<AddRepo
					repoIdentifier={{
						ownerLogin: currentParams.ownerLogin,
						repoName: currentParams.repoName
					}}>
					<Button variant="accent" size="sm">
						<PlusIcon class="h-4 w-4 md:mr-2" /><span class="hidden md:inline">Bookmark</span>
					</Button>
					</AddRepo
				>{/if}
				</div>
</section>
<!-- md:h-[calc(100%-3.75rem)] -->
<div class="md:flex">
	<div class="flex-1">
		<section class="border-t px-5 md:px-8 py-6">
			<div class="flex items-center gap-4 mb-5">
				{#if data}
					<img class="w-8 h-8" src={data.avatarUrl} alt="avatar" loading="eager" />
				{:else}
					<div class="w-8 h-8"></div>
				{/if}
				<h1 class="text-2xl font-bold">{$page.params.owner_login}/{$page.params.repo_name}</h1>
			</div>
			<div class="md:flex gap-10">
				{#if data?.description}
				<div class="mb-4 md:mb-0 md:max-w-xs">
					<h2 class="text-foreground/50 text-sm leading-loose">About</h2>
					<p class="text-sm">{data?.description}</p>
				</div>
				{/if}
				<div>
					<h2 class="text-foreground/50 text-sm leading-loose">Explain Like I am 5</h2>
					<p class="text-sm max-w-2xl">
						{data?.eli5}
					</p>
				</div>
			</div>
		</section>
		<section class="border-t w-full">
			{#if data}
				<ChartView githubRepoIds={[data.githubRepoId]} isNormalizable={false} />
			{/if}
		</section>
		<section class="border-t md:flex md:gap-4 p-4">
			{#if currentParams}
			
			<div class="w-full md:w-1/2 mb-4 md:mb-0">
				{#key currentParams}
				<HnSentiment ownerLogin={currentParams.ownerLogin} repoName={currentParams.repoName} />
				{/key}
			</div>
			
			{/if}
			{#if data && data.projBookmarkId}
					<div class="w-full md:w-1/2">
						{#key data.projBookmarkId + data.githubRepoId}

						<Notes githubRepoId={data.githubRepoId} projBookmarkId={data.projBookmarkId} />
						{/key}
					</div>
			
			{/if}
		</section>
	
	</div>
	{#if data}
	{#key data?.gthbOwnerId + data?.githubRepoId}
	<RepoSidebar githubRepoId={data?.githubRepoId} githubOwnerId={data?.gthbOwnerId} />
	{/key}
	{/if}
</div>
