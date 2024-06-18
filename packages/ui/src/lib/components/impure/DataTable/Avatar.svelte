<script lang="ts">
type Props = {
	src: string;
	description: string;
};
const { src, description }: Props = $props();
import * as Tooltip from "$lib/components/pure/ui/tooltip";
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<div class="w-full flex items-center">
			<img {src} class="rounded-full w-6 h-6 border" alt="avatar" />
		</div>
	</Tooltip.Trigger>
	<Tooltip.Content class="max-w-md">
		<p>{description}</p>
	</Tooltip.Content>
</Tooltip.Root>
