<script lang="ts">
	import * as Card from '$lib/components/pure/ui/card/index.js';
	import { Textarea } from '$lib/components/pure/ui/textarea/index.js';
	import NotebookPen from 'lucide-svelte/icons/notebook-pen';
	import {
		GetProjCatNotesByCatTitleDocument,
		UpdateProjCatNotesByCatTitleDocument
	} from '$lib/graphql/supabase/generated-codegen';
	import client from '$lib/graphql/supabase/client';
	import { toast } from 'svelte-sonner';
	type Props = {
		title: string;
	};
	let { title, ...attrs }: Props = $props();

	let value = $state('');

	$effect(() => {
		client
			.query({
				query: GetProjCatNotesByCatTitleDocument,
				variables: {
					categoryTitle: title
				}
			})
			.then((res) => {
				if (res?.data?.projCatCollection?.edges[0]?.node?.note)
					value = res?.data?.projCatCollection?.edges[0]?.node?.note;
				else value = '';
			})
			.catch(() => {
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
		client.mutate({
			mutation: UpdateProjCatNotesByCatTitleDocument,
			variables: {
				categoryTitle: title,
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
		{#key title}
			<Textarea
				bind:value
				rows={9}
				class="h-54 truncate w-full outline-none pt-2.5"
				on:input={debounce(saveNotes)}
			></Textarea>{/key}</Card.Content
	>
</Card.Root>
