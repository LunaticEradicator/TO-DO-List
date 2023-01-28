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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/edit.png */ "./img/edit.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/list.svg */ "./img/list.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/grid.svg */ "./img/grid.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    font-family: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}\r\n\r\nhtml,\r\nbody {\r\n    /* min-height: 100%;\r\n    width: 100%; */\r\n    margin: 0px;\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n    color: rgb(124, 105, 209);\r\n    font-size: 3rem;\r\n    text-align: center;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    font-weight: bold;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    background-color: rgba(200, 212, 203, 0.486);\r\n    color: rgb(49, 182, 182);\r\n    color: white;\r\n    margin: 0;\r\n}\r\n\r\nform>div>input {\r\n    /* text-align: center; */\r\n    border: none;\r\n    font-size: 1rem;\r\n    background: none;\r\n    outline: none;\r\n    transition: 1s;\r\n    display: flex;\r\n    flex-grow: 1;\r\n}\r\n\r\ninput[type=button] {\r\n    border-radius: 10px;\r\n    font-size: large;\r\n}\r\n\r\ninput[type=date] {\r\n    cursor: text\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border-radius: 0px;\r\n    /* border-bottom: 2px solid black; */\r\n}\r\n\r\ninput[type=button]:hover {\r\n    transform: scale(0.8);\r\n}\r\n\r\n.modal {\r\n    background-color: rgb(29, 29, 29);\r\n    border-radius: 10px;\r\n    border: 2px solid aquamarine;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* overflow: hidden; */\r\n}\r\n\r\n.container {\r\n    /* display: flex; */\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n    gap: 20px;\r\n    border: 5px dotted rgb(10, 5, 5);\r\n    min-height: 100vh;\r\n    background-color: rgb(240, 250, 247);\r\n}\r\n\r\n.sectionOne {\r\n    border: 2px dashed red;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.sectionTwo {\r\n    border: 2px dashed rgb(204, 0, 255);\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n}\r\n\r\n.sectionThree {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    display: grid;\r\n    font-size: 1.2rem;\r\n    gap: 10px;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    /* border: 2px solid rgb(0, 0, 0); */\r\n}\r\n\r\n.sectionFour {\r\n    font-size: 1.2rem;\r\n    gap: 5px;\r\n    /* display: none; */\r\n}\r\n\r\n\r\n.dateDiv {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.saveBtnDiv {\r\n    display: flex;\r\n    flex: 1;\r\n}\r\n\r\n\r\n.saveBtn,\r\n.saveBtnEdit {\r\n    background-color: rgb(42, 42, 43);\r\n    color: aliceblue;\r\n    cursor: pointer;\r\n    border: 1px solid rgb(161, 161, 161);\r\n    display: flex;\r\n    flex: 1;\r\n    justify-content: center;\r\n    padding: 6px;\r\n}\r\n\r\n.statusBtn,\r\n.statusBtnEdit {\r\n    background-color: black;\r\n    color: white;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n.addItem {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    border-radius: 10px;\r\n    padding: 0px;\r\n    padding-left: 10px;\r\n    align-items: center;\r\n    gap: 5x;\r\n}\r\n\r\n.hud {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 5px;\r\n    border-radius: 10px;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    margin: 10px;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    /* background-color: rgb(219, 219, 219); */\r\n}\r\n\r\n.arrangeStyle {\r\n    /* height: 100vh; */\r\n    border: 2px solid;\r\n    border-radius: 10px;\r\n}\r\n\r\n.todoMain {\r\n    /* display: grid;\r\n    grid-auto-flow: column;\r\n    grid-template-columns: 1fr;\r\n    align-items: center; */\r\n    border-radius: 10px;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    transition: 1s;\r\n    background-color: rgba(220, 233, 204, 0.404);\r\n}\r\n\r\n.todoDetails {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    border-radius: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.todoNameDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\n.addTodoDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    background-color: rgba(200, 212, 203, 0.486);\r\n    color: rgb(49, 182, 182);\r\n    border-radius: 10px;\r\n    padding-left: 5px;\r\n    gap: 10px;\r\n    /* margin-top: 5px; */\r\n    cursor: pointer;\r\n}\r\n\r\n.addTodoBtn {\r\n    all: unset;\r\n    display: flex;\r\n    font-size: 1.2rem;\r\n    flex-grow: 1;\r\n    font-weight: bold;\r\n}\r\n\r\n.todoSign {\r\n    height: 18px;\r\n    width: 18px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    border: 1px solid rgb(70, 68, 68);\r\n    border-radius: 50%;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.addTodoOnOff {\r\n    height: 20px;\r\n    width: 20px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center/contain;\r\n}\r\n\r\n.todoIcon {\r\n    display: flex;\r\n    gap: 10px\r\n}\r\n\r\n.todoDeleteBtn {\r\n    width: 30px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoEditBtn {\r\n    all: unset;\r\n    width: 20px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.imageSort {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.listIcon {\r\n    all: unset;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.gridIcon {\r\n    all: unset;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoMinimizeBtn {\r\n    background-color: black;\r\n    border-radius: 10px;\r\n    color: white;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n.hud>div {\r\n    /* border-bottom: 2px dashed rebeccapurple; */\r\n}\r\n\r\n.todoSign:hover {\r\n    background-color: rgb(178, 248, 86);\r\n    opacity: 0.7;\r\n}\r\n\r\n.todoMain:hover {\r\n    /* background-color: rgba(109, 109, 108, 0.281);\r\n    transform: scale(1.01); */\r\n    /* cursor: pointer; */\r\n}\r\n\r\n/* onClick classList */\r\n\r\n\r\n.onClickHideToDoDetails {\r\n    display: none;\r\n}\r\n\r\n.onClickTodoDate {\r\n    justify-content: end;\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\n.onClickSectionThreeShrink {\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n}\r\n\r\n.onClickTodoMainShrink {\r\n    background-color: rgb(223, 189, 189);\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    width: 175px;\r\n}\r\n\r\n.onClickTodoDetailsShrink {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.onClickFillTodoSign {\r\n    background-color: rgba(0, 0, 0, 0.486);\r\n    border-color: white;\r\n}\r\n\r\n.signStyle {\r\n    background-color: rgba(0, 0, 0, 0.404);\r\n    opacity: 0.2;\r\n}\r\n\r\n.editTodo {\r\n    display: none;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kIAAkI;AACtI;;AAEA;;IAEI;kBACc;IACd,WAAW;AACf;;AAEA;IACI,SAAS;IACT,yBAAyB;IACzB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,wCAAwC;IACxC,4CAA4C;IAC5C,wBAAwB;IACxB,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,cAAc;IACd,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI;AACJ;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,gCAAgC;IAChC,iBAAiB;IACjB,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;IACjB,QAAQ;IACR,mBAAmB;AACvB;;;AAGA;IACI,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,OAAO;AACX;;;AAGA;;IAEI,iCAAiC;IACjC,gBAAgB;IAChB,eAAe;IACf,oCAAoC;IACpC,aAAa;IACb,OAAO;IACP,uBAAuB;IACvB,YAAY;AAChB;;AAEA;;IAEI,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,OAAO;AACX;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,QAAQ;IACR,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,2DAA2D;IAC3D,0CAA0C;AAC9C;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI;;;0BAGsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;IACd,4CAA4C;AAChD;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,wCAAwC;IACxC,4CAA4C;IAC5C,wBAAwB;IACxB,mBAAmB;IACnB,iBAAiB;IACjB,SAAS;IACT,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,eAAe;IACf,iCAAiC;IACjC,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,eAAe;IACf,kEAAgD;AACpD;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,WAAW;IACX,4EAA6D;IAC7D,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,4EAA2D;IAC3D,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,UAAU;IACV,WAAW;IACX,YAAY;IACZ,4EAA2D;IAC3D,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,YAAY;IACZ,4EAA2D;IAC3D,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI;6BACyB;IACzB,qBAAqB;AACzB;;AAEA,sBAAsB;;;AAGtB;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,2DAA2D;AAC/D;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,sCAAsC;IACtC,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;IACtC,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["body {\r\n    font-family: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}\r\n\r\nhtml,\r\nbody {\r\n    /* min-height: 100%;\r\n    width: 100%; */\r\n    margin: 0px;\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n    color: rgb(124, 105, 209);\r\n    font-size: 3rem;\r\n    text-align: center;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    font-weight: bold;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    background-color: rgba(200, 212, 203, 0.486);\r\n    color: rgb(49, 182, 182);\r\n    color: white;\r\n    margin: 0;\r\n}\r\n\r\nform>div>input {\r\n    /* text-align: center; */\r\n    border: none;\r\n    font-size: 1rem;\r\n    background: none;\r\n    outline: none;\r\n    transition: 1s;\r\n    display: flex;\r\n    flex-grow: 1;\r\n}\r\n\r\ninput[type=button] {\r\n    border-radius: 10px;\r\n    font-size: large;\r\n}\r\n\r\ninput[type=date] {\r\n    cursor: text\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border-radius: 0px;\r\n    /* border-bottom: 2px solid black; */\r\n}\r\n\r\ninput[type=button]:hover {\r\n    transform: scale(0.8);\r\n}\r\n\r\n.modal {\r\n    background-color: rgb(29, 29, 29);\r\n    border-radius: 10px;\r\n    border: 2px solid aquamarine;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* overflow: hidden; */\r\n}\r\n\r\n.container {\r\n    /* display: flex; */\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n    gap: 20px;\r\n    border: 5px dotted rgb(10, 5, 5);\r\n    min-height: 100vh;\r\n    background-color: rgb(240, 250, 247);\r\n}\r\n\r\n.sectionOne {\r\n    border: 2px dashed red;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.sectionTwo {\r\n    border: 2px dashed rgb(204, 0, 255);\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n}\r\n\r\n.sectionThree {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    display: grid;\r\n    font-size: 1.2rem;\r\n    gap: 10px;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    /* border: 2px solid rgb(0, 0, 0); */\r\n}\r\n\r\n.sectionFour {\r\n    font-size: 1.2rem;\r\n    gap: 5px;\r\n    /* display: none; */\r\n}\r\n\r\n\r\n.dateDiv {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.saveBtnDiv {\r\n    display: flex;\r\n    flex: 1;\r\n}\r\n\r\n\r\n.saveBtn,\r\n.saveBtnEdit {\r\n    background-color: rgb(42, 42, 43);\r\n    color: aliceblue;\r\n    cursor: pointer;\r\n    border: 1px solid rgb(161, 161, 161);\r\n    display: flex;\r\n    flex: 1;\r\n    justify-content: center;\r\n    padding: 6px;\r\n}\r\n\r\n.statusBtn,\r\n.statusBtnEdit {\r\n    background-color: black;\r\n    color: white;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n.addItem {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    border-radius: 10px;\r\n    padding: 0px;\r\n    padding-left: 10px;\r\n    align-items: center;\r\n    gap: 5x;\r\n}\r\n\r\n.hud {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 5px;\r\n    border-radius: 10px;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    margin: 10px;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    /* background-color: rgb(219, 219, 219); */\r\n}\r\n\r\n.arrangeStyle {\r\n    /* height: 100vh; */\r\n    border: 2px solid;\r\n    border-radius: 10px;\r\n}\r\n\r\n.todoMain {\r\n    /* display: grid;\r\n    grid-auto-flow: column;\r\n    grid-template-columns: 1fr;\r\n    align-items: center; */\r\n    border-radius: 10px;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    transition: 1s;\r\n    background-color: rgba(220, 233, 204, 0.404);\r\n}\r\n\r\n.todoDetails {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    border-radius: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.todoNameDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\n.addTodoDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    background-color: rgba(200, 212, 203, 0.486);\r\n    color: rgb(49, 182, 182);\r\n    border-radius: 10px;\r\n    padding-left: 5px;\r\n    gap: 10px;\r\n    /* margin-top: 5px; */\r\n    cursor: pointer;\r\n}\r\n\r\n.addTodoBtn {\r\n    all: unset;\r\n    display: flex;\r\n    font-size: 1.2rem;\r\n    flex-grow: 1;\r\n    font-weight: bold;\r\n}\r\n\r\n.todoSign {\r\n    height: 18px;\r\n    width: 18px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    border: 1px solid rgb(70, 68, 68);\r\n    border-radius: 50%;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.addTodoOnOff {\r\n    height: 20px;\r\n    width: 20px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    background: url('../img/add.png') center/contain;\r\n}\r\n\r\n.todoIcon {\r\n    display: flex;\r\n    gap: 10px\r\n}\r\n\r\n.todoDeleteBtn {\r\n    width: 30px;\r\n    background: url('../img/delete.png') center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoEditBtn {\r\n    all: unset;\r\n    width: 20px;\r\n    background: url('../img/edit.png') center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.imageSort {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.listIcon {\r\n    all: unset;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: url('../img/list.svg') center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.gridIcon {\r\n    all: unset;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: url('../img/grid.svg') center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoMinimizeBtn {\r\n    background-color: black;\r\n    border-radius: 10px;\r\n    color: white;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n.hud>div {\r\n    /* border-bottom: 2px dashed rebeccapurple; */\r\n}\r\n\r\n.todoSign:hover {\r\n    background-color: rgb(178, 248, 86);\r\n    opacity: 0.7;\r\n}\r\n\r\n.todoMain:hover {\r\n    /* background-color: rgba(109, 109, 108, 0.281);\r\n    transform: scale(1.01); */\r\n    /* cursor: pointer; */\r\n}\r\n\r\n/* onClick classList */\r\n\r\n\r\n.onClickHideToDoDetails {\r\n    display: none;\r\n}\r\n\r\n.onClickTodoDate {\r\n    justify-content: end;\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\n.onClickSectionThreeShrink {\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n}\r\n\r\n.onClickTodoMainShrink {\r\n    background-color: rgb(223, 189, 189);\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    width: 175px;\r\n}\r\n\r\n.onClickTodoDetailsShrink {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.onClickFillTodoSign {\r\n    background-color: rgba(0, 0, 0, 0.486);\r\n    border-color: white;\r\n}\r\n\r\n.signStyle {\r\n    background-color: rgba(0, 0, 0, 0.404);\r\n    opacity: 0.2;\r\n}\r\n\r\n.editTodo {\r\n    display: none;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/addItem.js":
/*!************************!*\
  !*** ./src/addItem.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateBtn": () => (/* binding */ dateBtn),
/* harmony export */   "descriptionBtn": () => (/* binding */ descriptionBtn),
/* harmony export */   "nameBtn": () => (/* binding */ nameBtn),
/* harmony export */   "saveBtn": () => (/* binding */ saveBtn),
/* harmony export */   "statusBtn": () => (/* binding */ statusBtn)
/* harmony export */ });
const nameBtn = document.querySelector('.nameBtn');
const descriptionBtn = document.querySelector('.descriptionBtn');
const dateBtn = document.querySelector('.dateBtn');
const saveBtn = document.querySelector('.saveBtn');
const statusBtn = document.querySelector('.statusBtn');




/***/ }),

/***/ "./src/eachTodoItem.js":
/*!*****************************!*\
  !*** ./src/eachTodoItem.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoUICreate),
/* harmony export */   "editTodo": () => (/* binding */ editTodo),
/* harmony export */   "sectionFour": () => (/* reexport safe */ _htmlElement__WEBPACK_IMPORTED_MODULE_0__.sectionFour),
/* harmony export */   "todoDate": () => (/* binding */ todoDate),
/* harmony export */   "todoDeleteBtn": () => (/* binding */ todoDeleteBtn),
/* harmony export */   "todoDescription": () => (/* binding */ todoDescription),
/* harmony export */   "todoDetails": () => (/* binding */ todoDetails),
/* harmony export */   "todoEditBtn": () => (/* binding */ todoEditBtn),
/* harmony export */   "todoIcon": () => (/* binding */ todoIcon),
/* harmony export */   "todoMain": () => (/* binding */ todoMain),
/* harmony export */   "todoMinimizeBtn": () => (/* binding */ todoMinimizeBtn),
/* harmony export */   "todoName": () => (/* binding */ todoName),
/* harmony export */   "todoSign": () => (/* binding */ todoSign),
/* harmony export */   "todoStatus": () => (/* binding */ todoStatus)
/* harmony export */ });
/* harmony import */ var _htmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElement */ "./src/htmlElement.js");


let todoMain;
let todoDetails;
let todoNameDiv;
let todoSign;
let todoName;
let todoDescription;
let todoStatus;
let todoDate;
let todoIcon;
let todoDeleteBtn;
let todoMinimizeBtn;
let todoEditBtn;

const sectionThree = document.createElement('div');
const arrangeStyle = document.querySelector('.arrangeStyle');
const editTodo = document.querySelector('.editTodo');


function todoUICreate() {
    todoMain = document.createElement('div');
    todoDetails = document.createElement('div');
    todoNameDiv = document.createElement('div');
    todoSign = document.createElement('div');
    todoName = document.createElement('div');
    todoDescription = document.createElement('div');
    todoStatus = document.createElement('div');
    todoDate = document.createElement('div');
    todoIcon = document.createElement('div');
    todoDeleteBtn = document.createElement('div');
    todoMinimizeBtn = document.createElement('button');
    todoEditBtn = document.createElement('button');


    sectionThree.classList.add('sectionThree');
    todoMain.classList.add('todoMain');
    todoDetails.classList.add('todoDetails');
    todoNameDiv.classList.add('todoNameDiv');
    todoSign.classList.add('todoSign');
    todoName.classList.add('todoName');
    todoDescription.classList.add('todoDescription');
    todoStatus.classList.add('todoStatus');
    todoDate.classList.add('todoDate');
    todoIcon.classList.add('todoIcon');
    todoDeleteBtn.classList.add('todoDeleteBtn');
    todoMinimizeBtn.classList.add('todoMinimizeBtn');
    todoMinimizeBtn.textContent = 'Minimize';
    todoEditBtn.classList.add('todoEditBtn');
    // todoEditBtn.textContent = 'Edit';

    todoDeleteBtn.textContent = '';
    todoDetails.append(todoSign, todoNameDiv, todoDescription, todoDate, todoStatus, todoIcon);
    todoNameDiv.append(todoSign, todoName);
    todoIcon.append(todoDeleteBtn, todoEditBtn, todoMinimizeBtn);
    todoMain.append(todoDetails);
    arrangeStyle.append(sectionThree);
    sectionThree.prepend(_htmlElement__WEBPACK_IMPORTED_MODULE_0__.sectionFour);
    sectionThree.prepend(_htmlElement__WEBPACK_IMPORTED_MODULE_0__.addTodoDiv);
    sectionThree.prepend(editTodo)
    sectionThree.append(todoMain);
}


/***/ }),

/***/ "./src/htmlElement.js":
/*!****************************!*\
  !*** ./src/htmlElement.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodoBtn": () => (/* binding */ addTodoBtn),
/* harmony export */   "addTodoDiv": () => (/* binding */ addTodoDiv),
/* harmony export */   "dateBtnEdit": () => (/* binding */ dateBtnEdit),
/* harmony export */   "descriptionBtnEdit": () => (/* binding */ descriptionBtnEdit),
/* harmony export */   "gridIcon": () => (/* binding */ gridIcon),
/* harmony export */   "listIcon": () => (/* binding */ listIcon),
/* harmony export */   "nameBtnEdit": () => (/* binding */ nameBtnEdit),
/* harmony export */   "sectionFour": () => (/* binding */ sectionFour),
/* harmony export */   "statusBtnEdit": () => (/* binding */ statusBtnEdit)
/* harmony export */ });
const addTodoDiv = document.querySelector('.addTodoDiv');
const addTodoBtn = document.querySelector('.addTodoBtn');

