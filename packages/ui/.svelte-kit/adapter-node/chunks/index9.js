import { tv } from "tailwind-variants";
import { o as rest_props, p as push, v as value_or_fallback, m as spread_props, c as slot, q as bind_props, b as pop, n as sanitize_props } from "./index3.js";
import "dequal";
import { H as Button$1, c as cn } from "./index5.js";
import { v as validate_component, a as add_snippet_symbol } from "./validate.js";
function Button($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "variant",
    "size",
    "builders",
    "$$props"
  ]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let variant = value_or_fallback($$props["variant"], "default");
  let size = value_or_fallback($$props["size"], "default");
  let builders = value_or_fallback($$props["builders"], []);
  $$payload.out += `<!--[-->`;
  validate_component(Button$1)($$payload, spread_props([
    {
      builders,
      class: cn(buttonVariants({ variant, size, className })),
      type: "button"
    },
    $$restProps,
    {
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className, variant, size, builders });
  pop();
}
Button.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const buttonVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-muted hover:text-accent-foreground",
      round: "border rounded-full bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      accent: "bg-accent border border-input text-accent-foreground hover:bg-accent/80",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
      round: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
export {
  Button as B
};
