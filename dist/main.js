/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/add.png */ "./img/add.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/delete.png */ "./img/delete.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    font-family: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n    color: rgb(124, 105, 209);\r\n    font-size: 4rem;\r\n    text-align: center;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n}\r\n\r\n.modal {\r\n    background-color: rgb(29, 29, 29);\r\n    border-radius: 10px;\r\n    border: 2px solid aquamarine;\r\n}\r\n\r\n.content {}\r\n\r\n.container {\r\n    /* display: flex; */\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    gap: 20px;\r\n}\r\n\r\n.sectionOne {\r\n    border: 2px dashed red;\r\n    /* text-align: center;\r\n    width: 200px; */\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.sectionTwo {\r\n    border: 2px dashed rgb(204, 0, 255);\r\n    padding: 10px;\r\n}\r\n\r\n.sectionThree {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    display: grid;\r\n    font-size: 1.2rem;\r\n    gap: 5px;\r\n}\r\n\r\n.sectionFour {\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: 1.2rem;\r\n    /* display: grid; */\r\n    display: none;\r\n    gap: 5px;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* background-color: rgba(220, 233, 204, 0.404); */\r\n    background-color: rgba(220, 233, 204, 0.404);\r\n    margin: 0;\r\n}\r\n\r\nform>div>input {\r\n    /* text-align: center; */\r\n    border: none;\r\n    font-size: 1rem;\r\n    background: none;\r\n    outline: none;\r\n    transition: 1s;\r\n    display: flex;\r\n    flex-grow: 1;\r\n}\r\n\r\ninput[type=button] {\r\n    border-radius: 10px;\r\n    font-size: large;\r\n}\r\n\r\ninput[type=date] {\r\n    cursor: text\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border-radius: 0px;\r\n    /* border-bottom: 2px solid black; */\r\n}\r\n\r\ninput[type=button]:hover {\r\n    transform: scale(0.8);\r\n}\r\n\r\n.dateDiv {\r\n    text-align: center;\r\n}\r\n\r\n.statusDiv,\r\n.saveBtnDiv {\r\n    display: flex;\r\n}\r\n\r\n.statusDiv {\r\n    margin-right: 100px;\r\n}\r\n\r\n.saveBtn {\r\n    background-color: rgb(42, 42, 43);\r\n    color: aliceblue;\r\n    cursor: pointer;\r\n    border: 1px solid rgb(161, 161, 161);\r\n    display: flex;\r\n    flex: 1;\r\n    justify-content: center;\r\n    padding: 6px;\r\n}\r\n\r\n.statusBtnHigh,\r\n.statusBtnLow,\r\n.statusBtnOff {\r\n    background-color: rgb(42, 42, 43);\r\n    color: aliceblue;\r\n    cursor: pointer;\r\n    display: flex;\r\n    flex-grow: 1;\r\n    justify-content: center;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    padding: 5px;\r\n    border: 1px solid rgb(161, 161, 161);\r\n}\r\n\r\n.statusBtnHigh {\r\n    background-color: red;\r\n}\r\n\r\n.statusBtnLow {\r\n    background-color: rgb(127, 168, 255);\r\n}\r\n\r\n.statusBtnOff {\r\n    background-color: grey;\r\n}\r\n\r\n.addItem {\r\n    display: grid;\r\n    grid-template-columns: repeat(5, minmax(150px, 1fr));\r\n    border-radius: 10px;\r\n    /* justify-items: center; */\r\n    padding-left: 20px;\r\n    align-items: center;\r\n}\r\n\r\n.hud {\r\n    display: grid;\r\n    border-radius: 10px;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    margin: 10px;\r\n    grid-template-columns: repeat(6, minmax(100px, 1fr));\r\n    /* padding-left: 20px; */\r\n    /* justify-items: center; */\r\n}\r\n\r\n.todoMain {\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    grid-template-columns: 1fr;\r\n    align-items: center;\r\n    border-radius: 10px;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    transition: 1s;\r\n    background-color: rgba(220, 233, 204, 0.404);\r\n}\r\n\r\n.todoDetails {\r\n    display: grid;\r\n    grid-template-columns: repeat(6, minmax(100px, 1fr));\r\n    border-radius: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.todoNameDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\n.addTodoDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    background-color: rgba(200, 212, 203, 0.486);\r\n    color: rgb(49, 182, 182);\r\n    border-radius: 10px;\r\n    padding-left: 5px;\r\n    gap: 10px;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.addTodoBtn {\r\n    all: unset;\r\n    display: flex;\r\n    font-size: 1.2rem;\r\n    flex-grow: 1;\r\n    font-weight: bold;\r\n}\r\n\r\n.todoSign {\r\n    height: 18px;\r\n    width: 18px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    border: 1px solid rgb(70, 68, 68);\r\n    border-radius: 50%;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.addTodoOnOff {\r\n    height: 20px;\r\n    width: 20px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center/contain;\r\n}\r\n\r\n.todoDeleteBtn {\r\n    width: 30px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoMinimizeBtn {\r\n    background-color: black;\r\n    border-radius: 10px;\r\n    color: snow;\r\n    cursor: pointer;\r\n}\r\n\r\n.hud>div {\r\n    /* border-bottom: 2px dashed rebeccapurple; */\r\n}\r\n\r\n.todoSign:hover {\r\n    background-color: rgb(178, 248, 86);\r\n    opacity: 0.7;\r\n}\r\n\r\n.todoMain:hover {\r\n    /* background-color: rgba(109, 109, 108, 0.281);\r\n    transform: scale(1.01); */\r\n    /* cursor: pointer; */\r\n}\r\n\r\n/* onClick classList */\r\n\r\n\r\n.onClickHideToDoDetails {\r\n    display: none;\r\n}\r\n\r\n.onClickTodoDate {\r\n    display: flex;\r\n    align-self: end;\r\n}\r\n\r\n.onClickSectionThreeShrink {\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n}\r\n\r\n.onClickTodoMainShrink {\r\n    background-color: rgb(223, 189, 189);\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    width: 20%;\r\n}\r\n\r\n.onClickTodoDetailsShrink {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.onClickFillTodoSign {\r\n    background-color: rgba(0, 0, 0, 0.486);\r\n    border-color: white;\r\n}\r\n\r\n.signStyle {\r\n    background-color: rgba(0, 0, 0, 0.404);\r\n    opacity: 0.2;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    font-family: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n    color: rgb(124, 105, 209);\r\n    font-size: 4rem;\r\n    text-align: center;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n}\r\n\r\n.modal {\r\n    background-color: rgb(29, 29, 29);\r\n    border-radius: 10px;\r\n    border: 2px solid aquamarine;\r\n}\r\n\r\n.content {}\r\n\r\n.container {\r\n    /* display: flex; */\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    gap: 20px;\r\n}\r\n\r\n.sectionOne {\r\n    border: 2px dashed red;\r\n    /* text-align: center;\r\n    width: 200px; */\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.sectionTwo {\r\n    border: 2px dashed rgb(204, 0, 255);\r\n    padding: 10px;\r\n}\r\n\r\n.sectionThree {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    display: grid;\r\n    font-size: 1.2rem;\r\n    gap: 5px;\r\n}\r\n\r\n.sectionFour {\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: 1.2rem;\r\n    /* display: grid; */\r\n    display: none;\r\n    gap: 5px;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* background-color: rgba(220, 233, 204, 0.404); */\r\n    background-color: rgba(220, 233, 204, 0.404);\r\n    margin: 0;\r\n}\r\n\r\nform>div>input {\r\n    /* text-align: center; */\r\n    border: none;\r\n    font-size: 1rem;\r\n    background: none;\r\n    outline: none;\r\n    transition: 1s;\r\n    display: flex;\r\n    flex-grow: 1;\r\n}\r\n\r\ninput[type=button] {\r\n    border-radius: 10px;\r\n    font-size: large;\r\n}\r\n\r\ninput[type=date] {\r\n    cursor: text\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border-radius: 0px;\r\n    /* border-bottom: 2px solid black; */\r\n}\r\n\r\ninput[type=button]:hover {\r\n    transform: scale(0.8);\r\n}\r\n\r\n.dateDiv {\r\n    text-align: center;\r\n}\r\n\r\n.statusDiv,\r\n.saveBtnDiv {\r\n    display: flex;\r\n}\r\n\r\n.statusDiv {\r\n    margin-right: 100px;\r\n}\r\n\r\n.saveBtn {\r\n    background-color: rgb(42, 42, 43);\r\n    color: aliceblue;\r\n    cursor: pointer;\r\n    border: 1px solid rgb(161, 161, 161);\r\n    display: flex;\r\n    flex: 1;\r\n    justify-content: center;\r\n    padding: 6px;\r\n}\r\n\r\n.statusBtnHigh,\r\n.statusBtnLow,\r\n.statusBtnOff {\r\n    background-color: rgb(42, 42, 43);\r\n    color: aliceblue;\r\n    cursor: pointer;\r\n    display: flex;\r\n    flex-grow: 1;\r\n    justify-content: center;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    padding: 5px;\r\n    border: 1px solid rgb(161, 161, 161);\r\n}\r\n\r\n.statusBtnHigh {\r\n    background-color: red;\r\n}\r\n\r\n.statusBtnLow {\r\n    background-color: rgb(127, 168, 255);\r\n}\r\n\r\n.statusBtnOff {\r\n    background-color: grey;\r\n}\r\n\r\n.addItem {\r\n    display: grid;\r\n    grid-template-columns: repeat(5, minmax(150px, 1fr));\r\n    border-radius: 10px;\r\n    /* justify-items: center; */\r\n    padding-left: 20px;\r\n    align-items: center;\r\n}\r\n\r\n.hud {\r\n    display: grid;\r\n    border-radius: 10px;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    margin: 10px;\r\n    grid-template-columns: repeat(6, minmax(100px, 1fr));\r\n    /* padding-left: 20px; */\r\n    /* justify-items: center; */\r\n}\r\n\r\n.todoMain {\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    grid-template-columns: 1fr;\r\n    align-items: center;\r\n    border-radius: 10px;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    transition: 1s;\r\n    background-color: rgba(220, 233, 204, 0.404);\r\n}\r\n\r\n.todoDetails {\r\n    display: grid;\r\n    grid-template-columns: repeat(6, minmax(100px, 1fr));\r\n    border-radius: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.todoNameDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\n.addTodoDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    background-color: rgba(200, 212, 203, 0.486);\r\n    color: rgb(49, 182, 182);\r\n    border-radius: 10px;\r\n    padding-left: 5px;\r\n    gap: 10px;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.addTodoBtn {\r\n    all: unset;\r\n    display: flex;\r\n    font-size: 1.2rem;\r\n    flex-grow: 1;\r\n    font-weight: bold;\r\n}\r\n\r\n.todoSign {\r\n    height: 18px;\r\n    width: 18px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    border: 1px solid rgb(70, 68, 68);\r\n    border-radius: 50%;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.addTodoOnOff {\r\n    height: 20px;\r\n    width: 20px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    background: url('../img/add.png') center/contain;\r\n}\r\n\r\n.todoDeleteBtn {\r\n    width: 30px;\r\n    background: url('../img/delete.png') center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoMinimizeBtn {\r\n    background-color: black;\r\n    border-radius: 10px;\r\n    color: snow;\r\n    cursor: pointer;\r\n}\r\n\r\n.hud>div {\r\n    /* border-bottom: 2px dashed rebeccapurple; */\r\n}\r\n\r\n.todoSign:hover {\r\n    background-color: rgb(178, 248, 86);\r\n    opacity: 0.7;\r\n}\r\n\r\n.todoMain:hover {\r\n    /* background-color: rgba(109, 109, 108, 0.281);\r\n    transform: scale(1.01); */\r\n    /* cursor: pointer; */\r\n}\r\n\r\n/* onClick classList */\r\n\r\n\r\n.onClickHideToDoDetails {\r\n    display: none;\r\n}\r\n\r\n.onClickTodoDate {\r\n    display: flex;\r\n    align-self: end;\r\n}\r\n\r\n.onClickSectionThreeShrink {\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n}\r\n\r\n.onClickTodoMainShrink {\r\n    background-color: rgb(223, 189, 189);\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    width: 20%;\r\n}\r\n\r\n.onClickTodoDetailsShrink {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.onClickFillTodoSign {\r\n    background-color: rgba(0, 0, 0, 0.486);\r\n    border-color: white;\r\n}\r\n\r\n.signStyle {\r\n    background-color: rgba(0, 0, 0, 0.404);\r\n    opacity: 0.2;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodoBtn": () => (/* binding */ addTodoBtn),
/* harmony export */   "addTodoDiv": () => (/* binding */ addTodoDiv),
/* harmony export */   "default": () => (/* binding */ todoBodyAppend),
/* harmony export */   "titleTest": () => (/* binding */ titleTest)
/* harmony export */ });
const sectionOne = document.querySelector('.sectionOne');
const titleTest = document.createElement('h2');
const descriptionTest = document.createElement('span');
const addTodoDiv = document.querySelector('.addTodoDiv');
const addTodoBtn = document.querySelector('.addTodoBtn');


function todoBodyAppend() {
    titleTest.textContent = 'Heading';
    titleTest.classList.add('title');

    descriptionTest.textContent = 'Some Description';
    descriptionTest.classList.add('description');

    sectionOne.append(titleTest, descriptionTest);
}






/***/ }),

/***/ "./src/eachTodoItem.js":
/*!*****************************!*\
  !*** ./src/eachTodoItem.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoCreatedOnSaveBtnPress),
/* harmony export */   "sectionFour": () => (/* binding */ sectionFour),
/* harmony export */   "sectionThree": () => (/* binding */ sectionThree),
/* harmony export */   "todoDate": () => (/* binding */ todoDate),
/* harmony export */   "todoDeleteBtn": () => (/* binding */ todoDeleteBtn),
/* harmony export */   "todoDescription": () => (/* binding */ todoDescription),
/* harmony export */   "todoDetails": () => (/* binding */ todoDetails),
/* harmony export */   "todoMain": () => (/* binding */ todoMain),
/* harmony export */   "todoMinimizeBtn": () => (/* binding */ todoMinimizeBtn),
/* harmony export */   "todoName": () => (/* binding */ todoName),
/* harmony export */   "todoSign": () => (/* binding */ todoSign),
/* harmony export */   "todoStatus": () => (/* binding */ todoStatus)
/* harmony export */ });
let todoMain;
let todoDetails;
let todoNameDiv;
let todoSign;
let todoName;
let todoDescription;
let todoStatus;
let todoDate;
let todoDeleteBtn;
let todoMinimizeBtn;
const hud = document.querySelector('.hud');
const sectionThree = document.createElement('div');
const sectionFour = document.querySelector('.sectionFour');


function todoCreatedOnSaveBtnPress() {
    todoMinimizeBtn = document.createElement('button');
    todoMain = document.createElement('div');
    todoDetails = document.createElement('div');
    todoNameDiv = document.createElement('div');
    todoSign = document.createElement('div');
    todoName = document.createElement('div');
    todoDescription = document.createElement('div');
    todoStatus = document.createElement('div');
    todoDate = document.createElement('div');
    todoDeleteBtn = document.createElement('div');


    todoMinimizeBtn.classList.add('todoMinimizeBtn');
    todoMinimizeBtn.textContent = 'Minimize';
    sectionThree.classList.add('sectionThree');
    todoMain.classList.add('todoMain');
    todoDetails.classList.add('todoDetails');
    todoNameDiv.classList.add('todoNameDiv');
    todoSign.classList.add('todoSign');
    todoName.classList.add('todoName');
    todoDescription.classList.add('todoDescription');
    todoStatus.classList.add('todoStatus');
    todoDate.classList.add('todoDate');
    todoDeleteBtn.classList.add('todoDeleteBtn');

    todoDeleteBtn.textContent = '';
    todoDetails.append(todoSign, todoNameDiv, todoDescription, todoStatus, todoDate, todoDeleteBtn, todoMinimizeBtn);
    todoNameDiv.append(todoSign, todoName);
    todoMain.append(todoDetails);
    sectionThree.append(todoMain);
    hud.after(sectionThree);
}
// todoMain = document.createElement('div');






/***/ }),

/***/ "./src/modalBar.js":
/*!*************************!*\
  !*** ./src/modalBar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateBtn": () => (/* binding */ dateBtn),
/* harmony export */   "descriptionBtn": () => (/* binding */ descriptionBtn),
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "nameBtn": () => (/* binding */ nameBtn),
/* harmony export */   "saveBtn": () => (/* binding */ saveBtn),
/* harmony export */   "selectedStatusBtn": () => (/* binding */ selectedStatusBtn),
/* harmony export */   "statusBtnHigh": () => (/* binding */ statusBtnHigh),
/* harmony export */   "statusBtnLow": () => (/* binding */ statusBtnLow),
/* harmony export */   "statusBtnOff": () => (/* binding */ statusBtnOff)
/* harmony export */ });

