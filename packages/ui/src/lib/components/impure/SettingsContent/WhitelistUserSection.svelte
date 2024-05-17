<script>
	import Button from '$lib/components/pure/ui/button/button.svelte';
	import Input from '$lib/components/pure/ui/input/input.svelte';
	import * as Select from '$lib/components/pure/ui/select/index';
</script>

<section class="font-geist">
	<div class="mb-4">
		<h2 class="text-lg font-medium mb-1">User Whitelist</h2>
		<p class="text-sm text-muted-foreground">
			Add Users to the Whitelist to allow them to sign up on Truffle Ai.
		</p>
	</div>
	<div class="flex gap-2 max-w-lg">
		<Input placeholder="Email or Domain" />
		<Select.Root portal={null}>
			<Select.Trigger class="w-[180px]">
				<Select.Value placeholder="Type" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Item value="email" label="E-Mail">E-Mail</Select.Item>
					<Select.Item value="email" label="Domain">Domain</Select.Item>
				</Select.Group>
			</Select.Content>
		</Select.Root>
		<Button>Add</Button>
	</div>
</section>
