import { p as push, l as spread_props, c as slot, b as pop, m as sanitize_props, q as rest_props, v as value_or_fallback, t as bind_props, n as copy_payload, o as assign_payload, d as push_element, g as escape, e as pop_element, w as ensure_array_like, f as attr } from "./index3.js";
import { I as Icon, S as Select_trigger, a as Select_content, b as Select_item } from "./select-trigger.js";
import { v as validate_component, a as add_snippet_symbol } from "./validate.js";
import { S as SortableList, A as AddRepo, X } from "./index6.js";
import { b as Calendar, D as Dropdown_menu_content, c as Dropdown_menu_radio_group, d as Dropdown_menu_radio_item, e as Dropdown_menu_item, f as Dropdown_menu_checkbox_item, R as Root$2 } from "./dropdown-menu-checkbox-item.js";
import { B as Button } from "./index7.js";
import "dequal";
import { M as Menu, a as Menu_trigger, T as Tabs_list$1, c as cn, b as Tabs_trigger$1, d as Tabs } from "./index5.js";
import "clsx";
import { S as SplitIcon } from "./index9.js";
import { I as Input } from "./input.js";
function Arrow_up_down($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "m21 16-4 4-4-4" }],
    ["path", { "d": "M17 20V4" }],
    ["path", { "d": "m3 8 4-4 4 4" }],
    ["path", { "d": "M7 4v16" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "arrow-up-down" },
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
Arrow_up_down.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Columns_3($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2"
      }
    ],
    ["path", { "d": "M9 3v18" }],
    ["path", { "d": "M15 3v18" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "columns-3" },
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
Columns_3.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function List_filter($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    ["path", { "d": "M7 12h10" }],
    ["path", { "d": "M10 18h4" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "list-filter" },
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
List_filter.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Plus($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "M12 5v14" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "plus" },
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
Plus.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function User($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "path",
      {
        "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
      }
    ],
    [
      "circle",
      { "cx": "12", "cy": "7", "r": "4" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "user" },
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
User.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Users_round($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "M18 21a8 8 0 0 0-16 0" }],
    [
      "circle",
      { "cx": "10", "cy": "8", "r": "5" }
    ],
    [
      "path",
      {
        "d": "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"
      }
    ]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "users-round" },
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
Users_round.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const Root$1 = Menu;
const Trigger = Menu_trigger;
function Tabs_list($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(Tabs_list$1)($$payload, spread_props([
    {
      class: cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)
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
Tabs_list.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Tabs_trigger($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let value = $$props["value"];
  $$payload.out += `<!--[-->`;
  validate_component(Tabs_trigger$1)($$payload, spread_props([
    {
      class: cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className),
      value
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
  bind_props($$props, { class: className, value });
  pop();
}
Tabs_trigger.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const Root = Tabs;
function FilterHeader($$payload, $$props) {
  push();
  let { data = void 0 } = $$props;
  let tmp = data, time = tmp.time, columns = tmp.columns, filterableItems = tmp.filterableItems, sortableItems = tmp.sortableItems, onTimeChange = tmp.onTimeChange, onSortUpdate = tmp.onSortUpdate;
  tmp.onFilterAdd;
  let onFilterChange = tmp.onFilterChange;
  tmp.onFilterRemove;
  let onColumnCheckChange = tmp.onColumnCheckChange;
  const handleSortableListUpdate = (event) => {
    onSortUpdate(event.oldIndex, event.newIndex);
  };
  const getHandleOnSortOrderChange = (id) => () => {
    const sortableItem = sortableItems.find((col) => col.id === id);
    if (sortableItem)
      sortableItem?.onSortOrderChange(id);
    else
      console.error("error configuration");
  };
  const handleTimeChange = (value) => {
    onTimeChange(value || "");
  };
  const getFilterOnSelectedChangeFunc = (id, filter) => (obj) => {
    onFilterChange(id, { ...filter, operator: obj.value });
  };
  const getHandleColumnCheckedChangeFunc = (id) => () => {
    columns.find((col) => col.id === id);
    onColumnCheckChange(id);
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="flex py-2 px-4 h-[3.8125rem] w-full border-b">`;
    push_element("div", $$payload2);
    $$payload2.out += `<div class="ml-auto md:ml-0 flex gap-4 items-center">`;
    push_element("div", $$payload2);
    $$payload2.out += `<!--[-->`;
    validate_component(Root$1)($$payload2, {
      closeOnItemClick: false,
      children: add_snippet_symbol(($$payload3, $$slotProps) => {
        $$payload3.out += `<!--[-->`;
        validate_component(Trigger)($$payload3, {
          asChild: true,
          class: "w-40",
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            const builder = $$slotProps2.builder;
            $$payload4.out += `<!--[-->`;
            validate_component(Button)($$payload4, {
              variant: "outline",
              builders: [builder],
              size: "sm",
              children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                $$payload5.out += `<!--[-->`;
                validate_component(Calendar)($$payload5, { class: "h-4 w-4 md:mr-2" });
                $$payload5.out += `<!--]--> <span class="hidden md:inline">`;
                push_element("span", $$payload5);
                $$payload5.out += `${escape(time)}</span>`;
                pop_element();
              })
            });
            $$payload4.out += `<!--]-->`;
          })
        });
        $$payload3.out += `<!--]--> <!--[-->`;
        validate_component(Dropdown_menu_content)($$payload3, {
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            $$payload4.out += `<!--[-->`;
            validate_component(Dropdown_menu_radio_group)($$payload4, {
              get value() {
                return time;
              },
              set value($$value) {
                time = $$value;
                $$settled = false;
              },
              onValueChange: handleTimeChange,
              children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                $$payload5.out += `<!--[-->`;
                validate_component(Dropdown_menu_radio_item)($$payload5, {
                  value: "Day",
                  class: "text-sm",
                  children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                    $$payload6.out += `Day`;
                  })
                });
                $$payload5.out += `<!--]--> <!--[-->`;
                validate_component(Dropdown_menu_radio_item)($$payload5, {
                  value: "Week",
                  class: "text-sm",
                  children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                    $$payload6.out += `Week`;
                  })
                });
                $$payload5.out += `<!--]--> <!--[-->`;
                validate_component(Dropdown_menu_radio_item)($$payload5, {
                  value: "Month",
                  class: "text-sm",
                  children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                    $$payload6.out += `Month`;
                  })
                });
                $$payload5.out += `<!--]-->`;
              })
            });
            $$payload4.out += `<!--]-->`;
          })
        });
        $$payload3.out += `<!--]-->`;
      })
    });
    $$payload2.out += `<!--]--> <!--[-->`;
    validate_component(Root$1)($$payload2, {
      closeOnItemClick: false,
      children: add_snippet_symbol(($$payload3, $$slotProps) => {
        $$payload3.out += `<!--[-->`;
        validate_component(Trigger)($$payload3, {
          asChild: true,
          class: "w-40",
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            const builder = $$slotProps2.builder;
            $$payload4.out += `<!--[-->`;
            validate_component(Button)($$payload4, {
              variant: "outline",
              builders: [builder],
              size: "sm",
              children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                $$payload5.out += `<!--[-->`;
                validate_component(Arrow_up_down)($$payload5, { class: "h-4 w-4 md:mr-2" });
                $$payload5.out += `<!--]--> <span class="hidden md:inline">`;
                push_element("span", $$payload5);
                $$payload5.out += `Sorting</span>`;
                pop_element();
              })
            });
            $$payload4.out += `<!--]-->`;
          })
        });
        $$payload3.out += `<!--]--> <!--[-->`;
        validate_component(Dropdown_menu_content)($$payload3, {
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            $$payload4.out += `<!--[-->`;
            validate_component(SortableList)($$payload4, {
              class: "",
              onUpdate: handleSortableListUpdate,
              children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                const each_array = ensure_array_like(sortableItems);
                $$payload5.out += `<!--[-->`;
                for (let i = 0; i < each_array.length; i++) {
                  const $$item = each_array[i];
                  const {
                    id,
                    title,
                    icon1: Icon1,
                    icon2: Icon2,
                    disabled,
                    isAsc
                  } = $$item;
                  $$payload5.out += "<!--[-->";
                  $$payload5.out += `<!--[-->`;
                  {
                    $$payload5.out += `<!--[-->`;
                    {
                      $$payload5.out += `<div role="menuitem"${attr("tabindex", null, false)}>`;
                      push_element("div", $$payload5);
                      $$payload5.out += `<!--[-->`;
                      validate_component(Dropdown_menu_item)($$payload5, {
                        class: "text-xs grid grid-cols-2 gap-2 py-1",
                        disabled,
                        children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                          $$payload6.out += `<div class="flex items-center gap-2">`;
                          push_element("div", $$payload6);
                          $$payload6.out += `<!--[-->`;
                          if (Icon2) {
                            $$payload6.out += `<!--[-->`;
                            validate_component(SplitIcon)($$payload6, {
                              icon1: Icon1,
                              icon2: Icon2,
                              class: "w-4 h-4",
                              iconProps: { class: "text-foreground/50 w-2 h-2" }
                            });
                            $$payload6.out += `<!--]-->`;
                            $$payload6.out += "<!--]-->";
                          } else {
                            $$payload6.out += `<!--[-->`;
                            validate_component(Icon1)($$payload6, { class: "text-foreground/50 w-4 h-4" });
                            $$payload6.out += `<!--]-->`;
                            $$payload6.out += "<!--]!-->";
                          }
                          $$payload6.out += `${escape(title)}</div>`;
                          pop_element();
                          $$payload6.out += ` <div>`;
                          push_element("div", $$payload6);
                          $$payload6.out += `<!--[-->`;
                          validate_component(Root)($$payload6, {
                            value: isAsc ? "asc" : "desc",
                            class: "text-xs",
                            onValueChange: getHandleOnSortOrderChange(id),
                            children: add_snippet_symbol(($$payload7, $$slotProps5) => {
                              $$payload7.out += `<!--[-->`;
                              validate_component(Tabs_list)($$payload7, {
                                class: "ml-auto py-0 h-7",
                                children: add_snippet_symbol(($$payload8, $$slotProps6) => {
                                  $$payload8.out += `<!--[-->`;
                                  validate_component(Tabs_trigger)($$payload8, {
                                    value: "asc",
                                    class: "text-zinc-600 dark:text-zinc-200 py-1 text-xs",
                                    children: add_snippet_symbol(($$payload9, $$slotProps7) => {
                                      $$payload9.out += `Asc`;
                                    })
                                  });
                                  $$payload8.out += `<!--]--> <!--[-->`;
                                  validate_component(Tabs_trigger)($$payload8, {
                                    value: "desc",
                                    class: "text-zinc-600 dark:text-zinc-200 py-1 text-xs",
                                    children: add_snippet_symbol(($$payload9, $$slotProps7) => {
                                      $$payload9.out += `Desc`;
                                    })
                                  });
                                  $$payload8.out += `<!--]-->`;
                                })
                              });
                              $$payload7.out += `<!--]-->`;
                            })
                          });
                          $$payload6.out += `<!--]--></div>`;
                          pop_element();
                        })
                      });
                      $$payload5.out += `<!--]--></div>`;
                      pop_element();
                    }
                    $$payload5.out += `<!--]-->`;
                  }
                  $$payload5.out += `<!--]-->`;
                  $$payload5.out += "<!--]-->";
                }
                $$payload5.out += "<!--]-->";
              })
            });
            $$payload4.out += `<!--]-->`;
          })
        });
        $$payload3.out += `<!--]-->`;
      })
    });
    $$payload2.out += `<!--]--> <!--[-->`;
    validate_component(Root$1)($$payload2, {
      children: add_snippet_symbol(($$payload3, $$slotProps) => {
        $$payload3.out += `<!--[-->`;
        validate_component(Trigger)($$payload3, {
          asChild: true,
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            const builder = $$slotProps2.builder;
            $$payload4.out += `<!--[-->`;
            validate_component(Button)($$payload4, {
              variant: "outline",
              builders: [builder],
              size: "sm",
              children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                $$payload5.out += `<!--[-->`;
                validate_component(List_filter)($$payload5, { class: "h-4 w-4 md:mr-2" });
                $$payload5.out += `<!--]--> <span class="hidden md:inline">`;
                push_element("span", $$payload5);
                $$payload5.out += `Filtering</span>`;
                pop_element();
              })
            });
            $$payload4.out += `<!--]-->`;
          })
        });
        $$payload3.out += `<!--]--> <!--[-->`;
        validate_component(Dropdown_menu_content)($$payload3, {
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            const each_array_1 = ensure_array_like(filterableItems);
            $$payload4.out += `<!--[-->`;
            for (let i = 0; i < each_array_1.length; i++) {
              const $$item = each_array_1[i];
              const { id, title, icon1: Icon1, icon2: Icon2 } = $$item;
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<div>`;
              push_element("div", $$payload4);
              $$payload4.out += `<!--[-->`;
              validate_component(Dropdown_menu_item)($$payload4, {
                class: "text-sm flex gap-2",
                children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                  $$payload5.out += `<!--[-->`;
                  if (Icon2) {
                    $$payload5.out += `<!--[-->`;
                    validate_component(SplitIcon)($$payload5, {
                      icon1: Icon1,
                      icon2: Icon2,
                      class: "w-4 h-4",
                      iconProps: { class: "text-foreground/50 w-2 h-2" }
                    });
                    $$payload5.out += `<!--]-->`;
                    $$payload5.out += "<!--]-->";
                  } else {
                    $$payload5.out += `<!--[-->`;
                    validate_component(Icon1)($$payload5, { class: "text-foreground/50 w-4 h-4" });
                    $$payload5.out += `<!--]-->`;
                    $$payload5.out += "<!--]!-->";
                  }
                  $$payload5.out += `${escape(title)}`;
                })
              });
              $$payload4.out += `<!--]--></div>`;
              pop_element();
              $$payload4.out += "<!--]-->";
            }
            $$payload4.out += "<!--]-->";
          })
        });
        $$payload3.out += `<!--]-->`;
      })
    });
    $$payload2.out += `<!--]--></div>`;
    pop_element();
    $$payload2.out += ` <div class="flex gap-4 items-center ml-4 md:ml-auto">`;
    push_element("div", $$payload2);
    $$payload2.out += `<!--[-->`;
    validate_component(Root$1)($$payload2, {
      closeOnItemClick: false,
      children: add_snippet_symbol(($$payload3, $$slotProps) => {
        $$payload3.out += `<!--[-->`;
        validate_component(Trigger)($$payload3, {
          asChild: true,
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            const builder = $$slotProps2.builder;
            $$payload4.out += `<!--[-->`;
            validate_component(Button)($$payload4, {
              variant: "outline",
              builders: [builder],
              size: "sm",
              class: "ml-auto",
              children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                $$payload5.out += `<!--[-->`;
                validate_component(Columns_3)($$payload5, { class: "h-4 w-4 md:mr-2" });
                $$payload5.out += `<!--]--> <span class="hidden md:inline">`;
                push_element("span", $$payload5);
                $$payload5.out += `Columns</span>`;
                pop_element();
              })
            });
            $$payload4.out += `<!--]-->`;
          })
        });
        $$payload3.out += `<!--]--> <!--[-->`;
        validate_component(Dropdown_menu_content)($$payload3, {
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            const each_array_2 = ensure_array_like(columns);
            $$payload4.out += `<!--[-->`;
            for (let i = 0; i < each_array_2.length; i++) {
              const $$item = each_array_2[i];
              const {
                title,
                icon1: Icon1,
                icon2: Icon2,
                checked,
                id
              } = $$item;
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<!--[-->`;
              validate_component(Dropdown_menu_checkbox_item)($$payload4, {
                class: "text-sm flex gap-2",
                checked,
                onCheckedChange: getHandleColumnCheckedChangeFunc(id),
                children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                  $$payload5.out += `<!--[-->`;
                  if (Icon2) {
                    $$payload5.out += `<!--[-->`;
                    validate_component(SplitIcon)($$payload5, {
                      icon1: Icon1,
                      icon2: Icon2,
                      class: "w-4 h-4",
                      iconProps: { class: "text-foreground/50 w-2 h-2" }
                    });
                    $$payload5.out += `<!--]-->`;
                    $$payload5.out += "<!--]-->";
                  } else {
                    $$payload5.out += `<!--[-->`;
                    validate_component(Icon1)($$payload5, { class: "text-foreground/50 w-4 h-4" });
                    $$payload5.out += `<!--]-->`;
                    $$payload5.out += "<!--]!-->";
                  }
                  $$payload5.out += `<span${attr("class", checked ? "text-foreground" : "text-foreground/50", false)}>`;
                  push_element("span", $$payload5);
                  $$payload5.out += `${escape(title)}</span>`;
                  pop_element();
                })
              });
              $$payload4.out += `<!--]-->`;
              $$payload4.out += "<!--]-->";
            }
            $$payload4.out += "<!--]-->";
          })
        });
        $$payload3.out += `<!--]-->`;
      })
    });
    $$payload2.out += `<!--]--> <!--[-->`;
    validate_component(AddRepo)($$payload2, {
      children: add_snippet_symbol(($$payload3, $$slotProps) => {
        $$payload3.out += `<!--[-->`;
        validate_component(Button)($$payload3, {
          variant: "accent",
          size: "sm",
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            $$payload4.out += `<!--[-->`;
            validate_component(Plus)($$payload4, { class: "h-4 w-4 md:mr-2" });
            $$payload4.out += `<!--]--><span class="hidden md:inline">`;
            push_element("span", $$payload4);
            $$payload4.out += `Repository</span>`;
            pop_element();
          })
        });
        $$payload3.out += `<!--]-->`;
      })
    });
    $$payload2.out += `<!--]--></div>`;
    pop_element();
    $$payload2.out += `</div>`;
    pop_element();
    $$payload2.out += ` <!--[-->`;
    if (filterableItems.filter((filterableItem) => filterableItem?.filters?.length > 0).length > 0) {
      const each_array_3 = ensure_array_like(filterableItems);
      $$payload2.out += `<div class="py-2.5 md:py-2 px-4 border-b flex-nowrap whitespace-nowrap h-9 box-content overflow-x-auto">`;
      push_element("div", $$payload2);
      $$payload2.out += `<!--[-->`;
      for (let $$index_4 = 0; $$index_4 < each_array_3.length; $$index_4++) {
        const filterableItem = each_array_3[$$index_4];
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<!--[-->`;
        if (filterableItem.filters) {
          const each_array_4 = ensure_array_like(filterableItem.filters);
          $$payload2.out += `<!--[-->`;
          for (let $$index_3 = 0; $$index_3 < each_array_4.length; $$index_3++) {
            const filter = each_array_4[$$index_3];
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<!--[-->`;
            validate_component(Root$1)($$payload2, {
              children: add_snippet_symbol(($$payload3, $$slotProps) => {
                $$payload3.out += `<!--[-->`;
                validate_component(Trigger)($$payload3, {
                  asChild: true,
                  children: add_snippet_symbol(($$payload4, $$slotProps2) => {
                    const builder = $$slotProps2.builder;
                    $$payload4.out += `<!--[-->`;
                    validate_component(Button)($$payload4, {
                      variant: "outline",
                      builders: [builder],
                      size: "sm",
                      class: "mr-2 text-[0.8rem]",
                      children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                        $$payload5.out += `${escape(filterableItem.title)} <!--[-->`;
                        {
                          $$payload5.out += `<!--[-->`;
                          if (filter.operator === "gt") {
                            $$payload5.out += `${escape(">")}`;
                            $$payload5.out += "<!--]-->";
                          } else {
                            $$payload5.out += `<!--[-->`;
                            if (filter.operator === "lt") {
                              $$payload5.out += `${escape("<")}`;
                              $$payload5.out += "<!--]-->";
                            } else {
                              $$payload5.out += `<!--[-->`;
                              if (filter.operator === "eq") {
                                $$payload5.out += `=`;
                                $$payload5.out += "<!--]-->";
                              } else {
                                $$payload5.out += `<!--[-->`;
                                if (filter.operator === "ne") {
                                  $$payload5.out += `!=`;
                                  $$payload5.out += "<!--]-->";
                                } else {
                                  $$payload5.out += "<!--]!-->";
                                }
                                $$payload5.out += "<!--]!-->";
                              }
                              $$payload5.out += "<!--]!-->";
                            }
                            $$payload5.out += "<!--]!-->";
                          }
                        }
                        $$payload5.out += `<!--]--> ${escape(filter.value)} <div class="relative h-4 w-4 ml-2 z-50">`;
                        push_element("div", $$payload5);
                        $$payload5.out += `<!--[-->`;
                        validate_component(X)($$payload5, { class: "h-4 w-4" });
                        $$payload5.out += `<!--]--></div>`;
                        pop_element();
                      })
                    });
                    $$payload4.out += `<!--]-->`;
                  })
                });
                $$payload3.out += `<!--]--> <!--[-->`;
                validate_component(Dropdown_menu_content)($$payload3, {
                  class: "p-6",
                  children: add_snippet_symbol(($$payload4, $$slotProps2) => {
                    $$payload4.out += `<!--[-->`;
                    validate_component(Root$2)($$payload4, {
                      onSelectedChange: getFilterOnSelectedChangeFunc(filterableItem.id, filter),
                      children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                        $$payload5.out += `<!--[-->`;
                        validate_component(Select_trigger)($$payload5, {
                          class: "w-[9rem] mb-4",
                          children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                            $$payload6.out += `<!--[-->`;
                            {
                              $$payload6.out += `<!--[-->`;
                              if (filter.operator === "gt") {
                                $$payload6.out += `greater (>)`;
                                $$payload6.out += "<!--]-->";
                              } else {
                                $$payload6.out += `<!--[-->`;
                                if (filter.operator === "lt") {
                                  $$payload6.out += `less (&lt;)`;
                                  $$payload6.out += "<!--]-->";
                                } else {
                                  $$payload6.out += `<!--[-->`;
                                  if (filter.operator === "eq") {
                                    $$payload6.out += `equal (=)`;
                                    $$payload6.out += "<!--]-->";
                                  } else {
                                    $$payload6.out += `<!--[-->`;
                                    if (filter.operator === "ne") {
                                      $$payload6.out += `not equal (≠)`;
                                      $$payload6.out += "<!--]-->";
                                    } else {
                                      $$payload6.out += "<!--]!-->";
                                    }
                                    $$payload6.out += "<!--]!-->";
                                  }
                                  $$payload6.out += "<!--]!-->";
                                }
                                $$payload6.out += "<!--]!-->";
                              }
                            }
                            $$payload6.out += `<!--]-->`;
                          })
                        });
                        $$payload5.out += `<!--]--> <!--[-->`;
                        validate_component(Select_content)($$payload5, {
                          class: "w-[4rem]",
                          children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                            $$payload6.out += `<!--[-->`;
                            validate_component(Select_item)($$payload6, {
                              value: "gt",
                              children: add_snippet_symbol(($$payload7, $$slotProps5) => {
                                $$payload7.out += `greater (>)`;
                              })
                            });
                            $$payload6.out += `<!--]--> <!--[-->`;
                            validate_component(Select_item)($$payload6, {
                              value: "lt",
                              children: add_snippet_symbol(($$payload7, $$slotProps5) => {
                                $$payload7.out += `less (&lt;)`;
                              })
                            });
                            $$payload6.out += `<!--]--> <!--[-->`;
                            validate_component(Select_item)($$payload6, {
                              value: "eq",
                              children: add_snippet_symbol(($$payload7, $$slotProps5) => {
                                $$payload7.out += `equal (=)`;
                              })
                            });
                            $$payload6.out += `<!--]--> <!--[-->`;
                            validate_component(Select_item)($$payload6, {
                              value: "ne",
                              children: add_snippet_symbol(($$payload7, $$slotProps5) => {
                                $$payload7.out += `not equal (≠)`;
                              })
                            });
                            $$payload6.out += `<!--]-->`;
                          })
                        });
                        $$payload5.out += `<!--]-->`;
                      })
                    });
                    $$payload4.out += `<!--]--> <!--[-->`;
                    validate_component(Input)($$payload4, {
                      placeholder: "0",
                      type: "number",
                      class: "w-[9rem]"
                    });
                    $$payload4.out += `<!--]-->`;
                  })
                });
                $$payload3.out += `<!--]-->`;
              })
            });
            $$payload2.out += `<!--]-->`;
            $$payload2.out += "<!--]-->";
          }
          $$payload2.out += "<!--]-->";
          $$payload2.out += "<!--]-->";
        } else {
          $$payload2.out += "<!--]!-->";
        }
        $$payload2.out += "<!--]-->";
      }
      $$payload2.out += "<!--]-->";
      $$payload2.out += `</div>`;
      pop_element();
      $$payload2.out += "<!--]-->";
    } else {
      $$payload2.out += "<!--]!-->";
    }
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { data });
  pop();
}
FilterHeader.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  FilterHeader as F,
  User as U,
  Users_round as a
};
