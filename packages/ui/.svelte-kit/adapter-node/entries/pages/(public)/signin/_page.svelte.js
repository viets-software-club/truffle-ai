import { b as pop, p as push } from "../../../../chunks/index3.js";
import "clsx";
import "dequal";
import "../../../../chunks/index5.js";
import "../../../../chunks/index7.js";
import "../../../../chunks/input.js";
import "../../../../chunks/index4.js";
import "../../../../chunks/separator.js";
import "../../../../chunks/client.js";
import "devalue";
import "../../../../chunks/index.js";
var FetchStatus;
(function(FetchStatus2) {
  FetchStatus2[FetchStatus2["Idle"] = 0] = "Idle";
  FetchStatus2[FetchStatus2["Submitting"] = 1] = "Submitting";
  FetchStatus2[FetchStatus2["Delayed"] = 2] = "Delayed";
  FetchStatus2[FetchStatus2["Timeout"] = 3] = "Timeout";
})(FetchStatus || (FetchStatus = {}));
let LEGACY_MODE = false;
try {
  if (SUPERFORMS_LEGACY)
    LEGACY_MODE = true;
} catch {
}
let STORYBOOK_MODE = false;
try {
  if (globalThis.STORIES)
    STORYBOOK_MODE = true;
} catch {
}
let legacyMode = false;
try {
  if (SUPERFORMS_LEGACY)
    legacyMode = true;
} catch {
}
function _page($$payload, $$props) {
  push();
  $$payload.out += `<!--[-->`;
  {
    $$payload.out += "<!--]!-->";
  }
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  _page as default
};