const nameBtnEdit = document.querySelector('.nameBtnEdit');
const descriptionBtnEdit = document.querySelector('.descriptionBtnEdit');
const statusBtnEdit = document.querySelector('.statusBtnEdit');
const dateBtnEdit = document.querySelector('.dateBtnEdit');

const gridIcon = document.querySelector('.gridIcon');
const listIcon = document.querySelector('.listIcon');

const sectionFour = document.querySelector('.sectionFour');







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

/***/ }),

/***/ "./img/edit.png":
/*!**********************!*\
  !*** ./img/edit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba2d0f726bb5002224b5.png";

/***/ }),

/***/ "./img/grid.svg":
/*!**********************!*\
  !*** ./img/grid.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e52602f98d9bcc6c06d.svg";

/***/ }),

/***/ "./img/list.svg":
/*!**********************!*\
  !*** ./img/list.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f51de4bc6da980b6218.svg";

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
/* harmony import */ var _htmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlElement */ "./src/htmlElement.js");
/* harmony import */ var _addItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addItem */ "./src/addItem.js");
/* harmony import */ var _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eachTodoItem */ "./src/eachTodoItem.js");





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

function addItemBtn() {
    _htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoBtn.addEventListener("click", () => {
        _htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = 'none';
        _htmlElement__WEBPACK_IMPORTED_MODULE_1__.sectionFour.style.display = 'grid';
        // selectedStatus();
    });
}

