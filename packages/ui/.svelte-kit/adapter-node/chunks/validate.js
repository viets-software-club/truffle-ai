const void_element_names = [
  "area",
  "base",
  "br",
  "col",
  "command",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
function is_void(name) {
  return void_element_names.includes(name) || name.toLowerCase() === "!doctype";
}
const snippet_symbol = Symbol.for("svelte.snippet");
function add_snippet_symbol(fn) {
  fn[snippet_symbol] = true;
  return fn;
}
function validate_component(component_fn) {
  if (component_fn?.[snippet_symbol] === true) {
    throw new Error("A snippet must be rendered with `{@render ...}`");
  }
  return component_fn;
}
function validate_void_dynamic_element(tag_fn) {
  const tag = tag_fn();
  if (tag && is_void(tag)) {
    console.warn(`<svelte:element this="${tag}"> is self-closing and cannot have content.`);
  }
}
function validate_dynamic_element_tag(tag_fn) {
  const tag = tag_fn();
  const is_string = typeof tag === "string";
  if (tag && !is_string) {
    throw new Error('<svelte:element> expects "this" attribute to be a string.');
  }
}
export {
  add_snippet_symbol as a,
  validate_void_dynamic_element as b,
  validate_dynamic_element_tag as c,
  validate_component as v
};
