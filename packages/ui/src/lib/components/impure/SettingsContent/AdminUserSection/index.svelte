<script lang="ts">
	import Button from '$lib/components/pure/ui/button/button.svelte';
	import Input from '$lib/components/pure/ui/input/input.svelte';
    import Table from './Table.svelte';
	import client from '$lib/graphql/supabase/client';
	import { GetAdminsDocument, InsertUserAdminByEmailDocument } from '$lib/graphql/supabase/generated-codegen';
	import { toast } from 'svelte-sonner';
	import {adminList, adminStore} from '../adminList.svelte'
	import {z} from 'zod'
	
	type Admins = {
      id: string;
      email: string;
	  createdAt: string;
    }[] |  null;

	let admins: Admins = $state(null)
	let inputValue = $state('')

	const showErrorLoading = () => {
		toast.error('Error', {
			description:
				'An error occurred while loading the admins. Please try again later.',
			action: {
				label: 'ok',
				onClick: () => {},
			},
		});
	};

	const showErrorAddingAdmin = () => {
		toast.error('Error', {
			description:
				'An error occurred while adding a new admin. Please try again later.',
			action: {
				label: 'ok',
				onClick: () => {},
			},
		});
	};

	const loadAdmins = () => {
		client.query({
			fetchPolicy: 'network-only',
			query: GetAdminsDocument,
		}).then((res) => {
			if(res.data?.adminsViewCollection?.edges && res.data?.adminsViewCollection?.edges?.length > 0) {
				admins = res.data.adminsViewCollection?.edges.map((admin) => ({
						id: admin.node.authUsersId,
						email: admin.node.email || '',
						createdAt: admin.node.createdAt
					}))
			} else {
				showErrorLoading();
			}
		}).catch(() => {
			showErrorLoading();
		})
	}

	adminStore.subscribe(() => {
		loadAdmins();
	})
	
	$effect(() => {
		loadAdmins();	
	})
	const emailSchema = z.string().email().min(6).max(50);
	const isDisabled = () => {
		try {
			emailSchema.parse(inputValue);
			return false;
		} catch (err) {
			return true;
		}
	}
	const handleAdd = () => {
		if(isDisabled()) {
			toast.error('Error', {
				description:
					'The input format is wrong.',
				action: {
					label: 'ok',
					onClick: () => {},
				},
			});
			return;
		}
		client.mutate({
			mutation: InsertUserAdminByEmailDocument,
			variables: {
				emailArg: inputValue
			}
		}).then((res) => {
			if(res.data?.fInsertUserAdminByEmail) {
				toast.success('Successfully Added Admin!', {
					description: '',
					duration: 1000
				});
				loadAdmins();
			} else {
				showErrorAddingAdmin();
			}
		}).catch(() => {
			showErrorAddingAdmin();
		})
	}

   
</script>

<section class="font-geist">
	<div class="mb-4">
		<h2 class="text-lg font-medium mb-1">Admins</h2>
		<p class="text-sm text-muted-foreground">
			Admins are able to access all data and whitelist users.
		</p>
	</div>
	<div class="flex gap-2 max-w-sm">
		<Input bind:value={inputValue} placeholder="Email" />
		<Button disabled={isDisabled()} on:click={handleAdd}>Add</Button>
	</div>
    <div>
		{#if admins}
			{#key admins}
        		<Table data={admins}/>
			{/key}
		{/if}
    </div>
</section>
