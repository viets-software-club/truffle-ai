import { p as push, v as value_or_fallback, x as spread_attributes, d as push_element, e as pop_element, t as bind_props, b as pop, l as spread_props, c as slot, m as sanitize_props, q as rest_props, A as element, g as escape, w as ensure_array_like, f as attr, j as stringify, n as copy_payload, o as assign_payload } from "./index3.js";
import "clsx";
import { v as validate_component, a as add_snippet_symbol, b as validate_void_dynamic_element, c as validate_dynamic_element_tag } from "./validate.js";
import { c as cn } from "./index5.js";
import { I as Icon$1, S as Select_trigger, a as Select_content, c as Select_label, b as Select_item } from "./select-trigger.js";
import { S as Star, U as Users, a as Git_pull_request_arrow, C as Circle_dot, G as Git_fork, F as Folder_git_2, R as Root, V as Value, g as Group, I as Input, b as Calendar } from "./dropdown-menu-checkbox-item.js";
import "dequal";
import { DateTime } from "luxon";
import Chart, { LineController, CategoryScale, LinearScale, TimeScale, PointElement, LineElement, Title, Tooltip, Filler } from "chart.js/auto";
import "chartjs-adapter-luxon";
import "./index7.js";
function Icon($$payload, $$props) {
  push();
  let src = $$props["src"];
  let size = value_or_fallback($$props["size"], "1em");
  let viewBox = value_or_fallback($$props["viewBox"], void 0);
  let color = value_or_fallback($$props["color"], "currentColor");
  let title = value_or_fallback($$props["title"], void 0);
  let className = value_or_fallback($$props["className"], "");
  let innerHtml;
  let attr2 = {};
  {
    attr2 = {};
    if (color) {
      if (src.a.stroke !== "none") {
        attr2.stroke = "currentColor";
      }
      if (src.a.fill !== "none") {
        attr2.fill = "currentColor";
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
      attr2,
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
function Link($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "path",
      {
        "d": "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      }
    ],
    [
      "path",
      {
        "d": "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      }
    ]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon$1)($$payload, spread_props([
    { name: "link" },
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
Link.render = function() {
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
  validate_component(Icon$1)($$payload, spread_props([
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
function Twitter($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "path",
      {
        "d": "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
      }
    ]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon$1)($$payload, spread_props([
    { name: "twitter" },
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
Twitter.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Card($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes(
    [
      {
        "class": cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `<!--]--></div>`;
  pop_element();
  bind_props($$props, { class: className });
  pop();
}
Card.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Card_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes(
    [
      { "class": cn("p-6 pt-0", className) },
      $$restProps
    ],
    true,
    false,
    ""
  )}>`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `<!--]--></div>`;
  pop_element();
  bind_props($$props, { class: className });
  pop();
}
Card_content.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Card_description($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<p${spread_attributes(
    [
      {
        "class": cn("text-sm text-muted-foreground", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>`;
  push_element("p", $$payload);
  $$payload.out += `<!--[-->`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `<!--]--></p>`;
  pop_element();
  bind_props($$props, { class: className });
  pop();
}
Card_description.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Card_header($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes(
    [
      {
        "class": cn("flex flex-col space-y-1.5 p-6", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `<!--]--></div>`;
  pop_element();
  bind_props($$props, { class: className });
  pop();
}
Card_header.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Card_title($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "tag", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let tag = value_or_fallback($$props["tag"], "h3");
  validate_void_dynamic_element(() => tag);
  validate_dynamic_element_tag(() => tag);
  $$payload.out += `<!--[-->`;
  push_element(tag, $$payload);
  if (tag)
    element(
      $$payload,
      tag,
      () => {
        $$payload.out += `${spread_attributes(
          [
            {
              "class": cn("text-lg font-semibold leading-none tracking-tight", className)
            },
            $$restProps
          ],
          true,
          false,
          ""
        )}`;
      },
      () => {
        $$payload.out += `<!--[-->`;
        slot($$payload, $$props.children, {}, null);
        $$payload.out += `<!--]-->`;
      }
    );
  $$payload.out += `<!--]-->`;
  pop_element();
  bind_props($$props, { class: className, tag });
  pop();
}
Card_title.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const FaBrandsSquareHackerNews = { a: { viewBox: "0 0 448 512" }, c: '<path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM21 229.2c0 0 .1-.1 .1-.2s.1-.2 .2-.2c0 .1 0 .3-.1 .4H21zM239.2 384H207.8V281.3L128 128h37.3c41.5 77.7 48.1 95.8 54.1 112c1.6 4.3 3.1 8.5 5.2 13.6c3.2-7 5.1-11.9 7.1-17.3c5.9-15.3 12.8-33.2 53.5-108.3H320L239.2 283.1V384z"></path>' };
function HnSentiment($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["$$props"]);
  push();
  $$payload.out += `<!--[-->`;
  validate_component(Card)($$payload, spread_props([
    $$restProps,
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
            $$payload3.out += `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
			sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
			esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
			sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
			occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
			laborum. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
			mollit anim id est laborum.</p>`;
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
function Textarea($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value", "readonly", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let value = value_or_fallback($$props["value"], void 0);
  let readonly = value_or_fallback($$props["readonly"], void 0);
  $$payload.out += `<textarea${spread_attributes(
    [
      {
        "class": cn("whitespace-pre-wrap flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)
      },
      { "readonly": readonly },
      $$restProps
    ],
    true,
    false,
    ""
  )}>`;
  push_element("textarea", $$payload);
  const $$body = escape(value);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea>`;
  pop_element();
  bind_props($$props, { class: className, value, readonly });
  pop();
}
Textarea.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Notes($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["$$props"]);
  push();
  $$payload.out += `<!--[-->`;
  validate_component(Card)($$payload, spread_props([
    $$restProps,
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
                validate_component(Notebook_pen)($$payload4, { class: "w-4 h-4" });
                $$payload4.out += `<!--]-->Notes`;
              })
            });
            $$payload3.out += `<!--]--> <!--[-->`;
            validate_component(Card_description)($$payload3, {
              children: add_snippet_symbol(($$payload4, $$slotProps3) => {
                $$payload4.out += `Your hand-written notes`;
              })
            });
            $$payload3.out += `<!--]-->`;
          })
        });
        $$payload2.out += `<!--]--> <!--[-->`;
        validate_component(Card_content)($$payload2, {
          children: add_snippet_symbol(($$payload3, $$slotProps2) => {
            $$payload3.out += `<!--[-->`;
            validate_component(Textarea)($$payload3, {
              rows: 9,
              class: "h-54 truncate w-full outline-none pt-2.5"
            });
            $$payload3.out += `<!--]-->`;
          })
        });
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
Notes.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function RepoSidebar($$payload, $$props) {
  push();
  let { data, ...attrs } = $$props;
  const each_array = ensure_array_like(data.languages);
  $$payload.out += `<aside${spread_attributes(
    [
      attrs,
      {
        "class": cn("w-full md:w-1/4 lg:w-1/6  overflow-x-hidden overflow-y-hidden  border-l border-t truncate whitespace-nowrap", attrs?.class ? attrs.class : "")
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
  $$payload.out += ` <ul class="grid grid-cols-3 md:block">`;
  push_element("ul", $$payload);
  $$payload.out += `<li class="flex items py-2 gap-2 items-center">`;
  push_element("li", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(Star)($$payload, { class: "w-3.5 h-3.5 text-foreground/50" });
  $$payload.out += `<!--]--> <span class="text-sm text-foreground/80">`;
  push_element("span", $$payload);
  $$payload.out += `${escape(data.stars)}</span>`;
  pop_element();
  $$payload.out += `</li>`;
  pop_element();
  $$payload.out += ` <li class="flex items py-2 gap-2 items-center">`;
  push_element("li", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(Users)($$payload, { class: "w-3.5 h-3.5 text-foreground/50" });
  $$payload.out += `<!--]--> <span class="text-sm text-foreground/80">`;
  push_element("span", $$payload);
  $$payload.out += `${escape(data.contributors)}</span>`;
  pop_element();
  $$payload.out += `</li>`;
  pop_element();
  $$payload.out += ` <li class="flex items py-2 gap-2 items-center">`;
  push_element("li", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(Git_pull_request_arrow)($$payload, { class: "w-3.5 h-3.5 text-foreground/50" });
  $$payload.out += `<!--]--> <span class="text-sm text-foreground/80">`;
  push_element("span", $$payload);
  $$payload.out += `${escape(data.openPullRequests)}</span>`;
  pop_element();
  $$payload.out += `</li>`;
  pop_element();
  $$payload.out += ` <li class="flex items py-2 gap-2 items-center">`;
  push_element("li", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(Circle_dot)($$payload, { class: "w-3.5 h-3.5 text-foreground/50" });
  $$payload.out += `<!--]--> <span class="text-sm text-foreground/80">`;
  push_element("span", $$payload);
  $$payload.out += `${escape(data.issues)}</span>`;
  pop_element();
  $$payload.out += `</li>`;
  pop_element();
  $$payload.out += ` <li class="flex items py-2 gap-2 items-center">`;
  push_element("li", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(Git_fork)($$payload, { class: "w-3.5 h-3.5 text-foreground/50" });
  $$payload.out += `<!--]--> <span class="text-sm text-foreground/80">`;
  push_element("span", $$payload);
  $$payload.out += `${escape(data.forks)}</span>`;
  pop_element();
  $$payload.out += `</li>`;
  pop_element();
  $$payload.out += ` <li class="flex items py-2 gap-2 items-center">`;
  push_element("li", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(Folder_git_2)($$payload, { class: "w-3.5 h-3.5 text-foreground/50" });
  $$payload.out += `<!--]--> <span class="text-sm text-foreground/80">`;
  push_element("span", $$payload);
  $$payload.out += `${escape(data.forksPerContributor)}</span>`;
  pop_element();
  $$payload.out += `</li>`;
  pop_element();
  $$payload.out += ` <li class="flex items py-2 gap-2 items-center">`;
  push_element("li", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(Folder_git_2)($$payload, { class: "w-3.5 h-3.5 text-foreground/50" });
  $$payload.out += `<!--]--> <span class="text-sm text-foreground/80">`;
  push_element("span", $$payload);
  $$payload.out += `${escape(data.issuesPerContributor)}</span>`;
  pop_element();
  $$payload.out += `</li>`;
  pop_element();
  $$payload.out += `</ul>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <section class="py-4 px-6 border-b">`;
  push_element("section", $$payload);
  $$payload.out += `<h2 class="text-foreground/50 text-sm leading-loose">`;
  push_element("h2", $$payload);
  $$payload.out += `Languages</h2>`;
  pop_element();
  $$payload.out += ` <ul>`;
  push_element("ul", $$payload);
  $$payload.out += `<!--[-->`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const language = each_array[$$index];
    $$payload.out += "<!--[-->";
    $$payload.out += `<li>`;
    push_element("li", $$payload);
    $$payload.out += `<a${attr("href", `https://github.com/topics/${stringify(language.name)}`, false)} class="flex gap-2 items-center py-2">`;
    push_element("a", $$payload);
    $$payload.out += `<div class="w-3 h-3 rounded-full border-[1.5px]"${attr("style", `background-color: ${stringify(language.color)}`, false)}>`;
    push_element("div", $$payload);
    $$payload.out += `</div>`;
    pop_element();
    $$payload.out += ` <span class="text-sm text-foreground/50">`;
    push_element("span", $$payload);
    $$payload.out += `${escape(language.name)}</span>`;
    pop_element();
    $$payload.out += `</a>`;
    pop_element();
    $$payload.out += `</li>`;
    pop_element();
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</ul>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <section class="py-4 px-6 border-b">`;
  push_element("section", $$payload);
  $$payload.out += `<h2 class="text-foreground/50 text-sm leading-loose">`;
  push_element("h2", $$payload);
  $$payload.out += `Contact</h2>`;
  pop_element();
  $$payload.out += ` <ul>`;
  push_element("ul", $$payload);
  $$payload.out += `<li>`;
  push_element("li", $$payload);
  $$payload.out += `<a${attr("href", data.websiteUrl, false)} target="_blank" class="flex items gap-2 items-center py-2 cursor-pointer">`;
  push_element("a", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(Link)($$payload, { class: "w-3.5 h-3.5 text-foreground/50" });
  $$payload.out += `<!--]--> <span class="text-sm text-foreground/80">`;
  push_element("span", $$payload);
  $$payload.out += `Website</span>`;
  pop_element();
  $$payload.out += `</a>`;
  pop_element();
  $$payload.out += `</li>`;
  pop_element();
  $$payload.out += ` <li>`;
  push_element("li", $$payload);
  $$payload.out += `<a${attr("href", data.websiteUrl, false)} target="_blank" class="flex items gap-2 items-center py-2 cursor-pointer">`;
  push_element("a", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(Twitter)($$payload, { class: "w-3.5 h-3.5 text-foreground/50" });
  $$payload.out += `<!--]--> <span class="text-sm text-foreground/80">`;
  push_element("span", $$payload);
  $$payload.out += `Twitter</span>`;
  pop_element();
  $$payload.out += `</a>`;
  pop_element();
  $$payload.out += `</li>`;
  pop_element();
  $$payload.out += `</ul>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += `</aside>`;
  pop_element();
  pop();
}
RepoSidebar.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Chart_1($$payload, $$props) {
  push();
  Chart.register(LineController, CategoryScale, LinearScale, TimeScale, PointElement, LineElement, Title, Tooltip, Filler);
  $$payload.out += `<canvas class="w-full h-full">`;
  push_element("canvas", $$payload);
  $$payload.out += `</canvas>`;
  pop_element();
  pop();
}
Chart_1.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function ChartView($$payload, $$props) {
  push();
  const types = [
    {
      value: "forks",
      label: "Forks",
      icon: Git_fork
    },
    {
      value: "issues",
      label: "Issues",
      icon: Circle_dot
    },
    {
      value: "stars",
      label: "Stars",
      icon: Star
    }
  ];
  const ranges = [
    { value: "month", label: "1 Month" },
    { value: "three_months", label: "3 Months" },
    { value: "six_months", label: "6 Months" },
    { value: "one_year", label: "1 Year" },
    { value: "all_time", label: "All time" }
  ];
  let selectedType = { value: "stars", label: "Stars" };
  let TypeIcon = types[0].icon;
  const handleTypeChange = (val) => {
    TypeIcon = types.filter((type) => type.value === val.value)[0].icon;
  };
  let chartData = {
    datasets: [
      {
        label: "sveltejs",
        data: [
          {
            y: 400,
            x: DateTime.now().plus({ days: 1 }).toISO()
          },
          {
            y: 300,
            x: DateTime.now().plus({ days: 5 }).toISO()
          },
          {
            y: 200,
            x: DateTime.now().plus({ days: 20 }).toISO()
          },
          {
            y: 100,
            x: DateTime.now().plus({ days: 100 }).toISO()
          }
        ],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1
      }
    ]
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="ml-auto md:ml-0 flex gap-4 items-center mb-2 w-full border-b p-4">`;
    push_element("div", $$payload2);
    $$payload2.out += `<!--[-->`;
    validate_component(Root)($$payload2, {
      portal: null,
      get selected() {
        return selectedType;
      },
      set selected($$value) {
        selectedType = $$value;
        $$settled = false;
      },
      onSelectedChange: handleTypeChange,
      children: add_snippet_symbol(($$payload3, $$slotProps) => {
        $$payload3.out += `<!--[-->`;
        validate_component(Select_trigger)($$payload3, {
          class: "w-[180px]",
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            $$payload4.out += `<div class="flex gap-2 items-center">`;
            push_element("div", $$payload4);
            $$payload4.out += `<!--[-->`;
            validate_component(TypeIcon)($$payload4, { class: "h-4 w-4 -mt-0.5" });
            $$payload4.out += `<!--]--> <!--[-->`;
            validate_component(Value)($$payload4, {
              children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                $$payload5.out += `${escape(ranges[0].label)}`;
              })
            });
            $$payload4.out += `<!--]--></div>`;
            pop_element();
          })
        });
        $$payload3.out += `<!--]--> <!--[-->`;
        validate_component(Select_content)($$payload3, {
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            $$payload4.out += `<!--[-->`;
            validate_component(Group)($$payload4, {
              children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                const each_array = ensure_array_like(types);
                $$payload5.out += `<!--[-->`;
                validate_component(Select_label)($$payload5, {
                  children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                    $$payload6.out += `Type`;
                  })
                });
                $$payload5.out += `<!--]--> <!--[-->`;
                for (let $$index = 0; $$index < each_array.length; $$index++) {
                  const $$item = each_array[$$index];
                  const { value, label, icon: Icon2 } = $$item;
                  $$payload5.out += "<!--[-->";
                  $$payload5.out += `<!--[-->`;
                  validate_component(Select_item)($$payload5, {
                    value,
                    label,
                    children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                      $$payload6.out += `<div class="flex gap-2 items-center">`;
                      push_element("div", $$payload6);
                      $$payload6.out += `<!--[-->`;
                      validate_component(Icon2)($$payload6, { class: "h-4 w-4 -mt-0.5" });
                      $$payload6.out += `<!--]--> ${escape(label)}</div>`;
                      pop_element();
                    })
                  });
                  $$payload5.out += `<!--]-->`;
                  $$payload5.out += "<!--]-->";
                }
                $$payload5.out += "<!--]-->";
              })
            });
            $$payload4.out += `<!--]-->`;
          })
        });
        $$payload3.out += `<!--]--> <!--[-->`;
        validate_component(Input)($$payload3, { name: "type" });
        $$payload3.out += `<!--]-->`;
      })
    });
    $$payload2.out += `<!--]--> <!--[-->`;
    validate_component(Root)($$payload2, {
      portal: null,
      children: add_snippet_symbol(($$payload3, $$slotProps) => {
        $$payload3.out += `<!--[-->`;
        validate_component(Select_trigger)($$payload3, {
          class: "w-[180px]",
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            $$payload4.out += `<div class="flex gap-2 items-center">`;
            push_element("div", $$payload4);
            $$payload4.out += `<!--[-->`;
            validate_component(Calendar)($$payload4, { class: "h-4 w-4 -mt-0.5" });
            $$payload4.out += `<!--]--> <!--[-->`;
            validate_component(Value)($$payload4, {
              children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                $$payload5.out += `${escape(ranges[0].label)}`;
              })
            });
            $$payload4.out += `<!--]--></div>`;
            pop_element();
          })
        });
        $$payload3.out += `<!--]--> <!--[-->`;
        validate_component(Select_content)($$payload3, {
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            $$payload4.out += `<!--[-->`;
            validate_component(Group)($$payload4, {
              children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                const each_array_1 = ensure_array_like(ranges);
                $$payload5.out += `<!--[-->`;
                validate_component(Select_label)($$payload5, {
                  children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                    $$payload6.out += `Range`;
                  })
                });
                $$payload5.out += `<!--]--> <!--[-->`;
                for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
                  const range = each_array_1[$$index_1];
                  $$payload5.out += "<!--[-->";
                  $$payload5.out += `<!--[-->`;
                  validate_component(Select_item)($$payload5, {
                    value: range.value,
                    label: range.label,
                    children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                      $$payload6.out += `${escape(range.label)}`;
                    })
                  });
                  $$payload5.out += `<!--]-->`;
                  $$payload5.out += "<!--]-->";
                }
                $$payload5.out += "<!--]-->";
              })
            });
            $$payload4.out += `<!--]-->`;
          })
        });
        $$payload3.out += `<!--]--> <!--[-->`;
        validate_component(Input)($$payload3, { name: "range" });
        $$payload3.out += `<!--]-->`;
      })
    });
    $$payload2.out += `<!--]--></div>`;
    pop_element();
    $$payload2.out += ` <div class="p-4 md:h-96 xl:h-[37rem] relative w-full">`;
    push_element("div", $$payload2);
    $$payload2.out += `<!--[-->`;
    validate_component(Chart_1)($$payload2, { chartData, showLegend: true });
    $$payload2.out += `<!--]--></div>`;
    pop_element();
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
ChartView.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  ChartView as C,
  HnSentiment as H,
  Notes as N,
  RepoSidebar as R
};
