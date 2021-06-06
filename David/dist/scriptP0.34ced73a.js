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
})({"scriptP0.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
fetch("https://rickandmortyapi.com/api/episode")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {        
        console.log(data);
        */

/*
let select = document.querySelector("#season");
let tabResult = data.results;
const mainContainer = document.querySelector(".main");
    //console.log(select);
    select.addEventListener("change", (e) =>{
        let season = e.target.value;
        console.log(season);
        console.log(tabResult);
        mainContainer.innerHTML = "";
        for (let i = 0; i < tabResult.length; i++) {
            //console.log(tabResult[i].episode);
            let splitSeason = tabResult[i].episode.split("");
            console.log(splitSeason[2]);
            if (season == "s1" && splitSeason[2] == 1) {
                addNewCard(tabResult[i]);
            }
            else if (season == "s2" && splitSeason[2] == 2) {
                addNewCard(tabResult[i]);
            }
        }
            //console.log(splitSeason);
      })
      */

/*})

.catch(function (error) {
   console.error(error);
})  */

/*
fetch("https://rickandmortyapi.com/api/episode?page=2")
    .then(function (resp) {
        return resp.json();
    })
    .then(function(data2){
        console.log(data2);
    })
    */

/*
let tabFetch = [fetch("https://rickandmortyapi.com/api/episode"), fetch("https://rickandmortyapi.com/api/episode?page=2"), fetch("https://rickandmortyapi.com/api/episode?page=3")]
for (let j = 0; j < tabFetch.length; j++) {
tabFetch[j].then(function (res) {
    return res.json();
})
.then(function (data) {        
    let tabData = [data.results];
    //console.log(tabData[0]);
    for (let i = 0; i < tabData.length; i++) {
        //console.log(tabData[0]);
        for (let j = 0; j < tabData[i].length; j++) {
            //console.log(tabData[i][j]);
            let select = document.querySelector("#season");
            const mainContainer = document.querySelector(".main");
            let allDataResults = (tabData[i])[j];
            //console.log(allDataResults.episode);
            select.addEventListener("change", (e) =>{
                let season = e.target.value;
                let splitSeason = allDataResults.episode.split("");
                //console.log(splitSeason[2]);
                //mainContainer.innerHTML = "";
                //console.log(splitSeason);
                if (season == "s1" && splitSeason[2] == 1) {
                    //console.log(allDataResults);
                    addNewCard(allDataResults);
                } else if (season == "s2" && splitSeason[2] == 2) {
                    addNewCard(allDataResults);
                } else if (season == "s3" && splitSeason[2] == 3) {
                    addNewCard(allDataResults);
                } else if (season == "s4" && splitSeason[2] == 4) {
                    addNewCard(allDataResults);
                } 
            })
        }
    }
    
 })
.catch(function (error) {
    console.error(error);
})

}
*/
var urls = ["https://rickandmortyapi.com/api/episode", "https://rickandmortyapi.com/api/episode?page=2", "https://rickandmortyapi.com/api/episode?page=3"];

for (var i = 0; i < urls.length; i++) {
  var url = urls[i];
}

Promise.all(urls.map(function (url) {
  return fetch(url);
})).then(function (resp) {
  return Promise.all(resp.map(function (r) {
    return r.json();
  }));
}).then(function (data) {
  //console.log(data);
  for (var j = 0; j < data.length; j++) {//console.log(data[j].results);
  }

  var tab = data[0].results.concat(data[1].results, data[2].results); //console.log(tab);

  var select = document.querySelector("#season");
  var mainContainer = document.querySelector(".main"); //console.log(select);

  for (var _i = 0; _i < tab.length; _i++) {
    //console.log(tabResult[i].episode);
    var splitSeason = tab[_i].episode.split(""); //console.log(splitSeason[2]);


    if (splitSeason[2] == 1) {
      addNewCard(tab[_i]);
    }
  }

  var ep = document.querySelectorAll(".card--name");

  var _loop = function _loop(_i2) {
    ep[_i2].addEventListener('click', function (e) {
      //console.log(tab.filter(x => x.id == ep[i].id));
      var objetEpisodeClicked = tab.filter(function (x) {
        return x.id == ep[_i2].id;
      })[0];
      var chara = document.querySelector(".characters");
      var mainContainer = document.querySelector(".main"); //mainContainer.classList.toggle("slide-right");

      chara.innerHTML = "";
      chara.classList.toggle("popup");

      var _iterator2 = _createForOfIteratorHelper(objetEpisodeClicked.characters),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var character = _step2.value;
          fetch(character).then(function (resp) {
            return resp.json();
          }).then(function (respJson) {
            console.log(respJson);
            chara.innerHTML += "<li class=\"description\"><img src=\"".concat(respJson.image, "\"/>").concat(respJson.name, "</li>");
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    });
  };

  for (var _i2 = 0; _i2 < ep.length; _i2++) {
    _loop(_i2);
  }

  select.addEventListener("change", function (e) {
    var season = e.target.value; //console.log(season);

    var chara = document.querySelector(".characters");
    chara.innerHTML = "";
    chara.classList.add("popup");
    chara.classList.toggle("popup");
    mainContainer.innerHTML = "";

    for (var _i3 = 0; _i3 < tab.length; _i3++) {
      //console.log(tabResult[i].episode);
      var _splitSeason = tab[_i3].episode.split(""); //console.log(splitSeason[2]);


      if (season == "s1" && _splitSeason[2] == 1) {
        addNewCard(tab[_i3]);
      } else if (season == "s2" && _splitSeason[2] == 2) {
        addNewCard(tab[_i3]);
      } else if (season == "s3" && _splitSeason[2] == 3) {
        addNewCard(tab[_i3]);
      } else if (season == "s4" && _splitSeason[2] == 4) {
        addNewCard(tab[_i3]);
      }
    }

    var ep = document.querySelectorAll(".card--name");

    var _loop2 = function _loop2(_i4) {
      ep[_i4].addEventListener('click', function (e) {
        console.log(tab.filter(function (x) {
          return x.id == ep[_i4].id;
        }));
        var objetEpisodeClicked = tab.filter(function (x) {
          return x.id == ep[_i4].id;
        })[0];
        var mainContainer = document.querySelector(".main");
        mainContainer.classList.toggle("slide-right");
        var chara = document.querySelector(".characters");
        chara.innerHTML = "";
        chara.classList.toggle("popup");
        /*chara.classList.remove("close");*/

        var _iterator = _createForOfIteratorHelper(objetEpisodeClicked.characters),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var character = _step.value;
            fetch(character).then(function (resp) {
              return resp.json();
            }).then(function (respJson) {
              //console.log(respJson);
              chara.innerHTML += "<li class=\"description\"><img src=\"".concat(respJson.image, "\"/>").concat(respJson.name, "</li>");
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    };

    for (var _i4 = 0; _i4 < ep.length; _i4++) {
      _loop2(_i4);
    }
  });
});
/*let chara = document.querySelector(".characters");
let cross = document.getElementById("close-popup");
cross.addEventListener("click", function(event) {
    if (event.target == chara) {
        chara.style.display="none";
    }
})*/

function addNewCard(episodes) {
  var mainContainer = document.querySelector(".main");
  mainContainer.innerHTML += "<div class=\"card\">\n          <span class=\"card--name\" id=\"".concat(episodes.id, "\">").concat(episodes.name, "</span>\n          <button class=\"button\">").concat(episodes.episode, "</button>\n\n        </div>");
}
/*
let describ = document.querySelectorAll(".description");
for (let index = 0; index < describ.length; index++) {
    console.log(describ[0]);
    //for (const div of describ) {
      //  div.innerHTML += respJson.name;
    //}
}*/
//describ.innerHTML += respJson.name

/*
function getEpisodeDetails(listUri, divEp) {
    let reponse = [];
  
    for (const uri of listUri) {
      fetch(uri).then((resp)=> {
        return resp.json()
      }).then((resp2)=> {
        console.log(resp2.id)
        reponse.push(resp2);
        divEp.innerHTML += `<span> ${resp2.name} </span>`
      })
    }
}
*/

/*
function cardDescription(episodes) {
    const mainContainer = document.querySelector(".main");
    mainContainer.innerHTML +=
    `<div class="card--description">
    <div claas="card--perso">
    <img src="${episodes.characters}" alt="characters from rick and morty">
    </div>
    </div>`   
}
*/
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53896" + '/');

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
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scriptP0.js"], null)
//# sourceMappingURL=/scriptP0.34ced73a.js.map