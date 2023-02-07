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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/delete.svg */ "./img/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/edit.svg */ "./img/edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/list.png */ "./img/list.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/grid.png */ "./img/grid.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/add1.png */ "./img/add1.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Itim&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --background-color: #141414;\r\n    --button-color: rgb(42, 42, 43);\r\n    --transition-time: 0.5s;\r\n    --animation-details: confirmationAnimation 0.3s ease-in-out;\r\n    --font-name: 'Itim', cursive;\r\n    --font-color: aliceblue;\r\n}\r\n\r\nbody {\r\n    /* font-family: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; */\r\n    font-family: var(--font-name);\r\n}\r\n\r\nhtml,\r\nbody {\r\n    font-family: var(--font-name);\r\n    margin: 0px;\r\n    color: #1f271b;\r\n}\r\n\r\nbutton {\r\n    font-family: var(--font-name);\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n    color: rgb(49, 182, 182);\r\n    font-size: 3rem;\r\n    text-align: center;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    background-color: rgba(177, 176, 176, 0.452);\r\n    font-family: var(--font-name);\r\n}\r\n\r\nform>div>input {\r\n    border: none;\r\n    font-size: 1rem;\r\n    background: none;\r\n    outline: none;\r\n    transition: var(--transition-time);\r\n    display: flex;\r\n    flex-grow: 1;\r\n    font-family: var(--font-name);\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    font-weight: bold;\r\n}\r\n\r\ninput[type=button] {\r\n    border-radius: 10px;\r\n    font-size: large;\r\n    font-family: var(--font-name);\r\n}\r\n\r\ninput[type=date] {\r\n    cursor: text;\r\n    font-family: var(--font-name);\r\n}\r\n\r\nselect {\r\n    cursor: text;\r\n    font-family: var(--font-name);\r\n    transition: var(--transition-time);\r\n}\r\n\r\n::placeholder {\r\n    color: var(--button-color);\r\n    opacity: 0.5;\r\n    font-family: var(--font-name);\r\n}\r\n\r\n.modal {\r\n    background-color: var(--background-color);\r\n    border-radius: 10px;\r\n    border: 2px solid aquamarine;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n    min-height: 100vh;\r\n    background-color: black;\r\n}\r\n\r\n.sectionOne {\r\n    margin: 5px;\r\n    border-radius: 10px;\r\n    background-color: var(--background-color);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 2px solid #b8b8aa;\r\n}\r\n\r\n.sectionTwo {\r\n    margin: 5px;\r\n    border-radius: 5px;\r\n    border: 2px solid #b8b8aa;\r\n    background-color: var(--background-color);\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n}\r\n\r\n.sectionThree {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    display: grid;\r\n    font-size: 1.2rem;\r\n    gap: 10px;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.arrangeStyle {\r\n    min-height: 100vh;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    border-radius: 10px;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.addTodoConfirmation {\r\n    font-size: 1.2rem;\r\n    gap: 5px;\r\n    display: none;\r\n    animation: var(--animation-details);\r\n}\r\n\r\n.dateDiv {\r\n    text-align: center;\r\n}\r\n\r\n.saveBtnDiv {\r\n    display: flex;\r\n    flex: 1;\r\n}\r\n\r\n.saveBtn,\r\n.saveBtnEdit {\r\n    background-color: var(--button-color);\r\n    color: var(--font-color);\r\n    cursor: pointer;\r\n    border: 1px solid rgb(161, 161, 161);\r\n    border-radius: 10px;\r\n    display: flex;\r\n    flex: 1;\r\n    justify-content: center;\r\n    padding: 6px;\r\n    transition: var(--transition-time);\r\n}\r\n\r\n.cancelBtn,\r\n.cancelBtnEdit {\r\n    background-color: rgb(243, 106, 96);\r\n    color: var(--font-color);\r\n    cursor: pointer;\r\n    border: 1px solid rgb(161, 161, 161);\r\n    display: flex;\r\n    flex: 1;\r\n    justify-content: center;\r\n    padding: 6px;\r\n}\r\n\r\n.statusBtn,\r\n.statusBtnEdit {\r\n    background-color: var(--button-color);\r\n    color: var(--font-color);\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n.addItem {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    border-radius: 10px;\r\n    padding: 0px;\r\n    padding-left: 10px;\r\n    align-items: center;\r\n    gap: 5x;\r\n}\r\n\r\n.hud {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 5px;\r\n    border-radius: 10px;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    margin: 10px;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n}\r\n\r\n.todoMain {\r\n    border-radius: 10px;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    background-color: rgba(200, 212, 203, 0.486);\r\n    color: var(--background-color);\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.521);\r\n    transition: var(--transition-time);\r\n\r\n}\r\n\r\n.todoDetails {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    border-radius: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.todoNameDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\n.addTodoDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    background-color: var(--background-color);\r\n    color: rgb(49, 182, 182);\r\n    border-radius: 10px;\r\n    padding-left: 5px;\r\n    gap: 10px;\r\n    cursor: pointer;\r\n    transition: var(--transition-time);\r\n}\r\n\r\n.addTodoOnOff {\r\n    height: 20px;\r\n    width: 20px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    transition: var(--transition-time);\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center/contain;\r\n}\r\n\r\n.addTodoBtn {\r\n    all: unset;\r\n    display: flex;\r\n    font-size: 1.2rem;\r\n    flex-grow: 1;\r\n    font-weight: bold;\r\n}\r\n\r\n.todoSign {\r\n    height: 18px;\r\n    width: 18px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    border: 1px solid rgb(70, 68, 68);\r\n    border-radius: 50%;\r\n    background-color: var(--font-color);\r\n    transition: var(--transition-time);\r\n}\r\n\r\n.todoIcon {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.todoDeleteBtn {\r\n    all: unset;\r\n    width: 30px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center/contain no-repeat;\r\n    cursor: pointer;\r\n    transition: var(--transition-time);\r\n}\r\n\r\n.todoEditBtn {\r\n    all: unset;\r\n    width: 20px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") center/contain no-repeat;\r\n    cursor: pointer;\r\n    transition: var(--transition-time);\r\n}\r\n\r\n.imageSort {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.listIcon {\r\n    all: unset;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") center/contain no-repeat;\r\n    cursor: pointer;\r\n    transition: var(--transition-time);\r\n}\r\n\r\n.gridIcon {\r\n    all: unset;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") center/contain no-repeat;\r\n    cursor: pointer;\r\n    transition: var(--transition-time);\r\n}\r\n\r\n.todoMinimizeBtn {\r\n    background-color: var(--button-color);\r\n    border-radius: 10px;\r\n    color: var(--font-color);\r\n    cursor: pointer;\r\n    text-align: center;\r\n    transition: var(--transition-time);\r\n}\r\n\r\n/* onClick classList */\r\n.onClickHideToDoDetails {\r\n    display: none;\r\n}\r\n\r\n.onClickTodoDate {\r\n    justify-content: end;\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\n.onClickSectionThreeShrink {\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n}\r\n\r\n.onClickTodoMainShrink {\r\n    background-color: rgb(223, 189, 189);\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    width: 205px;\r\n    animation: var(--animation-details);\r\n}\r\n\r\n.onClickTodoDetailsShrink {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.onClickFillTodoSign {\r\n    background-color: var(--button-color);\r\n    border-color: white;\r\n}\r\n\r\n.onClickDefaultTodoSign {\r\n    border: 1px solid rgb(70, 68, 68);\r\n    background-color: var(--font-color);\r\n}\r\n\r\n.signStyle {\r\n    background-color: rgba(0, 0, 0, 0.404);\r\n    opacity: 0.2;\r\n}\r\n\r\n.editTodo {\r\n    display: none;\r\n}\r\n\r\n.onClickEditTodoMainStyle {\r\n    background-color: var(--font-color);\r\n    border: none;\r\n    box-shadow: none;\r\n}\r\n\r\n/* hover Section */\r\n\r\ninput[type=text]:focus {\r\n    border-radius: 0px;\r\n    font-family: var(--font-name);\r\n    color: var(--font-color);\r\n}\r\n\r\ninput[type=button]:hover {\r\n    transform: scale(0.8);\r\n}\r\n\r\nselect:hover {\r\n    transform: scale(0.9);\r\n}\r\n\r\n.addTodoDiv:hover {\r\n    background-color: var(--font-color);\r\n    color: rgb(202, 165, 0);\r\n    background-image: linear-gradient(to right, rgb(252, 252, 252), rgb(250, 237, 167));\r\n    border: 2px solid rgb(230, 230, 230);\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.todoSign:hover {\r\n    background-color: rgb(178, 248, 86);\r\n    opacity: 0.7;\r\n}\r\n\r\n.saveBtn:hover,\r\n.saveBtnEdit:hover {\r\n    transform: scale(0.8);\r\n}\r\n\r\n/* work only when onClickEditTodoMainStyle is not there  */\r\n.todoMain:hover:not(.onClickEditTodoMainStyle) {\r\n    transform: scale(0.98);\r\n    border: none;\r\n    background-color: rgba(134, 168, 143, 0.486);\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.listIcon:hover,\r\n.gridIcon:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.addTodoDiv:hover>div {\r\n    height: 20px;\r\n    width: 20px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") center/contain;\r\n}\r\n\r\n.todoDeleteBtn:hover,\r\n.todoEditBtn:hover {\r\n    transform: scale(1.2);\r\n    background-color: var(--font-color);\r\n    border-radius: 5px;\r\n}\r\n\r\n.todoMinimizeBtn:hover {\r\n    background-color: var(--font-color);\r\n    color: black;\r\n}\r\n\r\n@keyframes confirmationAnimation {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');\r\n\r\n:root {\r\n    --background-color: #141414;\r\n    --button-color: rgb(42, 42, 43);\r\n    --transition-time: 0.5s;\r\n    --animation-details: confirmationAnimation 0.3s ease-in-out;\r\n    --font-name: 'Itim', cursive;\r\n    --font-color: aliceblue;\r\n}\r\n\r\nbody {\r\n    /* font-family: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; */\r\n    font-family: var(--font-name);\r\n}\r\n\r\nhtml,\r\nbody {\r\n    font-family: var(--font-name);\r\n    margin: 0px;\r\n    color: #1f271b;\r\n}\r\n\r\nbutton {\r\n    font-family: var(--font-name);\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n    color: rgb(49, 182, 182);\r\n    font-size: 3rem;\r\n    text-align: center;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    background-color: rgba(177, 176, 176, 0.452);\r\n    font-family: var(--font-name);\r\n}\r\n\r\nform>div>input {\r\n    border: none;\r\n    font-size: 1rem;\r\n    background: none;\r\n    outline: none;\r\n    transition: var(--transition-time);\r\n    display: flex;\r\n    flex-grow: 1;\r\n    font-family: var(--font-name);\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    font-weight: bold;\r\n}\r\n\r\ninput[type=button] {\r\n    border-radius: 10px;\r\n    font-size: large;\r\n    font-family: var(--font-name);\r\n}\r\n\r\ninput[type=date] {\r\n    cursor: text;\r\n    font-family: var(--font-name);\r\n}\r\n\r\nselect {\r\n    cursor: text;\r\n    font-family: var(--font-name);\r\n    transition: var(--transition-time);\r\n}\r\n\r\n::placeholder {\r\n    color: var(--button-color);\r\n    opacity: 0.5;\r\n    font-family: var(--font-name);\r\n}\r\n\r\n.modal {\r\n    background-color: var(--background-color);\r\n    border-radius: 10px;\r\n    border: 2px solid aquamarine;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n    min-height: 100vh;\r\n    background-color: black;\r\n}\r\n\r\n.sectionOne {\r\n    margin: 5px;\r\n    border-radius: 10px;\r\n    background-color: var(--background-color);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 2px solid #b8b8aa;\r\n}\r\n\r\n.sectionTwo {\r\n    margin: 5px;\r\n    border-radius: 5px;\r\n    border: 2px solid #b8b8aa;\r\n    background-color: var(--background-color);\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n}\r\n\r\n.sectionThree {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    display: grid;\r\n    font-size: 1.2rem;\r\n    gap: 10px;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.arrangeStyle {\r\n    min-height: 100vh;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    border-radius: 10px;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.addTodoConfirmation {\r\n    font-size: 1.2rem;\r\n    gap: 5px;\r\n    display: none;\r\n    animation: var(--animation-details);\r\n}\r\n\r\n.dateDiv {\r\n    text-align: center;\r\n}\r\n\r\n.saveBtnDiv {\r\n    display: flex;\r\n    flex: 1;\r\n}\r\n\r\n.saveBtn,\r\n.saveBtnEdit {\r\n    background-color: var(--button-color);\r\n    color: var(--font-color);\r\n    cursor: pointer;\r\n    border: 1px solid rgb(161, 161, 161);\r\n    border-radius: 10px;\r\n    display: flex;\r\n    flex: 1;\r\n    justify-content: center;\r\n    padding: 6px;\r\n    transition: var(--transition-time);\r\n}\r\n\r\n.cancelBtn,\r\n.cancelBtnEdit {\r\n    background-color: rgb(243, 106, 96);\r\n    color: var(--font-color);\r\n    cursor: pointer;\r\n    border: 1px solid rgb(161, 161, 161);\r\n    display: flex;\r\n    flex: 1;\r\n    justify-content: center;\r\n    padding: 6px;\r\n}\r\n\r\n.statusBtn,\r\n.statusBtnEdit {\r\n    background-color: var(--button-color);\r\n    color: var(--font-color);\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n.addItem {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    border-radius: 10px;\r\n    padding: 0px;\r\n    padding-left: 10px;\r\n    align-items: center;\r\n    gap: 5x;\r\n}\r\n\r\n.hud {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 5px;\r\n    border-radius: 10px;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    margin: 10px;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n}\r\n\r\n.todoMain {\r\n    border-radius: 10px;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    background-color: rgba(200, 212, 203, 0.486);\r\n    color: var(--background-color);\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.521);\r\n    transition: var(--transition-time);\r\n\r\n}\r\n\r\n.todoDetails {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    border-radius: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.todoNameDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\n.addTodoDiv {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 2px solid rgba(1, 56, 15, 0.486);\r\n    background-color: var(--background-color);\r\n    color: rgb(49, 182, 182);\r\n    border-radius: 10px;\r\n    padding-left: 5px;\r\n    gap: 10px;\r\n    cursor: pointer;\r\n    transition: var(--transition-time);\r\n}\r\n\r\n.addTodoOnOff {\r\n    height: 20px;\r\n    width: 20px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    transition: var(--transition-time);\r\n    background: url('../img/add.png') center/contain;\r\n}\r\n\r\n.addTodoBtn {\r\n    all: unset;\r\n    display: flex;\r\n    font-size: 1.2rem;\r\n    flex-grow: 1;\r\n    font-weight: bold;\r\n}\r\n\r\n.todoSign {\r\n    height: 18px;\r\n    width: 18px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    border: 1px solid rgb(70, 68, 68);\r\n    border-radius: 50%;\r\n    background-color: var(--font-color);\r\n    transition: var(--transition-time);\r\n}\r\n\r\n.todoIcon {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.todoDeleteBtn {\r\n    all: unset;\r\n    width: 30px;\r\n    background: url('../img/delete.svg') center/contain no-repeat;\r\n    cursor: pointer;\r\n    transition: var(--transition-time);\r\n}\r\n\r\n.todoEditBtn {\r\n    all: unset;\r\n    width: 20px;\r\n    background: url('../img/edit.svg') center/contain no-repeat;\r\n    cursor: pointer;\r\n    transition: var(--transition-time);\r\n}\r\n\r\n.imageSort {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.listIcon {\r\n    all: unset;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: url('../img/list.png') center/contain no-repeat;\r\n    cursor: pointer;\r\n    transition: var(--transition-time);\r\n}\r\n\r\n.gridIcon {\r\n    all: unset;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: url('../img/grid.png') center/contain no-repeat;\r\n    cursor: pointer;\r\n    transition: var(--transition-time);\r\n}\r\n\r\n.todoMinimizeBtn {\r\n    background-color: var(--button-color);\r\n    border-radius: 10px;\r\n    color: var(--font-color);\r\n    cursor: pointer;\r\n    text-align: center;\r\n    transition: var(--transition-time);\r\n}\r\n\r\n/* onClick classList */\r\n.onClickHideToDoDetails {\r\n    display: none;\r\n}\r\n\r\n.onClickTodoDate {\r\n    justify-content: end;\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\n.onClickSectionThreeShrink {\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n}\r\n\r\n.onClickTodoMainShrink {\r\n    background-color: rgb(223, 189, 189);\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    width: 205px;\r\n    animation: var(--animation-details);\r\n}\r\n\r\n.onClickTodoDetailsShrink {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.onClickFillTodoSign {\r\n    background-color: var(--button-color);\r\n    border-color: white;\r\n}\r\n\r\n.onClickDefaultTodoSign {\r\n    border: 1px solid rgb(70, 68, 68);\r\n    background-color: var(--font-color);\r\n}\r\n\r\n.signStyle {\r\n    background-color: rgba(0, 0, 0, 0.404);\r\n    opacity: 0.2;\r\n}\r\n\r\n.editTodo {\r\n    display: none;\r\n}\r\n\r\n.onClickEditTodoMainStyle {\r\n    background-color: var(--font-color);\r\n    border: none;\r\n    box-shadow: none;\r\n}\r\n\r\n/* hover Section */\r\n\r\ninput[type=text]:focus {\r\n    border-radius: 0px;\r\n    font-family: var(--font-name);\r\n    color: var(--font-color);\r\n}\r\n\r\ninput[type=button]:hover {\r\n    transform: scale(0.8);\r\n}\r\n\r\nselect:hover {\r\n    transform: scale(0.9);\r\n}\r\n\r\n.addTodoDiv:hover {\r\n    background-color: var(--font-color);\r\n    color: rgb(202, 165, 0);\r\n    background-image: linear-gradient(to right, rgb(252, 252, 252), rgb(250, 237, 167));\r\n    border: 2px solid rgb(230, 230, 230);\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.todoSign:hover {\r\n    background-color: rgb(178, 248, 86);\r\n    opacity: 0.7;\r\n}\r\n\r\n.saveBtn:hover,\r\n.saveBtnEdit:hover {\r\n    transform: scale(0.8);\r\n}\r\n\r\n/* work only when onClickEditTodoMainStyle is not there  */\r\n.todoMain:hover:not(.onClickEditTodoMainStyle) {\r\n    transform: scale(0.98);\r\n    border: none;\r\n    background-color: rgba(134, 168, 143, 0.486);\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.listIcon:hover,\r\n.gridIcon:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.addTodoDiv:hover>div {\r\n    height: 20px;\r\n    width: 20px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    background: url('../img/add1.png') center/contain;\r\n}\r\n\r\n.todoDeleteBtn:hover,\r\n.todoEditBtn:hover {\r\n    transform: scale(1.2);\r\n    background-color: var(--font-color);\r\n    border-radius: 5px;\r\n}\r\n\r\n.todoMinimizeBtn:hover {\r\n    background-color: var(--font-color);\r\n    color: black;\r\n}\r\n\r\n@keyframes confirmationAnimation {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   "addTodoConfirmation": () => (/* reexport safe */ _htmlElement__WEBPACK_IMPORTED_MODULE_0__.addTodoConfirmation),
/* harmony export */   "default": () => (/* binding */ todoUICreate),
/* harmony export */   "editTodo": () => (/* binding */ editTodo),
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
    todoDeleteBtn = document.createElement('button');
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
    sectionThree.prepend(_htmlElement__WEBPACK_IMPORTED_MODULE_0__.addTodoConfirmation);
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
/* harmony export */   "addTodoConfirmation": () => (/* binding */ addTodoConfirmation),
/* harmony export */   "addTodoDiv": () => (/* binding */ addTodoDiv),
/* harmony export */   "cancelBtn": () => (/* binding */ cancelBtn),
/* harmony export */   "cancelBtnEdit": () => (/* binding */ cancelBtnEdit),
/* harmony export */   "dateBtnEdit": () => (/* binding */ dateBtnEdit),
/* harmony export */   "descriptionBtnEdit": () => (/* binding */ descriptionBtnEdit),
/* harmony export */   "gridIcon": () => (/* binding */ gridIcon),
/* harmony export */   "listIcon": () => (/* binding */ listIcon),
/* harmony export */   "nameBtnEdit": () => (/* binding */ nameBtnEdit),
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

const addTodoConfirmation = document.querySelector('.addTodoConfirmation');
const cancelBtn = document.querySelector('.cancelBtn');
const cancelBtnEdit = document.querySelector('.cancelBtnEdit');







/***/ }),

/***/ "./img/add.png":
/*!*********************!*\
  !*** ./img/add.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90b950d171bb0b3986d1.png";

/***/ }),

/***/ "./img/add1.png":
/*!**********************!*\
  !*** ./img/add1.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3140919037b5281d614a.png";

/***/ }),

