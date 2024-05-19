<script lang="ts">
    import { cn } from '$lib/utils';
import MenuIcon from 'lucide-svelte/icons/menu';
import {updateMobileSidebarOpenState} from '$lib/store/sidebar';

</script>

<div  class={cn('p-5', $updateMobileSidebarOpenState ? 'hidden' : '', `md:hidden`)}  onclick={() => {
    updateMobileSidebarOpenState.set(!$updateMobileSidebarOpenState);
}}>
    <MenuIcon
    />
</div>