// todoFunctionality !-


let isTodoListOrGridStyle;

function sortTodoListOrGridStyle() { // Check for EventListener and create sorting order [grid or list]
    _htmlElement__WEBPACK_IMPORTED_MODULE_1__.listIcon.addEventListener('click', e => {
        isTodoListOrGridStyle = false;
        const todoMainAll = document.querySelectorAll('.todoMain');
        const todoDetailsAll = document.querySelectorAll('.todoDetails');
        const todoDescriptionAll = document.querySelectorAll('.todoDescription');
        const todoStatusAll = document.querySelectorAll('.todoStatus');
        const todoDateAll = document.querySelectorAll('.todoDate');
        const todoDeleteBtnAll = document.querySelectorAll('.todoDeleteBtn');
        const todoEditBtnAll = document.querySelectorAll('.todoEditBtn');

        todoMainAll.forEach(items => {
            items.classList.remove('onClickTodoMainShrink');
            if (!items.classList.contains(`onClickTodoMainShrink`)) {
                const todoMinimizeBtnAll = document.querySelectorAll('.todoMinimizeBtn');
                todoMinimizeBtnAll.forEach(btns => {
                    btns.textContent = 'Minimize';
                })
            }
        })
        todoDetailsAll.forEach(items => {
            items.classList.remove('onClickTodoDetailsShrink');
        })
        todoDescriptionAll.forEach(items => {
            items.classList.remove('onClickHideToDoDetails');
        })
        todoStatusAll.forEach(items => {
            items.classList.remove('onClickHideToDoDetails');
        })
        todoDateAll.forEach(items => {
            items.classList.remove('onClickTodoDate');
        })
        todoDeleteBtnAll.forEach(items => {
            items.classList.remove('onClickHideToDoDetails');
        })
        todoEditBtnAll.forEach(items => {
            items.classList.remove('onClickHideToDoDetails');
        })
    })


    _htmlElement__WEBPACK_IMPORTED_MODULE_1__.gridIcon.addEventListener('click', e => {
        isTodoListOrGridStyle = true;

        const todoMainAll = document.querySelectorAll('.todoMain');
        const todoDetailsAll = document.querySelectorAll('.todoDetails');
        const todoDescriptionAll = document.querySelectorAll('.todoDescription');
        const todoStatusAll = document.querySelectorAll('.todoStatus');
        const todoDateAll = document.querySelectorAll('.todoDate');
        const todoDeleteBtnAll = document.querySelectorAll('.todoDeleteBtn');
        const todoEditBtnAll = document.querySelectorAll('.todoEditBtn');



        todoMainAll.forEach(items => {
            items.classList.add('onClickTodoMainShrink');
            if (items.classList.contains(`onClickTodoMainShrink`)) {
                const todoMinimizeBtnAll = document.querySelectorAll('.todoMinimizeBtn');
                todoMinimizeBtnAll.forEach(btns => {
                    // alert('contains')
                    btns.textContent = 'Maximize';
                })
            }
        })
        todoDetailsAll.forEach(items => {
            items.classList.add('onClickTodoDetailsShrink');
        })
        todoDescriptionAll.forEach(items => {
            items.classList.add('onClickHideToDoDetails');
        })
        todoStatusAll.forEach(items => {
            items.classList.add('onClickHideToDoDetails');
        })
        todoDateAll.forEach(items => {
            items.classList.add('onClickTodoDate');
        })
        todoDeleteBtnAll.forEach(items => {
            items.classList.add('onClickHideToDoDetails');
        })
        todoEditBtnAll.forEach(items => {
            items.classList.add('onClickHideToDoDetails');

        })
    })
}

