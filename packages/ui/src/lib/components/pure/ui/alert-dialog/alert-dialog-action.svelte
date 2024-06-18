<script lang="ts">
import { buttonVariants } from "$lib/components/pure//ui/button/index.js";
import { cn } from "$lib/utils/index";
import { AlertDialog as AlertDialogPrimitive } from "bits-ui";

type $$Props = AlertDialogPrimitive.ActionProps;
type $$Events = AlertDialogPrimitive.ActionEvents;

let className: $$Props["class"] = undefined;
export { className as class };
</script>

<AlertDialogPrimitive.Action
	class={cn(buttonVariants(), className)}
	{...$$restProps}
	on:click
	on:keydown
	let:builder
>
	<slot {builder} />
</AlertDialogPrimitive.Action>
