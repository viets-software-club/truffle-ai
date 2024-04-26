import { d as push_element, b as pop, e as pop_element, p as push } from "../../../../../chunks/index3.js";
import { S as Separator } from "../../../../../chunks/separator.js";
import { v as validate_component } from "../../../../../chunks/validate.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<header class="mb-4 text-sm">`;
  push_element("header", $$payload);
  $$payload.out += `<h1 class="text-3xl mb-1 md:text-5xl font-medium border-b-gray-400 md:mb-3">`;
  push_element("h1", $$payload);
  $$payload.out += `Terms of Service</h1>`;
  pop_element();
  $$payload.out += ` <!--[-->`;
  validate_component(Separator)($$payload, {});
  $$payload.out += `<!--]--> <div class="pt-4 pb-2">`;
  push_element("div", $$payload);
  $$payload.out += `<span class="text-muted-foreground text-sm">`;
  push_element("span", $$payload);
  $$payload.out += `Last Update: December 29, 2023</span>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</header>`;
  pop_element();
  $$payload.out += ` <section>`;
  push_element("section", $$payload);
  $$payload.out += `<p>`;
  push_element("p", $$payload);
  $$payload.out += `The following terms and conditions govern your use of our website. By using this web site, you
		agree to these terms and conditions, which we may modify from time-to-time as posted on this web
		site.</p>`;
  pop_element();
  $$payload.out += ` <section>`;
  push_element("section", $$payload);
  $$payload.out += `<h2>`;
  push_element("h2", $$payload);
  $$payload.out += `1. Copyrights; Other Intellectual Property</h2>`;
  pop_element();
  $$payload.out += ` <p>`;
  push_element("p", $$payload);
  $$payload.out += `Unless otherwise noted, all information and content posted on our website is property of La
			Famiglia, including graphics, icons and our website's overall appearance.</p>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <section>`;
  push_element("section", $$payload);
  $$payload.out += `<h2>`;
  push_element("h2", $$payload);
  $$payload.out += `2. Website Links</h2>`;
  pop_element();
  $$payload.out += ` <p>`;
  push_element("p", $$payload);
  $$payload.out += `We may have links between our website and websites / content of third parties. For purposes of
			these terms of use, the term “link” includes Outlinks (hypertext links to external websites or
			content) as well as Inlinks (hypertext links which draw material from other sources into this
			website). Please note that we have no control over any such third-party websites or contents,
			and assume no liability related to such third-party websites or content. We provide such links
			to you only for your convenience; these links do not constitute an endorsement of the
			respective websites, contents, or their operators.</p>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <section>`;
  push_element("section", $$payload);
  $$payload.out += `<h2>`;
  push_element("h2", $$payload);
  $$payload.out += `3. Illegal activity</h2>`;
  pop_element();
  $$payload.out += ` <p>`;
  push_element("p", $$payload);
  $$payload.out += `You agree not to use our website for any illegal activity or to transmit any material that is
			unlawful, offensive, defamatory, harmful to others, or otherwise objectionable. You agree to
			indemnify us against any loss, liability, damage or expense of whatever nature which we or any
			third party may suffer which is caused by or attributable to, whether directly or indirectly,
			your use of our website to send or post any such message or material. Futhermore you agree to
			not use the analytics tools we provide on our website to track or collect personal information
			of people in an unlawful manner or in non GDPR-compliant or in any other non-compliant ways
			that infringe upon the freedom of others.</p>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  _page as default
};
