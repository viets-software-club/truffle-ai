<script lang="ts">
	import * as Card from '$lib/components/pure/ui/card/index.js';
	import { Textarea } from '$lib/components/pure/ui/textarea/index.js';
	import NotebookPen from 'lucide-svelte/icons/notebook-pen';
	import {
		UpdateProjRepoNotesByGthbRepoIdDocument,
		GetProjRepoNotesByGthbRepoIdDocument
	} from '$lib/graphql/supabase/generated-codegen';
	import client from '$lib/graphql/supabase/client';
	import { toast } from 'svelte-sonner';
	type Props = {
		githubRepoId: string | number;
	};
	let { githubRepoId, ...attrs }: Props = $props();

	let value = $state('');

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
					value = res?.data?.projRepoCollection?.edges[0]?.node?.note;
				else value = '';
			})
			.catch((e) => {
				toast.error('Error', {
					description: 'An error occurred while loading the notes.',
					action: {
						label: 'ok',
						onClick: () => {}
					}
				});
			});
	});
	const debounce = (callback: Function, wait = 300) => {
		let timeout: ReturnType<typeof setTimeout>;

		return (...args: any[]) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => callback(...args), wait);
		};
	};
	const saveNotes = () => {
		console.log('noting');
		client.mutate({
			mutation: UpdateProjRepoNotesByGthbRepoIdDocument,
			variables: {
				gthbRepoId: githubRepoId,
				text: value
			}
		});
	};
</script>

<Card.Root {...attrs}>
	<Card.Header>
		<Card.Title class="flex gap-2 items-center"><NotebookPen class="w-4 h-4" />Notes</Card.Title>
		<Card.Description>Your hand-written notes</Card.Description>
	</Card.Header>
	<Card.Content>
		{#key githubRepoId}
			<Textarea
				bind:value
				rows={9}
				class="h-54 truncate w-full outline-none pt-2.5"
				on:input={debounce(saveNotes)}
			></Textarea>{/key}</Card.Content
	>
</Card.Root>
