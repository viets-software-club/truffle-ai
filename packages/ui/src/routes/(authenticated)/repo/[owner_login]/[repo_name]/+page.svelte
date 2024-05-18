<script>
	import DetailContent from '$lib/components/impure/DetailContent/index.svelte';
	import { page } from '$app/stores';

	export const prerender = false;
</script>

<DetailContent repoName={$page.params.repo_name} ownerLogin={$page.params.owner_login} />
