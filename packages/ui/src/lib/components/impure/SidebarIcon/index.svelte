<script lang="ts">
import { updateMobileSidebarOpenState } from "$lib/store/sidebar";
import { cn } from "$lib/utils";
import MenuIcon from "lucide-svelte/icons/menu";
</script>

<div class={cn('p-5', $updateMobileSidebarOpenState ? 'hidden' : '', `md:hidden`)} onclick={() => {
    updateMobileSidebarOpenState.set(!$updateMobileSidebarOpenState);
}} onkeydown={() => {}} role="button" tabindex={0}>
    <MenuIcon
    />
</div>