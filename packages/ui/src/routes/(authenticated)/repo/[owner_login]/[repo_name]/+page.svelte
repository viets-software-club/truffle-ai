<script>
import { page } from "$app/stores";
import DetailContent from "$lib/components/impure/DetailContent/index.svelte";
// const params = $derived({
// 	repoName: $page.params.repo_name,
// 	ownerLogin: $page.params.owner_login,
// });
</script>

<!-- {#key `${params.repoName}-${params.ownerLogin}`} -->
<DetailContent />
<!-- {/key} -->