function clickTodoListOrGridStyle() {  // check if the user was clicked the sorting order [grid or list] and create the new Todo with the same style format 
    if (isTodoListOrGridStyle === true) {
        _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoMinimizeBtn.textContent = 'Maximize'
        _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoMain.classList.add('onClickTodoMainShrink');
        _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDetails.classList.add('onClickTodoDetailsShrink');
        _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDescription.classList.add('onClickHideToDoDetails');
        _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoStatus.classList.add('onClickHideToDoDetails');
        _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDate.classList.add('onClickTodoDate');
        _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDeleteBtn.classList.add('onClickHideToDoDetails');
        _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoEditBtn.classList.add('onClickHideToDoDetails');
    }
}

function minimizeTodoDetailsFnc(e) {
    e.currentTarget.parentNode.parentElement.parentElement.classList.toggle(`onClickTodoMainShrink`); // Selects todoMain
    e.currentTarget.parentElement.parentElement.classList.toggle('onClickTodoDetailsShrink'); // Selects todoDetails

    e.currentTarget.parentNode.parentElement.childNodes[1].classList.toggle('onClickHideToDoDetails'); // Selects todoDescription
    e.currentTarget.parentNode.parentElement.childNodes[2].classList.toggle('onClickTodoDate'); // Selects todoDate
    e.currentTarget.parentNode.parentElement.childNodes[3].classList.toggle('onClickHideToDoDetails'); // Selects todoStatus


    e.currentTarget.parentNode.childNodes[0].classList.toggle('onClickHideToDoDetails'); // Selects deleteBtn
    e.currentTarget.parentNode.childNodes[1].classList.toggle('onClickHideToDoDetails'); // Selects editBtn
    console.log(e.currentTarget.parentNode.parentElement);

    if (e.currentTarget.parentNode.parentElement.parentElement.classList.contains(`onClickTodoMainShrink`)) {
        e.currentTarget.parentNode.childNodes[2].textContent = 'Maximize';
    }
    else {
        e.currentTarget.parentNode.childNodes[2].textContent = 'Minimize';
    }
}

function minimizeTodoDetails() {
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoMinimizeBtn.addEventListener("click", minimizeTodoDetailsFnc);
}

function fillSignTodoFnc(e) {
    console.log('click');
    e.currentTarget.classList.toggle('onClickFillTodoSign');
    // console.log(e.currentTarget.parentNode.parentElement.parentElement.classList.toggle('signStyle')); // selects main
}

function fillSignTodo() {
    const todoSigns = document.querySelectorAll(`.todoSign`);
    todoSigns.forEach(items => {
        items.addEventListener("click", fillSignTodoFnc)
    })
}

function removeTodo() {
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDeleteBtn.addEventListener("click", (e) => {
        e.currentTarget.parentNode.parentElement.parentElement.remove(); // select todoMain and remove
        // console.log(e.currentTarget.parentNode.parentElement.parentElement)
    });
}

// todoFunctionality -!
// const todoMainAll = document.querySelectorAll('.todoMain');
// todoMainAll.forEach(all => {
//     console.log(all)
// })
function edit() {
    const todoEdit = document.querySelectorAll('.todoEditBtn');
    todoEdit.forEach(items => {
        items.addEventListener("click", e => {
            e.currentTarget.parentNode.parentElement.style.display = 'none';  // selects details with respect to editBtn
            _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.editTodo.style.display = 'grid';
            e.currentTarget.parentNode.parentElement.parentElement.append(_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.editTodo);


            // document.onkeydown = function (evt) {
            //     evt = evt || window.event;
            //     if (evt.key === 'Escape') {
            //         editDiv.remove();
            //         console.log(evt.currentTarget)
            //         // e.currentTarget.parentNode.parentElement.style.display = 'grid';  // selects details with respect to editBtn

            //     }
            // };

            const editButton = e.currentTarget.parentNode.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[9].childNodes[1]
            editButton.addEventListener('click', event => {
                const dateBtnIndianFormat = _htmlElement__WEBPACK_IMPORTED_MODULE_1__.dateBtnEdit.value.split('-').reverse().join('-');
                _htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = 'flex';
                _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.editTodo.style.display = 'none';
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].style.display = 'grid';  // selects details
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[1].textContent = `${_htmlElement__WEBPACK_IMPORTED_MODULE_1__.nameBtnEdit.value}`;
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].textContent = `${_htmlElement__WEBPACK_IMPORTED_MODULE_1__.descriptionBtnEdit.value}`;
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[2].textContent = `${dateBtnIndianFormat}`;
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[3].textContent = `${_htmlElement__WEBPACK_IMPORTED_MODULE_1__.statusBtnEdit.value}`;
                console.log(event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[3]);
            })
        })
    })
}

function todoSectionCreate() {
    (0,_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__["default"])();  // from eachTodoItem.js
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoName.textContent = `${obj.sike[0].title}`;
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDescription.textContent = `${obj.sike[0].description}`;
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDate.textContent = `${obj.sike[0].date}`;
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoStatus.textContent = `${obj.sike[0].status}`;
}

function predefinedTodoInput() {
    const listItemTwo = new TodoClass('Messi', 'GOAT', '2-11-1990', 'High');
    obj.sike.push(listItemTwo);
    todoSectionCreate();
    // todo Functionality !-
    minimizeTodoDetails();
    fillSignTodo();
    removeTodo();
    edit();
}

function userCreateTodoInput() {
    const dateBtnIndianFormat = _addItem__WEBPACK_IMPORTED_MODULE_2__.dateBtn.value.split('-').reverse().join('-');
    const listItem = new TodoClass(_addItem__WEBPACK_IMPORTED_MODULE_2__.nameBtn.value, _addItem__WEBPACK_IMPORTED_MODULE_2__.descriptionBtn.value, dateBtnIndianFormat, _addItem__WEBPACK_IMPORTED_MODULE_2__.statusBtn.value);
    obj.sike.unshift(listItem);
    todoSectionCreate();
}

