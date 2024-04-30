<script>
	import Input from '$lib/components/pure/ui/input/input.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import { RotateCcw as RotateCCWIcon, Copy as CopyIcon } from 'lucide-svelte';
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
		<Input value={uuidv4()} disabled class="max-w-[335px] !cursor-default" />
		<RotateCCWIcon
			class="relative z-40 text-foreground/50 w-4 h-4 -ml-6 hover:text-foreground cursor-pointer"
		/>
		<CopyIcon class="text-foreground/50 w-4 h-4 ml-5 hover:text-foreground cursor-pointer" />
	</div>
</section>
