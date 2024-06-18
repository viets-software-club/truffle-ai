<script lang="ts">
import { Badge } from "$lib/components/pure/ui/badge";
import { Button } from "$lib/components/pure/ui/button/index.js";
import * as Command from "$lib/components/pure/ui/command/index.js";
import * as Dialog from "$lib/components/pure/ui/dialog/index";
import { Input } from "$lib/components/pure/ui/input/index";
import * as Popover from "$lib/components/pure/ui/popover/index.js";
import gatewayClient from "$lib/graphql/gateway/client";
import {
	CreateBookmarkDocument,
	type CreateBookmarkMutation as CreateBookmarkMutationType,
} from "$lib/graphql/gateway/generated-codegen";
import client from "$lib/graphql/supabase/client";
import {
	ListCategoriesTitleDocument,
	type ListCategoriesTitleQuery as ListCategoriesTitleQueryType,
} from "$lib/graphql/supabase/generated-codegen";
import { updateSidebar } from "$lib/store/sidebar";
import { supabaseClient } from "$lib/supabase";
import { cn } from "$lib/utils/index";
import type { ApolloQueryResult, FetchResult } from "@apollo/client/core";
import Check from "lucide-svelte/icons/check";
import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
import Plus from "lucide-svelte/icons/plus";
import { tick } from "svelte";
import { toast } from "svelte-sonner";

function isValidGithubUrl(url: any) {
	const regex = /^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
	return regex.test(url);
}

function parseRepoUrl(githubUrl: any) {
	const path = new URL(githubUrl).pathname;
	if (path) {
		const [_, ownerLogin, repoName] = path.split("/");
		return { ownerLogin, repoName };
	}
	return null;
}

type Props = {
	onDialogOpenChange?: () => void;
	startOpen?: boolean;
	repoIdentifier?: {
		ownerLogin: string;
		repoName: string;
	};
	preSelectedCategories?: string[];
	children?: any;
};
const {
	repoIdentifier,
	preSelectedCategories = [],
	startOpen = false,
	onDialogOpenChange,
	children,
}: Props = $props();

let currentCategories: { title: string; isSelected: boolean }[] = $state([]);
let selectedCategories: { title: string }[] = $state(
	preSelectedCategories.map((category) => ({ title: category })),
);
let isSubmitting = $state(false);
let isReloading = false;
supabaseClient.auth.getUser().then((user) => {
	if (user.data.user?.id)
		supabaseClient
			.channel("table_db_changes")
			.on(
				"postgres_changes",
				{
					event: "*",
					schema: "public",
					table: "proj_bookmark",
					filter: `auth_users_id=eq.${user.data.user.id}`,
				},
				(payload) => {
					if (!isSaving) loadData();
				},
			)
			.subscribe();
});
const loadData = () => {
	client
		.query({
			query: ListCategoriesTitleDocument,
		})
		.then((res: ApolloQueryResult<ListCategoriesTitleQueryType>) => {
			if (res.data.projCatCollection?.edges)
				currentCategories = currentCategories.concat(
					res.data.projCatCollection?.edges.map((edge) => {
						if (preSelectedCategories.includes(edge.node.title)) {
							return {
								title: edge.node.title,
								isSelected: true,
							};
						}
						return {
							title: edge.node.title,
							isSelected: false,
						};
					}),
				);
		});
};
loadData();
let isSaving = false;
let dialogOpen = $state(startOpen);
let open = $state(false);
let selectedValue: string = $state("Add category...");
let commandInputValue: string = $state("");
function closeAndFocusTrigger(triggerId: string) {
	open = false;
	tick().then(() => {
		document.getElementById(triggerId)?.focus();
	});
}

