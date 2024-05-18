<script lang="ts">
	import Button from '$lib/components/pure/ui/button/button.svelte';
	import Input from '$lib/components/pure/ui/input/input.svelte';
	import * as Select from '$lib/components/pure/ui/select/index';
	import client from '$lib/graphql/supabase/client';
	import { AddEntryToUserWhitelistDocument, GetUserWhiteListDocument } from '$lib/graphql/supabase/generated-codegen';
	import { toast } from 'svelte-sonner';
	import Table from './Table.svelte';
	import { userWhiteListStore } from './userWhitelistStore';
	import {z} from 'zod';
	type Data = {
      kind: string;
      id: string | number;
      value: string;
    }[] | null;


	const showErrorLoading = () => {
		toast.error('Error', {
			description:
				'An error occurred while loading the user whitelist. Please try again later.',
			action: {
				label: 'ok',
				onClick: () => {},
			},
		});
	};

	const showErrorAdding = () => {
		toast.error('Error', {
			description:
				'An error occurred while adding an entry to the user whitelist. Please try again later.',
			action: {
				label: 'ok',
				onClick: () => {},
			},
		});
	};

	let data: Data = $state(null);
	const loadUserWhitelist = () => {
		client.query({
			fetchPolicy: 'network-only',
			query: GetUserWhiteListDocument
		}).then((res) => {
			if(res.data?.userWhitelistCollection?.edges) {
				data = res.data.userWhitelistCollection?.edges.map((data) => ({
					id: data.node.userWhitelistId || '',
					kind: data.node.kind,
					value: data.node.userWhitelistValue || ''
				}))
			} 
		}).catch(() => {
			showErrorLoading();
		})

	}

	userWhiteListStore.subscribe((value) => {
		loadUserWhitelist();
	})

	$effect(() => {
		loadUserWhitelist();
	})

	const emailSchema = z.string().email().min(6).max(50);
	const domainSchema = z.string().refine(value => {
		const domainRegex = /^((?!-)[A-Za-z0-9-]{1, 63}(?<!-)\\.)+[A-Za-z]{2, 6}$/;
		return domainRegex.test(value);
	}, {
		message: "Invalid domain",
	});
	let selected = $state({label: 'E-Mail', value: 'email'});
	let inputValue = $state('');
	const isDisabled = () => {
		try {
			if(selected.value === 'email') {
				emailSchema.parse(inputValue);
			} else {
				domainSchema.parse(inputValue);
			}
		
			return false;
		} catch (err) {
			return true;
		}
	}

	const handleAdd = () => {
		if(isDisabled()) {
			return;
		}
		client.mutate({
			mutation: AddEntryToUserWhitelistDocument,
			variables: {
				kind: selected.value,
				value: inputValue
			}
		}).then((res) => {
			if(res.data?.insertIntoUserWhitelistCollection && res.data?.insertIntoUserWhitelistCollection?.affectedCount > 0) {
				toast.success('Success', {
					description: 'Added User successfully to Whitelist!'
				})
				loadUserWhitelist();
			} else {
				showErrorAdding();
			}
		}).catch(() => {
			showErrorAdding();
		})
	}
	const handleSelectedChange = (e: any) => {
		selected = e;
	}
</script>

<section class="font-geist">
	<div class="mb-4">
		<h2 class="text-lg font-medium mb-1">User Whitelist</h2>
		<p class="text-sm text-muted-foreground">
			Add Users to the Whitelist to allow them to sign up on Truffle AI.
		</p>
	</div>
	<div class="flex flex-col md:flex-row gap-2 max-w-lg">
		<Input placeholder="Email or Domain" bind:value={inputValue} />
		<Select.Root portal={null} bind:selected={selected} onSelectedChange={handleSelectedChange}>
			<Select.Trigger class="w-[180px]">
				<Select.Value >{selected.value}</Select.Value>
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Item value="email" label="E-Mail">E-Mail</Select.Item>
					<Select.Item value="domain" label="Domain">Domain</Select.Item>
				</Select.Group>
			</Select.Content>
		</Select.Root>
		<Button on:click={handleAdd} disabled={isDisabled()}>Add</Button>
	</div>
	<div>
		{#if data}
			{#key data}
        		<Table data={data} />
			{/key}
		{/if}
    </div>
</section>