const modal = document.querySelector('.modal');
const nameBtn = document.querySelector('.nameBtn');
const descriptionBtn = document.querySelector('.descriptionBtn');
const dateBtn = document.querySelector('.dateBtn');
const statusBtnHigh = document.querySelector('.statusBtnHigh');
const statusBtnLow = document.querySelector('.statusBtnHigh');
const statusBtnOff = document.querySelector('.statusBtnHigh');
const saveBtn = document.querySelector('.saveBtn');
const selectedStatusBtn = document.querySelectorAll('.selectedStatusBtn');




/***/ }),

/***/ "./img/add.png":
/*!*********************!*\
  !*** ./img/add.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90b950d171bb0b3986d1.png";

/***/ }),

/***/ "./img/delete.png":
/*!************************!*\
  !*** ./img/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "651a0c5a3bad32501093.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _modalBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalBar */ "./src/modalBar.js");
/* harmony import */ var _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eachTodoItem */ "./src/eachTodoItem.js");






const nameBtn = document.querySelector('.nameBtn');
const obj = {
    sike: [],
    currentStatus: '',
}

class TodoClass {
    constructor(title, description, date, status) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = status;
    }
}

function addTodo() {
    _dom__WEBPACK_IMPORTED_MODULE_1__.addTodoBtn.addEventListener("click", () => {
        _dom__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = 'none';
        _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.sectionFour.style.display = 'grid';
    });
}