let githubRepoUrl = $state("");
const handleAddClick = () => {
	open = false;

	if (
		!selectedCategories.find(
			(category) => category.title === commandInputValue,
		) &&
		commandInputValue.trim().length > 0
	)
		selectedCategories = [...selectedCategories, { title: commandInputValue }];
};
const handleSaveClick = () => {
	if (!repoIdentifier && !isValidGithubUrl(githubRepoUrl)) return;
	isSaving = true;
	isSubmitting = true;
	dialogOpen = false;
	const repoIdentification: any = repoIdentifier
		? repoIdentifier
		: parseRepoUrl(githubRepoUrl);
	const categories = Array.isArray(selectedCategories)
		? selectedCategories.map((category) => category.title)
		: "default";
	if (repoIdentification) {
		toast.info("Adding bookmark...");
		gatewayClient
			.mutate({
				mutation: CreateBookmarkDocument,
				variables: {
					categories: categories,
					repo: {
						name: repoIdentification?.repoName,
						owner: repoIdentification?.ownerLogin,
					},
				},
			})
			.then((res: FetchResult<CreateBookmarkMutationType>) => {
				selectedCategories = [];
				currentCategories = currentCategories.map((category: any) => ({
					...category,
					isSelected: false,
				}));

				isSubmitting = false;
				open = false;
				dialogOpen = false;
				updateSidebar.set(`${repoIdentification?.repoName}-add`);
				toast.success(
					selectedCategories.length > 1
						? "Success! Added Bookmarks!"
						: "Success! Added Bookmark!",
					{
						duration: 3000,
					},
				);
			})
			.catch((e) => {
				selectedCategories = [];
				currentCategories = currentCategories.map((category: any) => ({
					...category,
					isSelected: false,
				}));

				isSubmitting = false;
				open = false;

				toast.error("Error", {
					description:
						selectedCategories.length > 1
							? "An error occurred while adding the bookmarks. Please try again later."
							: "An error occurred while adding the bookmark. Please try again later.",
					action: {
						label: "ok",
						onClick: () => {},
					},
				});
			})
			.finally(() => {
				isSaving = false;
			});
	} else {
		isSaving = false;
	}
};
</script>

<Dialog.Root
	bind:open={dialogOpen}
	onOpenChange={() => {
		onDialogOpenChange && onDialogOpenChange();
		isSubmitting = false;
		selectedCategories = preSelectedCategories.map((category) => ({ title: category }));
    	currentCategories = currentCategories.map((category: any) => {
			if(preSelectedCategories.includes(category.title)) {
				return {
					title: category.title,
					isSelected: true
				};
			}
			else {
				return {
					title: category.title,
					isSelected: false
				};
			}
		});
		commandInputValue = '';
		githubRepoUrl = '';
	}}
>
	<Dialog.Trigger>
		{@render children()}</Dialog.Trigger
	>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Add Bookmark</Dialog.Title>
			<Dialog.Description>Add a repository to your bookmarks.</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-4 py-4 pt-2 px-1">
			<div class="w-full md:w-[350px]">
				{#if !repoIdentifier}
					<Input
						id="name"
						placeholder="https://github.com/owner/repo"
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
								{#each currentCategories.filter(currentCategory => {
									if(currentCategory.title.toLowerCase().includes(commandInputValue.toLowerCase())) {
										return true;
									}
									if(commandInputValue === "")
										return true;
									return false
								}).slice(0, 6) as category}
									<Command.Item
										value={category.title}
										onSelect={(currentValue) => {
											const index = currentCategories.findIndex(
												(category) => category.title === currentValue
											);
											currentCategories[index].isSelected = !currentCategories[index].isSelected;
											if (
												currentCategories[index].isSelected &&
												!selectedCategories.find(
													(selectedCat) => selectedCat.title === currentCategories[index].title
												)
											) {
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
						{#if currentCategories.length > 0}
						<div class="-mx-1 h-px bg-border"></div>
						{/if}
						<div
							class={cn("overflow-hidden p-1 text-foreground [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground", currentCategories.length === 0 && commandInputValue === "" && '-mt-2')}
						>
							<!-- svelte-ignore a11y_click_events_have_key_events -->
							<!-- svelte-ignore a11y_interactive_supports_focus -->
							<!-- svelte-ignore event_directive_deprecated -->
							<!-- svelte-ignore a11y_role_has_required_aria_props -->
							<div
								on:click={handleAddClick}
								role="checkbox"
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
			<div class="flex gap-2 flex-wrap">
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
