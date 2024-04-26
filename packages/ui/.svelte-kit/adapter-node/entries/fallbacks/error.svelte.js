import { d as push_element, g as escape, i as store_get, u as unsubscribe_stores, b as pop, e as pop_element, p as push } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
function Error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<h1>`;
  push_element("h1", $$payload);
  $$payload.out += `${escape(store_get($$store_subs ??= {}, "$page", page).status)}</h1>`;
  pop_element();
  $$payload.out += ` <p>`;
  push_element("p", $$payload);
  $$payload.out += `${escape(store_get($$store_subs ??= {}, "$page", page).error?.message)}</p>`;
  pop_element();
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  pop();
}
Error.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  Error as default
};
