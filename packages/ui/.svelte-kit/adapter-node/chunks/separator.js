import { o as rest_props, p as push, v as value_or_fallback, m as spread_props, q as bind_props, b as pop, n as sanitize_props } from "./index3.js";
import "dequal";
import { I as Separator$1, c as cn } from "./index5.js";
import { v as validate_component } from "./validate.js";
function Separator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "orientation",
    "decorative",
    "$$props"
  ]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let orientation = value_or_fallback($$props["orientation"], "horizontal");
  let decorative = value_or_fallback($$props["decorative"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(Separator$1)($$payload, spread_props([
    {
      class: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
      orientation,
      decorative
    },
    $$restProps
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className, orientation, decorative });
  pop();
}
Separator.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  Separator as S
};
