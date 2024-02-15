import { j as r } from "./jsx-runtime-DQ32znRX.js";
import "./index-DH5ua8nC.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
const d = (e) =>
  r.jsx("button", {
    "data-testid": "fetch-button",
    disabled: e.loading,
    className:
      "enabled:bg-black enabled:text-white disabled:bg-gray-400 disabled:text-gray-500 py-2.5 px-5 uppercase font-bold",
    onClick: () => e.callback(),
    children: e.children || "Button",
  });
try {
  (button.displayName = "button"),
    (button.__docgenInfo = {
      description: "",
      displayName: "button",
      props: {
        callback: {
          defaultValue: null,
          description: "",
          name: "callback",
          required: !0,
          type: { name: "() => void" },
        },
        loading: {
          defaultValue: null,
          description: "",
          name: "loading",
          required: !0,
          type: { name: "boolean | undefined" },
        },
      },
    });
} catch {}
const c = {
    title: "Components/Button",
    component: d,
    tags: ["autodocs"],
    argTypes: { loading: { control: { type: "boolean" } } },
  },
  t = { args: { loading: !1 } };
var a, o, n;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((a = t.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `{
  args: {
    loading: false
  }
}`,
      ...((n = (o = t.parameters) == null ? void 0 : o.docs) == null
        ? void 0
        : n.source),
    },
  },
};
const u = ["Loading"];
export { t as Loading, u as __namedExportsOrder, c as default };
