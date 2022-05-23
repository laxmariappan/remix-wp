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

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.jsx
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

// route:/Users/lax/local/remix-wp/app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  Layout: () => Layout,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/components/footer.jsx
function Footer() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white pb-6 sm:pb-8 lg:pb-12"
  }, /* @__PURE__ */ React.createElement("footer", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-indigo-500 py-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-screen-2xl px-4 md:px-8 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:flex-row justify-between items-center gap-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center md:text-left mb-3 md:mb-0"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-100 font-bold uppercase tracking-widest"
  }, "Newsletter"), /* @__PURE__ */ React.createElement("p", {
    className: "text-indigo-200"
  }, "Subscribe to our newsletter")), /* @__PURE__ */ React.createElement("form", {
    className: "w-full md:max-w-md flex gap-2"
  }, /* @__PURE__ */ React.createElement("input", {
    placeholder: "Email",
    className: "w-full flex-1 bg-indigo-400 text-white placeholder-indigo-100 border border-white focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "inline-block bg-white hover:bg-gray-100 focus-visible:ring ring-indigo-300 text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2"
  }, "Send"))))), /* @__PURE__ */ React.createElement("div", {
    className: "pt-12 lg:pt-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-screen-2xl px-4 md:px-8 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-full lg:col-span-2 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:-mt-2 mb-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/",
    className: "inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2",
    "aria-label": "logo"
  }, "Remix WP Demo")), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-500 sm:pr-8 mb-6"
  }, "A quick demo by Lax Mariappan"), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/laxmariappan/remix-wp/",
    target: "_blank",
    className: "text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-5 h-5",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
  }))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-800 font-bold tracking-widest uppercase mb-4"
  }, "Support"), /* @__PURE__ */ React.createElement("nav", {
    className: "flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
  }, "Contact")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
  }, "Documentation")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
  }, "Chat")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
  }, "FAQ")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-800 font-bold tracking-widest uppercase mb-4"
  }, "Legal"), /* @__PURE__ */ React.createElement("nav", {
    className: "flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
  }, "Terms of Service")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
  }, "Privacy Policy")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
  }, "Cookie settings"))))), /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-400 text-sm text-center border-t py-8"
  }, "Thanks to Remix team, WebDevStudios, and Flowrift Tailwind Template."))))));
}

// app/components/header.jsx
function Header() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-screen-2xl px-4 md:px-8 mx-auto"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "flex justify-between items-center py-4 md:py-8 mb-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/",
    className: "inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5",
    "aria-label": "logo"
  }, "Remix WP Demo"), /* @__PURE__ */ React.createElement("nav", {
    className: "hidden lg:flex gap-12"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/posts",
    className: "text-indigo-500 text-lg font-semibold"
  }, "Blog"), /* @__PURE__ */ React.createElement("a", {
    href: "/about",
    className: "text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
  }, "About")), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/laxmariappan/remix-wp/",
    className: "hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
  }, "View Code"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  })), "Menu")), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-4"
  }))));
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-X34OD64N.css";

// route:/Users/lax/local/remix-wp/app/root.jsx
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null)));
}
function Document({ children }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-gray-100"
  }, children, /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), children, /* @__PURE__ */ React.createElement(Footer, null));
}
function ErrorBoundary({ error }) {
  console.log(error);
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("section", {
    className: "p-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl"
  }, /* @__PURE__ */ React.createElement("h1", null, "There was an Error"), /* @__PURE__ */ React.createElement("p", null, error.message)))));
}

// route:/Users/lax/local/remix-wp/app/routes/posts/comments.jsx
var comments_exports = {};
__export(comments_exports, {
  action: () => action,
  default: () => Comments
});
var import_react3 = require("@remix-run/react");
var action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  return { data };
};
function Comments() {
  const actionData = (0, import_react3.useActionData)();
  const comment = actionData == null ? void 0 : actionData.data;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    className: "p-6 min-h-screen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl"
  }, /* @__PURE__ */ React.createElement("h2", null, "Submitted Comment"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, comment == null ? void 0 : comment.name), /* @__PURE__ */ React.createElement("li", null, comment == null ? void 0 : comment.email), /* @__PURE__ */ React.createElement("li", null, comment == null ? void 0 : comment.content)))));
}

// route:/Users/lax/local/remix-wp/app/routes/posts/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostsIndex,
  loader: () => loader,
  meta: () => meta2
});
var import_react5 = require("@remix-run/react");

// app/components/comments-form.jsx
var import_react4 = require("@remix-run/react");
function CommentForm() {
  const actionData = (0, import_react4.useActionData)();
  return /* @__PURE__ */ React.createElement(import_react4.Form, {
    method: "post",
    action: "/posts/comments"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 gap-6 w-1/2"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block"
  }, "Name: ", /* @__PURE__ */ React.createElement("input", {
    name: "name",
    type: "text",
    required: true,
    className: "form-input px-4 py-3 mt-1 block w-full"
  })), /* @__PURE__ */ React.createElement("label", {
    className: "block"
  }, "Email: ", /* @__PURE__ */ React.createElement("input", {
    name: "email",
    type: "email",
    required: true,
    className: "form-input px-4 py-3 mt-1 block w-full"
  })), /* @__PURE__ */ React.createElement("label", {
    className: "block"
  }, "Comment: ", /* @__PURE__ */ React.createElement("textarea", {
    name: "content",
    className: "form-textarea px-4 py-3 mt-1 block w-full"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "bg-indigo-500 text-white px-4 py-3 mt-1 block w-full"
  }, "Add Comment")));
}

