import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-PNNKWNTV.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/sandbox/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();
var import_react4 = __toESM(require_react());

// app/components/Header.tsx
init_react();
var import_react = __toESM(require_react());
function Header() {
  const result = (0, import_react.useContext)(MyContext);
  console.log(result);
  return /* @__PURE__ */ React.createElement("h1", null, "Header ", result);
}

// app/components/Footer.tsx
init_react();
var import_react2 = __toESM(require_react());
function Footer() {
  const result = (0, import_react2.useContext)(MyContext);
  console.log(result);
  return /* @__PURE__ */ React.createElement("h3", null, "Footer ", result);
}

// app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
var MyContext = (0, import_react4.createContext)("default");
function Document({ children }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "root-body"
  }, /* @__PURE__ */ React.createElement(MyContext.Provider, {
    value: "bonjour!"
  }, /* @__PURE__ */ React.createElement(Header, null)), children, /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null), /* @__PURE__ */ React.createElement(MyContext.Provider, {
    value: "au revoir!"
  }, /* @__PURE__ */ React.createElement(Footer, null))));
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Outlet, null));
}
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-Z3424M2A.js.map
