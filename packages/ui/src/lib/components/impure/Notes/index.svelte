<script lang="ts">
	import * as Card from '$lib/components/pure/ui/card/index.js';
	import { Textarea } from '$lib/components/pure/ui/textarea/index.js';
	import NotebookPen from 'lucide-svelte/icons/notebook-pen';
</script>

<Card.Root {...$$restProps}>
	<Card.Header>
		<Card.Title class="flex gap-2 items-center"><NotebookPen class="w-4 h-4" />Notes</Card.Title>
		<Card.Description>Your hand-written notes</Card.Description>
	</Card.Header>
	<Card.Content>
		<Textarea rows={9} class="h-54 truncate w-full outline-none pt-2.5"></Textarea></Card.Content
	>
</Card.Root>
