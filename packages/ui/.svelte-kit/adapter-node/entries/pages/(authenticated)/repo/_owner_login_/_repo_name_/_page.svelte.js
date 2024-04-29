import { p as push, v as value_or_fallback, w as spread_attributes, d as push_element, e as pop_element, q as bind_props, b as pop, m as spread_props, g as escape, i as store_get, u as unsubscribe_stores } from "../../../../../../chunks/index3.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_description, d as Card_content } from "../../../../../../chunks/textarea.js";
import "clsx";
import "../../../../../../chunks/index6.js";
import "../../../../../../chunks/Toaster.js";
import { v as validate_component, a as add_snippet_symbol } from "../../../../../../chunks/validate.js";
import { c as cn } from "../../../../../../chunks/index5.js";
import "../../../../../../chunks/tooltip-content.js";
import "dequal";
import "../../../../../../chunks/client.js";
import "../../../../../../chunks/index9.js";
import "../../../../../../chunks/index7.js";
import { p as page } from "../../../../../../chunks/stores.js";
function Icon($$payload, $$props) {
  push();
  let src = $$props["src"];
  let size = value_or_fallback($$props["size"], "1em");
  let viewBox = value_or_fallback($$props["viewBox"], void 0);
  let color = value_or_fallback($$props["color"], "currentColor");
  let title = value_or_fallback($$props["title"], void 0);
  let className = value_or_fallback($$props["className"], "");
  let innerHtml;
  let attr = {};
  {
    attr = {};
    if (color) {
      if (src.a.stroke !== "none") {
        attr.stroke = "currentColor";
      }
      if (src.a.fill !== "none") {
        attr.fill = "currentColor";
      }
    }
  }
  {
    innerHtml = (title ? `<title>${title}</title>` : "") + src.c;
  }
  $$payload.out += `<svg${spread_attributes(
    [
      { "width": size },
      { "height": size },
      { "viewBox": viewBox },
      { "style": color ? "color: " + color + ";" : "" },
      { "stroke-width": "0" },
      { "class": className },
      src.a,
      attr,
      { "xmlns": "http://www.w3.org/2000/svg" }
    ],
    false,
    true,
    ""
  )}>`;
  push_element("svg", $$payload);
  $$payload.out += `<!--[-->${innerHtml}<!--]--></svg>`;
  pop_element();
  bind_props($$props, {
    src,
    size,
    viewBox,
    color,
    title,
    className
  });
  pop();
}
Icon.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const FaBrandsSquareHackerNews = { a: { viewBox: "0 0 448 512" }, c: '<path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM21 229.2c0 0 .1-.1 .1-.2s.1-.2 .2-.2c0 .1 0 .3-.1 .4H21zM239.2 384H207.8V281.3L128 128h37.3c41.5 77.7 48.1 95.8 54.1 112c1.6 4.3 3.1 8.5 5.2 13.6c3.2-7 5.1-11.9 7.1-17.3c5.9-15.3 12.8-33.2 53.5-108.3H320L239.2 283.1V384z"></path>' };
function HnSentiment($$payload, $$props) {
  push();
  let { repoName, ownerLogin, ...attrs } = $$props;
  let text = "";
  $$payload.out += `<!--[-->`;
  validate_component(Card)($$payload, spread_props([
    attrs,
    {
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        validate_component(Card_header)($$payload2, {
          children: add_snippet_symbol(($$payload3, $$slotProps2) => {
            $$payload3.out += `<!--[-->`;
            validate_component(Card_title)($$payload3, {
              class: "flex gap-2 items-center",
              children: add_snippet_symbol(($$payload4, $$slotProps3) => {
                $$payload4.out += `<!--[-->`;
                validate_component(Icon)($$payload4, { src: FaBrandsSquareHackerNews, size: "1rem" });
                $$payload4.out += `<!--]-->Hackernews Comments`;
              })
            });
            $$payload3.out += `<!--]--> <!--[-->`;
            validate_component(Card_description)($$payload3, {
              children: add_snippet_symbol(($$payload4, $$slotProps3) => {
                $$payload4.out += `Auto generated AI sentiment`;
              })
            });
            $$payload3.out += `<!--]-->`;
          })
        });
        $$payload2.out += `<!--]--> <!--[-->`;
        validate_component(Card_content)($$payload2, {
          children: add_snippet_symbol(($$payload3, $$slotProps2) => {
            $$payload3.out += `<p class="h-92 text-ellipsis overflow-hidden w-full inline-block text-sm leading-relaxed" style="display: -webkit-box; -webkit-line-clamp: 10; -webkit-box-orient: vertical;">`;
            push_element("p", $$payload3);
            $$payload3.out += `${escape(text)}</p>`;
            pop_element();
          })
        });
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
HnSentiment.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function RepoSidebar($$payload, $$props) {
  push();
  let { githubRepoId, githubOwnerId, ...attrs } = $$props;
  $$payload.out += `<aside${spread_attributes(
    [
      attrs,
      {
        "class": cn("w-full md:w-1/4 lg:w-1/6  overflow-x-hidden overflow-y-hidden md:overflow-y-hidden border-l border-t truncate whitespace-nowrap", attrs?.class ? attrs.class : "")
      }
    ],
    true,
    false,
    ""
  )}>`;
  push_element("aside", $$payload);
  $$payload.out += `<section class="py-4 px-6 border-b">`;
  push_element("section", $$payload);
  $$payload.out += `<h2 class="text-foreground/50 text-sm leading-loose">`;
  push_element("h2", $$payload);
  $$payload.out += `GitHub Stats</h2>`;
  pop_element();
  $$payload.out += ` <!--[-->`;
  {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <section class="py-4 px-6 border-b">`;
  push_element("section", $$payload);
  $$payload.out += `<h2 class="text-foreground/50 text-sm leading-loose">`;
  push_element("h2", $$payload);
  $$payload.out += `Repo</h2>`;
  pop_element();
  $$payload.out += ` <!--[-->`;
  {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <section class="py-4 px-6 border-b">`;
  push_element("section", $$payload);
  $$payload.out += `<h2 class="text-foreground/50 text-sm leading-loose">`;
  push_element("h2", $$payload);
  $$payload.out += `Owner</h2>`;
  pop_element();
  $$payload.out += ` <!--[-->`;
  {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <!--[-->`;
  {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <section class="py-4 px-6 border-b">`;
  push_element("section", $$payload);
  $$payload.out += `<h2 class="text-foreground/50 text-sm leading-loose">`;
  push_element("h2", $$payload);
  $$payload.out += `Languages</h2>`;
  pop_element();
  $$payload.out += ` <!--[-->`;
  {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += `</aside>`;
  pop_element();
  pop();
}
RepoSidebar.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function DetailContent($$payload, $$props) {
  push();
  let { repoName, ownerLogin } = $$props;
  let data = null;
  $$payload.out += `<section class="h-[3.75rem]">`;
  push_element("section", $$payload);
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <div class="md:flex">`;
  push_element("div", $$payload);
  $$payload.out += `<div class="flex-1">`;
  push_element("div", $$payload);
  $$payload.out += `<section class="border-t px-8 py-6">`;
  push_element("section", $$payload);
  $$payload.out += `<div class="flex items-center gap-4 mb-5">`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <h1 class="text-2xl font-bold">`;
  push_element("h1", $$payload);
  $$payload.out += `${escape(ownerLogin)}/${escape(repoName)}</h1>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <div class="md:flex gap-10">`;
  push_element("div", $$payload);
  $$payload.out += `<div class="mb-4 md:mb-0 md:max-w-xs">`;
  push_element("div", $$payload);
  $$payload.out += `<h2 class="text-foreground/50 text-sm leading-loose">`;
  push_element("h2", $$payload);
  $$payload.out += `About</h2>`;
  pop_element();
  $$payload.out += ` <p class="text-sm">`;
  push_element("p", $$payload);
  $$payload.out += `${escape(data?.description)}</p>`;
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
  $$payload.out += `${escape(data?.eli5)}</p>`;
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
  {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <section class="border-t md:flex md:gap-4 p-4">`;
  push_element("section", $$payload);
  $$payload.out += `<div class="w-full md:w-1/2 mb-4 md:mb-0">`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(HnSentiment)($$payload, { ownerLogin, repoName });
  $$payload.out += `<!--]--></div>`;
  pop_element();
  $$payload.out += ` <!--[-->`;
  {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <section class="border-t md:flex md:gap-4 p-4">`;
  push_element("section", $$payload);
  $$payload.out += `<!--[-->`;
  {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <!--[-->`;
  validate_component(RepoSidebar)($$payload, {
    githubRepoId: data?.githubRepoId,
    githubOwnerId: data?.gthbOwnerId
  });
  $$payload.out += `<!--]--></div>`;
  pop_element();
  pop();
}
DetailContent.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const prerender = false;
  $$payload.out += `<!--[-->`;
  validate_component(DetailContent)($$payload, {
    repoName: store_get($$store_subs ??= {}, "$page", page).params.repo_name,
    ownerLogin: store_get($$store_subs ??= {}, "$page", page).params.owner_login
  });
  $$payload.out += `<!--]-->`;
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  bind_props($$props, { prerender });
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  _page as default
};