function removeTodo() {
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDeleteBtn.addEventListener("click", (e) => {
        e.currentTarget.parentNode.parentElement.remove(); // select todoMain and remove
        // todoMain.remove();
        console.log('Delete')
    });
}


function DisplayTodoList() {
    console.log(obj.sike[0]);
    console.log(obj.sike[0].date);
    console.log(obj.sike[0].title);
    (0,_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__["default"])();
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoName.textContent = `${obj.sike[0].title}`;
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDescription.textContent = `${obj.sike[0].description}`;
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDate.textContent = `${obj.sike[0].date}`;
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoStatus.textContent = `${obj.sike[0].status}`;
}

function minimizeTodoDetailsFnc(e) {
    e.currentTarget.parentNode.parentElement.classList.toggle(`onClickTodoMainShrink`); // Selects todoMain
    e.currentTarget.parentElement.classList.toggle('onClickTodoDetailsShrink'); // Selects todoDetails
    e.currentTarget.parentNode.childNodes[1].classList.toggle('onClickHideToDoDetails'); // Selects todoDescription
    e.currentTarget.parentNode.childNodes[2].classList.toggle('onClickHideToDoDetails'); // Selects todoStatus
    e.currentTarget.parentNode.childNodes[3].classList.toggle('onClickTodoDate'); // Selects todoDate

    if (e.currentTarget.parentNode.parentElement.classList.contains(`onClickTodoMainShrink`)) {
        e.currentTarget.parentNode.childNodes[5].textContent = 'Maximize';
    }
    else {
        e.currentTarget.parentNode.childNodes[5].textContent = 'Minimize';
    }
}

