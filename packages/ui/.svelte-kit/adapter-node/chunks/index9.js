import { p as push, l as spread_props, c as slot, b as pop, m as sanitize_props, q as rest_props, v as value_or_fallback, x as spread_attributes, d as push_element, e as pop_element, t as bind_props, i as store_get, u as unsubscribe_stores, w as ensure_array_like, n as copy_payload, o as assign_payload, g as escape, f as attr, j as stringify, z as store_set } from "./index3.js";
import { d as derived, r as readable, w as writable } from "./index2.js";
import { v as validate_component, a as add_snippet_symbol } from "./validate.js";
import { c as cn, g as flyAndScale, p as Tooltip_content$1, q as Tooltip, r as Tooltip_trigger } from "./index5.js";
import "clsx";
import { S as Star, C as Circle_dot, G as Git_fork, U as Users, a as Git_pull_request_arrow } from "./dropdown-menu-checkbox-item.js";
import "dequal";
import { B as Button } from "./index7.js";
import "./client.js";
import { I as Icon } from "./select-trigger.js";
function Arrow_down_0_1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "m3 16 4 4 4-4" }],
    ["path", { "d": "M7 20V4" }],
    [
      "rect",
      {
        "x": "15",
        "y": "4",
        "width": "4",
        "height": "6",
        "ry": "2"
      }
    ],
    ["path", { "d": "M17 20v-6h-2" }],
    ["path", { "d": "M15 20h4" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "arrow-down-0-1" },
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
Arrow_down_0_1.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Arrow_down_a_z($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "m3 16 4 4 4-4" }],
    ["path", { "d": "M7 20V4" }],
    ["path", { "d": "M20 8h-5" }],
    [
      "path",
      { "d": "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }
    ],
    ["path", { "d": "M15 14h5l-5 6h5" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "arrow-down-a-z" },
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
Arrow_down_a_z.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Arrow_up_0_1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "m3 8 4-4 4 4" }],
    ["path", { "d": "M7 4v16" }],
    [
      "rect",
      {
        "x": "15",
        "y": "4",
        "width": "4",
        "height": "6",
        "ry": "2"
      }
    ],
    ["path", { "d": "M17 20v-6h-2" }],
    ["path", { "d": "M15 20h4" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "arrow-up-0-1" },
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
Arrow_up_0_1.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Arrow_up_a_z($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "m3 8 4-4 4 4" }],
    ["path", { "d": "M7 4v16" }],
    ["path", { "d": "M20 8h-5" }],
    [
      "path",
      { "d": "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }
    ],
    ["path", { "d": "M15 14h5l-5 6h5" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "arrow-up-a-z" },
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
Arrow_up_a_z.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function SplitIcon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "icon1",
    "icon2",
    "iconProps",
    "dividerProps",
    "$$props"
  ]);
  push();
  let icon1 = value_or_fallback($$props["icon1"], null);
  let icon2 = value_or_fallback($$props["icon2"], null);
  let iconProps = value_or_fallback($$props["iconProps"], {});
  let dividerProps = value_or_fallback($$props["dividerProps"], {});
  $$payload.out += `<div${spread_attributes(
    [
      $$restProps,
      { "class": cn("relative", $$restProps.class) }
    ],
    true,
    false,
    ""
  )}>`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(icon1)?.($$payload, spread_props([
    iconProps,
    {
      class: cn("absolute left-0 top-0 inline-block align-text-bottom overflow-visible", iconProps.class)
    }
  ]));
  $$payload.out += `<!--]--> <div${spread_attributes(
    [
      dividerProps,
      {
        "class": cn("absolute h-[1px] -rotate-45 bg-foreground/50 bottom-0 left-0 right-0 top-[50%]", dividerProps.class)
      }
    ],
    true,
    false,
    ""
  )}>`;
  push_element("div", $$payload);
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` <!--[-->`;
  validate_component(icon2)?.($$payload, spread_props([
    iconProps,
    {
      class: cn("absolute bottom-0 right-0  inline-block align-text-bottom overflow-visible", iconProps.class)
    }
  ]));
  $$payload.out += `<!--]--></div>`;
  pop_element();
  bind_props($$props, { icon1, icon2, iconProps, dividerProps });
  pop();
}
SplitIcon.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const derivedKeys = (storeMap) => {
  const entries = Object.entries(storeMap);
  const keys = entries.map(([key]) => key);
  return derived(entries.map(([, store]) => store), ($stores) => {
    return Object.fromEntries($stores.map((store, idx) => [keys[idx], store]));
  });
};
function Subscribe($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["$$props"]);
  push();
  var $$store_subs;
  const values = derivedKeys($$restProps);
  $$payload.out += `<!--[-->`;
  slot(
    $$payload,
    $$props.children,
    spread_props([
      {},
      store_get($$store_subs ??= {}, "$values", values)
    ]),
    null
  );
  $$payload.out += `<!--]-->`;
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  pop();
}
Subscribe.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function PropsRenderer($$payload, $$props) {
  push();
  let instance = value_or_fallback($$props["instance"], void 0);
  let config = $$props["config"];
  let props = value_or_fallback($$props["props"], void 0);
  $$payload.out += `<!--[-->`;
  if (config.children.length === 0) {
    $$payload.out += `<!--[-->`;
    validate_component(config.component)?.($$payload, spread_props([props ?? {}]));
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<!--[-->`;
    validate_component(config.component)?.($$payload, spread_props([
      props ?? {},
      {
        children: add_snippet_symbol(($$payload2, $$slotProps) => {
          const each_array = ensure_array_like(config.children);
          $$payload2.out += `<!--[-->`;
          for (let $$index = 0; $$index < each_array.length; $$index++) {
            const child = each_array[$$index];
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<!--[-->`;
            validate_component(Render)($$payload2, { of: child });
            $$payload2.out += `<!--]-->`;
            $$payload2.out += "<!--]-->";
          }
          $$payload2.out += "<!--]-->";
        })
      }
    ]));
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]!-->";
  }
  bind_props($$props, { instance, config, props });
  pop();
}
PropsRenderer.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const isReadable = (value) => {
  return value?.subscribe instanceof Function;
};
const Undefined = readable(void 0);
function ComponentRenderer($$payload, $$props) {
  push();
  let config = $$props["config"];
  let instance;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!--[-->`;
    if (isReadable(config.props)) {
      $$payload2.out += `<!--[-->`;
      validate_component(Subscribe)($$payload2, {
        props: config.props,
        children: add_snippet_symbol(($$payload3, $$slotProps) => {
          const props = $$slotProps.props;
          $$payload3.out += `<!--[-->`;
          validate_component(PropsRenderer)($$payload3, {
            get instance() {
              return instance;
            },
            set instance($$value) {
              instance = $$value;
              $$settled = false;
            },
            config,
            props
          });
          $$payload3.out += `<!--]-->`;
        })
      });
      $$payload2.out += `<!--]-->`;
      $$payload2.out += "<!--]-->";
    } else {
      $$payload2.out += `<!--[-->`;
      validate_component(PropsRenderer)($$payload2, {
        get instance() {
          return instance;
        },
        set instance($$value) {
          instance = $$value;
          $$settled = false;
        },
        config,
        props: config.props
      });
      $$payload2.out += `<!--]-->`;
      $$payload2.out += "<!--]!-->";
    }
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { config });
  pop();
}
ComponentRenderer.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Render($$payload, $$props) {
  push();
  var $$store_subs;
  let config = $$props["of"];
  const readableConfig = isReadable(config) ? config : Undefined;
  $$payload.out += `<!--[-->`;
  if (isReadable(config)) {
    $$payload.out += `${escape(store_get($$store_subs ??= {}, "$readableConfig", readableConfig))}`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<!--[-->`;
    if (typeof config !== "object") {
      $$payload.out += `${escape(config)}`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += `<!--[-->`;
      validate_component(ComponentRenderer)($$payload, { config });
      $$payload.out += `<!--]-->`;
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  bind_props($$props, { of: config });
  pop();
}
Render.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
class ComponentRenderConfig {
  component;
  props;
  constructor(component, props) {
    this.component = component;
    this.props = props;
  }
  eventHandlers = [];
  on(type, handler) {
    this.eventHandlers.push([type, handler]);
    return this;
  }
  children = [];
  slot(...children) {
    this.children = children;
    return this;
  }
}
function createRender(component, props) {
  return new ComponentRenderConfig(component, props);
}
class Column {
  header;
  footer;
  height;
  plugins;
  constructor({ header, footer, height, plugins }) {
    this.header = header;
    this.footer = footer;
    this.height = height;
    this.plugins = plugins;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isFlat() {
    return "__flat" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isDisplay() {
    return "__display" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isGroup() {
    return "__group" in this;
  }
}
class FlatColumn extends Column {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __flat = true;
  id;
  constructor({ header, footer, plugins, id }) {
    super({ header, footer, plugins, height: 1 });
    this.id = id ?? String(header);
  }
}
class DataColumn extends FlatColumn {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __data = true;
  cell;
  accessorKey;
  accessorFn;
  constructor({ header, footer, plugins, cell, accessor, id }) {
    super({ header, footer, plugins, id: "Initialization not complete" });
    this.cell = cell;
    if (accessor instanceof Function) {
      this.accessorFn = accessor;
    } else {
      this.accessorKey = accessor;
    }
    if (id === void 0 && this.accessorKey === void 0 && header === void 0) {
      throw new Error("A column id, string accessor, or header is required");
    }
    const accessorKeyId = typeof this.accessorKey === "string" ? this.accessorKey : null;
    this.id = id ?? accessorKeyId ?? String(header);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getValue(item) {
    if (this.accessorFn !== void 0) {
      return this.accessorFn(item);
    }
    if (this.accessorKey !== void 0) {
      return item[this.accessorKey];
    }
    return void 0;
  }
}
class DisplayColumn extends FlatColumn {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __display = true;
  cell;
  data;
  constructor({ header, footer, plugins, id, cell, data }) {
    super({ header, footer, plugins, id });
    this.cell = cell;
    this.data = data;
  }
}
class GroupColumn extends Column {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __group = true;
  columns;
  ids;
  constructor({ header, footer, columns, plugins }) {
    const height = Math.max(...columns.map((c) => c.height)) + 1;
    super({ header, footer, height, plugins });
    this.columns = columns;
    this.ids = getFlatColumnIds(columns);
  }
}
const getFlatColumnIds = (columns) => columns.flatMap((c) => c.isFlat() ? [c.id] : c.isGroup() ? c.ids : []);
const getFlatColumns = (columns) => {
  return columns.flatMap((c) => c.isFlat() ? [c] : c.isGroup() ? getFlatColumns(c.columns) : []);
};
const getCounter = (items) => {
  const result = /* @__PURE__ */ new Map();
  items.forEach((item) => {
    result.set(item, (result.get(item) ?? 0) + 1);
  });
  return result;
};
const getDuplicates = (items) => {
  return Array.from(getCounter(items).entries()).filter(([, count]) => count !== 1).map(([key]) => key);
};
const stringifyCss = (style) => {
  return Object.entries(style).map(([name, value]) => `${name}:${value}`).join(";");
};
const mergeAttributes = (a, b) => {
  if (a.style === void 0 && b.style === void 0) {
    return { ...a, ...b };
  }
  return {
    ...a,
    ...b,
    style: {
      ...typeof a.style === "object" ? a.style : {},
      ...typeof b.style === "object" ? b.style : {}
    }
  };
};
const finalizeAttributes = (attrs) => {
  if (attrs.style === void 0 || typeof attrs.style !== "object") {
    return attrs;
  }
  return {
    ...attrs,
    style: stringifyCss(attrs.style)
  };
};
class TableComponent {
  id;
  constructor({ id }) {
    this.id = id;
  }
  attrsForName = {};
  attrs() {
    return derived(Object.values(this.attrsForName), ($attrsArray) => {
      let $mergedAttrs = {};
      $attrsArray.forEach(($attrs) => {
        $mergedAttrs = mergeAttributes($mergedAttrs, $attrs);
      });
      return finalizeAttributes($mergedAttrs);
    });
  }
  propsForName = {};
  props() {
    return derivedKeys(this.propsForName);
  }
  state;
  injectState(state) {
    this.state = state;
  }
  applyHook(pluginName, hook) {
    if (hook.props !== void 0) {
      this.propsForName[pluginName] = hook.props;
    }
    if (hook.attrs !== void 0) {
      this.attrsForName[pluginName] = hook.attrs;
    }
  }
}
class BodyCell extends TableComponent {
  row;
  constructor({ id, row }) {
    super({ id });
    this.row = row;
  }
  attrs() {
    return derived(super.attrs(), ($baseAttrs) => {
      return {
        ...$baseAttrs,
        role: "cell"
      };
    });
  }
  rowColId() {
    return `${this.row.id}:${this.column.id}`;
  }
  dataRowColId() {
    if (!this.row.isData()) {
      return void 0;
    }
    return `${this.row.dataId}:${this.column.id}`;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isDisplay() {
    return "__display" in this;
  }
}
class DataBodyCell extends BodyCell {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __data = true;
  column;
  label;
  value;
  constructor({ row, column, label, value }) {
    super({ id: column.id, row });
    this.column = column;
    this.label = label;
    this.value = value;
  }
  render() {
    if (this.label === void 0) {
      return `${this.value}`;
    }
    if (this.state === void 0) {
      throw new Error("Missing `state` reference");
    }
    return this.label(this, this.state);
  }
  clone() {
    const clonedCell = new DataBodyCell({
      row: this.row,
      column: this.column,
      label: this.label,
      value: this.value
    });
    return clonedCell;
  }
}
class DisplayBodyCell extends BodyCell {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __display = true;
  column;
  label;
  constructor({ row, column, label }) {
    super({ id: column.id, row });
    this.column = column;
    this.label = label;
  }
  render() {
    if (this.state === void 0) {
      throw new Error("Missing `state` reference");
    }
    return this.label(this, this.state);
  }
  clone() {
    const clonedCell = new DisplayBodyCell({
      row: this.row,
      column: this.column,
      label: this.label
    });
    return clonedCell;
  }
}
const nonUndefined = (value) => value !== void 0;
class BodyRow extends TableComponent {
  cells;
  /**
   * Get the cell with a given column id.
   *
   * **This includes hidden cells.**
   */
  cellForId;
  depth;
  parentRow;
  subRows;
  constructor({ id, cells, cellForId, depth = 0, parentRow }) {
    super({ id });
    this.cells = cells;
    this.cellForId = cellForId;
    this.depth = depth;
    this.parentRow = parentRow;
  }
  attrs() {
    return derived(super.attrs(), ($baseAttrs) => {
      return {
        ...$baseAttrs,
        role: "row"
      };
    });
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isDisplay() {
    return "__display" in this;
  }
}
class DataBodyRow extends BodyRow {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __data = true;
  dataId;
  original;
  constructor({ id, dataId, original, cells, cellForId, depth = 0, parentRow }) {
    super({ id, cells, cellForId, depth, parentRow });
    this.dataId = dataId;
    this.original = original;
  }
  clone({ includeCells = false, includeSubRows = false } = {}) {
    const clonedRow = new DataBodyRow({
      id: this.id,
      dataId: this.dataId,
      cellForId: this.cellForId,
      cells: this.cells,
      original: this.original,
      depth: this.depth
    });
    if (includeCells) {
      const clonedCellsForId = Object.fromEntries(Object.entries(clonedRow.cellForId).map(([id, cell]) => {
        const clonedCell = cell.clone();
        clonedCell.row = clonedRow;
        return [id, clonedCell];
      }));
      const clonedCells = clonedRow.cells.map(({ id }) => clonedCellsForId[id]);
      clonedRow.cellForId = clonedCellsForId;
      clonedRow.cells = clonedCells;
    }
    if (includeSubRows) {
      const clonedSubRows = this.subRows?.map((row) => row.clone({ includeCells, includeSubRows }));
      clonedRow.subRows = clonedSubRows;
    } else {
      clonedRow.subRows = this.subRows;
    }
    return clonedRow;
  }
}
const getBodyRows = (data, flatColumns, { rowDataId } = {}) => {
  const rows = data.map((item, idx) => {
    const id = idx.toString();
    return new DataBodyRow({
      id,
      dataId: rowDataId !== void 0 ? rowDataId(item, idx) : id,
      original: item,
      cells: [],
      cellForId: {}
    });
  });
  data.forEach((item, rowIdx) => {
    const cells = flatColumns.map((col) => {
      if (col.isData()) {
        const dataCol = col;
        const value = dataCol.getValue(item);
        return new DataBodyCell({
          row: rows[rowIdx],
          column: dataCol,
          label: col.cell,
          value
        });
      }
      if (col.isDisplay()) {
        const displayCol = col;
        return new DisplayBodyCell({
          row: rows[rowIdx],
          column: displayCol,
          label: col.cell
        });
      }
      throw new Error("Unrecognized `FlatColumn` implementation");
    });
    rows[rowIdx].cells = cells;
    flatColumns.forEach((c, colIdx) => {
      rows[rowIdx].cellForId[c.id] = cells[colIdx];
    });
  });
  return rows;
};
const getColumnedBodyRows = (rows, columnIdOrder) => {
  const columnedRows = rows.map((row) => {
    const clonedRow = row.clone();
    clonedRow.cells = [];
    clonedRow.cellForId = {};
    return clonedRow;
  });
  if (rows.length === 0 || columnIdOrder.length === 0)
    return rows;
  rows.forEach((row, rowIdx) => {
    const cells = row.cells.map((cell) => {
      const clonedCell = cell.clone();
      clonedCell.row = columnedRows[rowIdx];
      return clonedCell;
    });
    const visibleCells = columnIdOrder.map((cid) => {
      return cells.find((c) => c.id === cid);
    }).filter(nonUndefined);
    columnedRows[rowIdx].cells = visibleCells;
    cells.forEach((cell) => {
      columnedRows[rowIdx].cellForId[cell.id] = cell;
    });
  });
  return columnedRows;
};
const NBSP = " ";
class HeaderCell extends TableComponent {
  label;
  colspan;
  colstart;
  constructor({ id, label, colspan, colstart }) {
    super({ id });
    this.label = label;
    this.colspan = colspan;
    this.colstart = colstart;
  }
  render() {
    if (this.label instanceof Function) {
      if (this.state === void 0) {
        throw new Error("Missing `state` reference");
      }
      return this.label(this, this.state);
    }
    return this.label;
  }
  attrs() {
    return derived(super.attrs(), ($baseAttrs) => {
      return {
        ...$baseAttrs,
        role: "columnheader",
        colspan: this.colspan
      };
    });
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isFlat() {
    return "__flat" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isFlatDisplay() {
    return "__flat" in this && "__display" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isGroup() {
    return "__group" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isGroupDisplay() {
    return "__group" in this && "__display" in this;
  }
}
class FlatHeaderCell extends HeaderCell {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __flat = true;
  constructor({ id, label, colstart }) {
    super({ id, label, colspan: 1, colstart });
  }
  clone() {
    return new FlatHeaderCell({
      id: this.id,
      label: this.label,
      colstart: this.colstart
    });
  }
}
class DataHeaderCell extends FlatHeaderCell {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __data = true;
  accessorKey;
  accessorFn;
  constructor({ id, label, accessorKey, accessorFn, colstart }) {
    super({ id, label, colstart });
    this.accessorKey = accessorKey;
    this.accessorFn = accessorFn;
  }
  clone() {
    return new DataHeaderCell({
      id: this.id,
      label: this.label,
      accessorFn: this.accessorFn,
      accessorKey: this.accessorKey,
      colstart: this.colstart
    });
  }
}
class FlatDisplayHeaderCell extends FlatHeaderCell {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __display = true;
  constructor({ id, label = NBSP, colstart }) {
    super({ id, label, colstart });
  }
  clone() {
    return new FlatDisplayHeaderCell({
      id: this.id,
      label: this.label,
      colstart: this.colstart
    });
  }
}
class GroupHeaderCell extends HeaderCell {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __group = true;
  ids;
  allId;
  allIds;
  constructor({ label, ids, allIds, colspan, colstart }) {
    super({ id: `[${ids.join(",")}]`, label, colspan, colstart });
    this.ids = ids;
    this.allId = `[${allIds.join(",")}]`;
    this.allIds = allIds;
  }
  setIds(ids) {
    this.ids = ids;
    this.id = `[${this.ids.join(",")}]`;
  }
  pushId(id) {
    this.ids = [...this.ids, id];
    this.id = `[${this.ids.join(",")}]`;
  }
  clone() {
    return new GroupHeaderCell({
      label: this.label,
      ids: this.ids,
      allIds: this.allIds,
      colspan: this.colspan,
      colstart: this.colstart
    });
  }
}
class GroupDisplayHeaderCell extends GroupHeaderCell {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __display = true;
  constructor({ label = NBSP, ids, allIds, colspan = 1, colstart }) {
    super({ label, ids, allIds, colspan, colstart });
  }
  clone() {
    return new GroupDisplayHeaderCell({
      label: this.label,
      ids: this.ids,
      allIds: this.allIds,
      colspan: this.colspan,
      colstart: this.colstart
    });
  }
}
const sum = (nums) => nums.reduce((a, b) => a + b, 0);
const getNullMatrix = (width, height) => {
  const result = [];
  for (let i = 0; i < height; i++) {
    result.push(Array(width).fill(null));
  }
  return result;
};
const getTransposed = (matrix) => {
  const height = matrix.length;
  if (height === 0) {
    return matrix;
  }
  const width = matrix[0].length;
  const result = getNullMatrix(height, width);
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      result[i][j] = matrix[j][i];
    }
  }
  return result;
};
class HeaderRow extends TableComponent {
  cells;
  constructor({ id, cells }) {
    super({ id });
    this.cells = cells;
  }
  attrs() {
    return derived(super.attrs(), ($baseAttrs) => {
      return {
        ...$baseAttrs,
        role: "row"
      };
    });
  }
  clone() {
    return new HeaderRow({
      id: this.id,
      cells: this.cells
    });
  }
}
const getHeaderRows = (columns, flatColumnIds = []) => {
  const rowMatrix = getHeaderRowMatrix(columns);
  let columnMatrix = getTransposed(rowMatrix);
  columnMatrix = getOrderedColumnMatrix(columnMatrix, flatColumnIds);
  populateGroupHeaderCellIds(columnMatrix);
  return headerRowsForRowMatrix(getTransposed(columnMatrix));
};
const getHeaderRowMatrix = (columns) => {
  const maxColspan = sum(columns.map((c) => c.isGroup() ? c.ids.length : 1));
  const maxHeight = Math.max(...columns.map((c) => c.height));
  const rowMatrix = getNullMatrix(maxColspan, maxHeight);
  let cellOffset = 0;
  columns.forEach((c) => {
    const heightOffset = maxHeight - c.height;
    loadHeaderRowMatrix(rowMatrix, c, heightOffset, cellOffset);
    cellOffset += c.isGroup() ? c.ids.length : 1;
  });
  return rowMatrix.map((cells, rowIdx) => cells.map((cell, columnIdx) => {
    if (cell !== null)
      return cell;
    if (rowIdx === maxHeight - 1)
      return new FlatDisplayHeaderCell({ id: columnIdx.toString(), colstart: columnIdx });
    const flatId = rowMatrix[maxHeight - 1][columnIdx]?.id ?? columnIdx.toString();
    return new GroupDisplayHeaderCell({ ids: [], allIds: [flatId], colstart: columnIdx });
  }));
};
const loadHeaderRowMatrix = (rowMatrix, column, rowOffset, cellOffset) => {
  if (column.isData()) {
    rowMatrix[rowMatrix.length - 1][cellOffset] = new DataHeaderCell({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      label: column.header,
      accessorFn: column.accessorFn,
      accessorKey: column.accessorKey,
      id: column.id,
      colstart: cellOffset
    });
    return;
  }
  if (column.isDisplay()) {
    rowMatrix[rowMatrix.length - 1][cellOffset] = new FlatDisplayHeaderCell({
      id: column.id,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      label: column.header,
      colstart: cellOffset
    });
    return;
  }
  if (column.isGroup()) {
    for (let i = 0; i < column.ids.length; i++) {
      rowMatrix[rowOffset][cellOffset + i] = new GroupHeaderCell({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: column.header,
        colspan: 1,
        allIds: column.ids,
        ids: [],
        colstart: cellOffset
      });
    }
    let childCellOffset = 0;
    column.columns.forEach((c) => {
      loadHeaderRowMatrix(rowMatrix, c, rowOffset + 1, cellOffset + childCellOffset);
      childCellOffset += c.isGroup() ? c.ids.length : 1;
    });
    return;
  }
};
const getOrderedColumnMatrix = (columnMatrix, flatColumnIds) => {
  if (flatColumnIds.length === 0) {
    return columnMatrix;
  }
  const orderedColumnMatrix = [];
  flatColumnIds.forEach((key, columnIdx) => {
    const nextColumn = columnMatrix.find((columnCells) => {
      const flatCell = columnCells[columnCells.length - 1];
      if (!flatCell.isFlat()) {
        throw new Error("The last element of each column must be a `FlatHeaderCell`");
      }
      return flatCell.id === key;
    });
    if (nextColumn !== void 0) {
      orderedColumnMatrix.push(nextColumn.map((column) => {
        const clonedColumn = column.clone();
        clonedColumn.colstart = columnIdx;
        return clonedColumn;
      }));
    }
  });
  return orderedColumnMatrix;
};
const populateGroupHeaderCellIds = (columnMatrix) => {
  columnMatrix.forEach((columnCells) => {
    const lastCell = columnCells[columnCells.length - 1];
    if (!lastCell.isFlat()) {
      throw new Error("The last element of each column must be a `FlatHeaderCell`");
    }
    columnCells.forEach((c) => {
      if (c.isGroup()) {
        c.pushId(lastCell.id);
      }
    });
  });
};
const headerRowsForRowMatrix = (rowMatrix) => {
  return rowMatrix.map((rowCells, rowIdx) => {
    return new HeaderRow({ id: rowIdx.toString(), cells: getMergedRow(rowCells) });
  });
};
const getMergedRow = (cells) => {
  if (cells.length === 0) {
    return cells;
  }
  const mergedCells = [];
  let startIdx = 0;
  let endIdx = 1;
  while (startIdx < cells.length) {
    const cell = cells[startIdx].clone();
    if (!cell.isGroup()) {
      mergedCells.push(cell);
      startIdx++;
      continue;
    }
    endIdx = startIdx + 1;
    const ids = [...cell.ids];
    while (endIdx < cells.length) {
      const nextCell = cells[endIdx];
      if (!nextCell.isGroup()) {
        break;
      }
      if (cell.allId !== nextCell.allId) {
        break;
      }
      ids.push(...nextCell.ids);
      endIdx++;
    }
    cell.setIds(ids);
    cell.colspan = endIdx - startIdx;
    mergedCells.push(cell);
    startIdx = endIdx;
  }
  return mergedCells;
};
const createViewModel = (table, columns, { rowDataId } = {}) => {
  const { data, plugins } = table;
  const $flatColumns = getFlatColumns(columns);
  const flatColumns = readable($flatColumns);
  const originalRows = derived([data, flatColumns], ([$data, $flatColumns2]) => {
    return getBodyRows($data, $flatColumns2, { rowDataId });
  });
  const _visibleColumns = writable([]);
  const _headerRows = writable();
  const _rows = writable([]);
  const _pageRows = writable([]);
  const _tableAttrs = writable({
    role: "table"
  });
  const _tableHeadAttrs = writable({});
  const _tableBodyAttrs = writable({
    role: "rowgroup"
  });
  const pluginInitTableState = {
    data,
    columns,
    flatColumns: $flatColumns,
    tableAttrs: _tableAttrs,
    tableHeadAttrs: _tableHeadAttrs,
    tableBodyAttrs: _tableBodyAttrs,
    visibleColumns: _visibleColumns,
    headerRows: _headerRows,
    originalRows,
    rows: _rows,
    pageRows: _pageRows
  };
  const pluginInstances = Object.fromEntries(Object.entries(plugins).map(([pluginName, plugin]) => {
    const columnOptions = Object.fromEntries($flatColumns.map((c) => {
      const option = c.plugins?.[pluginName];
      if (option === void 0)
        return void 0;
      return [c.id, option];
    }).filter(nonUndefined));
    return [
      pluginName,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      plugin({ pluginName, tableState: pluginInitTableState, columnOptions })
    ];
  }));
  const pluginStates = Object.fromEntries(Object.entries(pluginInstances).map(([key, pluginInstance]) => [
    key,
    pluginInstance.pluginState
  ]));
  const tableState = {
    data,
    columns,
    flatColumns: $flatColumns,
    tableAttrs: _tableAttrs,
    tableHeadAttrs: _tableHeadAttrs,
    tableBodyAttrs: _tableBodyAttrs,
    visibleColumns: _visibleColumns,
    headerRows: _headerRows,
    originalRows,
    rows: _rows,
    pageRows: _pageRows,
    pluginStates
  };
  const deriveTableAttrsFns = Object.values(pluginInstances).map((pluginInstance) => pluginInstance.deriveTableAttrs).filter(nonUndefined);
  let tableAttrs = readable({
    role: "table"
  });
  deriveTableAttrsFns.forEach((fn) => {
    tableAttrs = fn(tableAttrs);
  });
  const finalizedTableAttrs = derived(tableAttrs, ($tableAttrs) => {
    const $finalizedAttrs = finalizeAttributes($tableAttrs);
    _tableAttrs.set($finalizedAttrs);
    return $finalizedAttrs;
  });
  const deriveTableHeadAttrsFns = Object.values(pluginInstances).map((pluginInstance) => pluginInstance.deriveTableBodyAttrs).filter(nonUndefined);
  let tableHeadAttrs = readable({});
  deriveTableHeadAttrsFns.forEach((fn) => {
    tableHeadAttrs = fn(tableHeadAttrs);
  });
  const finalizedTableHeadAttrs = derived(tableHeadAttrs, ($tableHeadAttrs) => {
    const $finalizedAttrs = finalizeAttributes($tableHeadAttrs);
    _tableHeadAttrs.set($finalizedAttrs);
    return $finalizedAttrs;
  });
  const deriveTableBodyAttrsFns = Object.values(pluginInstances).map((pluginInstance) => pluginInstance.deriveTableBodyAttrs).filter(nonUndefined);
  let tableBodyAttrs = readable({
    role: "rowgroup"
  });
  deriveTableBodyAttrsFns.forEach((fn) => {
    tableBodyAttrs = fn(tableBodyAttrs);
  });
  const finalizedTableBodyAttrs = derived(tableBodyAttrs, ($tableBodyAttrs) => {
    const $finalizedAttrs = finalizeAttributes($tableBodyAttrs);
    _tableBodyAttrs.set($finalizedAttrs);
    return $finalizedAttrs;
  });
  const deriveFlatColumnsFns = Object.values(pluginInstances).map((pluginInstance) => pluginInstance.deriveFlatColumns).filter(nonUndefined);
  let visibleColumns = flatColumns;
  deriveFlatColumnsFns.forEach((fn) => {
    visibleColumns = fn(visibleColumns);
  });
  const injectedColumns = derived(visibleColumns, ($visibleColumns) => {
    _visibleColumns.set($visibleColumns);
    return $visibleColumns;
  });
  const columnedRows = derived([originalRows, injectedColumns], ([$originalRows, $injectedColumns]) => {
    return getColumnedBodyRows($originalRows, $injectedColumns.map((c) => c.id));
  });
  const deriveRowsFns = Object.values(pluginInstances).map((pluginInstance) => pluginInstance.deriveRows).filter(nonUndefined);
  let rows = columnedRows;
  deriveRowsFns.forEach((fn) => {
    rows = fn(rows);
  });
  const injectedRows = derived(rows, ($rows) => {
    $rows.forEach((row) => {
      row.injectState(tableState);
      row.cells.forEach((cell) => {
        cell.injectState(tableState);
      });
    });
    Object.entries(pluginInstances).forEach(([pluginName, pluginInstance]) => {
      $rows.forEach((row) => {
        if (pluginInstance.hooks?.["tbody.tr"] !== void 0) {
          row.applyHook(pluginName, pluginInstance.hooks["tbody.tr"](row));
        }
        row.cells.forEach((cell) => {
          if (pluginInstance.hooks?.["tbody.tr.td"] !== void 0) {
            cell.applyHook(pluginName, pluginInstance.hooks["tbody.tr.td"](cell));
          }
        });
      });
    });
    _rows.set($rows);
    return $rows;
  });
  const derivePageRowsFns = Object.values(pluginInstances).map((pluginInstance) => pluginInstance.derivePageRows).filter(nonUndefined);
  let pageRows = injectedRows;
  derivePageRowsFns.forEach((fn) => {
    pageRows = fn(pageRows);
  });
  const injectedPageRows = derived(pageRows, ($pageRows) => {
    $pageRows.forEach((row) => {
      row.injectState(tableState);
      row.cells.forEach((cell) => {
        cell.injectState(tableState);
      });
    });
    Object.entries(pluginInstances).forEach(([pluginName, pluginInstance]) => {
      $pageRows.forEach((row) => {
        if (pluginInstance.hooks?.["tbody.tr"] !== void 0) {
          row.applyHook(pluginName, pluginInstance.hooks["tbody.tr"](row));
        }
        row.cells.forEach((cell) => {
          if (pluginInstance.hooks?.["tbody.tr.td"] !== void 0) {
            cell.applyHook(pluginName, pluginInstance.hooks["tbody.tr.td"](cell));
          }
        });
      });
    });
    _pageRows.set($pageRows);
    return $pageRows;
  });
  const headerRows = derived(injectedColumns, ($injectedColumns) => {
    const $headerRows = getHeaderRows(columns, $injectedColumns.map((c) => c.id));
    $headerRows.forEach((row) => {
      row.injectState(tableState);
      row.cells.forEach((cell) => {
        cell.injectState(tableState);
      });
    });
    Object.entries(pluginInstances).forEach(([pluginName, pluginInstance]) => {
      $headerRows.forEach((row) => {
        if (pluginInstance.hooks?.["thead.tr"] !== void 0) {
          row.applyHook(pluginName, pluginInstance.hooks["thead.tr"](row));
        }
        row.cells.forEach((cell) => {
          if (pluginInstance.hooks?.["thead.tr.th"] !== void 0) {
            cell.applyHook(pluginName, pluginInstance.hooks["thead.tr.th"](cell));
          }
        });
      });
    });
    _headerRows.set($headerRows);
    return $headerRows;
  });
  return {
    tableAttrs: finalizedTableAttrs,
    tableHeadAttrs: finalizedTableHeadAttrs,
    tableBodyAttrs: finalizedTableBodyAttrs,
    visibleColumns: injectedColumns,
    flatColumns: $flatColumns,
    headerRows,
    originalRows,
    rows: injectedRows,
    pageRows: injectedPageRows,
    pluginStates
  };
};
let Table$1 = class Table {
  data;
  plugins;
  constructor(data, plugins) {
    this.data = data;
    this.plugins = plugins;
  }
  createColumns(columns) {
    const ids = getFlatColumnIds(columns);
    const duplicateIds = getDuplicates(ids);
    if (duplicateIds.length !== 0) {
      throw new Error(`Duplicate column ids not allowed: "${duplicateIds.join('", "')}"`);
    }
    return columns;
  }
  column(def) {
    return new DataColumn(def);
  }
  group(def) {
    return new GroupColumn(def);
  }
  display(def) {
    return new DisplayColumn(def);
  }
  createViewModel(columns, options) {
    return createViewModel(this, columns, options);
  }
};
const createTable = (data, plugins = {}) => {
  return new Table$1(data, plugins);
};
function Table2($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<div class="relative w-full">`;
  push_element("div", $$payload);
  $$payload.out += `<table${spread_attributes(
    [
      {
        "class": cn("w-full caption-bottom text-sm", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>`;
  push_element("table", $$payload);
  $$payload.out += `<!--[-->`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `<!--]--></table>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  bind_props($$props, { class: className });
  pop();
}
Table2.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Table_body($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<tbody${spread_attributes(
    [
      {
        "class": cn("[&_tr:last-child]:border-0", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>`;
  push_element("tbody", $$payload);
  $$payload.out += `<!--[-->`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `<!--]--></tbody>`;
  pop_element();
  bind_props($$props, { class: className });
  pop();
}
Table_body.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Table_cell($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<td${spread_attributes(
    [
      {
        "class": cn("p-3 px-4 align-middle [&:has([role=checkbox])]:pr-0", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>`;
  push_element("td", $$payload);
  $$payload.out += `<!--[-->`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `<!--]--></td>`;
  pop_element();
  bind_props($$props, { class: className });
  pop();
}
Table_cell.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Table_head($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<th${spread_attributes(
    [
      {
        "class": cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>`;
  push_element("th", $$payload);
  $$payload.out += `<!--[-->`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `<!--]--></th>`;
  pop_element();
  bind_props($$props, { class: className });
  pop();
}
Table_head.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Table_header($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<thead${spread_attributes(
    [
      { "class": cn("[&_tr]:border-b", className) },
      $$restProps
    ],
    true,
    false,
    ""
  )}>`;
  push_element("thead", $$payload);
  $$payload.out += `<!--[-->`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `<!--]--></thead>`;
  pop_element();
  bind_props($$props, { class: className });
  pop();
}
Table_header.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Table_row($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push();
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<tr${spread_attributes(
    [
      {
        "class": cn("transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>`;
  push_element("tr", $$payload);
  $$payload.out += `<!--[-->`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `<!--]--></tr>`;
  pop_element();
  bind_props($$props, { class: className });
  pop();
}
Table_row.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function TextIcon($$payload, $$props) {
  push();
  let { icon1: Icon1, icon2: Icon2, value, max } = $$props;
  let color = "";
  $$payload.out += `<div${attr("class", `flex items-center gap-2 text-${stringify(color)} text-xs`, false)}>`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  if (Icon2) {
    $$payload.out += `<!--[-->`;
    validate_component(SplitIcon)($$payload, {
      icon1: Icon1,
      icon2: Icon2,
      class: "w-4 h-4",
      iconProps: { class: "w-2 h-2" },
      dividerProps: {
        class: cn("bg-red-500 bg-red-300 bg-green-300 bg-green-500 bg-white", `bg-${color}`)
      }
    });
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<!--[-->`;
    validate_component(Icon1)($$payload, { class: "w-3 h-3" });
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `<!--]--></div>`;
  pop_element();
  pop();
}
TextIcon.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function Tooltip_content($$payload, $$props) {
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
  let transitionConfig = value_or_fallback($$props["transitionConfig"], { y: 8, duration: 150 });
  $$payload.out += `<!--[-->`;
  validate_component(Tooltip_content$1)($$payload, spread_props([
    {
      transition,
      transitionConfig,
      sideOffset,
      class: cn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md", className)
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
Tooltip_content.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
const Root = Tooltip;
const Trigger = Tooltip_trigger;
function Avatar($$payload, $$props) {
  push();
  let { src, description } = $$props;
  $$payload.out += `<!--[-->`;
  validate_component(Root)($$payload, {
    children: add_snippet_symbol(($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      validate_component(Trigger)($$payload2, {
        children: add_snippet_symbol(($$payload3, $$slotProps2) => {
          $$payload3.out += `<div class="w-full flex items-center">`;
          push_element("div", $$payload3);
          $$payload3.out += `<img${attr("src", src, false)} class="rounded-full w-6 h-6 border" alt="avatar">`;
          push_element("img", $$payload3);
          pop_element();
          $$payload3.out += `</div>`;
          pop_element();
        })
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      validate_component(Tooltip_content)($$payload2, {
        class: "max-w-md",
        children: add_snippet_symbol(($$payload3, $$slotProps2) => {
          $$payload3.out += `<p>`;
          push_element("p", $$payload3);
          $$payload3.out += `${escape(description)}</p>`;
          pop_element();
        })
      });
      $$payload2.out += `<!--]-->`;
    })
  });
  $$payload.out += `<!--]-->`;
  pop();
}
Avatar.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function OwnerRepoNameText($$payload, $$props) {
  push();
  let { owner, repo } = $$props;
  $$payload.out += `<span class="whitespace-nowrap truncate overflow-hidden">`;
  push_element("span", $$payload);
  $$payload.out += `<span class="text-foreground/50">`;
  push_element("span", $$payload);
  $$payload.out += `${escape(owner)}</span>`;
  pop_element();
  $$payload.out += ` / <span>`;
  push_element("span", $$payload);
  $$payload.out += `${escape(repo)}</span>`;
  pop_element();
  $$payload.out += `</span>`;
  pop_element();
  pop();
}
OwnerRepoNameText.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
readable(void 0);
const addHiddenColumns = ({ initialHiddenColumnIds = [] } = {}) => () => {
  const hiddenColumnIds = writable(initialHiddenColumnIds);
  const pluginState = { hiddenColumnIds };
  const deriveFlatColumns = (flatColumns) => {
    return derived([flatColumns, hiddenColumnIds], ([$flatColumns, $hiddenColumnIds]) => {
      if ($hiddenColumnIds.length === 0) {
        return $flatColumns;
      }
      return $flatColumns.filter((c) => !$hiddenColumnIds.includes(c.id));
    });
  };
  return {
    pluginState,
    deriveFlatColumns
  };
};
const MIN_PAGE_SIZE = 1;
const createPageStore = ({ items, initialPageSize, initialPageIndex, serverSide, serverItemCount }) => {
  const pageSize = writable(initialPageSize);
  const updatePageSize = (fn) => {
    pageSize.update(($pageSize) => {
      const newPageSize = fn($pageSize);
      return Math.max(newPageSize, MIN_PAGE_SIZE);
    });
  };
  const setPageSize = (newPageSize) => updatePageSize(() => newPageSize);
  const pageIndex = writable(initialPageIndex);
  function calcPageCountAndLimitIndex([$pageSize, $itemCount]) {
    const $pageCount = Math.ceil($itemCount / $pageSize);
    pageIndex.update(($pageIndex) => {
      if ($pageCount > 0 && $pageIndex >= $pageCount) {
        return $pageCount - 1;
      }
      return $pageIndex;
    });
    return $pageCount;
  }
  let pageCount;
  if (serverSide && serverItemCount != null) {
    pageCount = derived([pageSize, serverItemCount], calcPageCountAndLimitIndex);
  } else {
    const itemCount = derived(items, ($items) => $items.length);
    pageCount = derived([pageSize, itemCount], calcPageCountAndLimitIndex);
  }
  const hasPreviousPage = derived(pageIndex, ($pageIndex) => {
    return $pageIndex > 0;
  });
  const hasNextPage = derived([pageIndex, pageCount], ([$pageIndex, $pageCount]) => {
    return $pageIndex < $pageCount - 1;
  });
  return {
    pageSize: {
      subscribe: pageSize.subscribe,
      update: updatePageSize,
      set: setPageSize
    },
    pageIndex,
    pageCount,
    serverItemCount,
    hasPreviousPage,
    hasNextPage
  };
};
const addPagination = ({ initialPageIndex = 0, initialPageSize = 10, serverSide = false, serverItemCount } = {}) => () => {
  const prePaginatedRows = writable([]);
  const paginatedRows = writable([]);
  const { pageSize, pageIndex, pageCount, hasPreviousPage, hasNextPage } = createPageStore({
    items: prePaginatedRows,
    initialPageIndex,
    initialPageSize,
    serverSide,
    serverItemCount
  });
  const pluginState = {
    pageSize,
    pageIndex,
    pageCount,
    hasPreviousPage,
    hasNextPage
  };
  const derivePageRows = (rows) => {
    return derived([rows, pageSize, pageIndex], ([$rows, $pageSize, $pageIndex]) => {
      prePaginatedRows.set($rows);
      if (serverSide) {
        paginatedRows.set($rows);
        return $rows;
      }
      const startIdx = $pageIndex * $pageSize;
      const _paginatedRows = $rows.slice(startIdx, startIdx + $pageSize);
      paginatedRows.set(_paginatedRows);
      return _paginatedRows;
    });
  };
  return {
    pluginState,
    derivePageRows
  };
};
function SortIcon($$payload, $$props) {
  push();
  let { sort, type } = $$props;
  $$payload.out += `<!--[-->`;
  if (sort === "asc" && type === "number") {
    $$payload.out += `<!--[-->`;
    validate_component(Arrow_up_0_1)($$payload, { class: "w-3 h-3 text-foreground/50" });
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<!--[-->`;
    if (sort === "desc" && type === "number") {
      $$payload.out += `<!--[-->`;
      validate_component(Arrow_down_0_1)($$payload, { class: "w-3 h-3 text-foreground/50" });
      $$payload.out += `<!--]-->`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += `<!--[-->`;
      if (sort === "asc" && type === "string") {
        $$payload.out += `<!--[-->`;
        validate_component(Arrow_up_a_z)($$payload, { class: "w-3 h-3 text-foreground/50" });
        $$payload.out += `<!--]-->`;
        $$payload.out += "<!--]-->";
      } else {
        $$payload.out += `<!--[-->`;
        if (sort === "desc" && type === "string") {
          $$payload.out += `<!--[-->`;
          validate_component(Arrow_down_a_z)($$payload, { class: "w-3 h-3 text-foreground/50" });
          $$payload.out += `<!--]-->`;
          $$payload.out += "<!--]-->";
        } else {
          $$payload.out += "<!--]!-->";
        }
        $$payload.out += "<!--]!-->";
      }
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += "<!--]!-->";
  }
  pop();
}
SortIcon.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function DataTable($$payload, $$props) {
  push();
  var $$store_subs;
  let data = $$props["data"];
  let { hiddenColumnIdArr } = data;
  const table = createTable(readable(data.rows), {
    page: addPagination({ initialPageSize: 20 }),
    hide: addHiddenColumns({ initialHiddenColumnIds: hiddenColumnIdArr })
  });
  const columns = table.createColumns([
    table.column({
      id: "avatar",
      accessor: ({ avatarUrl, eli5 }) => `${avatarUrl}////${eli5}`,
      header: "Logo",
      cell: ({ value }) => {
        const [src, description] = value.split("////");
        return createRender(Avatar, { src, description });
      }
    }),
    table.column({
      id: "name",
      accessor: ({ githubOwnerLogin, githubRepositoryName }) => `${githubOwnerLogin}/${githubRepositoryName}`,
      header: "Name",
      cell: ({ value }) => {
        const [owner, repo] = value.split("/");
        return createRender(OwnerRepoNameText, { owner, repo });
      }
    }),
    table.column({
      accessor: "stars",
      header: "Stars",
      cell: ({ value }) => createRender(TextIcon, { icon1: Star, value, max: data.maxStars }).slot(value)
    }),
    table.column({
      accessor: "issues",
      header: "Issues",
      cell: ({ value }) => createRender(TextIcon, {
        icon1: Circle_dot,
        value,
        max: data.maxIssues
      }).slot(value)
    }),
    table.column({
      accessor: "forks",
      header: "Forks",
      cell: ({ value }) => createRender(TextIcon, {
        icon1: Git_fork,
        value,
        max: data.maxForks
      }).slot(value)
    }),
    table.column({
      accessor: "contributors",
      header: "Contrib.",
      cell: ({ value }) => createRender(TextIcon, {
        icon1: Users,
        value,
        max: data.maxContributors
      }).slot(value)
    }),
    table.column({
      accessor: "starsPerContributor",
      header: "Stars/Contrib.",
      cell: ({ value }) => createRender(TextIcon, {
        icon1: Star,
        icon2: Users,
        value,
        max: data.maxStarsPerContributor
      }).slot(value)
    }),
    table.column({
      accessor: "forksPerContributor",
      header: "Forks/Contrib.",
      cell: ({ value }) => createRender(TextIcon, {
        icon1: Git_fork,
        icon2: Users,
        value,
        max: data.maxForksPerContributor
      }).slot(value)
    }),
    table.column({
      accessor: "issuesPerContributor",
      header: "Issues/Contrib.",
      cell: ({ value }) => createRender(TextIcon, {
        icon1: Circle_dot,
        icon2: Users,
        value,
        max: data.maxIssuesPerContributor
      }).slot(value)
    }),
    table.column({
      accessor: "pullRequests",
      header: "PRs",
      cell: ({ value }) => createRender(TextIcon, {
        icon1: Git_pull_request_arrow,
        value,
        max: data.maxPullRequests
      }).slot(value)
    }),
    table.column({
      accessor: "pullRequestsPerContributor",
      header: "PRs/Contrib.",
      cell: ({ value }) => createRender(TextIcon, {
        icon1: Git_pull_request_arrow,
        icon2: Users,
        value,
        max: data.maxPullRequestsPerContributor
      }).slot(value)
    })
  ]);
  const tmp = table.createViewModel(columns), headerRows = tmp.headerRows, pageRows = tmp.pageRows, tableAttrs = tmp.tableAttrs, tableBodyAttrs = tmp.tableBodyAttrs, pluginStates = tmp.pluginStates;
  tmp.flatColumns;
  const { hiddenColumnIds } = pluginStates.hide;
  console.log(hiddenColumnIdArr);
  const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
  const numberSortableColumns = [
    "stars",
    "issues",
    "forks",
    "contributors",
    "openPullRequests",
    "starsPerContributor",
    "forksPerContributor",
    "issuesPerContributor",
    "openPullRequestsPerContributor"
  ];
  const stringSortableColumns = ["name"];
  const getSortValue = (id) => {
    switch (id) {
      case "stars":
        return data.starSort;
      case "issues":
        return data.issueSort;
      case "forks":
        return data.forkSort;
      case "contributors":
        return data.contributorSort;
      case "openPullRequests":
        return data.pullRequestSort;
      case "starsPerContributor":
        return data.starsPerContributorSort;
      case "forksPerContributor":
        return data.forksPerContributorSort;
      case "issuesPerContributor":
        return data.issuesPerContributorSort;
      case "openPullRequestsPerContributor":
        return data.pullRequestsPerContributorSort;
      case "name":
        return data.nameSort;
      default:
        return null;
    }
  };
  store_set(hiddenColumnIds, hiddenColumnIdArr);
  $$payload.out += `<div class="h-full w-full">`;
  push_element("div", $$payload);
  $$payload.out += `<div class="rounded-md w-full overflow-x-auto">`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(Table2)($$payload, spread_props([
    store_get($$store_subs ??= {}, "$tableAttrs", tableAttrs),
    {
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        validate_component(Table_header)($$payload2, {
          children: add_snippet_symbol(($$payload3, $$slotProps2) => {
            const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$headerRows", headerRows));
            $$payload3.out += `<!--[-->`;
            for (let $$index_1 = 0; $$index_1 < each_array.length; $$index_1++) {
              const headerRow = each_array[$$index_1];
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<!--[-->`;
              validate_component(Subscribe)($$payload3, {
                rowAttrs: headerRow.attrs(),
                rowProps: headerRow.props(),
                children: add_snippet_symbol(($$payload4, $$slotProps3) => {
                  $$slotProps3.rowProps;
                  $$payload4.out += `<!--[-->`;
                  validate_component(Table_row)($$payload4, {
                    children: add_snippet_symbol(($$payload5, $$slotProps4) => {
                      const each_array_1 = ensure_array_like(headerRow.cells);
                      $$payload5.out += `<!--[-->`;
                      for (let $$index = 0; $$index < each_array_1.length; $$index++) {
                        const cell = each_array_1[$$index];
                        $$payload5.out += "<!--[-->";
                        $$payload5.out += `<!--[-->`;
                        validate_component(Subscribe)($$payload5, {
                          attrs: cell.attrs(),
                          props: cell.props(),
                          children: add_snippet_symbol(($$payload6, $$slotProps5) => {
                            const attrs = $$slotProps5.attrs;
                            $$slotProps5.props;
                            $$payload6.out += `<!--[-->`;
                            validate_component(Table_head)($$payload6, spread_props([
                              attrs,
                              {
                                class: "px-[1.125rem]",
                                children: add_snippet_symbol(($$payload7, $$slotProps6) => {
                                  $$payload7.out += `<div class="flex gap-1.5 items-center">`;
                                  push_element("div", $$payload7);
                                  $$payload7.out += `<!--[-->`;
                                  validate_component(Render)($$payload7, { of: cell.render() });
                                  $$payload7.out += `<!--]--> <!--[-->`;
                                  if (numberSortableColumns.includes(cell.id)) {
                                    $$payload7.out += `<!--[-->`;
                                    validate_component(SortIcon)($$payload7, {
                                      sort: getSortValue(cell.id),
                                      type: "number"
                                    });
                                    $$payload7.out += `<!--]-->`;
                                    $$payload7.out += "<!--]-->";
                                  } else {
                                    $$payload7.out += "<!--]!-->";
                                  }
                                  $$payload7.out += ` <!--[-->`;
                                  if (stringSortableColumns.includes(cell.id)) {
                                    $$payload7.out += `<!--[-->`;
                                    validate_component(SortIcon)($$payload7, {
                                      sort: getSortValue(cell.id),
                                      type: "string"
                                    });
                                    $$payload7.out += `<!--]-->`;
                                    $$payload7.out += "<!--]-->";
                                  } else {
                                    $$payload7.out += "<!--]!-->";
                                  }
                                  $$payload7.out += `</div>`;
                                  pop_element();
                                })
                              }
                            ]));
                            $$payload6.out += `<!--]-->`;
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
              $$payload3.out += `<!--]-->`;
              $$payload3.out += "<!--]-->";
            }
            $$payload3.out += "<!--]-->";
          })
        });
        $$payload2.out += `<!--]--> <!--[-->`;
        validate_component(Table_body)($$payload2, spread_props([
          store_get($$store_subs ??= {}, "$tableBodyAttrs", tableBodyAttrs),
          {
            children: add_snippet_symbol(($$payload3, $$slotProps2) => {
              const each_array_2 = ensure_array_like(store_get($$store_subs ??= {}, "$pageRows", pageRows));
              $$payload3.out += `<!--[-->`;
              for (let $$index_3 = 0; $$index_3 < each_array_2.length; $$index_3++) {
                const row = each_array_2[$$index_3];
                $$payload3.out += "<!--[-->";
                $$payload3.out += `<!--[-->`;
                validate_component(Subscribe)($$payload3, {
                  rowAttrs: row.attrs(),
                  children: add_snippet_symbol(($$payload4, $$slotProps3) => {
                    const rowAttrs = $$slotProps3.rowAttrs;
                    $$payload4.out += `<!--[-->`;
                    validate_component(Table_row)($$payload4, spread_props([
                      rowAttrs,
                      {
                        class: "px-[1.125rem] cursor-pointer",
                        children: add_snippet_symbol(($$payload5, $$slotProps4) => {
                          const each_array_3 = ensure_array_like(row.cells);
                          $$payload5.out += `<!--[-->`;
                          for (let $$index_2 = 0; $$index_2 < each_array_3.length; $$index_2++) {
                            const cell = each_array_3[$$index_2];
                            $$payload5.out += "<!--[-->";
                            $$payload5.out += `<!--[-->`;
                            validate_component(Subscribe)($$payload5, {
                              attrs: cell.attrs(),
                              children: add_snippet_symbol(($$payload6, $$slotProps5) => {
                                const attrs = $$slotProps5.attrs;
                                $$payload6.out += `<!--[-->`;
                                validate_component(Table_cell)($$payload6, spread_props([
                                  attrs,
                                  {
                                    children: add_snippet_symbol(($$payload7, $$slotProps6) => {
                                      $$payload7.out += `<!--[-->`;
                                      validate_component(Render)($$payload7, { of: cell.render() });
                                      $$payload7.out += `<!--]-->`;
                                    })
                                  }
                                ]));
                                $$payload6.out += `<!--]-->`;
                              })
                            });
                            $$payload5.out += `<!--]-->`;
                            $$payload5.out += "<!--]-->";
                          }
                          $$payload5.out += "<!--]-->";
                        })
                      }
                    ]));
                    $$payload4.out += `<!--]-->`;
                  })
                });
                $$payload3.out += `<!--]-->`;
                $$payload3.out += "<!--]-->";
              }
              $$payload3.out += "<!--]-->";
            })
          }
        ]));
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]--></div>`;
  pop_element();
  $$payload.out += ` <div class="flex items-center space-x-4 py-4 ml-4 pb-20 md:pb-4">`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(Button)($$payload, {
    variant: "outline",
    size: "sm",
    disabled: !store_get($$store_subs ??= {}, "$hasPreviousPage", hasPreviousPage),
    children: add_snippet_symbol(($$payload2, $$slotProps) => {
      $$payload2.out += `Previous`;
    })
  });
  $$payload.out += `<!--]--> <!--[-->`;
  validate_component(Button)($$payload, {
    variant: "outline",
    size: "sm",
    disabled: !store_get($$store_subs ??= {}, "$hasNextPage", hasNextPage),
    children: add_snippet_symbol(($$payload2, $$slotProps) => {
      $$payload2.out += `Next`;
    })
  });
  $$payload.out += `<!--]--></div>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
DataTable.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  DataTable as D,
  SplitIcon as S
};