// route:/Users/lax/local/remix-wp/app/routes/posts/$slug.jsx
var loader = async ({ params }) => {
  const result = await fetch(`https://wordpress.org/news/wp-json/wp/v2/posts?slug=${params.slug}`);
  const posts = await result.json();
  return posts;
};
var meta2 = ({ data, params }) => {
  if (!data) {
    return {
      title: "Remix WP blog demo: Post not found",
      description: "Error: post not found"
    };
  }
  return {
    title: data[0].title.rendered,
    description: data[0].excerpt.rendered
  };
};
function PostsIndex() {
  let data = (0, import_react5.useLoaderData)();
  const date = new Date(data[0].date);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    className: "p-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-bold text-indigo-600"
  }, data[0].title.rendered), /* @__PURE__ */ React.createElement("div", {
    className: "py-4 my-4"
  }, date.toLocaleDateString("us")), /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: data[0].content.rendered }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl"
  }, /* @__PURE__ */ React.createElement(CommentForm, null), /* @__PURE__ */ React.createElement("p", {
    className: "float-none my-10"
  }, /* @__PURE__ */ React.createElement(import_react5.Link, {
    to: "../posts",
    className: "bg-gray-900 text-white p-4 mt-10"
  }, "Back to posts list")))));
}

// route:/Users/lax/local/remix-wp/app/routes/posts/index.jsx
var posts_exports = {};
__export(posts_exports, {
  default: () => PostsIndex2,
  loader: () => loader2,
  meta: () => meta3
});
var import_node = require("@remix-run/node");
var import_react6 = require("@remix-run/react");
var loader2 = async () => {
  const result = await fetch("https://wordpress.org/news/wp-json/wp/v2/posts");
  const posts = await result.json();
  return posts;
};
var meta3 = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
function PostsIndex2() {
  let data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3"
  }, data.map(function(item, index) {
    return /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: "p-6 bg-indigo-500"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "  mb-5 text-white "
    }, /* @__PURE__ */ React.createElement("h3", {
      className: "text-xl mb-3 font-bold"
    }, /* @__PURE__ */ React.createElement(import_react6.Link, {
      to: item.slug
    }, item.title.rendered)), /* @__PURE__ */ React.createElement("div", {
      className: "mb-3",
      dangerouslySetInnerHTML: { __html: data[0].excerpt.rendered }
    }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(import_react6.Link, {
      to: item.slug,
      className: "bg-gray-900 text-white p-4 my-5"
    }, "Read more")));
  })))));
}

// route:/Users/lax/local/remix-wp/app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
function About() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    className: "min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864",
    loading: "lazy",
    alt: "Photo by Fakurian Design",
    className: "w-full h-full object-cover object-center absolute inset-0"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "bg-indigo-500 mix-blend-multiply absolute inset-0"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sm:max-w-xl flex flex-col items-center relative p-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8"
  }, "About"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12"
  }, "WordPress + Remix Demo"), /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex flex-col sm:flex-row sm:justify-center gap-2.5"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/posts",
    className: "inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
  }, "Recent Posts")))), /* @__PURE__ */ React.createElement("section", {
    className: "  justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-gray-800 text-2xl sm:text-xl text-center mb-4 md:mb-8"
  }, "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. "), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-500 text-lg sm:text-xl text-center mb-4 md:mb-8"
  }, "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.")));
}

// route:/Users/lax/local/remix-wp/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta4
});
var meta4 = () => {
  return {
    title: "Remix Starter - WordPress Demo",
    description: "Welcome to remix!"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "remix__page "
  }, /* @__PURE__ */ React.createElement("section", {
    className: "min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500",
    loading: "lazy",
    alt: "Photo by Fakurian Design",
    className: "w-full h-full object-cover object-center absolute inset-0"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "bg-indigo-500 mix-blend-multiply absolute inset-0"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sm:max-w-xl flex flex-col items-center relative p-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8"
  }, "Welcome to"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12"
  }, "WordPress + Remix Demo"), /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex flex-col sm:flex-row sm:justify-center gap-2.5"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/posts",
    className: "inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
  }, "Recent Posts")))), /* @__PURE__ */ React.createElement("section", {
    className: "  justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-gray-800 text-2xl sm:text-xl text-center mb-4 md:mb-8"
  }, "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. "), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-500 text-lg sm:text-xl text-center mb-4 md:mb-8"
  }, "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat."))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "41b155c5", "entry": { "module": "/build/entry.client-63JWIHPY.js", "imports": ["/build/_shared/chunk-5VYVOICX.js", "/build/_shared/chunk-TOAMQMCD.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-Z5FUTTRZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-SFOL2WVA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-I5SF45TP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/$slug": { "id": "routes/posts/$slug", "parentId": "root", "path": "posts/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/$slug-BG4K55SG.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/comments": { "id": "routes/posts/comments", "parentId": "root", "path": "posts/comments", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/comments-3ZDKSA7Z.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "root", "path": "posts", "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-J42CYX76.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-41B155C5.js" };

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
  "routes/posts/comments": {
    id: "routes/posts/comments",
    parentId: "root",
    path: "posts/comments",
    index: void 0,
    caseSensitive: void 0,
    module: comments_exports
  },
  "routes/posts/$slug": {
    id: "routes/posts/$slug",
    parentId: "root",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "root",
    path: "posts",
    index: true,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
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

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
