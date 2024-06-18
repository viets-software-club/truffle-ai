<script>
import { page } from "$app/stores";
import CompareContent from "$lib/components/impure/CompareContent/index.svelte";
</script>

<CompareContent title={$page.params.bookmark} />
