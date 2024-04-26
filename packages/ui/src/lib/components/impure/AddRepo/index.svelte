<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import { tick } from 'svelte';
	import * as Command from '$lib/components/pure/ui/command/index.js';
	import * as Popover from '$lib/components/pure/ui/popover/index.js';
	import { Button } from '$lib/components/pure/ui/button/index.js';
	import { cn } from '$lib/utils/index';
	import Plus from 'lucide-svelte/icons/plus';

	const frameworks = [
		{
			value: 'sveltekit',
			label: 'SvelteKit'
		},
		{
			value: 'next.js',
			label: 'Next.js'
		},
		{
			value: 'nuxt.js',
			label: 'Nuxt.js'
		},
		{
			value: 'remix',
			label: 'Remix'
		},
		{
			value: 'astro',
			label: 'Astro'
		}
	];

	let open = false;
	let value = '';

	$: selectedValue = frameworks.find((f) => f.value === value)?.label ?? 'Add bookmark...';

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
	import * as Dialog from '$lib/components/pure/ui/dialog/index';
	import { Input } from '$lib/components/pure/ui/input/index';
	import { Label } from '$lib/components/pure/ui/label/index';
</script>

<Dialog.Root>
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
				<Input id="name" placeholder="github.com/owner/repo" class="col-span-3" />
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
						<Command.Input placeholder="Search bookmark..." />
						<Command.Empty>No bookmark found.</Command.Empty>
						<Command.Group>
							{#each frameworks as framework}
								<Command.Item
									value={framework.value}
									onSelect={(currentValue) => {
										value = currentValue;
										closeAndFocusTrigger(ids.trigger);
									}}
								>
									<Check
										class={cn('mr-2 h-4 w-4', value !== framework.value && 'text-transparent')}
									/>
									{framework.label}
								</Command.Item>
							{/each}
						</Command.Group>
						<Command.Separator />
						<Command.Group>
							<Command.Item
								><Check class="mr-2 h-4 w-4 text-transparent invisible" />Create bookmark</Command.Item
							>
						</Command.Group>
					</Command.Root>
				</Popover.Content>
			</Popover.Root>
		</div>
		<Dialog.Footer>
			<Button type="submit">Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
