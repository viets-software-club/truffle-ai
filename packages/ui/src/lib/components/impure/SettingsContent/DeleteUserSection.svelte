<script>
	import Button from '$lib/components/pure/ui/button/button.svelte';
	import { Trash as TrashIcon } from 'lucide-svelte';
</script>

<section class="font-geist">
	<div class="mb-4">
		<h2 class="text-lg font-medium mb-1">Delete Account</h2>
		<p class="text-sm text-muted-foreground">
			If you delete your account, all your data will be lost.
		</p>
	</div>
	<Button variant="destructive" size="sm"
		><TrashIcon class="w-3.5 h-3.5 mr-1.5" />Delete Account</Button
	>
</section>
