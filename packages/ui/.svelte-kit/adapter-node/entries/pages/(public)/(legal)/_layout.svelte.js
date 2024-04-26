import { h as head, d as push_element, f as attr, j as stringify, i as store_get, c as slot, u as unsubscribe_stores, b as pop, e as pop_element, p as push } from "../../../../chunks/index3.js";
import "../../../../chunks/separator.js";
import { p as page } from "../../../../chunks/stores.js";
const LogoDark = "/_app/immutable/assets/logo-dark.gL42uADp.svg";
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<meta name="robots" content="noindex, nofollow">`;
    push_element("meta", $$payload2);
    pop_element();
    $$payload2.out += ` <style>`;
    push_element("style", $$payload2);
    $$payload2.out += `.legal-content h2 {
			font-size: 1rem;
			line-height: 1.5rem;
			font-weight: 600;
}
		.legal-content h3 {
			font-size: 1rem;
			line-height: 1.5rem;
			font-weight: 500;
}
		.legal-content p {
			margin-bottom: 1rem;
		}
		.legal-content ul {
			margin-bottom: 1rem;
			list-style-type: disc;
			padding-left: 1rem;
}
		.legal-content section {
			font-size: 0.95rem;
}
		@media (min-width: 768px) {
			.legal-content section {
						max-width: 90%;
						font-size: 1rem;
						line-height: 1.5rem;
			}
}
		.legal-content section {
			margin-bottom: 1rem;
		}
		.legal-content a {
			text-decoration-line: underline;
			text-underline-offset: 4px;
}
		.legal-content a:hover {
			--tw-text-opacity: 1;
			color: hsl(var(--primary) / var(--tw-text-opacity));
}
		.legal-aside .active {
			font-weight: 500;
			--tw-text-opacity: 1;
			color: hsl(var(--primary) / var(--tw-text-opacity));
}
		em {
			font-style: italic;
}</style>`;
    pop_element();
  });
  $$payload.out += `<div class="relative min-h-full flex-col p-10 dark:border-r lg:flex font-geist">`;
  push_element("div", $$payload);
  $$payload.out += `<aside class="legal-aside relative xl:fixed">`;
  push_element("aside", $$payload);
  $$payload.out += `<div class="z-20 flex items-center text-xl sm:text-lg font-medium flex-grow-0">`;
  push_element("div", $$payload);
  $$payload.out += `<a href="/" class="flex items-center cursor-pointer align-middle">`;
  push_element("a", $$payload);
  $$payload.out += `<img${attr("src", LogoDark, false)} alt="Truffle AI" class="mr-2 h-8 w-8 sm:h-7 sm:w-7 dark:invert" loading="eager">`;
  push_element("img", $$payload);
  pop_element();
  $$payload.out += ` <div class="leading-none">`;
  push_element("div", $$payload);
  $$payload.out += `<span class="leading-none mb-[0.175rem] sm:mb-0 sm:leading-normal block">`;
  push_element("span", $$payload);
  $$payload.out += `Truffle AI</span>`;
  pop_element();
  $$payload.out += ` <span class="block text-[0.6rem] sm:text-[0.5rem] leading-none pl-[0.06rem]">`;
  push_element("span", $$payload);
  $$payload.out += `by La Famiglia VC</span>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</a>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <div class="hidden sm:block text-[0.95rem] mt-10">`;
  push_element("div", $$payload);
  $$payload.out += `<a href="/terms-of-service"${attr(
    "class",
    `block text-foreground/50 mb-3 ${stringify([
      store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("/terms-of-service") ? "active" : ""
    ].filter(Boolean).join(" "))}`,
    false
  )}>`;
  push_element("a", $$payload);
  $$payload.out += `Terms of Service</a>`;
  pop_element();
  $$payload.out += ` <a href="/privacy-policy"${attr(
    "class",
    `block text-foreground/50 mb-3 ${stringify([
      store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("/privacy-policy") ? "active" : ""
    ].filter(Boolean).join(" "))}`,
    false
  )}>`;
  push_element("a", $$payload);
  $$payload.out += `Privacy Policy</a>`;
  pop_element();
  $$payload.out += ` <a href="/legal-notice"${attr(
    "class",
    `block text-foreground/50 mb-3 ${stringify([
      store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("/legal-notice") ? "active" : ""
    ].filter(Boolean).join(" "))}`,
    false
  )}>`;
  push_element("a", $$payload);
  $$payload.out += `Legal Notice</a>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</aside>`;
  pop_element();
  $$payload.out += ` <div class="legal-content mx-auto max-w-4xl mt-8 md:mt-12">`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `<!--]--></div>`;
  pop_element();
  $$payload.out += ` <footer class="mx-auto max-w-4xl w-full mt-8">`;
  push_element("footer", $$payload);
  $$payload.out += `<div class="pt-3 flex text-sm justify-between sm:justify-normal sm:text-gray-800 border-t max-w-[90%]">`;
  push_element("div", $$payload);
  $$payload.out += `<a href="/terms-of-service" class="sm:mr-6 py-1 text-muted-foreground hover:text-primary">`;
  push_element("a", $$payload);
  $$payload.out += `Terms of Service</a>`;
  pop_element();
  $$payload.out += ` <a href="/privacy-policy" class="sm:mr-6 py-1 text-muted-foreground hover:text-primary">`;
  push_element("a", $$payload);
  $$payload.out += `Privacy Policy</a>`;
  pop_element();
  $$payload.out += ` <a href="/legal-notice" class="py-1 text-muted-foreground hover:text-primary">`;
  push_element("a", $$payload);
  $$payload.out += `Legal Notice</a>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</footer>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  pop();
}
_layout.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  _layout as default
};
