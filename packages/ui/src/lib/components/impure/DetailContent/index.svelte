<script lang="ts">
	import HnSentiment from '$lib/components/impure/HnSentiment/index.svelte';
	import Notes from '$lib/components/impure/RepoNotes/index.svelte';
	import RepoSidebar from '$lib/components/impure/RepoSidebar/index.svelte';
	import ChartView from '$lib/components/impure/ChartView/index.svelte';
	import {
		DetailDocument,
		DeleteProjBookmarkByGthbNameDocument,
		DetailUpAndDownDocument,
		type DetailQuery as DetailQueryType,
		type DetailUpAndDownQuery,


	} from '$lib/graphql/supabase/generated-codegen';
	import client from '$lib/graphql/supabase/client';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/pure/ui/button/button.svelte';
	import AddRepo from '$lib/components/impure/AddRepo/index.svelte';
	import { toast } from 'svelte-sonner';
	import { updateSidebar } from '$lib/store/sidebar';
	import SidebarIcon from '$lib/components/impure/SidebarIcon/index.svelte';
    import { page } from '$app/stores';
	import ChevronUpIcon from 'lucide-svelte/icons/chevron-up';
	import ChevronDownIcon from 'lucide-svelte/icons/chevron-down';
	import XIcon from 'lucide-svelte/icons/x';
	import { onDestroy, onMount } from 'svelte';

	type Props = {
		repoName: string;
		ownerLogin: string;
	};
	// let { repoName, ownerLogin }: Props = $props();
	
	let ownerLogin = $derived($page.params.owner_login)
	let repoName = $derived($page.params.repo_name)
	type Data = {
		eli5: string;
		description: string;
		githubRepoId: number;
		gthbOwnerId: number;
		isBookmarked: boolean;
		projRepoId: number;
		avatarUrl: string;
		projBookmarkId: number | undefined
	} | null;

	let data: Data = $state(null);
	let navigation: any = $state({beforeDisabled: true, afterDisabled: true})
	let prevPage: string | null = $state(null);
	let upDownData: any = null;
	onDestroy(() => {
		// console.log('destroy')
		data = null;
		navigation = null;
		prevPage = null;
		upDownData = null;
	
	})

	$effect(() => {
		client.queryDeduplication = true;
		// console.log('that is ', ownerLogin, repoName)
		client
			.query({
				fetchPolicy: 'network-only',
				query: DetailDocument,
				variables: {
					ownerLogin: ownerLogin,
					repoName: repoName
				},
			})
			.then((res) => {

				if (res?.data?.fGetProjRepoByGthbName?.edges[0]?.node) {
					// console.log('going on ', res?.data?.fGetProjRepoByGthbName?.edges[0]?.node)
					// console.log(res?.data?.fGetProjRepoByGthbName?.edges[0]?.node)
					data = {
						eli5: res?.data?.fGetProjRepoByGthbName?.edges[0]?.node?.repoEli5 || '',
						description:
							res?.data?.fGetGthbRepoByGthbName?.edges[0]?.node?.gthbRepoDescription || '',
						githubRepoId:
							parseInt(res?.data?.fGetGthbRepoByGthbName?.edges[0]?.node?.gthbRepoId) || -1,
						isBookmarked: res?.data?.fGetProjBookmarkByGthbName?.edges[0]?.node ? true : false,
						projBookmarkId: res?.data?.fGetProjBookmarkByGthbName?.edges[0]?.node?.projBookmarkId || undefined,
						projRepoId: res?.data?.fGetProjRepoByGthbName?.edges[0]?.node?.projRepoId || -1,
						avatarUrl: res?.data?.fGetGthbOwnerByGthbName?.edges[0]?.node?.avatarUrl || '',
						gthbOwnerId:
							parseInt(res?.data?.fGetGthbOwnerByGthbName?.edges[0]?.node?.gthbOwnerId) || -1
					};
					// console.log('description', data.description);
				} else {
					toast.error('Error', {
						description: "This page doesn't exist. Redirecting....",
						duration: 1000
					});
					setTimeout(() => {
						goto('/');
					}, 1000);
				}
			})
			.catch((e: any) => {
				toast.error('Error', {
					description: 'An error occurred while loading the page. Please try again later.',
					action: {
						label: 'ok',
						onClick: () => {}
					}
				});
			});
		if($page?.url?.searchParams?.has('data')) {
			try {
			const data = JSON.parse($page.url.searchParams?.get('data') as any)
			
			prevPage = data.page;
		
			client
				.query<DetailUpAndDownQuery>({
					query: DetailUpAndDownDocument,
					variables: {
						title: '',
						dateRange: '',
						...data.variables,
						cursor: data.cursor,
						isTrending: data.page === 'trending',
						isCategory: data.page.startsWith('compare'),
						isBookmarks: data.page === 'bookmarks',
					}
				} as any)
				.then((res) => {
					let before;
					let after;
					if(data.page === "trending") {
						before = res?.data?.beforeTrendingRepo;
						after  = res?.data?.afterTrendingRepo;
					} else if(data.page.startsWith('compare')) {
						before = res?.data?.beforeCategoryRepo;
						after  = res?.data?.afterCategoryRepo;
					} else if(data.page === "bookmarks") {
						before = res?.data?.beforeBookmarkRepo;
						after  = res?.data?.afterBookmarkRepo;
					}
					upDownData = data;
				
					navigation = {
						beforeCursor: before?.edges[0]?.cursor,
						before: before?.edges[0]?.node?.gthbOwner?.gthbOwnerLogin + '/' + before?.edges[0]?.node?.gthbRepoName,
						beforeDisabled: before?.edges && before?.edges?.length === 0,
						afterCursor: after?.edges[0]?.cursor,
						after: after?.edges[0]?.node?.gthbOwner?.gthbOwnerLogin + '/' + after?.edges[0]?.node?.gthbRepoName,
						afterDisabled: after?.edges && after?.edges?.length === 0
					}
				}).catch((e: any) => {
					toast.error('Error', {
						description: 'An error occurred while loading the up and down buttons of page. Please try again later.',
						action: {
							label: 'ok',
							onClick: () => {}
						}
					});
				});
		} catch(e) {
			toast.error('Error', {
				description: 'An error occurred while loading the up and down buttons of page. Please try again later.',
				action: {
					label: 'ok',
					onClick: () => {}
				}
			});
		}
		}
	});
	const handleRemoveBookmark = () => {
		if (data)
			client
				.mutate({
					mutation: DeleteProjBookmarkByGthbNameDocument,
					variables: {
						repoName,
						ownerLogin
					}
				})
				.then(() => {
					updateSidebar.set(`${repoName}-remove`);
					toast.success('Bookmark removed');
				})
				.catch((e) => {
					toast.error('Error', {
						description: 'An error occurred while removing the bookmark. Please try again later.',
						action: {
							label: 'ok',
							onClick: () => {}
						}
					});
				});
	};

	const handleXClick = () => {
		if(prevPage && prevPage?.startsWith("compare"))
			goto(`${prevPage}`)
		else if(prevPage === "bookmarks")
			goto('/bookmarks')
		else
			goto('/')
	};
	const handleUpClick = () => {
		const param = {
			...upDownData,
			cursor: navigation.beforeCursor
		}
		goto(`/repo/${navigation.before}?data=${encodeURIComponent(JSON.stringify(param))}`)
	}
	const handleDownClick = () => {
		const param = {
			...upDownData,
			cursor: navigation.afterCursor
		}
		goto(`/repo/${navigation.after}?data=${encodeURIComponent(JSON.stringify(param))}`)
	}
