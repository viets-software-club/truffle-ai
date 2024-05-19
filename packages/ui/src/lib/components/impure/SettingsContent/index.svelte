<script lang="ts">
	import UserApiKeySection from '$lib/components/impure/SettingsContent/UserApiKeySection.svelte';
	import DeleteUserSection from '$lib/components/impure/SettingsContent/DeleteUserSection.svelte';
	import SidebarIcon from '$lib/components/impure/SidebarIcon/index.svelte';
	import Separator from '$lib/components/pure/ui/separator/separator.svelte';
	import UserWhitelistSection from './UserWhitelistSection/index.svelte';
	import AdminUserSection from './AdminUserSection/index.svelte';
	import client from '$lib/graphql/supabase/client';
	import { IsUserAdminDocument } from '$lib/graphql/supabase/generated-codegen';
	import { toast } from 'svelte-sonner';
	import { adminList, adminStore } from './adminList.svelte';

	let isAdmin = $state(false);

	const showErrorLoadingAdmins = () => {
		toast.error('Error', {
			description:
				'An error occurred while loading the admins. Please try again later.',
			action: {
				label: 'ok',
				onClick: () => {},
			},
		});
	};

	const loadIsAdmin = () => {
		client.query({
			fetchPolicy: 'network-only',
			query: IsUserAdminDocument,
		}).then((res) => {
			if (res.data?.fIsUserAdmin) {
				isAdmin = true;
			}
		}).catch(() => {
			showErrorLoadingAdmins();
		})
	}

	$effect(() => {
		loadIsAdmin()
		adminStore.subscribe((value) => {
			if (value.includes('remove')) {
				loadIsAdmin()
			}
		})
	})
	
</script>

<!-- <div class="space-y-8">
	<Section.Root>
		<Section.Title>Affinity</SettingsSection.Title>
		<Section.Content></SettingsSection.Content>
	</SettingsSection.Root>
</div> -->
<div class=" flex py-2 px-4 pl-0 md:pl-4 h-[3.75rem] w-full border-b items-center">
		<div class="flex gap-4 items-center md:hidden">
			<SidebarIcon />
		</div>
	
</div>
<div class="mx-auto pt-16 px-8 sm:mx-0 sm:p-16 pb-12 max-w-3xl">
	<div class="mb-10">
		<h1 class="text-2xl font-bold">Settings</h1>
		<p class="text-muted-foreground">Manage your account and application settings</p>
	</div>
	{#if isAdmin}
		<AdminUserSection />
		<div class="border-t w-full my-10" />
		<UserWhitelistSection />
		<div class="border-t w-full my-10" />
	{/if}
	<UserApiKeySection />
	<div class="border-t w-full my-10" />
	<DeleteUserSection />
</div>
