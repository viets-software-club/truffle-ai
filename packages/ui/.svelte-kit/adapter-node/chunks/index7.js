import { p as push, m as spread_props, c as slot, b as pop, n as sanitize_props, y as getContext, s as setContext, o as rest_props, v as value_or_fallback, i as store_get, w as spread_attributes, d as push_element, g as escape, e as pop_element, u as unsubscribe_stores, q as bind_props, z as mutate_store, k as copy_payload, l as assign_payload, t as ensure_array_like } from "./index3.js";
import { I as Icon, f as fade, X, C as Check, B as Badge } from "./index6.js";
import { v as validate_component, a as add_snippet_symbol } from "./validate.js";
import { o as onDestroy, t as tick } from "./index-server.js";
import { w as writable, d as derived, g as get_store_value, r as readable } from "./index2.js";
import { nanoid } from "nanoid/non-secure";
import "dequal";
import { c as cn, D as Dialog_title$1, i as Dialog_portal$1, j as Dialog_overlay$1, g as flyAndScale, k as Dialog_content$1, l as Dialog_close, m as Dialog_description$1, n as Dialog, o as Dialog_trigger, P as Popover_content$1, p as Popover, q as Popover_trigger } from "./index5.js";
import { B as Button } from "./index9.js";
import { a as PUBLIC_GATEWAY_GRAPHQL_URL, s as supabaseClient } from "./index4.js";
import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client/core/index.js";
import { setContext as setContext$1 } from "@apollo/client/link/context/index.js";
import { I as Input } from "./input.js";
import "./Toaster.js";
function Chevrons_up_down($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "m7 15 5 5 5-5" }],
    ["path", { "d": "m7 9 5-5 5 5" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "chevrons-up-down" },
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
Chevrons_up_down.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Search($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "circle",
      { "cx": "11", "cy": "11", "r": "8" }
    ],
    ["path", { "d": "m21 21-4.3-4.3" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "search" },
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
Search.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const SCORE_CONTINUE_MATCH = 1, SCORE_SPACE_WORD_JUMP = 0.9, SCORE_NON_SPACE_WORD_JUMP = 0.8, SCORE_CHARACTER_JUMP = 0.17, SCORE_TRANSPOSITION = 0.1, PENALTY_SKIPPED = 0.999, PENALTY_CASE_MISMATCH = 0.9999, PENALTY_NOT_COMPLETE = 0.99;
const IS_GAP_REGEXP = /[\\/_+.#"@[({&]/, COUNT_GAPS_REGEXP = /[\\/_+.#"@[({&]/g, IS_SPACE_REGEXP = /[\s-]/, COUNT_SPACE_REGEXP = /[\s-]/g;
function commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, stringIndex, abbreviationIndex, memoizedResults) {
  if (abbreviationIndex === abbreviation.length) {
    if (stringIndex === string.length) {
      return SCORE_CONTINUE_MATCH;
    }
    return PENALTY_NOT_COMPLETE;
  }
  const memoizeKey = `${stringIndex},${abbreviationIndex}`;
  if (memoizedResults[memoizeKey] !== void 0) {
    return memoizedResults[memoizeKey];
  }
  const abbreviationChar = lowerAbbreviation.charAt(abbreviationIndex);
  let index = lowerString.indexOf(abbreviationChar, stringIndex);
  let highScore = 0;
  let score, transposedScore, wordBreaks, spaceBreaks;
  while (index >= 0) {
    score = commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, index + 1, abbreviationIndex + 1, memoizedResults);
    if (score > highScore) {
      if (index === stringIndex) {
        score *= SCORE_CONTINUE_MATCH;
      } else if (IS_GAP_REGEXP.test(string.charAt(index - 1))) {
        score *= SCORE_NON_SPACE_WORD_JUMP;
        wordBreaks = string.slice(stringIndex, index - 1).match(COUNT_GAPS_REGEXP);
        if (wordBreaks && stringIndex > 0) {
          score *= Math.pow(PENALTY_SKIPPED, wordBreaks.length);
        }
      } else if (IS_SPACE_REGEXP.test(string.charAt(index - 1))) {
        score *= SCORE_SPACE_WORD_JUMP;
        spaceBreaks = string.slice(stringIndex, index - 1).match(COUNT_SPACE_REGEXP);
        if (spaceBreaks && stringIndex > 0) {
          score *= Math.pow(PENALTY_SKIPPED, spaceBreaks.length);
        }
      } else {
        score *= SCORE_CHARACTER_JUMP;
        if (stringIndex > 0) {
          score *= Math.pow(PENALTY_SKIPPED, index - stringIndex);
        }
      }
      if (string.charAt(index) !== abbreviation.charAt(abbreviationIndex)) {
        score *= PENALTY_CASE_MISMATCH;
      }
    }
    if (score < SCORE_TRANSPOSITION && lowerString.charAt(index - 1) === lowerAbbreviation.charAt(abbreviationIndex + 1) || lowerAbbreviation.charAt(abbreviationIndex + 1) === lowerAbbreviation.charAt(abbreviationIndex) && // allow duplicate letters. Ref #7428
    lowerString.charAt(index - 1) !== lowerAbbreviation.charAt(abbreviationIndex)) {
      transposedScore = commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, index + 1, abbreviationIndex + 2, memoizedResults);
      if (transposedScore * SCORE_TRANSPOSITION > score) {
        score = transposedScore * SCORE_TRANSPOSITION;
      }
    }
    if (score > highScore) {
      highScore = score;
    }
    index = lowerString.indexOf(abbreviationChar, index + 1);
  }
  memoizedResults[memoizeKey] = highScore;
  return highScore;
}
function formatInput(string) {
  return string.toLowerCase().replace(COUNT_SPACE_REGEXP, " ");
}
function commandScore(string, abbreviation) {
  return commandScoreInner(string, abbreviation, formatInput(string), formatInput(abbreviation), 0, 0, {});
}
const isBrowser = typeof document !== "undefined";
function isUndefined(value) {
  return value === void 0;
}
function generateId() {
  return nanoid(10);
}
const kbd$1 = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*"
};
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = writable(value);
  });
  return result;
}
function effect(stores, fn) {
  const unsub = derivedWithUnsubscribe(stores, (stores2, onUnsubscribe) => {
    return {
      stores: stores2,
      onUnsubscribe
    };
  }).subscribe(({ stores: stores2, onUnsubscribe }) => {
    const returned = fn(stores2);
    if (returned) {
      onUnsubscribe(returned);
    }
  });
  onDestroy(unsub);
  return unsub;
}
function derivedWithUnsubscribe(stores, fn) {
  let unsubscribers = [];
  const onUnsubscribe = (cb) => {
    unsubscribers.push(cb);
  };
  const unsubscribe = () => {
    unsubscribers.forEach((fn2) => fn2());
    unsubscribers = [];
  };
  const derivedStore = derived(stores, ($storeValues) => {
    unsubscribe();
    return fn($storeValues, onUnsubscribe);
  });
  onDestroy(unsubscribe);
  const subscribe = (...args) => {
    const unsub = derivedStore.subscribe(...args);
    return () => {
      unsub();
      unsubscribe();
    };
  };
  return {
    ...derivedStore,
    subscribe
  };
}
function styleToString$2(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
const srOnlyStyles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0"
};
function addEventListener$1(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
const NAME$m = "Command";
const STATE_NAME = "CommandState";
const GROUP_NAME = "CommandGroup";
const LIST_SELECTOR = `[data-cmdk-list-sizer]`;
const GROUP_SELECTOR = `[data-cmdk-group]`;
const GROUP_ITEMS_SELECTOR = `[data-cmdk-group-items]`;
const GROUP_HEADING_SELECTOR = `[data-cmdk-group-heading]`;
const ITEM_SELECTOR = `[data-cmdk-item]`;
const VALID_ITEM_SELECTOR = `${ITEM_SELECTOR}:not([aria-disabled="true"])`;
const VALUE_ATTR = `data-value`;
const defaultFilter = (value, search) => commandScore(value, search);
function getCtx() {
  return getContext(NAME$m);
}
function getState() {
  return getContext(STATE_NAME);
}
function createGroup(alwaysRender) {
  const id = generateId();
  setContext(GROUP_NAME, {
    id,
    alwaysRender: isUndefined(alwaysRender) ? false : alwaysRender
  });
  return { id };
}
function getGroup() {
  const context = getContext(GROUP_NAME);
  if (!context)
    return void 0;
  return context;
}
function createState(initialValues) {
  const defaultState = {
    search: "",
    value: "",
    filtered: {
      count: 0,
      items: /* @__PURE__ */ new Map(),
      groups: /* @__PURE__ */ new Set()
    }
  };
  const state = writable(initialValues ? { ...defaultState, ...removeUndefined(initialValues) } : defaultState);
  return state;
}
const defaults = {
  label: "Command menu",
  shouldFilter: true,
  loop: false,
  onValueChange: void 0,
  value: void 0,
  filter: defaultFilter,
  ids: {
    root: generateId(),
    list: generateId(),
    label: generateId(),
    input: generateId()
  }
};
function createCommand(props) {
  const ids = {
    root: generateId(),
    list: generateId(),
    label: generateId(),
    input: generateId(),
    ...props.ids
  };
  const withDefaults = {
    ...defaults,
    ...removeUndefined(props)
  };
  const state = props.state ?? createState({
    value: withDefaults.value
  });
  const allItems = writable(/* @__PURE__ */ new Set());
  const allGroups = writable(/* @__PURE__ */ new Map());
  const allIds = writable(/* @__PURE__ */ new Map());
  const commandEl = writable(null);
  const options = toWritableStores(omit(withDefaults, "value", "ids"));
  let $allItems = get_store_value(allItems);
  let $allGroups = get_store_value(allGroups);
  let $allIds = get_store_value(allIds);
  let shouldFilter = get_store_value(options.shouldFilter);
  let loop = get_store_value(options.loop);
  let label = get_store_value(options.label);
  let filter = get_store_value(options.filter);
  effect(options.shouldFilter, ($shouldFilter) => {
    shouldFilter = $shouldFilter;
  });
  effect(options.loop, ($loop) => {
    loop = $loop;
  });
  effect(options.filter, ($filter) => {
    filter = $filter;
  });
  effect(options.label, ($label) => {
    label = $label;
  });
  effect(allItems, (v) => {
    $allItems = v;
  });
  effect(allGroups, (v) => {
    $allGroups = v;
  });
  effect(allIds, (v) => {
    $allIds = v;
  });
  const context = {
    value: (id, value) => {
      if (value !== $allIds.get(id)) {
        allIds.update(($allIds2) => {
          $allIds2.set(id, value);
          return $allIds2;
        });
        state.update(($state) => {
          $state.filtered.items.set(id, score(value, $state.search));
          return $state;
        });
      }
    },
    // Track item lifecycle (add/remove)
    item: (id, groupId) => {
      allItems.update(($allItems2) => $allItems2.add(id));
      if (groupId) {
        allGroups.update(($allGroups2) => {
          if (!$allGroups2.has(groupId)) {
            $allGroups2.set(groupId, /* @__PURE__ */ new Set([id]));
          } else {
            $allGroups2.get(groupId)?.add(id);
          }
          return $allGroups2;
        });
      }
      state.update(($state) => {
        const filteredState = filterItems($state, shouldFilter);
        if (!filteredState.value) {
          const value = selectFirstItem();
          filteredState.value = value ?? "";
        }
        return filteredState;
      });
      return () => {
        allIds.update(($allIds2) => {
          $allIds2.delete(id);
          return $allIds2;
        });
        allItems.update(($allItems2) => {
          $allItems2.delete(id);
          return $allItems2;
        });
        state.update(($state) => {
          $state.filtered.items.delete(id);
          const selectedItem = getSelectedItem();
          const filteredState = filterItems($state);
          if (selectedItem?.getAttribute("id") === id) {
            filteredState.value = selectFirstItem() ?? "";
          }
          return $state;
        });
      };
    },
    group: (id) => {
      allGroups.update(($allGroups2) => {
        if (!$allGroups2.has(id)) {
          $allGroups2.set(id, /* @__PURE__ */ new Set());
        }
        return $allGroups2;
      });
      return () => {
        allIds.update(($allIds2) => {
          $allIds2.delete(id);
          return $allIds2;
        });
        allGroups.update(($allGroups2) => {
          $allGroups2.delete(id);
          return $allGroups2;
        });
      };
    },
    filter: () => {
      return shouldFilter;
    },
    label: label || props["aria-label"] || "",
    commandEl,
    ids,
    updateState
  };
  function updateState(key, value, preventScroll) {
    state.update((curr) => {
      if (Object.is(curr[key], value))
        return curr;
      curr[key] = value;
      if (key === "search") {
        const filteredState = filterItems(curr, shouldFilter);
        curr = filteredState;
        const sortedState = sort(curr, shouldFilter);
        curr = sortedState;
        tick().then(() => state.update((curr2) => {
          curr2.value = selectFirstItem() ?? "";
          return curr2;
        }));
      } else if (key === "value") {
        props.onValueChange?.(curr.value);
        if (!preventScroll) {
          tick().then(() => scrollSelectedIntoView());
        }
      }
      return curr;
    });
  }
  function filterItems(state2, shouldFilterVal) {
    const $shouldFilter = shouldFilterVal ?? shouldFilter;
    if (!state2.search || !$shouldFilter) {
      state2.filtered.count = $allItems.size;
      return state2;
    }
    state2.filtered.groups = /* @__PURE__ */ new Set();
    let itemCount = 0;
    for (const id of $allItems) {
      const value = $allIds.get(id);
      const rank = score(value, state2.search);
      state2.filtered.items.set(id, rank);
      if (rank > 0) {
        itemCount++;
      }
    }
    for (const [groupId, group] of $allGroups) {
      for (const itemId of group) {
        const rank = state2.filtered.items.get(itemId);
        if (rank && rank > 0) {
          state2.filtered.groups.add(groupId);
        }
      }
    }
    state2.filtered.count = itemCount;
    return state2;
  }
  function sort(state2, shouldFilterVal) {
    const $shouldFilter = shouldFilterVal ?? shouldFilter;
    if (!state2.search || !$shouldFilter) {
      return state2;
    }
    const scores = state2.filtered.items;
    const groups = [];
    for (const value of state2.filtered.groups) {
      const items = $allGroups.get(value);
      if (!items)
        continue;
      let max = 0;
      for (const item of items) {
        const score2 = scores.get(item);
        if (isUndefined(score2))
          continue;
        max = Math.max(score2, max);
      }
      groups.push([value, max]);
    }
    const rootEl = document.getElementById(ids.root);
    if (!rootEl)
      return state2;
    const list = rootEl.querySelector(LIST_SELECTOR);
    const validItems = getValidItems(rootEl).sort((a, b) => {
      const valueA = a.getAttribute(VALUE_ATTR) ?? "";
      const valueB = b.getAttribute(VALUE_ATTR) ?? "";
      return (scores.get(valueA) ?? 0) - (scores.get(valueB) ?? 0);
    });
    for (const item of validItems) {
      const group = item.closest(GROUP_ITEMS_SELECTOR);
      const closest = item.closest(`${GROUP_ITEMS_SELECTOR} > *`);
      if (group) {
        if (item.parentElement === group) {
          group.appendChild(item);
        } else {
          if (!closest)
            continue;
          group.appendChild(closest);
        }
      } else {
        if (item.parentElement === list) {
          list?.appendChild(item);
        } else {
          if (!closest)
            continue;
          list?.appendChild(closest);
        }
      }
    }
    groups.sort((a, b) => b[1] - a[1]);
    for (const group of groups) {
      const el = rootEl.querySelector(`${GROUP_SELECTOR}[${VALUE_ATTR}="${group[0]}"]`);
      el?.parentElement?.appendChild(el);
    }
    return state2;
  }
  function selectFirstItem() {
    const item = getValidItems().find((item2) => !item2.ariaDisabled);
    if (!item)
      return;
    const value = item.getAttribute(VALUE_ATTR);
    if (!value)
      return;
    return value;
  }
  function score(value, search) {
    const lowerCaseAndTrimmedValue = value?.toLowerCase().trim();
    const filterFn = filter;
    if (!filterFn) {
      return lowerCaseAndTrimmedValue ? defaultFilter(lowerCaseAndTrimmedValue, search) : 0;
    }
    return lowerCaseAndTrimmedValue ? filterFn(lowerCaseAndTrimmedValue, search) : 0;
  }
  function scrollSelectedIntoView() {
    const item = getSelectedItem();
    if (!item) {
      return;
    }
    if (item.parentElement?.firstChild === item) {
      tick().then(() => item.closest(GROUP_SELECTOR)?.querySelector(GROUP_HEADING_SELECTOR)?.scrollIntoView({
        block: "nearest"
      }));
    }
    tick().then(() => item.scrollIntoView({ block: "nearest" }));
  }
  function getValidItems(rootElement) {
    const rootEl = rootElement ?? document.getElementById(ids.root);
    if (!rootEl)
      return [];
    return Array.from(rootEl.querySelectorAll(VALID_ITEM_SELECTOR)).filter((el) => el ? true : false);
  }
  function getSelectedItem(rootElement) {
    const rootEl = rootElement ?? document.getElementById(ids.root);
    if (!rootEl)
      return;
    const selectedEl = rootEl.querySelector(`${VALID_ITEM_SELECTOR}[aria-selected="true"]`);
    if (!selectedEl)
      return;
    return selectedEl;
  }
  function updateSelectedToIndex(index) {
    const rootEl = document.getElementById(ids.root);
    if (!rootEl)
      return;
    const items = getValidItems(rootEl);
    const item = items[index];
    if (!item)
      return;
  }
  function updateSelectedByChange(change) {
    const selected = getSelectedItem();
    const items = getValidItems();
    const index = items.findIndex((item) => item === selected);
    let newSelected = items[index + change];
    if (loop) {
      if (index + change < 0) {
        newSelected = items[items.length - 1];
      } else if (index + change === items.length) {
        newSelected = items[0];
      } else {
        newSelected = items[index + change];
      }
    }
    if (newSelected) {
      updateState("value", newSelected.getAttribute(VALUE_ATTR) ?? "");
    }
  }
  function updateSelectedToGroup(change) {
    const selected = getSelectedItem();
    let group = selected?.closest(GROUP_SELECTOR);
    let item = void 0;
    while (group && !item) {
      group = change > 0 ? findNextSibling(group, GROUP_SELECTOR) : findPreviousSibling(group, GROUP_SELECTOR);
      item = group?.querySelector(VALID_ITEM_SELECTOR);
    }
    if (item) {
      updateState("value", item.getAttribute(VALUE_ATTR) ?? "");
    } else {
      updateSelectedByChange(change);
    }
  }
  function last() {
    return updateSelectedToIndex(getValidItems().length - 1);
  }
  function next(e) {
    e.preventDefault();
    if (e.metaKey) {
      last();
    } else if (e.altKey) {
      updateSelectedToGroup(1);
    } else {
      updateSelectedByChange(1);
    }
  }
  function prev(e) {
    e.preventDefault();
    if (e.metaKey) {
      updateSelectedToIndex(0);
    } else if (e.altKey) {
      updateSelectedToGroup(-1);
    } else {
      updateSelectedByChange(-1);
    }
  }
  function handleRootKeydown(e) {
    switch (e.key) {
      case kbd$1.ARROW_DOWN:
        next(e);
        break;
      case kbd$1.ARROW_UP:
        prev(e);
        break;
      case kbd$1.HOME:
        e.preventDefault();
        updateSelectedToIndex(0);
        break;
      case kbd$1.END:
        e.preventDefault();
        last();
        break;
      case kbd$1.ENTER: {
        e.preventDefault();
        const item = getSelectedItem();
        if (item) {
          item?.click();
        }
      }
    }
  }
  setContext(NAME$m, context);
  const stateStore = {
    subscribe: state.subscribe,
    update: state.update,
    set: state.set,
    updateState
  };
  setContext(STATE_NAME, stateStore);
  return {
    state: stateStore,
    handleRootKeydown,
    commandEl,
    ids
  };
}
function findNextSibling(el, selector) {
  let sibling = el.nextElementSibling;
  while (sibling) {
    if (sibling.matches(selector))
      return sibling;
    sibling = sibling.nextElementSibling;
  }
}
function findPreviousSibling(el, selector) {
  let sibling = el.previousElementSibling;
  while (sibling) {
    if (sibling.matches(selector))
      return sibling;
    sibling = sibling.previousElementSibling;
  }
}
function Command$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "label",
    "shouldFilter",
    "filter",
    "value",
    "onValueChange",
    "loop",
    "onKeydown",
    "state",
    "ids",
    "asChild",
    "$$props"
  ]);
  push();
  var $$store_subs;
  let slotProps;
  let label = value_or_fallback($$props["label"], void 0);
  let shouldFilter = value_or_fallback($$props["shouldFilter"], true);
  let filter = value_or_fallback($$props["filter"], void 0);
  let value = value_or_fallback($$props["value"], void 0);
  let onValueChange = value_or_fallback($$props["onValueChange"], void 0);
  let loop = value_or_fallback($$props["loop"], void 0);
  let onKeydown = value_or_fallback($$props["onKeydown"], void 0);
  let state = value_or_fallback($$props["state"], void 0);
  let ids = value_or_fallback($$props["ids"], void 0);
  let asChild = value_or_fallback($$props["asChild"], false);
  const {
    commandEl,
    handleRootKeydown,
    ids: commandIds,
    state: stateStore
  } = createCommand({
    label,
    shouldFilter,
    filter,
    value,
    onValueChange: (next) => {
      if (next !== value) {
        value = next;
        onValueChange?.(next);
      }
    },
    loop,
    state,
    ids
  });
  function syncValueAndState(value2) {
    if (value2 && value2 !== store_get($$store_subs ??= {}, "$stateStore", stateStore).value) {
      mutate_store($$store_subs ??= {}, "$stateStore", stateStore, store_get($$store_subs ??= {}, "$stateStore", stateStore).value = value2);
    }
  }
  function rootAction(node) {
    commandEl.set(node);
    const unsubEvents = executeCallbacks(addEventListener$1(node, "keydown", handleKeydown));
    return { destroy: unsubEvents };
  }
  const rootAttrs = {
    role: "application",
    id: commandIds.root,
    "data-cmdk-root": ""
  };
  const labelAttrs = {
    "data-cmdk-label": "",
    for: commandIds.input,
    id: commandIds.label,
    style: styleToString$2(srOnlyStyles)
  };
  function handleKeydown(e) {
    onKeydown?.(e);
    if (e.defaultPrevented)
      return;
    handleRootKeydown(e);
  }
  const root = { action: rootAction, attrs: rootAttrs };
  syncValueAndState(value);
  slotProps = {
    root,
    label: { attrs: labelAttrs },
    stateStore,
    state: store_get($$store_subs ??= {}, "$stateStore", stateStore)
  };
  $$payload.out += `<!--[-->`;
  if (asChild) {
    $$payload.out += `<!--[-->`;
    slot($$payload, $$props.children, spread_props([{}, slotProps]), null);
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<div${spread_attributes([rootAttrs, $$restProps], true, false, "")}>`;
    push_element("div", $$payload);
    $$payload.out += `<label${spread_attributes([labelAttrs], true, false, "")}>`;
    push_element("label", $$payload);
    $$payload.out += `${escape(label ?? "")}</label>`;
    pop_element();
    $$payload.out += ` <!--[-->`;
    slot($$payload, $$props.children, spread_props([{}, slotProps]), null);
    $$payload.out += `<!--]--></div>`;
    pop_element();
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  bind_props($$props, {
    label,
    shouldFilter,
    filter,
    value,
    onValueChange,
    loop,
    onKeydown,
    state,
    ids,
    asChild
  });
  pop();
}
Command$1.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function styleToString$1(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
({
  type: "hidden",
  "aria-hidden": true,
  hidden: true,
  tabIndex: -1,
  style: styleToString$1({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
const kbd = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p"
};
readable(void 0, (set) => {
  function clicked(event) {
    set(event);
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "pointerup", clicked, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
readable(void 0, (set) => {
  function keydown(event) {
    if (event && event.key === kbd.ESCAPE) {
      set(event);
    }
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "keydown", keydown, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
function createBitAttrs(bit, parts) {
  const attrs = {};
  parts.forEach((part) => {
    attrs[part] = {
      [`data-bits-${bit}-${part}`]: ""
    };
  });
  return (part) => attrs[part];
}
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
styleToString({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0"
});
styleToString({
  position: "absolute",
  width: "25px",
  height: "25px",
  opacity: "0",
  margin: "0px",
  pointerEvents: "none",
  transform: "translateX(-100%)"
});
const NAME$l = "accordion";
const PARTS$l = ["root", "content", "header", "item", "trigger"];
createBitAttrs(NAME$l, PARTS$l);
const NAME$k = "alert-dialog";
const PARTS$k = [
  "action",
  "cancel",
  "content",
  "description",
  "overlay",
  "portal",
  "title",
  "trigger"
];
createBitAttrs(NAME$k, PARTS$k);
const NAME$j = "avatar";
const PARTS$j = ["root", "image", "fallback"];
createBitAttrs(NAME$j, PARTS$j);
const NAME$i = "checkbox";
const PARTS$i = ["root", "input", "indicator"];
createBitAttrs(NAME$i, PARTS$i);
const NAME$h = "collapsible";
const PARTS$h = ["root", "content", "trigger"];
createBitAttrs(NAME$h, PARTS$h);
const NAME$g = "context-menu";
const PARTS$g = [
  "arrow",
  "checkbox-indicator",
  "checkbox-item",
  "content",
  "group",
  "item",
  "label",
  "radio-group",
  "radio-item",
  "separator",
  "sub-content",
  "sub-trigger",
  "trigger"
];
createBitAttrs(NAME$g, PARTS$g);
const NAME$f = "dialog";
const PARTS$f = ["close", "content", "description", "overlay", "portal", "title", "trigger"];
createBitAttrs(NAME$f, PARTS$f);
const NAME$e = "dropdown-menu";
const PARTS$e = [
  "arrow",
  "checkbox-indicator",
  "checkbox-item",
  "content",
  "group",
  "item",
  "label",
  "radio-group",
  "radio-item",
  "separator",
  "sub-content",
  "sub-trigger",
  "trigger"
];
createBitAttrs(NAME$e, PARTS$e);
const NAME$d = "link-preview";
const PARTS$d = ["arrow", "content", "trigger"];
createBitAttrs(NAME$d, PARTS$d);
const NAME$c = "label";
const PARTS$c = ["root"];
createBitAttrs(NAME$c, PARTS$c);
const NAME$b = "menubar";
const PARTS$b = [
  "root",
  "arrow",
  "checkbox-indicator",
  "checkbox-item",
  "content",
  "group",
  "item",
  "label",
  "radio-group",
  "radio-item",
  "separator",
  "sub-content",
  "sub-trigger",
  "trigger"
];
createBitAttrs(NAME$b, PARTS$b);
const NAME$a = "popover";
const PARTS$a = ["arrow", "close", "content", "trigger"];
createBitAttrs(NAME$a, PARTS$a);
const NAME$9 = "progress";
const PARTS$9 = ["root"];
createBitAttrs(NAME$9, PARTS$9);
const NAME$8 = "radio-group";
const PARTS$8 = ["root", "item", "input"];
createBitAttrs(NAME$8, PARTS$8);
const NAME$7 = "select";
const PARTS$7 = ["arrow", "content", "group", "item", "input", "label", "trigger", "value"];
createBitAttrs(NAME$7, PARTS$7);
const NAME$6 = "separator";
const PARTS$6 = ["root"];
createBitAttrs(NAME$6, PARTS$6);
const NAME$5 = "slider";
const PARTS$5 = ["root", "input", "range", "thumb", "tick"];
createBitAttrs(NAME$5, PARTS$5);
const NAME$4 = "switch";
const PARTS$4 = ["root", "input", "thumb"];
createBitAttrs(NAME$4, PARTS$4);
const NAME$3 = "tabs";
const PARTS$3 = ["root", "content", "list", "trigger"];
createBitAttrs(NAME$3, PARTS$3);
const NAME$2 = "toggle";
const PARTS$2 = ["root", "input"];
createBitAttrs(NAME$2, PARTS$2);
const NAME$1 = "toggle-group";
const PARTS$1 = ["root", "item"];
createBitAttrs(NAME$1, PARTS$1);
const NAME = "tooltip";
const PARTS = ["arrow", "content", "trigger"];
createBitAttrs(NAME, PARTS);
function CommandGroup($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "heading",
    "value",
    "alwaysRender",
    "asChild",
    "$$props"
  ]);
  push();
  var $$store_subs;
  let containerAttrs, groupAttrs, container, group;
  let heading = value_or_fallback($$props["heading"], void 0);
  let value = value_or_fallback($$props["value"], "");
  let alwaysRender = value_or_fallback($$props["alwaysRender"], false);
  let asChild = value_or_fallback($$props["asChild"], false);
  const { id } = createGroup(alwaysRender);
  const context = getCtx();
  const state = getState();
  const headingId = generateId();
  const render = derived(state, ($state) => {
    if (alwaysRender)
      return true;
    if (context.filter() === false)
      return true;
    if (!$state.search)
      return true;
    return $state.filtered.groups.has(id);
  });
  function containerAction(node) {
    if (value) {
      context.value(id, value);
      node.setAttribute(VALUE_ATTR, value);
      return;
    }
    if (heading) {
      value = heading.trim().toLowerCase();
    } else if (node.textContent) {
      value = node.textContent.trim().toLowerCase();
    }
    context.value(id, value);
    node.setAttribute(VALUE_ATTR, value);
  }
  const headingAttrs = {
    "data-cmdk-group-heading": "",
    "aria-hidden": true,
    id: headingId
  };
  containerAttrs = {
    "data-cmdk-group": "",
    role: "presentation",
    hidden: store_get($$store_subs ??= {}, "$render", render) ? void 0 : true,
    "data-value": value
  };
  groupAttrs = {
    "data-cmdk-group-items": "",
    role: "group",
    "aria-labelledby": heading ? headingId : void 0
  };
  container = {
    action: containerAction,
    attrs: containerAttrs
  };
  group = { attrs: groupAttrs };
  $$payload.out += `<!--[-->`;
  if (asChild) {
    $$payload.out += `<!--[-->`;
    slot(
      $$payload,
      $$props.children,
      {
        get container() {
          return container;
        },
        get group() {
          return group;
        },
        heading: { attrs: headingAttrs }
      },
      null
    );
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<div${spread_attributes([containerAttrs, $$restProps], true, false, "")}>`;
    push_element("div", $$payload);
    $$payload.out += `<!--[-->`;
    if (heading) {
      $$payload.out += `<div${spread_attributes([headingAttrs], true, false, "")}>`;
      push_element("div", $$payload);
      $$payload.out += `${escape(heading)}</div>`;
      pop_element();
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += ` <div${spread_attributes([groupAttrs], true, false, "")}>`;
    push_element("div", $$payload);
    $$payload.out += `<!--[-->`;
    slot(
      $$payload,
      $$props.children,
      {
        get container() {
          return container;
        },
        get group() {
          return group;
        },
        heading: { attrs: headingAttrs }
      },
      null
    );
    $$payload.out += `<!--]--></div>`;
    pop_element();
    $$payload.out += `</div>`;
    pop_element();
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  bind_props($$props, { heading, value, alwaysRender, asChild });
  pop();
}
CommandGroup.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function CommandInput($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "autofocus",
    "value",
    "asChild",
    "el",
    "$$props"
  ]);
  push();
  var $$store_subs;
  const { ids, commandEl } = getCtx();
  const state = getState();
  const search = derived(state, ($state) => $state.search);
  const valueStore = derived(state, ($state) => $state.value);
  let autofocus = value_or_fallback($$props["autofocus"], void 0);
  let value = value_or_fallback($$props["value"], get_store_value(search));
  let asChild = value_or_fallback($$props["asChild"], false);
  let el = value_or_fallback($$props["el"], void 0);
  const selectedItemId = derived([valueStore, commandEl], ([$value, $commandEl]) => {
    if (!isBrowser)
      return void 0;
    const item = $commandEl?.querySelector(`${ITEM_SELECTOR}[${VALUE_ATTR}="${$value}"]`);
    return item?.getAttribute("id");
  });
  function handleValueUpdate(v) {
    state.updateState("search", v);
  }
  function action(node) {
    if (autofocus) {
      sleep(10).then(() => node.focus());
    }
    if (asChild) {
      const unsubEvents = addEventListener$1(node, "change", (e) => {
        const currTarget = e.currentTarget;
        state.updateState("search", currTarget.value);
      });
      return { destroy: unsubEvents };
    }
  }
  let attrs;
  handleValueUpdate(value);
  attrs = {
    type: "text",
    "data-cmdk-input": "",
    autocomplete: "off",
    autocorrect: "off",
    spellcheck: false,
    "aria-autocomplete": "list",
    role: "combobox",
    "aria-expanded": true,
    "aria-controls": ids.list,
    "aria-labelledby": ids.label,
    "aria-activedescendant": store_get($$store_subs ??= {}, "$selectedItemId", selectedItemId) ?? void 0,
    id: ids.input
  };
  $$payload.out += `<!--[-->`;
  if (asChild) {
    $$payload.out += `<!--[-->`;
    slot(
      $$payload,
      $$props.children,
      {
        action,
        get attrs() {
          return attrs;
        }
      },
      null
    );
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<input${spread_attributes([attrs, { "value": value }, $$restProps], true, false, "")}>`;
    push_element("input", $$payload);
    pop_element();
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  bind_props($$props, { autofocus, value, asChild, el });
  pop();
}
CommandInput.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function CommandItem($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "disabled",
    "value",
    "onSelect",
    "alwaysRender",
    "asChild",
    "id",
    "$$props"
  ]);
  push();
  var $$store_subs;
  let attrs;
  let disabled = value_or_fallback($$props["disabled"], false);
  let value = value_or_fallback($$props["value"], "");
  let onSelect = value_or_fallback($$props["onSelect"], void 0);
  let alwaysRender = value_or_fallback($$props["alwaysRender"], false);
  let asChild = value_or_fallback($$props["asChild"], false);
  let id = value_or_fallback($$props["id"], generateId());
  const groupContext = getGroup();
  const context = getCtx();
  const state = getState();
  const trueAlwaysRender = alwaysRender ?? groupContext?.alwaysRender;
  const render = derived(state, ($state) => {
    if (trueAlwaysRender || context.filter() === false || !$state.search)
      return true;
    const currentScore = $state.filtered.items.get(id);
    if (isUndefined(currentScore))
      return false;
    return currentScore > 0;
  });
  let isFirstRender = true;
  const selected = derived(state, ($state) => $state.value === value);
  function action(node) {
    if (!value && node.textContent) {
      value = node.textContent.trim().toLowerCase();
    }
    context.value(id, value);
    node.setAttribute(VALUE_ATTR, value);
    const unsubEvents = executeCallbacks(
      addEventListener$1(node, "pointermove", () => {
        if (disabled)
          return;
        select();
      }),
      addEventListener$1(node, "click", () => {
        if (disabled)
          return;
        handleItemClick();
      })
    );
    return {
      destroy() {
        unsubEvents();
      }
    };
  }
  function handleItemClick() {
    select();
    onSelect?.(value);
  }
  function select() {
    state.updateState("value", value, true);
  }
  attrs = {
    "aria-disabled": disabled ? true : void 0,
    "aria-selected": store_get($$store_subs ??= {}, "$selected", selected) ? true : void 0,
    "data-disabled": disabled ? true : void 0,
    "data-selected": store_get($$store_subs ??= {}, "$selected", selected) ? true : void 0,
    "data-cmdk-item": "",
    "data-value": value,
    role: "option",
    id
  };
  $$payload.out += `<!--[-->`;
  if (store_get($$store_subs ??= {}, "$render", render) || isFirstRender) {
    $$payload.out += `<!--[-->`;
    if (asChild) {
      $$payload.out += `<!--[-->`;
      slot(
        $$payload,
        $$props.children,
        {
          action,
          get attrs() {
            return attrs;
          }
        },
        null
      );
      $$payload.out += `<!--]-->`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += `<div${spread_attributes([attrs, $$restProps], true, false, "")}>`;
      push_element("div", $$payload);
      $$payload.out += `<!--[-->`;
      slot(
        $$payload,
        $$props.children,
        {
          action,
          get attrs() {
            return attrs;
          }
        },
        null
      );
      $$payload.out += `<!--]--></div>`;
      pop_element();
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  bind_props($$props, {
    disabled,
    value,
    onSelect,
    alwaysRender,
    asChild,
    id
  });
  pop();
}
CommandItem.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Command($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["value", "class", "$$props"]);
  push();
  let value = value_or_fallback($$props["value"], void 0);
  let className = value_or_fallback($$props["class"], void 0);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!--[-->`;
    validate_component(Command$1)($$payload2, spread_props([
      {
        class: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
        get value() {
          return value;
        },
        set value($$value) {
          value = $$value;
          $$settled = false;
        }
      },
      $$restProps,
      {
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
  bind_props($$props, { value, class: className });
  pop();
}
Command.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dialog_title($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(Dialog_title$1)($$payload, spread_props([
    {
      class: cn("text-lg font-semibold leading-none tracking-tight", className)
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
Dialog_title.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dialog_portal($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["$$props"]);
  push();
  $$payload.out += `<!--[-->`;
  validate_component(Dialog_portal$1)($$payload, spread_props([
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
  pop();
}
Dialog_portal.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dialog_footer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes(
    [
      {
        "class": cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
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
Dialog_footer.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dialog_header($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<div${spread_attributes(
    [
      {
        "class": cn("flex flex-col space-y-1.5 text-center sm:text-left", className)
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
Dialog_header.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dialog_overlay($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "transition",
    "transitionConfig",
    "$$props"
  ]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let transition = value_or_fallback($$props["transition"], fade);
  let transitionConfig = value_or_fallback($$props["transitionConfig"], { duration: 150 });
  $$payload.out += `<!--[-->`;
  validate_component(Dialog_overlay$1)($$payload, spread_props([
    {
      transition,
      transitionConfig,
      class: cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", className)
    },
    $$restProps
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    class: className,
    transition,
    transitionConfig
  });
  pop();
}
Dialog_overlay.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dialog_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "transition",
    "transitionConfig",
    "$$props"
  ]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let transition = value_or_fallback($$props["transition"], flyAndScale);
  let transitionConfig = value_or_fallback($$props["transitionConfig"], { duration: 200 });
  $$payload.out += `<!--[-->`;
  validate_component(Dialog_portal)($$payload, {
    children: add_snippet_symbol(($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      validate_component(Dialog_overlay)($$payload2, {});
      $$payload2.out += `<!--]--> <!--[-->`;
      validate_component(Dialog_content$1)($$payload2, spread_props([
        {
          transition,
          transitionConfig,
          class: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg md:w-full", className)
        },
        $$restProps,
        {
          children: add_snippet_symbol(($$payload3, $$slotProps2) => {
            $$payload3.out += `<!--[-->`;
            slot($$payload3, $$props.children, {}, null);
            $$payload3.out += `<!--]--> <!--[-->`;
            validate_component(Dialog_close)($$payload3, {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              children: add_snippet_symbol(($$payload4, $$slotProps3) => {
                $$payload4.out += `<!--[-->`;
                validate_component(X)($$payload4, { class: "h-4 w-4" });
                $$payload4.out += `<!--]--> <span class="sr-only">`;
                push_element("span", $$payload4);
                $$payload4.out += `Close</span>`;
                pop_element();
              })
            });
            $$payload3.out += `<!--]-->`;
          })
        }
      ]));
      $$payload2.out += `<!--]-->`;
    })
  });
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    class: className,
    transition,
    transitionConfig
  });
  pop();
}
Dialog_content.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Dialog_description($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(Dialog_description$1)($$payload, spread_props([
    {
      class: cn("text-sm text-muted-foreground", className)
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
Dialog_description.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const Root$1 = Dialog;
const Trigger$1 = Dialog_trigger;
function Command_group($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(CommandGroup)($$payload, spread_props([
    {
      class: cn("overflow-hidden p-1 text-foreground [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground", className)
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
Command_group.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Command_item($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "class", "$$props"]);
  push();
  let asChild = value_or_fallback($$props["asChild"], false);
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(CommandItem)($$payload, spread_props([
    {
      asChild,
      class: cn("relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
    },
    $$restProps,
    {
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        const action = $$slotProps.action;
        const attrs = $$slotProps.attrs;
        $$payload2.out += `<!--[-->`;
        slot(
          $$payload2,
          $$props.children,
          {
            get action() {
              return action;
            },
            get attrs() {
              return attrs;
            }
          },
          null
        );
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { asChild, class: className });
  pop();
}
Command_item.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Command_input($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let value = value_or_fallback($$props["value"], "");
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="flex items-center border-b px-2" data-cmdk-input-wrapper="">`;
    push_element("div", $$payload2);
    $$payload2.out += `<!--[-->`;
    validate_component(Search)($$payload2, { class: "mr-2 h-4 w-4 shrink-0 opacity-50" });
    $$payload2.out += `<!--]--> <!--[-->`;
    validate_component(CommandInput)($$payload2, spread_props([
      {
        class: cn("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className)
      },
      $$restProps,
      {
        get value() {
          return value;
        },
        set value($$value) {
          value = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out += `<!--]--></div>`;
    pop_element();
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { class: className, value });
  pop();
}
Command_input.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Popover_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "transition",
    "transitionConfig",
    "$$props"
  ]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  let transition = value_or_fallback($$props["transition"], flyAndScale);
  let transitionConfig = value_or_fallback($$props["transitionConfig"], void 0);
  $$payload.out += `<!--[-->`;
  validate_component(Popover_content$1)($$payload, spread_props([
    {
      transition,
      transitionConfig,
      class: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none", className)
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
    transition,
    transitionConfig
  });
  pop();
}
Popover_content.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const Root = Popover;
const Trigger = Popover_trigger;
const httpLink = new HttpLink({
  uri: PUBLIC_GATEWAY_GRAPHQL_URL
});
const authLink = setContext$1(async (_, { headers }) => {
  const { data, error } = await supabaseClient.auth.getSession();
  if (error)
    console.error("Error: ", error.message);
  const token = data ? data.session?.access_token : "";
  return {
    headers: {
      ...headers,
      "x-server": "server",
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json"
    }
  };
});
new ApolloClient({
  cache: new InMemoryCache(),
  uri: PUBLIC_GATEWAY_GRAPHQL_URL,
  // headers: {
  // 	'x-server': 'server',
  // 	Authorization: `Bearer ${PUBLIC_SUPABASE_ANON_KEY}`,
  // 	apiKey: PUBLIC_SUPABASE_ANON_KEY
  // }
  link: authLink.concat(httpLink)
  // link: ApolloLink.split(
  // 	(operation) => operation.getContext().clientName === 'supabase',
  // 	supabaseGraphQLEndpoint,
  // 	backendServerEndpoint
  // )
});
function AddRepo($$payload, $$props) {
  push();
  function isValidGithubUrl(url2) {
    const regex = /^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
    return regex.test(url2);
  }
  let { repoIdentifier } = $$props;
  let currentCategories = [];
  let selectedCategories = [];
  let isSubmitting = false;
  let dialogOpen = false;
  let open = false;
  let selectedValue = "Add category...";
  let commandInputValue = "";
  function closeAndFocusTrigger(triggerId) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }
  let githubRepoUrl = "";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!--[-->`;
    validate_component(Root$1)($$payload2, {
      get open() {
        return dialogOpen;
      },
      set open($$value) {
        dialogOpen = $$value;
        $$settled = false;
      },
      onOpenChange: () => {
        isSubmitting = false;
        selectedCategories = [];
        commandInputValue = "";
        githubRepoUrl = "";
      },
      children: add_snippet_symbol(($$payload3, $$slotProps) => {
        $$payload3.out += `<!--[-->`;
        validate_component(Trigger$1)($$payload3, {
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            $$payload4.out += `<!--[-->`;
            slot($$payload4, $$props.children, {}, null);
            $$payload4.out += `<!--]-->`;
          })
        });
        $$payload3.out += `<!--]--> <!--[-->`;
        validate_component(Dialog_content)($$payload3, {
          class: "sm:max-w-[425px]",
          children: add_snippet_symbol(($$payload4, $$slotProps2) => {
            const each_array_1 = ensure_array_like(selectedCategories);
            $$payload4.out += `<!--[-->`;
            validate_component(Dialog_header)($$payload4, {
              children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                $$payload5.out += `<!--[-->`;
                validate_component(Dialog_title)($$payload5, {
                  children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                    $$payload6.out += `Add Repository`;
                  })
                });
                $$payload5.out += `<!--]--> <!--[-->`;
                validate_component(Dialog_description)($$payload5, {
                  children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                    $$payload6.out += `Add a repository to your bookmarks.`;
                  })
                });
                $$payload5.out += `<!--]-->`;
              })
            });
            $$payload4.out += `<!--]--> <div class="grid gap-4 py-4 pt-2 px-1">`;
            push_element("div", $$payload4);
            $$payload4.out += `<div class="w-full md:w-[350px]">`;
            push_element("div", $$payload4);
            $$payload4.out += `<!--[-->`;
            if (!repoIdentifier) {
              $$payload4.out += `<!--[-->`;
              validate_component(Input)($$payload4, {
                id: "name",
                placeholder: "github.com/owner/repo",
                class: "col-span-3",
                get value() {
                  return githubRepoUrl;
                },
                set value($$value) {
                  githubRepoUrl = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `<!--]-->`;
              $$payload4.out += "<!--]-->";
            } else {
              $$payload4.out += "<!--]!-->";
            }
            $$payload4.out += `</div>`;
            pop_element();
            $$payload4.out += ` <!--[-->`;
            validate_component(Root)($$payload4, {
              get open() {
                return open;
              },
              set open($$value) {
                open = $$value;
                $$settled = false;
              },
              children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                const ids = $$slotProps3.ids;
                $$payload5.out += `<!--[-->`;
                validate_component(Trigger)($$payload5, {
                  asChild: true,
                  children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                    const builder = $$slotProps4.builder;
                    $$payload6.out += `<!--[-->`;
                    validate_component(Button)($$payload6, {
                      builders: [builder],
                      variant: "outline",
                      role: "combobox",
                      "aria-expanded": open,
                      class: "w-full md:w-[350px] justify-between",
                      children: add_snippet_symbol(($$payload7, $$slotProps5) => {
                        $$payload7.out += `${escape(selectedValue)} <!--[-->`;
                        validate_component(Chevrons_up_down)($$payload7, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" });
                        $$payload7.out += `<!--]-->`;
                      })
                    });
                    $$payload6.out += `<!--]-->`;
                  })
                });
                $$payload5.out += `<!--]--> <!--[-->`;
                validate_component(Popover_content)($$payload5, {
                  class: "w-full md:w-[350px] p-0",
                  children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                    $$payload6.out += `<!--[-->`;
                    validate_component(Command)($$payload6, {
                      children: add_snippet_symbol(($$payload7, $$slotProps5) => {
                        $$payload7.out += `<!--[-->`;
                        validate_component(Command_input)($$payload7, {
                          get value() {
                            return commandInputValue;
                          },
                          set value($$value) {
                            commandInputValue = $$value;
                            $$settled = false;
                          },
                          placeholder: "Add category..."
                        });
                        $$payload7.out += `<!--]--> <!--[-->`;
                        validate_component(Command_group)($$payload7, {
                          children: add_snippet_symbol(($$payload8, $$slotProps6) => {
                            $$payload8.out += `<!--[-->`;
                            if (currentCategories) {
                              const each_array = ensure_array_like(currentCategories);
                              $$payload8.out += `<!--[-->`;
                              for (let $$index = 0; $$index < each_array.length; $$index++) {
                                const category = each_array[$$index];
                                $$payload8.out += "<!--[-->";
                                $$payload8.out += `<!--[-->`;
                                validate_component(Command_item)($$payload8, {
                                  value: category.title,
                                  onSelect: (currentValue) => {
                                    const index = currentCategories.findIndex((category2) => category2.title === currentValue);
                                    currentCategories[index].isSelected = !currentCategories[index].isSelected;
                                    if (currentCategories[index].isSelected) {
                                      selectedCategories = [
                                        ...selectedCategories,
                                        { title: currentCategories[index].title }
                                      ];
                                    } else {
                                      selectedCategories = selectedCategories.filter((category2) => category2.title !== currentCategories[index].title);
                                    }
                                    closeAndFocusTrigger(ids.trigger);
                                  },
                                  children: add_snippet_symbol(($$payload9, $$slotProps7) => {
                                    $$payload9.out += `<!--[-->`;
                                    validate_component(Check)($$payload9, {
                                      class: cn("mr-2 h-4 w-4", !category.isSelected && "text-transparent")
                                    });
                                    $$payload9.out += `<!--]--> ${escape(category.title)}`;
                                  })
                                });
                                $$payload8.out += `<!--]-->`;
                                $$payload8.out += "<!--]-->";
                              }
                              $$payload8.out += "<!--]-->";
                              $$payload8.out += "<!--]-->";
                            } else {
                              $$payload8.out += "<!--]!-->";
                            }
                          })
                        });
                        $$payload7.out += `<!--]--> <div class="-mx-1 h-px bg-border">`;
                        push_element("div", $$payload7);
                        $$payload7.out += `</div>`;
                        pop_element();
                        $$payload7.out += ` <div class="overflow-hidden p-1 text-foreground [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground">`;
                        push_element("div", $$payload7);
                        $$payload7.out += `<div class="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">`;
                        push_element("div", $$payload7);
                        $$payload7.out += `<!--[-->`;
                        validate_component(Check)($$payload7, { class: "mr-2 h-4 w-4 text-transparent" });
                        $$payload7.out += `<!--]--> Add category</div>`;
                        pop_element();
                        $$payload7.out += `</div>`;
                        pop_element();
                      })
                    });
                    $$payload6.out += `<!--]-->`;
                  })
                });
                $$payload5.out += `<!--]-->`;
              })
            });
            $$payload4.out += `<!--]--> <div class="flex gap-2">`;
            push_element("div", $$payload4);
            $$payload4.out += `<!--[-->`;
            for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
              const selected = each_array_1[$$index_1];
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<!--[-->`;
              validate_component(Badge)($$payload4, {
                children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                  $$payload5.out += `${escape(selected.title)}`;
                })
              });
              $$payload4.out += `<!--]-->`;
              $$payload4.out += "<!--]-->";
            }
            $$payload4.out += "<!--]-->";
            $$payload4.out += `</div>`;
            pop_element();
            $$payload4.out += ` <!--[-->`;
            validate_component(Dialog_footer)($$payload4, {
              children: add_snippet_symbol(($$payload5, $$slotProps3) => {
                $$payload5.out += `<!--[-->`;
                validate_component(Button)($$payload5, {
                  type: "submit",
                  disabled: !isValidGithubUrl(githubRepoUrl) || isSubmitting || !(selectedCategories.length > 0),
                  children: add_snippet_symbol(($$payload6, $$slotProps4) => {
                    $$payload6.out += `Save changes`;
                  })
                });
                $$payload5.out += `<!--]-->`;
              })
            });
            $$payload4.out += `<!--]--></div>`;
            pop_element();
          })
        });
        $$payload3.out += `<!--]-->`;
      })
    });
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
AddRepo.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  AddRepo as A
};
