// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scriptP2.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var menuBtn = document.querySelector("#menu-mobile");
var firstBar = document.querySelector("#menu-mobile span:first-child");
var secondBar = document.querySelector("#menu-mobile span:nth-child(2)");
var thirdBar = document.querySelector("#menu-mobile span:last-child");
var navMobile = document.querySelector(".nav__mobile");
menuBtn.addEventListener("click", function () {
  if (firstBar.classList.contains("transition")) {
    firstBar.classList.remove("transition");
    secondBar.classList.remove("transition2");
    thirdBar.classList.remove("transition3");
    navMobile.classList.remove("appear");
  } else {
    firstBar.classList.add("transition");
    secondBar.classList.add("transition2");
    thirdBar.classList.add("transition3");
    navMobile.classList.add("appear");
  }
});
var cardPerso = document.querySelector(".perso__cards"); // const containerNames = document.querySelector(".perso__names");
// const epPerso = document.querySelector(".perso__ep")

var urls = ["https://rickandmortyapi.com/api/character", "https://rickandmortyapi.com/api/character/?page=2", "https://rickandmortyapi.com/api/character/?page=3"];

for (var index = 0; index < urls.length; index++) {
  var url = urls[index];
}

Promise.all(urls.map(function (url) {
  return fetch(url);
})).then(function (resp) {
  return Promise.all(resp.map(function (r) {
    return r.json();
  }));
}).then(function (data) {
  var tabSpecies = document.getElementsByClassName('species');

  var _loop = function _loop(i) {
    // console.log(tabSpecies);
    tabSpecies[i].addEventListener('click', function () {
      var imgHomePersoMob = document.querySelector('.imgMob');
      var imgHomePersoDes = document.querySelector('.imgDes');
      imgHomePersoMob.classList.add('hide');
      imgHomePersoDes.style.display = 'none';
      var tabData = data[0].results.concat(data[1].results, data[2].results);
      cardPerso.innerHTML = "";

      var _iterator = _createForOfIteratorHelper(tabData),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var perso = _step.value;

          if (perso.species == "Human" && i == 0) {
            createCard(perso);
            getCharacterDetails(perso);
            var listUriCharacter = perso.episode; // console.log(perso.episode)    

            getCharacterEpisodes(listUriCharacter, perso);
          } else if (perso.species === "Alien" && i == 1) {
            createCard(perso);
            getCharacterDetails(perso);
            var _listUriCharacter = perso.episode; // console.log(perso.episode)    

            getCharacterEpisodes(_listUriCharacter, perso);
          } else if (perso.species != "Human" && perso.species != "Alien" && i == 2) {
            createCard(perso);
            getCharacterDetails(perso);
            var _listUriCharacter2 = perso.episode; // console.log(perso.episode)    

            getCharacterEpisodes(_listUriCharacter2, perso);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var allCards = document.querySelectorAll(".perso__cards");

      var _loop2 = function _loop2(card) {
        var btnsPerso = document.querySelectorAll('.button__perso');
        var cpt = 0;
        console.log(btnsPerso);

        for (var btn = 0; btn < btnsPerso.length; btn++) {
          btnsPerso[btn].addEventListener('click', function (event) {
            //console.log(event.target.parentNode.parentNode.nextElementSibling)
            var cibleClick = event.target.parentNode.parentNode.nextElementSibling;
            var currentElement = document.querySelector('.show');
            cpt++;
            console.log(cpt, currentElement);

            if (cpt > 1) {
              cibleClick.classList.remove('hide');
              cibleClick.classList.add('show');
              currentElement.classList.remove('show');
              currentElement.classList.add('hide');
            } else if (cpt = 1) {
              cibleClick.classList.remove('hide');
              cibleClick.classList.add('show');
            }
          });
        }
      };

      for (var card = 0; card < allCards.length; card++) {
        _loop2(card);
      }
    });
  };

  for (var i = 0; i < tabSpecies.length; i++) {
    _loop(i);
  }
}).catch(function (error) {
  console.error(error);
});

function createCard(character) {
  cardPerso.innerHTML += "<div class=\"perso__card id=\"perso-".concat(character.id, "\">\n                                <div class=\"container__img--perso\">\n                                        <img class=\"avatar\" src=\"").concat(character.image, "\">\n                                </div>\n                                <div class=\"container__button\">\n                                    <button class=\"button__perso\" id=\"btnPerso-").concat(character.id, "\">").concat(character.name, "</button>\n                                </div>\n                            </div>");
}

function getCharacterDetails(results) {
  cardPerso.innerHTML += "<div class=\"perso__details hide\" id=\"details-char-".concat(results.id, "\"><div>Status : ").concat(results.status, "</div>\n    <div>Esp\xE8ce : ").concat(results.species, "</div>\n    <div>Type : ").concat(results.type, "</div>\n    <div>Genre : ").concat(results.gender, "</div>\n    <div>Origine : ").concat(results.origin.name, "</div>\n    <div>Dernier lieu : ").concat(results.location.name, "</div>\n    <div id=\"ep-char-").concat(results.id, "\" class=\"ep__number\">Pr\xE9sent dans ").concat(results.episode.length, " \xE9pisode(s).</div><ul id=\"list-ep-").concat(results.id, "\" class=\"listEp\"></ul></div>");
}

function getCharacterEpisodes(listUriEpisode, results) {
  var reponse = [];

  var _iterator2 = _createForOfIteratorHelper(listUriEpisode),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var uri = _step2.value;
      fetch(uri).then(function (response) {
        // console.log(response.json())           
        return response.json();
      }).then(function (ep) {
        // console.log(ep)
        // reponse.push(ep);
        var ulEp = document.getElementById("list-ep-".concat(results.id));
        ulEp.innerHTML += "<li class=\"elemList__ep\">".concat(ep.name, "</li>");
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
},{}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53119" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scriptP2.js"], null)
//# sourceMappingURL=/scriptP2.c1fb8bec.js.map