<script lang="ts">
import { cn } from "$lib/utils/index";
import { Dialog as SheetPrimitive } from "bits-ui";

type $$Props = SheetPrimitive.PortalProps;

let className: $$Props["class"] = undefined;
export { className as class };
</script>

<SheetPrimitive.Portal class={cn(className)} {...$$restProps}>
	<slot />
</SheetPrimitive.Portal>
