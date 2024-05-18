<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/pure/ui/button/button.svelte';
	import client from '$lib/graphql/supabase/client';
	import { DeleteUserDocument } from '$lib/graphql/supabase/generated-codegen';
	import { supabaseClient } from '$lib/supabase';
	import { Trash as TrashIcon } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	const handleDelete = () => {
		client.mutate({
			mutation: DeleteUserDocument
		}).then(res => {
			if (res.data?.fDeleteUser) {
				supabaseClient.auth.signOut();
				localStorage.clear();
				toast.success('Account Deleted', {
					description: 'Your account has been successfully deleted.',
					action: {
						label: 'ok',
						onClick: () => {}
					}
				});
				goto('/signup');
			} else {
				toast.error('Error', {
					description: 'An error occurred while deleting your account. Please try again later.',
					action: {
						label: 'ok',
						onClick: () => {}
					}
				});
			}
		}).catch(() => {
			toast.error('Error', {
				description: 'An error occurred while deleting your account. Please try again later.',
				action: {
					label: 'ok',
					onClick: () => {}
				}
			});
		});
	}
</script>

<section class="font-geist">
	<div class="mb-4">
		<h2 class="text-lg font-medium mb-1">Delete Account</h2>
		<p class="text-sm text-muted-foreground">
			If you delete your account, all your data will be lost.
		</p>
	</div>
	<Button variant="destructive" size="sm" on:click={handleDelete}
		><TrashIcon class="w-3.5 h-3.5 mr-1.5" />Delete Account</Button
	>
</section>