function saveTodo() {
    _addItem__WEBPACK_IMPORTED_MODULE_2__.saveBtn.addEventListener("click", () => {
        _htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = 'flex';
        _htmlElement__WEBPACK_IMPORTED_MODULE_1__.sectionFour.style.display = 'none';
        userCreateTodoInput();
        minimizeTodoDetails();
        fillSignTodo();
        removeTodo();
        clickTodoListOrGridStyle();
        edit();
    });
}

predefinedTodoInput();
addItemBtn();
saveTodo();
sortTodoListOrGridStyle();




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxPQUFPLGNBQWMsTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFB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L0osc0lBQXNJLG9CQUFvQjtBQUMxSixzSUFBc0ksNkRBQW1CLENBQUM7QUFDMUo7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFZLEtBQUs7QUFDckIsSUFBSSwrREFBb0IsTUFBTSxrQkFBa0I7QUFDaEQsSUFBSSxzRUFBMkIsTUFBTSx3QkFBd0I7QUFDN0QsSUFBSSwrREFBb0IsTUFBTSxpQkFBaUI7QUFDL0MsSUFBSSxpRUFBc0IsTUFBTSxtQkFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx5REFBbUI7QUFDbkQsbUNBQW1DLG1EQUFhLEVBQUUsMERBQW9CLHVCQUF1QixxREFBZTtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBd0I7QUFDNUIsUUFBUSxrRUFBd0I7QUFDaEMsUUFBUSxtRUFBeUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWFjaFRvZG9JdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaHRtbEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvYWRkLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZy9kZWxldGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2VkaXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2xpc3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2dyaWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgICAvKiBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTsgKi9cXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogcmdiKDEyNCwgMTA1LCAyMDkpO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxLCA1NiwgMTUsIDAuNDg2KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIxMiwgMjAzLCAwLjQ4Nik7XFxyXFxuICAgIGNvbG9yOiByZ2IoNDksIDE4MiwgMTgyKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0+ZGl2PmlucHV0IHtcXHJcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1idXR0b25dIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxyXFxuICAgIGN1cnNvcjogdGV4dFxcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgICAvKiBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7ICovXFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAyOSwgMjkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBhcXVhbWFyaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiA1cHggZG90dGVkIHJnYigxMCwgNSwgNSk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTAsIDI0Nyk7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uT25lIHtcXHJcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJlZDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25Ud28ge1xcclxcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgcmdiKDIwNCwgMCwgMjU1KTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvblRocmVlIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7ICovXFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uRm91ciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmRhdGVEaXYge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zYXZlQnRuRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNhdmVCdG4sXFxyXFxuLnNhdmVCdG5FZGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCA0MiwgNDMpO1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjEsIDE2MSwgMTYxKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXR1c0J0bixcXHJcXG4uc3RhdHVzQnRuRWRpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXg7XFxyXFxufVxcclxcblxcclxcbi5odWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE5LCAyMTkpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYXJyYW5nZVN0eWxlIHtcXHJcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvTWFpbiB7XFxyXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDIzMywgMjA0LCAwLjQwNCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvTmFtZURpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kb0RpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEsIDU2LCAxNSwgMC40ODYpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjEyLCAyMDMsIDAuNDg2KTtcXHJcXG4gICAgY29sb3I6IHJnYig0OSwgMTgyLCAxODIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICAvKiBtYXJnaW4tdG9wOiA1cHg7ICovXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG9CdG4ge1xcclxcbiAgICBhbGw6IHVuc2V0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9TaWduIHtcXHJcXG4gICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICB3aWR0aDogMThweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNzAsIDY4LCA2OCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kb09uT2ZmIHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGNlbnRlci9jb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0ljb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHhcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EZWxldGVCdG4ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9FZGl0QnRuIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZVNvcnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdEljb24ge1xcclxcbiAgICBhbGw6IHVuc2V0O1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZEljb24ge1xcclxcbiAgICBhbGw6IHVuc2V0O1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb01pbmltaXplQnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5odWQ+ZGl2IHtcXHJcXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZWJlY2NhcHVycGxlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1NpZ246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc4LCAyNDgsIDg2KTtcXHJcXG4gICAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb01haW46aG92ZXIge1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwOSwgMTA5LCAxMDgsIDAuMjgxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTsgKi9cXHJcXG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBvbkNsaWNrIGNsYXNzTGlzdCAqL1xcclxcblxcclxcblxcclxcbi5vbkNsaWNrSGlkZVRvRG9EZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tUb2RvRGF0ZSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vbkNsaWNrU2VjdGlvblRocmVlU2hyaW5rIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxyXFxufVxcclxcblxcclxcbi5vbkNsaWNrVG9kb01haW5TaHJpbmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAxODksIDE4OSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxNzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tUb2RvRGV0YWlsc1NocmluayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5vbkNsaWNrRmlsbFRvZG9TaWduIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ4Nik7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zaWduU3R5bGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcXHJcXG4gICAgb3BhY2l0eTogMC4yO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdFRvZG8ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0lBQWtJO0FBQ3RJOztBQUVBOztJQUVJO2tCQUNjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztJQUNULHlCQUF5QjtJQUN6QixlQUFl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XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgLyogbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7ICovXFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IHJnYigxMjQsIDEwNSwgMjA5KTtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMSwgNTYsIDE1LCAwLjQ4Nik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMTIsIDIwMywgMC40ODYpO1xcclxcbiAgICBjb2xvcjogcmdiKDQ5LCAxODIsIDE4Mik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtPmRpdj5pbnB1dCB7XFxyXFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IDFzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9YnV0dG9uXSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcclxcbiAgICBjdXJzb3I6IHRleHRcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMjksIDI5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogNXB4IGRvdHRlZCByZ2IoMTAsIDUsIDUpO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjUwLCAyNDcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbk9uZSB7XFxyXFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCByZWQ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uVHdvIHtcXHJcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJnYigyMDQsIDAsIDI1NSk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25UaHJlZSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbkZvdXIge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi5kYXRlRGl2IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2F2ZUJ0bkRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zYXZlQnRuLFxcclxcbi5zYXZlQnRuRWRpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgNDIsIDQzKTtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYxLCAxNjEsIDE2MSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGF0dXNCdG4sXFxyXFxuLnN0YXR1c0J0bkVkaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRJdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaHVkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxOSwgMjE5KTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmFycmFuZ2VTdHlsZSB7XFxyXFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb01haW4ge1xcclxcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLCAyMzMsIDIwNCwgMC40MDQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb05hbWVEaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG9EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxLCA1NiwgMTUsIDAuNDg2KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIxMiwgMjAzLCAwLjQ4Nik7XFxyXFxuICAgIGNvbG9yOiByZ2IoNDksIDE4MiwgMTgyKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgLyogbWFyZ2luLXRvcDogNXB4OyAqL1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRUb2RvQnRuIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvU2lnbiB7XFxyXFxuICAgIGhlaWdodDogMThweDtcXHJcXG4gICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDcwLCA2OCwgNjgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG9Pbk9mZiB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvYWRkLnBuZycpIGNlbnRlci9jb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0ljb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHhcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EZWxldGVCdG4ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvZGVsZXRlLnBuZycpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0VkaXRCdG4ge1xcclxcbiAgICBhbGw6IHVuc2V0O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvZWRpdC5wbmcnKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlU29ydCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0SWNvbiB7XFxyXFxuICAgIGFsbDogdW5zZXQ7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1nL2xpc3Quc3ZnJykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmlkSWNvbiB7XFxyXFxuICAgIGFsbDogdW5zZXQ7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1nL2dyaWQuc3ZnJykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvTWluaW1pemVCdG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmh1ZD5kaXYge1xcclxcbiAgICAvKiBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlYmVjY2FwdXJwbGU7ICovXFxyXFxufVxcclxcblxcclxcbi50b2RvU2lnbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzgsIDI0OCwgODYpO1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbi50b2RvTWFpbjpob3ZlciB7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA5LCAxMDksIDEwOCwgMC4yODEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpOyAqL1xcclxcbiAgICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXFxyXFxufVxcclxcblxcclxcbi8qIG9uQ2xpY2sgY2xhc3NMaXN0ICovXFxyXFxuXFxyXFxuXFxyXFxuLm9uQ2xpY2tIaWRlVG9Eb0RldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9EYXRlIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tTZWN0aW9uVGhyZWVTaHJpbmsge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tUb2RvTWFpblNocmluayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDE4OSwgMTg5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDE3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9EZXRhaWxzU2hyaW5rIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tGaWxsVG9kb1NpZ24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDg2KTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25TdHlsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MDQpO1xcclxcbiAgICBvcGFjaXR5OiAwLjI7XFxyXFxufVxcclxcblxcclxcbi5lZGl0VG9kbyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBuYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWVCdG4nKTtcclxuY29uc3QgZGVzY3JpcHRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb25CdG4nKTtcclxuY29uc3QgZGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlQnRuJyk7XHJcbmNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZUJ0bicpO1xyXG5jb25zdCBzdGF0dXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzQnRuJyk7XHJcblxyXG5cclxuZXhwb3J0IHsgbmFtZUJ0biwgZGVzY3JpcHRpb25CdG4sIGRhdGVCdG4sIHN0YXR1c0J0biwgc2F2ZUJ0biB9OyIsImltcG9ydCB7IGFkZFRvZG9EaXYsIHNlY3Rpb25Gb3VyIH0gZnJvbSBcIi4vaHRtbEVsZW1lbnRcIlxyXG5cclxubGV0IHRvZG9NYWluO1xyXG5sZXQgdG9kb0RldGFpbHM7XHJcbmxldCB0b2RvTmFtZURpdjtcclxubGV0IHRvZG9TaWduO1xyXG5sZXQgdG9kb05hbWU7XHJcbmxldCB0b2RvRGVzY3JpcHRpb247XHJcbmxldCB0b2RvU3RhdHVzO1xyXG5sZXQgdG9kb0RhdGU7XHJcbmxldCB0b2RvSWNvbjtcclxubGV0IHRvZG9EZWxldGVCdG47XHJcbmxldCB0b2RvTWluaW1pemVCdG47XHJcbmxldCB0b2RvRWRpdEJ0bjtcclxuXHJcbmNvbnN0IHNlY3Rpb25UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBhcnJhbmdlU3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyYW5nZVN0eWxlJyk7XHJcbmNvbnN0IGVkaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRUb2RvJyk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb1VJQ3JlYXRlKCkge1xyXG4gICAgdG9kb01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9TdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb01pbmltaXplQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0b2RvRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuXHJcbiAgICBzZWN0aW9uVGhyZWUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvblRocmVlJyk7XHJcbiAgICB0b2RvTWFpbi5jbGFzc0xpc3QuYWRkKCd0b2RvTWFpbicpO1xyXG4gICAgdG9kb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgndG9kb0RldGFpbHMnKTtcclxuICAgIHRvZG9OYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9OYW1lRGl2Jyk7XHJcbiAgICB0b2RvU2lnbi5jbGFzc0xpc3QuYWRkKCd0b2RvU2lnbicpO1xyXG4gICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZCgndG9kb05hbWUnKTtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvRGVzY3JpcHRpb24nKTtcclxuICAgIHRvZG9TdGF0dXMuY2xhc3NMaXN0LmFkZCgndG9kb1N0YXR1cycpO1xyXG4gICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGUnKTtcclxuICAgIHRvZG9JY29uLmNsYXNzTGlzdC5hZGQoJ3RvZG9JY29uJyk7XHJcbiAgICB0b2RvRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZWxldGVCdG4nKTtcclxuICAgIHRvZG9NaW5pbWl6ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvTWluaW1pemVCdG4nKTtcclxuICAgIHRvZG9NaW5pbWl6ZUJ0bi50ZXh0Q29udGVudCA9ICdNaW5pbWl6ZSc7XHJcbiAgICB0b2RvRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdEJ0bicpO1xyXG4gICAgLy8gdG9kb0VkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XHJcblxyXG4gICAgdG9kb0RlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgdG9kb0RldGFpbHMuYXBwZW5kKHRvZG9TaWduLCB0b2RvTmFtZURpdiwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRGF0ZSwgdG9kb1N0YXR1cywgdG9kb0ljb24pO1xyXG4gICAgdG9kb05hbWVEaXYuYXBwZW5kKHRvZG9TaWduLCB0b2RvTmFtZSk7XHJcbiAgICB0b2RvSWNvbi5hcHBlbmQodG9kb0RlbGV0ZUJ0biwgdG9kb0VkaXRCdG4sIHRvZG9NaW5pbWl6ZUJ0bik7XHJcbiAgICB0b2RvTWFpbi5hcHBlbmQodG9kb0RldGFpbHMpO1xyXG4gICAgYXJyYW5nZVN0eWxlLmFwcGVuZChzZWN0aW9uVGhyZWUpO1xyXG4gICAgc2VjdGlvblRocmVlLnByZXBlbmQoc2VjdGlvbkZvdXIpO1xyXG4gICAgc2VjdGlvblRocmVlLnByZXBlbmQoYWRkVG9kb0Rpdik7XHJcbiAgICBzZWN0aW9uVGhyZWUucHJlcGVuZChlZGl0VG9kbylcclxuICAgIHNlY3Rpb25UaHJlZS5hcHBlbmQodG9kb01haW4pO1xyXG59XHJcbmV4cG9ydCB7XHJcbiAgICBzZWN0aW9uRm91cixcclxuICAgIHRvZG9NYWluLCB0b2RvRGV0YWlscyxcclxuICAgIHRvZG9TaWduLCB0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvU3RhdHVzLCB0b2RvRGF0ZSxcclxuICAgIHRvZG9EZWxldGVCdG4sIHRvZG9NaW5pbWl6ZUJ0biwgdG9kb0ljb24sIHRvZG9FZGl0QnRuLFxyXG4gICAgZWRpdFRvZG9cclxufTsiLCJjb25zdCBhZGRUb2RvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRvZG9EaXYnKTtcclxuY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUb2RvQnRuJyk7XHJcblxyXG5jb25zdCBuYW1lQnRuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lQnRuRWRpdCcpO1xyXG5jb25zdCBkZXNjcmlwdGlvbkJ0bkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb25CdG5FZGl0Jyk7XHJcbmNvbnN0IHN0YXR1c0J0bkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzQnRuRWRpdCcpO1xyXG5jb25zdCBkYXRlQnRuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlQnRuRWRpdCcpO1xyXG5cclxuY29uc3QgZ3JpZEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZEljb24nKTtcclxuY29uc3QgbGlzdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdEljb24nKTtcclxuXHJcbmNvbnN0IHNlY3Rpb25Gb3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25Gb3VyJyk7XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIGFkZFRvZG9EaXYsIGFkZFRvZG9CdG4sIGdyaWRJY29uLCBsaXN0SWNvbixcclxuICAgIG5hbWVCdG5FZGl0LCBkZXNjcmlwdGlvbkJ0bkVkaXQsIGRhdGVCdG5FZGl0LCBzdGF0dXNCdG5FZGl0LCBzZWN0aW9uRm91clxyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge1xyXG4gICAgYWRkVG9kb0J0biwgYWRkVG9kb0RpdiwgZ3JpZEljb24sIGxpc3RJY29uLFxyXG4gICAgbmFtZUJ0bkVkaXQsIGRlc2NyaXB0aW9uQnRuRWRpdCwgc3RhdHVzQnRuRWRpdCwgZGF0ZUJ0bkVkaXQsXHJcbiAgICBzZWN0aW9uRm91clxyXG59IGZyb20gJy4vaHRtbEVsZW1lbnQnO1xyXG5pbXBvcnQgeyBuYW1lQnRuLCBzYXZlQnRuLCBkZXNjcmlwdGlvbkJ0biwgZGF0ZUJ0biwgc3RhdHVzQnRuIH0gZnJvbSAnLi9hZGRJdGVtJztcclxuaW1wb3J0IHRvZG9VSUNyZWF0ZSwge1xyXG4gICAgdG9kb01haW4sIHRvZG9EZXRhaWxzLCB0b2RvU2lnbiwgdG9kb05hbWUsIHRvZG9EZXNjcmlwdGlvbixcclxuICAgIHRvZG9TdGF0dXMsIHRvZG9EYXRlLCB0b2RvRGVsZXRlQnRuLCB0b2RvTWluaW1pemVCdG4sIHRvZG9FZGl0QnRuLFxyXG4gICAgZWRpdFRvZG9cclxufSBmcm9tICcuL2VhY2hUb2RvSXRlbSc7XHJcblxyXG5jb25zdCBvYmogPSB7XHJcbiAgICBzaWtlOiBbXSxcclxuICAgIGN1cnJlbnRTdGF0dXM6ICcnLFxyXG59XHJcblxyXG5jbGFzcyBUb2RvQ2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBzdGF0dXMpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEl0ZW1CdG4oKSB7XHJcbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkVG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHNlY3Rpb25Gb3VyLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgICAgLy8gc2VsZWN0ZWRTdGF0dXMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyB0b2RvRnVuY3Rpb25hbGl0eSAhLVxyXG5cclxuXHJcbmxldCBpc1RvZG9MaXN0T3JHcmlkU3R5bGU7XHJcblxyXG5mdW5jdGlvbiBzb3J0VG9kb0xpc3RPckdyaWRTdHlsZSgpIHsgLy8gQ2hlY2sgZm9yIEV2ZW50TGlzdGVuZXIgYW5kIGNyZWF0ZSBzb3J0aW5nIG9yZGVyIFtncmlkIG9yIGxpc3RdXHJcbiAgICBsaXN0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGlzVG9kb0xpc3RPckdyaWRTdHlsZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHRvZG9NYWluQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9NYWluJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0RldGFpbHNBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0RldGFpbHMnKTtcclxuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb25BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb1N0YXR1c0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvU3RhdHVzJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0RhdGVBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0RhdGUnKTtcclxuICAgICAgICBjb25zdCB0b2RvRGVsZXRlQnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9EZWxldGVCdG4nKTtcclxuICAgICAgICBjb25zdCB0b2RvRWRpdEJ0bkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRWRpdEJ0bicpO1xyXG5cclxuICAgICAgICB0b2RvTWFpbkFsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnb25DbGlja1RvZG9NYWluU2hyaW5rJyk7XHJcbiAgICAgICAgICAgIGlmICghaXRlbXMuY2xhc3NMaXN0LmNvbnRhaW5zKGBvbkNsaWNrVG9kb01haW5TaHJpbmtgKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb01pbmltaXplQnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9NaW5pbWl6ZUJ0bicpO1xyXG4gICAgICAgICAgICAgICAgdG9kb01pbmltaXplQnRuQWxsLmZvckVhY2goYnRucyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRucy50ZXh0Q29udGVudCA9ICdNaW5pbWl6ZSc7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0b2RvRGV0YWlsc0FsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnb25DbGlja1RvZG9EZXRhaWxzU2hyaW5rJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0b2RvRGVzY3JpcHRpb25BbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9TdGF0dXNBbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9EYXRlQWxsLmZvckVhY2goaXRlbXMgPT4ge1xyXG4gICAgICAgICAgICBpdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdvbkNsaWNrVG9kb0RhdGUnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9EZWxldGVCdG5BbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9FZGl0QnRuQWxsLmZvckVhY2goaXRlbXMgPT4ge1xyXG4gICAgICAgICAgICBpdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdvbkNsaWNrSGlkZVRvRG9EZXRhaWxzJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGdyaWRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgaXNUb2RvTGlzdE9yR3JpZFN0eWxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb01haW5BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb01haW4nKTtcclxuICAgICAgICBjb25zdCB0b2RvRGV0YWlsc0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRGV0YWlscycpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRGVzY3JpcHRpb24nKTtcclxuICAgICAgICBjb25zdCB0b2RvU3RhdHVzQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9TdGF0dXMnKTtcclxuICAgICAgICBjb25zdCB0b2RvRGF0ZUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRGF0ZScpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9EZWxldGVCdG5BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0RlbGV0ZUJ0bicpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9FZGl0QnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9FZGl0QnRuJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdG9kb01haW5BbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoJ29uQ2xpY2tUb2RvTWFpblNocmluaycpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbXMuY2xhc3NMaXN0LmNvbnRhaW5zKGBvbkNsaWNrVG9kb01haW5TaHJpbmtgKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb01pbmltaXplQnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9NaW5pbWl6ZUJ0bicpO1xyXG4gICAgICAgICAgICAgICAgdG9kb01pbmltaXplQnRuQWxsLmZvckVhY2goYnRucyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoJ2NvbnRhaW5zJylcclxuICAgICAgICAgICAgICAgICAgICBidG5zLnRleHRDb250ZW50ID0gJ01heGltaXplJztcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9EZXRhaWxzQWxsLmZvckVhY2goaXRlbXMgPT4ge1xyXG4gICAgICAgICAgICBpdGVtcy5jbGFzc0xpc3QuYWRkKCdvbkNsaWNrVG9kb0RldGFpbHNTaHJpbmsnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbkFsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LmFkZCgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb1N0YXR1c0FsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LmFkZCgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb0RhdGVBbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoJ29uQ2xpY2tUb2RvRGF0ZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb0RlbGV0ZUJ0bkFsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LmFkZCgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb0VkaXRCdG5BbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsaWNrVG9kb0xpc3RPckdyaWRTdHlsZSgpIHsgIC8vIGNoZWNrIGlmIHRoZSB1c2VyIHdhcyBjbGlja2VkIHRoZSBzb3J0aW5nIG9yZGVyIFtncmlkIG9yIGxpc3RdIGFuZCBjcmVhdGUgdGhlIG5ldyBUb2RvIHdpdGggdGhlIHNhbWUgc3R5bGUgZm9ybWF0IFxyXG4gICAgaWYgKGlzVG9kb0xpc3RPckdyaWRTdHlsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRvZG9NaW5pbWl6ZUJ0bi50ZXh0Q29udGVudCA9ICdNYXhpbWl6ZSdcclxuICAgICAgICB0b2RvTWFpbi5jbGFzc0xpc3QuYWRkKCdvbkNsaWNrVG9kb01haW5TaHJpbmsnKTtcclxuICAgICAgICB0b2RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdvbkNsaWNrVG9kb0RldGFpbHNTaHJpbmsnKTtcclxuICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIHRvZG9TdGF0dXMuY2xhc3NMaXN0LmFkZCgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIHRvZG9EYXRlLmNsYXNzTGlzdC5hZGQoJ29uQ2xpY2tUb2RvRGF0ZScpO1xyXG4gICAgICAgIHRvZG9EZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIHRvZG9FZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWluaW1pemVUb2RvRGV0YWlsc0ZuYyhlKSB7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgb25DbGlja1RvZG9NYWluU2hyaW5rYCk7IC8vIFNlbGVjdHMgdG9kb01haW5cclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb25DbGlja1RvZG9EZXRhaWxzU2hyaW5rJyk7IC8vIFNlbGVjdHMgdG9kb0RldGFpbHNcclxuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnRvZ2dsZSgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpOyAvLyBTZWxlY3RzIHRvZG9EZXNjcmlwdGlvblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzJdLmNsYXNzTGlzdC50b2dnbGUoJ29uQ2xpY2tUb2RvRGF0ZScpOyAvLyBTZWxlY3RzIHRvZG9EYXRlXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbM10uY2xhc3NMaXN0LnRvZ2dsZSgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpOyAvLyBTZWxlY3RzIHRvZG9TdGF0dXNcclxuXHJcblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QudG9nZ2xlKCdvbkNsaWNrSGlkZVRvRG9EZXRhaWxzJyk7IC8vIFNlbGVjdHMgZGVsZXRlQnRuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC50b2dnbGUoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTsgLy8gU2VsZWN0cyBlZGl0QnRuXHJcbiAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50KTtcclxuXHJcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgb25DbGlja1RvZG9NYWluU2hyaW5rYCkpIHtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50ID0gJ01heGltaXplJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSAnTWluaW1pemUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtaW5pbWl6ZVRvZG9EZXRhaWxzKCkge1xyXG4gICAgdG9kb01pbmltaXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtaW5pbWl6ZVRvZG9EZXRhaWxzRm5jKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbFNpZ25Ub2RvRm5jKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ29uQ2xpY2tGaWxsVG9kb1NpZ24nKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaWduU3R5bGUnKSk7IC8vIHNlbGVjdHMgbWFpblxyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsU2lnblRvZG8oKSB7XHJcbiAgICBjb25zdCB0b2RvU2lnbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAudG9kb1NpZ25gKTtcclxuICAgIHRvZG9TaWducy5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICBpdGVtcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlsbFNpZ25Ub2RvRm5jKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVG9kbygpIHtcclxuICAgIHRvZG9EZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpOyAvLyBzZWxlY3QgdG9kb01haW4gYW5kIHJlbW92ZVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudClcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyB0b2RvRnVuY3Rpb25hbGl0eSAtIVxyXG4vLyBjb25zdCB0b2RvTWFpbkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvTWFpbicpO1xyXG4vLyB0b2RvTWFpbkFsbC5mb3JFYWNoKGFsbCA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhhbGwpXHJcbi8vIH0pXHJcbmZ1bmN0aW9uIGVkaXQoKSB7XHJcbiAgICBjb25zdCB0b2RvRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRWRpdEJ0bicpO1xyXG4gICAgdG9kb0VkaXQuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAvLyBzZWxlY3RzIGRldGFpbHMgd2l0aCByZXNwZWN0IHRvIGVkaXRCdG5cclxuICAgICAgICAgICAgZWRpdFRvZG8uc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZChlZGl0VG9kbyk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAvLyAgICAgZXZ0ID0gZXZ0IHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChldnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGVkaXREaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXZ0LmN1cnJlbnRUYXJnZXQpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnOyAgLy8gc2VsZWN0cyBkZXRhaWxzIHdpdGggcmVzcGVjdCB0byBlZGl0QnRuXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1s5XS5jaGlsZE5vZGVzWzFdXHJcbiAgICAgICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlQnRuSW5kaWFuRm9ybWF0ID0gZGF0ZUJ0bkVkaXQudmFsdWUuc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLScpO1xyXG4gICAgICAgICAgICAgICAgYWRkVG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICAgICAgZWRpdFRvZG8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7ICAvLyBzZWxlY3RzIGRldGFpbHNcclxuICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9IGAke25hbWVCdG5FZGl0LnZhbHVlfWA7XHJcbiAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gYCR7ZGVzY3JpcHRpb25CdG5FZGl0LnZhbHVlfWA7XHJcbiAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50ID0gYCR7ZGF0ZUJ0bkluZGlhbkZvcm1hdH1gO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1szXS50ZXh0Q29udGVudCA9IGAke3N0YXR1c0J0bkVkaXQudmFsdWV9YDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbM10pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2RvU2VjdGlvbkNyZWF0ZSgpIHtcclxuICAgIHRvZG9VSUNyZWF0ZSgpOyAgLy8gZnJvbSBlYWNoVG9kb0l0ZW0uanNcclxuICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gYCR7b2JqLnNpa2VbMF0udGl0bGV9YDtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke29iai5zaWtlWzBdLmRlc2NyaXB0aW9ufWA7XHJcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGAke29iai5zaWtlWzBdLmRhdGV9YDtcclxuICAgIHRvZG9TdGF0dXMudGV4dENvbnRlbnQgPSBgJHtvYmouc2lrZVswXS5zdGF0dXN9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlZGVmaW5lZFRvZG9JbnB1dCgpIHtcclxuICAgIGNvbnN0IGxpc3RJdGVtVHdvID0gbmV3IFRvZG9DbGFzcygnTWVzc2knLCAnR09BVCcsICcyLTExLTE5OTAnLCAnSGlnaCcpO1xyXG4gICAgb2JqLnNpa2UucHVzaChsaXN0SXRlbVR3byk7XHJcbiAgICB0b2RvU2VjdGlvbkNyZWF0ZSgpO1xyXG4gICAgLy8gdG9kbyBGdW5jdGlvbmFsaXR5ICEtXHJcbiAgICBtaW5pbWl6ZVRvZG9EZXRhaWxzKCk7XHJcbiAgICBmaWxsU2lnblRvZG8oKTtcclxuICAgIHJlbW92ZVRvZG8oKTtcclxuICAgIGVkaXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlckNyZWF0ZVRvZG9JbnB1dCgpIHtcclxuICAgIGNvbnN0IGRhdGVCdG5JbmRpYW5Gb3JtYXQgPSBkYXRlQnRuLnZhbHVlLnNwbGl0KCctJykucmV2ZXJzZSgpLmpvaW4oJy0nKTtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gbmV3IFRvZG9DbGFzcyhuYW1lQnRuLnZhbHVlLCBkZXNjcmlwdGlvbkJ0bi52YWx1ZSwgZGF0ZUJ0bkluZGlhbkZvcm1hdCwgc3RhdHVzQnRuLnZhbHVlKTtcclxuICAgIG9iai5zaWtlLnVuc2hpZnQobGlzdEl0ZW0pO1xyXG4gICAgdG9kb1NlY3Rpb25DcmVhdGUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVRvZG8oKSB7XHJcbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkVG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIHNlY3Rpb25Gb3VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdXNlckNyZWF0ZVRvZG9JbnB1dCgpO1xyXG4gICAgICAgIG1pbmltaXplVG9kb0RldGFpbHMoKTtcclxuICAgICAgICBmaWxsU2lnblRvZG8oKTtcclxuICAgICAgICByZW1vdmVUb2RvKCk7XHJcbiAgICAgICAgY2xpY2tUb2RvTGlzdE9yR3JpZFN0eWxlKCk7XHJcbiAgICAgICAgZWRpdCgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbnByZWRlZmluZWRUb2RvSW5wdXQoKTtcclxuYWRkSXRlbUJ0bigpO1xyXG5zYXZlVG9kbygpO1xyXG5zb3J0VG9kb0xpc3RPckdyaWRTdHlsZSgpO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=