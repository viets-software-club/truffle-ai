<script lang="ts">
import * as Card from "$lib/components/pure/ui/card/index.js";
import Separator from "$lib/components/pure/ui/separator/separator.svelte";
import client from "$lib/graphql/supabase/client";
import { HnSentimentDocument } from "$lib/graphql/supabase/generated-codegen";
import { untrack } from "svelte";
import { Icon } from "svelte-icons-pack";
import { FaBrandsSquareHackerNews } from "svelte-icons-pack/fa";
import { Toaster, toast } from "svelte-sonner";

type Props = {
	repoName: string;
	ownerLogin: string;
};
const { repoName, ownerLogin, ...attrs }: Props = $props();
let text: string = $state("");
let hnCommentObjectIds: number[] | null = $state(null);
const loadEli5 = () => {
	client
		.query({
			query: HnSentimentDocument,
			variables: {
				ownerLogin: ownerLogin,
				repoName: repoName,
			},
		})
		.then((res) => {
			if (res.data.fGetProjRepoByGthbName?.edges[0]?.node?.algoHnEli5)
				text = res.data.fGetProjRepoByGthbName?.edges[0].node.algoHnEli5;
			if (
				res.data.algoHnQueryCollection?.edges[0].node?.algoHnCommentCollection
					?.edges
			) {
				hnCommentObjectIds =
					res.data.algoHnQueryCollection?.edges[0].node?.algoHnCommentCollection?.edges
						.slice(0, 15)
						.map((edge) => edge.node.algoHnCommentObjectId);
			}
		})
		.catch(() => {
			toast.error("Error", {
				description:
					"An error occurred while loading the HackerNews Sentiment. Please try again later.",
				action: {
					label: "ok",
					onClick: () => {},
				},
			});
		});
};
const explicitEffect = (fn: any, depsFn: any) => {
	$effect(() => {
		depsFn();
		untrack(fn);
	});
};
explicitEffect(
	() => {
		loadEli5();
	},
	() => [repoName, ownerLogin],
);
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
		</p>
		
		{#if hnCommentObjectIds && hnCommentObjectIds.length > 0}
		<Separator class="my-4"/>
		<div class="flex gap-4 px-0.5 break-normal flex-wrap text-sm">
		{#each hnCommentObjectIds as hnCommentObjectId, i}
			<a target="_blank" rel="noopener noreferrer" href={`https://news.ycombinator.com/item?id=${hnCommentObjectId}`}>{i + 1}</a>
		{/each}
	</div>
		{/if}

		</Card.Content
	>
</Card.Root>
