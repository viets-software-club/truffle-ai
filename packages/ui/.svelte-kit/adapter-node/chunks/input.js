import { q as rest_props, p as push, v as value_or_fallback, x as spread_attributes, d as push_element, e as pop_element, t as bind_props, b as pop, m as sanitize_props } from "./index3.js";
import { c as cn } from "./index5.js";
function Input($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value", "readonly", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let value = value_or_fallback($$props["value"], void 0);
  let readonly = value_or_fallback($$props["readonly"], void 0);
  $$payload.out += `<input${spread_attributes(
    [
      {
        "class": cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)
      },
      { "value": value },
      { "readonly": readonly },
      $$restProps
    ],
    true,
    false,
    ""
  )}>`;
  push_element("input", $$payload);
  pop_element();
  bind_props($$props, { class: className, value, readonly });
  pop();
}
Input.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  Input as I
};
