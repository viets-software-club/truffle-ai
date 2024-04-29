import { p as push, m as spread_props, c as slot, b as pop, n as sanitize_props, k as copy_payload, l as assign_payload, t as ensure_array_like, d as push_element, e as pop_element, g as escape, i as store_get, u as unsubscribe_stores, q as bind_props } from "../../../../../chunks/index3.js";
import { p as page } from "../../../../../chunks/stores.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_description, d as Card_content, T as Textarea, e as ChartView } from "../../../../../chunks/textarea.js";
import "clsx";
import { I as Icon, B as Badge, X } from "../../../../../chunks/index6.js";
import { v as validate_component, a as add_snippet_symbol } from "../../../../../chunks/validate.js";
import "../../../../../chunks/Toaster.js";
import "../../../../../chunks/client.js";
function Git_compare($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "circle",
      { "cx": "18", "cy": "18", "r": "3" }
    ],
    [
      "circle",
      { "cx": "6", "cy": "6", "r": "3" }
    ],
    ["path", { "d": "M13 6h3a2 2 0 0 1 2 2v7" }],
    ["path", { "d": "M11 18H8a2 2 0 0 1-2-2V9" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "git-compare" },
    $$sanitized_props,
    {
      iconNode,
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
Git_compare.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Notebook_pen($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "path",
      {
        "d": "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"
      }
    ],
    ["path", { "d": "M2 6h4" }],
    ["path", { "d": "M2 10h4" }],
    ["path", { "d": "M2 14h4" }],
    ["path", { "d": "M2 18h4" }],
    [
      "path",
      {
        "d": "M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z"
      }
    ]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "notebook-pen" },
    $$sanitized_props,
    {
      iconNode,
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
Notebook_pen.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function CatNotes($$payload, $$props) {
  push();
  let { title, ...attrs } = $$props;
  let value = "";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!--[-->`;
    validate_component(Card)($$payload2, spread_props([
      attrs,
      {
        children: add_snippet_symbol(($$payload3, $$slotProps) => {
          $$payload3.out += `<!--[-->`;
          validate_component(Card_header)($$payload3, {
            children: add_snippet_symbol(($$payload4, $$slotProps2) => {
              $$payload4.out += `<!--[-->`;
              validate_component(Card_title)($$payload4, {
                class: "flex gap-2 items-center",
                children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                  $$payload5.out += `<!--[-->`;
                  validate_component(Notebook_pen)($$payload5, { class: "w-4 h-4" });
                  $$payload5.out += `<!--]-->Notes`;
                })
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              validate_component(Card_description)($$payload4, {
                children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                  $$payload5.out += `Your hand-written notes`;
                })
              });
              $$payload4.out += `<!--]-->`;
            })
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          validate_component(Card_content)($$payload3, {
            children: add_snippet_symbol(($$payload4, $$slotProps2) => {
              $$payload4.out += `<!--[-->`;
              validate_component(Textarea)($$payload4, {
                get value() {
                  return value;
                },
                set value($$value) {
                  value = $$value;
                  $$settled = false;
                },
                rows: 9,
                class: "h-54 truncate w-full outline-none pt-2.5"
              });
              $$payload4.out += `<!--]-->`;
            })
          });
          $$payload3.out += `<!--]-->`;
        })
      }
    ]));
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
CatNotes.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function CompareContent($$payload, $$props) {
  push();
  let { title } = $$props;
  let bookmarks = [];
  const each_array = ensure_array_like(bookmarks);
  $$payload.out += `<section class="h-[3.75rem]">`;
  push_element("section", $$payload);
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <div class="md:flex h-full">`;
  push_element("div", $$payload);
  $$payload.out += `<div class="w-full">`;
  push_element("div", $$payload);
  $$payload.out += `<section class="border-t px-8 py-6">`;
  push_element("section", $$payload);
  $$payload.out += `<div class="flex items-center gap-4 mb-5">`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(Git_compare)($$payload, { class: "w-8 h-8 text-foreground/50" });
  $$payload.out += `<!--]--> <h1 class="text-2xl font-bold">`;
  push_element("h1", $$payload);
  $$payload.out += `${escape(title)}</h1>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <div class="flex gap-2 flex-wrap">`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const bookmark = each_array[$$index];
    $$payload.out += "<!--[-->";
    $$payload.out += `<!--[-->`;
    validate_component(Badge)($$payload, {
      class: "px-3",
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `${escape(bookmark.githubOwnerLogin)}/${escape(bookmark.githubRepoName)}<span class="ml-2">`;
        push_element("span", $$payload2);
        $$payload2.out += `<!--[-->`;
        validate_component(X)($$payload2, { class: "w-3 h-3 block" });
        $$payload2.out += `<!--]--></span>`;
        pop_element();
      })
    });
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <section class="border-t">`;
  push_element("section", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(ChartView)($$payload, {
    githubRepoIds: bookmarks.map((bookmark) => bookmark.githubRepoId),
    isNormalizable: bookmarks.length > 1
  });
  $$payload.out += `<!--]--></section>`;
  pop_element();
  $$payload.out += ` <section>`;
  push_element("section", $$payload);
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <section class="border-t md:flex md:gap-4 p-4">`;
  push_element("section", $$payload);
  $$payload.out += `<div class="w-full md:w-1/2">`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(CatNotes)($$payload, { title });
  $$payload.out += `<!--]--></div>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  pop();
}
CompareContent.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const prerender = false;
  $$payload.out += `<!--[-->`;
  validate_component(CompareContent)($$payload, {
    title: store_get($$store_subs ??= {}, "$page", page).params.bookmark
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
