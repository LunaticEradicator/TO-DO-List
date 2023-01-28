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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    font-family: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}\r\n\r\nhtml,\r\nbody {\r\n    /* min-height: 100%;\r\n    width: 100%; */\r\n    margin: 0px;\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n    color: rgb(124, 105, 209);\r\n    font-size: 3rem;\r\n    text-align: center;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    font-weight: bold;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    background-color: rgba(200, 212, 203, 0.486);\r\n    color: rgb(49, 182, 182);\r\n    color: white;\r\n    margin: 0;\r\n}\r\n\r\nform>div>input {\r\n    /* text-align: center; */\r\n    border: none;\r\n    font-size: 1rem;\r\n    background: none;\r\n    outline: none;\r\n    transition: 1s;\r\n    display: flex;\r\n    flex-grow: 1;\r\n}\r\n\r\ninput[type=button] {\r\n    border-radius: 10px;\r\n    font-size: large;\r\n}\r\n\r\ninput[type=date] {\r\n    cursor: text\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border-radius: 0px;\r\n    /* border-bottom: 2px solid black; */\r\n}\r\n\r\ninput[type=button]:hover {\r\n    transform: scale(0.8);\r\n}\r\n\r\n.modal {\r\n    background-color: rgb(29, 29, 29);\r\n    border-radius: 10px;\r\n    border: 2px solid aquamarine;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* overflow: hidden; */\r\n}\r\n\r\n.container {\r\n    /* display: flex; */\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n    gap: 20px;\r\n    border: 5px dotted rgb(10, 5, 5);\r\n    min-height: 100vh;\r\n    background-color: rgb(240, 250, 247);\r\n}\r\n\r\n.sectionOne {\r\n    border: 2px dashed red;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.sectionTwo {\r\n    border: 2px dashed rgb(204, 0, 255);\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n}\r\n\r\n.sectionThree {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    display: grid;\r\n    font-size: 1.2rem;\r\n    gap: 10px;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    /* border: 2px solid rgb(0, 0, 0); */\r\n}\r\n\r\n.sectionFour {\r\n    font-size: 1.2rem;\r\n    gap: 5px;\r\n    /* display: none; */\r\n}\r\n\r\n\r\n.dateDiv {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.saveBtnDiv {\r\n    display: flex;\r\n    flex: 1;\r\n}\r\n\r\n\r\n.saveBtn,\r\n.saveBtnEdit {\r\n    background-color: rgb(42, 42, 43);\r\n    color: aliceblue;\r\n    cursor: pointer;\r\n    border: 1px solid rgb(161, 161, 161);\r\n    display: flex;\r\n    flex: 1;\r\n    justify-content: center;\r\n    padding: 6px;\r\n}\r\n\r\n.statusBtn,\r\n.statusBtnEdit {\r\n    background-color: black;\r\n    color: white;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n.addItem {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    border-radius: 10px;\r\n    padding: 0px;\r\n    padding-left: 10px;\r\n    align-items: center;\r\n    gap: 5x;\r\n}\r\n\r\n.hud {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 5px;\r\n    border-radius: 10px;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    margin: 10px;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    /* background-color: rgb(219, 219, 219); */\r\n}\r\n\r\n.sike {\r\n    /* height: 100vh; */\r\n    border: 2px solid;\r\n    border-radius: 10px;\r\n}\r\n\r\n.todoMain {\r\n    /* display: grid;\r\n    grid-auto-flow: column;\r\n    grid-template-columns: 1fr;\r\n    align-items: center; */\r\n    border-radius: 10px;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    transition: 1s;\r\n    background-color: rgba(220, 233, 204, 0.404);\r\n}\r\n\r\n.todoDetails {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    border-radius: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.todoNameDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\n.addTodoDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    background-color: rgba(200, 212, 203, 0.486);\r\n    color: rgb(49, 182, 182);\r\n    border-radius: 10px;\r\n    padding-left: 5px;\r\n    gap: 10px;\r\n    /* margin-top: 5px; */\r\n    cursor: pointer;\r\n}\r\n\r\n.addTodoBtn {\r\n    all: unset;\r\n    display: flex;\r\n    font-size: 1.2rem;\r\n    flex-grow: 1;\r\n    font-weight: bold;\r\n}\r\n\r\n.todoSign {\r\n    height: 18px;\r\n    width: 18px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    border: 1px solid rgb(70, 68, 68);\r\n    border-radius: 50%;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.addTodoOnOff {\r\n    height: 20px;\r\n    width: 20px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center/contain;\r\n}\r\n\r\n.todoIcon {\r\n    display: flex;\r\n    gap: 10px\r\n}\r\n\r\n.todoDeleteBtn {\r\n    width: 30px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoEditBtn {\r\n    all: unset;\r\n    width: 20px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.imageSort {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.listIcon {\r\n    all: unset;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.gridIcon {\r\n    all: unset;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoMinimizeBtn {\r\n    background-color: black;\r\n    border-radius: 10px;\r\n    color: white;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n.hud>div {\r\n    /* border-bottom: 2px dashed rebeccapurple; */\r\n}\r\n\r\n.todoSign:hover {\r\n    background-color: rgb(178, 248, 86);\r\n    opacity: 0.7;\r\n}\r\n\r\n.todoMain:hover {\r\n    /* background-color: rgba(109, 109, 108, 0.281);\r\n    transform: scale(1.01); */\r\n    /* cursor: pointer; */\r\n}\r\n\r\n/* onClick classList */\r\n\r\n\r\n.onClickHideToDoDetails {\r\n    display: none;\r\n}\r\n\r\n.onClickTodoDate {\r\n    justify-content: end;\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\n.onClickSectionThreeShrink {\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n}\r\n\r\n.onClickTodoMainShrink {\r\n    background-color: rgb(223, 189, 189);\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    width: 175px;\r\n}\r\n\r\n.onClickTodoDetailsShrink {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.onClickFillTodoSign {\r\n    background-color: rgba(0, 0, 0, 0.486);\r\n    border-color: white;\r\n}\r\n\r\n.signStyle {\r\n    background-color: rgba(0, 0, 0, 0.404);\r\n    opacity: 0.2;\r\n}\r\n\r\n.editDiv {\r\n    display: none;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    font-family: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}\r\n\r\nhtml,\r\nbody {\r\n    /* min-height: 100%;\r\n    width: 100%; */\r\n    margin: 0px;\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n    color: rgb(124, 105, 209);\r\n    font-size: 3rem;\r\n    text-align: center;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    font-weight: bold;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    background-color: rgba(200, 212, 203, 0.486);\r\n    color: rgb(49, 182, 182);\r\n    color: white;\r\n    margin: 0;\r\n}\r\n\r\nform>div>input {\r\n    /* text-align: center; */\r\n    border: none;\r\n    font-size: 1rem;\r\n    background: none;\r\n    outline: none;\r\n    transition: 1s;\r\n    display: flex;\r\n    flex-grow: 1;\r\n}\r\n\r\ninput[type=button] {\r\n    border-radius: 10px;\r\n    font-size: large;\r\n}\r\n\r\ninput[type=date] {\r\n    cursor: text\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border-radius: 0px;\r\n    /* border-bottom: 2px solid black; */\r\n}\r\n\r\ninput[type=button]:hover {\r\n    transform: scale(0.8);\r\n}\r\n\r\n.modal {\r\n    background-color: rgb(29, 29, 29);\r\n    border-radius: 10px;\r\n    border: 2px solid aquamarine;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* overflow: hidden; */\r\n}\r\n\r\n.container {\r\n    /* display: flex; */\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n    gap: 20px;\r\n    border: 5px dotted rgb(10, 5, 5);\r\n    min-height: 100vh;\r\n    background-color: rgb(240, 250, 247);\r\n}\r\n\r\n.sectionOne {\r\n    border: 2px dashed red;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.sectionTwo {\r\n    border: 2px dashed rgb(204, 0, 255);\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n}\r\n\r\n.sectionThree {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    display: grid;\r\n    font-size: 1.2rem;\r\n    gap: 10px;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    /* border: 2px solid rgb(0, 0, 0); */\r\n}\r\n\r\n.sectionFour {\r\n    font-size: 1.2rem;\r\n    gap: 5px;\r\n    /* display: none; */\r\n}\r\n\r\n\r\n.dateDiv {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.saveBtnDiv {\r\n    display: flex;\r\n    flex: 1;\r\n}\r\n\r\n\r\n.saveBtn,\r\n.saveBtnEdit {\r\n    background-color: rgb(42, 42, 43);\r\n    color: aliceblue;\r\n    cursor: pointer;\r\n    border: 1px solid rgb(161, 161, 161);\r\n    display: flex;\r\n    flex: 1;\r\n    justify-content: center;\r\n    padding: 6px;\r\n}\r\n\r\n.statusBtn,\r\n.statusBtnEdit {\r\n    background-color: black;\r\n    color: white;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n.addItem {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    border-radius: 10px;\r\n    padding: 0px;\r\n    padding-left: 10px;\r\n    align-items: center;\r\n    gap: 5x;\r\n}\r\n\r\n.hud {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 5px;\r\n    border-radius: 10px;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    margin: 10px;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    /* background-color: rgb(219, 219, 219); */\r\n}\r\n\r\n.sike {\r\n    /* height: 100vh; */\r\n    border: 2px solid;\r\n    border-radius: 10px;\r\n}\r\n\r\n.todoMain {\r\n    /* display: grid;\r\n    grid-auto-flow: column;\r\n    grid-template-columns: 1fr;\r\n    align-items: center; */\r\n    border-radius: 10px;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    transition: 1s;\r\n    background-color: rgba(220, 233, 204, 0.404);\r\n}\r\n\r\n.todoDetails {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    border-radius: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.todoNameDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\n.addTodoDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    background-color: rgba(200, 212, 203, 0.486);\r\n    color: rgb(49, 182, 182);\r\n    border-radius: 10px;\r\n    padding-left: 5px;\r\n    gap: 10px;\r\n    /* margin-top: 5px; */\r\n    cursor: pointer;\r\n}\r\n\r\n.addTodoBtn {\r\n    all: unset;\r\n    display: flex;\r\n    font-size: 1.2rem;\r\n    flex-grow: 1;\r\n    font-weight: bold;\r\n}\r\n\r\n.todoSign {\r\n    height: 18px;\r\n    width: 18px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    border: 1px solid rgb(70, 68, 68);\r\n    border-radius: 50%;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.addTodoOnOff {\r\n    height: 20px;\r\n    width: 20px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    background: url('../img/add.png') center/contain;\r\n}\r\n\r\n.todoIcon {\r\n    display: flex;\r\n    gap: 10px\r\n}\r\n\r\n.todoDeleteBtn {\r\n    width: 30px;\r\n    background: url('../img/delete.png') center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoEditBtn {\r\n    all: unset;\r\n    width: 20px;\r\n    background: url('../img/edit.png') center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.imageSort {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.listIcon {\r\n    all: unset;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: url('../img/list.svg') center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.gridIcon {\r\n    all: unset;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: url('../img/grid.svg') center/contain no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.todoMinimizeBtn {\r\n    background-color: black;\r\n    border-radius: 10px;\r\n    color: white;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n.hud>div {\r\n    /* border-bottom: 2px dashed rebeccapurple; */\r\n}\r\n\r\n.todoSign:hover {\r\n    background-color: rgb(178, 248, 86);\r\n    opacity: 0.7;\r\n}\r\n\r\n.todoMain:hover {\r\n    /* background-color: rgba(109, 109, 108, 0.281);\r\n    transform: scale(1.01); */\r\n    /* cursor: pointer; */\r\n}\r\n\r\n/* onClick classList */\r\n\r\n\r\n.onClickHideToDoDetails {\r\n    display: none;\r\n}\r\n\r\n.onClickTodoDate {\r\n    justify-content: end;\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\n.onClickSectionThreeShrink {\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n}\r\n\r\n.onClickTodoMainShrink {\r\n    background-color: rgb(223, 189, 189);\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    width: 175px;\r\n}\r\n\r\n.onClickTodoDetailsShrink {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.onClickFillTodoSign {\r\n    background-color: rgba(0, 0, 0, 0.486);\r\n    border-color: white;\r\n}\r\n\r\n.signStyle {\r\n    background-color: rgba(0, 0, 0, 0.404);\r\n    opacity: 0.2;\r\n}\r\n\r\n.editDiv {\r\n    display: none;\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   "gridIcon": () => (/* binding */ gridIcon),
/* harmony export */   "listIcon": () => (/* binding */ listIcon),
/* harmony export */   "titleTest": () => (/* binding */ titleTest)
/* harmony export */ });
const sectionOne = document.querySelector('.sectionOne');
const titleTest = document.createElement('h2');
const descriptionTest = document.createElement('span');
const addTodoDiv = document.querySelector('.addTodoDiv');
const addTodoBtn = document.querySelector('.addTodoBtn');
const gridIcon = document.querySelector('.gridIcon');
const listIcon = document.querySelector('.listIcon');


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
/* harmony export */   "createNewSectionThree": () => (/* binding */ createNewSectionThree),
/* harmony export */   "dateBtnEdit": () => (/* binding */ dateBtnEdit),
/* harmony export */   "default": () => (/* binding */ todoUICreate),
/* harmony export */   "descriptionBtnEdit": () => (/* binding */ descriptionBtnEdit),
/* harmony export */   "editDiv": () => (/* binding */ editDiv),
/* harmony export */   "nameBtnEdit": () => (/* binding */ nameBtnEdit),
/* harmony export */   "sectionFour": () => (/* binding */ sectionFour),
/* harmony export */   "sectionThree": () => (/* binding */ sectionThree),
/* harmony export */   "statusBtnEdit": () => (/* binding */ statusBtnEdit),
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
const hud = document.querySelector('.hud');
const addTodoDiv = document.querySelector('.addTodoDiv');
const sectionTwo = document.querySelector('.sectionTwo');
const sectionThree = document.createElement('div');
const sectionFour = document.querySelector('.sectionFour');
const sike = document.querySelector('.sike');
const nameBtnEdit = document.querySelector('.nameBtnEdit');
const descriptionBtnEdit = document.querySelector('.descriptionBtnEdit');
const dateBtnEdit = document.querySelector('.dateBtnEdit');
const statusBtnEdit = document.querySelector('.statusBtnEdit');
const editDiv = document.querySelector('.editDiv');


function createNewSectionThree() {
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
    sike.append(sectionThree);
    sectionThree.prepend(sectionFour);
    sectionThree.prepend(addTodoDiv);
    sectionThree.prepend(editDiv)
    sectionThree.append(todoMain);
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
/* harmony export */   "statusBtn": () => (/* binding */ statusBtn)
/* harmony export */ });

const modal = document.querySelector('.modal');
const nameBtn = document.querySelector('.nameBtn');
const descriptionBtn = document.querySelector('.descriptionBtn');
const dateBtn = document.querySelector('.dateBtn');
const saveBtn = document.querySelector('.saveBtn');
const selectedStatusBtn = document.querySelectorAll('.selectedStatusBtn');
const statusBtn = document.querySelector('.statusBtn');




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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _modalBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalBar */ "./src/modalBar.js");
/* harmony import */ var _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eachTodoItem */ "./src/eachTodoItem.js");






// const nameBtn = document.querySelector('.nameBtn');
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
    _dom__WEBPACK_IMPORTED_MODULE_1__.addTodoBtn.addEventListener("click", () => {
        _dom__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = 'none';
        _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.sectionFour.style.display = 'grid';
        // selectedStatus();
    });
}

// todoFunctionality !-


let isTodoListOrGridStyle;

function sortTodoListOrGridStyle() { // Check for EventListener and create sorting order [grid or list]
    _dom__WEBPACK_IMPORTED_MODULE_1__.listIcon.addEventListener('click', e => {
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


    _dom__WEBPACK_IMPORTED_MODULE_1__.gridIcon.addEventListener('click', e => {
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
    e.currentTarget.parentNode.parentElement.childNodes[2].classList.toggle('onClickHideToDoDetails'); // Selects todoStatus
    e.currentTarget.parentNode.parentElement.childNodes[3].classList.toggle('onClickTodoDate'); // Selects todoDate


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
            _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.editDiv.style.display = 'grid';
            e.currentTarget.parentNode.parentElement.parentElement.append(_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.editDiv);


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
                const dateBtnIndianFormat = _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.dateBtnEdit.value.split('-').reverse().join('-');
                _dom__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = 'flex';
                _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.editDiv.style.display = 'none';
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].style.display = 'grid';  // selects details
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[1].textContent = `${_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.nameBtnEdit.value}`;
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].textContent = `${_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.descriptionBtnEdit.value}`;
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[2].textContent = `${dateBtnIndianFormat}`;
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[3].textContent = `${_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.statusBtnEdit.value}`;
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
    const dateBtnIndianFormat = _modalBar__WEBPACK_IMPORTED_MODULE_2__.dateBtn.value.split('-').reverse().join('-');
    const listItem = new TodoClass(_modalBar__WEBPACK_IMPORTED_MODULE_2__.nameBtn.value, _modalBar__WEBPACK_IMPORTED_MODULE_2__.descriptionBtn.value, dateBtnIndianFormat, _modalBar__WEBPACK_IMPORTED_MODULE_2__.statusBtn.value);
    obj.sike.unshift(listItem);
    todoSectionCreate();
}

function saveTodo() {
    _modalBar__WEBPACK_IMPORTED_MODULE_2__.saveBtn.addEventListener("click", () => {
        _dom__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = 'flex';
        _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.sectionFour.style.display = 'none';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLGFBQWEsT0FBTyxjQUFjLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVks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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnRTtBQUNoRTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VB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QUFDQTtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFLFlBQVksZ0VBQXFCO0FBQ2pDLDBFQUEwRSxrREFBTztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsa0VBQXVCO0FBQ25FLGdCQUFnQiwwREFBd0I7QUFDeEMsZ0JBQWdCLGdFQUFxQjtBQUNyQyxnSUFBZ0k7QUFDaEksb0pBQW9KLDREQUFpQixDQUFDO0FBQ3RLLHNJQUFzSSxtRUFBd0IsQ0FBQztBQUMvSixzSUFBc0ksb0JBQW9CO0FBQzFKLHNJQUFzSSw4REFBbUIsQ0FBQztBQUMxSjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVksS0FBSztBQUNyQixJQUFJLCtEQUFvQixNQUFNLGtCQUFrQjtBQUNoRCxJQUFJLHNFQUEyQixNQUFNLHdCQUF3QjtBQUM3RCxJQUFJLCtEQUFvQixNQUFNLGlCQUFpQjtBQUMvQyxJQUFJLGlFQUFzQixNQUFNLG1CQUFtQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDBEQUFtQjtBQUNuRCxtQ0FBbUMsb0RBQWEsRUFBRSwyREFBb0IsdUJBQXVCLHNEQUFlO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUF3QjtBQUM1QixRQUFRLDBEQUF3QjtBQUNoQyxRQUFRLG9FQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VhY2hUb2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGFsQmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2FkZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvZGVsZXRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltZy9lZGl0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltZy9saXN0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltZy9ncmlkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgLyogbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7ICovXFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IHJnYigxMjQsIDEwNSwgMjA5KTtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMSwgNTYsIDE1LCAwLjQ4Nik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMTIsIDIwMywgMC40ODYpO1xcclxcbiAgICBjb2xvcjogcmdiKDQ5LCAxODIsIDE4Mik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtPmRpdj5pbnB1dCB7XFxyXFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IDFzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9YnV0dG9uXSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcclxcbiAgICBjdXJzb3I6IHRleHRcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMjksIDI5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogNXB4IGRvdHRlZCByZ2IoMTAsIDUsIDUpO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjUwLCAyNDcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbk9uZSB7XFxyXFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCByZWQ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uVHdvIHtcXHJcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJnYigyMDQsIDAsIDI1NSk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25UaHJlZSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbkZvdXIge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi5kYXRlRGl2IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2F2ZUJ0bkRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zYXZlQnRuLFxcclxcbi5zYXZlQnRuRWRpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgNDIsIDQzKTtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYxLCAxNjEsIDE2MSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGF0dXNCdG4sXFxyXFxuLnN0YXR1c0J0bkVkaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRJdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaHVkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxOSwgMjE5KTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnNpa2Uge1xcclxcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NYWluIHtcXHJcXG4gICAgLyogZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDFzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMCwgMjMzLCAyMDQsIDAuNDA0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9OYW1lRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRUb2RvRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMSwgNTYsIDE1LCAwLjQ4Nik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMTIsIDIwMywgMC40ODYpO1xcclxcbiAgICBjb2xvcjogcmdiKDQ5LCAxODIsIDE4Mik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIC8qIG1hcmdpbi10b3A6IDVweDsgKi9cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kb0J0biB7XFxyXFxuICAgIGFsbDogdW5zZXQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1NpZ24ge1xcclxcbiAgICBoZWlnaHQ6IDE4cHg7XFxyXFxuICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig3MCwgNjgsIDY4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5hZGRUb2RvT25PZmYge1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgY2VudGVyL2NvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi50b2RvSWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweFxcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RlbGV0ZUJ0biB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0VkaXRCdG4ge1xcclxcbiAgICBhbGw6IHVuc2V0O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlU29ydCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0SWNvbiB7XFxyXFxuICAgIGFsbDogdW5zZXQ7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmlkSWNvbiB7XFxyXFxuICAgIGFsbDogdW5zZXQ7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvTWluaW1pemVCdG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmh1ZD5kaXYge1xcclxcbiAgICAvKiBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlYmVjY2FwdXJwbGU7ICovXFxyXFxufVxcclxcblxcclxcbi50b2RvU2lnbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzgsIDI0OCwgODYpO1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbi50b2RvTWFpbjpob3ZlciB7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA5LCAxMDksIDEwOCwgMC4yODEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpOyAqL1xcclxcbiAgICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXFxyXFxufVxcclxcblxcclxcbi8qIG9uQ2xpY2sgY2xhc3NMaXN0ICovXFxyXFxuXFxyXFxuXFxyXFxuLm9uQ2xpY2tIaWRlVG9Eb0RldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9EYXRlIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tTZWN0aW9uVGhyZWVTaHJpbmsge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tUb2RvTWFpblNocmluayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDE4OSwgMTg5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDE3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9EZXRhaWxzU2hyaW5rIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tGaWxsVG9kb1NpZ24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDg2KTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25TdHlsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MDQpO1xcclxcbiAgICBvcGFjaXR5OiAwLjI7XFxyXFxufVxcclxcblxcclxcbi5lZGl0RGl2IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtJQUFrSTtBQUN0STs7QUFFQTs7SUFFSTtrQkFDYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLDRDQUE0QztJQUM1Qyx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ks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dEI7O0FBRUE7SUFDSSwyREFBMkQ7QUFDL0Q7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIC8qIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAqL1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTI0LCAxMDUsIDIwOSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEsIDU2LCAxNSwgMC40ODYpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjEyLCAyMDMsIDAuNDg2KTtcXHJcXG4gICAgY29sb3I6IHJnYig0OSwgMTgyLCAxODIpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybT5kaXY+aW5wdXQge1xcclxcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdIHtcXHJcXG4gICAgY3Vyc29yOiB0ZXh0XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICAgIC8qIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjazsgKi9cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDI5LCAyOSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGFxdWFtYXJpbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDVweCBkb3R0ZWQgcmdiKDEwLCA1LCA1KTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI1MCwgMjQ3KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25PbmUge1xcclxcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgcmVkO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvblR3byB7XFxyXFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCByZ2IoMjA0LCAwLCAyNTUpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uVGhyZWUge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25Gb3VyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZGF0ZURpdiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNhdmVCdG5EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2F2ZUJ0bixcXHJcXG4uc2F2ZUJ0bkVkaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDQyLCA0Myk7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2MSwgMTYxLCAxNjEpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHVzQnRuLFxcclxcbi5zdGF0dXNCdG5FZGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkSXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1eDtcXHJcXG59XFxyXFxuXFxyXFxuLmh1ZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTksIDIxOSk7ICovXFxyXFxufVxcclxcblxcclxcbi5zaWtlIHtcXHJcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvTWFpbiB7XFxyXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDIzMywgMjA0LCAwLjQwNCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvTmFtZURpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kb0RpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEsIDU2LCAxNSwgMC40ODYpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjEyLCAyMDMsIDAuNDg2KTtcXHJcXG4gICAgY29sb3I6IHJnYig0OSwgMTgyLCAxODIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICAvKiBtYXJnaW4tdG9wOiA1cHg7ICovXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG9CdG4ge1xcclxcbiAgICBhbGw6IHVuc2V0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9TaWduIHtcXHJcXG4gICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICB3aWR0aDogMThweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNzAsIDY4LCA2OCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kb09uT2ZmIHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy9hZGQucG5nJykgY2VudGVyL2NvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi50b2RvSWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweFxcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RlbGV0ZUJ0biB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy9kZWxldGUucG5nJykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvRWRpdEJ0biB7XFxyXFxuICAgIGFsbDogdW5zZXQ7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy9lZGl0LnBuZycpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VTb3J0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RJY29uIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvbGlzdC5zdmcnKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRJY29uIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvZ3JpZC5zdmcnKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NaW5pbWl6ZUJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVkPmRpdiB7XFxyXFxuICAgIC8qIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmViZWNjYXB1cnBsZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9TaWduOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OCwgMjQ4LCA4Nik7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NYWluOmhvdmVyIHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDksIDEwOSwgMTA4LCAwLjI4MSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7ICovXFxyXFxuICAgIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogb25DbGljayBjbGFzc0xpc3QgKi9cXHJcXG5cXHJcXG5cXHJcXG4ub25DbGlja0hpZGVUb0RvRGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5vbkNsaWNrVG9kb0RhdGUge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1NlY3Rpb25UaHJlZVNocmluayB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9NYWluU2hyaW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMTg5LCAxODkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTc1cHg7XFxyXFxufVxcclxcblxcclxcbi5vbkNsaWNrVG9kb0RldGFpbHNTaHJpbmsge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja0ZpbGxUb2RvU2lnbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40ODYpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnblN0eWxlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQwNCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXREaXYge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qgc2VjdGlvbk9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uT25lJyk7XHJcbmNvbnN0IHRpdGxlVGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbmNvbnN0IGRlc2NyaXB0aW9uVGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuY29uc3QgYWRkVG9kb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUb2RvRGl2Jyk7XHJcbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVG9kb0J0bicpO1xyXG5jb25zdCBncmlkSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkSWNvbicpO1xyXG5jb25zdCBsaXN0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0SWNvbicpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9Cb2R5QXBwZW5kKCkge1xyXG4gICAgdGl0bGVUZXN0LnRleHRDb250ZW50ID0gJ0hlYWRpbmcnO1xyXG4gICAgdGl0bGVUZXN0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcblxyXG4gICAgZGVzY3JpcHRpb25UZXN0LnRleHRDb250ZW50ID0gJ1NvbWUgRGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY3JpcHRpb25UZXN0LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgc2VjdGlvbk9uZS5hcHBlbmQodGl0bGVUZXN0LCBkZXNjcmlwdGlvblRlc3QpO1xyXG59XHJcblxyXG5leHBvcnQgeyB0aXRsZVRlc3QsIGFkZFRvZG9EaXYsIGFkZFRvZG9CdG4sIGdyaWRJY29uLCBsaXN0SWNvbiB9XHJcblxyXG5cclxuIiwibGV0IHRvZG9NYWluO1xyXG5sZXQgdG9kb0RldGFpbHM7XHJcbmxldCB0b2RvTmFtZURpdjtcclxubGV0IHRvZG9TaWduO1xyXG5sZXQgdG9kb05hbWU7XHJcbmxldCB0b2RvRGVzY3JpcHRpb247XHJcbmxldCB0b2RvU3RhdHVzO1xyXG5sZXQgdG9kb0RhdGU7XHJcbmxldCB0b2RvSWNvbjtcclxubGV0IHRvZG9EZWxldGVCdG47XHJcbmxldCB0b2RvTWluaW1pemVCdG47XHJcbmxldCB0b2RvRWRpdEJ0bjtcclxuY29uc3QgaHVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1ZCcpO1xyXG5jb25zdCBhZGRUb2RvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRvZG9EaXYnKTtcclxuY29uc3Qgc2VjdGlvblR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uVHdvJyk7XHJcbmNvbnN0IHNlY3Rpb25UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBzZWN0aW9uRm91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uRm91cicpO1xyXG5jb25zdCBzaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpa2UnKTtcclxuY29uc3QgbmFtZUJ0bkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUJ0bkVkaXQnKTtcclxuY29uc3QgZGVzY3JpcHRpb25CdG5FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uQnRuRWRpdCcpO1xyXG5jb25zdCBkYXRlQnRuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlQnRuRWRpdCcpO1xyXG5jb25zdCBzdGF0dXNCdG5FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1c0J0bkVkaXQnKTtcclxuY29uc3QgZWRpdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0RGl2Jyk7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3U2VjdGlvblRocmVlKCkge1xyXG4gICAgdG9kb01pbmltaXplQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0b2RvTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9OYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblxyXG4gICAgdG9kb01pbmltaXplQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG9NaW5pbWl6ZUJ0bicpO1xyXG4gICAgdG9kb01pbmltaXplQnRuLnRleHRDb250ZW50ID0gJ01pbmltaXplJztcclxuICAgIHNlY3Rpb25UaHJlZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uVGhyZWUnKTtcclxuICAgIHRvZG9NYWluLmNsYXNzTGlzdC5hZGQoJ3RvZG9NYWluJyk7XHJcbiAgICB0b2RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCd0b2RvRGV0YWlscycpO1xyXG4gICAgdG9kb05hbWVEaXYuY2xhc3NMaXN0LmFkZCgndG9kb05hbWVEaXYnKTtcclxuICAgIHRvZG9TaWduLmNsYXNzTGlzdC5hZGQoJ3RvZG9TaWduJyk7XHJcbiAgICB0b2RvTmFtZS5jbGFzc0xpc3QuYWRkKCd0b2RvTmFtZScpO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXNjcmlwdGlvbicpO1xyXG4gICAgdG9kb1N0YXR1cy5jbGFzc0xpc3QuYWRkKCd0b2RvU3RhdHVzJyk7XHJcbiAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0ZScpO1xyXG4gICAgdG9kb0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvRGVsZXRlQnRuJyk7XHJcblxyXG4gICAgdG9kb0RlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgdG9kb0RldGFpbHMuYXBwZW5kKHRvZG9TaWduLCB0b2RvTmFtZURpdiwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvU3RhdHVzLCB0b2RvRGF0ZSwgdG9kb0RlbGV0ZUJ0biwgdG9kb01pbmltaXplQnRuKTtcclxuICAgIHRvZG9OYW1lRGl2LmFwcGVuZCh0b2RvU2lnbiwgdG9kb05hbWUpO1xyXG4gICAgdG9kb01haW4uYXBwZW5kKHRvZG9EZXRhaWxzKTtcclxuICAgIHNlY3Rpb25UaHJlZS5hcHBlbmQodG9kb01haW4pO1xyXG4gICAgaHVkLmFmdGVyKHNlY3Rpb25UaHJlZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9VSUNyZWF0ZSgpIHtcclxuICAgIHRvZG9NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9TaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9NaW5pbWl6ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdG9kb0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICBzZWN0aW9uVGhyZWUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvblRocmVlJyk7XHJcbiAgICB0b2RvTWFpbi5jbGFzc0xpc3QuYWRkKCd0b2RvTWFpbicpO1xyXG4gICAgdG9kb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgndG9kb0RldGFpbHMnKTtcclxuICAgIHRvZG9OYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9OYW1lRGl2Jyk7XHJcbiAgICB0b2RvU2lnbi5jbGFzc0xpc3QuYWRkKCd0b2RvU2lnbicpO1xyXG4gICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZCgndG9kb05hbWUnKTtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvRGVzY3JpcHRpb24nKTtcclxuICAgIHRvZG9TdGF0dXMuY2xhc3NMaXN0LmFkZCgndG9kb1N0YXR1cycpO1xyXG4gICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZCgndG9kb0RhdGUnKTtcclxuICAgIHRvZG9JY29uLmNsYXNzTGlzdC5hZGQoJ3RvZG9JY29uJyk7XHJcbiAgICB0b2RvRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZWxldGVCdG4nKTtcclxuICAgIHRvZG9NaW5pbWl6ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvTWluaW1pemVCdG4nKTtcclxuICAgIHRvZG9NaW5pbWl6ZUJ0bi50ZXh0Q29udGVudCA9ICdNaW5pbWl6ZSc7XHJcbiAgICB0b2RvRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdEJ0bicpO1xyXG4gICAgLy8gdG9kb0VkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XHJcblxyXG4gICAgdG9kb0RlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgdG9kb0RldGFpbHMuYXBwZW5kKHRvZG9TaWduLCB0b2RvTmFtZURpdiwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRGF0ZSwgdG9kb1N0YXR1cywgdG9kb0ljb24pO1xyXG4gICAgdG9kb05hbWVEaXYuYXBwZW5kKHRvZG9TaWduLCB0b2RvTmFtZSk7XHJcbiAgICB0b2RvSWNvbi5hcHBlbmQodG9kb0RlbGV0ZUJ0biwgdG9kb0VkaXRCdG4sIHRvZG9NaW5pbWl6ZUJ0bik7XHJcbiAgICB0b2RvTWFpbi5hcHBlbmQodG9kb0RldGFpbHMpO1xyXG4gICAgc2lrZS5hcHBlbmQoc2VjdGlvblRocmVlKTtcclxuICAgIHNlY3Rpb25UaHJlZS5wcmVwZW5kKHNlY3Rpb25Gb3VyKTtcclxuICAgIHNlY3Rpb25UaHJlZS5wcmVwZW5kKGFkZFRvZG9EaXYpO1xyXG4gICAgc2VjdGlvblRocmVlLnByZXBlbmQoZWRpdERpdilcclxuICAgIHNlY3Rpb25UaHJlZS5hcHBlbmQodG9kb01haW4pO1xyXG59XHJcbi8vIHRvZG9NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgY3JlYXRlTmV3U2VjdGlvblRocmVlLCBzZWN0aW9uVGhyZWUsIHNlY3Rpb25Gb3VyLFxyXG4gICAgdG9kb01haW4sIHRvZG9EZXRhaWxzLCB0b2RvU2lnbiwgdG9kb05hbWUsIHRvZG9EZXNjcmlwdGlvbixcclxuICAgIHRvZG9TdGF0dXMsIHRvZG9EYXRlLCB0b2RvRGVsZXRlQnRuLCB0b2RvTWluaW1pemVCdG4sIHRvZG9JY29uLCB0b2RvRWRpdEJ0bixcclxuICAgIGVkaXREaXYsIG5hbWVCdG5FZGl0LCBkZXNjcmlwdGlvbkJ0bkVkaXQsIGRhdGVCdG5FZGl0LCBzdGF0dXNCdG5FZGl0XHJcbn07IiwiXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbmNvbnN0IG5hbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUJ0bicpO1xyXG5jb25zdCBkZXNjcmlwdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbkJ0bicpO1xyXG5jb25zdCBkYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVCdG4nKTtcclxuY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlQnRuJyk7XHJcbmNvbnN0IHNlbGVjdGVkU3RhdHVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGVkU3RhdHVzQnRuJyk7XHJcbmNvbnN0IHN0YXR1c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXNCdG4nKTtcclxuXHJcblxyXG5leHBvcnQgeyBtb2RhbCwgbmFtZUJ0biwgZGVzY3JpcHRpb25CdG4sIGRhdGVCdG4sIHN0YXR1c0J0biwgc2F2ZUJ0biwgc2VsZWN0ZWRTdGF0dXNCdG4gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGFkZFRvZG9CdG4sIGFkZFRvZG9EaXYsIGdyaWRJY29uLCBsaXN0SWNvbiB9IGZyb20gJy4vZG9tJztcclxuaW1wb3J0IHsgbW9kYWwsIG5hbWVCdG4sIHNhdmVCdG4sIGRlc2NyaXB0aW9uQnRuLCBkYXRlQnRuLCBzZWxlY3RlZFN0YXR1c0J0biwgc3RhdHVzQnRuIH0gZnJvbSAnLi9tb2RhbEJhcidcclxuaW1wb3J0IHRvZG9VSUNyZWF0ZSwge1xyXG4gICAgY3JlYXRlTmV3U2VjdGlvblRocmVlLCBzZWN0aW9uVGhyZWUsIHNlY3Rpb25Gb3VyLCB0b2RvTWFpbiwgdG9kb0RldGFpbHMsIHRvZG9TaWduLCB0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLFxyXG4gICAgdG9kb1N0YXR1cywgdG9kb0RhdGUsIHRvZG9EZWxldGVCdG4sIHRvZG9NaW5pbWl6ZUJ0biwgdG9kb0VkaXRCdG4sXHJcbiAgICBlZGl0RGl2LCBuYW1lQnRuRWRpdCwgZGVzY3JpcHRpb25CdG5FZGl0LCBkYXRlQnRuRWRpdCwgc3RhdHVzQnRuRWRpdFxyXG59IGZyb20gJy4vZWFjaFRvZG9JdGVtJztcclxuXHJcblxyXG4vLyBjb25zdCBuYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWVCdG4nKTtcclxuY29uc3Qgb2JqID0ge1xyXG4gICAgc2lrZTogW10sXHJcbiAgICBjdXJyZW50U3RhdHVzOiAnJyxcclxufVxyXG5cclxuY2xhc3MgVG9kb0NsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgc3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEl0ZW1CdG4oKSB7XHJcbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkVG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHNlY3Rpb25Gb3VyLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgICAgLy8gc2VsZWN0ZWRTdGF0dXMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyB0b2RvRnVuY3Rpb25hbGl0eSAhLVxyXG5cclxuXHJcbmxldCBpc1RvZG9MaXN0T3JHcmlkU3R5bGU7XHJcblxyXG5mdW5jdGlvbiBzb3J0VG9kb0xpc3RPckdyaWRTdHlsZSgpIHsgLy8gQ2hlY2sgZm9yIEV2ZW50TGlzdGVuZXIgYW5kIGNyZWF0ZSBzb3J0aW5nIG9yZGVyIFtncmlkIG9yIGxpc3RdXHJcbiAgICBsaXN0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGlzVG9kb0xpc3RPckdyaWRTdHlsZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHRvZG9NYWluQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9NYWluJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0RldGFpbHNBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0RldGFpbHMnKTtcclxuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb25BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb1N0YXR1c0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvU3RhdHVzJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0RhdGVBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0RhdGUnKTtcclxuICAgICAgICBjb25zdCB0b2RvRGVsZXRlQnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9EZWxldGVCdG4nKTtcclxuICAgICAgICBjb25zdCB0b2RvRWRpdEJ0bkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRWRpdEJ0bicpO1xyXG5cclxuICAgICAgICB0b2RvTWFpbkFsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnb25DbGlja1RvZG9NYWluU2hyaW5rJyk7XHJcbiAgICAgICAgICAgIGlmICghaXRlbXMuY2xhc3NMaXN0LmNvbnRhaW5zKGBvbkNsaWNrVG9kb01haW5TaHJpbmtgKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb01pbmltaXplQnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9NaW5pbWl6ZUJ0bicpO1xyXG4gICAgICAgICAgICAgICAgdG9kb01pbmltaXplQnRuQWxsLmZvckVhY2goYnRucyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRucy50ZXh0Q29udGVudCA9ICdNaW5pbWl6ZSc7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0b2RvRGV0YWlsc0FsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnb25DbGlja1RvZG9EZXRhaWxzU2hyaW5rJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0b2RvRGVzY3JpcHRpb25BbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9TdGF0dXNBbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9EYXRlQWxsLmZvckVhY2goaXRlbXMgPT4ge1xyXG4gICAgICAgICAgICBpdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdvbkNsaWNrVG9kb0RhdGUnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9EZWxldGVCdG5BbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9FZGl0QnRuQWxsLmZvckVhY2goaXRlbXMgPT4ge1xyXG4gICAgICAgICAgICBpdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdvbkNsaWNrSGlkZVRvRG9EZXRhaWxzJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGdyaWRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgaXNUb2RvTGlzdE9yR3JpZFN0eWxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb01haW5BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb01haW4nKTtcclxuICAgICAgICBjb25zdCB0b2RvRGV0YWlsc0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRGV0YWlscycpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRGVzY3JpcHRpb24nKTtcclxuICAgICAgICBjb25zdCB0b2RvU3RhdHVzQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9TdGF0dXMnKTtcclxuICAgICAgICBjb25zdCB0b2RvRGF0ZUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRGF0ZScpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9EZWxldGVCdG5BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0RlbGV0ZUJ0bicpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9FZGl0QnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9FZGl0QnRuJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdG9kb01haW5BbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoJ29uQ2xpY2tUb2RvTWFpblNocmluaycpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbXMuY2xhc3NMaXN0LmNvbnRhaW5zKGBvbkNsaWNrVG9kb01haW5TaHJpbmtgKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb01pbmltaXplQnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9NaW5pbWl6ZUJ0bicpO1xyXG4gICAgICAgICAgICAgICAgdG9kb01pbmltaXplQnRuQWxsLmZvckVhY2goYnRucyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoJ2NvbnRhaW5zJylcclxuICAgICAgICAgICAgICAgICAgICBidG5zLnRleHRDb250ZW50ID0gJ01heGltaXplJztcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9EZXRhaWxzQWxsLmZvckVhY2goaXRlbXMgPT4ge1xyXG4gICAgICAgICAgICBpdGVtcy5jbGFzc0xpc3QuYWRkKCdvbkNsaWNrVG9kb0RldGFpbHNTaHJpbmsnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbkFsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LmFkZCgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb1N0YXR1c0FsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LmFkZCgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb0RhdGVBbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoJ29uQ2xpY2tUb2RvRGF0ZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb0RlbGV0ZUJ0bkFsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LmFkZCgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb0VkaXRCdG5BbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsaWNrVG9kb0xpc3RPckdyaWRTdHlsZSgpIHsgIC8vIGNoZWNrIGlmIHRoZSB1c2VyIHdhcyBjbGlja2VkIHRoZSBzb3J0aW5nIG9yZGVyIFtncmlkIG9yIGxpc3RdIGFuZCBjcmVhdGUgdGhlIG5ldyBUb2RvIHdpdGggdGhlIHNhbWUgc3R5bGUgZm9ybWF0IFxyXG4gICAgaWYgKGlzVG9kb0xpc3RPckdyaWRTdHlsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRvZG9NaW5pbWl6ZUJ0bi50ZXh0Q29udGVudCA9ICdNYXhpbWl6ZSdcclxuICAgICAgICB0b2RvTWFpbi5jbGFzc0xpc3QuYWRkKCdvbkNsaWNrVG9kb01haW5TaHJpbmsnKTtcclxuICAgICAgICB0b2RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdvbkNsaWNrVG9kb0RldGFpbHNTaHJpbmsnKTtcclxuICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIHRvZG9TdGF0dXMuY2xhc3NMaXN0LmFkZCgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIHRvZG9EYXRlLmNsYXNzTGlzdC5hZGQoJ29uQ2xpY2tUb2RvRGF0ZScpO1xyXG4gICAgICAgIHRvZG9EZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIHRvZG9FZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWluaW1pemVUb2RvRGV0YWlsc0ZuYyhlKSB7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgb25DbGlja1RvZG9NYWluU2hyaW5rYCk7IC8vIFNlbGVjdHMgdG9kb01haW5cclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb25DbGlja1RvZG9EZXRhaWxzU2hyaW5rJyk7IC8vIFNlbGVjdHMgdG9kb0RldGFpbHNcclxuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnRvZ2dsZSgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpOyAvLyBTZWxlY3RzIHRvZG9EZXNjcmlwdGlvblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzJdLmNsYXNzTGlzdC50b2dnbGUoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTsgLy8gU2VsZWN0cyB0b2RvU3RhdHVzXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbM10uY2xhc3NMaXN0LnRvZ2dsZSgnb25DbGlja1RvZG9EYXRlJyk7IC8vIFNlbGVjdHMgdG9kb0RhdGVcclxuXHJcblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QudG9nZ2xlKCdvbkNsaWNrSGlkZVRvRG9EZXRhaWxzJyk7IC8vIFNlbGVjdHMgZGVsZXRlQnRuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC50b2dnbGUoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTsgLy8gU2VsZWN0cyBlZGl0QnRuXHJcbiAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50KTtcclxuXHJcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgb25DbGlja1RvZG9NYWluU2hyaW5rYCkpIHtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50ID0gJ01heGltaXplJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSAnTWluaW1pemUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtaW5pbWl6ZVRvZG9EZXRhaWxzKCkge1xyXG4gICAgdG9kb01pbmltaXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtaW5pbWl6ZVRvZG9EZXRhaWxzRm5jKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbFNpZ25Ub2RvRm5jKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ29uQ2xpY2tGaWxsVG9kb1NpZ24nKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaWduU3R5bGUnKSk7IC8vIHNlbGVjdHMgbWFpblxyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsU2lnblRvZG8oKSB7XHJcbiAgICBjb25zdCB0b2RvU2lnbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAudG9kb1NpZ25gKTtcclxuICAgIHRvZG9TaWducy5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICBpdGVtcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlsbFNpZ25Ub2RvRm5jKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVG9kbygpIHtcclxuICAgIHRvZG9EZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpOyAvLyBzZWxlY3QgdG9kb01haW4gYW5kIHJlbW92ZVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudClcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyB0b2RvRnVuY3Rpb25hbGl0eSAtIVxyXG4vLyBjb25zdCB0b2RvTWFpbkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvTWFpbicpO1xyXG4vLyB0b2RvTWFpbkFsbC5mb3JFYWNoKGFsbCA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhhbGwpXHJcbi8vIH0pXHJcbmZ1bmN0aW9uIGVkaXQoKSB7XHJcbiAgICBjb25zdCB0b2RvRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRWRpdEJ0bicpO1xyXG4gICAgdG9kb0VkaXQuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAvLyBzZWxlY3RzIGRldGFpbHMgd2l0aCByZXNwZWN0IHRvIGVkaXRCdG5cclxuICAgICAgICAgICAgZWRpdERpdi5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kKGVkaXREaXYpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgLy8gICAgIGV2dCA9IGV2dCB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZXZ0LmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBlZGl0RGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGV2dC5jdXJyZW50VGFyZ2V0KVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJzsgIC8vIHNlbGVjdHMgZGV0YWlscyB3aXRoIHJlc3BlY3QgdG8gZWRpdEJ0blxyXG5cclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbOV0uY2hpbGROb2Rlc1sxXVxyXG4gICAgICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZUJ0bkluZGlhbkZvcm1hdCA9IGRhdGVCdG5FZGl0LnZhbHVlLnNwbGl0KCctJykucmV2ZXJzZSgpLmpvaW4oJy0nKTtcclxuICAgICAgICAgICAgICAgIGFkZFRvZG9EaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgICAgIGVkaXREaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7ICAvLyBzZWxlY3RzIGRldGFpbHNcclxuICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9IGAke25hbWVCdG5FZGl0LnZhbHVlfWA7XHJcbiAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gYCR7ZGVzY3JpcHRpb25CdG5FZGl0LnZhbHVlfWA7XHJcbiAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50ID0gYCR7ZGF0ZUJ0bkluZGlhbkZvcm1hdH1gO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1szXS50ZXh0Q29udGVudCA9IGAke3N0YXR1c0J0bkVkaXQudmFsdWV9YDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbM10pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2RvU2VjdGlvbkNyZWF0ZSgpIHtcclxuICAgIHRvZG9VSUNyZWF0ZSgpOyAgLy8gZnJvbSBlYWNoVG9kb0l0ZW0uanNcclxuICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gYCR7b2JqLnNpa2VbMF0udGl0bGV9YDtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke29iai5zaWtlWzBdLmRlc2NyaXB0aW9ufWA7XHJcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGAke29iai5zaWtlWzBdLmRhdGV9YDtcclxuICAgIHRvZG9TdGF0dXMudGV4dENvbnRlbnQgPSBgJHtvYmouc2lrZVswXS5zdGF0dXN9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlZGVmaW5lZFRvZG9JbnB1dCgpIHtcclxuICAgIGNvbnN0IGxpc3RJdGVtVHdvID0gbmV3IFRvZG9DbGFzcygnTWVzc2knLCAnR09BVCcsICcyLTExLTE5OTAnLCAnSGlnaCcpO1xyXG4gICAgb2JqLnNpa2UucHVzaChsaXN0SXRlbVR3byk7XHJcbiAgICB0b2RvU2VjdGlvbkNyZWF0ZSgpO1xyXG4gICAgLy8gdG9kbyBGdW5jdGlvbmFsaXR5ICEtXHJcbiAgICBtaW5pbWl6ZVRvZG9EZXRhaWxzKCk7XHJcbiAgICBmaWxsU2lnblRvZG8oKTtcclxuICAgIHJlbW92ZVRvZG8oKTtcclxuICAgIGVkaXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlckNyZWF0ZVRvZG9JbnB1dCgpIHtcclxuICAgIGNvbnN0IGRhdGVCdG5JbmRpYW5Gb3JtYXQgPSBkYXRlQnRuLnZhbHVlLnNwbGl0KCctJykucmV2ZXJzZSgpLmpvaW4oJy0nKTtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gbmV3IFRvZG9DbGFzcyhuYW1lQnRuLnZhbHVlLCBkZXNjcmlwdGlvbkJ0bi52YWx1ZSwgZGF0ZUJ0bkluZGlhbkZvcm1hdCwgc3RhdHVzQnRuLnZhbHVlKTtcclxuICAgIG9iai5zaWtlLnVuc2hpZnQobGlzdEl0ZW0pO1xyXG4gICAgdG9kb1NlY3Rpb25DcmVhdGUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVRvZG8oKSB7XHJcbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkVG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIHNlY3Rpb25Gb3VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdXNlckNyZWF0ZVRvZG9JbnB1dCgpO1xyXG4gICAgICAgIG1pbmltaXplVG9kb0RldGFpbHMoKTtcclxuICAgICAgICBmaWxsU2lnblRvZG8oKTtcclxuICAgICAgICByZW1vdmVUb2RvKCk7XHJcbiAgICAgICAgY2xpY2tUb2RvTGlzdE9yR3JpZFN0eWxlKCk7XHJcbiAgICAgICAgZWRpdCgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbnByZWRlZmluZWRUb2RvSW5wdXQoKTtcclxuYWRkSXRlbUJ0bigpO1xyXG5zYXZlVG9kbygpO1xyXG5zb3J0VG9kb0xpc3RPckdyaWRTdHlsZSgpO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=