function minimizeTodoDetails() {
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoMinimizeBtn.addEventListener("click", minimizeTodoDetailsFnc);
}

function fillSignTodoFnc(e) {
    console.log('click');
    e.currentTarget.classList.toggle('onClickFillTodoSign');
    console.log(e.currentTarget.parentNode.parentElement.parentElement.classList.toggle('signStyle')); // selects main
}

function fillSignTodo() {
    const todoSigns = document.querySelectorAll(`.todoSign`);
    todoSigns.forEach(items => {
        items.addEventListener("click", fillSignTodoFnc)
    })
}

function selectedStatus() {
    _modalBar__WEBPACK_IMPORTED_MODULE_2__.selectedStatusBtn.forEach(selected => {
        selected.addEventListener("click", () => {
            obj.currentStatus = selected.value;
            console.log(obj.currentStatus);
        });
    });
}

function predefinedTodo() {
    const listItemTwo = new TodoClass('Messi', 'GOAT', '2-11-1990', 'High');
    obj.sike.push(listItemTwo);
    DisplayTodoList();
    removeTodo();
    minimizeTodoDetails();
    fillSignTodo();
}

function userInputTodo() {
    const dateBtnIndianFormat = _modalBar__WEBPACK_IMPORTED_MODULE_2__.dateBtn.value.split('-').reverse().join('-');
    console.log(dateBtnIndianFormat);
    const listItem = new TodoClass(nameBtn.value, _modalBar__WEBPACK_IMPORTED_MODULE_2__.descriptionBtn.value, dateBtnIndianFormat, obj.currentStatus);
    obj.sike.unshift(listItem);
}

