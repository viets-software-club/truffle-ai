<script lang="ts">
	type Props = {
		owner: string;
		repo: string;
	};
	let { owner, repo }: Props = $props();
</script>

<span class="whitespace-nowrap truncate overflow-hidden"
	><span class="text-foreground/50">{owner}</span> / <span>{repo}</span></span
>
