import { p as push, d as push_element, e as pop_element, f as attr, g as escape, b as pop, t as bind_props } from "../../../../../../chunks/index3.js";
import { C as ChartView, H as HnSentiment, N as Notes, R as RepoSidebar } from "../../../../../../chunks/index10.js";
import { v as validate_component } from "../../../../../../chunks/validate.js";
function DetailContent($$payload, $$props) {
  push();
  let { repo = "sveltejs", owner = "svelte" } = $$props;
  let avatarUrl = "https://avatars.githubusercontent.com/u/6154722?s=200&v=4";
  const data = {
    stars: 100,
    contributors: 10,
    issues: 20,
    forks: 30,
    openPullRequests: 40,
    forksPerContributor: 50,
    issuesPerContributor: 60,
    twitterUrl: "https://twitter.com/sveltejs",
    websiteUrl: "https://svelte.dev",
    languages: [
      { name: "JavaScript", color: "#f1e05a" },
      { name: "TypeScript", color: "#2b7489" },
      { name: "HTML", color: "#e34c26" },
      { name: "CSS", color: "#563d7c" }
    ]
  };
  $$payload.out += `<section class="h-[3.75rem]">`;
  push_element("section", $$payload);
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <div class="md:flex md:h-[calc(100%-3.75rem)]">`;
  push_element("div", $$payload);
  $$payload.out += `<div class="flex-1">`;
  push_element("div", $$payload);
  $$payload.out += `<section class="border-t px-8 py-6">`;
  push_element("section", $$payload);
  $$payload.out += `<div class="flex items-center gap-4 mb-5">`;
  push_element("div", $$payload);
  $$payload.out += `<img class="w-8 h-8"${attr("src", avatarUrl, false)} alt="avatar">`;
  push_element("img", $$payload);
  pop_element();
  $$payload.out += ` <h1 class="text-2xl font-bold">`;
  push_element("h1", $$payload);
  $$payload.out += `${escape(owner)}/${escape(repo)}</h1>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <div class="md:flex gap-10">`;
  push_element("div", $$payload);
  $$payload.out += `<div class="mb-4 md:mb-0">`;
  push_element("div", $$payload);
  $$payload.out += `<h2 class="text-foreground/50 text-sm leading-loose">`;
  push_element("h2", $$payload);
  $$payload.out += `About</h2>`;
  pop_element();
  $$payload.out += ` <p class="text-sm">`;
  push_element("p", $$payload);
  $$payload.out += `Lorem ipsum dolor sit amet</p>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <div>`;
  push_element("div", $$payload);
  $$payload.out += `<h2 class="text-foreground/50 text-sm leading-loose">`;
  push_element("h2", $$payload);
  $$payload.out += `Explain Like I am 5</h2>`;
  pop_element();
  $$payload.out += ` <p class="text-sm max-w-2xl">`;
  push_element("p", $$payload);
  $$payload.out += `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellat error
						ratione in deleniti, consequuntur sit corporis vero vitae expedita perspiciatis quidem
						temporibus placeat, aut explicabo, laborum necessitatibus aspernatur saepe!</p>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <section class="border-t w-full">`;
  push_element("section", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(ChartView)($$payload, {});
  $$payload.out += `<!--]--></section>`;
  pop_element();
  $$payload.out += ` <section class="border-t md:flex md:gap-4 p-4">`;
  push_element("section", $$payload);
  $$payload.out += `<div class="w-full md:w-1/2 mb-4 md:mb-0">`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(HnSentiment)($$payload, {});
  $$payload.out += `<!--]--></div>`;
  pop_element();
  $$payload.out += ` <div class="w-full md:w-1/2">`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(Notes)($$payload, {});
  $$payload.out += `<!--]--></div>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <!--[-->`;
  validate_component(RepoSidebar)($$payload, { data });
  $$payload.out += `<!--]--></div>`;
  pop_element();
  pop();
}
DetailContent.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function _page($$payload, $$props) {
  push();
  const prerender = false;
  $$payload.out += `<!--[-->`;
  validate_component(DetailContent)($$payload, { repo: "vercel", owner: "vercel" });
  $$payload.out += `<!--]-->`;
  bind_props($$props, { prerender });
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  _page as default
};
