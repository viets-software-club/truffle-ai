import { type VariantProps, tv } from "tailwind-variants";
export { default as Badge } from "./badge.svelte";

export let badgeVariants = tv({
	base: "inline-flex select-none items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	variants: {
		variant: {
			default:
				"border-transparent bg-primary text-primary-foreground hover:bg-primary/80 leading-normal",
			secondary:
				"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
			destructive:
				"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
			outline: "text-foreground",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export type Variant = VariantProps<typeof badgeVariants>["variant"];
