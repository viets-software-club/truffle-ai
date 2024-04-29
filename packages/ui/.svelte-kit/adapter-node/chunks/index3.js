const noop = () => {
};
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
function subscribe_to_store(store, run, invalidate) {
  if (store == null) {
    run(void 0);
    if (invalidate)
      invalidate(void 0);
    return noop;
  }
  const unsub = store.subscribe(
    run,
    // @ts-expect-error
    invalidate
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
const HYDRATION_START = "[";
const HYDRATION_END = "]";
const UNINITIALIZED = Symbol();
const PassiveDelegatedEvents = ["touchstart", "touchmove", "touchend"];
const DOMBooleanAttributes = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected",
  "webkitdirectory"
];
const interactive_elements = /* @__PURE__ */ new Set([
  "a",
  "button",
  "iframe",
  "embed",
  "select",
  "textarea"
]);
const disallowed_paragraph_contents = [
  "address",
  "article",
  "aside",
  "blockquote",
  "details",
  "div",
  "dl",
  "fieldset",
  "figcapture",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hr",
  "menu",
  "nav",
  "ol",
  "pre",
  "section",
  "table",
  "ul"
];
const implied_end_tags = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"];
function is_tag_valid_with_parent(tag, parent_tag) {
  switch (parent_tag) {
    case "select":
      return tag === "option" || tag === "optgroup" || tag === "#text";
    case "optgroup":
      return tag === "option" || tag === "#text";
    case "option":
      return tag === "#text";
    case "tr":
      return tag === "th" || tag === "td" || tag === "style" || tag === "script" || tag === "template";
    case "tbody":
    case "thead":
    case "tfoot":
      return tag === "tr" || tag === "style" || tag === "script" || tag === "template";
    case "colgroup":
      return tag === "col" || tag === "template";
    case "table":
      return tag === "caption" || tag === "colgroup" || tag === "tbody" || tag === "tfoot" || tag === "thead" || tag === "style" || tag === "script" || tag === "template";
    case "head":
      return tag === "base" || tag === "basefont" || tag === "bgsound" || tag === "link" || tag === "meta" || tag === "title" || tag === "noscript" || tag === "noframes" || tag === "style" || tag === "script" || tag === "template";
    case "html":
      return tag === "head" || tag === "body" || tag === "frameset";
    case "frameset":
      return tag === "frame";
    case "#document":
      return tag === "html";
  }
  switch (tag) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return parent_tag !== "h1" && parent_tag !== "h2" && parent_tag !== "h3" && parent_tag !== "h4" && parent_tag !== "h5" && parent_tag !== "h6";
    case "rp":
    case "rt":
      return implied_end_tags.indexOf(parent_tag) === -1;
    case "body":
    case "caption":
    case "col":
    case "colgroup":
    case "frameset":
    case "frame":
    case "head":
    case "html":
    case "tbody":
    case "td":
    case "tfoot":
    case "th":
    case "thead":
    case "tr":
      return parent_tag == null;
  }
  return true;
}
var current_component = null;
function getContext(key) {
  const context_map = getAllContexts();
  const result = (
    /** @type {T} */
    context_map.get(key)
  );
  return result;
}
function setContext(key, context) {
  getAllContexts().set(key, context);
  return context;
}
function getAllContexts() {
  const context = current_component;
  if (context === null) {
    throw new Error(
      "ERR_SVELTE_ORPHAN_CONTEXTContext can only be used during component initialisation."
    );
  }
  return context.c ??= new Map(get_parent_context(context) || void 0);
}
function push() {
  current_component = { p: current_component, c: null, d: null };
}
function pop() {
  var component = (
    /** @type {import('#server').Component} */
    current_component
  );
  var ondestroy = component.d;
  if (ondestroy) {
    on_destroy.push(...ondestroy);
  }
  current_component = component.p;
}
function get_parent_context(component_context) {
  let parent = component_context.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
const BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
const BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;
const INVALID_ATTR_NAME_CHAR_REGEX = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
const VoidElements = /* @__PURE__ */ new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "menuitem",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
let current_element = null;
function create_payload() {
  return { out: "", head: { title: "", out: "", anchor: 0 }, anchor: 0 };
}
function copy_payload(to_copy) {
  return {
    ...to_copy,
    head: { ...to_copy.head }
  };
}
function assign_payload(p1, p2) {
  p1.out = p2.out;
  p1.head = p2.head;
  p1.anchor = p2.anchor;
}
function error_on_client(payload, message) {
  message = `Svelte SSR validation error:

${message}

Ensure your components render valid HTML as the browser will try to repair invalid HTML, which may result in content being shifted around and will likely result in a hydration mismatch.`;
  console.error(message);
  payload.head.out += `<script>console.error(\`${message}\`)<\/script>`;
}
function push_element(tag, payload) {
  if (current_element !== null && !is_tag_valid_with_parent(tag, current_element.tag)) {
    error_on_client(payload, `<${tag}> is invalid inside <${current_element.tag}>`);
  }
  if (interactive_elements.has(tag)) {
    let element2 = current_element;
    while (element2 !== null) {
      if (interactive_elements.has(element2.tag)) {
        error_on_client(payload, `<${tag}> is invalid inside <${element2.tag}>`);
      }
      element2 = element2.parent;
    }
  }
  if (disallowed_paragraph_contents.includes(tag)) {
    let element2 = current_element;
    while (element2 !== null) {
      if (element2.tag === "p") {
        error_on_client(payload, `<${tag}> is invalid inside <p>`);
      }
      element2 = element2.parent;
    }
  }
  current_element = {
    tag,
    parent: current_element
  };
}
function pop_element() {
  if (current_element !== null) {
    current_element = current_element.parent;
  }
}
function element(payload, tag, attributes_fn, children_fn) {
  payload.out += `<${tag} `;
  attributes_fn();
  payload.out += `>`;
  if (!VoidElements.has(tag)) {
    if (tag !== "textarea") {
      payload.out += BLOCK_OPEN;
    }
    children_fn();
    if (tag !== "textarea") {
      payload.out += BLOCK_CLOSE;
    }
    payload.out += `</${tag}>`;
  }
}
let on_destroy = [];
function render(component, options) {
  const payload = create_payload();
  const prev_on_destroy = on_destroy;
  on_destroy = [];
  payload.out += BLOCK_OPEN;
  if (options.context) {
    push();
    current_component.c = options.context;
  }
  component(payload, options.props, {}, {});
  if (options.context) {
    pop();
  }
  payload.out += BLOCK_CLOSE;
  for (const cleanup of on_destroy)
    cleanup();
  on_destroy = prev_on_destroy;
  return {
    head: payload.head.out || payload.head.title ? payload.head.out + payload.head.title : "",
    html: payload.out
  };
}
function escape(value, is_attr = false) {
  const str = String(value ?? "");
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped + str.substring(last);
}
function head(payload, fn) {
  const head_payload = payload.head;
  payload.head.out += BLOCK_OPEN;
  fn(head_payload);
  payload.head.out += BLOCK_CLOSE;
}
function attr(name, value, boolean) {
  if (value == null || !value && boolean || value === "" && name === "class")
    return "";
  const assignment = boolean ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
function spread_attributes(attrs, lowercase_attributes, is_svg, class_hash, additional) {
  const merged_attrs = {};
  let key;
  for (let i = 0; i < attrs.length; i++) {
    const obj = attrs[i];
    for (key in obj) {
      if (typeof obj[key] !== "function") {
        merged_attrs[key] = obj[key];
      }
    }
  }
  const styles = additional?.styles;
  if (styles) {
    if ("style" in merged_attrs) {
      merged_attrs.style = style_object_to_string(
        merge_styles(
          /** @type {string} */
          merged_attrs.style,
          styles
        )
      );
    } else {
      merged_attrs.style = style_object_to_string(styles);
    }
  }
  if (class_hash) {
    if ("class" in merged_attrs) {
      merged_attrs.class += ` ${class_hash}`;
    } else {
      merged_attrs.class = class_hash;
    }
  }
  const classes = additional?.classes;
  if (classes) {
    if ("class" in merged_attrs) {
      merged_attrs.class += ` ${classes}`;
    } else {
      merged_attrs.class = classes;
    }
  }
  let attr_str = "";
  let name;
  for (name in merged_attrs) {
    if (INVALID_ATTR_NAME_CHAR_REGEX.test(name))
      continue;
    if (lowercase_attributes) {
      name = name.toLowerCase();
    }
    const is_boolean = !is_svg && DOMBooleanAttributes.includes(name);
    attr_str += attr(name, merged_attrs[name], is_boolean);
  }
  return attr_str;
}
function spread_props(props) {
  const merged_props = {};
  let key;
  for (let i = 0; i < props.length; i++) {
    const obj = props[i];
    for (key in obj) {
      merged_props[key] = obj[key];
    }
  }
  return merged_props;
}
function stringify(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}
function style_object_to_string(style_object) {
  return Object.keys(style_object).filter(
    /** @param {any} key */
    (key) => style_object[key]
  ).map(
    /** @param {any} key */
    (key) => `${key}: ${escape(style_object[key], true)};`
  ).join(" ");
}
function add_styles(style_object) {
  const styles = style_object_to_string(style_object);
  return styles ? ` style="${styles}"` : "";
}
function merge_styles(style_attribute, style_directive) {
  const style_object = {};
  for (const individual_style of style_attribute.split(";")) {
    const colon_index = individual_style.indexOf(":");
    const name = individual_style.slice(0, colon_index).trim();
    const value = individual_style.slice(colon_index + 1).trim();
    if (!name)
      continue;
    style_object[name] = value;
  }
  for (const name in style_directive) {
    const value = style_directive[name];
    if (value) {
      style_object[name] = value;
    } else {
      delete style_object[name];
    }
  }
  return style_object;
}
function store_get(store_values, store_name, store) {
  {
    validate_store(store, store_name.slice(1));
  }
  if (store_name in store_values && store_values[store_name][0] === store) {
    return store_values[store_name][2];
  }
  store_values[store_name]?.[1]();
  store_values[store_name] = [store, null, void 0];
  const unsub = subscribe_to_store(
    store,
    /** @param {any} v */
    (v) => store_values[store_name][2] = v
  );
  store_values[store_name][1] = unsub;
  return store_values[store_name][2];
}
function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== "function") {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}
function store_set(store, value) {
  store.set(value);
  return value;
}
function mutate_store(store_values, store_name, store, expression) {
  store_set(store, store_get(store_values, store_name, store));
  return expression;
}
function unsubscribe_stores(store_values) {
  for (const store_name in store_values) {
    store_values[store_name][1]();
  }
}
function value_or_fallback(value, fallback) {
  return value === void 0 ? fallback : value;
}
function slot(payload, slot_fn, slot_props, fallback_fn) {
  if (slot_fn === void 0) {
    if (fallback_fn !== null) {
      fallback_fn();
    }
  } else {
    slot_fn(payload, slot_props);
  }
}
function rest_props(props, rest) {
  const rest_props2 = {};
  let key;
  for (key in props) {
    if (!rest.includes(key)) {
      rest_props2[key] = props[key];
    }
  }
  return rest_props2;
}
function sanitize_props(props) {
  const { children, $$slots, ...sanitized } = props;
  return sanitized;
}
function bind_props(props_parent, props_now) {
  for (const key in props_now) {
    const initial_value = props_parent[key];
    const value = props_now[key];
    if (initial_value === void 0 && value !== void 0 && Object.getOwnPropertyDescriptor(props_parent, key)?.set) {
      props_parent[key] = value;
    }
  }
}
function ensure_array_like(array_like_or_iterator) {
  return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
export {
  element as A,
  add_styles as B,
  merge_styles as C,
  noop as D,
  current_component as E,
  subscribe_to_store as F,
  run_all as G,
  HYDRATION_START as H,
  PassiveDelegatedEvents as P,
  UNINITIALIZED as U,
  HYDRATION_END as a,
  pop as b,
  slot as c,
  push_element as d,
  pop_element as e,
  attr as f,
  escape as g,
  head as h,
  store_get as i,
  stringify as j,
  copy_payload as k,
  assign_payload as l,
  spread_props as m,
  sanitize_props as n,
  rest_props as o,
  push as p,
  bind_props as q,
  render as r,
  setContext as s,
  ensure_array_like as t,
  unsubscribe_stores as u,
  value_or_fallback as v,
  spread_attributes as w,
  store_set as x,
  getContext as y,
  mutate_store as z
};
