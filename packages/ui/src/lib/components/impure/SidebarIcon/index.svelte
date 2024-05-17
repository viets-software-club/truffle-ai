<script lang="ts">
    import { cn } from '$lib/utils';
import MenuIcon from 'lucide-svelte/icons/menu';
import {updateMobileSidebarOpenState} from '$lib/store/sidebar';
	// import { get } from 'svelte/store';
// updateMobileSidebarOpenState.subscribe((value) => {
//     console.log('huh', value)
//     isOpen = value;
// });
</script>

<MenuIcon
    class={cn($updateMobileSidebarOpenState ? 'hidden' : '', `md:hidden`)}
    onclick={() => {
        console.log('whatever', $updateMobileSidebarOpenState)
        updateMobileSidebarOpenState.set(!$updateMobileSidebarOpenState);
        
    }}
/>