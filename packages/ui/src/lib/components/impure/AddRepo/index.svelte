<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import { tick } from 'svelte';
	import * as Command from '$lib/components/pure/ui/command/index.js';
	import * as Popover from '$lib/components/pure/ui/popover/index.js';
	import { Button } from '$lib/components/pure/ui/button/index.js';
	import { cn } from '$lib/utils/index';
	import Plus from 'lucide-svelte/icons/plus';
	import url from 'url';
	import client from '$lib/graphql/supabase/client';
	import gatewayClient from '$lib/graphql/gateway/client';
	import { Badge } from '$lib/components/pure/ui/badge';
	import {
		CreateBookmarkDocument,
		type CreateBookmarkMutation as CreateBookmarkMutationType
	} from '$lib/graphql/gateway/generated-codegen';
	import {
		ListCategoriesTitleDocument,
		type ListCategoriesTitleQuery as ListCategoriesTitleQueryType
	} from '$lib/graphql/supabase/generated-codegen';
	import * as Dialog from '$lib/components/pure/ui/dialog/index';
	import { Input } from '$lib/components/pure/ui/input/index';
	import { Label } from '$lib/components/pure/ui/label/index';
	import type { ApolloQueryResult, FetchResult } from '@apollo/client/core';
	import { toast, Toaster } from 'svelte-sonner';

	function isValidGithubUrl(url: any) {
		const regex = /^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
		return regex.test(url);
	}

	function parseRepoUrl(githubUrl: any) {
		const path = new URL(githubUrl).pathname;
		if (path) {
			const [_, ownerLogin, repoName] = path.split('/');
			return { ownerLogin, repoName };
		} else {
			return null;
		}
	}

	type Props = {
		repoIdentifier?: {
			ownerLogin: string;
			repoName: string;
		};
	};
	let { repoIdentifier }: Props = $props();

	let currentCategories: { title: string; isSelected: boolean }[] = $state([]);
	let selectedCategories: { title: string }[] = $state([]);
	let isSubmitting = $state(false);

	$effect(() => {
		client
			.query({
				query: ListCategoriesTitleDocument
			})
			.then((res: ApolloQueryResult<ListCategoriesTitleQueryType>) => {
				if (res.data.projCatCollection?.edges)
					currentCategories = res.data.projCatCollection?.edges.map((edge) => {
						return {
							title: edge.node.title,
							isSelected: false
						};
					});
			});
	});
	let dialogOpen = $state(false);
	let open = $state(false);
	let selectedValue: string = $state('Add category...');
	let commandInputValue: string = $state('');
	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}

	let githubRepoUrl = $state('');
	const handleAddClick = () => {
		open = false;

		if (
			!selectedCategories.find((category) => category.title === commandInputValue) &&
			commandInputValue.trim().length > 0
		)
			selectedCategories = [...selectedCategories, { title: commandInputValue }];
	};
	const handleSaveClick = () => {
		if (!repoIdentifier && !isValidGithubUrl(githubRepoUrl)) return;
		isSubmitting = true;

		const repoIdentification: any = repoIdentifier ? repoIdentifier : parseRepoUrl(githubRepoUrl);
		const categories = Array.isArray(selectedCategories)
			? selectedCategories.map((category) => category.title)
			: 'default';
		if (repoIdentification) {
			gatewayClient
				.mutate({
					mutation: CreateBookmarkDocument,
					variables: {
						categories: categories,
						repo: {
							name: repoIdentification?.repoName,
							owner: repoIdentification?.ownerLogin
						}
					}
				})
				.then((res: FetchResult<CreateBookmarkMutationType>) => {
					selectedCategories = [];
					isSubmitting = false;
					open = false;
					dialogOpen = false;
					toast.success(
						selectedCategories.length > 1
							? 'Success! Added Bookmarks!'
							: 'Success! Added Bookmark!',
						{
							duration: 3000
						}
					);
				})
				.catch((e) => {
					selectedCategories = [];
					isSubmitting = false;
					open = false;
					dialogOpen = false;
					toast.error('Error', {
						description:
							selectedCategories.length > 1
								? 'An error occurred while adding the bookmarks. Please try again later.'
								: 'An error occurred while adding the bookmark. Please try again later.',
						action: {
							label: 'ok',
							onClick: () => {}
						}
					});
				});
		}
	};
</script>

<Dialog.Root
	bind:open={dialogOpen}
	onOpenChange={() => {
		isSubmitting = false;
		selectedCategories = [];
		commandInputValue = '';
		githubRepoUrl = '';
	}}
>
	<Dialog.Trigger>
		<slot /></Dialog.Trigger
	>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Add Repository</Dialog.Title>
			<Dialog.Description>Add a repository to your bookmarks.</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-4 py-4 pt-2 px-1">
			<div class="w-full md:w-[350px]">
				{#if !repoIdentifier}
					<Input
						id="name"
						placeholder="github.com/owner/repo"
						class="col-span-3"
						bind:value={githubRepoUrl}
					/>
				{/if}
			</div>
			<Popover.Root bind:open let:ids>
				<Popover.Trigger asChild let:builder>
					<Button
						builders={[builder]}
						variant="outline"
						role="combobox"
						aria-expanded={open}
						class="w-full md:w-[350px] justify-between"
					>
						{selectedValue}
						<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</Popover.Trigger>
				<Popover.Content class="w-full md:w-[350px] p-0">
					<Command.Root>
						<Command.Input bind:value={commandInputValue} placeholder="Add category..." />
						<!-- <Command.Empty>No bookmark found.</Command.Empty> -->
						<Command.Group>
							{#if currentCategories}
								{#each currentCategories as category}
									<Command.Item
										value={category.title}
										onSelect={(currentValue) => {
											const index = currentCategories.findIndex(
												(category) => category.title === currentValue
											);
											currentCategories[index].isSelected = !currentCategories[index].isSelected;
											if (currentCategories[index].isSelected) {
												selectedCategories = [
													...selectedCategories,
													{ title: currentCategories[index].title }
												];
											} else {
												selectedCategories = selectedCategories.filter(
													(category) => category.title !== currentCategories[index].title
												);
											}
											// value = currentValue;
											closeAndFocusTrigger(ids.trigger);
										}}
									>
										<Check class={cn('mr-2 h-4 w-4', !category.isSelected && 'text-transparent')} />
										{category.title}
									</Command.Item>
								{/each}
							{/if}
						</Command.Group>
						<div class="-mx-1 h-px bg-border"></div>
						<div
							class="overflow-hidden p-1 text-foreground [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground"
						>
							<div
								on:click={handleAddClick}
								class="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
							>
								<Check class="mr-2 h-4 w-4 text-transparent" />
								Add category
								<!-- <span class="pointer text-sm text-center w-full" on:click={handleAddClick}>
								Add category
							</span> -->
							</div>
						</div>
					</Command.Root>
				</Popover.Content>
			</Popover.Root>
			<div class="flex gap-2">
				{#each selectedCategories as selected}
					<Badge>{selected.title}</Badge>
				{/each}
			</div>
			<Dialog.Footer>
				<Button
					type="submit"
					disabled={(!repoIdentifier && !isValidGithubUrl(githubRepoUrl)) ||
						isSubmitting ||
						!(selectedCategories.length > 0)}
					on:click={handleSaveClick}>Save changes</Button
				>
			</Dialog.Footer>
		</div></Dialog.Content
	>
</Dialog.Root>
