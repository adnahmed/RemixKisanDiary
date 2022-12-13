var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/sandbox/app/root.tsx
var root_exports = {};
__export(root_exports, {
  MyContext: () => MyContext2,
  default: () => App,
  meta: () => meta
});
var import_react6 = require("@remix-run/react");
var import_react7 = require("react");

// app/components/Header.tsx
var import_react5 = require("react");

// app/root.tsx
var import_react3 = require("@remix-run/react");
var import_react4 = require("react");

// app/components/Footer.tsx
var import_react2 = require("react");
function Footer() {
  const result = (0, import_react2.useContext)(MyContext);
  console.log(result);
  return /* @__PURE__ */ React.createElement("h3", null, "Footer ", result);
}

// app/root.tsx
var MyContext = (0, import_react4.createContext)("default");

// app/components/Header.tsx
function Header() {
  const result = (0, import_react5.useContext)(MyContext);
  console.log(result);
  return /* @__PURE__ */ React.createElement("h1", null, "Header ", result);
}

// route:/sandbox/app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
var MyContext2 = (0, import_react7.createContext)("default");
function Document({ children }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react6.Meta, null), /* @__PURE__ */ React.createElement(import_react6.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "root-body"
  }, /* @__PURE__ */ React.createElement(MyContext2.Provider, {
    value: "bonjour!"
  }, /* @__PURE__ */ React.createElement(Header, null)), children, /* @__PURE__ */ React.createElement(import_react6.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react6.Scripts, null), /* @__PURE__ */ React.createElement(import_react6.LiveReload, null), /* @__PURE__ */ React.createElement(MyContext2.Provider, {
    value: "au revoir!"
  }, /* @__PURE__ */ React.createElement(Footer, null))));
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_react6.Outlet, null));
}

// route:/sandbox/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "m-2"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-bold"
  }, "Welcome to Remix Starter!"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "249e7cb7", "entry": { "module": "/build/entry.client-CU5IULVY.js", "imports": ["/build/_shared/chunk-PNNKWNTV.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-Z3424M2A.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-JZEW7OII.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-249E7CB7.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