function saveTodoBtn() {
    _modalBar__WEBPACK_IMPORTED_MODULE_2__.saveBtn.addEventListener("click", () => {
        userInputTodo()
        DisplayTodoList();
        minimizeTodoDetails();
        removeTodo();
        _dom__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = 'flex';
        _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.sectionFour.style.display = 'none';
        fillSignTodo();
    });
}

selectedStatus();
predefinedTodo();
saveTodoBtn();
addTodo();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QThCLCtDQUErQyw0QkFBNEIsS0FBSyxvQkFBb0IsK0NBQStDLHFCQUFxQixLQUFLLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sT0FBTyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFh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QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDBEQUFtQjtBQUNuRDtBQUNBLGtEQUFrRCwyREFBb0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUF3QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQXdCO0FBQ2hDLFFBQVEsb0VBQXlCO0FBQ2pDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWFjaFRvZG9JdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kYWxCYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvYWRkLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZy9kZWxldGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IHJnYigxMjQsIDEwNSwgMjA5KTtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDI5LCAyOSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGFxdWFtYXJpbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHt9XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbk9uZSB7XFxyXFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCByZWQ7XFxyXFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDIwMHB4OyAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uVHdvIHtcXHJcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJnYigyMDQsIDAsIDI1NSk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uVGhyZWUge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25Gb3VyIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7ICovXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDIzMywgMjA0LCAwLjQwNCk7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLCAyMzMsIDIwNCwgMC40MDQpO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0+ZGl2PmlucHV0IHtcXHJcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1idXR0b25dIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxyXFxuICAgIGN1cnNvcjogdGV4dFxcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgICAvKiBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7ICovXFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVEaXYge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdGF0dXNEaXYsXFxyXFxuLnNhdmVCdG5EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHVzRGl2IHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNhdmVCdG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDQyLCA0Myk7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2MSwgMTYxLCAxNjEpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHVzQnRuSGlnaCxcXHJcXG4uc3RhdHVzQnRuTG93LFxcclxcbi5zdGF0dXNCdG5PZmYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDQyLCA0Myk7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2MSwgMTYxLCAxNjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHVzQnRuSGlnaCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXR1c0J0bkxvdyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDE2OCwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXR1c0J0bk9mZiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5hZGRJdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgLyoganVzdGlmeS1pdGVtczogY2VudGVyOyAqL1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5odWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgbWlubWF4KDEwMHB4LCAxZnIpKTtcXHJcXG4gICAgLyogcGFkZGluZy1sZWZ0OiAyMHB4OyAqL1xcclxcbiAgICAvKiBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7ICovXFxyXFxufVxcclxcblxcclxcbi50b2RvTWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDIzMywgMjA0LCAwLjQwNCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9OYW1lRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRUb2RvRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMSwgNTYsIDE1LCAwLjQ4Nik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMTIsIDIwMywgMC40ODYpO1xcclxcbiAgICBjb2xvcjogcmdiKDQ5LCAxODIsIDE4Mik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kb0J0biB7XFxyXFxuICAgIGFsbDogdW5zZXQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1NpZ24ge1xcclxcbiAgICBoZWlnaHQ6IDE4cHg7XFxyXFxuICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig3MCwgNjgsIDY4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5hZGRUb2RvT25PZmYge1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgY2VudGVyL2NvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi50b2RvRGVsZXRlQnRuIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvTWluaW1pemVCdG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6IHNub3c7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmh1ZD5kaXYge1xcclxcbiAgICAvKiBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlYmVjY2FwdXJwbGU7ICovXFxyXFxufVxcclxcblxcclxcbi50b2RvU2lnbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzgsIDI0OCwgODYpO1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbi50b2RvTWFpbjpob3ZlciB7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA5LCAxMDksIDEwOCwgMC4yODEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpOyAqL1xcclxcbiAgICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXFxyXFxufVxcclxcblxcclxcbi8qIG9uQ2xpY2sgY2xhc3NMaXN0ICovXFxyXFxuXFxyXFxuXFxyXFxuLm9uQ2xpY2tIaWRlVG9Eb0RldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9EYXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1NlY3Rpb25UaHJlZVNocmluayB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9NYWluU2hyaW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMTg5LCAxODkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9EZXRhaWxzU2hyaW5rIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tGaWxsVG9kb1NpZ24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDg2KTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25TdHlsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MDQpO1xcclxcbiAgICBvcGFjaXR5OiAwLjI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrSUFBa0k7QUFDdEk7O0FBRUE7SUFDSSxTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQSxVQUFVOztBQUVWO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCO21CQUNlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lB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QUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogcmdiKDEyNCwgMTA1LCAyMDkpO1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMjksIDI5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge31cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uT25lIHtcXHJcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJlZDtcXHJcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMjAwcHg7ICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25Ud28ge1xcclxcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgcmdiKDIwNCwgMCwgMjU1KTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25UaHJlZSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbkZvdXIge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgLyogZGlzcGxheTogZ3JpZDsgKi9cXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMCwgMjMzLCAyMDQsIDAuNDA0KTsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDIzMywgMjA0LCAwLjQwNCk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybT5kaXY+aW5wdXQge1xcclxcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdIHtcXHJcXG4gICAgY3Vyc29yOiB0ZXh0XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICAgIC8qIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjazsgKi9cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZURpdiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXR1c0RpdixcXHJcXG4uc2F2ZUJ0bkRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5zdGF0dXNEaXYge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2F2ZUJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgNDIsIDQzKTtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYxLCAxNjEsIDE2MSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGF0dXNCdG5IaWdoLFxcclxcbi5zdGF0dXNCdG5Mb3csXFxyXFxuLnN0YXR1c0J0bk9mZiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgNDIsIDQzKTtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYxLCAxNjEsIDE2MSk7XFxyXFxufVxcclxcblxcclxcbi5zdGF0dXNCdG5IaWdoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHVzQnRuTG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMTY4LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHVzQnRuT2ZmIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAvKiBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7ICovXFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmh1ZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcclxcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDIwcHg7ICovXFxyXFxuICAgIC8qIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NYWluIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDFzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMCwgMjMzLCAyMDQsIDAuNDA0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgbWlubWF4KDEwMHB4LCAxZnIpKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb05hbWVEaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG9EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxLCA1NiwgMTUsIDAuNDg2KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIxMiwgMjAzLCAwLjQ4Nik7XFxyXFxuICAgIGNvbG9yOiByZ2IoNDksIDE4MiwgMTgyKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRUb2RvQnRuIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvU2lnbiB7XFxyXFxuICAgIGhlaWdodDogMThweDtcXHJcXG4gICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDcwLCA2OCwgNjgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG9Pbk9mZiB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvYWRkLnBuZycpIGNlbnRlci9jb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RlbGV0ZUJ0biB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy9kZWxldGUucG5nJykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvTWluaW1pemVCdG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6IHNub3c7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmh1ZD5kaXYge1xcclxcbiAgICAvKiBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlYmVjY2FwdXJwbGU7ICovXFxyXFxufVxcclxcblxcclxcbi50b2RvU2lnbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzgsIDI0OCwgODYpO1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbi50b2RvTWFpbjpob3ZlciB7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA5LCAxMDksIDEwOCwgMC4yODEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpOyAqL1xcclxcbiAgICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXFxyXFxufVxcclxcblxcclxcbi8qIG9uQ2xpY2sgY2xhc3NMaXN0ICovXFxyXFxuXFxyXFxuXFxyXFxuLm9uQ2xpY2tIaWRlVG9Eb0RldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9EYXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1NlY3Rpb25UaHJlZVNocmluayB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9NYWluU2hyaW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMTg5LCAxODkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9EZXRhaWxzU2hyaW5rIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tGaWxsVG9kb1NpZ24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDg2KTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25TdHlsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MDQpO1xcclxcbiAgICBvcGFjaXR5OiAwLjI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzZWN0aW9uT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25PbmUnKTtcclxuY29uc3QgdGl0bGVUZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuY29uc3QgZGVzY3JpcHRpb25UZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5jb25zdCBhZGRUb2RvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRvZG9EaXYnKTtcclxuY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUb2RvQnRuJyk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0JvZHlBcHBlbmQoKSB7XHJcbiAgICB0aXRsZVRlc3QudGV4dENvbnRlbnQgPSAnSGVhZGluZyc7XHJcbiAgICB0aXRsZVRlc3QuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuXHJcbiAgICBkZXNjcmlwdGlvblRlc3QudGV4dENvbnRlbnQgPSAnU29tZSBEZXNjcmlwdGlvbic7XHJcbiAgICBkZXNjcmlwdGlvblRlc3QuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgICBzZWN0aW9uT25lLmFwcGVuZCh0aXRsZVRlc3QsIGRlc2NyaXB0aW9uVGVzdCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHRpdGxlVGVzdCwgYWRkVG9kb0RpdiwgYWRkVG9kb0J0biB9XHJcblxyXG5cclxuIiwibGV0IHRvZG9NYWluO1xyXG5sZXQgdG9kb0RldGFpbHM7XHJcbmxldCB0b2RvTmFtZURpdjtcclxubGV0IHRvZG9TaWduO1xyXG5sZXQgdG9kb05hbWU7XHJcbmxldCB0b2RvRGVzY3JpcHRpb247XHJcbmxldCB0b2RvU3RhdHVzO1xyXG5sZXQgdG9kb0RhdGU7XHJcbmxldCB0b2RvRGVsZXRlQnRuO1xyXG5sZXQgdG9kb01pbmltaXplQnRuO1xyXG5jb25zdCBodWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVkJyk7XHJcbmNvbnN0IHNlY3Rpb25UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBzZWN0aW9uRm91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uRm91cicpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9DcmVhdGVkT25TYXZlQnRuUHJlc3MoKSB7XHJcbiAgICB0b2RvTWluaW1pemVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRvZG9NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9TaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHJcbiAgICB0b2RvTWluaW1pemVCdG4uY2xhc3NMaXN0LmFkZCgndG9kb01pbmltaXplQnRuJyk7XHJcbiAgICB0b2RvTWluaW1pemVCdG4udGV4dENvbnRlbnQgPSAnTWluaW1pemUnO1xyXG4gICAgc2VjdGlvblRocmVlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25UaHJlZScpO1xyXG4gICAgdG9kb01haW4uY2xhc3NMaXN0LmFkZCgndG9kb01haW4nKTtcclxuICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXRhaWxzJyk7XHJcbiAgICB0b2RvTmFtZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvTmFtZURpdicpO1xyXG4gICAgdG9kb1NpZ24uY2xhc3NMaXN0LmFkZCgndG9kb1NpZ24nKTtcclxuICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoJ3RvZG9OYW1lJyk7XHJcbiAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kb0Rlc2NyaXB0aW9uJyk7XHJcbiAgICB0b2RvU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3RvZG9TdGF0dXMnKTtcclxuICAgIHRvZG9EYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG9EYXRlJyk7XHJcbiAgICB0b2RvRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZWxldGVCdG4nKTtcclxuXHJcbiAgICB0b2RvRGVsZXRlQnRuLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICB0b2RvRGV0YWlscy5hcHBlbmQodG9kb1NpZ24sIHRvZG9OYW1lRGl2LCB0b2RvRGVzY3JpcHRpb24sIHRvZG9TdGF0dXMsIHRvZG9EYXRlLCB0b2RvRGVsZXRlQnRuLCB0b2RvTWluaW1pemVCdG4pO1xyXG4gICAgdG9kb05hbWVEaXYuYXBwZW5kKHRvZG9TaWduLCB0b2RvTmFtZSk7XHJcbiAgICB0b2RvTWFpbi5hcHBlbmQodG9kb0RldGFpbHMpO1xyXG4gICAgc2VjdGlvblRocmVlLmFwcGVuZCh0b2RvTWFpbik7XHJcbiAgICBodWQuYWZ0ZXIoc2VjdGlvblRocmVlKTtcclxufVxyXG4vLyB0b2RvTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgc2VjdGlvblRocmVlLCBzZWN0aW9uRm91ciwgdG9kb01haW4sIHRvZG9EZXRhaWxzLCB0b2RvU2lnbiwgdG9kb05hbWUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb1N0YXR1cywgdG9kb0RhdGUsIHRvZG9EZWxldGVCdG4sIHRvZG9NaW5pbWl6ZUJ0biB9OyIsIlxyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG5jb25zdCBuYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWVCdG4nKTtcclxuY29uc3QgZGVzY3JpcHRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb25CdG4nKTtcclxuY29uc3QgZGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlQnRuJyk7XHJcbmNvbnN0IHN0YXR1c0J0bkhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzQnRuSGlnaCcpO1xyXG5jb25zdCBzdGF0dXNCdG5Mb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzQnRuSGlnaCcpO1xyXG5jb25zdCBzdGF0dXNCdG5PZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzQnRuSGlnaCcpO1xyXG5jb25zdCBzYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmVCdG4nKTtcclxuY29uc3Qgc2VsZWN0ZWRTdGF0dXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWRTdGF0dXNCdG4nKTtcclxuXHJcblxyXG5leHBvcnQgeyBtb2RhbCwgbmFtZUJ0biwgZGVzY3JpcHRpb25CdG4sIGRhdGVCdG4sIHN0YXR1c0J0bkhpZ2gsIHN0YXR1c0J0bkxvdywgc3RhdHVzQnRuT2ZmLCBzYXZlQnRuLCBzZWxlY3RlZFN0YXR1c0J0biB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgYWRkVG9kb0J0biwgYWRkVG9kb0RpdiB9IGZyb20gJy4vZG9tJztcclxuaW1wb3J0IHsgbW9kYWwsIHNhdmVCdG4sIGRlc2NyaXB0aW9uQnRuLCBkYXRlQnRuLCBzdGF0dXNCdG5IaWdoLCBzdGF0dXNCdG5Mb3csIHN0YXR1c0J0bk9mZiwgc2VsZWN0ZWRTdGF0dXNCdG4gfSBmcm9tICcuL21vZGFsQmFyJ1xyXG5pbXBvcnQgdG9kb0NyZWF0ZWRPblNhdmVCdG5QcmVzcywgeyBzZWN0aW9uVGhyZWUsIHNlY3Rpb25Gb3VyLCB0b2RvTWFpbiwgdG9kb0RldGFpbHMsIHRvZG9TaWduLCB0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvU3RhdHVzLCB0b2RvRGF0ZSwgdG9kb0RlbGV0ZUJ0biwgdG9kb01pbmltaXplQnRuIH0gZnJvbSAnLi9lYWNoVG9kb0l0ZW0nO1xyXG5cclxuXHJcbmNvbnN0IG5hbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUJ0bicpO1xyXG5jb25zdCBvYmogPSB7XHJcbiAgICBzaWtlOiBbXSxcclxuICAgIGN1cnJlbnRTdGF0dXM6ICcnLFxyXG59XHJcblxyXG5jbGFzcyBUb2RvQ2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBzdGF0dXMpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG8oKSB7XHJcbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkVG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHNlY3Rpb25Gb3VyLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVG9kbygpIHtcclxuICAgIHRvZG9EZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5yZW1vdmUoKTsgLy8gc2VsZWN0IHRvZG9NYWluIGFuZCByZW1vdmVcclxuICAgICAgICAvLyB0b2RvTWFpbi5yZW1vdmUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlJylcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gRGlzcGxheVRvZG9MaXN0KCkge1xyXG4gICAgY29uc29sZS5sb2cob2JqLnNpa2VbMF0pO1xyXG4gICAgY29uc29sZS5sb2cob2JqLnNpa2VbMF0uZGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhvYmouc2lrZVswXS50aXRsZSk7XHJcbiAgICB0b2RvQ3JlYXRlZE9uU2F2ZUJ0blByZXNzKCk7XHJcbiAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IGAke29iai5zaWtlWzBdLnRpdGxlfWA7XHJcbiAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtvYmouc2lrZVswXS5kZXNjcmlwdGlvbn1gO1xyXG4gICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSBgJHtvYmouc2lrZVswXS5kYXRlfWA7XHJcbiAgICB0b2RvU3RhdHVzLnRleHRDb250ZW50ID0gYCR7b2JqLnNpa2VbMF0uc3RhdHVzfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1pbmltaXplVG9kb0RldGFpbHNGbmMoZSkge1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGBvbkNsaWNrVG9kb01haW5TaHJpbmtgKTsgLy8gU2VsZWN0cyB0b2RvTWFpblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb25DbGlja1RvZG9EZXRhaWxzU2hyaW5rJyk7IC8vIFNlbGVjdHMgdG9kb0RldGFpbHNcclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnRvZ2dsZSgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpOyAvLyBTZWxlY3RzIHRvZG9EZXNjcmlwdGlvblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QudG9nZ2xlKCdvbkNsaWNrSGlkZVRvRG9EZXRhaWxzJyk7IC8vIFNlbGVjdHMgdG9kb1N0YXR1c1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuY2hpbGROb2Rlc1szXS5jbGFzc0xpc3QudG9nZ2xlKCdvbkNsaWNrVG9kb0RhdGUnKTsgLy8gU2VsZWN0cyB0b2RvRGF0ZVxyXG5cclxuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgb25DbGlja1RvZG9NYWluU2hyaW5rYCkpIHtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzVdLnRleHRDb250ZW50ID0gJ01heGltaXplJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbNV0udGV4dENvbnRlbnQgPSAnTWluaW1pemUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtaW5pbWl6ZVRvZG9EZXRhaWxzKCkge1xyXG4gICAgdG9kb01pbmltaXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtaW5pbWl6ZVRvZG9EZXRhaWxzRm5jKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbFNpZ25Ub2RvRm5jKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ29uQ2xpY2tGaWxsVG9kb1NpZ24nKTtcclxuICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaWduU3R5bGUnKSk7IC8vIHNlbGVjdHMgbWFpblxyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsU2lnblRvZG8oKSB7XHJcbiAgICBjb25zdCB0b2RvU2lnbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAudG9kb1NpZ25gKTtcclxuICAgIHRvZG9TaWducy5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICBpdGVtcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlsbFNpZ25Ub2RvRm5jKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0ZWRTdGF0dXMoKSB7XHJcbiAgICBzZWxlY3RlZFN0YXR1c0J0bi5mb3JFYWNoKHNlbGVjdGVkID0+IHtcclxuICAgICAgICBzZWxlY3RlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBvYmouY3VycmVudFN0YXR1cyA9IHNlbGVjdGVkLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvYmouY3VycmVudFN0YXR1cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlZGVmaW5lZFRvZG8oKSB7XHJcbiAgICBjb25zdCBsaXN0SXRlbVR3byA9IG5ldyBUb2RvQ2xhc3MoJ01lc3NpJywgJ0dPQVQnLCAnMi0xMS0xOTkwJywgJ0hpZ2gnKTtcclxuICAgIG9iai5zaWtlLnB1c2gobGlzdEl0ZW1Ud28pO1xyXG4gICAgRGlzcGxheVRvZG9MaXN0KCk7XHJcbiAgICByZW1vdmVUb2RvKCk7XHJcbiAgICBtaW5pbWl6ZVRvZG9EZXRhaWxzKCk7XHJcbiAgICBmaWxsU2lnblRvZG8oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlcklucHV0VG9kbygpIHtcclxuICAgIGNvbnN0IGRhdGVCdG5JbmRpYW5Gb3JtYXQgPSBkYXRlQnRuLnZhbHVlLnNwbGl0KCctJykucmV2ZXJzZSgpLmpvaW4oJy0nKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGVCdG5JbmRpYW5Gb3JtYXQpO1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBuZXcgVG9kb0NsYXNzKG5hbWVCdG4udmFsdWUsIGRlc2NyaXB0aW9uQnRuLnZhbHVlLCBkYXRlQnRuSW5kaWFuRm9ybWF0LCBvYmouY3VycmVudFN0YXR1cyk7XHJcbiAgICBvYmouc2lrZS51bnNoaWZ0KGxpc3RJdGVtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVRvZG9CdG4oKSB7XHJcbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdXNlcklucHV0VG9kbygpXHJcbiAgICAgICAgRGlzcGxheVRvZG9MaXN0KCk7XHJcbiAgICAgICAgbWluaW1pemVUb2RvRGV0YWlscygpO1xyXG4gICAgICAgIHJlbW92ZVRvZG8oKTtcclxuICAgICAgICBhZGRUb2RvRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgc2VjdGlvbkZvdXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBmaWxsU2lnblRvZG8oKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5zZWxlY3RlZFN0YXR1cygpO1xyXG5wcmVkZWZpbmVkVG9kbygpO1xyXG5zYXZlVG9kb0J0bigpO1xyXG5hZGRUb2RvKCk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9