(function() {
  var f = window.__fuse = window.__fuse || {};
  var modules = f.modules = f.modules || {}; f.dt = function (x) { return x && x.__esModule ? x : { "default": x }; };

f.modules = modules;
  f.bundle = function(collection, fn) {
    for (var num in collection) {
      modules[num] = collection[num];
    }
    fn ? fn() : void 0;
  };
  f.c = {};
  f.r = function(id) {
    var cached = f.c[id];
    if (cached) return cached.m.exports;
    var module = modules[id];
    if (!module) {
      
      throw new Error('Module ' + id + ' was not found');
    }
    cached = f.c[id] = {};
    cached.exports = {};
    cached.m = { exports: cached.exports };
    module(f.r, cached.exports, cached.m);
    return cached.m.exports;
  }; 
})();
__fuse.bundle({

// src/index.css @5
5: function(__fusereq, exports, module){
__fusereq(6)("src/index.css","body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n")
},

// src/serviceWorker.ts @8
8: function(__fusereq, exports, module){
const isLocalhost = Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if ("development" === 'production' && ('serviceWorker' in navigator)) {
    const publicUrl = new URL(undefined, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }
    window.addEventListener('load', () => {
      const swUrl = `${undefined}/service-worker.js`;
      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config);
        navigator.serviceWorker.ready.then(() => {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://bit.ly/CRA-PWA');
        });
      } else {
        registerValidSW(swUrl, config);
      }
    });
  }
}
exports.register = register;
function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.');
            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            console.log('Content is cached for offline use.');
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}
function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    const contentType = response.headers.get('content-type');
    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}
function unregister() {
  if (('serviceWorker' in navigator)) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}
exports.unregister = unregister;

},

// src/App.tsx @7
7: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(3);
var react_1d = __fuse.dt(react_1);
var logo_svg_1 = __fusereq(12);
var logo_svg_1d = __fuse.dt(logo_svg_1);
__fusereq(13);
function App() {
  return react_1d.default.createElement("div", {
    className: "App"
  }, react_1d.default.createElement("header", {
    className: "App-header"
  }, react_1d.default.createElement("img", {
    src: logo_svg_1d.default,
    className: "App-logo",
    alt: "logo"
  }), react_1d.default.createElement("p", null, "\n          Edit ", react_1d.default.createElement("code", null, "src/App.tsx"), " and save to reload.\n        "), react_1d.default.createElement("a", {
    className: "App-link",
    href: "https://github.com/arifwidianto08",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\n          Learn React with Arif\n        ")), react_1d.default.createElement("div", null, react_1d.default.createElement("p", null, " ", "\n          Please learn with carefully and use the documentation as your learn\n          partner!\n        ")));
}
exports.default = App;

},

// src/index.tsx @1
1: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(3);
var react_1d = __fuse.dt(react_1);
var react_dom_1 = __fusereq(4);
var react_dom_1d = __fuse.dt(react_dom_1);
__fusereq(5);
var App_1 = __fusereq(7);
var App_1d = __fuse.dt(App_1);
var serviceWorker_1 = __fusereq(8);
react_dom_1d.default.render(react_1d.default.createElement(react_1d.default.StrictMode, null, react_1d.default.createElement(App_1d.default, null)), document.getElementById('root'));
serviceWorker_1.register();

},

// src/logo.svg @12
12: function(__fusereq, exports, module){
module.exports = "/resources/044fa49cc.svg";
},

// src/App.css @13
13: function(__fusereq, exports, module){
__fusereq(6)("src/App.css",".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n")
}
})
//# sourceMappingURL=app.js.map