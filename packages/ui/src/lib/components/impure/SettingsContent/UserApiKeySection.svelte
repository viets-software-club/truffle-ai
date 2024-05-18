<script>
	import Input from '$lib/components/pure/ui/input/input.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import { RotateCcw as RotateCCWIcon, Copy as CopyIcon } from 'lucide-svelte';
	import client from '$lib/graphql/supabase/client';
	import { toast } from 'svelte-sonner';
	import { GetUserApiKeyDocument, UpdateUserApiKeyDocument } from '$lib/graphql/supabase/generated-codegen';
	import * as Tooltip from "$lib/components/pure/ui/tooltip/index";

	const showErrorLoadingUserApiKey = () => {
		toast.error('Error', {
			description:
				'An error occurred while loading the user api key. Please try again later.',
			action: {
				label: 'ok',
				onClick: () => {},
			},
		});
	};
	let userApiKey = $state('');
	const loadUserApiKey = () => {
		client.query(
			{
				fetchPolicy: 'network-only',
				query: GetUserApiKeyDocument,
			}
		).then((res) => {
			if (res.data?.userApiKeyCollection?.edges && res.data?.userApiKeyCollection.edges.length > 0) {
				userApiKey = res.data.userApiKeyCollection.edges[0].node.userApiKey;
			} else {
				showErrorLoadingUserApiKey();
			}
		}).catch(() => {
			showErrorLoadingUserApiKey();
		}
		)
	}

	$effect(() => {
		loadUserApiKey();
	})

	const handleUpdateUserApiKey = () => {
		client.mutate({
			mutation: UpdateUserApiKeyDocument,
			variables: {
				userApiKey: uuidv4()
			}
		}).then((res) => {
			if (res.data?.updateUserApiKeyCollection && res.data?.updateUserApiKeyCollection?.affectedCount > 0) {
				loadUserApiKey();
				toast.success('Successfully Updated User API Key!', {
					description: '',
					duration: 1000
				});
			} else {
				toast.error('Error', {
					description: 'An error occurred while updating the user api key. Please try again later.',
					action: {
						label: 'ok',
						onClick: () => {}
					}
				});
			
			}}).catch(() => {
				toast.error('Error', {
					description: 'An error occurred while updating the user api key. Please try again later.',
					action: {
						label: 'ok',
						onClick: () => {}
					}
				});
			});
	}

	const handleCopyUserApiKey = () => {
		navigator.clipboard.writeText(userApiKey)
	}
</script>

<section>
	<div class="mb-4 font-geist">
		<h3 class="text-lg font-medium mb-1">User API Key</h3>
		<p class="text-sm text-muted-foreground">
			Here you can reset your UserApiKey that allows you to access the Truffle API at
			<a
				on:click|preventDefault
				href="https://truffle.tools/api/graphql"
				class=" hover:text-muted-foreground hover:underline cursor-pointer"
				>https://truffle.tools/api/graphql</a
			>. Just make sure to set the <em class="text-foreground/80">userapikey</em> and
			<em class="text-foreground/80">content-type: application/json</em> in your request headers.
		</p>
	</div>
	<div class="flex items-center">
		<Input value={userApiKey} disabled class="max-w-[335px] !cursor-default" />

		<Tooltip.Root>
			<Tooltip.Trigger>
				<RotateCCWIcon
				class="relative z-40 text-foreground/50 w-4 h-4 -ml-6 hover:text-foreground cursor-pointer"
				onclick={handleUpdateUserApiKey}
			/>
			</Tooltip.Trigger>
			<Tooltip.Content>
			<p>Update UserApiKey</p>
			</Tooltip.Content>
		</Tooltip.Root>
		
		<Tooltip.Root>
			<Tooltip.Trigger>
				<CopyIcon class="text-foreground/50 w-4 h-4 ml-5 hover:text-foreground cursor-pointer" onclick={handleCopyUserApiKey} />
			</Tooltip.Trigger>
			<Tooltip.Content>
			<p>Copy UserApiKey</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</div>
</section>
