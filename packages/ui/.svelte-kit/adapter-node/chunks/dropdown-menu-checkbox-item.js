import { p as push, l as spread_props, c as slot, b as pop, m as sanitize_props, q as rest_props, v as value_or_fallback, t as bind_props, d as push_element, e as pop_element, n as copy_payload, o as assign_payload } from "./index3.js";
import { I as Icon, C as Check } from "./select-trigger.js";
import { v as validate_component, a as add_snippet_symbol } from "./validate.js";
import "dequal";
import { S as Select, s as Select_group, u as Select_input, v as Select_value, w as Menu_item, c as cn, g as flyAndScale, x as Menu_content, y as Menu_radio_item, z as Menu_radio_indicator, A as Menu_radio_group, B as Menu_checkbox_item, C as Menu_checkbox_indicator } from "./index5.js";
import "clsx";
function Calendar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "M8 2v4" }],
    ["path", { "d": "M16 2v4" }],
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "4",
        "rx": "2"
      }
    ],
    ["path", { "d": "M3 10h18" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "calendar" },
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
Calendar.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Circle_dot($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "1" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "circle-dot" },
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
Circle_dot.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Circle($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "circle" },
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
Circle.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Folder_git_2($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "path",
      {
        "d": "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"
      }
    ],
    [
      "circle",
      { "cx": "13", "cy": "12", "r": "2" }
    ],
    [
      "path",
      { "d": "M18 19c-2.8 0-5-2.2-5-5v8" }
    ],
    [
      "circle",
      { "cx": "20", "cy": "19", "r": "2" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "folder-git-2" },
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
Folder_git_2.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Git_fork($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "18", "r": "3" }
    ],
    [
      "circle",
      { "cx": "6", "cy": "6", "r": "3" }
    ],
    [
      "circle",
      { "cx": "18", "cy": "6", "r": "3" }
    ],
    [
      "path",
      {
        "d": "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"
      }
    ],
    ["path", { "d": "M12 12v3" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "git-fork" },
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
Git_fork.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Git_pull_request_arrow($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "circle",
      { "cx": "5", "cy": "6", "r": "3" }
    ],
    ["path", { "d": "M5 9v12" }],
    [
      "circle",
      { "cx": "19", "cy": "18", "r": "3" }
    ],
    ["path", { "d": "m15 9-3-3 3-3" }],
    ["path", { "d": "M12 6h5a2 2 0 0 1 2 2v7" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "git-pull-request-arrow" },
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
Git_pull_request_arrow.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Star($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "polygon",
      {
        "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    ]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "star" },
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
Star.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Users($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    [
      "circle",
      { "cx": "9", "cy": "7", "r": "4" }
    ],
    [
      "path",
      { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }
    ],
    [
      "path",
      { "d": "M16 3.13a4 4 0 0 1 0 7.75" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "users" },
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
Users.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const Root = Select;
const Group = Select_group;
const Input = Select_input;
const Value = Select_value;
function Dropdown_menu_item($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "inset", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let inset = value_or_fallback($$props["inset"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(Menu_item)($$payload, spread_props([
    {
      class: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50", inset && "pl-8", className)
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
  bind_props($$props, { class: className, inset });
  pop();
}
Dropdown_menu_item.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dropdown_menu_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "sideOffset",
    "transition",
    "transitionConfig",
    "$$props"
  ]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let sideOffset = value_or_fallback($$props["sideOffset"], 4);
  let transition = value_or_fallback($$props["transition"], flyAndScale);
  let transitionConfig = value_or_fallback($$props["transitionConfig"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(Menu_content)($$payload, spread_props([
    {
      transition,
      transitionConfig,
      sideOffset,
      class: cn("z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none", className)
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
  bind_props($$props, {
    class: className,
    sideOffset,
    transition,
    transitionConfig
  });
  pop();
}
Dropdown_menu_content.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dropdown_menu_radio_item($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let value = $$props["value"];
  $$payload.out += `<!--[-->`;
  validate_component(Menu_radio_item)($$payload, spread_props([
    {
      class: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50", className),
      value
    },
    $$restProps,
    {
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">`;
        push_element("span", $$payload2);
        $$payload2.out += `<!--[-->`;
        validate_component(Menu_radio_indicator)($$payload2, {
          children: add_snippet_symbol(($$payload3, $$slotProps2) => {
            $$payload3.out += `<!--[-->`;
            validate_component(Circle)($$payload3, { class: "h-2 w-2 fill-current" });
            $$payload3.out += `<!--]-->`;
          })
        });
        $$payload2.out += `<!--]--></span>`;
        pop_element();
        $$payload2.out += ` <!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className, value });
  pop();
}
Dropdown_menu_radio_item.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dropdown_menu_radio_group($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["value", "$$props"]);
  push();
  let value = value_or_fallback($$props["value"], void 0);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!--[-->`;
    validate_component(Menu_radio_group)($$payload2, spread_props([
      $$restProps,
      {
        get value() {
          return value;
        },
        set value($$value) {
          value = $$value;
          $$settled = false;
        },
        children: add_snippet_symbol(($$payload3, $$slotProps) => {
          $$payload3.out += `<!--[-->`;
          slot($$payload3, $$props.children, {}, null);
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
  bind_props($$props, { value });
  pop();
}
Dropdown_menu_radio_group.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dropdown_menu_checkbox_item($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "checked", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let checked = value_or_fallback($$props["checked"], void 0);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!--[-->`;
    validate_component(Menu_checkbox_item)($$payload2, spread_props([
      {
        get checked() {
          return checked;
        },
        set checked($$value) {
          checked = $$value;
          $$settled = false;
        },
        class: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50", className)
      },
      $$restProps,
      {
        children: add_snippet_symbol(($$payload3, $$slotProps) => {
          $$payload3.out += `<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">`;
          push_element("span", $$payload3);
          $$payload3.out += `<!--[-->`;
          validate_component(Menu_checkbox_indicator)($$payload3, {
            children: add_snippet_symbol(($$payload4, $$slotProps2) => {
              $$payload4.out += `<!--[-->`;
              validate_component(Check)($$payload4, { class: "h-4 w-4" });
              $$payload4.out += `<!--]-->`;
            })
          });
          $$payload3.out += `<!--]--></span>`;
          pop_element();
          $$payload3.out += ` <!--[-->`;
          slot($$payload3, $$props.children, {}, null);
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
  bind_props($$props, { class: className, checked });
  pop();
}
Dropdown_menu_checkbox_item.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  Circle_dot as C,
  Dropdown_menu_content as D,
  Folder_git_2 as F,
  Git_fork as G,
  Input as I,
  Root as R,
  Star as S,
  Users as U,
  Value as V,
  Git_pull_request_arrow as a,
  Calendar as b,
  Dropdown_menu_radio_group as c,
  Dropdown_menu_radio_item as d,
  Dropdown_menu_item as e,
  Dropdown_menu_checkbox_item as f,
  Group as g
};
