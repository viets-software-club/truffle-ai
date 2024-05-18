<script lang="ts">
	import * as Card from '$lib/components/pure/ui/card/index.js';
	import { Textarea } from '$lib/components/pure/ui/textarea/index.js';
	import NotebookPen from 'lucide-svelte/icons/notebook-pen';
	import {
		UpdateProjRepoNotesByGthbRepoIdDocument,
		GetProjRepoNotesByGthbRepoIdDocument,

		GetProjBookmarkNotesByProjBookmarkIdDocument,

		UpdateProjBookmarkNotesByProjBookmarkIdDocument


	} from '$lib/graphql/supabase/generated-codegen';
	import client from '$lib/graphql/supabase/client';
	import { toast } from 'svelte-sonner';
	import * as Tabs from "$lib/components/pure/ui/tabs"

	type Props = {
		githubRepoId: string | number;
		projBookmarkId?: string | number;
	};
	let { githubRepoId, projBookmarkId, ...attrs }: Props = $props();

	let privateText = $state('');
	let publicText = $state('');

	$effect(() => {
		client
			.query({
				fetchPolicy: 'network-only',
				query: GetProjRepoNotesByGthbRepoIdDocument,
				variables: {
					gthbRepoId: githubRepoId
				}
			})
			.then((res) => {
				if (res?.data?.projRepoCollection?.edges[0]?.node?.note)
					publicText = res?.data?.projRepoCollection?.edges[0]?.node?.note;
				else publicText = '';
			})
			.catch((e) => {
				toast.error('Error', {
					description: 'An error occurred while loading the public notes.',
					action: {
						label: 'ok',
						onClick: () => {}
					}
				});
			});
		if(projBookmarkId) {
			client.query({
				fetchPolicy: 'network-only',
				query: GetProjBookmarkNotesByProjBookmarkIdDocument,
				variables: {
					projBookmarkId
				}
			}).then((res) => {
				if (res?.data?.projBookmarkCollection?.edges[0]?.node?.note)
					privateText = res?.data?.projBookmarkCollection?.edges[0]?.node?.note;
				else privateText = '';
			})
			.catch((e) => {
				toast.error('Error', {
					description: 'An error occurred while loading the private notes.',
					action: {
						label: 'ok',
						onClick: () => {}
					}
				});
			});
		}
	});
	const debounce = (callback: Function, wait = 300) => {
		let timeout: ReturnType<typeof setTimeout>;

		return (...args: any[]) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => callback(...args), wait);
		};
	};
	const savePublicNotes = () => {
		console.log('noting');
		client.mutate({
			mutation: UpdateProjRepoNotesByGthbRepoIdDocument,
			variables: {
				gthbRepoId: githubRepoId,
				text: publicText
			}
		});
	};
	const savePrivateNotes = () => {
		client.mutate({
			mutation: UpdateProjBookmarkNotesByProjBookmarkIdDocument,
			variables: {
				projBookmarkId,
				text: privateText
			}
		});
	};

	let currentTab = $state('public');
</script>






<Card.Root {...attrs}>
	<Card.Header>
		<Card.Title class="flex gap-2 items-center"><NotebookPen class="w-4 h-4" />Notes</Card.Title>
		<Card.Description>Your hand-written notes</Card.Description>
	</Card.Header>
	<Card.Content>

<Tabs.Root bind:value={currentTab} class="w-full">
	{#if currentTab === 'public'}
	<Tabs.Content value="public">
		
		<Textarea
			bind:value={publicText}
			rows={9}
			class="h-54 truncate w-full outline-none pt-2.5"
			on:input={debounce(savePublicNotes)}
		></Textarea>
	</Tabs.Content>
	{/if}
	{#if currentTab === 'private'}
	<Tabs.Content value="private">
	
		<Textarea
			bind:value={privateText}
			rows={9}
			class="h-54 truncate w-full outline-none pt-2.5"
			on:input={debounce(savePrivateNotes)}
		></Textarea>
		
	</Tabs.Content>
	{/if}
	<Tabs.List class="grid w-full grid-cols-2">
		<Tabs.Trigger value="public">Public</Tabs.Trigger>
		{#if projBookmarkId}<Tabs.Trigger value="private">Private</Tabs.Trigger>{/if}
	  </Tabs.List>
  </Tabs.Root>
		
		</Card.Content
	>
</Card.Root>
