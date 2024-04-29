import { o as rest_props, p as push, v as value_or_fallback, t as ensure_array_like, w as spread_attributes, d as push_element, A as element, e as pop_element, c as slot, q as bind_props, b as pop, n as sanitize_props, m as spread_props, g as escape } from "./index3.js";
import { c as validate_dynamic_element_tag, v as validate_component, a as add_snippet_symbol, b as validate_void_dynamic_element } from "./validate.js";
import "dequal";
import { B as Select_label$1, c as cn, C as Select_item$1, E as Select_item_indicator, g as flyAndScale, F as Select_content$1, G as Select_trigger$1 } from "./index5.js";
import { b as PUBLIC_SUPABASE_GRAPHQL_URL, s as supabaseClient, c as PUBLIC_SUPABASE_ANON_KEY } from "./index4.js";
import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client/core/index.js";
import { setContext } from "@apollo/client/link/context/index.js";
import { tv } from "tailwind-variants";
const linear = (x) => x;
function cubic_out(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fade(node, { delay = 0, duration = 400, easing = linear } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function scale(node, { delay = 0, duration = 400, easing = cubic_out, start = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const sd = 1 - start;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
  };
}
/**
 * @license lucide-svelte v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const defaultAttributes$1 = defaultAttributes;
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
    "$$props"
  ]);
  push();
  let name = $$props["name"];
  let color = value_or_fallback($$props["color"], "currentColor");
  let size = value_or_fallback($$props["size"], 24);
  let strokeWidth = value_or_fallback($$props["strokeWidth"], 2);
  let absoluteStrokeWidth = value_or_fallback($$props["absoluteStrokeWidth"], false);
  let iconNode = $$props["iconNode"];
  const each_array = ensure_array_like(iconNode);
  $$payload.out += `<svg${spread_attributes(
    [
      defaultAttributes$1,
      $$restProps,
      { "width": size },
      { "height": size },
      { "stroke": color },
      {
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth
      },
      {
        "class": `lucide-icon lucide lucide-${name} ${$$sanitized_props.class ?? ""}`
      }
    ],
    false,
    true,
    ""
  )}>`;
  push_element("svg", $$payload);
  $$payload.out += `<!--[-->`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const $$item = each_array[$$index];
    const [tag, attrs] = $$item;
    $$payload.out += "<!--[-->";
    validate_dynamic_element_tag(() => tag);
    $$payload.out += `<!--[-->`;
    push_element(tag, $$payload);
    if (tag)
      element(
        $$payload,
        tag,
        () => {
          $$payload.out += `${spread_attributes([attrs], false, true, "")}`;
        },
        () => {
        }
      );
    $$payload.out += `<!--]-->`;
    pop_element();
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `<!--[-->`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `<!--]--></svg>`;
  pop_element();
  bind_props($$props, {
    name,
    color,
    size,
    strokeWidth,
    absoluteStrokeWidth,
    iconNode
  });
  pop();
}
Icon.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Check($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "check" },
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
Check.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Chevron_down($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "chevron-down" },
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
Chevron_down.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function X($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "x" },
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
X.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Select_label($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(Select_label$1)($$payload, spread_props([
    {
      class: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)
    },
    $$restProps,
    {
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className });
  pop();
}
Select_label.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Select_item($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "value",
    "label",
    "disabled",
    "$$props"
  ]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let value = $$props["value"];
  let label = value_or_fallback($$props["label"], void 0);
  let disabled = value_or_fallback($$props["disabled"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(Select_item$1)($$payload, spread_props([
    {
      value,
      disabled,
      label,
      class: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50", className)
    },
    $$restProps,
    {
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">`;
        push_element("span", $$payload2);
        $$payload2.out += `<!--[-->`;
        validate_component(Select_item_indicator)($$payload2, {
          children: add_snippet_symbol(($$payload3, $$slotProps2) => {
            $$payload3.out += `<!--[-->`;
            validate_component(Check)($$payload3, { class: "h-4 w-4" });
            $$payload3.out += `<!--]-->`;
          })
        });
        $$payload2.out += `<!--]--></span>`;
        pop_element();
        $$payload2.out += ` <!--[-->`;
        slot($$payload2, $$props.children, {}, () => {
          $$payload2.out += `${escape(label || value)}`;
        });
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className, value, label, disabled });
  pop();
}
Select_item.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Select_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "sideOffset",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "class",
    "$$props"
  ]);
  push();
  let sideOffset = value_or_fallback($$props["sideOffset"], 4);
  let inTransition = value_or_fallback($$props["inTransition"], flyAndScale);
  let inTransitionConfig = value_or_fallback($$props["inTransitionConfig"], void 0);
  let outTransition = value_or_fallback($$props["outTransition"], scale);
  let outTransitionConfig = value_or_fallback($$props["outTransitionConfig"], { start: 0.95, opacity: 0, duration: 50 });
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(Select_content$1)($$payload, spread_props([
    {
      inTransition,
      inTransitionConfig,
      outTransition,
      outTransitionConfig,
      sideOffset,
      class: cn("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md outline-none", className)
    },
    $$restProps,
    {
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<div class="w-full p-1">`;
        push_element("div", $$payload2);
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]--></div>`;
        pop_element();
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    sideOffset,
    inTransition,
    inTransitionConfig,
    outTransition,
    outTransitionConfig,
    class: className
  });
  pop();
}
Select_content.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Select_trigger($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(Select_trigger$1)($$payload, spread_props([
    {
      class: cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className)
    },
    $$restProps,
    {
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        const builder = $$slotProps.builder;
        $$payload2.out += `<!--[-->`;
        slot(
          $$payload2,
          $$props.children,
          {
            get builder() {
              return builder;
            }
          },
          null
        );
        $$payload2.out += `<!--]--> <div>`;
        push_element("div", $$payload2);
        $$payload2.out += `<!--[-->`;
        validate_component(Chevron_down)($$payload2, { class: "h-4 w-4 opacity-50" });
        $$payload2.out += `<!--]--></div>`;
        pop_element();
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className });
  pop();
}
Select_trigger.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const httpLink = new HttpLink({
  uri: PUBLIC_SUPABASE_GRAPHQL_URL
});
const authLink = setContext(async (_, { headers }) => {
  const { data, error } = await supabaseClient.auth.getSession();
  if (error)
    console.error("Error: ", error.message);
  const token = data ? data.session?.access_token : "";
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
      apiKey: PUBLIC_SUPABASE_ANON_KEY
    }
  };
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: PUBLIC_SUPABASE_GRAPHQL_URL,
  link: authLink.concat(httpLink)
});
function Badge($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "href", "variant", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let href = value_or_fallback($$props["href"], void 0);
  let variant = value_or_fallback($$props["variant"], "default");
  const $$tag = href ? "a" : "span";
  validate_void_dynamic_element(() => $$tag);
  validate_dynamic_element_tag(() => $$tag);
  $$payload.out += `<!--[-->`;
  push_element($$tag, $$payload);
  if ($$tag)
    element(
      $$payload,
      $$tag,
      () => {
        $$payload.out += `${spread_attributes(
          [
            { "href": href },
            {
              "class": cn(badgeVariants({ variant, className }))
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
  bind_props($$props, { class: className, href, variant });
  pop();
}
Badge.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const badgeVariants = tv({
  base: "inline-flex select-none items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 leading-normal",
      secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      outline: "text-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
export {
  Badge as B,
  Check as C,
  Icon as I,
  Select_trigger as S,
  X,
  Select_content as a,
  Select_item as b,
  client as c,
  Select_label as d,
  fade as f
};
