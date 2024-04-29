<script lang="ts">
	import HnSentiment from '$lib/components/impure/HnSentiment/index.svelte';
	import Notes from '$lib/components/impure/RepoNotes/index.svelte';
	import RepoSidebar from '$lib/components/impure/RepoSidebar/index.svelte';
	import ChartView from '$lib/components/impure/ChartView/index.svelte';
	import {
		DetailDocument,
		DeleteProjBookmarkByGthbNameDocument,
		type DetailQuery as DetailQueryType
	} from '$lib/graphql/supabase/generated-codegen';
	import client from '$lib/graphql/supabase/client';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/pure/ui/button/button.svelte';
	import AddRepo from '$lib/components/impure/AddRepo/index.svelte';
	import { toast, Toaster } from 'svelte-sonner';
	import { updateSidebar } from '$lib/store/sidebar';

	type Props = {
		repoName: string;
		ownerLogin: string;
	};
	let { repoName, ownerLogin }: Props = $props();

	type Data = {
		eli5: string;
		description: string;
		githubRepoId: number;
		gthbOwnerId: number;
		isBookmarked: boolean;
		projRepoId: number;
		avatarUrl: string;
	} | null;

	let data: Data = $state(null);

	$effect(() => {
		client
			.query({
				query: DetailDocument,
				variables: {
					ownerLogin: ownerLogin,
					repoName: repoName
				}
			})
			.then((res) => {
				if (res?.data?.fGetProjRepoByGthbName?.edges[0]?.node) {
					data = {
						eli5: res?.data?.fGetProjRepoByGthbName?.edges[0]?.node?.repoEli5 || '',
						description:
							res?.data?.fGetGthbRepoByGthbName?.edges[0]?.node?.gthbRepoDescription || '',
						githubRepoId:
							parseInt(res?.data?.fGetGthbRepoByGthbName?.edges[0]?.node?.gthbRepoId) || -1,
						isBookmarked: res?.data?.fGetProjBookmarkByGthbName?.edges[0]?.node ? true : false,
						projRepoId: res?.data?.fGetProjRepoByGthbName?.edges[0]?.node?.projRepoId || -1,
						avatarUrl: res?.data?.fGetGthbOwnerByGthbName?.edges[0]?.node?.avatarUrl || '',
						gthbOwnerId:
							parseInt(res?.data?.fGetGthbOwnerByGthbName?.edges[0]?.node?.gthbOwnerId) || -1
					};
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
</script>

<section class="h-[3.75rem]"></section>
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
				<div class="w-full md:w-1/2">
					{#key repoName}
						<Notes githubRepoId={data.githubRepoId} />
					{/key}
				</div>
			{/if}
		</section>
		<section class="border-t md:flex md:gap-4 p-4">
			{#if data && data.isBookmarked}<Button on:click={handleRemoveBookmark}>Remove bookmark</Button
				>{/if}
			{#if data && !data.isBookmarked}<AddRepo
					repoIdentifier={{
						ownerLogin,
						repoName
					}}><Button>Add bookmark</Button></AddRepo
				>{/if}
		</section>
	</div>
	<RepoSidebar githubRepoId={data?.githubRepoId} githubOwnerId={data?.gthbOwnerId} />
</div>