</script>


<section class="h-[3.75rem] py-2 px-4 flex items-center">
	<div class="flex gap-4 items-center md:hidden">
		<SidebarIcon />
	</div>
	<div class="flex gap-4 items-center ml-auto md:ml-0">
		
		<Button variant="ghost" size="icon2" on:click={handleXClick}>
			<XIcon class="h-4 w-4" />
		</Button>
		<Button variant="outline" size="icon2" disabled={navigation.beforeDisabled} on:click={handleUpClick}>
			<ChevronUpIcon class="h-3.5 w-3.5" />
		</Button>
		<Button variant="outline" size="icon2" disabled={navigation.afterDisabled} on:click={handleDownClick}>
			<ChevronDownIcon class="h-3.5 w-3.5" />
		</Button>
	</div>
</section>
<!-- md:h-[calc(100%-3.75rem)] -->
<div class="md:flex">
	<div class="flex-1">
		<section class="border-t px-8 py-6">
			<div class="flex items-center gap-4 mb-5">
				{#if data}
					<img class="w-8 h-8" src={data.avatarUrl} alt="avatar" />
				{/if}
				<h1 class="text-2xl font-bold">{ownerLogin}/{repoName}</h1>
			</div>
			<div class="md:flex gap-10">
				<div class="mb-4 md:mb-0 md:max-w-xs">
					<h2 class="text-foreground/50 text-sm leading-loose">About</h2>
					<p class="text-sm">{data?.description}</p>
				</div>
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
			<div class="w-full md:w-1/2 mb-4 md:mb-0">
				<HnSentiment {ownerLogin} {repoName} />
			</div>
			{#if data}
				{#key data.projBookmarkId}
				<div class="w-full md:w-1/2">
					<Notes githubRepoId={data.githubRepoId} projBookmarkId={data.projBookmarkId} />
				</div>
				{/key}
			{/if}
		</section>
		<section class="border-t flex gap-4 p-4">
			{#if data && data.isBookmarked}<Button on:click={handleRemoveBookmark}>Remove bookmark</Button
				>{/if}
			{#if data}<AddRepo
					repoIdentifier={{
						ownerLogin,
						repoName
					}}><Button>Add bookmark</Button></AddRepo
				>{/if}
		</section>
	</div>
	<RepoSidebar githubRepoId={data?.githubRepoId} githubOwnerId={data?.gthbOwnerId} />
</div>