/***/ "./img/delete.svg":
/*!************************!*\
  !*** ./img/delete.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3672ce28d245c8f7bbef.svg";

/***/ }),

/***/ "./img/edit.svg":
/*!**********************!*\
  !*** ./img/edit.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67d7ac9ac639190752c4.svg";

/***/ }),

/***/ "./img/grid.png":
/*!**********************!*\
  !*** ./img/grid.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "144ac2a8de887076763e.png";

/***/ }),

/***/ "./img/list.png":
/*!**********************!*\
  !*** ./img/list.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb56d80fe7aea7bc60ad.png";

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





const LOCAL_STORAGE_LIST_KEY = 'obj.sike';
const obj = {
    sike: JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [],
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

function todoAddCancel() {
    _htmlElement__WEBPACK_IMPORTED_MODULE_1__.cancelBtn.addEventListener("click", e => {
        _htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoConfirmation.style.display = 'none';
        _htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = 'flex';
    })
}

function addItemBtn() {
    _htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoBtn.addEventListener("click", () => {
        _htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = 'none';
        _htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoConfirmation.style.display = 'grid';
        _addItem__WEBPACK_IMPORTED_MODULE_2__.nameBtn.focus(); // adds cursor when addBtn is pressed;
        todoAddCancel()
    });
}

function statusPriorityColor() {
    const todoStatusAll = document.querySelectorAll('.todoStatus');
    todoStatusAll.forEach(selected => {
        obj.currentStatus = selected.textContent;
        console.log(obj.currentStatus);
        if (selected.textContent === 'High') {
            selected.style.color = 'red';
        }
        else if (selected.textContent === 'Low') {
            selected.style.color = 'Blue';
        }
        else if (selected.textContent === 'None') {
            selected.style.color = 'Grey';
        }
    });
}

function clearValue() {
    _addItem__WEBPACK_IMPORTED_MODULE_2__.nameBtn.value = '';
    _addItem__WEBPACK_IMPORTED_MODULE_2__.descriptionBtn.value = '';
    _addItem__WEBPACK_IMPORTED_MODULE_2__.dateBtn.value = '';
    _addItem__WEBPACK_IMPORTED_MODULE_2__.statusBtn.value = 'None';
}

function clearValueEdit() {
    _htmlElement__WEBPACK_IMPORTED_MODULE_1__.nameBtnEdit.value = '';
    _htmlElement__WEBPACK_IMPORTED_MODULE_1__.descriptionBtnEdit.value = '';
    _htmlElement__WEBPACK_IMPORTED_MODULE_1__.dateBtnEdit.value = '';
    _htmlElement__WEBPACK_IMPORTED_MODULE_1__.statusBtnEdit.value = 'None';
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
    const eachMain = e.currentTarget.parentNode.parentElement.parentElement;
    if (e.currentTarget.classList.contains('onClickFillTodoSign')) {
        e.currentTarget.classList.remove('onClickFillTodoSign');
        eachMain.classList.remove('signStyle'); // selects main
        e.currentTarget.parentNode.parentElement.childNodes[4].childNodes[0].disabled = false;
        e.currentTarget.parentNode.parentElement.childNodes[4].childNodes[1].disabled = false;
        e.currentTarget.parentNode.parentElement.childNodes[4].childNodes[2].disabled = false;
    }
    else {
        e.currentTarget.classList.add('onClickFillTodoSign');
        eachMain.classList.add('signStyle'); // selects main
        e.currentTarget.parentNode.parentElement.childNodes[4].childNodes[0].disabled = false;
        e.currentTarget.parentNode.parentElement.childNodes[4].childNodes[1].disabled = true;
        e.currentTarget.parentNode.parentElement.childNodes[4].childNodes[2].disabled = true;
        setTimeout(() => {
            eachMain.remove();
        }, 1500);
    }
}

function fillSignTodo() {
    const todoSigns = document.querySelectorAll(`.todoSign`);
    todoSigns.forEach(items => {
        items.addEventListener("click", fillSignTodoFnc)
    })
}

function removeTodo() {
    const todoDeleteBtnAll = document.querySelectorAll('.todoDeleteBtn');
    todoDeleteBtnAll.forEach((deleteAll, index) => {
        deleteAll.addEventListener("click", (e) => {
            console.log(index);
            obj.sike.splice(index, 1);
            e.currentTarget.parentNode.parentElement.parentElement.remove();
            console.log(obj.sike);
        });
    })
}

// Edit Button Functionality Starting
function enableEditBtn() {
    // Enable all the edit button until the clearBtnEdit is pressed [For cancel edit log above]
    const todoEditBtnAll = document.querySelectorAll('.todoEditBtn');
    todoEditBtnAll.forEach(isTodoEditClicked => {
        isTodoEditClicked.disabled = false; // disable todoEditBtn 
        isTodoEditClicked.parentElement.parentElement.parentElement.classList.remove('onClickEditTodoMainStyle'); // removes todoMain Border and BGColor 
        statusPriorityColor(); // display the correct color for the status
        clearValueEdit();
    })
}

function todoEditCancel() {
    _htmlElement__WEBPACK_IMPORTED_MODULE_1__.cancelBtnEdit.addEventListener("click", e => {
        _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.editTodo.style.display = 'none';
        const todoDetailsAll = document.querySelectorAll('.todoDetails');
        todoDetailsAll.forEach(items => {
            items.style.display = 'grid';
        })
        enableEditBtn();
    })
}

function saveTodoEachAfterEdit(e) {
    const saveBtnEditVariable = e.currentTarget.parentNode.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[9].childNodes[1];// selects saveBtnEdit
    saveBtnEditVariable.addEventListener('click', event => {
        if (_htmlElement__WEBPACK_IMPORTED_MODULE_1__.nameBtnEdit.value === "" || _htmlElement__WEBPACK_IMPORTED_MODULE_1__.descriptionBtnEdit.value === "" || _htmlElement__WEBPACK_IMPORTED_MODULE_1__.dateBtnEdit.value === "" || _htmlElement__WEBPACK_IMPORTED_MODULE_1__.statusBtnEdit.value === "") {
            // HTML required field will show
        }
        else {
            event.preventDefault()
            const dateBtnIndianFormat = _htmlElement__WEBPACK_IMPORTED_MODULE_1__.dateBtnEdit.value.split('-').reverse().join('-');
            _htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = 'flex';
            _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.editTodo.style.display = 'none';
            event.currentTarget.parentNode.parentElement.parentElement.parentElement.parentElement.style.border = 'none';  // selects details with respect to editBtn
            event.currentTarget.parentNode.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = 'rgb(230, 230, 230)';  // selects details with respect to editBtn
            event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].style.display = 'grid';  // selects details
            event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[1].textContent = `${_htmlElement__WEBPACK_IMPORTED_MODULE_1__.nameBtnEdit.value}`;
            event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].textContent = `${_htmlElement__WEBPACK_IMPORTED_MODULE_1__.descriptionBtnEdit.value}`;
            event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[2].textContent = dateBtnIndianFormat;
            event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[3].textContent = `${_htmlElement__WEBPACK_IMPORTED_MODULE_1__.statusBtnEdit.value}`;
            enableEditBtn();
        }
    })
}
function editTodoEach() {
    const todoEditBtnAll = document.querySelectorAll('.todoEditBtn');
    todoEditBtnAll.forEach((items, index) => { // index parameter get the index position of the nodeList[of each todoEditBtn from todoEditBtnAll ]
        items.addEventListener("click", e => {
            e.currentTarget.parentNode.parentElement.parentElement.classList.add('onClickEditTodoMainStyle');
            e.currentTarget.parentNode.parentElement.style.display = 'none';  // selects details with respect to editBtn
            _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.editTodo.style.display = 'grid';
            e.currentTarget.parentNode.parentElement.parentElement.append(_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.editTodo); // display editUI on edit click
            // Disable all the edit button until the saveBtnEdit is pressed [For cancelEdit function above]
            todoEditBtnAll.forEach(isTodoEditClicked => {
                isTodoEditClicked.disabled = true;
                saveTodoEachAfterEdit(e, index);
            })
            // focus the name when clicked [used autofocus property on the html element]
            _htmlElement__WEBPACK_IMPORTED_MODULE_1__.nameBtnEdit.focus();
        })
        todoEditCancel();
    })
}

// Edit Button Functionality Ending

function todoRender() {
    (0,_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__["default"])();  // from eachTodoItem.js
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoName.textContent = `${obj.sike[0].title}`;
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDescription.textContent = `${obj.sike[0].description}`;
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDate.textContent = `${obj.sike[0].date}`;
    _eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoStatus.textContent = `${obj.sike[0].status}`;
}


function predefinedTodoInput() {
    const listItemTwo = new TodoClass('Lionel Messi', 'The GOAT', '24-06-1987', 'High');
    obj.sike.unshift(listItemTwo);
    // todo Functionality !-
    todoRender();
    minimizeTodoDetails();
    fillSignTodo();
    removeTodo();
    editTodoEach();
    statusPriorityColor();
}


function userCreateTodoInput() {
    const dateBtnIndianFormat = _addItem__WEBPACK_IMPORTED_MODULE_2__.dateBtn.value.split('-').reverse().join('-');
    const listItem = new TodoClass(_addItem__WEBPACK_IMPORTED_MODULE_2__.nameBtn.value, _addItem__WEBPACK_IMPORTED_MODULE_2__.descriptionBtn.value, dateBtnIndianFormat, _addItem__WEBPACK_IMPORTED_MODULE_2__.statusBtn.value);
    obj.sike.unshift(listItem);
    todoRender();
}

function saveTodo() {
    _addItem__WEBPACK_IMPORTED_MODULE_2__.saveBtn.addEventListener("click", () => {
        if (_addItem__WEBPACK_IMPORTED_MODULE_2__.nameBtn.value === "" || _addItem__WEBPACK_IMPORTED_MODULE_2__.descriptionBtn.value === "" || _addItem__WEBPACK_IMPORTED_MODULE_2__.dateBtn.value === "" || _addItem__WEBPACK_IMPORTED_MODULE_2__.statusBtn.value === "") {
            // HTML required field will show
        }
        else {
            event.preventDefault()
            _htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = 'flex';
            _htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoConfirmation.style.display = 'none';
            userCreateTodoInput();
            minimizeTodoDetails();
            fillSignTodo();
            removeTodo();
            editTodoEach();
            clickTodoListOrGridStyle();
            statusPriorityColor();
            clearValue();
            console.log(obj.sike)
        }
    });
}

predefinedTodoInput();
saveTodo();
addItemBtn();
sortTodoListOrGridStyle();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZ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SUFBSSxpRUFBc0IsTUFBTSxtQkFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx5REFBbUI7QUFDbkQsbUNBQW1DLG1EQUFhLEVBQUUsMERBQW9CLHVCQUF1QixxREFBZTtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBd0I7QUFDNUIsWUFBWSxtREFBYSxXQUFXLDBEQUFvQixXQUFXLG1EQUFhLFdBQVcscURBQWU7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtFQUF3QjtBQUNwQyxZQUFZLDJFQUFpQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkSXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VhY2hUb2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2h0bWxFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2FkZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltZy9lZGl0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltZy9saXN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltZy9ncmlkLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltZy9hZGQxLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SXRpbSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcXHJcXG4gICAgLS1idXR0b24tY29sb3I6IHJnYig0MiwgNDIsIDQzKTtcXHJcXG4gICAgLS10cmFuc2l0aW9uLXRpbWU6IDAuNXM7XFxyXFxuICAgIC0tYW5pbWF0aW9uLWRldGFpbHM6IGNvbmZpcm1hdGlvbkFuaW1hdGlvbiAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAtLWZvbnQtbmFtZTogJ0l0aW0nLCBjdXJzaXZlO1xcclxcbiAgICAtLWZvbnQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIC8qIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7ICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1uYW1lKTtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGNvbG9yOiAjMWYyNzFiO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1uYW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoNDksIDE4MiwgMTgyKTtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEsIDU2LCAxNSwgMC40ODYpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NywgMTc2LCAxNzYsIDAuNDUyKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbmFtZSk7XFxyXFxufVxcclxcblxcclxcbmZvcm0+ZGl2PmlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbmFtZSk7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1uYW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxyXFxuICAgIGN1cnNvcjogdGV4dDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbmFtZSk7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICAgIGN1cnNvcjogdGV4dDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbmFtZSk7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1uYW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGFxdWFtYXJpbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbk9uZSB7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiOGI4YWE7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uVHdvIHtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2I4YjhhYTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25UaHJlZSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFycmFuZ2VTdHlsZSB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEsIDU2LCAxNSwgMC40ODYpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kb0NvbmZpcm1hdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYW5pbWF0aW9uOiB2YXIoLS1hbmltYXRpb24tZGV0YWlscyk7XFxyXFxufVxcclxcblxcclxcbi5kYXRlRGl2IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2F2ZUJ0bkRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zYXZlQnRuLFxcclxcbi5zYXZlQnRuRWRpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYxLCAxNjEsIDE2MSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWxCdG4sXFxyXFxuLmNhbmNlbEJ0bkVkaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAxMDYsIDk2KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjEsIDE2MSwgMTYxKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXR1c0J0bixcXHJcXG4uc3RhdHVzQnRuRWRpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkSXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1eDtcXHJcXG59XFxyXFxuXFxyXFxuLmh1ZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb01haW4ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjEyLCAyMDMsIDAuNDg2KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUyMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50b2RvRGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvTmFtZURpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kb0RpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEsIDU2LCAxNSwgMC40ODYpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHJnYig0OSwgMTgyLCAxODIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxufVxcclxcblxcclxcbi5hZGRUb2RvT25PZmYge1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgY2VudGVyL2NvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5hZGRUb2RvQnRuIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvU2lnbiB7XFxyXFxuICAgIGhlaWdodDogMThweDtcXHJcXG4gICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDcwLCA2OCwgNjgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0ljb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGVsZXRlQnRuIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvRWRpdEJ0biB7XFxyXFxuICAgIGFsbDogdW5zZXQ7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VTb3J0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RJY29uIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRJY29uIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NaW5pbWl6ZUJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxufVxcclxcblxcclxcbi8qIG9uQ2xpY2sgY2xhc3NMaXN0ICovXFxyXFxuLm9uQ2xpY2tIaWRlVG9Eb0RldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9EYXRlIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tTZWN0aW9uVGhyZWVTaHJpbmsge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tUb2RvTWFpblNocmluayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDE4OSwgMTg5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDIwNXB4O1xcclxcbiAgICBhbmltYXRpb246IHZhcigtLWFuaW1hdGlvbi1kZXRhaWxzKTtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tUb2RvRGV0YWlsc1NocmluayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5vbkNsaWNrRmlsbFRvZG9TaWduIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tEZWZhdWx0VG9kb1NpZ24ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNzAsIDY4LCA2OCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnblN0eWxlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQwNCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXRUb2RvIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tFZGl0VG9kb01haW5TdHlsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIGhvdmVyIFNlY3Rpb24gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1uYW1lKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG9EaXY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHJnYigyMDIsIDE2NSwgMCk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDI1MiwgMjUyLCAyNTIpLCByZ2IoMjUwLCAyMzcsIDE2NykpO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvU2lnbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzgsIDI0OCwgODYpO1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbi5zYXZlQnRuOmhvdmVyLFxcclxcbi5zYXZlQnRuRWRpdDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogd29yayBvbmx5IHdoZW4gb25DbGlja0VkaXRUb2RvTWFpblN0eWxlIGlzIG5vdCB0aGVyZSAgKi9cXHJcXG4udG9kb01haW46aG92ZXI6bm90KC5vbkNsaWNrRWRpdFRvZG9NYWluU3R5bGUpIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNCwgMTY4LCAxNDMsIDAuNDg2KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RJY29uOmhvdmVyLFxcclxcbi5ncmlkSWNvbjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG9EaXY6aG92ZXI+ZGl2IHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIGNlbnRlci9jb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RlbGV0ZUJ0bjpob3ZlcixcXHJcXG4udG9kb0VkaXRCdG46aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvTWluaW1pemVCdG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNvbmZpcm1hdGlvbkFuaW1hdGlvbiB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QiwyREFBMkQ7SUFDM0QsNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdJQUF3STtJQUN4SSw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksU0FBUztJQUNULHdCQUF3QjtJQUN4QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNC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SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLG1GQUFtRjtJQUNuRixvQ0FBb0M7SUFDcEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCOztBQUVBLDBEQUEwRDtBQUMxRDtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osNENBQTRDO0lBQzVDLHdDQUF3QztBQUM1Qzs7QUFFQTs7SUFFSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0VBQWlEO0FBQ3JEOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0aW0mZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XFxyXFxuICAgIC0tYnV0dG9uLWNvbG9yOiByZ2IoNDIsIDQyLCA0Myk7XFxyXFxuICAgIC0tdHJhbnNpdGlvbi10aW1lOiAwLjVzO1xcclxcbiAgICAtLWFuaW1hdGlvbi1kZXRhaWxzOiBjb25maXJtYXRpb25BbmltYXRpb24gMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgLS1mb250LW5hbWU6ICdJdGltJywgY3Vyc2l2ZTtcXHJcXG4gICAgLS1mb250LWNvbG9yOiBhbGljZWJsdWU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICAvKiBmb250LWZhbWlseTogc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiOyAqL1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1uYW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbmFtZSk7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBjb2xvcjogIzFmMjcxYjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbmFtZSk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogcmdiKDQ5LCAxODIsIDE4Mik7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxLCA1NiwgMTUsIDAuNDg2KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE3NiwgMTc2LCAwLjQ1Mik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtPmRpdj5pbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1idXR0b25dIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbmFtZSk7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcclxcbiAgICBjdXJzb3I6IHRleHQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgICBjdXJzb3I6IHRleHQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbmFtZSk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBhcXVhbWFyaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25PbmUge1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYjhiOGFhO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvblR3byB7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiOGI4YWE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uVGhyZWUge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnJhbmdlU3R5bGUge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxLCA1NiwgMTUsIDAuNDg2KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG9Db25maXJtYXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFuaW1hdGlvbjogdmFyKC0tYW5pbWF0aW9uLWRldGFpbHMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZURpdiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNhdmVCdG5EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2F2ZUJ0bixcXHJcXG4uc2F2ZUJ0bkVkaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2MSwgMTYxLCAxNjEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsQnRuLFxcclxcbi5jYW5jZWxCdG5FZGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMTA2LCA5Nik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYxLCAxNjEsIDE2MSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGF0dXNCdG4sXFxyXFxuLnN0YXR1c0J0bkVkaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXg7XFxyXFxufVxcclxcblxcclxcbi5odWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NYWluIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIxMiwgMjAzLCAwLjQ4Nik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC41MjEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb05hbWVEaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG9EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxLCA1NiwgMTUsIDAuNDg2KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiByZ2IoNDksIDE4MiwgMTgyKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kb09uT2ZmIHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy9hZGQucG5nJykgY2VudGVyL2NvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5hZGRUb2RvQnRuIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvU2lnbiB7XFxyXFxuICAgIGhlaWdodDogMThweDtcXHJcXG4gICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDcwLCA2OCwgNjgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0ljb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvRGVsZXRlQnRuIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1nL2RlbGV0ZS5zdmcnKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9FZGl0QnRuIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1nL2VkaXQuc3ZnJykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZVNvcnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdEljb24ge1xcclxcbiAgICBhbGw6IHVuc2V0O1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy9saXN0LnBuZycpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZEljb24ge1xcclxcbiAgICBhbGw6IHVuc2V0O1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy9ncmlkLnBuZycpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb01pbmltaXplQnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogb25DbGljayBjbGFzc0xpc3QgKi9cXHJcXG4ub25DbGlja0hpZGVUb0RvRGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5vbkNsaWNrVG9kb0RhdGUge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1NlY3Rpb25UaHJlZVNocmluayB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9NYWluU2hyaW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMTg5LCAxODkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMjA1cHg7XFxyXFxuICAgIGFuaW1hdGlvbjogdmFyKC0tYW5pbWF0aW9uLWRldGFpbHMpO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9EZXRhaWxzU2hyaW5rIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tGaWxsVG9kb1NpZ24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja0RlZmF1bHRUb2RvU2lnbiB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig3MCwgNjgsIDY4KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduU3R5bGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcXHJcXG4gICAgb3BhY2l0eTogMC4yO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdFRvZG8ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja0VkaXRUb2RvTWFpblN0eWxlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaG92ZXIgU2VjdGlvbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kb0Rpdjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogcmdiKDIwMiwgMTY1LCAwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjUyLCAyNTIsIDI1MiksIHJnYigyNTAsIDIzNywgMTY3KSk7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMzAsIDIzMCwgMjMwKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9TaWduOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OCwgMjQ4LCA4Nik7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuLnNhdmVCdG46aG92ZXIsXFxyXFxuLnNhdmVCdG5FZGl0OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3b3JrIG9ubHkgd2hlbiBvbkNsaWNrRWRpdFRvZG9NYWluU3R5bGUgaXMgbm90IHRoZXJlICAqL1xcclxcbi50b2RvTWFpbjpob3Zlcjpub3QoLm9uQ2xpY2tFZGl0VG9kb01haW5TdHlsZSkge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM0LCAxNjgsIDE0MywgMC40ODYpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdEljb246aG92ZXIsXFxyXFxuLmdyaWRJY29uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kb0Rpdjpob3Zlcj5kaXYge1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1nL2FkZDEucG5nJykgY2VudGVyL2NvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi50b2RvRGVsZXRlQnRuOmhvdmVyLFxcclxcbi50b2RvRWRpdEJ0bjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9NaW5pbWl6ZUJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY29uZmlybWF0aW9uQW5pbWF0aW9uIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IG5hbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUJ0bicpO1xyXG5jb25zdCBkZXNjcmlwdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbkJ0bicpO1xyXG5jb25zdCBkYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVCdG4nKTtcclxuY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlQnRuJyk7XHJcbmNvbnN0IHN0YXR1c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXNCdG4nKTtcclxuXHJcblxyXG5leHBvcnQgeyBuYW1lQnRuLCBkZXNjcmlwdGlvbkJ0biwgZGF0ZUJ0biwgc3RhdHVzQnRuLCBzYXZlQnRuIH07IiwiaW1wb3J0IHsgYWRkVG9kb0RpdiwgYWRkVG9kb0NvbmZpcm1hdGlvbiB9IGZyb20gXCIuL2h0bWxFbGVtZW50XCJcclxuXHJcbmxldCB0b2RvTWFpbjtcclxubGV0IHRvZG9EZXRhaWxzO1xyXG5sZXQgdG9kb05hbWVEaXY7XHJcbmxldCB0b2RvU2lnbjtcclxubGV0IHRvZG9OYW1lO1xyXG5sZXQgdG9kb0Rlc2NyaXB0aW9uO1xyXG5sZXQgdG9kb1N0YXR1cztcclxubGV0IHRvZG9EYXRlO1xyXG5sZXQgdG9kb0ljb247XHJcbmxldCB0b2RvRGVsZXRlQnRuO1xyXG5sZXQgdG9kb01pbmltaXplQnRuO1xyXG5sZXQgdG9kb0VkaXRCdG47XHJcblxyXG5jb25zdCBzZWN0aW9uVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgYXJyYW5nZVN0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycmFuZ2VTdHlsZScpO1xyXG5jb25zdCBlZGl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0VG9kbycpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9VSUNyZWF0ZSgpIHtcclxuICAgIHRvZG9NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9TaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRvZG9NaW5pbWl6ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdG9kb0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcblxyXG4gICAgc2VjdGlvblRocmVlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25UaHJlZScpO1xyXG4gICAgdG9kb01haW4uY2xhc3NMaXN0LmFkZCgndG9kb01haW4nKTtcclxuICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXRhaWxzJyk7XHJcbiAgICB0b2RvTmFtZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvTmFtZURpdicpO1xyXG4gICAgdG9kb1NpZ24uY2xhc3NMaXN0LmFkZCgndG9kb1NpZ24nKTtcclxuICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoJ3RvZG9OYW1lJyk7XHJcbiAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kb0Rlc2NyaXB0aW9uJyk7XHJcbiAgICB0b2RvU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3RvZG9TdGF0dXMnKTtcclxuICAgIHRvZG9EYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG9EYXRlJyk7XHJcbiAgICB0b2RvSWNvbi5jbGFzc0xpc3QuYWRkKCd0b2RvSWNvbicpO1xyXG4gICAgdG9kb0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvRGVsZXRlQnRuJyk7XHJcbiAgICB0b2RvTWluaW1pemVCdG4uY2xhc3NMaXN0LmFkZCgndG9kb01pbmltaXplQnRuJyk7XHJcbiAgICB0b2RvTWluaW1pemVCdG4udGV4dENvbnRlbnQgPSAnTWluaW1pemUnO1xyXG4gICAgdG9kb0VkaXRCdG4uY2xhc3NMaXN0LmFkZCgndG9kb0VkaXRCdG4nKTtcclxuICAgIC8vIHRvZG9FZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xyXG5cclxuICAgIHRvZG9EZWxldGVCdG4udGV4dENvbnRlbnQgPSAnJztcclxuICAgIHRvZG9EZXRhaWxzLmFwcGVuZCh0b2RvU2lnbiwgdG9kb05hbWVEaXYsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0RhdGUsIHRvZG9TdGF0dXMsIHRvZG9JY29uKTtcclxuICAgIHRvZG9OYW1lRGl2LmFwcGVuZCh0b2RvU2lnbiwgdG9kb05hbWUpO1xyXG4gICAgdG9kb0ljb24uYXBwZW5kKHRvZG9EZWxldGVCdG4sIHRvZG9FZGl0QnRuLCB0b2RvTWluaW1pemVCdG4pO1xyXG4gICAgdG9kb01haW4uYXBwZW5kKHRvZG9EZXRhaWxzKTtcclxuICAgIGFycmFuZ2VTdHlsZS5hcHBlbmQoc2VjdGlvblRocmVlKTtcclxuICAgIHNlY3Rpb25UaHJlZS5wcmVwZW5kKGFkZFRvZG9Db25maXJtYXRpb24pO1xyXG4gICAgc2VjdGlvblRocmVlLnByZXBlbmQoYWRkVG9kb0Rpdik7XHJcbiAgICBzZWN0aW9uVGhyZWUucHJlcGVuZChlZGl0VG9kbylcclxuICAgIHNlY3Rpb25UaHJlZS5hcHBlbmQodG9kb01haW4pO1xyXG59XHJcbmV4cG9ydCB7XHJcbiAgICBhZGRUb2RvQ29uZmlybWF0aW9uLFxyXG4gICAgdG9kb01haW4sIHRvZG9EZXRhaWxzLFxyXG4gICAgdG9kb1NpZ24sIHRvZG9OYW1lLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9TdGF0dXMsIHRvZG9EYXRlLFxyXG4gICAgdG9kb0RlbGV0ZUJ0biwgdG9kb01pbmltaXplQnRuLCB0b2RvSWNvbiwgdG9kb0VkaXRCdG4sXHJcbiAgICBlZGl0VG9kb1xyXG59OyIsImNvbnN0IGFkZFRvZG9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVG9kb0RpdicpO1xyXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRvZG9CdG4nKTtcclxuXHJcbmNvbnN0IG5hbWVCdG5FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWVCdG5FZGl0Jyk7XHJcbmNvbnN0IGRlc2NyaXB0aW9uQnRuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbkJ0bkVkaXQnKTtcclxuY29uc3Qgc3RhdHVzQnRuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXNCdG5FZGl0Jyk7XHJcbmNvbnN0IGRhdGVCdG5FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVCdG5FZGl0Jyk7XHJcblxyXG5jb25zdCBncmlkSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkSWNvbicpO1xyXG5jb25zdCBsaXN0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0SWNvbicpO1xyXG5cclxuY29uc3QgYWRkVG9kb0NvbmZpcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUb2RvQ29uZmlybWF0aW9uJyk7XHJcbmNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxCdG4nKTtcclxuY29uc3QgY2FuY2VsQnRuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxCdG5FZGl0Jyk7XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIGFkZFRvZG9EaXYsIGFkZFRvZG9CdG4sIGdyaWRJY29uLCBsaXN0SWNvbixcclxuICAgIG5hbWVCdG5FZGl0LCBkZXNjcmlwdGlvbkJ0bkVkaXQsIGRhdGVCdG5FZGl0LCBzdGF0dXNCdG5FZGl0LFxyXG4gICAgYWRkVG9kb0NvbmZpcm1hdGlvbiwgY2FuY2VsQnRuLCBjYW5jZWxCdG5FZGl0XHJcbn1cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7XHJcbiAgICBhZGRUb2RvQnRuLCBhZGRUb2RvRGl2LCBncmlkSWNvbiwgbGlzdEljb24sXHJcbiAgICBuYW1lQnRuRWRpdCwgZGVzY3JpcHRpb25CdG5FZGl0LCBzdGF0dXNCdG5FZGl0LCBkYXRlQnRuRWRpdCxcclxuICAgIGFkZFRvZG9Db25maXJtYXRpb24sIGNhbmNlbEJ0biwgY2FuY2VsQnRuRWRpdFxyXG59IGZyb20gJy4vaHRtbEVsZW1lbnQnO1xyXG5pbXBvcnQgeyBuYW1lQnRuLCBzYXZlQnRuLCBkZXNjcmlwdGlvbkJ0biwgZGF0ZUJ0biwgc3RhdHVzQnRuIH0gZnJvbSAnLi9hZGRJdGVtJztcclxuaW1wb3J0IHRvZG9VSUNyZWF0ZSwge1xyXG4gICAgdG9kb01haW4sIHRvZG9EZXRhaWxzLCB0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLFxyXG4gICAgdG9kb1N0YXR1cywgdG9kb0RhdGUsIHRvZG9EZWxldGVCdG4sIHRvZG9NaW5pbWl6ZUJ0biwgdG9kb0VkaXRCdG4sXHJcbiAgICBlZGl0VG9kb1xyXG59IGZyb20gJy4vZWFjaFRvZG9JdGVtJztcclxuXHJcbmNvbnN0IExPQ0FMX1NUT1JBR0VfTElTVF9LRVkgPSAnb2JqLnNpa2UnO1xyXG5jb25zdCBvYmogPSB7XHJcbiAgICBzaWtlOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVF9LRVkpKSB8fCBbXSxcclxuICAgIGN1cnJlbnRTdGF0dXM6ICcnLFxyXG59XHJcblxyXG5jbGFzcyBUb2RvQ2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBzdGF0dXMpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZG9BZGRDYW5jZWwoKSB7XHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICAgIGFkZFRvZG9Db25maXJtYXRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBhZGRUb2RvRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRJdGVtQnRuKCkge1xyXG4gICAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFkZFRvZG9EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBhZGRUb2RvQ29uZmlybWF0aW9uLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgICAgbmFtZUJ0bi5mb2N1cygpOyAvLyBhZGRzIGN1cnNvciB3aGVuIGFkZEJ0biBpcyBwcmVzc2VkO1xyXG4gICAgICAgIHRvZG9BZGRDYW5jZWwoKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXR1c1ByaW9yaXR5Q29sb3IoKSB7XHJcbiAgICBjb25zdCB0b2RvU3RhdHVzQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9TdGF0dXMnKTtcclxuICAgIHRvZG9TdGF0dXNBbGwuZm9yRWFjaChzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgb2JqLmN1cnJlbnRTdGF0dXMgPSBzZWxlY3RlZC50ZXh0Q29udGVudDtcclxuICAgICAgICBjb25zb2xlLmxvZyhvYmouY3VycmVudFN0YXR1cyk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkLnRleHRDb250ZW50ID09PSAnSGlnaCcpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0ZWQudGV4dENvbnRlbnQgPT09ICdMb3cnKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLmNvbG9yID0gJ0JsdWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZWxlY3RlZC50ZXh0Q29udGVudCA9PT0gJ05vbmUnKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLmNvbG9yID0gJ0dyZXknO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclZhbHVlKCkge1xyXG4gICAgbmFtZUJ0bi52YWx1ZSA9ICcnO1xyXG4gICAgZGVzY3JpcHRpb25CdG4udmFsdWUgPSAnJztcclxuICAgIGRhdGVCdG4udmFsdWUgPSAnJztcclxuICAgIHN0YXR1c0J0bi52YWx1ZSA9ICdOb25lJztcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJWYWx1ZUVkaXQoKSB7XHJcbiAgICBuYW1lQnRuRWRpdC52YWx1ZSA9ICcnO1xyXG4gICAgZGVzY3JpcHRpb25CdG5FZGl0LnZhbHVlID0gJyc7XHJcbiAgICBkYXRlQnRuRWRpdC52YWx1ZSA9ICcnO1xyXG4gICAgc3RhdHVzQnRuRWRpdC52YWx1ZSA9ICdOb25lJztcclxufVxyXG5cclxuLy8gdG9kb0Z1bmN0aW9uYWxpdHkgIS1cclxubGV0IGlzVG9kb0xpc3RPckdyaWRTdHlsZTtcclxuXHJcbmZ1bmN0aW9uIHNvcnRUb2RvTGlzdE9yR3JpZFN0eWxlKCkgeyAvLyBDaGVjayBmb3IgRXZlbnRMaXN0ZW5lciBhbmQgY3JlYXRlIHNvcnRpbmcgb3JkZXIgW2dyaWQgb3IgbGlzdF1cclxuICAgIGxpc3RJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgaXNUb2RvTGlzdE9yR3JpZFN0eWxlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdG9kb01haW5BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb01haW4nKTtcclxuICAgICAgICBjb25zdCB0b2RvRGV0YWlsc0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRGV0YWlscycpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRGVzY3JpcHRpb24nKTtcclxuICAgICAgICBjb25zdCB0b2RvU3RhdHVzQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9TdGF0dXMnKTtcclxuICAgICAgICBjb25zdCB0b2RvRGF0ZUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRGF0ZScpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9EZWxldGVCdG5BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0RlbGV0ZUJ0bicpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9FZGl0QnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9FZGl0QnRuJyk7XHJcblxyXG4gICAgICAgIHRvZG9NYWluQWxsLmZvckVhY2goaXRlbXMgPT4ge1xyXG4gICAgICAgICAgICBpdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdvbkNsaWNrVG9kb01haW5TaHJpbmsnKTtcclxuICAgICAgICAgICAgaWYgKCFpdGVtcy5jbGFzc0xpc3QuY29udGFpbnMoYG9uQ2xpY2tUb2RvTWFpblNocmlua2ApKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvTWluaW1pemVCdG5BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb01pbmltaXplQnRuJyk7XHJcbiAgICAgICAgICAgICAgICB0b2RvTWluaW1pemVCdG5BbGwuZm9yRWFjaChidG5zID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidG5zLnRleHRDb250ZW50ID0gJ01pbmltaXplJztcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9EZXRhaWxzQWxsLmZvckVhY2goaXRlbXMgPT4ge1xyXG4gICAgICAgICAgICBpdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdvbkNsaWNrVG9kb0RldGFpbHNTaHJpbmsnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbkFsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb1N0YXR1c0FsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb0RhdGVBbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoJ29uQ2xpY2tUb2RvRGF0ZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb0RlbGV0ZUJ0bkFsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb0VkaXRCdG5BbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgZ3JpZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBpc1RvZG9MaXN0T3JHcmlkU3R5bGUgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCB0b2RvTWFpbkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvTWFpbicpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9EZXRhaWxzQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9EZXRhaWxzJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9EZXNjcmlwdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9TdGF0dXNBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb1N0YXR1cycpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9EYXRlQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9EYXRlJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0RlbGV0ZUJ0bkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRGVsZXRlQnRuJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0VkaXRCdG5BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0VkaXRCdG4nKTtcclxuXHJcblxyXG5cclxuICAgICAgICB0b2RvTWFpbkFsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LmFkZCgnb25DbGlja1RvZG9NYWluU2hyaW5rJyk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtcy5jbGFzc0xpc3QuY29udGFpbnMoYG9uQ2xpY2tUb2RvTWFpblNocmlua2ApKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvTWluaW1pemVCdG5BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb01pbmltaXplQnRuJyk7XHJcbiAgICAgICAgICAgICAgICB0b2RvTWluaW1pemVCdG5BbGwuZm9yRWFjaChidG5zID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGVydCgnY29udGFpbnMnKVxyXG4gICAgICAgICAgICAgICAgICAgIGJ0bnMudGV4dENvbnRlbnQgPSAnTWF4aW1pemUnO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb0RldGFpbHNBbGwuZm9yRWFjaChpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoJ29uQ2xpY2tUb2RvRGV0YWlsc1NocmluaycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uQWxsLmZvckVhY2goaXRlbXMgPT4ge1xyXG4gICAgICAgICAgICBpdGVtcy5jbGFzc0xpc3QuYWRkKCdvbkNsaWNrSGlkZVRvRG9EZXRhaWxzJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0b2RvU3RhdHVzQWxsLmZvckVhY2goaXRlbXMgPT4ge1xyXG4gICAgICAgICAgICBpdGVtcy5jbGFzc0xpc3QuYWRkKCdvbkNsaWNrSGlkZVRvRG9EZXRhaWxzJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0b2RvRGF0ZUFsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LmFkZCgnb25DbGlja1RvZG9EYXRlJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0b2RvRGVsZXRlQnRuQWxsLmZvckVhY2goaXRlbXMgPT4ge1xyXG4gICAgICAgICAgICBpdGVtcy5jbGFzc0xpc3QuYWRkKCdvbkNsaWNrSGlkZVRvRG9EZXRhaWxzJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0b2RvRWRpdEJ0bkFsbC5mb3JFYWNoKGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgaXRlbXMuY2xhc3NMaXN0LmFkZCgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2xpY2tUb2RvTGlzdE9yR3JpZFN0eWxlKCkgeyAgLy8gY2hlY2sgaWYgdGhlIHVzZXIgd2FzIGNsaWNrZWQgdGhlIHNvcnRpbmcgb3JkZXIgW2dyaWQgb3IgbGlzdF0gYW5kIGNyZWF0ZSB0aGUgbmV3IFRvZG8gd2l0aCB0aGUgc2FtZSBzdHlsZSBmb3JtYXQgXHJcbiAgICBpZiAoaXNUb2RvTGlzdE9yR3JpZFN0eWxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgdG9kb01pbmltaXplQnRuLnRleHRDb250ZW50ID0gJ01heGltaXplJ1xyXG4gICAgICAgIHRvZG9NYWluLmNsYXNzTGlzdC5hZGQoJ29uQ2xpY2tUb2RvTWFpblNocmluaycpO1xyXG4gICAgICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ29uQ2xpY2tUb2RvRGV0YWlsc1NocmluaycpO1xyXG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdvbkNsaWNrSGlkZVRvRG9EZXRhaWxzJyk7XHJcbiAgICAgICAgdG9kb1N0YXR1cy5jbGFzc0xpc3QuYWRkKCdvbkNsaWNrSGlkZVRvRG9EZXRhaWxzJyk7XHJcbiAgICAgICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZCgnb25DbGlja1RvZG9EYXRlJyk7XHJcbiAgICAgICAgdG9kb0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdvbkNsaWNrSGlkZVRvRG9EZXRhaWxzJyk7XHJcbiAgICAgICAgdG9kb0VkaXRCdG4uY2xhc3NMaXN0LmFkZCgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtaW5pbWl6ZVRvZG9EZXRhaWxzRm5jKGUpIHtcclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGBvbkNsaWNrVG9kb01haW5TaHJpbmtgKTsgLy8gU2VsZWN0cyB0b2RvTWFpblxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdvbkNsaWNrVG9kb0RldGFpbHNTaHJpbmsnKTsgLy8gU2VsZWN0cyB0b2RvRGV0YWlsc1xyXG5cclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QudG9nZ2xlKCdvbkNsaWNrSGlkZVRvRG9EZXRhaWxzJyk7IC8vIFNlbGVjdHMgdG9kb0Rlc2NyaXB0aW9uXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMl0uY2xhc3NMaXN0LnRvZ2dsZSgnb25DbGlja1RvZG9EYXRlJyk7IC8vIFNlbGVjdHMgdG9kb0RhdGVcclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1szXS5jbGFzc0xpc3QudG9nZ2xlKCdvbkNsaWNrSGlkZVRvRG9EZXRhaWxzJyk7IC8vIFNlbGVjdHMgdG9kb1N0YXR1c1xyXG5cclxuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC50b2dnbGUoJ29uQ2xpY2tIaWRlVG9Eb0RldGFpbHMnKTsgLy8gU2VsZWN0cyBkZWxldGVCdG5cclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnRvZ2dsZSgnb25DbGlja0hpZGVUb0RvRGV0YWlscycpOyAvLyBTZWxlY3RzIGVkaXRCdG5cclxuICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQpO1xyXG5cclxuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGBvbkNsaWNrVG9kb01haW5TaHJpbmtgKSkge1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSAnTWF4aW1pemUnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudCA9ICdNaW5pbWl6ZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1pbmltaXplVG9kb0RldGFpbHMoKSB7XHJcbiAgICB0b2RvTWluaW1pemVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1pbmltaXplVG9kb0RldGFpbHNGbmMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsU2lnblRvZG9GbmMoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XHJcbiAgICBjb25zdCBlYWNoTWFpbiA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvbkNsaWNrRmlsbFRvZG9TaWduJykpIHtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnb25DbGlja0ZpbGxUb2RvU2lnbicpO1xyXG4gICAgICAgIGVhY2hNYWluLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZ25TdHlsZScpOyAvLyBzZWxlY3RzIG1haW5cclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1swXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzFdLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbMl0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdvbkNsaWNrRmlsbFRvZG9TaWduJyk7XHJcbiAgICAgICAgZWFjaE1haW4uY2xhc3NMaXN0LmFkZCgnc2lnblN0eWxlJyk7IC8vIHNlbGVjdHMgbWFpblxyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzBdLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbMV0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzJdLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZWFjaE1haW4ucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxTaWduVG9kbygpIHtcclxuICAgIGNvbnN0IHRvZG9TaWducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC50b2RvU2lnbmApO1xyXG4gICAgdG9kb1NpZ25zLmZvckVhY2goaXRlbXMgPT4ge1xyXG4gICAgICAgIGl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmaWxsU2lnblRvZG9GbmMpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUb2RvKCkge1xyXG4gICAgY29uc3QgdG9kb0RlbGV0ZUJ0bkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRGVsZXRlQnRuJyk7XHJcbiAgICB0b2RvRGVsZXRlQnRuQWxsLmZvckVhY2goKGRlbGV0ZUFsbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBkZWxldGVBbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgICAgb2JqLnNpa2Uuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvYmouc2lrZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyBFZGl0IEJ1dHRvbiBGdW5jdGlvbmFsaXR5IFN0YXJ0aW5nXHJcbmZ1bmN0aW9uIGVuYWJsZUVkaXRCdG4oKSB7XHJcbiAgICAvLyBFbmFibGUgYWxsIHRoZSBlZGl0IGJ1dHRvbiB1bnRpbCB0aGUgY2xlYXJCdG5FZGl0IGlzIHByZXNzZWQgW0ZvciBjYW5jZWwgZWRpdCBsb2cgYWJvdmVdXHJcbiAgICBjb25zdCB0b2RvRWRpdEJ0bkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRWRpdEJ0bicpO1xyXG4gICAgdG9kb0VkaXRCdG5BbGwuZm9yRWFjaChpc1RvZG9FZGl0Q2xpY2tlZCA9PiB7XHJcbiAgICAgICAgaXNUb2RvRWRpdENsaWNrZWQuZGlzYWJsZWQgPSBmYWxzZTsgLy8gZGlzYWJsZSB0b2RvRWRpdEJ0biBcclxuICAgICAgICBpc1RvZG9FZGl0Q2xpY2tlZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvbkNsaWNrRWRpdFRvZG9NYWluU3R5bGUnKTsgLy8gcmVtb3ZlcyB0b2RvTWFpbiBCb3JkZXIgYW5kIEJHQ29sb3IgXHJcbiAgICAgICAgc3RhdHVzUHJpb3JpdHlDb2xvcigpOyAvLyBkaXNwbGF5IHRoZSBjb3JyZWN0IGNvbG9yIGZvciB0aGUgc3RhdHVzXHJcbiAgICAgICAgY2xlYXJWYWx1ZUVkaXQoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZG9FZGl0Q2FuY2VsKCkge1xyXG4gICAgY2FuY2VsQnRuRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgICAgZWRpdFRvZG8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBjb25zdCB0b2RvRGV0YWlsc0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvRGV0YWlscycpO1xyXG4gICAgICAgIHRvZG9EZXRhaWxzQWxsLmZvckVhY2goaXRlbXMgPT4ge1xyXG4gICAgICAgICAgICBpdGVtcy5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZW5hYmxlRWRpdEJ0bigpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVRvZG9FYWNoQWZ0ZXJFZGl0KGUpIHtcclxuICAgIGNvbnN0IHNhdmVCdG5FZGl0VmFyaWFibGUgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbOV0uY2hpbGROb2Rlc1sxXTsvLyBzZWxlY3RzIHNhdmVCdG5FZGl0XHJcbiAgICBzYXZlQnRuRWRpdFZhcmlhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChuYW1lQnRuRWRpdC52YWx1ZSA9PT0gXCJcIiB8fCBkZXNjcmlwdGlvbkJ0bkVkaXQudmFsdWUgPT09IFwiXCIgfHwgZGF0ZUJ0bkVkaXQudmFsdWUgPT09IFwiXCIgfHwgc3RhdHVzQnRuRWRpdC52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAvLyBIVE1MIHJlcXVpcmVkIGZpZWxkIHdpbGwgc2hvd1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBjb25zdCBkYXRlQnRuSW5kaWFuRm9ybWF0ID0gZGF0ZUJ0bkVkaXQudmFsdWUuc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLScpO1xyXG4gICAgICAgICAgICBhZGRUb2RvRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgIGVkaXRUb2RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJvcmRlciA9ICdub25lJzsgIC8vIHNlbGVjdHMgZGV0YWlscyB3aXRoIHJlc3BlY3QgdG8gZWRpdEJ0blxyXG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDIzMCwgMjMwLCAyMzApJzsgIC8vIHNlbGVjdHMgZGV0YWlscyB3aXRoIHJlc3BlY3QgdG8gZWRpdEJ0blxyXG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnOyAgLy8gc2VsZWN0cyBkZXRhaWxzXHJcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9IGAke25hbWVCdG5FZGl0LnZhbHVlfWA7XHJcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSBgJHtkZXNjcmlwdGlvbkJ0bkVkaXQudmFsdWV9YDtcclxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudCA9IGRhdGVCdG5JbmRpYW5Gb3JtYXQ7XHJcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbM10udGV4dENvbnRlbnQgPSBgJHtzdGF0dXNCdG5FZGl0LnZhbHVlfWA7XHJcbiAgICAgICAgICAgIGVuYWJsZUVkaXRCdG4oKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIGVkaXRUb2RvRWFjaCgpIHtcclxuICAgIGNvbnN0IHRvZG9FZGl0QnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9FZGl0QnRuJyk7XHJcbiAgICB0b2RvRWRpdEJ0bkFsbC5mb3JFYWNoKChpdGVtcywgaW5kZXgpID0+IHsgLy8gaW5kZXggcGFyYW1ldGVyIGdldCB0aGUgaW5kZXggcG9zaXRpb24gb2YgdGhlIG5vZGVMaXN0W29mIGVhY2ggdG9kb0VkaXRCdG4gZnJvbSB0b2RvRWRpdEJ0bkFsbCBdXHJcbiAgICAgICAgaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb25DbGlja0VkaXRUb2RvTWFpblN0eWxlJyk7XHJcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgIC8vIHNlbGVjdHMgZGV0YWlscyB3aXRoIHJlc3BlY3QgdG8gZWRpdEJ0blxyXG4gICAgICAgICAgICBlZGl0VG9kby5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kKGVkaXRUb2RvKTsgLy8gZGlzcGxheSBlZGl0VUkgb24gZWRpdCBjbGlja1xyXG4gICAgICAgICAgICAvLyBEaXNhYmxlIGFsbCB0aGUgZWRpdCBidXR0b24gdW50aWwgdGhlIHNhdmVCdG5FZGl0IGlzIHByZXNzZWQgW0ZvciBjYW5jZWxFZGl0IGZ1bmN0aW9uIGFib3ZlXVxyXG4gICAgICAgICAgICB0b2RvRWRpdEJ0bkFsbC5mb3JFYWNoKGlzVG9kb0VkaXRDbGlja2VkID0+IHtcclxuICAgICAgICAgICAgICAgIGlzVG9kb0VkaXRDbGlja2VkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNhdmVUb2RvRWFjaEFmdGVyRWRpdChlLCBpbmRleCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIGZvY3VzIHRoZSBuYW1lIHdoZW4gY2xpY2tlZCBbdXNlZCBhdXRvZm9jdXMgcHJvcGVydHkgb24gdGhlIGh0bWwgZWxlbWVudF1cclxuICAgICAgICAgICAgbmFtZUJ0bkVkaXQuZm9jdXMoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZG9FZGl0Q2FuY2VsKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyBFZGl0IEJ1dHRvbiBGdW5jdGlvbmFsaXR5IEVuZGluZ1xyXG5cclxuZnVuY3Rpb24gdG9kb1JlbmRlcigpIHtcclxuICAgIHRvZG9VSUNyZWF0ZSgpOyAgLy8gZnJvbSBlYWNoVG9kb0l0ZW0uanNcclxuICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gYCR7b2JqLnNpa2VbMF0udGl0bGV9YDtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke29iai5zaWtlWzBdLmRlc2NyaXB0aW9ufWA7XHJcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGAke29iai5zaWtlWzBdLmRhdGV9YDtcclxuICAgIHRvZG9TdGF0dXMudGV4dENvbnRlbnQgPSBgJHtvYmouc2lrZVswXS5zdGF0dXN9YDtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHByZWRlZmluZWRUb2RvSW5wdXQoKSB7XHJcbiAgICBjb25zdCBsaXN0SXRlbVR3byA9IG5ldyBUb2RvQ2xhc3MoJ0xpb25lbCBNZXNzaScsICdUaGUgR09BVCcsICcyNC0wNi0xOTg3JywgJ0hpZ2gnKTtcclxuICAgIG9iai5zaWtlLnVuc2hpZnQobGlzdEl0ZW1Ud28pO1xyXG4gICAgLy8gdG9kbyBGdW5jdGlvbmFsaXR5ICEtXHJcbiAgICB0b2RvUmVuZGVyKCk7XHJcbiAgICBtaW5pbWl6ZVRvZG9EZXRhaWxzKCk7XHJcbiAgICBmaWxsU2lnblRvZG8oKTtcclxuICAgIHJlbW92ZVRvZG8oKTtcclxuICAgIGVkaXRUb2RvRWFjaCgpO1xyXG4gICAgc3RhdHVzUHJpb3JpdHlDb2xvcigpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdXNlckNyZWF0ZVRvZG9JbnB1dCgpIHtcclxuICAgIGNvbnN0IGRhdGVCdG5JbmRpYW5Gb3JtYXQgPSBkYXRlQnRuLnZhbHVlLnNwbGl0KCctJykucmV2ZXJzZSgpLmpvaW4oJy0nKTtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gbmV3IFRvZG9DbGFzcyhuYW1lQnRuLnZhbHVlLCBkZXNjcmlwdGlvbkJ0bi52YWx1ZSwgZGF0ZUJ0bkluZGlhbkZvcm1hdCwgc3RhdHVzQnRuLnZhbHVlKTtcclxuICAgIG9iai5zaWtlLnVuc2hpZnQobGlzdEl0ZW0pO1xyXG4gICAgdG9kb1JlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlVG9kbygpIHtcclxuICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAobmFtZUJ0bi52YWx1ZSA9PT0gXCJcIiB8fCBkZXNjcmlwdGlvbkJ0bi52YWx1ZSA9PT0gXCJcIiB8fCBkYXRlQnRuLnZhbHVlID09PSBcIlwiIHx8IHN0YXR1c0J0bi52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAvLyBIVE1MIHJlcXVpcmVkIGZpZWxkIHdpbGwgc2hvd1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBhZGRUb2RvRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgIGFkZFRvZG9Db25maXJtYXRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgdXNlckNyZWF0ZVRvZG9JbnB1dCgpO1xyXG4gICAgICAgICAgICBtaW5pbWl6ZVRvZG9EZXRhaWxzKCk7XHJcbiAgICAgICAgICAgIGZpbGxTaWduVG9kbygpO1xyXG4gICAgICAgICAgICByZW1vdmVUb2RvKCk7XHJcbiAgICAgICAgICAgIGVkaXRUb2RvRWFjaCgpO1xyXG4gICAgICAgICAgICBjbGlja1RvZG9MaXN0T3JHcmlkU3R5bGUoKTtcclxuICAgICAgICAgICAgc3RhdHVzUHJpb3JpdHlDb2xvcigpO1xyXG4gICAgICAgICAgICBjbGVhclZhbHVlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iai5zaWtlKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5wcmVkZWZpbmVkVG9kb0lucHV0KCk7XHJcbnNhdmVUb2RvKCk7XHJcbmFkZEl0ZW1CdG4oKTtcclxuc29ydFRvZG9MaXN0T3JHcmlkU3R5bGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=