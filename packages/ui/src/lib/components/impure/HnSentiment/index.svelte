<script lang="ts">
	import * as Card from '$lib/components/pure/ui/card/index.js';
	import { Icon } from 'svelte-icons-pack';
	import { FaBrandsSquareHackerNews } from 'svelte-icons-pack/fa';
	import { HackernewsEli5ByGthbNameDocument } from '$lib/graphql/supabase/generated-codegen';
	import client from '$lib/graphql/supabase/client';
	import { toast, Toaster } from 'svelte-sonner';

	type Props = {
		repoName: string;
		ownerLogin: string;
	};
	let { repoName, ownerLogin, ...attrs }: Props = $props();
	let text: string = $state('');
	$effect(() => {
		client
			.query({
				query: HackernewsEli5ByGthbNameDocument,
				variables: {
					ownerLogin: ownerLogin,
					repoName: repoName
				}
			})
			.then((res) => {
				if (res.data.fGetProjRepoByGthbName?.edges[0]?.node?.algoHnEli5)
					text = res.data.fGetProjRepoByGthbName?.edges[0].node.algoHnEli5;
			})
			.catch(() => {
				toast.error('Error', {
					description:
						'An error occurred while loading the HackerNews Sentiment. Please try again later.',
					action: {
						label: 'ok',
						onClick: () => {}
					}
				});
			});
	});
</script>

<Card.Root {...attrs}>
	<Card.Header>
		<Card.Title class="flex gap-2 items-center"
			><Icon src={FaBrandsSquareHackerNews} size="1rem" />Hackernews Comments</Card.Title
		>
		<Card.Description>Auto generated AI sentiment <a class="text-foreground/50 hover:underline hover:underline-offset-2 text-[0.8rem]" target="_blank" href={`http://hn.algolia.com/api/v1/search?query=${repoName}&tags=comment`}>(link)</a></Card.Description>
	</Card.Header>
	<Card.Content>
		<p
			class="h-92 text-ellipsis overflow-hidden w-full inline-block text-sm leading-relaxed"
			style="display: -webkit-box; -webkit-line-clamp: 10; -webkit-box-orient: vertical;"
		>
			{text}
		</p></Card.Content
	>
</Card.Root>
