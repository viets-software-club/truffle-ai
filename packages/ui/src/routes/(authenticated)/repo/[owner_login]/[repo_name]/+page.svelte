<script>
	import DetailContent from '$lib/components/impure/DetailContent/index.svelte';
	import { page } from '$app/stores';
	const params = $derived({
        repoName: $page.params.repo_name,
        ownerLogin: $page.params.owner_login
    });
</script>

{#key `${params.repoName}-${params.ownerLogin}`}
<DetailContent repoName={params.repoName} ownerLogin={params.ownerLogin} />
{/key}