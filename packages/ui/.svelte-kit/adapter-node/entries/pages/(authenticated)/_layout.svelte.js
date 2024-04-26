import { b as pop, p as push } from "../../../chunks/index3.js";
import "dequal";
import "../../../chunks/index5.js";
import "../../../chunks/index6.js";
import "clsx";
import "../../../chunks/client.js";
import { tv } from "tailwind-variants";
import "../../../chunks/select-trigger.js";
import "../../../chunks/client2.js";
import "../../../chunks/index4.js";
tv({
  base: "fixed z-50 gap-4 bg-background p-6 shadow-lg",
  variants: {
    side: {
      top: "inset-x-0 top-0 border-b",
      bottom: "inset-x-0 bottom-0 border-t",
      left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
      right: "inset-y-0 right-0 h-full w-3/4  border-l sm:max-w-sm"
    }
  },
  defaultVariants: {
    side: "right"
  }
});
function _layout($$payload, $$props) {
  push();
  $$payload.out += `<!--[-->`;
  {
    $$payload.out += "<!--]!-->";
  }
  pop();
}
_layout.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  _layout as default
};
