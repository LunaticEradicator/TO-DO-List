"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/components/addItem.js":
/*!***********************************!*\
  !*** ./src/components/addItem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateBtn: () => (/* binding */ dateBtn),
/* harmony export */   descriptionBtn: () => (/* binding */ descriptionBtn),
/* harmony export */   nameBtn: () => (/* binding */ nameBtn),
/* harmony export */   saveBtn: () => (/* binding */ saveBtn),
/* harmony export */   statusBtn: () => (/* binding */ statusBtn)
/* harmony export */ });
const nameBtn = document.querySelector('.nameBtn');
const descriptionBtn = document.querySelector('.descriptionBtn');
const dateBtn = document.querySelector('.dateBtn');
const saveBtn = document.querySelector('.saveBtn');
const statusBtn = document.querySelector('.statusBtn');


/***/ }),

/***/ "./src/components/eachTodoItem.js":
/*!****************************************!*\
  !*** ./src/components/eachTodoItem.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodoConfirmation: () => (/* reexport safe */ _htmlElement__WEBPACK_IMPORTED_MODULE_0__.addTodoConfirmation),
/* harmony export */   "default": () => (/* binding */ todoUICreate),
/* harmony export */   editTodo: () => (/* binding */ editTodo),
/* harmony export */   todoDate: () => (/* binding */ todoDate),
/* harmony export */   todoDeleteBtn: () => (/* binding */ todoDeleteBtn),
/* harmony export */   todoDescription: () => (/* binding */ todoDescription),
/* harmony export */   todoDetails: () => (/* binding */ todoDetails),
/* harmony export */   todoEditBtn: () => (/* binding */ todoEditBtn),
/* harmony export */   todoIcon: () => (/* binding */ todoIcon),
/* harmony export */   todoMain: () => (/* binding */ todoMain),
/* harmony export */   todoMinimizeBtn: () => (/* binding */ todoMinimizeBtn),
/* harmony export */   todoName: () => (/* binding */ todoName),
/* harmony export */   todoSign: () => (/* binding */ todoSign),
/* harmony export */   todoStatus: () => (/* binding */ todoStatus)
/* harmony export */ });
/* harmony import */ var _htmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElement */ "./src/components/htmlElement.js");

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
const sectionThree = document.createElement("div");
const arrangeStyle = document.querySelector(".arrangeStyle");
const editTodo = document.querySelector(".editTodo");
function todoUICreate() {
  todoMain = document.createElement("div");
  todoDetails = document.createElement("div");
  todoNameDiv = document.createElement("div");
  todoSign = document.createElement("div");
  todoName = document.createElement("div");
  todoDescription = document.createElement("div");
  todoStatus = document.createElement("div");
  todoDate = document.createElement("div");
  todoIcon = document.createElement("div");
  todoDeleteBtn = document.createElement("button");
  todoMinimizeBtn = document.createElement("button");
  todoEditBtn = document.createElement("button");
  sectionThree.classList.add("sectionThree");
  todoMain.classList.add("todoMain");
  todoDetails.classList.add("todoDetails");
  todoNameDiv.classList.add("todoNameDiv");
  todoSign.classList.add("todoSign");
  todoName.classList.add("todoName");
  todoDescription.classList.add("todoDescription");
  todoStatus.classList.add("todoStatus");
  todoDate.classList.add("todoDate");
  todoIcon.classList.add("todoIcon");
  todoDeleteBtn.classList.add("todoDeleteBtn");
  todoMinimizeBtn.classList.add("todoMinimizeBtn");
  todoMinimizeBtn.textContent = "Minimize";
  todoEditBtn.classList.add("todoEditBtn");
  // todoEditBtn.textContent = 'Edit';

  todoDeleteBtn.textContent = "";
  todoDetails.append(todoSign, todoNameDiv, todoDescription, todoDate, todoStatus, todoIcon);
  todoNameDiv.append(todoSign, todoName);
  todoIcon.append(todoDeleteBtn, todoEditBtn, todoMinimizeBtn);
  todoMain.append(todoDetails);
  arrangeStyle.append(sectionThree);
  sectionThree.prepend(_htmlElement__WEBPACK_IMPORTED_MODULE_0__.addTodoConfirmation);
  sectionThree.prepend(_htmlElement__WEBPACK_IMPORTED_MODULE_0__.addTodoDiv);
  sectionThree.prepend(editTodo);
  sectionThree.append(todoMain);
}


/***/ }),

/***/ "./src/components/htmlElement.js":
/*!***************************************!*\
  !*** ./src/components/htmlElement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodoBtn: () => (/* binding */ addTodoBtn),
/* harmony export */   addTodoConfirmation: () => (/* binding */ addTodoConfirmation),
/* harmony export */   addTodoDiv: () => (/* binding */ addTodoDiv),
/* harmony export */   cancelBtn: () => (/* binding */ cancelBtn),
/* harmony export */   cancelBtnEdit: () => (/* binding */ cancelBtnEdit),
/* harmony export */   dateBtnEdit: () => (/* binding */ dateBtnEdit),
/* harmony export */   descriptionBtnEdit: () => (/* binding */ descriptionBtnEdit),
/* harmony export */   gridIcon: () => (/* binding */ gridIcon),
/* harmony export */   listIcon: () => (/* binding */ listIcon),
/* harmony export */   nameBtnEdit: () => (/* binding */ nameBtnEdit),
/* harmony export */   statusBtnEdit: () => (/* binding */ statusBtnEdit)
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/htmlElement */ "./src/components/htmlElement.js");
/* harmony import */ var _components_addItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/addItem */ "./src/components/addItem.js");
/* harmony import */ var _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/eachTodoItem */ "./src/components/eachTodoItem.js");




const LOCAL_STORAGE_LIST_KEY = "obj.sike";
let isTodoListOrGridStyle;
const obj = {
  sike: JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [],
  currentStatus: ""
};
class TodoClass {
  constructor(title, description, date, status) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.status = status;
  }
}
function todoAddCancel() {
  _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.cancelBtn.addEventListener("click", e => {
    _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoConfirmation.style.display = "none";
    _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = "flex";
  });
}
function addItemBtn() {
  _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoBtn.addEventListener("click", () => {
    _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = "none";
    _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoConfirmation.style.display = "grid";
    _components_addItem__WEBPACK_IMPORTED_MODULE_2__.nameBtn.focus(); // adds cursor when addBtn is pressed;
    todoAddCancel();
  });
}
function statusPriorityColor() {
  const todoStatusAll = document.querySelectorAll(".todoStatus");
  todoStatusAll.forEach(selected => {
    obj.currentStatus = selected.textContent;
    /* eslint-disable */
    console.log(...oo_oo(`8f0ee64a_0`, obj.currentStatus));
    if (selected.textContent === "High") {
      selected.style.color = "red";
    } else if (selected.textContent === "Low") {
      selected.style.color = "Blue";
    } else if (selected.textContent === "None") {
      selected.style.color = "Grey";
    }
  });
}
function clearValue() {
  _components_addItem__WEBPACK_IMPORTED_MODULE_2__.nameBtn.value = "";
  _components_addItem__WEBPACK_IMPORTED_MODULE_2__.descriptionBtn.value = "";
  _components_addItem__WEBPACK_IMPORTED_MODULE_2__.dateBtn.value = "";
  _components_addItem__WEBPACK_IMPORTED_MODULE_2__.statusBtn.value = "None";
}
function clearValueEdit() {
  _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.nameBtnEdit.value = "";
  _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.descriptionBtnEdit.value = "";
  _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.dateBtnEdit.value = "";
  _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.statusBtnEdit.value = "None";
}

// todoFunctionality !-

function sortTodoListOrGridStyle() {
  // Check for EventListener and create sorting order [grid or list]
  _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.listIcon.addEventListener("click", e => {
    isTodoListOrGridStyle = false;
    const todoMainAll = document.querySelectorAll(".todoMain");
    const todoDetailsAll = document.querySelectorAll(".todoDetails");
    const todoDescriptionAll = document.querySelectorAll(".todoDescription");
    const todoStatusAll = document.querySelectorAll(".todoStatus");
    const todoDateAll = document.querySelectorAll(".todoDate");
    const todoDeleteBtnAll = document.querySelectorAll(".todoDeleteBtn");
    const todoEditBtnAll = document.querySelectorAll(".todoEditBtn");
    todoMainAll.forEach(items => {
      items.classList.remove("onClickTodoMainShrink");
      if (!items.classList.contains(`onClickTodoMainShrink`)) {
        const todoMinimizeBtnAll = document.querySelectorAll(".todoMinimizeBtn");
        todoMinimizeBtnAll.forEach(btns => {
          btns.textContent = "Minimize";
        });
      }
    });
    todoDetailsAll.forEach(items => {
      items.classList.remove("onClickTodoDetailsShrink");
    });
    todoDescriptionAll.forEach(items => {
      items.classList.remove("onClickHideToDoDetails");
    });
    todoStatusAll.forEach(items => {
      items.classList.remove("onClickHideToDoDetails");
    });
    todoDateAll.forEach(items => {
      items.classList.remove("onClickTodoDate");
    });
    todoDeleteBtnAll.forEach(items => {
      items.classList.remove("onClickHideToDoDetails");
    });
    todoEditBtnAll.forEach(items => {
      items.classList.remove("onClickHideToDoDetails");
    });
  });
  _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.gridIcon.addEventListener("click", e => {
    isTodoListOrGridStyle = true;
    const todoMainAll = document.querySelectorAll(".todoMain");
    const todoDetailsAll = document.querySelectorAll(".todoDetails");
    const todoDescriptionAll = document.querySelectorAll(".todoDescription");
    const todoStatusAll = document.querySelectorAll(".todoStatus");
    const todoDateAll = document.querySelectorAll(".todoDate");
    const todoDeleteBtnAll = document.querySelectorAll(".todoDeleteBtn");
    const todoEditBtnAll = document.querySelectorAll(".todoEditBtn");
    todoMainAll.forEach(items => {
      items.classList.add("onClickTodoMainShrink");
      if (items.classList.contains(`onClickTodoMainShrink`)) {
        const todoMinimizeBtnAll = document.querySelectorAll(".todoMinimizeBtn");
        todoMinimizeBtnAll.forEach(btns => {
          // alert('contains')
          btns.textContent = "Maximize";
        });
      }
    });
    todoDetailsAll.forEach(items => {
      items.classList.add("onClickTodoDetailsShrink");
    });
    todoDescriptionAll.forEach(items => {
      items.classList.add("onClickHideToDoDetails");
    });
    todoStatusAll.forEach(items => {
      items.classList.add("onClickHideToDoDetails");
    });
    todoDateAll.forEach(items => {
      items.classList.add("onClickTodoDate");
    });
    todoDeleteBtnAll.forEach(items => {
      items.classList.add("onClickHideToDoDetails");
    });
    todoEditBtnAll.forEach(items => {
      items.classList.add("onClickHideToDoDetails");
    });
  });
}
function clickTodoListOrGridStyle() {
  // check if the user was clicked the sorting order [grid or list] and create the new Todo with the same style format
  if (isTodoListOrGridStyle === true) {
    _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoMinimizeBtn.textContent = "Maximize";
    _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoMain.classList.add("onClickTodoMainShrink");
    _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDetails.classList.add("onClickTodoDetailsShrink");
    _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDescription.classList.add("onClickHideToDoDetails");
    _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoStatus.classList.add("onClickHideToDoDetails");
    _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDate.classList.add("onClickTodoDate");
    _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDeleteBtn.classList.add("onClickHideToDoDetails");
    _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoEditBtn.classList.add("onClickHideToDoDetails");
  }
}
function minimizeTodoDetailsFnc(e) {
  e.currentTarget.parentNode.parentElement.parentElement.classList.toggle(`onClickTodoMainShrink`); // Selects todoMain
  e.currentTarget.parentElement.parentElement.classList.toggle("onClickTodoDetailsShrink"); // Selects todoDetails

  e.currentTarget.parentNode.parentElement.childNodes[1].classList.toggle("onClickHideToDoDetails"); // Selects todoDescription
  e.currentTarget.parentNode.parentElement.childNodes[2].classList.toggle("onClickTodoDate"); // Selects todoDate
  e.currentTarget.parentNode.parentElement.childNodes[3].classList.toggle("onClickHideToDoDetails"); // Selects todoStatus

  e.currentTarget.parentNode.childNodes[0].classList.toggle("onClickHideToDoDetails"); // Selects deleteBtn
  e.currentTarget.parentNode.childNodes[1].classList.toggle("onClickHideToDoDetails"); // Selects editBtn
  /* eslint-disable */
  console.log(...oo_oo(`8f0ee64a_1`, e.currentTarget.parentNode.parentElement));
  if (e.currentTarget.parentNode.parentElement.parentElement.classList.contains(`onClickTodoMainShrink`)) {
    e.currentTarget.parentNode.childNodes[2].textContent = "Maximize";
  } else {
    e.currentTarget.parentNode.childNodes[2].textContent = "Minimize";
  }
}
function minimizeTodoDetails() {
  _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoMinimizeBtn.addEventListener("click", minimizeTodoDetailsFnc);
}
function fillSignTodoFnc(e) {
  /* eslint-disable */console.log(...oo_oo(`8f0ee64a_2`, "click"));
  const eachMain = e.currentTarget.parentNode.parentElement.parentElement;
  if (e.currentTarget.classList.contains("onClickFillTodoSign")) {
    e.currentTarget.classList.remove("onClickFillTodoSign");
    eachMain.classList.remove("signStyle"); // selects main
    e.currentTarget.parentNode.parentElement.childNodes[4].childNodes[0].disabled = false;
    e.currentTarget.parentNode.parentElement.childNodes[4].childNodes[1].disabled = false;
    e.currentTarget.parentNode.parentElement.childNodes[4].childNodes[2].disabled = false;
  } else {
    e.currentTarget.classList.add("onClickFillTodoSign");
    eachMain.classList.add("signStyle"); // selects main
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
    items.addEventListener("click", fillSignTodoFnc);
  });
}
function removeTodo() {
  const todoDeleteBtnAll = document.querySelectorAll(".todoDeleteBtn");
  todoDeleteBtnAll.forEach((deleteAll, index) => {
    deleteAll.addEventListener("click", e => {
      /* eslint-disable */console.log(...oo_oo(`8f0ee64a_3`, index));
      obj.sike.splice(index, 1);
      e.currentTarget.parentNode.parentElement.parentElement.remove();
      /* eslint-disable */
      console.log(...oo_oo(`8f0ee64a_4`, obj.sike));
    });
  });
}

// Edit Button Functionality Starting
function enableEditBtn() {
  // Enable all the edit button until the clearBtnEdit is pressed [For cancel edit log above]
  const todoEditBtnAll = document.querySelectorAll(".todoEditBtn");
  todoEditBtnAll.forEach(isTodoEditClicked => {
    isTodoEditClicked.disabled = false; // disable todoEditBtn
    isTodoEditClicked.parentElement.parentElement.parentElement.classList.remove("onClickEditTodoMainStyle"); // removes todoMain Border and BGColor
    statusPriorityColor(); // display the correct color for the status
    clearValueEdit();
  });
}
function todoEditCancel() {
  _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.cancelBtnEdit.addEventListener("click", e => {
    _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.editTodo.style.display = "none";
    const todoDetailsAll = document.querySelectorAll(".todoDetails");
    todoDetailsAll.forEach(items => {
      items.style.display = "grid";
    });
    enableEditBtn();
  });
}
function saveTodoEachAfterEdit(e) {
  const saveBtnEditVariable = e.currentTarget.parentNode.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[9].childNodes[1]; // selects saveBtnEdit
  saveBtnEditVariable.addEventListener("click", event => {
    if (_components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.nameBtnEdit.value === "" || _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.descriptionBtnEdit.value === "" || _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.dateBtnEdit.value === "" || _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.statusBtnEdit.value === "") {
      // HTML required field will show
    } else {
      event.preventDefault();
      const dateBtnIndianFormat = _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.dateBtnEdit.value.split("-").reverse().join("-");
      _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = "flex";
      _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.editTodo.style.display = "none";
      event.currentTarget.parentNode.parentElement.parentElement.parentElement.parentElement.style.border = "none"; // selects details with respect to editBtn
      event.currentTarget.parentNode.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "rgb(230, 230, 230)"; // selects details with respect to editBtn
      event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].style.display = "grid"; // selects details
      event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[1].textContent = `${_components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.nameBtnEdit.value}`;
      event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].textContent = `${_components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.descriptionBtnEdit.value}`;
      event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[2].textContent = dateBtnIndianFormat;
      event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[3].textContent = `${_components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.statusBtnEdit.value}`;
      enableEditBtn();
    }
  });
}
function editTodoEach() {
  const todoEditBtnAll = document.querySelectorAll(".todoEditBtn");
  todoEditBtnAll.forEach((items, index) => {
    // index parameter get the index position of the nodeList[of each todoEditBtn from todoEditBtnAll ]
    items.addEventListener("click", e => {
      e.currentTarget.parentNode.parentElement.parentElement.classList.add("onClickEditTodoMainStyle");
      e.currentTarget.parentNode.parentElement.style.display = "none"; // selects details with respect to editBtn
      _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.editTodo.style.display = "grid";
      e.currentTarget.parentNode.parentElement.parentElement.append(_components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.editTodo); // display editUI on edit click
      // Disable all the edit button until the saveBtnEdit is pressed [For cancelEdit function above]
      todoEditBtnAll.forEach(isTodoEditClicked => {
        isTodoEditClicked.disabled = true;
        saveTodoEachAfterEdit(e, index);
      });
      // focus the name when clicked [used autofocus property on the html element]
      _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.nameBtnEdit.focus();
    });
    todoEditCancel();
  });
}

// Edit Button Functionality Ending

function todoRender() {
  (0,_components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__["default"])(); // from eachTodoItem.js
  _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoName.textContent = `${obj.sike[0].title}`;
  _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDescription.textContent = `${obj.sike[0].description}`;
  _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoDate.textContent = `${obj.sike[0].date}`;
  _components_eachTodoItem__WEBPACK_IMPORTED_MODULE_3__.todoStatus.textContent = `${obj.sike[0].status}`;
}
function predefinedTodoInput() {
  const listItemTwo = new TodoClass("Lionel Messi", "The GOAT", "24-06-1987", "High");
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
  const dateBtnIndianFormat = _components_addItem__WEBPACK_IMPORTED_MODULE_2__.dateBtn.value.split("-").reverse().join("-");
  const listItem = new TodoClass(_components_addItem__WEBPACK_IMPORTED_MODULE_2__.nameBtn.value, _components_addItem__WEBPACK_IMPORTED_MODULE_2__.descriptionBtn.value, dateBtnIndianFormat, _components_addItem__WEBPACK_IMPORTED_MODULE_2__.statusBtn.value);
  obj.sike.unshift(listItem);
  todoRender();
}
function saveTodo() {
  _components_addItem__WEBPACK_IMPORTED_MODULE_2__.saveBtn.addEventListener("click", () => {
    if (_components_addItem__WEBPACK_IMPORTED_MODULE_2__.nameBtn.value === "" || _components_addItem__WEBPACK_IMPORTED_MODULE_2__.descriptionBtn.value === "" || _components_addItem__WEBPACK_IMPORTED_MODULE_2__.dateBtn.value === "" || _components_addItem__WEBPACK_IMPORTED_MODULE_2__.statusBtn.value === "") {
      // HTML required field will show
    } else {
      event.preventDefault();
      _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoDiv.style.display = "flex";
      _components_htmlElement__WEBPACK_IMPORTED_MODULE_1__.addTodoConfirmation.style.display = "none";
      userCreateTodoInput();
      minimizeTodoDetails();
      fillSignTodo();
      removeTodo();
      editTodoEach();
      clickTodoListOrGridStyle();
      statusPriorityColor();
      clearValue();
      // console.log(obj.sike)
    }
  });
}

predefinedTodoInput();
saveTodo();
addItemBtn();
sortTodoListOrGridStyle();
/* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x43ccbf=_0x2152;(function(_0x25c98f,_0x10ed1d){var _0x52144e=_0x2152,_0x5afabd=_0x25c98f();while(!![]){try{var _0x4457f2=-parseInt(_0x52144e(0x17a))/0x1*(-parseInt(_0x52144e(0x12e))/0x2)+-parseInt(_0x52144e(0xd5))/0x3*(parseInt(_0x52144e(0xf6))/0x4)+parseInt(_0x52144e(0x170))/0x5*(-parseInt(_0x52144e(0x13f))/0x6)+-parseInt(_0x52144e(0x165))/0x7*(-parseInt(_0x52144e(0x17c))/0x8)+-parseInt(_0x52144e(0x161))/0x9*(parseInt(_0x52144e(0x11a))/0xa)+-parseInt(_0x52144e(0x19f))/0xb*(-parseInt(_0x52144e(0x14f))/0xc)+parseInt(_0x52144e(0x10e))/0xd*(parseInt(_0x52144e(0x16e))/0xe);if(_0x4457f2===_0x10ed1d)break;else _0x5afabd['push'](_0x5afabd['shift']());}catch(_0x2f962b){_0x5afabd['push'](_0x5afabd['shift']());}}}(_0x5750,0x4707b));var ue=Object['create'],te=Object['defineProperty'],he=Object[_0x43ccbf(0x12f)],le=Object['getOwnPropertyNames'],fe=Object[_0x43ccbf(0xdc)],_e=Object[_0x43ccbf(0xf7)][_0x43ccbf(0x1a3)],pe=(_0x32dd3e,_0x1a1024,_0x498694,_0x44a3b3)=>{var _0x4f2fb3=_0x43ccbf;if(_0x1a1024&&typeof _0x1a1024==_0x4f2fb3(0x194)||typeof _0x1a1024==_0x4f2fb3(0x198)){for(let _0x33370a of le(_0x1a1024))!_e[_0x4f2fb3(0x188)](_0x32dd3e,_0x33370a)&&_0x33370a!==_0x498694&&te(_0x32dd3e,_0x33370a,{'get':()=>_0x1a1024[_0x33370a],'enumerable':!(_0x44a3b3=he(_0x1a1024,_0x33370a))||_0x44a3b3[_0x4f2fb3(0x126)]});}return _0x32dd3e;},ne=(_0x5094e9,_0x271128,_0x365cee)=>(_0x365cee=_0x5094e9!=null?ue(fe(_0x5094e9)):{},pe(_0x271128||!_0x5094e9||!_0x5094e9[_0x43ccbf(0x120)]?te(_0x365cee,_0x43ccbf(0xca),{'value':_0x5094e9,'enumerable':!0x0}):_0x365cee,_0x5094e9)),Q=class{constructor(_0x49d2f0,_0x3462bf,_0x3bf87e,_0x3c5ba3){var _0xf7510d=_0x43ccbf;this[_0xf7510d(0xf4)]=_0x49d2f0,this[_0xf7510d(0x18b)]=_0x3462bf,this[_0xf7510d(0x141)]=_0x3bf87e,this[_0xf7510d(0xe4)]=_0x3c5ba3,this['_allowedToSend']=!0x0,this[_0xf7510d(0x177)]=!0x0,this[_0xf7510d(0x12d)]=!0x1,this['_connecting']=!0x1,this[_0xf7510d(0xd4)]=!!this['global'][_0xf7510d(0xc4)],this[_0xf7510d(0x199)]=null,this['_connectAttemptCount']=0x0,this[_0xf7510d(0x14c)]=0x14,this['_webSocketErrorDocsLink']=_0xf7510d(0x192),this[_0xf7510d(0x137)]=(this[_0xf7510d(0xd4)]?_0xf7510d(0x15e):_0xf7510d(0xfb))+this[_0xf7510d(0x181)];}async[_0x43ccbf(0x110)](){var _0x2b5205=_0x43ccbf;if(this[_0x2b5205(0x199)])return this[_0x2b5205(0x199)];let _0x389a68;if(this[_0x2b5205(0xd4)])_0x389a68=this[_0x2b5205(0xf4)]['WebSocket'];else{if(this[_0x2b5205(0xf4)][_0x2b5205(0x1ae)]?.[_0x2b5205(0xf9)])_0x389a68=this[_0x2b5205(0xf4)][_0x2b5205(0x1ae)]?.[_0x2b5205(0xf9)];else try{let _0x804472=await import(_0x2b5205(0x10f));_0x389a68=(await import((await import(_0x2b5205(0x146)))[_0x2b5205(0x168)](_0x804472[_0x2b5205(0x17f)](this['nodeModules'],_0x2b5205(0x13c)))[_0x2b5205(0x123)]()))[_0x2b5205(0xca)];}catch{try{_0x389a68=require(require(_0x2b5205(0x10f))[_0x2b5205(0x17f)](this[_0x2b5205(0xe4)],'ws'));}catch{throw new Error(_0x2b5205(0x179));}}}return this[_0x2b5205(0x199)]=_0x389a68,_0x389a68;}['_connectToHostNow'](){var _0x58fb26=_0x43ccbf;this[_0x58fb26(0x152)]||this[_0x58fb26(0x12d)]||this[_0x58fb26(0x17d)]>=this[_0x58fb26(0x14c)]||(this[_0x58fb26(0x177)]=!0x1,this[_0x58fb26(0x152)]=!0x0,this[_0x58fb26(0x17d)]++,this['_ws']=new Promise((_0x1ff128,_0x51507f)=>{var _0x1ba88d=_0x58fb26;this[_0x1ba88d(0x110)]()[_0x1ba88d(0x12a)](_0x1db853=>{var _0x52b511=_0x1ba88d;let _0x310206=new _0x1db853(_0x52b511(0x16b)+this['host']+':'+this[_0x52b511(0x141)]);_0x310206[_0x52b511(0x173)]=()=>{var _0x587291=_0x52b511;this[_0x587291(0x11d)]=!0x1,this[_0x587291(0xe6)](_0x310206),this[_0x587291(0x103)](),_0x51507f(new Error('logger\\x20websocket\\x20error'));},_0x310206[_0x52b511(0xe2)]=()=>{var _0x5795f6=_0x52b511;this['_inBrowser']||_0x310206[_0x5795f6(0x19c)]&&_0x310206['_socket'][_0x5795f6(0xc3)]&&_0x310206[_0x5795f6(0x19c)][_0x5795f6(0xc3)](),_0x1ff128(_0x310206);},_0x310206[_0x52b511(0x19d)]=()=>{var _0x5490e5=_0x52b511;this[_0x5490e5(0x177)]=!0x0,this[_0x5490e5(0xe6)](_0x310206),this[_0x5490e5(0x103)]();},_0x310206[_0x52b511(0x124)]=_0x21e196=>{var _0x38bee3=_0x52b511;try{_0x21e196&&_0x21e196[_0x38bee3(0x15d)]&&this[_0x38bee3(0xd4)]&&JSON[_0x38bee3(0xea)](_0x21e196[_0x38bee3(0x15d)])[_0x38bee3(0x113)]==='reload'&&this[_0x38bee3(0xf4)][_0x38bee3(0xef)][_0x38bee3(0x143)]();}catch{}};})[_0x1ba88d(0x12a)](_0x273561=>(this[_0x1ba88d(0x12d)]=!0x0,this[_0x1ba88d(0x152)]=!0x1,this[_0x1ba88d(0x177)]=!0x1,this[_0x1ba88d(0x11d)]=!0x0,this[_0x1ba88d(0x17d)]=0x0,_0x273561))['catch'](_0x11d5ad=>(this['_connected']=!0x1,this[_0x1ba88d(0x152)]=!0x1,console['warn'](_0x1ba88d(0x11c)+this[_0x1ba88d(0x181)]),_0x51507f(new Error(_0x1ba88d(0x18f)+(_0x11d5ad&&_0x11d5ad['message'])))));}));}['_disposeWebsocket'](_0x59fd1e){var _0x468fb=_0x43ccbf;this[_0x468fb(0x12d)]=!0x1,this[_0x468fb(0x152)]=!0x1;try{_0x59fd1e['onclose']=null,_0x59fd1e[_0x468fb(0x173)]=null,_0x59fd1e[_0x468fb(0xe2)]=null;}catch{}try{_0x59fd1e[_0x468fb(0x186)]<0x2&&_0x59fd1e[_0x468fb(0x15c)]();}catch{}}[_0x43ccbf(0x103)](){var _0x2c6d4f=_0x43ccbf;clearTimeout(this[_0x2c6d4f(0x16f)]),!(this[_0x2c6d4f(0x17d)]>=this[_0x2c6d4f(0x14c)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x1ffbf9=_0x2c6d4f;this['_connected']||this[_0x1ffbf9(0x152)]||(this[_0x1ffbf9(0xd3)](),this['_ws']?.['catch'](()=>this[_0x1ffbf9(0x103)]()));},0x1f4),this[_0x2c6d4f(0x16f)]['unref']&&this[_0x2c6d4f(0x16f)][_0x2c6d4f(0xc3)]());}async[_0x43ccbf(0xf8)](_0x236d2c){var _0x1b2497=_0x43ccbf;try{if(!this[_0x1b2497(0x11d)])return;this[_0x1b2497(0x177)]&&this[_0x1b2497(0xd3)](),(await this[_0x1b2497(0x117)])[_0x1b2497(0xf8)](JSON[_0x1b2497(0x13d)](_0x236d2c));}catch(_0x3ad953){console[_0x1b2497(0x196)](this[_0x1b2497(0x137)]+':\\x20'+(_0x3ad953&&_0x3ad953[_0x1b2497(0x19b)])),this[_0x1b2497(0x11d)]=!0x1,this[_0x1b2497(0x103)]();}}};function _0x2152(_0x4db430,_0x11a6a8){var _0x575054=_0x5750();return _0x2152=function(_0x215297,_0xb45fef){_0x215297=_0x215297-0xc3;var _0x452024=_0x575054[_0x215297];return _0x452024;},_0x2152(_0x4db430,_0x11a6a8);}function V(_0xc760b6,_0x380a46,_0x508716,_0x5e6b9c,_0x5e76d5){var _0x3977f1=_0x43ccbf;let _0x1d9d83=_0x508716['split'](',')[_0x3977f1(0xcd)](_0x3645ab=>{var _0xc12743=_0x3977f1;try{_0xc760b6[_0xc12743(0xdd)]||((_0x5e76d5==='next.js'||_0x5e76d5==='remix'||_0x5e76d5===_0xc12743(0xd9))&&(_0x5e76d5+=_0xc760b6[_0xc12743(0x1ae)]?.['versions']?.[_0xc12743(0x169)]?_0xc12743(0x118):_0xc12743(0xc8)),_0xc760b6[_0xc12743(0xdd)]={'id':+new Date(),'tool':_0x5e76d5});let _0x1c12bf=new Q(_0xc760b6,_0x380a46,_0x3645ab,_0x5e6b9c);return _0x1c12bf[_0xc12743(0xf8)][_0xc12743(0x1af)](_0x1c12bf);}catch(_0xa1a4ce){return console[_0xc12743(0x196)](_0xc12743(0x125),_0xa1a4ce&&_0xa1a4ce[_0xc12743(0x19b)]),()=>{};}});return _0x538ac6=>_0x1d9d83[_0x3977f1(0x1a9)](_0x218488=>_0x218488(_0x538ac6));}function H(_0x32ae85){var _0x11a3b7=_0x43ccbf;let _0x1f3b64=function(_0x149da1,_0x1cac4b){return _0x1cac4b-_0x149da1;},_0x21aac8;if(_0x32ae85[_0x11a3b7(0xed)])_0x21aac8=function(){var _0x6e4422=_0x11a3b7;return _0x32ae85[_0x6e4422(0xed)]['now']();};else{if(_0x32ae85['process']&&_0x32ae85[_0x11a3b7(0x1ae)]['hrtime'])_0x21aac8=function(){var _0x4f7240=_0x11a3b7;return _0x32ae85[_0x4f7240(0x1ae)][_0x4f7240(0x1b2)]();},_0x1f3b64=function(_0x63cd41,_0x93ea86){return 0x3e8*(_0x93ea86[0x0]-_0x63cd41[0x0])+(_0x93ea86[0x1]-_0x63cd41[0x1])/0xf4240;};else try{let {performance:_0x28d2ad}=require(_0x11a3b7(0xd6));_0x21aac8=function(){var _0x4aa65b=_0x11a3b7;return _0x28d2ad[_0x4aa65b(0x156)]();};}catch{_0x21aac8=function(){return+new Date();};}}return{'elapsed':_0x1f3b64,'timeStamp':_0x21aac8,'now':()=>Date[_0x11a3b7(0x156)]()};}function X(_0x470fde,_0x106540,_0x4b7463){var _0x23e2bd=_0x43ccbf;if(_0x470fde[_0x23e2bd(0x11e)]!==void 0x0)return _0x470fde[_0x23e2bd(0x11e)];let _0x1478fb=_0x470fde[_0x23e2bd(0x1ae)]?.[_0x23e2bd(0x10c)]?.['node'];return _0x1478fb&&_0x4b7463===_0x23e2bd(0xdb)?_0x470fde['_consoleNinjaAllowedToStart']=!0x1:_0x470fde[_0x23e2bd(0x11e)]=_0x1478fb||!_0x106540||_0x470fde[_0x23e2bd(0xef)]?.[_0x23e2bd(0x12c)]&&_0x106540[_0x23e2bd(0x1a0)](_0x470fde['location']['hostname']),_0x470fde[_0x23e2bd(0x11e)];}((_0x14a8cc,_0x349b6c,_0x3a9d4e,_0x4bbae2,_0x16f16c,_0x5dea60,_0x3e7faa,_0x38cbe4,_0x54a870)=>{var _0x512a37=_0x43ccbf;if(_0x14a8cc[_0x512a37(0x101)])return _0x14a8cc[_0x512a37(0x101)];if(!X(_0x14a8cc,_0x38cbe4,_0x16f16c))return _0x14a8cc[_0x512a37(0x101)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x14a8cc['_console_ninja'];let _0x16a222={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x1b0717={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x3ff222=H(_0x14a8cc),_0x3f5d2d=_0x3ff222[_0x512a37(0x151)],_0x399678=_0x3ff222[_0x512a37(0x107)],_0x4b9a61=_0x3ff222[_0x512a37(0x156)],_0x586ea4={'hits':{},'ts':{}},_0x57cf86=_0x2f9899=>{_0x586ea4['ts'][_0x2f9899]=_0x399678();},_0x509aac=(_0xf82d3a,_0x277446)=>{var _0x34b2a8=_0x512a37;let _0x32a8b3=_0x586ea4['ts'][_0x277446];if(delete _0x586ea4['ts'][_0x277446],_0x32a8b3){let _0x4fb729=_0x3f5d2d(_0x32a8b3,_0x399678());_0x172c75(_0x4a295a(_0x34b2a8(0x14b),_0xf82d3a,_0x4b9a61(),_0x2e9713,[_0x4fb729],_0x277446));}},_0x7e61e6=_0x30047a=>_0x58dc84=>{var _0x52dc3e=_0x512a37;try{_0x57cf86(_0x58dc84),_0x30047a(_0x58dc84);}finally{_0x14a8cc[_0x52dc3e(0x18a)][_0x52dc3e(0x14b)]=_0x30047a;}},_0x20f561=_0x74ebdc=>_0x130916=>{var _0x213736=_0x512a37;try{let [_0x27faef,_0x2af625]=_0x130916['split'](_0x213736(0x1a4));_0x509aac(_0x2af625,_0x27faef),_0x74ebdc(_0x27faef);}finally{_0x14a8cc[_0x213736(0x18a)]['timeEnd']=_0x74ebdc;}};_0x14a8cc[_0x512a37(0x101)]={'consoleLog':(_0xbeff1b,_0x3e26b5)=>{var _0xa256f1=_0x512a37;_0x14a8cc[_0xa256f1(0x18a)]['log'][_0xa256f1(0xe5)]!==_0xa256f1(0x13e)&&_0x172c75(_0x4a295a('log',_0xbeff1b,_0x4b9a61(),_0x2e9713,_0x3e26b5));},'consoleTrace':(_0x583ba7,_0x2c2950)=>{var _0x1c7d8b=_0x512a37;_0x14a8cc[_0x1c7d8b(0x18a)][_0x1c7d8b(0x112)][_0x1c7d8b(0xe5)]!==_0x1c7d8b(0x114)&&_0x172c75(_0x4a295a(_0x1c7d8b(0x115),_0x583ba7,_0x4b9a61(),_0x2e9713,_0x2c2950));},'consoleTime':()=>{var _0x936b2b=_0x512a37;_0x14a8cc[_0x936b2b(0x18a)][_0x936b2b(0x14b)]=_0x7e61e6(_0x14a8cc[_0x936b2b(0x18a)][_0x936b2b(0x14b)]);},'consoleTimeEnd':()=>{var _0x25c6c4=_0x512a37;_0x14a8cc['console'][_0x25c6c4(0x11b)]=_0x20f561(_0x14a8cc[_0x25c6c4(0x18a)][_0x25c6c4(0x11b)]);},'autoLog':(_0x49de73,_0x464a47)=>{var _0x4ff49c=_0x512a37;_0x172c75(_0x4a295a(_0x4ff49c(0x112),_0x464a47,_0x4b9a61(),_0x2e9713,[_0x49de73]));},'autoLogMany':(_0x4dfd04,_0x1cd3dd)=>{var _0x209c0c=_0x512a37;_0x172c75(_0x4a295a(_0x209c0c(0x112),_0x4dfd04,_0x4b9a61(),_0x2e9713,_0x1cd3dd));},'autoTrace':(_0x115074,_0x8ffda1)=>{var _0xd430a8=_0x512a37;_0x172c75(_0x4a295a(_0xd430a8(0x115),_0x8ffda1,_0x4b9a61(),_0x2e9713,[_0x115074]));},'autoTraceMany':(_0x587660,_0x11a0b9)=>{var _0x59cb41=_0x512a37;_0x172c75(_0x4a295a(_0x59cb41(0x115),_0x587660,_0x4b9a61(),_0x2e9713,_0x11a0b9));},'autoTime':(_0x5e6f88,_0x2b8ea4,_0x603ebf)=>{_0x57cf86(_0x603ebf);},'autoTimeEnd':(_0x310eee,_0x2b5459,_0x285c63)=>{_0x509aac(_0x2b5459,_0x285c63);}};let _0x172c75=V(_0x14a8cc,_0x349b6c,_0x3a9d4e,_0x4bbae2,_0x16f16c),_0x2e9713=_0x14a8cc['_console_ninja_session'];class _0x56130d{constructor(){var _0x40f114=_0x512a37;this[_0x40f114(0xf2)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x40f114(0x183)]=/^(0|[1-9][0-9]*)$/,this[_0x40f114(0xe1)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x14a8cc[_0x40f114(0x121)],this[_0x40f114(0x10d)]=_0x14a8cc[_0x40f114(0x1a1)],this['_getOwnPropertyDescriptor']=Object['getOwnPropertyDescriptor'],this[_0x40f114(0xf0)]=Object[_0x40f114(0x163)],this[_0x40f114(0x150)]=_0x14a8cc[_0x40f114(0x144)],this['_regExpToString']=RegExp[_0x40f114(0xf7)][_0x40f114(0x123)],this['_dateToString']=Date[_0x40f114(0xf7)][_0x40f114(0x123)];}['serialize'](_0x55a2bb,_0x1b6604,_0x287ba9,_0x2d9852){var _0x4d22f2=_0x512a37,_0x1662fa=this,_0x5b8312=_0x287ba9['autoExpand'];function _0xc5be16(_0x56900e,_0xc0b5c1,_0x4433fc){var _0x4b88ed=_0x2152;_0xc0b5c1['type']=_0x4b88ed(0x1aa),_0xc0b5c1[_0x4b88ed(0x10a)]=_0x56900e[_0x4b88ed(0x19b)],_0x609320=_0x4433fc[_0x4b88ed(0x169)]['current'],_0x4433fc[_0x4b88ed(0x169)][_0x4b88ed(0x157)]=_0xc0b5c1,_0x1662fa[_0x4b88ed(0xc5)](_0xc0b5c1,_0x4433fc);}if(_0x1b6604&&_0x1b6604[_0x4d22f2(0x116)])_0xc5be16(_0x1b6604,_0x55a2bb,_0x287ba9);else try{_0x287ba9[_0x4d22f2(0x13a)]++,_0x287ba9['autoExpand']&&_0x287ba9[_0x4d22f2(0x1ad)]['push'](_0x1b6604);var _0x2abf77,_0x179ba3,_0x437a71,_0x1f4318,_0x1f6b26=[],_0x512271=[],_0x406cf2,_0x252ae4=this[_0x4d22f2(0x13b)](_0x1b6604),_0x3e04a5=_0x252ae4===_0x4d22f2(0x1ac),_0x2abb0a=!0x1,_0x4828a1=_0x252ae4===_0x4d22f2(0x198),_0x34ff23=this['_isPrimitiveType'](_0x252ae4),_0x380607=this[_0x4d22f2(0x158)](_0x252ae4),_0x679d7f=_0x34ff23||_0x380607,_0x37a5d5={},_0x2e60f3=0x0,_0x2230f8=!0x1,_0x609320,_0x3acb99=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x287ba9[_0x4d22f2(0xd8)]){if(_0x3e04a5){if(_0x179ba3=_0x1b6604['length'],_0x179ba3>_0x287ba9['elements']){for(_0x437a71=0x0,_0x1f4318=_0x287ba9[_0x4d22f2(0x130)],_0x2abf77=_0x437a71;_0x2abf77<_0x1f4318;_0x2abf77++)_0x512271[_0x4d22f2(0x1a6)](_0x1662fa[_0x4d22f2(0x172)](_0x1f6b26,_0x1b6604,_0x252ae4,_0x2abf77,_0x287ba9));_0x55a2bb[_0x4d22f2(0xe9)]=!0x0;}else{for(_0x437a71=0x0,_0x1f4318=_0x179ba3,_0x2abf77=_0x437a71;_0x2abf77<_0x1f4318;_0x2abf77++)_0x512271[_0x4d22f2(0x1a6)](_0x1662fa[_0x4d22f2(0x172)](_0x1f6b26,_0x1b6604,_0x252ae4,_0x2abf77,_0x287ba9));}_0x287ba9['autoExpandPropertyCount']+=_0x512271[_0x4d22f2(0x155)];}if(!(_0x252ae4===_0x4d22f2(0x17e)||_0x252ae4===_0x4d22f2(0x121))&&!_0x34ff23&&_0x252ae4!=='String'&&_0x252ae4!==_0x4d22f2(0x14e)&&_0x252ae4!==_0x4d22f2(0x159)){var _0x5b1dce=_0x2d9852[_0x4d22f2(0x129)]||_0x287ba9[_0x4d22f2(0x129)];if(this[_0x4d22f2(0x180)](_0x1b6604)?(_0x2abf77=0x0,_0x1b6604[_0x4d22f2(0x1a9)](function(_0x1ec5f5){var _0x3a11b8=_0x4d22f2;if(_0x2e60f3++,_0x287ba9[_0x3a11b8(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;return;}if(!_0x287ba9[_0x3a11b8(0x160)]&&_0x287ba9[_0x3a11b8(0xde)]&&_0x287ba9[_0x3a11b8(0x154)]>_0x287ba9['autoExpandLimit']){_0x2230f8=!0x0;return;}_0x512271['push'](_0x1662fa[_0x3a11b8(0x172)](_0x1f6b26,_0x1b6604,_0x3a11b8(0xd0),_0x2abf77++,_0x287ba9,function(_0x2152a6){return function(){return _0x2152a6;};}(_0x1ec5f5)));})):this[_0x4d22f2(0xf3)](_0x1b6604)&&_0x1b6604['forEach'](function(_0x352abb,_0x150a02){var _0x1ee9a7=_0x4d22f2;if(_0x2e60f3++,_0x287ba9[_0x1ee9a7(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;return;}if(!_0x287ba9[_0x1ee9a7(0x160)]&&_0x287ba9['autoExpand']&&_0x287ba9['autoExpandPropertyCount']>_0x287ba9[_0x1ee9a7(0x1a7)]){_0x2230f8=!0x0;return;}var _0x1eaa85=_0x150a02['toString']();_0x1eaa85[_0x1ee9a7(0x155)]>0x64&&(_0x1eaa85=_0x1eaa85[_0x1ee9a7(0x1a5)](0x0,0x64)+_0x1ee9a7(0x131)),_0x512271[_0x1ee9a7(0x1a6)](_0x1662fa[_0x1ee9a7(0x172)](_0x1f6b26,_0x1b6604,'Map',_0x1eaa85,_0x287ba9,function(_0x3fcdd2){return function(){return _0x3fcdd2;};}(_0x352abb)));}),!_0x2abb0a){try{for(_0x406cf2 in _0x1b6604)if(!(_0x3e04a5&&_0x3acb99['test'](_0x406cf2))&&!this[_0x4d22f2(0xcc)](_0x1b6604,_0x406cf2,_0x287ba9)){if(_0x2e60f3++,_0x287ba9['autoExpandPropertyCount']++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;break;}if(!_0x287ba9[_0x4d22f2(0x160)]&&_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9[_0x4d22f2(0x154)]>_0x287ba9[_0x4d22f2(0x1a7)]){_0x2230f8=!0x0;break;}_0x512271[_0x4d22f2(0x1a6)](_0x1662fa['_addObjectProperty'](_0x1f6b26,_0x37a5d5,_0x1b6604,_0x252ae4,_0x406cf2,_0x287ba9));}}catch{}if(_0x37a5d5[_0x4d22f2(0x149)]=!0x0,_0x4828a1&&(_0x37a5d5[_0x4d22f2(0x128)]=!0x0),!_0x2230f8){var _0x142b7e=[]['concat'](this['_getOwnPropertyNames'](_0x1b6604))['concat'](this[_0x4d22f2(0xc6)](_0x1b6604));for(_0x2abf77=0x0,_0x179ba3=_0x142b7e[_0x4d22f2(0x155)];_0x2abf77<_0x179ba3;_0x2abf77++)if(_0x406cf2=_0x142b7e[_0x2abf77],!(_0x3e04a5&&_0x3acb99[_0x4d22f2(0x18d)](_0x406cf2[_0x4d22f2(0x123)]()))&&!this['_blacklistedProperty'](_0x1b6604,_0x406cf2,_0x287ba9)&&!_0x37a5d5[_0x4d22f2(0x104)+_0x406cf2['toString']()]){if(_0x2e60f3++,_0x287ba9[_0x4d22f2(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;break;}if(!_0x287ba9[_0x4d22f2(0x160)]&&_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9['autoExpandPropertyCount']>_0x287ba9['autoExpandLimit']){_0x2230f8=!0x0;break;}_0x512271[_0x4d22f2(0x1a6)](_0x1662fa['_addObjectProperty'](_0x1f6b26,_0x37a5d5,_0x1b6604,_0x252ae4,_0x406cf2,_0x287ba9));}}}}}if(_0x55a2bb[_0x4d22f2(0x162)]=_0x252ae4,_0x679d7f?(_0x55a2bb['value']=_0x1b6604[_0x4d22f2(0x153)](),this['_capIfString'](_0x252ae4,_0x55a2bb,_0x287ba9,_0x2d9852)):_0x252ae4===_0x4d22f2(0xe3)?_0x55a2bb[_0x4d22f2(0x1b4)]=this[_0x4d22f2(0xce)][_0x4d22f2(0x188)](_0x1b6604):_0x252ae4===_0x4d22f2(0x159)?_0x55a2bb[_0x4d22f2(0x1b4)]=_0x1b6604['toString']():_0x252ae4==='RegExp'?_0x55a2bb[_0x4d22f2(0x1b4)]=this[_0x4d22f2(0x1a8)][_0x4d22f2(0x188)](_0x1b6604):_0x252ae4==='symbol'&&this['_Symbol']?_0x55a2bb['value']=this[_0x4d22f2(0x150)][_0x4d22f2(0xf7)]['toString'][_0x4d22f2(0x188)](_0x1b6604):!_0x287ba9[_0x4d22f2(0xd8)]&&!(_0x252ae4===_0x4d22f2(0x17e)||_0x252ae4===_0x4d22f2(0x121))&&(delete _0x55a2bb[_0x4d22f2(0x1b4)],_0x55a2bb[_0x4d22f2(0x111)]=!0x0),_0x2230f8&&(_0x55a2bb[_0x4d22f2(0xfe)]=!0x0),_0x609320=_0x287ba9['node']['current'],_0x287ba9[_0x4d22f2(0x169)][_0x4d22f2(0x157)]=_0x55a2bb,this[_0x4d22f2(0xc5)](_0x55a2bb,_0x287ba9),_0x512271[_0x4d22f2(0x155)]){for(_0x2abf77=0x0,_0x179ba3=_0x512271['length'];_0x2abf77<_0x179ba3;_0x2abf77++)_0x512271[_0x2abf77](_0x2abf77);}_0x1f6b26[_0x4d22f2(0x155)]&&(_0x55a2bb[_0x4d22f2(0x129)]=_0x1f6b26);}catch(_0x86245e){_0xc5be16(_0x86245e,_0x55a2bb,_0x287ba9);}return this[_0x4d22f2(0x14d)](_0x1b6604,_0x55a2bb),this[_0x4d22f2(0xfd)](_0x55a2bb,_0x287ba9),_0x287ba9[_0x4d22f2(0x169)]['current']=_0x609320,_0x287ba9['level']--,_0x287ba9[_0x4d22f2(0xde)]=_0x5b8312,_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9[_0x4d22f2(0x1ad)][_0x4d22f2(0x106)](),_0x55a2bb;}['_getOwnPropertySymbols'](_0x5b3c9d){var _0x30ece4=_0x512a37;return Object[_0x30ece4(0xfa)]?Object[_0x30ece4(0xfa)](_0x5b3c9d):[];}[_0x512a37(0x180)](_0x20fa99){var _0x40165d=_0x512a37;return!!(_0x20fa99&&_0x14a8cc[_0x40165d(0xd0)]&&this[_0x40165d(0xda)](_0x20fa99)===_0x40165d(0xfc)&&_0x20fa99[_0x40165d(0x1a9)]);}[_0x512a37(0xcc)](_0x23da32,_0x5f9bbd,_0x5653eb){var _0x55ece4=_0x512a37;return _0x5653eb[_0x55ece4(0x139)]?typeof _0x23da32[_0x5f9bbd]=='function':!0x1;}[_0x512a37(0x13b)](_0x41aa7c){var _0x3a80d0=_0x512a37,_0x3391ea='';return _0x3391ea=typeof _0x41aa7c,_0x3391ea===_0x3a80d0(0x194)?this[_0x3a80d0(0xda)](_0x41aa7c)===_0x3a80d0(0x14a)?_0x3391ea='array':this[_0x3a80d0(0xda)](_0x41aa7c)===_0x3a80d0(0x19a)?_0x3391ea=_0x3a80d0(0xe3):this['_objectToString'](_0x41aa7c)===_0x3a80d0(0x108)?_0x3391ea='bigint':_0x41aa7c===null?_0x3391ea='null':_0x41aa7c[_0x3a80d0(0xdf)]&&(_0x3391ea=_0x41aa7c['constructor'][_0x3a80d0(0xe5)]||_0x3391ea):_0x3391ea===_0x3a80d0(0x121)&&this['_HTMLAllCollection']&&_0x41aa7c instanceof this[_0x3a80d0(0x10d)]&&(_0x3391ea=_0x3a80d0(0x1a1)),_0x3391ea;}[_0x512a37(0xda)](_0x152232){var _0x50db19=_0x512a37;return Object['prototype'][_0x50db19(0x123)]['call'](_0x152232);}[_0x512a37(0xc7)](_0x1e177c){var _0x1a7993=_0x512a37;return _0x1e177c===_0x1a7993(0x191)||_0x1e177c===_0x1a7993(0xec)||_0x1e177c==='number';}[_0x512a37(0x158)](_0x571b5b){var _0x2b3223=_0x512a37;return _0x571b5b===_0x2b3223(0x12b)||_0x571b5b==='String'||_0x571b5b==='Number';}[_0x512a37(0x172)](_0x1da961,_0x22304c,_0x293f1f,_0x3dc3b7,_0x1f8f7d,_0x3f521e){var _0x414591=this;return function(_0x294122){var _0xe2057a=_0x2152,_0x4caf4e=_0x1f8f7d['node']['current'],_0x17c538=_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xe8)],_0x1899c8=_0x1f8f7d[_0xe2057a(0x169)]['parent'];_0x1f8f7d[_0xe2057a(0x169)]['parent']=_0x4caf4e,_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xe8)]=typeof _0x3dc3b7==_0xe2057a(0x1b0)?_0x3dc3b7:_0x294122,_0x1da961['push'](_0x414591[_0xe2057a(0x10b)](_0x22304c,_0x293f1f,_0x3dc3b7,_0x1f8f7d,_0x3f521e)),_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xd7)]=_0x1899c8,_0x1f8f7d['node'][_0xe2057a(0xe8)]=_0x17c538;};}[_0x512a37(0xe0)](_0x49b9e5,_0x152fe1,_0x5aeb78,_0x361986,_0x4edf24,_0x2788bf,_0x319bf9){var _0x34d254=_0x512a37,_0x1d00e8=this;return _0x152fe1[_0x34d254(0x104)+_0x4edf24[_0x34d254(0x123)]()]=!0x0,function(_0x5d2cc){var _0x41493f=_0x34d254,_0x10d44d=_0x2788bf[_0x41493f(0x169)][_0x41493f(0x157)],_0x101fd9=_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)],_0x42de31=_0x2788bf['node'][_0x41493f(0xd7)];_0x2788bf['node'][_0x41493f(0xd7)]=_0x10d44d,_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)]=_0x5d2cc,_0x49b9e5[_0x41493f(0x1a6)](_0x1d00e8[_0x41493f(0x10b)](_0x5aeb78,_0x361986,_0x4edf24,_0x2788bf,_0x319bf9)),_0x2788bf[_0x41493f(0x169)][_0x41493f(0xd7)]=_0x42de31,_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)]=_0x101fd9;};}['_property'](_0xd82fc7,_0x5bfaa0,_0x5cce9b,_0x13c48a,_0x565628){var _0x1f86dc=_0x512a37,_0x377413=this;_0x565628||(_0x565628=function(_0xd2dc36,_0x437368){return _0xd2dc36[_0x437368];});var _0x58e1c9=_0x5cce9b[_0x1f86dc(0x123)](),_0x124f8e=_0x13c48a[_0x1f86dc(0x16a)]||{},_0x457a65=_0x13c48a['depth'],_0xe1ad95=_0x13c48a[_0x1f86dc(0x160)];try{var _0x4784ac=this[_0x1f86dc(0xf3)](_0xd82fc7),_0x35ea9b=_0x58e1c9;_0x4784ac&&_0x35ea9b[0x0]==='\\x27'&&(_0x35ea9b=_0x35ea9b[_0x1f86dc(0x175)](0x1,_0x35ea9b[_0x1f86dc(0x155)]-0x2));var _0x1caeb0=_0x13c48a[_0x1f86dc(0x16a)]=_0x124f8e[_0x1f86dc(0x104)+_0x35ea9b];_0x1caeb0&&(_0x13c48a[_0x1f86dc(0xd8)]=_0x13c48a['depth']+0x1),_0x13c48a['isExpressionToEvaluate']=!!_0x1caeb0;var _0x359faf=typeof _0x5cce9b==_0x1f86dc(0xee),_0x5c7fcb={'name':_0x359faf||_0x4784ac?_0x58e1c9:this[_0x1f86dc(0xd2)](_0x58e1c9)};if(_0x359faf&&(_0x5c7fcb[_0x1f86dc(0xee)]=!0x0),!(_0x5bfaa0==='array'||_0x5bfaa0===_0x1f86dc(0x176))){var _0x1c5970=this['_getOwnPropertyDescriptor'](_0xd82fc7,_0x5cce9b);if(_0x1c5970&&(_0x1c5970['set']&&(_0x5c7fcb[_0x1f86dc(0x142)]=!0x0),_0x1c5970['get']&&!_0x1caeb0&&!_0x13c48a['resolveGetters']))return _0x5c7fcb['getter']=!0x0,this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a),_0x5c7fcb;}var _0x2306a8;try{_0x2306a8=_0x565628(_0xd82fc7,_0x5cce9b);}catch(_0x4daa53){return _0x5c7fcb={'name':_0x58e1c9,'type':_0x1f86dc(0x1aa),'error':_0x4daa53[_0x1f86dc(0x19b)]},this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a),_0x5c7fcb;}var _0xc6538=this[_0x1f86dc(0x13b)](_0x2306a8),_0x26e7ca=this[_0x1f86dc(0xc7)](_0xc6538);if(_0x5c7fcb[_0x1f86dc(0x162)]=_0xc6538,_0x26e7ca)this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a,_0x2306a8,function(){var _0x5055ce=_0x1f86dc;_0x5c7fcb[_0x5055ce(0x1b4)]=_0x2306a8[_0x5055ce(0x153)](),!_0x1caeb0&&_0x377413[_0x5055ce(0x171)](_0xc6538,_0x5c7fcb,_0x13c48a,{});});else{var _0x1d990d=_0x13c48a['autoExpand']&&_0x13c48a['level']<_0x13c48a[_0x1f86dc(0x134)]&&_0x13c48a[_0x1f86dc(0x1ad)][_0x1f86dc(0x16c)](_0x2306a8)<0x0&&_0xc6538!==_0x1f86dc(0x198)&&_0x13c48a[_0x1f86dc(0x154)]<_0x13c48a[_0x1f86dc(0x1a7)];_0x1d990d||_0x13c48a[_0x1f86dc(0x13a)]<_0x457a65||_0x1caeb0?(this['serialize'](_0x5c7fcb,_0x2306a8,_0x13c48a,_0x1caeb0||{}),this[_0x1f86dc(0x14d)](_0x2306a8,_0x5c7fcb)):this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a,_0x2306a8,function(){var _0x14191b=_0x1f86dc;_0xc6538===_0x14191b(0x17e)||_0xc6538===_0x14191b(0x121)||(delete _0x5c7fcb[_0x14191b(0x1b4)],_0x5c7fcb['capped']=!0x0);});}return _0x5c7fcb;}finally{_0x13c48a[_0x1f86dc(0x16a)]=_0x124f8e,_0x13c48a[_0x1f86dc(0xd8)]=_0x457a65,_0x13c48a['isExpressionToEvaluate']=_0xe1ad95;}}[_0x512a37(0x171)](_0x180f90,_0x11d747,_0x154dd8,_0x21893f){var _0x56825e=_0x512a37,_0x176056=_0x21893f[_0x56825e(0x197)]||_0x154dd8['strLength'];if((_0x180f90===_0x56825e(0xec)||_0x180f90===_0x56825e(0xf5))&&_0x11d747[_0x56825e(0x1b4)]){let _0x1e705c=_0x11d747[_0x56825e(0x1b4)][_0x56825e(0x155)];_0x154dd8[_0x56825e(0x15f)]+=_0x1e705c,_0x154dd8[_0x56825e(0x15f)]>_0x154dd8[_0x56825e(0x132)]?(_0x11d747[_0x56825e(0x111)]='',delete _0x11d747[_0x56825e(0x1b4)]):_0x1e705c>_0x176056&&(_0x11d747[_0x56825e(0x111)]=_0x11d747[_0x56825e(0x1b4)]['substr'](0x0,_0x176056),delete _0x11d747[_0x56825e(0x1b4)]);}}[_0x512a37(0xf3)](_0x3a986b){var _0x2ef40b=_0x512a37;return!!(_0x3a986b&&_0x14a8cc[_0x2ef40b(0x138)]&&this['_objectToString'](_0x3a986b)===_0x2ef40b(0x136)&&_0x3a986b[_0x2ef40b(0x1a9)]);}[_0x512a37(0xd2)](_0x495bcf){var _0x252e7d=_0x512a37;if(_0x495bcf[_0x252e7d(0x184)](/^\\d+$/))return _0x495bcf;var _0x408928;try{_0x408928=JSON[_0x252e7d(0x13d)](''+_0x495bcf);}catch{_0x408928='\\x22'+this[_0x252e7d(0xda)](_0x495bcf)+'\\x22';}return _0x408928[_0x252e7d(0x184)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x408928=_0x408928['substr'](0x1,_0x408928[_0x252e7d(0x155)]-0x2):_0x408928=_0x408928[_0x252e7d(0x122)](/'/g,'\\x5c\\x27')[_0x252e7d(0x122)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x408928;}[_0x512a37(0x135)](_0x3ce327,_0xa05fc0,_0x285bd7,_0x298585){var _0x2e1b6b=_0x512a37;this[_0x2e1b6b(0xc5)](_0x3ce327,_0xa05fc0),_0x298585&&_0x298585(),this['_additionalMetadata'](_0x285bd7,_0x3ce327),this[_0x2e1b6b(0xfd)](_0x3ce327,_0xa05fc0);}[_0x512a37(0xc5)](_0x1df5cb,_0x1e600e){var _0x569524=_0x512a37;this[_0x569524(0xe7)](_0x1df5cb,_0x1e600e),this[_0x569524(0x195)](_0x1df5cb,_0x1e600e),this[_0x569524(0xc9)](_0x1df5cb,_0x1e600e),this[_0x569524(0x109)](_0x1df5cb,_0x1e600e);}[_0x512a37(0xe7)](_0x4a32d0,_0x365d19){}['_setNodeQueryPath'](_0x8e29ee,_0x1969db){}['_setNodeLabel'](_0x957f54,_0x3043fe){}[_0x512a37(0x174)](_0x4f244d){var _0x33306e=_0x512a37;return _0x4f244d===this[_0x33306e(0x1a2)];}['_treeNodePropertiesAfterFullValue'](_0x2f2d65,_0x5a7554){var _0x1a9648=_0x512a37;this[_0x1a9648(0xf1)](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x11f)](_0x2f2d65),_0x5a7554['sortProps']&&this[_0x1a9648(0x182)](_0x2f2d65),this['_addFunctionsNode'](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x15a)](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x145)](_0x2f2d65);}[_0x512a37(0x14d)](_0x218596,_0x39bb99){var _0xf711df=_0x512a37;try{_0x218596&&typeof _0x218596[_0xf711df(0x155)]==_0xf711df(0x1b0)&&(_0x39bb99['length']=_0x218596[_0xf711df(0x155)]);}catch{}if(_0x39bb99['type']===_0xf711df(0x1b0)||_0x39bb99[_0xf711df(0x162)]==='Number'){if(isNaN(_0x39bb99['value']))_0x39bb99[_0xf711df(0x148)]=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];else switch(_0x39bb99[_0xf711df(0x1b4)]){case Number[_0xf711df(0x18c)]:_0x39bb99[_0xf711df(0x105)]=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];break;case Number[_0xf711df(0x102)]:_0x39bb99['negativeInfinity']=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];break;case 0x0:this[_0xf711df(0x190)](_0x39bb99['value'])&&(_0x39bb99['negativeZero']=!0x0);break;}}else _0x39bb99[_0xf711df(0x162)]===_0xf711df(0x198)&&typeof _0x218596[_0xf711df(0xe5)]=='string'&&_0x218596[_0xf711df(0xe5)]&&_0x39bb99[_0xf711df(0xe5)]&&_0x218596[_0xf711df(0xe5)]!==_0x39bb99['name']&&(_0x39bb99[_0xf711df(0x15b)]=_0x218596['name']);}['_isNegativeZero'](_0x1878c3){return 0x1/_0x1878c3===Number['NEGATIVE_INFINITY'];}[_0x512a37(0x182)](_0x4f6bdc){var _0x54b436=_0x512a37;!_0x4f6bdc[_0x54b436(0x129)]||!_0x4f6bdc[_0x54b436(0x129)][_0x54b436(0x155)]||_0x4f6bdc['type']===_0x54b436(0x1ac)||_0x4f6bdc['type']==='Map'||_0x4f6bdc[_0x54b436(0x162)]==='Set'||_0x4f6bdc[_0x54b436(0x129)][_0x54b436(0x178)](function(_0x4410ef,_0x20e5af){var _0x157689=_0x54b436,_0x2f4682=_0x4410ef[_0x157689(0xe5)][_0x157689(0x1b3)](),_0x249a2f=_0x20e5af['name'][_0x157689(0x1b3)]();return _0x2f4682<_0x249a2f?-0x1:_0x2f4682>_0x249a2f?0x1:0x0;});}['_addFunctionsNode'](_0x3e4f0c,_0x16620d){var _0x3c491d=_0x512a37;if(!(_0x16620d['noFunctions']||!_0x3e4f0c[_0x3c491d(0x129)]||!_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x155)])){for(var _0x32424d=[],_0x11cbbe=[],_0x4fe7b4=0x0,_0x3d8d0c=_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x155)];_0x4fe7b4<_0x3d8d0c;_0x4fe7b4++){var _0x46c351=_0x3e4f0c[_0x3c491d(0x129)][_0x4fe7b4];_0x46c351[_0x3c491d(0x162)]===_0x3c491d(0x198)?_0x32424d['push'](_0x46c351):_0x11cbbe[_0x3c491d(0x1a6)](_0x46c351);}if(!(!_0x11cbbe[_0x3c491d(0x155)]||_0x32424d[_0x3c491d(0x155)]<=0x1)){_0x3e4f0c[_0x3c491d(0x129)]=_0x11cbbe;var _0x46d709={'functionsNode':!0x0,'props':_0x32424d};this['_setNodeId'](_0x46d709,_0x16620d),this[_0x3c491d(0xf1)](_0x46d709,_0x16620d),this[_0x3c491d(0x11f)](_0x46d709),this['_setNodePermissions'](_0x46d709,_0x16620d),_0x46d709['id']+='\\x20f',_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x119)](_0x46d709);}}}[_0x512a37(0x15a)](_0x309916,_0x31adc5){}[_0x512a37(0x11f)](_0x33c01d){}[_0x512a37(0xcf)](_0x2f14ed){var _0x29caf9=_0x512a37;return Array[_0x29caf9(0x19e)](_0x2f14ed)||typeof _0x2f14ed==_0x29caf9(0x194)&&this['_objectToString'](_0x2f14ed)===_0x29caf9(0x14a);}[_0x512a37(0x109)](_0x3d2b35,_0x5a2aae){}[_0x512a37(0x145)](_0x5e8749){var _0x1ec90c=_0x512a37;delete _0x5e8749[_0x1ec90c(0x189)],delete _0x5e8749[_0x1ec90c(0xcb)],delete _0x5e8749[_0x1ec90c(0x193)];}['_setNodeExpressionPath'](_0x3edd3c,_0x3e2e0c){}[_0x512a37(0x100)](_0x56cf6d){var _0x2cf63a=_0x512a37;return _0x56cf6d?_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0x183)])?'['+_0x56cf6d+']':_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0xf2)])?'.'+_0x56cf6d:_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0xe1)])?'['+_0x56cf6d+']':'[\\x27'+_0x56cf6d+'\\x27]':'';}}let _0xcb6255=new _0x56130d();function _0x4a295a(_0x50db00,_0x45daa5,_0xc5ab2d,_0x1fd4b8,_0xf9435f,_0x51a04f){var _0x4801b6=_0x512a37;let _0x40db4a,_0x1a3516;try{_0x1a3516=_0x399678(),_0x40db4a=_0x586ea4[_0x45daa5],!_0x40db4a||_0x1a3516-_0x40db4a['ts']>0x1f4&&_0x40db4a[_0x4801b6(0x166)]&&_0x40db4a[_0x4801b6(0x14b)]/_0x40db4a['count']<0x64?(_0x586ea4[_0x45daa5]=_0x40db4a={'count':0x0,'time':0x0,'ts':_0x1a3516},_0x586ea4[_0x4801b6(0x18e)]={}):_0x1a3516-_0x586ea4[_0x4801b6(0x18e)]['ts']>0x32&&_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]&&_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x14b)]/_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]<0x64&&(_0x586ea4[_0x4801b6(0x18e)]={});let _0x16b942=[],_0x37e208=_0x40db4a[_0x4801b6(0x140)]||_0x586ea4['hits'][_0x4801b6(0x140)]?_0x1b0717:_0x16a222,_0x4245e8=_0x4887f0=>{var _0x11e2ab=_0x4801b6;let _0x54b033={};return _0x54b033[_0x11e2ab(0x129)]=_0x4887f0['props'],_0x54b033[_0x11e2ab(0x130)]=_0x4887f0['elements'],_0x54b033[_0x11e2ab(0x197)]=_0x4887f0[_0x11e2ab(0x197)],_0x54b033[_0x11e2ab(0x132)]=_0x4887f0[_0x11e2ab(0x132)],_0x54b033[_0x11e2ab(0x1a7)]=_0x4887f0[_0x11e2ab(0x1a7)],_0x54b033[_0x11e2ab(0x134)]=_0x4887f0[_0x11e2ab(0x134)],_0x54b033['sortProps']=!0x1,_0x54b033[_0x11e2ab(0x139)]=!_0x54a870,_0x54b033[_0x11e2ab(0xd8)]=0x1,_0x54b033[_0x11e2ab(0x13a)]=0x0,_0x54b033['expId']=_0x11e2ab(0xd1),_0x54b033[_0x11e2ab(0x16d)]=_0x11e2ab(0x164),_0x54b033['autoExpand']=!0x0,_0x54b033[_0x11e2ab(0x1ad)]=[],_0x54b033[_0x11e2ab(0x154)]=0x0,_0x54b033[_0x11e2ab(0x1ab)]=!0x0,_0x54b033[_0x11e2ab(0x15f)]=0x0,_0x54b033[_0x11e2ab(0x169)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x54b033;};for(var _0x11df82=0x0;_0x11df82<_0xf9435f['length'];_0x11df82++)_0x16b942[_0x4801b6(0x1a6)](_0xcb6255[_0x4801b6(0x127)]({'timeNode':_0x50db00===_0x4801b6(0x14b)||void 0x0},_0xf9435f[_0x11df82],_0x4245e8(_0x37e208),{}));if(_0x50db00==='trace'){let _0x20f011=Error[_0x4801b6(0x133)];try{Error[_0x4801b6(0x133)]=0x1/0x0,_0x16b942[_0x4801b6(0x1a6)](_0xcb6255[_0x4801b6(0x127)]({'stackNode':!0x0},new Error()[_0x4801b6(0x147)],_0x4245e8(_0x37e208),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x20f011;}}return{'method':_0x4801b6(0x112),'version':_0x5dea60,'args':[{'ts':_0xc5ab2d,'session':_0x1fd4b8,'args':_0x16b942,'id':_0x45daa5,'context':_0x51a04f}]};}catch(_0x1c2ebd){return{'method':_0x4801b6(0x112),'version':_0x5dea60,'args':[{'ts':_0xc5ab2d,'session':_0x1fd4b8,'args':[{'type':_0x4801b6(0x1aa),'error':_0x1c2ebd&&_0x1c2ebd[_0x4801b6(0x19b)]}],'id':_0x45daa5,'context':_0x51a04f}]};}finally{try{if(_0x40db4a&&_0x1a3516){let _0x396f96=_0x399678();_0x40db4a[_0x4801b6(0x166)]++,_0x40db4a[_0x4801b6(0x14b)]+=_0x3f5d2d(_0x1a3516,_0x396f96),_0x40db4a['ts']=_0x396f96,_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]++,_0x586ea4[_0x4801b6(0x18e)]['time']+=_0x3f5d2d(_0x1a3516,_0x396f96),_0x586ea4[_0x4801b6(0x18e)]['ts']=_0x396f96,(_0x40db4a[_0x4801b6(0x166)]>0x32||_0x40db4a[_0x4801b6(0x14b)]>0x64)&&(_0x40db4a['reduceLimits']=!0x0),(_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]>0x3e8||_0x586ea4['hits']['time']>0x12c)&&(_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x140)]=!0x0);}}catch{}}}return _0x14a8cc[_0x512a37(0x101)];})(globalThis,_0x43ccbf(0xeb),_0x43ccbf(0x1b1),_0x43ccbf(0x167),_0x43ccbf(0x17b),'1.0.0',_0x43ccbf(0xff),_0x43ccbf(0x185),_0x43ccbf(0x187));function _0x5750(){var _0x51fcf3=['stringify','disabledLog','6iRzvQR','reduceLimits','port','setter','reload','Symbol','_cleanNode','url','stack','nan','_p_length','[object\\x20Array]','time','_maxConnectAttemptCount','_additionalMetadata','Buffer','36UGqKvx','_Symbol','elapsed','_connecting','valueOf','autoExpandPropertyCount','length','now','current','_isPrimitiveWrapperType','bigint','_addLoadNode','funcName','close','data','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','allStrLength','isExpressionToEvaluate','1912428peUkZS','type','getOwnPropertyNames','root_exp','70553MkwoTI','count',\"c:\\\\Users\\\\kuttu\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.182\\\\node_modules\",'pathToFileURL','node','expressionsToEvaluate','ws://','indexOf','rootExpression','2100Tdowba','_reconnectTimeout','1714945fcpOOS','_capIfString','_addProperty','onerror','_isUndefined','substr','Error','_allowedToConnectOnSend','sort','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','149XbESjE','webpack','272iXOgWY','_connectAttemptCount','null','join','_isSet','_webSocketErrorDocsLink','_sortProps','_numberRegExp','match',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-EQ9QPUR\",\"192.168.1.3\"],'readyState','','call','_hasSymbolPropertyOnItsPath','console','host','POSITIVE_INFINITY','test','hits','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_isNegativeZero','boolean','https://tinyurl.com/37x8b79t','_hasMapOnItsPath','object','_setNodeQueryPath','warn','strLength','function','_WebSocketClass','[object\\x20Date]','message','_socket','onclose','isArray','370469cMKCLB','includes','HTMLAllCollection','_undefined','hasOwnProperty',':logPointId:','slice','push','autoExpandLimit','_regExpToString','forEach','unknown','resolveGetters','array','autoExpandPreviousObjects','process','bind','number','49757','hrtime','toLowerCase','value','unref','WebSocket','_treeNodePropertiesBeforeFullValue','_getOwnPropertySymbols','_isPrimitiveType','\\x20browser','_setNodeExpressionPath','default','_hasSetOnItsPath','_blacklistedProperty','map','_dateToString','_isArray','Set','root_exp_id','_propertyName','_connectToHostNow','_inBrowser','1464558bwCIvl','perf_hooks','parent','depth','astro','_objectToString','nuxt','getPrototypeOf','_console_ninja_session','autoExpand','constructor','_addObjectProperty','_quotedRegExp','onopen','date','nodeModules','name','_disposeWebsocket','_setNodeId','index','cappedElements','parse','127.0.0.1','string','performance','symbol','location','_getOwnPropertyNames','_setNodeLabel','_keyStrRegExp','_isMap','global','String','4GKbUZr','prototype','send','_WebSocket','getOwnPropertySymbols','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','[object\\x20Set]','_treeNodePropertiesAfterFullValue','cappedProps','1689580263540','_propertyAccessor','_console_ninja','NEGATIVE_INFINITY','_attemptToReconnectShortly','_p_','positiveInfinity','pop','timeStamp','[object\\x20BigInt]','_setNodePermissions','error','_property','versions','_HTMLAllCollection','62140fBudxU','path','getWebSocketClass','capped','log','method','disabledTrace','trace','argumentResolutionError','_ws','\\x20server','unshift','10MoeyiJ','timeEnd','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_allowedToSend','_consoleNinjaAllowedToStart','_setNodeExpandableState','__es'+'Module','undefined','replace','toString','onmessage','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','enumerable','serialize','_p_name','props','then','Boolean','hostname','_connected','2334ykESxH','getOwnPropertyDescriptor','elements','...','totalStrLength','stackTraceLimit','autoExpandMaxDepth','_processTreeNodeResult','[object\\x20Map]','_sendErrorMessage','Map','noFunctions','level','_type','ws/index.js'];_0x5750=function(){return _0x51fcf3;};return _0x5750();}");
  } catch (e) {}
}
;
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
;
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
;
function oo_ts() {
  try {
    oo_cm().consoleTime();
  } catch (e) {}
}
;
function oo_te() {
  try {
    oo_cm().consoleTimeEnd();
  } catch (e) {}
}
; /*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/list.png */ "./src/assets/list.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/delete.svg */ "./src/assets/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/edit.svg */ "./src/assets/edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/grid.png */ "./src/assets/grid.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/add1.png */ "./src/assets/add1.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Itim&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --background-color: #141414;
  --button-color: rgb(42, 42, 43);
  --transition-time: 0.5s;
  --animation-details: confirmationAnimation 0.3s ease-in-out;
  --font-name: "Itim", cursive;
  --font-color: aliceblue;
}

body {
  /* font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */
  font-family: var(--font-name);
}

html,
body {
  font-family: var(--font-name);
  margin: 0px;
  color: #1f271b;
}

button {
  font-family: var(--font-name);
}

h1 {
  margin: 0;
  color: rgb(49, 182, 182);
  font-size: 3rem;
  text-align: center;
}

h2 {
  margin: 0;
}

form {
  display: flex;
  flex-direction: column;
  margin: 0;
  border: 2px solid rgba(1, 56, 15, 0.486);
  background-color: rgba(177, 176, 176, 0.452);
  font-family: var(--font-name);
}

form > div > input {
  border: none;
  font-size: 1rem;
  background: none;
  outline: none;
  transition: var(--transition-time);
  display: flex;
  flex-grow: 1;
  font-family: var(--font-name);
}

input[type=text] {
  font-weight: bold;
}

input[type=button] {
  border-radius: 10px;
  font-size: large;
  font-family: var(--font-name);
}

input[type=date] {
  cursor: text;
  font-family: var(--font-name);
}

select {
  cursor: text;
  font-family: var(--font-name);
  transition: var(--transition-time);
}

::placeholder {
  color: var(--button-color);
  opacity: 0.5;
  font-family: var(--font-name);
}

.modal {
  background-color: var(--background-color);
  border-radius: 10px;
  border: 2px solid aquamarine;
}

.content {
  display: flex;
  flex-direction: column;
}

.container {
  display: grid;
  grid-template-columns: 1fr 5fr;
  min-height: 100vh;
  background-color: black;
}

.sectionOne {
  margin: 5px;
  border-radius: 10px;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #b8b8aa;
}

.sectionTwo {
  margin: 5px;
  border-radius: 5px;
  border: 2px solid #b8b8aa;
  background-color: var(--background-color);
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.sectionThree {
  padding-left: 10px;
  padding-right: 10px;
  display: grid;
  font-size: 1.2rem;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
}

.arrangeStyle {
  min-height: 100vh;
  border: 2px solid rgba(1, 56, 15, 0.486);
  border-radius: 10px;
  background-color: whitesmoke;
}

.addTodoConfirmation {
  font-size: 1.2rem;
  gap: 5px;
  display: none;
  animation: var(--animation-details);
}

.dateDiv {
  text-align: center;
}

.saveBtnDiv {
  display: flex;
  flex: 1;
}

.saveBtn,
.saveBtnEdit {
  background-color: var(--button-color);
  color: var(--font-color);
  cursor: pointer;
  border: 1px solid rgb(161, 161, 161);
  border-radius: 10px;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 6px;
  transition: var(--transition-time);
}

.cancelBtn,
.cancelBtnEdit {
  background-color: rgb(243, 106, 96);
  color: var(--font-color);
  cursor: pointer;
  border: 1px solid rgb(161, 161, 161);
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 6px;
}

.statusBtn,
.statusBtnEdit {
  background-color: var(--button-color);
  color: var(--font-color);
  border-radius: 10px;
  padding: 5px;
}

.addItem {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  border-radius: 10px;
  padding: 0px;
  padding-left: 10px;
  align-items: center;
  gap: 5x;
}

.hud {
  display: flex;
  justify-content: end;
  gap: 5px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 10px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.todoMain {
  border-radius: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  background-color: rgba(200, 212, 203, 0.486);
  color: var(--background-color);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.521);
  transition: var(--transition-time);
}

.todoDetails {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  border-radius: 10px;
  padding-left: 10px;
}

.todoNameDiv {
  display: flex;
  align-items: center;
  gap: 5px;
}

.addTodoDiv {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(1, 56, 15, 0.486);
  background-color: var(--background-color);
  color: rgb(49, 182, 182);
  border-radius: 10px;
  padding-left: 5px;
  gap: 10px;
  cursor: pointer;
  transition: var(--transition-time);
}

.addTodoOnOff {
  height: 20px;
  width: 20px;
  display: flex;
  cursor: pointer;
  transition: var(--transition-time);
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/contain;
}

.addTodoBtn {
  all: unset;
  display: flex;
  font-size: 1.2rem;
  flex-grow: 1;
  font-weight: bold;
}

.todoSign {
  height: 18px;
  width: 18px;
  display: flex;
  cursor: pointer;
  border: 1px solid rgb(70, 68, 68);
  border-radius: 50%;
  background-color: var(--font-color);
  transition: var(--transition-time);
}

.todoIcon {
  display: flex;
  gap: 10px;
}

.todoDeleteBtn {
  all: unset;
  width: 30px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) center/contain no-repeat;
  cursor: pointer;
  transition: var(--transition-time);
}

.todoEditBtn {
  all: unset;
  width: 20px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) center/contain no-repeat;
  cursor: pointer;
  transition: var(--transition-time);
}

.imageSort {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.listIcon {
  all: unset;
  width: 30px;
  height: 30px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/contain no-repeat;
  cursor: pointer;
  transition: var(--transition-time);
}

.gridIcon {
  all: unset;
  width: 30px;
  height: 30px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) center/contain no-repeat;
  cursor: pointer;
  transition: var(--transition-time);
}

.todoMinimizeBtn {
  background-color: var(--button-color);
  border-radius: 10px;
  color: var(--font-color);
  cursor: pointer;
  text-align: center;
  transition: var(--transition-time);
}

/* onClick classList */
.onClickHideToDoDetails {
  display: none;
}

.onClickTodoDate {
  justify-content: end;
  display: flex;
  text-align: center;
}

.onClickSectionThreeShrink {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.onClickTodoMainShrink {
  background-color: rgb(223, 189, 189);
  border-radius: 10px;
  padding: 10px;
  width: 205px;
  animation: var(--animation-details);
}

.onClickTodoDetailsShrink {
  display: flex;
  flex-direction: column;
}

.onClickFillTodoSign {
  background-color: var(--button-color);
  border-color: white;
}

.onClickDefaultTodoSign {
  border: 1px solid rgb(70, 68, 68);
  background-color: var(--font-color);
}

.signStyle {
  background-color: rgba(0, 0, 0, 0.404);
  opacity: 0.2;
}

.editTodo {
  display: none;
}

.onClickEditTodoMainStyle {
  background-color: var(--font-color);
  border: none;
  box-shadow: none;
}

/* hover Section */
input[type=text]:focus {
  border-radius: 0px;
  font-family: var(--font-name);
  color: var(--font-color);
}

input[type=button]:hover {
  transform: scale(0.8);
}

select:hover {
  transform: scale(0.9);
}

.addTodoDiv:hover {
  background-color: var(--font-color);
  color: rgb(202, 165, 0);
  background-image: linear-gradient(to right, rgb(252, 252, 252), rgb(250, 237, 167));
  border: 2px solid rgb(230, 230, 230);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.todoSign:hover {
  background-color: rgb(178, 248, 86);
  opacity: 0.7;
}

.saveBtn:hover,
.saveBtnEdit:hover {
  transform: scale(0.8);
}

/* work only when onClickEditTodoMainStyle is not there  */
.todoMain:hover:not(.onClickEditTodoMainStyle) {
  transform: scale(0.98);
  border: none;
  background-color: rgba(134, 168, 143, 0.486);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.listIcon:hover,
.gridIcon:hover {
  transform: scale(1.2);
}

.addTodoDiv:hover > div {
  height: 20px;
  width: 20px;
  display: flex;
  cursor: pointer;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) center/contain;
}

.todoDeleteBtn:hover,
.todoEditBtn:hover {
  transform: scale(1.2);
  background-color: var(--font-color);
  border-radius: 5px;
}

.todoMinimizeBtn:hover {
  background-color: var(--font-color);
  color: black;
}

@keyframes confirmationAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`, "",{"version":3,"sources":["webpack://./src/sass/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Itim&display=swap\");\r\n\r\n:root {\r\n  --background-color: #141414;\r\n  --button-color: rgb(42, 42, 43);\r\n  --transition-time: 0.5s;\r\n  --animation-details: confirmationAnimation 0.3s ease-in-out;\r\n  --font-name: \"Itim\", cursive;\r\n  --font-color: aliceblue;\r\n}\r\n\r\nbody {\r\n  /* font-family: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; */\r\n  font-family: var(--font-name);\r\n}\r\n\r\nhtml,\r\nbody {\r\n  font-family: var(--font-name);\r\n  margin: 0px;\r\n  color: #1f271b;\r\n}\r\n\r\nbutton {\r\n  font-family: var(--font-name);\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  color: rgb(49, 182, 182);\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  margin: 0;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  border: 2px solid rgba(1, 56, 15, 0.486);\r\n  background-color: rgba(177, 176, 176, 0.452);\r\n  font-family: var(--font-name);\r\n}\r\n\r\nform > div > input {\r\n  border: none;\r\n  font-size: 1rem;\r\n  background: none;\r\n  outline: none;\r\n  transition: var(--transition-time);\r\n  display: flex;\r\n  flex-grow: 1;\r\n  font-family: var(--font-name);\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=\"button\"] {\r\n  border-radius: 10px;\r\n  font-size: large;\r\n  font-family: var(--font-name);\r\n}\r\n\r\ninput[type=\"date\"] {\r\n  cursor: text;\r\n  font-family: var(--font-name);\r\n}\r\n\r\nselect {\r\n  cursor: text;\r\n  font-family: var(--font-name);\r\n  transition: var(--transition-time);\r\n}\r\n\r\n::placeholder {\r\n  color: var(--button-color);\r\n  opacity: 0.5;\r\n  font-family: var(--font-name);\r\n}\r\n\r\n.modal {\r\n  background-color: var(--background-color);\r\n  border-radius: 10px;\r\n  border: 2px solid aquamarine;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr;\r\n  min-height: 100vh;\r\n  background-color: black;\r\n}\r\n\r\n.sectionOne {\r\n  margin: 5px;\r\n  border-radius: 10px;\r\n  background-color: var(--background-color);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 2px solid #b8b8aa;\r\n}\r\n\r\n.sectionTwo {\r\n  margin: 5px;\r\n  border-radius: 5px;\r\n  border: 2px solid #b8b8aa;\r\n  background-color: var(--background-color);\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n}\r\n\r\n.sectionThree {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  display: grid;\r\n  font-size: 1.2rem;\r\n  gap: 10px;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.arrangeStyle {\r\n  min-height: 100vh;\r\n  border: 2px solid rgba(1, 56, 15, 0.486);\r\n  border-radius: 10px;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.addTodoConfirmation {\r\n  font-size: 1.2rem;\r\n  gap: 5px;\r\n  display: none;\r\n  animation: var(--animation-details);\r\n}\r\n\r\n.dateDiv {\r\n  text-align: center;\r\n}\r\n\r\n.saveBtnDiv {\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\n.saveBtn,\r\n.saveBtnEdit {\r\n  background-color: var(--button-color);\r\n  color: var(--font-color);\r\n  cursor: pointer;\r\n  border: 1px solid rgb(161, 161, 161);\r\n  border-radius: 10px;\r\n  display: flex;\r\n  flex: 1;\r\n  justify-content: center;\r\n  padding: 6px;\r\n  transition: var(--transition-time);\r\n}\r\n\r\n.cancelBtn,\r\n.cancelBtnEdit {\r\n  background-color: rgb(243, 106, 96);\r\n  color: var(--font-color);\r\n  cursor: pointer;\r\n  border: 1px solid rgb(161, 161, 161);\r\n  display: flex;\r\n  flex: 1;\r\n  justify-content: center;\r\n  padding: 6px;\r\n}\r\n\r\n.statusBtn,\r\n.statusBtnEdit {\r\n  background-color: var(--button-color);\r\n  color: var(--font-color);\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n}\r\n\r\n.addItem {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n  border-radius: 10px;\r\n  padding: 0px;\r\n  padding-left: 10px;\r\n  align-items: center;\r\n  gap: 5x;\r\n}\r\n\r\n.hud {\r\n  display: flex;\r\n  justify-content: end;\r\n  gap: 5px;\r\n  border-radius: 10px;\r\n  font-weight: bold;\r\n  font-size: 1.2rem;\r\n  margin: 10px;\r\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n}\r\n\r\n.todoMain {\r\n  border-radius: 10px;\r\n  padding-top: 3px;\r\n  padding-bottom: 3px;\r\n  background-color: rgba(200, 212, 203, 0.486);\r\n  color: var(--background-color);\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.521);\r\n  transition: var(--transition-time);\r\n}\r\n\r\n.todoDetails {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n  border-radius: 10px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.todoNameDiv {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.addTodoDiv {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 2px solid rgba(1, 56, 15, 0.486);\r\n  background-color: var(--background-color);\r\n  color: rgb(49, 182, 182);\r\n  border-radius: 10px;\r\n  padding-left: 5px;\r\n  gap: 10px;\r\n  cursor: pointer;\r\n  transition: var(--transition-time);\r\n}\r\n\r\n.addTodoOnOff {\r\n  height: 20px;\r\n  width: 20px;\r\n  display: flex;\r\n  cursor: pointer;\r\n  transition: var(--transition-time);\r\n  background: url(\"../assets/list.png\") center/contain;\r\n}\r\n\r\n.addTodoBtn {\r\n  all: unset;\r\n  display: flex;\r\n  font-size: 1.2rem;\r\n  flex-grow: 1;\r\n  font-weight: bold;\r\n}\r\n\r\n.todoSign {\r\n  height: 18px;\r\n  width: 18px;\r\n  display: flex;\r\n  cursor: pointer;\r\n  border: 1px solid rgb(70, 68, 68);\r\n  border-radius: 50%;\r\n  background-color: var(--font-color);\r\n  transition: var(--transition-time);\r\n}\r\n\r\n.todoIcon {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.todoDeleteBtn {\r\n  all: unset;\r\n  width: 30px;\r\n  background: url(\"../assets/delete.svg\") center/contain no-repeat;\r\n  cursor: pointer;\r\n  transition: var(--transition-time);\r\n}\r\n\r\n.todoEditBtn {\r\n  all: unset;\r\n  width: 20px;\r\n  background: url(\"../assets/edit.svg\") center/contain no-repeat;\r\n  cursor: pointer;\r\n  transition: var(--transition-time);\r\n}\r\n\r\n.imageSort {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n}\r\n\r\n.listIcon {\r\n  all: unset;\r\n  width: 30px;\r\n  height: 30px;\r\n  background: url(\"../assets/list.png\") center/contain no-repeat;\r\n  cursor: pointer;\r\n  transition: var(--transition-time);\r\n}\r\n\r\n.gridIcon {\r\n  all: unset;\r\n  width: 30px;\r\n  height: 30px;\r\n  background: url(\"../assets/grid.png\") center/contain no-repeat;\r\n  cursor: pointer;\r\n  transition: var(--transition-time);\r\n}\r\n\r\n.todoMinimizeBtn {\r\n  background-color: var(--button-color);\r\n  border-radius: 10px;\r\n  color: var(--font-color);\r\n  cursor: pointer;\r\n  text-align: center;\r\n  transition: var(--transition-time);\r\n}\r\n\r\n/* onClick classList */\r\n.onClickHideToDoDetails {\r\n  display: none;\r\n}\r\n\r\n.onClickTodoDate {\r\n  justify-content: end;\r\n  display: flex;\r\n  text-align: center;\r\n}\r\n\r\n.onClickSectionThreeShrink {\r\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n}\r\n\r\n.onClickTodoMainShrink {\r\n  background-color: rgb(223, 189, 189);\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  width: 205px;\r\n  animation: var(--animation-details);\r\n}\r\n\r\n.onClickTodoDetailsShrink {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.onClickFillTodoSign {\r\n  background-color: var(--button-color);\r\n  border-color: white;\r\n}\r\n\r\n.onClickDefaultTodoSign {\r\n  border: 1px solid rgb(70, 68, 68);\r\n  background-color: var(--font-color);\r\n}\r\n\r\n.signStyle {\r\n  background-color: rgba(0, 0, 0, 0.404);\r\n  opacity: 0.2;\r\n}\r\n\r\n.editTodo {\r\n  display: none;\r\n}\r\n\r\n.onClickEditTodoMainStyle {\r\n  background-color: var(--font-color);\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n\r\n/* hover Section */\r\n\r\ninput[type=\"text\"]:focus {\r\n  border-radius: 0px;\r\n  font-family: var(--font-name);\r\n  color: var(--font-color);\r\n}\r\n\r\ninput[type=\"button\"]:hover {\r\n  transform: scale(0.8);\r\n}\r\n\r\nselect:hover {\r\n  transform: scale(0.9);\r\n}\r\n\r\n.addTodoDiv:hover {\r\n  background-color: var(--font-color);\r\n  color: rgb(202, 165, 0);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    rgb(252, 252, 252),\r\n    rgb(250, 237, 167)\r\n  );\r\n  border: 2px solid rgb(230, 230, 230);\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.todoSign:hover {\r\n  background-color: rgb(178, 248, 86);\r\n  opacity: 0.7;\r\n}\r\n\r\n.saveBtn:hover,\r\n.saveBtnEdit:hover {\r\n  transform: scale(0.8);\r\n}\r\n\r\n/* work only when onClickEditTodoMainStyle is not there  */\r\n.todoMain:hover:not(.onClickEditTodoMainStyle) {\r\n  transform: scale(0.98);\r\n  border: none;\r\n  background-color: rgba(134, 168, 143, 0.486);\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.listIcon:hover,\r\n.gridIcon:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.addTodoDiv:hover > div {\r\n  height: 20px;\r\n  width: 20px;\r\n  display: flex;\r\n  cursor: pointer;\r\n  background: url(\"../assets/add1.png\") center/contain;\r\n}\r\n\r\n.todoDeleteBtn:hover,\r\n.todoEditBtn:hover {\r\n  transform: scale(1.2);\r\n  background-color: var(--font-color);\r\n  border-radius: 5px;\r\n}\r\n\r\n.todoMinimizeBtn:hover {\r\n  background-color: var(--font-color);\r\n  color: black;\r\n}\r\n\r\n@keyframes confirmationAnimation {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/assets/add1.png":
/*!*****************************!*\
  !*** ./src/assets/add1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "add1 .png";

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "delete .svg";

/***/ }),

/***/ "./src/assets/edit.svg":
/*!*****************************!*\
  !*** ./src/assets/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edit .svg";

/***/ }),

/***/ "./src/assets/grid.png":
/*!*****************************!*\
  !*** ./src/assets/grid.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grid .png";

/***/ }),

/***/ "./src/assets/list.png":
/*!*****************************!*\
  !*** ./src/assets/list.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "list .png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxxR0FBcUcsZUFBZSxrQ0FBa0Msc0NBQXNDLDhCQUE4QixrRUFBa0UscUNBQXFDLDhCQUE4QixLQUFLLGNBQWMscUpBQXFKLHNDQUFzQyxLQUFLLHVCQUF1QixvQ0FBb0Msa0JBQWtCLHFCQUFxQixLQUFLLGdCQUFnQixvQ0FBb0MsS0FBSyxZQUFZLGdCQUFnQiwrQkFBK0Isc0JBQXNCLHlCQUF5QixLQUFLLFlBQVksZ0JBQWdCLEtBQUssY0FBYyxvQkFBb0IsNkJBQTZCLGdCQUFnQiwrQ0FBK0MsbURBQW1ELG9DQUFvQyxLQUFLLDRCQUE0QixtQkFBbUIsc0JBQXNCLHVCQUF1QixvQkFBb0IseUNBQXlDLG9CQUFvQixtQkFBbUIsb0NBQW9DLEtBQUssOEJBQThCLHdCQUF3QixLQUFLLGdDQUFnQywwQkFBMEIsdUJBQXVCLG9DQUFvQyxLQUFLLDhCQUE4QixtQkFBbUIsb0NBQW9DLEtBQUssZ0JBQWdCLG1CQUFtQixvQ0FBb0MseUNBQXlDLEtBQUssdUJBQXVCLGlDQUFpQyxtQkFBbUIsb0NBQW9DLEtBQUssZ0JBQWdCLGdEQUFnRCwwQkFBMEIsbUNBQW1DLEtBQUssa0JBQWtCLG9CQUFvQiw2QkFBNkIsS0FBSyxvQkFBb0Isb0JBQW9CLHFDQUFxQyx3QkFBd0IsOEJBQThCLEtBQUsscUJBQXFCLGtCQUFrQiwwQkFBMEIsZ0RBQWdELG9CQUFvQiwwQkFBMEIsOEJBQThCLGdDQUFnQyxLQUFLLHFCQUFxQixrQkFBa0IseUJBQXlCLGdDQUFnQyxnREFBZ0Qsb0JBQW9CLG9CQUFvQiw2QkFBNkIsbUJBQW1CLEtBQUssdUJBQXVCLHlCQUF5QiwwQkFBMEIsb0JBQW9CLHdCQUF3QixnQkFBZ0Isb0JBQW9CLDBCQUEwQixLQUFLLHVCQUF1Qix3QkFBd0IsK0NBQStDLDBCQUEwQixtQ0FBbUMsS0FBSyw4QkFBOEIsd0JBQXdCLGVBQWUsb0JBQW9CLDBDQUEwQyxLQUFLLGtCQUFrQix5QkFBeUIsS0FBSyxxQkFBcUIsb0JBQW9CLGNBQWMsS0FBSyxtQ0FBbUMsNENBQTRDLCtCQUErQixzQkFBc0IsMkNBQTJDLDBCQUEwQixvQkFBb0IsY0FBYyw4QkFBOEIsbUJBQW1CLHlDQUF5QyxLQUFLLHVDQUF1QywwQ0FBMEMsK0JBQStCLHNCQUFzQiwyQ0FBMkMsb0JBQW9CLGNBQWMsOEJBQThCLG1CQUFtQixLQUFLLHVDQUF1Qyw0Q0FBNEMsK0JBQStCLDBCQUEwQixtQkFBbUIsS0FBSyxrQkFBa0Isb0JBQW9CLGtFQUFrRSwwQkFBMEIsbUJBQW1CLHlCQUF5QiwwQkFBMEIsY0FBYyxLQUFLLGNBQWMsb0JBQW9CLDJCQUEyQixlQUFlLDBCQUEwQix3QkFBd0Isd0JBQXdCLG1CQUFtQixrRUFBa0UsS0FBSyxtQkFBbUIsMEJBQTBCLHVCQUF1QiwwQkFBMEIsbURBQW1ELHFDQUFxQyxpREFBaUQseUNBQXlDLEtBQUssc0JBQXNCLG9CQUFvQixrRUFBa0UsMEJBQTBCLHlCQUF5QixLQUFLLHNCQUFzQixvQkFBb0IsMEJBQTBCLGVBQWUsS0FBSyxxQkFBcUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsK0NBQStDLGdEQUFnRCwrQkFBK0IsMEJBQTBCLHdCQUF3QixnQkFBZ0Isc0JBQXNCLHlDQUF5QyxLQUFLLHVCQUF1QixtQkFBbUIsa0JBQWtCLG9CQUFvQixzQkFBc0IseUNBQXlDLDZEQUE2RCxLQUFLLHFCQUFxQixpQkFBaUIsb0JBQW9CLHdCQUF3QixtQkFBbUIsd0JBQXdCLEtBQUssbUJBQW1CLG1CQUFtQixrQkFBa0Isb0JBQW9CLHNCQUFzQix3Q0FBd0MseUJBQXlCLDBDQUEwQyx5Q0FBeUMsS0FBSyxtQkFBbUIsb0JBQW9CLGdCQUFnQixLQUFLLHdCQUF3QixpQkFBaUIsa0JBQWtCLHlFQUF5RSxzQkFBc0IseUNBQXlDLEtBQUssc0JBQXNCLGlCQUFpQixrQkFBa0IsdUVBQXVFLHNCQUFzQix5Q0FBeUMsS0FBSyxvQkFBb0Isb0JBQW9CLDhCQUE4QixnQkFBZ0IsS0FBSyxtQkFBbUIsaUJBQWlCLGtCQUFrQixtQkFBbUIsdUVBQXVFLHNCQUFzQix5Q0FBeUMsS0FBSyxtQkFBbUIsaUJBQWlCLGtCQUFrQixtQkFBbUIsdUVBQXVFLHNCQUFzQix5Q0FBeUMsS0FBSywwQkFBMEIsNENBQTRDLDBCQUEwQiwrQkFBK0Isc0JBQXNCLHlCQUF5Qix5Q0FBeUMsS0FBSyw0REFBNEQsb0JBQW9CLEtBQUssMEJBQTBCLDJCQUEyQixvQkFBb0IseUJBQXlCLEtBQUssb0NBQW9DLGtFQUFrRSxLQUFLLGdDQUFnQywyQ0FBMkMsMEJBQTBCLG9CQUFvQixtQkFBbUIsMENBQTBDLEtBQUssbUNBQW1DLG9CQUFvQiw2QkFBNkIsS0FBSyw4QkFBOEIsNENBQTRDLDBCQUEwQixLQUFLLGlDQUFpQyx3Q0FBd0MsMENBQTBDLEtBQUssb0JBQW9CLDZDQUE2QyxtQkFBbUIsS0FBSyxtQkFBbUIsb0JBQW9CLEtBQUssbUNBQW1DLDBDQUEwQyxtQkFBbUIsdUJBQXVCLEtBQUssK0RBQStELHlCQUF5QixvQ0FBb0MsK0JBQStCLEtBQUssc0NBQXNDLDRCQUE0QixLQUFLLHNCQUFzQiw0QkFBNEIsS0FBSywyQkFBMkIsMENBQTBDLDhCQUE4QixzSEFBc0gsMkNBQTJDLCtDQUErQyxLQUFLLHlCQUF5QiwwQ0FBMEMsbUJBQW1CLEtBQUssK0NBQStDLDRCQUE0QixLQUFLLHVIQUF1SCw2QkFBNkIsbUJBQW1CLG1EQUFtRCwrQ0FBK0MsS0FBSyw2Q0FBNkMsNEJBQTRCLEtBQUssaUNBQWlDLG1CQUFtQixrQkFBa0Isb0JBQW9CLHNCQUFzQiw2REFBNkQsS0FBSyxxREFBcUQsNEJBQTRCLDBDQUEwQyx5QkFBeUIsS0FBSyxnQ0FBZ0MsMENBQTBDLG1CQUFtQixLQUFLLDBDQUEwQyxVQUFVLG1CQUFtQixPQUFPLGdCQUFnQixtQkFBbUIsT0FBTyxLQUFLLHVCQUF1QjtBQUN6aWE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxZDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWtKO0FBQ2xKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJNEY7QUFDcEgsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLDRIQUFPLFVBQVUsNEhBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYWRkSXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZWFjaFRvZG9JdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9odG1sRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2Fzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz80ZDM3Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmFtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lQnRuJyk7XHJcbmNvbnN0IGRlc2NyaXB0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uQnRuJyk7XHJcbmNvbnN0IGRhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZUJ0bicpO1xyXG5jb25zdCBzYXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmVCdG4nKTtcclxuY29uc3Qgc3RhdHVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1c0J0bicpO1xyXG5cclxuXHJcbmV4cG9ydCB7IG5hbWVCdG4sIGRlc2NyaXB0aW9uQnRuLCBkYXRlQnRuLCBzdGF0dXNCdG4sIHNhdmVCdG4gfTsiLCJpbXBvcnQgeyBhZGRUb2RvRGl2LCBhZGRUb2RvQ29uZmlybWF0aW9uIH0gZnJvbSBcIi4vaHRtbEVsZW1lbnRcIjtcclxuXHJcbmxldCB0b2RvTWFpbjtcclxubGV0IHRvZG9EZXRhaWxzO1xyXG5sZXQgdG9kb05hbWVEaXY7XHJcbmxldCB0b2RvU2lnbjtcclxubGV0IHRvZG9OYW1lO1xyXG5sZXQgdG9kb0Rlc2NyaXB0aW9uO1xyXG5sZXQgdG9kb1N0YXR1cztcclxubGV0IHRvZG9EYXRlO1xyXG5sZXQgdG9kb0ljb247XHJcbmxldCB0b2RvRGVsZXRlQnRuO1xyXG5sZXQgdG9kb01pbmltaXplQnRuO1xyXG5sZXQgdG9kb0VkaXRCdG47XHJcblxyXG5jb25zdCBzZWN0aW9uVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb25zdCBhcnJhbmdlU3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycmFuZ2VTdHlsZVwiKTtcclxuY29uc3QgZWRpdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRUb2RvXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb1VJQ3JlYXRlKCkge1xyXG4gIHRvZG9NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvZG9TaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0b2RvU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHRvZG9NaW5pbWl6ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgdG9kb0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICBzZWN0aW9uVGhyZWUuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25UaHJlZVwiKTtcclxuICB0b2RvTWFpbi5jbGFzc0xpc3QuYWRkKFwidG9kb01haW5cIik7XHJcbiAgdG9kb0RldGFpbHMuY2xhc3NMaXN0LmFkZChcInRvZG9EZXRhaWxzXCIpO1xyXG4gIHRvZG9OYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvTmFtZURpdlwiKTtcclxuICB0b2RvU2lnbi5jbGFzc0xpc3QuYWRkKFwidG9kb1NpZ25cIik7XHJcbiAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZChcInRvZG9OYW1lXCIpO1xyXG4gIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9kb0Rlc2NyaXB0aW9uXCIpO1xyXG4gIHRvZG9TdGF0dXMuY2xhc3NMaXN0LmFkZChcInRvZG9TdGF0dXNcIik7XHJcbiAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZChcInRvZG9EYXRlXCIpO1xyXG4gIHRvZG9JY29uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvSWNvblwiKTtcclxuICB0b2RvRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvRGVsZXRlQnRuXCIpO1xyXG4gIHRvZG9NaW5pbWl6ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidG9kb01pbmltaXplQnRuXCIpO1xyXG4gIHRvZG9NaW5pbWl6ZUJ0bi50ZXh0Q29udGVudCA9IFwiTWluaW1pemVcIjtcclxuICB0b2RvRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwidG9kb0VkaXRCdG5cIik7XHJcbiAgLy8gdG9kb0VkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XHJcblxyXG4gIHRvZG9EZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIHRvZG9EZXRhaWxzLmFwcGVuZChcclxuICAgIHRvZG9TaWduLFxyXG4gICAgdG9kb05hbWVEaXYsXHJcbiAgICB0b2RvRGVzY3JpcHRpb24sXHJcbiAgICB0b2RvRGF0ZSxcclxuICAgIHRvZG9TdGF0dXMsXHJcbiAgICB0b2RvSWNvblxyXG4gICk7XHJcbiAgdG9kb05hbWVEaXYuYXBwZW5kKHRvZG9TaWduLCB0b2RvTmFtZSk7XHJcbiAgdG9kb0ljb24uYXBwZW5kKHRvZG9EZWxldGVCdG4sIHRvZG9FZGl0QnRuLCB0b2RvTWluaW1pemVCdG4pO1xyXG4gIHRvZG9NYWluLmFwcGVuZCh0b2RvRGV0YWlscyk7XHJcbiAgYXJyYW5nZVN0eWxlLmFwcGVuZChzZWN0aW9uVGhyZWUpO1xyXG4gIHNlY3Rpb25UaHJlZS5wcmVwZW5kKGFkZFRvZG9Db25maXJtYXRpb24pO1xyXG4gIHNlY3Rpb25UaHJlZS5wcmVwZW5kKGFkZFRvZG9EaXYpO1xyXG4gIHNlY3Rpb25UaHJlZS5wcmVwZW5kKGVkaXRUb2RvKTtcclxuICBzZWN0aW9uVGhyZWUuYXBwZW5kKHRvZG9NYWluKTtcclxufVxyXG5leHBvcnQge1xyXG4gIGFkZFRvZG9Db25maXJtYXRpb24sXHJcbiAgdG9kb01haW4sXHJcbiAgdG9kb0RldGFpbHMsXHJcbiAgdG9kb1NpZ24sXHJcbiAgdG9kb05hbWUsXHJcbiAgdG9kb0Rlc2NyaXB0aW9uLFxyXG4gIHRvZG9TdGF0dXMsXHJcbiAgdG9kb0RhdGUsXHJcbiAgdG9kb0RlbGV0ZUJ0bixcclxuICB0b2RvTWluaW1pemVCdG4sXHJcbiAgdG9kb0ljb24sXHJcbiAgdG9kb0VkaXRCdG4sXHJcbiAgZWRpdFRvZG8sXHJcbn07XHJcbiIsImNvbnN0IGFkZFRvZG9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVG9kb0RpdicpO1xyXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRvZG9CdG4nKTtcclxuXHJcbmNvbnN0IG5hbWVCdG5FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWVCdG5FZGl0Jyk7XHJcbmNvbnN0IGRlc2NyaXB0aW9uQnRuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbkJ0bkVkaXQnKTtcclxuY29uc3Qgc3RhdHVzQnRuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXNCdG5FZGl0Jyk7XHJcbmNvbnN0IGRhdGVCdG5FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVCdG5FZGl0Jyk7XHJcblxyXG5jb25zdCBncmlkSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkSWNvbicpO1xyXG5jb25zdCBsaXN0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0SWNvbicpO1xyXG5cclxuY29uc3QgYWRkVG9kb0NvbmZpcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUb2RvQ29uZmlybWF0aW9uJyk7XHJcbmNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxCdG4nKTtcclxuY29uc3QgY2FuY2VsQnRuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxCdG5FZGl0Jyk7XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIGFkZFRvZG9EaXYsIGFkZFRvZG9CdG4sIGdyaWRJY29uLCBsaXN0SWNvbixcclxuICAgIG5hbWVCdG5FZGl0LCBkZXNjcmlwdGlvbkJ0bkVkaXQsIGRhdGVCdG5FZGl0LCBzdGF0dXNCdG5FZGl0LFxyXG4gICAgYWRkVG9kb0NvbmZpcm1hdGlvbiwgY2FuY2VsQnRuLCBjYW5jZWxCdG5FZGl0XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgXCIuL3Nhc3Mvc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQge1xyXG4gIGFkZFRvZG9CdG4sXHJcbiAgYWRkVG9kb0RpdixcclxuICBncmlkSWNvbixcclxuICBsaXN0SWNvbixcclxuICBuYW1lQnRuRWRpdCxcclxuICBkZXNjcmlwdGlvbkJ0bkVkaXQsXHJcbiAgc3RhdHVzQnRuRWRpdCxcclxuICBkYXRlQnRuRWRpdCxcclxuICBhZGRUb2RvQ29uZmlybWF0aW9uLFxyXG4gIGNhbmNlbEJ0bixcclxuICBjYW5jZWxCdG5FZGl0LFxyXG59IGZyb20gXCIuL2NvbXBvbmVudHMvaHRtbEVsZW1lbnRcIjtcclxuaW1wb3J0IHtcclxuICBuYW1lQnRuLFxyXG4gIHNhdmVCdG4sXHJcbiAgZGVzY3JpcHRpb25CdG4sXHJcbiAgZGF0ZUJ0bixcclxuICBzdGF0dXNCdG4sXHJcbn0gZnJvbSBcIi4vY29tcG9uZW50cy9hZGRJdGVtXCI7XHJcbmltcG9ydCB0b2RvVUlDcmVhdGUsIHtcclxuICB0b2RvTWFpbixcclxuICB0b2RvRGV0YWlscyxcclxuICB0b2RvTmFtZSxcclxuICB0b2RvRGVzY3JpcHRpb24sXHJcbiAgdG9kb1N0YXR1cyxcclxuICB0b2RvRGF0ZSxcclxuICB0b2RvRGVsZXRlQnRuLFxyXG4gIHRvZG9NaW5pbWl6ZUJ0bixcclxuICB0b2RvRWRpdEJ0bixcclxuICBlZGl0VG9kbyxcclxufSBmcm9tIFwiLi9jb21wb25lbnRzL2VhY2hUb2RvSXRlbVwiO1xyXG5cclxuY29uc3QgTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSA9IFwib2JqLnNpa2VcIjtcclxubGV0IGlzVG9kb0xpc3RPckdyaWRTdHlsZTtcclxuY29uc3Qgb2JqID0ge1xyXG4gIHNpa2U6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSkpIHx8IFtdLFxyXG4gIGN1cnJlbnRTdGF0dXM6IFwiXCIsXHJcbn07XHJcblxyXG5jbGFzcyBUb2RvQ2xhc3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgc3RhdHVzKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2RvQWRkQ2FuY2VsKCkge1xyXG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGFkZFRvZG9Db25maXJtYXRpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgYWRkVG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEl0ZW1CdG4oKSB7XHJcbiAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgYWRkVG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBhZGRUb2RvQ29uZmlybWF0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICAgIG5hbWVCdG4uZm9jdXMoKTsgLy8gYWRkcyBjdXJzb3Igd2hlbiBhZGRCdG4gaXMgcHJlc3NlZDtcclxuICAgIHRvZG9BZGRDYW5jZWwoKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhdHVzUHJpb3JpdHlDb2xvcigpIHtcclxuICBjb25zdCB0b2RvU3RhdHVzQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvU3RhdHVzXCIpO1xyXG4gIHRvZG9TdGF0dXNBbGwuZm9yRWFjaCgoc2VsZWN0ZWQpID0+IHtcclxuICAgIG9iai5jdXJyZW50U3RhdHVzID0gc2VsZWN0ZWQudGV4dENvbnRlbnQ7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGA4ZjBlZTY0YV8wYCxvYmouY3VycmVudFN0YXR1cykpO1xyXG4gICAgaWYgKHNlbGVjdGVkLnRleHRDb250ZW50ID09PSBcIkhpZ2hcIikge1xyXG4gICAgICBzZWxlY3RlZC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnRleHRDb250ZW50ID09PSBcIkxvd1wiKSB7XHJcbiAgICAgIHNlbGVjdGVkLnN0eWxlLmNvbG9yID0gXCJCbHVlXCI7XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnRleHRDb250ZW50ID09PSBcIk5vbmVcIikge1xyXG4gICAgICBzZWxlY3RlZC5zdHlsZS5jb2xvciA9IFwiR3JleVwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclZhbHVlKCkge1xyXG4gIG5hbWVCdG4udmFsdWUgPSBcIlwiO1xyXG4gIGRlc2NyaXB0aW9uQnRuLnZhbHVlID0gXCJcIjtcclxuICBkYXRlQnRuLnZhbHVlID0gXCJcIjtcclxuICBzdGF0dXNCdG4udmFsdWUgPSBcIk5vbmVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJWYWx1ZUVkaXQoKSB7XHJcbiAgbmFtZUJ0bkVkaXQudmFsdWUgPSBcIlwiO1xyXG4gIGRlc2NyaXB0aW9uQnRuRWRpdC52YWx1ZSA9IFwiXCI7XHJcbiAgZGF0ZUJ0bkVkaXQudmFsdWUgPSBcIlwiO1xyXG4gIHN0YXR1c0J0bkVkaXQudmFsdWUgPSBcIk5vbmVcIjtcclxufVxyXG5cclxuLy8gdG9kb0Z1bmN0aW9uYWxpdHkgIS1cclxuXHJcbmZ1bmN0aW9uIHNvcnRUb2RvTGlzdE9yR3JpZFN0eWxlKCkge1xyXG4gIC8vIENoZWNrIGZvciBFdmVudExpc3RlbmVyIGFuZCBjcmVhdGUgc29ydGluZyBvcmRlciBbZ3JpZCBvciBsaXN0XVxyXG4gIGxpc3RJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaXNUb2RvTGlzdE9yR3JpZFN0eWxlID0gZmFsc2U7XHJcbiAgICBjb25zdCB0b2RvTWFpbkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb01haW5cIik7XHJcbiAgICBjb25zdCB0b2RvRGV0YWlsc0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb0RldGFpbHNcIik7XHJcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb25BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9EZXNjcmlwdGlvblwiKTtcclxuICAgIGNvbnN0IHRvZG9TdGF0dXNBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9TdGF0dXNcIik7XHJcbiAgICBjb25zdCB0b2RvRGF0ZUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb0RhdGVcIik7XHJcbiAgICBjb25zdCB0b2RvRGVsZXRlQnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvRGVsZXRlQnRuXCIpO1xyXG4gICAgY29uc3QgdG9kb0VkaXRCdG5BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9FZGl0QnRuXCIpO1xyXG5cclxuICAgIHRvZG9NYWluQWxsLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkNsaWNrVG9kb01haW5TaHJpbmtcIik7XHJcbiAgICAgIGlmICghaXRlbXMuY2xhc3NMaXN0LmNvbnRhaW5zKGBvbkNsaWNrVG9kb01haW5TaHJpbmtgKSkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9NaW5pbWl6ZUJ0bkFsbCA9XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9NaW5pbWl6ZUJ0blwiKTtcclxuICAgICAgICB0b2RvTWluaW1pemVCdG5BbGwuZm9yRWFjaCgoYnRucykgPT4ge1xyXG4gICAgICAgICAgYnRucy50ZXh0Q29udGVudCA9IFwiTWluaW1pemVcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0b2RvRGV0YWlsc0FsbC5mb3JFYWNoKChpdGVtcykgPT4ge1xyXG4gICAgICBpdGVtcy5jbGFzc0xpc3QucmVtb3ZlKFwib25DbGlja1RvZG9EZXRhaWxzU2hyaW5rXCIpO1xyXG4gICAgfSk7XHJcbiAgICB0b2RvRGVzY3JpcHRpb25BbGwuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgICAgaXRlbXMuY2xhc3NMaXN0LnJlbW92ZShcIm9uQ2xpY2tIaWRlVG9Eb0RldGFpbHNcIik7XHJcbiAgICB9KTtcclxuICAgIHRvZG9TdGF0dXNBbGwuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgICAgaXRlbXMuY2xhc3NMaXN0LnJlbW92ZShcIm9uQ2xpY2tIaWRlVG9Eb0RldGFpbHNcIik7XHJcbiAgICB9KTtcclxuICAgIHRvZG9EYXRlQWxsLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkNsaWNrVG9kb0RhdGVcIik7XHJcbiAgICB9KTtcclxuICAgIHRvZG9EZWxldGVCdG5BbGwuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgICAgaXRlbXMuY2xhc3NMaXN0LnJlbW92ZShcIm9uQ2xpY2tIaWRlVG9Eb0RldGFpbHNcIik7XHJcbiAgICB9KTtcclxuICAgIHRvZG9FZGl0QnRuQWxsLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkNsaWNrSGlkZVRvRG9EZXRhaWxzXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGdyaWRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaXNUb2RvTGlzdE9yR3JpZFN0eWxlID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCB0b2RvTWFpbkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb01haW5cIik7XHJcbiAgICBjb25zdCB0b2RvRGV0YWlsc0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb0RldGFpbHNcIik7XHJcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb25BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9EZXNjcmlwdGlvblwiKTtcclxuICAgIGNvbnN0IHRvZG9TdGF0dXNBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9TdGF0dXNcIik7XHJcbiAgICBjb25zdCB0b2RvRGF0ZUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb0RhdGVcIik7XHJcbiAgICBjb25zdCB0b2RvRGVsZXRlQnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvRGVsZXRlQnRuXCIpO1xyXG4gICAgY29uc3QgdG9kb0VkaXRCdG5BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9FZGl0QnRuXCIpO1xyXG5cclxuICAgIHRvZG9NYWluQWxsLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJvbkNsaWNrVG9kb01haW5TaHJpbmtcIik7XHJcbiAgICAgIGlmIChpdGVtcy5jbGFzc0xpc3QuY29udGFpbnMoYG9uQ2xpY2tUb2RvTWFpblNocmlua2ApKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb01pbmltaXplQnRuQWxsID1cclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb01pbmltaXplQnRuXCIpO1xyXG4gICAgICAgIHRvZG9NaW5pbWl6ZUJ0bkFsbC5mb3JFYWNoKChidG5zKSA9PiB7XHJcbiAgICAgICAgICAvLyBhbGVydCgnY29udGFpbnMnKVxyXG4gICAgICAgICAgYnRucy50ZXh0Q29udGVudCA9IFwiTWF4aW1pemVcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0b2RvRGV0YWlsc0FsbC5mb3JFYWNoKChpdGVtcykgPT4ge1xyXG4gICAgICBpdGVtcy5jbGFzc0xpc3QuYWRkKFwib25DbGlja1RvZG9EZXRhaWxzU2hyaW5rXCIpO1xyXG4gICAgfSk7XHJcbiAgICB0b2RvRGVzY3JpcHRpb25BbGwuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgICAgaXRlbXMuY2xhc3NMaXN0LmFkZChcIm9uQ2xpY2tIaWRlVG9Eb0RldGFpbHNcIik7XHJcbiAgICB9KTtcclxuICAgIHRvZG9TdGF0dXNBbGwuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgICAgaXRlbXMuY2xhc3NMaXN0LmFkZChcIm9uQ2xpY2tIaWRlVG9Eb0RldGFpbHNcIik7XHJcbiAgICB9KTtcclxuICAgIHRvZG9EYXRlQWxsLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJvbkNsaWNrVG9kb0RhdGVcIik7XHJcbiAgICB9KTtcclxuICAgIHRvZG9EZWxldGVCdG5BbGwuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgICAgaXRlbXMuY2xhc3NMaXN0LmFkZChcIm9uQ2xpY2tIaWRlVG9Eb0RldGFpbHNcIik7XHJcbiAgICB9KTtcclxuICAgIHRvZG9FZGl0QnRuQWxsLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJvbkNsaWNrSGlkZVRvRG9EZXRhaWxzXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsaWNrVG9kb0xpc3RPckdyaWRTdHlsZSgpIHtcclxuICAvLyBjaGVjayBpZiB0aGUgdXNlciB3YXMgY2xpY2tlZCB0aGUgc29ydGluZyBvcmRlciBbZ3JpZCBvciBsaXN0XSBhbmQgY3JlYXRlIHRoZSBuZXcgVG9kbyB3aXRoIHRoZSBzYW1lIHN0eWxlIGZvcm1hdFxyXG4gIGlmIChpc1RvZG9MaXN0T3JHcmlkU3R5bGUgPT09IHRydWUpIHtcclxuICAgIHRvZG9NaW5pbWl6ZUJ0bi50ZXh0Q29udGVudCA9IFwiTWF4aW1pemVcIjtcclxuICAgIHRvZG9NYWluLmNsYXNzTGlzdC5hZGQoXCJvbkNsaWNrVG9kb01haW5TaHJpbmtcIik7XHJcbiAgICB0b2RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwib25DbGlja1RvZG9EZXRhaWxzU2hyaW5rXCIpO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJvbkNsaWNrSGlkZVRvRG9EZXRhaWxzXCIpO1xyXG4gICAgdG9kb1N0YXR1cy5jbGFzc0xpc3QuYWRkKFwib25DbGlja0hpZGVUb0RvRGV0YWlsc1wiKTtcclxuICAgIHRvZG9EYXRlLmNsYXNzTGlzdC5hZGQoXCJvbkNsaWNrVG9kb0RhdGVcIik7XHJcbiAgICB0b2RvRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJvbkNsaWNrSGlkZVRvRG9EZXRhaWxzXCIpO1xyXG4gICAgdG9kb0VkaXRCdG4uY2xhc3NMaXN0LmFkZChcIm9uQ2xpY2tIaWRlVG9Eb0RldGFpbHNcIik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtaW5pbWl6ZVRvZG9EZXRhaWxzRm5jKGUpIHtcclxuICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcclxuICAgIGBvbkNsaWNrVG9kb01haW5TaHJpbmtgXHJcbiAgKTsgLy8gU2VsZWN0cyB0b2RvTWFpblxyXG4gIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcclxuICAgIFwib25DbGlja1RvZG9EZXRhaWxzU2hyaW5rXCJcclxuICApOyAvLyBTZWxlY3RzIHRvZG9EZXRhaWxzXHJcblxyXG4gIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QudG9nZ2xlKFxyXG4gICAgXCJvbkNsaWNrSGlkZVRvRG9EZXRhaWxzXCJcclxuICApOyAvLyBTZWxlY3RzIHRvZG9EZXNjcmlwdGlvblxyXG4gIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QudG9nZ2xlKFxyXG4gICAgXCJvbkNsaWNrVG9kb0RhdGVcIlxyXG4gICk7IC8vIFNlbGVjdHMgdG9kb0RhdGVcclxuICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbM10uY2xhc3NMaXN0LnRvZ2dsZShcclxuICAgIFwib25DbGlja0hpZGVUb0RvRGV0YWlsc1wiXHJcbiAgKTsgLy8gU2VsZWN0cyB0b2RvU3RhdHVzXHJcblxyXG4gIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LnRvZ2dsZShcclxuICAgIFwib25DbGlja0hpZGVUb0RvRGV0YWlsc1wiXHJcbiAgKTsgLy8gU2VsZWN0cyBkZWxldGVCdG5cclxuICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC50b2dnbGUoXHJcbiAgICBcIm9uQ2xpY2tIaWRlVG9Eb0RldGFpbHNcIlxyXG4gICk7IC8vIFNlbGVjdHMgZWRpdEJ0blxyXG4gIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDhmMGVlNjRhXzFgLGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQpKTtcclxuXHJcbiAgaWYgKFxyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgYG9uQ2xpY2tUb2RvTWFpblNocmlua2BcclxuICAgIClcclxuICApIHtcclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSBcIk1heGltaXplXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSBcIk1pbmltaXplXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtaW5pbWl6ZVRvZG9EZXRhaWxzKCkge1xyXG4gIHRvZG9NaW5pbWl6ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWluaW1pemVUb2RvRGV0YWlsc0ZuYyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxTaWduVG9kb0ZuYyhlKSB7XHJcbiAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgOGYwZWU2NGFfMmAsXCJjbGlja1wiKSk7XHJcbiAgY29uc3QgZWFjaE1haW4gPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJvbkNsaWNrRmlsbFRvZG9TaWduXCIpKSB7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcIm9uQ2xpY2tGaWxsVG9kb1NpZ25cIik7XHJcbiAgICBlYWNoTWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwic2lnblN0eWxlXCIpOyAvLyBzZWxlY3RzIG1haW5cclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzBdLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1sxXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbMl0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJvbkNsaWNrRmlsbFRvZG9TaWduXCIpO1xyXG4gICAgZWFjaE1haW4uY2xhc3NMaXN0LmFkZChcInNpZ25TdHlsZVwiKTsgLy8gc2VsZWN0cyBtYWluXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1swXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbMV0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbMl0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGVhY2hNYWluLnJlbW92ZSgpO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsU2lnblRvZG8oKSB7XHJcbiAgY29uc3QgdG9kb1NpZ25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnRvZG9TaWduYCk7XHJcbiAgdG9kb1NpZ25zLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICBpdGVtcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlsbFNpZ25Ub2RvRm5jKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVG9kbygpIHtcclxuICBjb25zdCB0b2RvRGVsZXRlQnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvRGVsZXRlQnRuXCIpO1xyXG4gIHRvZG9EZWxldGVCdG5BbGwuZm9yRWFjaCgoZGVsZXRlQWxsLCBpbmRleCkgPT4ge1xyXG4gICAgZGVsZXRlQWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGA4ZjBlZTY0YV8zYCxpbmRleCkpO1xyXG4gICAgICBvYmouc2lrZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDhmMGVlNjRhXzRgLG9iai5zaWtlKSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gRWRpdCBCdXR0b24gRnVuY3Rpb25hbGl0eSBTdGFydGluZ1xyXG5mdW5jdGlvbiBlbmFibGVFZGl0QnRuKCkge1xyXG4gIC8vIEVuYWJsZSBhbGwgdGhlIGVkaXQgYnV0dG9uIHVudGlsIHRoZSBjbGVhckJ0bkVkaXQgaXMgcHJlc3NlZCBbRm9yIGNhbmNlbCBlZGl0IGxvZyBhYm92ZV1cclxuICBjb25zdCB0b2RvRWRpdEJ0bkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb0VkaXRCdG5cIik7XHJcbiAgdG9kb0VkaXRCdG5BbGwuZm9yRWFjaCgoaXNUb2RvRWRpdENsaWNrZWQpID0+IHtcclxuICAgIGlzVG9kb0VkaXRDbGlja2VkLmRpc2FibGVkID0gZmFsc2U7IC8vIGRpc2FibGUgdG9kb0VkaXRCdG5cclxuICAgIGlzVG9kb0VkaXRDbGlja2VkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgIFwib25DbGlja0VkaXRUb2RvTWFpblN0eWxlXCJcclxuICAgICk7IC8vIHJlbW92ZXMgdG9kb01haW4gQm9yZGVyIGFuZCBCR0NvbG9yXHJcbiAgICBzdGF0dXNQcmlvcml0eUNvbG9yKCk7IC8vIGRpc3BsYXkgdGhlIGNvcnJlY3QgY29sb3IgZm9yIHRoZSBzdGF0dXNcclxuICAgIGNsZWFyVmFsdWVFZGl0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZG9FZGl0Q2FuY2VsKCkge1xyXG4gIGNhbmNlbEJ0bkVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlZGl0VG9kby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBjb25zdCB0b2RvRGV0YWlsc0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb0RldGFpbHNcIik7XHJcbiAgICB0b2RvRGV0YWlsc0FsbC5mb3JFYWNoKChpdGVtcykgPT4ge1xyXG4gICAgICBpdGVtcy5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICB9KTtcclxuICAgIGVuYWJsZUVkaXRCdG4oKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVRvZG9FYWNoQWZ0ZXJFZGl0KGUpIHtcclxuICBjb25zdCBzYXZlQnRuRWRpdFZhcmlhYmxlID1cclxuICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzFdXHJcbiAgICAgIC5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbOV0uY2hpbGROb2Rlc1sxXTsgLy8gc2VsZWN0cyBzYXZlQnRuRWRpdFxyXG4gIHNhdmVCdG5FZGl0VmFyaWFibGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBuYW1lQnRuRWRpdC52YWx1ZSA9PT0gXCJcIiB8fFxyXG4gICAgICBkZXNjcmlwdGlvbkJ0bkVkaXQudmFsdWUgPT09IFwiXCIgfHxcclxuICAgICAgZGF0ZUJ0bkVkaXQudmFsdWUgPT09IFwiXCIgfHxcclxuICAgICAgc3RhdHVzQnRuRWRpdC52YWx1ZSA9PT0gXCJcIlxyXG4gICAgKSB7XHJcbiAgICAgIC8vIEhUTUwgcmVxdWlyZWQgZmllbGQgd2lsbCBzaG93XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBkYXRlQnRuSW5kaWFuRm9ybWF0ID0gZGF0ZUJ0bkVkaXQudmFsdWVcclxuICAgICAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgIC5qb2luKFwiLVwiKTtcclxuICAgICAgYWRkVG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgIGVkaXRUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYm9yZGVyID1cclxuICAgICAgICBcIm5vbmVcIjsgLy8gc2VsZWN0cyBkZXRhaWxzIHdpdGggcmVzcGVjdCB0byBlZGl0QnRuXHJcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9XHJcbiAgICAgICAgXCJyZ2IoMjMwLCAyMzAsIDIzMClcIjsgLy8gc2VsZWN0cyBkZXRhaWxzIHdpdGggcmVzcGVjdCB0byBlZGl0QnRuXHJcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLnN0eWxlLmRpc3BsYXkgPVxyXG4gICAgICAgIFwiZ3JpZFwiOyAvLyBzZWxlY3RzIGRldGFpbHNcclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gYCR7bmFtZUJ0bkVkaXQudmFsdWV9YDtcclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9IGAke2Rlc2NyaXB0aW9uQnRuRWRpdC52YWx1ZX1gO1xyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50ID1cclxuICAgICAgICBkYXRlQnRuSW5kaWFuRm9ybWF0O1xyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzNdLnRleHRDb250ZW50ID0gYCR7c3RhdHVzQnRuRWRpdC52YWx1ZX1gO1xyXG4gICAgICBlbmFibGVFZGl0QnRuKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZWRpdFRvZG9FYWNoKCkge1xyXG4gIGNvbnN0IHRvZG9FZGl0QnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvRWRpdEJ0blwiKTtcclxuICB0b2RvRWRpdEJ0bkFsbC5mb3JFYWNoKChpdGVtcywgaW5kZXgpID0+IHtcclxuICAgIC8vIGluZGV4IHBhcmFtZXRlciBnZXQgdGhlIGluZGV4IHBvc2l0aW9uIG9mIHRoZSBub2RlTGlzdFtvZiBlYWNoIHRvZG9FZGl0QnRuIGZyb20gdG9kb0VkaXRCdG5BbGwgXVxyXG4gICAgaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgIFwib25DbGlja0VkaXRUb2RvTWFpblN0eWxlXCJcclxuICAgICAgKTtcclxuICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IC8vIHNlbGVjdHMgZGV0YWlscyB3aXRoIHJlc3BlY3QgdG8gZWRpdEJ0blxyXG4gICAgICBlZGl0VG9kby5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmQoZWRpdFRvZG8pOyAvLyBkaXNwbGF5IGVkaXRVSSBvbiBlZGl0IGNsaWNrXHJcbiAgICAgIC8vIERpc2FibGUgYWxsIHRoZSBlZGl0IGJ1dHRvbiB1bnRpbCB0aGUgc2F2ZUJ0bkVkaXQgaXMgcHJlc3NlZCBbRm9yIGNhbmNlbEVkaXQgZnVuY3Rpb24gYWJvdmVdXHJcbiAgICAgIHRvZG9FZGl0QnRuQWxsLmZvckVhY2goKGlzVG9kb0VkaXRDbGlja2VkKSA9PiB7XHJcbiAgICAgICAgaXNUb2RvRWRpdENsaWNrZWQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHNhdmVUb2RvRWFjaEFmdGVyRWRpdChlLCBpbmRleCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBmb2N1cyB0aGUgbmFtZSB3aGVuIGNsaWNrZWQgW3VzZWQgYXV0b2ZvY3VzIHByb3BlcnR5IG9uIHRoZSBodG1sIGVsZW1lbnRdXHJcbiAgICAgIG5hbWVCdG5FZGl0LmZvY3VzKCk7XHJcbiAgICB9KTtcclxuICAgIHRvZG9FZGl0Q2FuY2VsKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIEVkaXQgQnV0dG9uIEZ1bmN0aW9uYWxpdHkgRW5kaW5nXHJcblxyXG5mdW5jdGlvbiB0b2RvUmVuZGVyKCkge1xyXG4gIHRvZG9VSUNyZWF0ZSgpOyAvLyBmcm9tIGVhY2hUb2RvSXRlbS5qc1xyXG4gIHRvZG9OYW1lLnRleHRDb250ZW50ID0gYCR7b2JqLnNpa2VbMF0udGl0bGV9YDtcclxuICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtvYmouc2lrZVswXS5kZXNjcmlwdGlvbn1gO1xyXG4gIHRvZG9EYXRlLnRleHRDb250ZW50ID0gYCR7b2JqLnNpa2VbMF0uZGF0ZX1gO1xyXG4gIHRvZG9TdGF0dXMudGV4dENvbnRlbnQgPSBgJHtvYmouc2lrZVswXS5zdGF0dXN9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlZGVmaW5lZFRvZG9JbnB1dCgpIHtcclxuICBjb25zdCBsaXN0SXRlbVR3byA9IG5ldyBUb2RvQ2xhc3MoXHJcbiAgICBcIkxpb25lbCBNZXNzaVwiLFxyXG4gICAgXCJUaGUgR09BVFwiLFxyXG4gICAgXCIyNC0wNi0xOTg3XCIsXHJcbiAgICBcIkhpZ2hcIlxyXG4gICk7XHJcbiAgb2JqLnNpa2UudW5zaGlmdChsaXN0SXRlbVR3byk7XHJcbiAgLy8gdG9kbyBGdW5jdGlvbmFsaXR5ICEtXHJcbiAgdG9kb1JlbmRlcigpO1xyXG4gIG1pbmltaXplVG9kb0RldGFpbHMoKTtcclxuICBmaWxsU2lnblRvZG8oKTtcclxuICByZW1vdmVUb2RvKCk7XHJcbiAgZWRpdFRvZG9FYWNoKCk7XHJcbiAgc3RhdHVzUHJpb3JpdHlDb2xvcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VyQ3JlYXRlVG9kb0lucHV0KCkge1xyXG4gIGNvbnN0IGRhdGVCdG5JbmRpYW5Gb3JtYXQgPSBkYXRlQnRuLnZhbHVlLnNwbGl0KFwiLVwiKS5yZXZlcnNlKCkuam9pbihcIi1cIik7XHJcbiAgY29uc3QgbGlzdEl0ZW0gPSBuZXcgVG9kb0NsYXNzKFxyXG4gICAgbmFtZUJ0bi52YWx1ZSxcclxuICAgIGRlc2NyaXB0aW9uQnRuLnZhbHVlLFxyXG4gICAgZGF0ZUJ0bkluZGlhbkZvcm1hdCxcclxuICAgIHN0YXR1c0J0bi52YWx1ZVxyXG4gICk7XHJcbiAgb2JqLnNpa2UudW5zaGlmdChsaXN0SXRlbSk7XHJcbiAgdG9kb1JlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlVG9kbygpIHtcclxuICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG5hbWVCdG4udmFsdWUgPT09IFwiXCIgfHxcclxuICAgICAgZGVzY3JpcHRpb25CdG4udmFsdWUgPT09IFwiXCIgfHxcclxuICAgICAgZGF0ZUJ0bi52YWx1ZSA9PT0gXCJcIiB8fFxyXG4gICAgICBzdGF0dXNCdG4udmFsdWUgPT09IFwiXCJcclxuICAgICkge1xyXG4gICAgICAvLyBIVE1MIHJlcXVpcmVkIGZpZWxkIHdpbGwgc2hvd1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgYWRkVG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgIGFkZFRvZG9Db25maXJtYXRpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB1c2VyQ3JlYXRlVG9kb0lucHV0KCk7XHJcbiAgICAgIG1pbmltaXplVG9kb0RldGFpbHMoKTtcclxuICAgICAgZmlsbFNpZ25Ub2RvKCk7XHJcbiAgICAgIHJlbW92ZVRvZG8oKTtcclxuICAgICAgZWRpdFRvZG9FYWNoKCk7XHJcbiAgICAgIGNsaWNrVG9kb0xpc3RPckdyaWRTdHlsZSgpO1xyXG4gICAgICBzdGF0dXNQcmlvcml0eUNvbG9yKCk7XHJcbiAgICAgIGNsZWFyVmFsdWUoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2cob2JqLnNpa2UpXHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbnByZWRlZmluZWRUb2RvSW5wdXQoKTtcclxuc2F2ZVRvZG8oKTtcclxuYWRkSXRlbUJ0bigpO1xyXG5zb3J0VG9kb0xpc3RPckdyaWRTdHlsZSgpO1xyXG4vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7dmFyIF8weDQzY2NiZj1fMHgyMTUyOyhmdW5jdGlvbihfMHgyNWM5OGYsXzB4MTBlZDFkKXt2YXIgXzB4NTIxNDRlPV8weDIxNTIsXzB4NWFmYWJkPV8weDI1Yzk4ZigpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4NDQ1N2YyPS1wYXJzZUludChfMHg1MjE0NGUoMHgxN2EpKS8weDEqKC1wYXJzZUludChfMHg1MjE0NGUoMHgxMmUpKS8weDIpKy1wYXJzZUludChfMHg1MjE0NGUoMHhkNSkpLzB4MyoocGFyc2VJbnQoXzB4NTIxNDRlKDB4ZjYpKS8weDQpK3BhcnNlSW50KF8weDUyMTQ0ZSgweDE3MCkpLzB4NSooLXBhcnNlSW50KF8weDUyMTQ0ZSgweDEzZikpLzB4NikrLXBhcnNlSW50KF8weDUyMTQ0ZSgweDE2NSkpLzB4NyooLXBhcnNlSW50KF8weDUyMTQ0ZSgweDE3YykpLzB4OCkrLXBhcnNlSW50KF8weDUyMTQ0ZSgweDE2MSkpLzB4OSoocGFyc2VJbnQoXzB4NTIxNDRlKDB4MTFhKSkvMHhhKSstcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTlmKSkvMHhiKigtcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTRmKSkvMHhjKStwYXJzZUludChfMHg1MjE0NGUoMHgxMGUpKS8weGQqKHBhcnNlSW50KF8weDUyMTQ0ZSgweDE2ZSkpLzB4ZSk7aWYoXzB4NDQ1N2YyPT09XzB4MTBlZDFkKWJyZWFrO2Vsc2UgXzB4NWFmYWJkWydwdXNoJ10oXzB4NWFmYWJkWydzaGlmdCddKCkpO31jYXRjaChfMHgyZjk2MmIpe18weDVhZmFiZFsncHVzaCddKF8weDVhZmFiZFsnc2hpZnQnXSgpKTt9fX0oXzB4NTc1MCwweDQ3MDdiKSk7dmFyIHVlPU9iamVjdFsnY3JlYXRlJ10sdGU9T2JqZWN0WydkZWZpbmVQcm9wZXJ0eSddLGhlPU9iamVjdFtfMHg0M2NjYmYoMHgxMmYpXSxsZT1PYmplY3RbJ2dldE93blByb3BlcnR5TmFtZXMnXSxmZT1PYmplY3RbXzB4NDNjY2JmKDB4ZGMpXSxfZT1PYmplY3RbXzB4NDNjY2JmKDB4ZjcpXVtfMHg0M2NjYmYoMHgxYTMpXSxwZT0oXzB4MzJkZDNlLF8weDFhMTAyNCxfMHg0OTg2OTQsXzB4NDRhM2IzKT0+e3ZhciBfMHg0ZjJmYjM9XzB4NDNjY2JmO2lmKF8weDFhMTAyNCYmdHlwZW9mIF8weDFhMTAyND09XzB4NGYyZmIzKDB4MTk0KXx8dHlwZW9mIF8weDFhMTAyND09XzB4NGYyZmIzKDB4MTk4KSl7Zm9yKGxldCBfMHgzMzM3MGEgb2YgbGUoXzB4MWExMDI0KSkhX2VbXzB4NGYyZmIzKDB4MTg4KV0oXzB4MzJkZDNlLF8weDMzMzcwYSkmJl8weDMzMzcwYSE9PV8weDQ5ODY5NCYmdGUoXzB4MzJkZDNlLF8weDMzMzcwYSx7J2dldCc6KCk9Pl8weDFhMTAyNFtfMHgzMzM3MGFdLCdlbnVtZXJhYmxlJzohKF8weDQ0YTNiMz1oZShfMHgxYTEwMjQsXzB4MzMzNzBhKSl8fF8weDQ0YTNiM1tfMHg0ZjJmYjMoMHgxMjYpXX0pO31yZXR1cm4gXzB4MzJkZDNlO30sbmU9KF8weDUwOTRlOSxfMHgyNzExMjgsXzB4MzY1Y2VlKT0+KF8weDM2NWNlZT1fMHg1MDk0ZTkhPW51bGw/dWUoZmUoXzB4NTA5NGU5KSk6e30scGUoXzB4MjcxMTI4fHwhXzB4NTA5NGU5fHwhXzB4NTA5NGU5W18weDQzY2NiZigweDEyMCldP3RlKF8weDM2NWNlZSxfMHg0M2NjYmYoMHhjYSkseyd2YWx1ZSc6XzB4NTA5NGU5LCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4MzY1Y2VlLF8weDUwOTRlOSkpLFE9Y2xhc3N7Y29uc3RydWN0b3IoXzB4NDlkMmYwLF8weDM0NjJiZixfMHgzYmY4N2UsXzB4M2M1YmEzKXt2YXIgXzB4Zjc1MTBkPV8weDQzY2NiZjt0aGlzW18weGY3NTEwZCgweGY0KV09XzB4NDlkMmYwLHRoaXNbXzB4Zjc1MTBkKDB4MThiKV09XzB4MzQ2MmJmLHRoaXNbXzB4Zjc1MTBkKDB4MTQxKV09XzB4M2JmODdlLHRoaXNbXzB4Zjc1MTBkKDB4ZTQpXT1fMHgzYzViYTMsdGhpc1snX2FsbG93ZWRUb1NlbmQnXT0hMHgwLHRoaXNbXzB4Zjc1MTBkKDB4MTc3KV09ITB4MCx0aGlzW18weGY3NTEwZCgweDEyZCldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLHRoaXNbXzB4Zjc1MTBkKDB4ZDQpXT0hIXRoaXNbJ2dsb2JhbCddW18weGY3NTEwZCgweGM0KV0sdGhpc1tfMHhmNzUxMGQoMHgxOTkpXT1udWxsLHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J109MHgwLHRoaXNbXzB4Zjc1MTBkKDB4MTRjKV09MHgxNCx0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddPV8weGY3NTEwZCgweDE5MiksdGhpc1tfMHhmNzUxMGQoMHgxMzcpXT0odGhpc1tfMHhmNzUxMGQoMHhkNCldP18weGY3NTEwZCgweDE1ZSk6XzB4Zjc1MTBkKDB4ZmIpKSt0aGlzW18weGY3NTEwZCgweDE4MSldO31hc3luY1tfMHg0M2NjYmYoMHgxMTApXSgpe3ZhciBfMHgyYjUyMDU9XzB4NDNjY2JmO2lmKHRoaXNbXzB4MmI1MjA1KDB4MTk5KV0pcmV0dXJuIHRoaXNbXzB4MmI1MjA1KDB4MTk5KV07bGV0IF8weDM4OWE2ODtpZih0aGlzW18weDJiNTIwNSgweGQ0KV0pXzB4Mzg5YTY4PXRoaXNbXzB4MmI1MjA1KDB4ZjQpXVsnV2ViU29ja2V0J107ZWxzZXtpZih0aGlzW18weDJiNTIwNSgweGY0KV1bXzB4MmI1MjA1KDB4MWFlKV0/LltfMHgyYjUyMDUoMHhmOSldKV8weDM4OWE2OD10aGlzW18weDJiNTIwNSgweGY0KV1bXzB4MmI1MjA1KDB4MWFlKV0/LltfMHgyYjUyMDUoMHhmOSldO2Vsc2UgdHJ5e2xldCBfMHg4MDQ0NzI9YXdhaXQgaW1wb3J0KF8weDJiNTIwNSgweDEwZikpO18weDM4OWE2OD0oYXdhaXQgaW1wb3J0KChhd2FpdCBpbXBvcnQoXzB4MmI1MjA1KDB4MTQ2KSkpW18weDJiNTIwNSgweDE2OCldKF8weDgwNDQ3MltfMHgyYjUyMDUoMHgxN2YpXSh0aGlzWydub2RlTW9kdWxlcyddLF8weDJiNTIwNSgweDEzYykpKVtfMHgyYjUyMDUoMHgxMjMpXSgpKSlbXzB4MmI1MjA1KDB4Y2EpXTt9Y2F0Y2h7dHJ5e18weDM4OWE2OD1yZXF1aXJlKHJlcXVpcmUoXzB4MmI1MjA1KDB4MTBmKSlbXzB4MmI1MjA1KDB4MTdmKV0odGhpc1tfMHgyYjUyMDUoMHhlNCldLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKF8weDJiNTIwNSgweDE3OSkpO319fXJldHVybiB0aGlzW18weDJiNTIwNSgweDE5OSldPV8weDM4OWE2OCxfMHgzODlhNjg7fVsnX2Nvbm5lY3RUb0hvc3ROb3cnXSgpe3ZhciBfMHg1OGZiMjY9XzB4NDNjY2JmO3RoaXNbXzB4NThmYjI2KDB4MTUyKV18fHRoaXNbXzB4NThmYjI2KDB4MTJkKV18fHRoaXNbXzB4NThmYjI2KDB4MTdkKV0+PXRoaXNbXzB4NThmYjI2KDB4MTRjKV18fCh0aGlzW18weDU4ZmIyNigweDE3NyldPSEweDEsdGhpc1tfMHg1OGZiMjYoMHgxNTIpXT0hMHgwLHRoaXNbXzB4NThmYjI2KDB4MTdkKV0rKyx0aGlzWydfd3MnXT1uZXcgUHJvbWlzZSgoXzB4MWZmMTI4LF8weDUxNTA3Zik9Pnt2YXIgXzB4MWJhODhkPV8weDU4ZmIyNjt0aGlzW18weDFiYTg4ZCgweDExMCldKClbXzB4MWJhODhkKDB4MTJhKV0oXzB4MWRiODUzPT57dmFyIF8weDUyYjUxMT1fMHgxYmE4OGQ7bGV0IF8weDMxMDIwNj1uZXcgXzB4MWRiODUzKF8weDUyYjUxMSgweDE2YikrdGhpc1snaG9zdCddKyc6Jyt0aGlzW18weDUyYjUxMSgweDE0MSldKTtfMHgzMTAyMDZbXzB4NTJiNTExKDB4MTczKV09KCk9Pnt2YXIgXzB4NTg3MjkxPV8weDUyYjUxMTt0aGlzW18weDU4NzI5MSgweDExZCldPSEweDEsdGhpc1tfMHg1ODcyOTEoMHhlNildKF8weDMxMDIwNiksdGhpc1tfMHg1ODcyOTEoMHgxMDMpXSgpLF8weDUxNTA3ZihuZXcgRXJyb3IoJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InKSk7fSxfMHgzMTAyMDZbXzB4NTJiNTExKDB4ZTIpXT0oKT0+e3ZhciBfMHg1Nzk1ZjY9XzB4NTJiNTExO3RoaXNbJ19pbkJyb3dzZXInXXx8XzB4MzEwMjA2W18weDU3OTVmNigweDE5YyldJiZfMHgzMTAyMDZbJ19zb2NrZXQnXVtfMHg1Nzk1ZjYoMHhjMyldJiZfMHgzMTAyMDZbXzB4NTc5NWY2KDB4MTljKV1bXzB4NTc5NWY2KDB4YzMpXSgpLF8weDFmZjEyOChfMHgzMTAyMDYpO30sXzB4MzEwMjA2W18weDUyYjUxMSgweDE5ZCldPSgpPT57dmFyIF8weDU0OTBlNT1fMHg1MmI1MTE7dGhpc1tfMHg1NDkwZTUoMHgxNzcpXT0hMHgwLHRoaXNbXzB4NTQ5MGU1KDB4ZTYpXShfMHgzMTAyMDYpLHRoaXNbXzB4NTQ5MGU1KDB4MTAzKV0oKTt9LF8weDMxMDIwNltfMHg1MmI1MTEoMHgxMjQpXT1fMHgyMWUxOTY9Pnt2YXIgXzB4MzhiZWUzPV8weDUyYjUxMTt0cnl7XzB4MjFlMTk2JiZfMHgyMWUxOTZbXzB4MzhiZWUzKDB4MTVkKV0mJnRoaXNbXzB4MzhiZWUzKDB4ZDQpXSYmSlNPTltfMHgzOGJlZTMoMHhlYSldKF8weDIxZTE5NltfMHgzOGJlZTMoMHgxNWQpXSlbXzB4MzhiZWUzKDB4MTEzKV09PT0ncmVsb2FkJyYmdGhpc1tfMHgzOGJlZTMoMHhmNCldW18weDM4YmVlMygweGVmKV1bXzB4MzhiZWUzKDB4MTQzKV0oKTt9Y2F0Y2h7fX07fSlbXzB4MWJhODhkKDB4MTJhKV0oXzB4MjczNTYxPT4odGhpc1tfMHgxYmE4OGQoMHgxMmQpXT0hMHgwLHRoaXNbXzB4MWJhODhkKDB4MTUyKV09ITB4MSx0aGlzW18weDFiYTg4ZCgweDE3NyldPSEweDEsdGhpc1tfMHgxYmE4OGQoMHgxMWQpXT0hMHgwLHRoaXNbXzB4MWJhODhkKDB4MTdkKV09MHgwLF8weDI3MzU2MSkpWydjYXRjaCddKF8weDExZDVhZD0+KHRoaXNbJ19jb25uZWN0ZWQnXT0hMHgxLHRoaXNbXzB4MWJhODhkKDB4MTUyKV09ITB4MSxjb25zb2xlWyd3YXJuJ10oXzB4MWJhODhkKDB4MTFjKSt0aGlzW18weDFiYTg4ZCgweDE4MSldKSxfMHg1MTUwN2YobmV3IEVycm9yKF8weDFiYTg4ZCgweDE4ZikrKF8weDExZDVhZCYmXzB4MTFkNWFkWydtZXNzYWdlJ10pKSkpKTt9KSk7fVsnX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHg1OWZkMWUpe3ZhciBfMHg0NjhmYj1fMHg0M2NjYmY7dGhpc1tfMHg0NjhmYigweDEyZCldPSEweDEsdGhpc1tfMHg0NjhmYigweDE1MildPSEweDE7dHJ5e18weDU5ZmQxZVsnb25jbG9zZSddPW51bGwsXzB4NTlmZDFlW18weDQ2OGZiKDB4MTczKV09bnVsbCxfMHg1OWZkMWVbXzB4NDY4ZmIoMHhlMildPW51bGw7fWNhdGNoe310cnl7XzB4NTlmZDFlW18weDQ2OGZiKDB4MTg2KV08MHgyJiZfMHg1OWZkMWVbXzB4NDY4ZmIoMHgxNWMpXSgpO31jYXRjaHt9fVtfMHg0M2NjYmYoMHgxMDMpXSgpe3ZhciBfMHgyYzZkNGY9XzB4NDNjY2JmO2NsZWFyVGltZW91dCh0aGlzW18weDJjNmQ0ZigweDE2ZildKSwhKHRoaXNbXzB4MmM2ZDRmKDB4MTdkKV0+PXRoaXNbXzB4MmM2ZDRmKDB4MTRjKV0pJiYodGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weDFmZmJmOT1fMHgyYzZkNGY7dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzW18weDFmZmJmOSgweDE1MildfHwodGhpc1tfMHgxZmZiZjkoMHhkMyldKCksdGhpc1snX3dzJ10/LlsnY2F0Y2gnXSgoKT0+dGhpc1tfMHgxZmZiZjkoMHgxMDMpXSgpKSk7fSwweDFmNCksdGhpc1tfMHgyYzZkNGYoMHgxNmYpXVsndW5yZWYnXSYmdGhpc1tfMHgyYzZkNGYoMHgxNmYpXVtfMHgyYzZkNGYoMHhjMyldKCkpO31hc3luY1tfMHg0M2NjYmYoMHhmOCldKF8weDIzNmQyYyl7dmFyIF8weDFiMjQ5Nz1fMHg0M2NjYmY7dHJ5e2lmKCF0aGlzW18weDFiMjQ5NygweDExZCldKXJldHVybjt0aGlzW18weDFiMjQ5NygweDE3NyldJiZ0aGlzW18weDFiMjQ5NygweGQzKV0oKSwoYXdhaXQgdGhpc1tfMHgxYjI0OTcoMHgxMTcpXSlbXzB4MWIyNDk3KDB4ZjgpXShKU09OW18weDFiMjQ5NygweDEzZCldKF8weDIzNmQyYykpO31jYXRjaChfMHgzYWQ5NTMpe2NvbnNvbGVbXzB4MWIyNDk3KDB4MTk2KV0odGhpc1tfMHgxYjI0OTcoMHgxMzcpXSsnOlxcXFx4MjAnKyhfMHgzYWQ5NTMmJl8weDNhZDk1M1tfMHgxYjI0OTcoMHgxOWIpXSkpLHRoaXNbXzB4MWIyNDk3KDB4MTFkKV09ITB4MSx0aGlzW18weDFiMjQ5NygweDEwMyldKCk7fX19O2Z1bmN0aW9uIF8weDIxNTIoXzB4NGRiNDMwLF8weDExYTZhOCl7dmFyIF8weDU3NTA1ND1fMHg1NzUwKCk7cmV0dXJuIF8weDIxNTI9ZnVuY3Rpb24oXzB4MjE1Mjk3LF8weGI0NWZlZil7XzB4MjE1Mjk3PV8weDIxNTI5Ny0weGMzO3ZhciBfMHg0NTIwMjQ9XzB4NTc1MDU0W18weDIxNTI5N107cmV0dXJuIF8weDQ1MjAyNDt9LF8weDIxNTIoXzB4NGRiNDMwLF8weDExYTZhOCk7fWZ1bmN0aW9uIFYoXzB4Yzc2MGI2LF8weDM4MGE0NixfMHg1MDg3MTYsXzB4NWU2YjljLF8weDVlNzZkNSl7dmFyIF8weDM5NzdmMT1fMHg0M2NjYmY7bGV0IF8weDFkOWQ4Mz1fMHg1MDg3MTZbJ3NwbGl0J10oJywnKVtfMHgzOTc3ZjEoMHhjZCldKF8weDM2NDVhYj0+e3ZhciBfMHhjMTI3NDM9XzB4Mzk3N2YxO3RyeXtfMHhjNzYwYjZbXzB4YzEyNzQzKDB4ZGQpXXx8KChfMHg1ZTc2ZDU9PT0nbmV4dC5qcyd8fF8weDVlNzZkNT09PSdyZW1peCd8fF8weDVlNzZkNT09PV8weGMxMjc0MygweGQ5KSkmJihfMHg1ZTc2ZDUrPV8weGM3NjBiNltfMHhjMTI3NDMoMHgxYWUpXT8uWyd2ZXJzaW9ucyddPy5bXzB4YzEyNzQzKDB4MTY5KV0/XzB4YzEyNzQzKDB4MTE4KTpfMHhjMTI3NDMoMHhjOCkpLF8weGM3NjBiNltfMHhjMTI3NDMoMHhkZCldPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHg1ZTc2ZDV9KTtsZXQgXzB4MWMxMmJmPW5ldyBRKF8weGM3NjBiNixfMHgzODBhNDYsXzB4MzY0NWFiLF8weDVlNmI5Yyk7cmV0dXJuIF8weDFjMTJiZltfMHhjMTI3NDMoMHhmOCldW18weGMxMjc0MygweDFhZildKF8weDFjMTJiZik7fWNhdGNoKF8weGExYTRjZSl7cmV0dXJuIGNvbnNvbGVbXzB4YzEyNzQzKDB4MTk2KV0oXzB4YzEyNzQzKDB4MTI1KSxfMHhhMWE0Y2UmJl8weGExYTRjZVtfMHhjMTI3NDMoMHgxOWIpXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4NTM4YWM2PT5fMHgxZDlkODNbXzB4Mzk3N2YxKDB4MWE5KV0oXzB4MjE4NDg4PT5fMHgyMTg0ODgoXzB4NTM4YWM2KSk7fWZ1bmN0aW9uIEgoXzB4MzJhZTg1KXt2YXIgXzB4MTFhM2I3PV8weDQzY2NiZjtsZXQgXzB4MWYzYjY0PWZ1bmN0aW9uKF8weDE0OWRhMSxfMHgxY2FjNGIpe3JldHVybiBfMHgxY2FjNGItXzB4MTQ5ZGExO30sXzB4MjFhYWM4O2lmKF8weDMyYWU4NVtfMHgxMWEzYjcoMHhlZCldKV8weDIxYWFjOD1mdW5jdGlvbigpe3ZhciBfMHg2ZTQ0MjI9XzB4MTFhM2I3O3JldHVybiBfMHgzMmFlODVbXzB4NmU0NDIyKDB4ZWQpXVsnbm93J10oKTt9O2Vsc2V7aWYoXzB4MzJhZTg1Wydwcm9jZXNzJ10mJl8weDMyYWU4NVtfMHgxMWEzYjcoMHgxYWUpXVsnaHJ0aW1lJ10pXzB4MjFhYWM4PWZ1bmN0aW9uKCl7dmFyIF8weDRmNzI0MD1fMHgxMWEzYjc7cmV0dXJuIF8weDMyYWU4NVtfMHg0ZjcyNDAoMHgxYWUpXVtfMHg0ZjcyNDAoMHgxYjIpXSgpO30sXzB4MWYzYjY0PWZ1bmN0aW9uKF8weDYzY2Q0MSxfMHg5M2VhODYpe3JldHVybiAweDNlOCooXzB4OTNlYTg2WzB4MF0tXzB4NjNjZDQxWzB4MF0pKyhfMHg5M2VhODZbMHgxXS1fMHg2M2NkNDFbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4MjhkMmFkfT1yZXF1aXJlKF8weDExYTNiNygweGQ2KSk7XzB4MjFhYWM4PWZ1bmN0aW9uKCl7dmFyIF8weDRhYTY1Yj1fMHgxMWEzYjc7cmV0dXJuIF8weDI4ZDJhZFtfMHg0YWE2NWIoMHgxNTYpXSgpO307fWNhdGNoe18weDIxYWFjOD1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDFmM2I2NCwndGltZVN0YW1wJzpfMHgyMWFhYzgsJ25vdyc6KCk9PkRhdGVbXzB4MTFhM2I3KDB4MTU2KV0oKX07fWZ1bmN0aW9uIFgoXzB4NDcwZmRlLF8weDEwNjU0MCxfMHg0Yjc0NjMpe3ZhciBfMHgyM2UyYmQ9XzB4NDNjY2JmO2lmKF8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXSE9PXZvaWQgMHgwKXJldHVybiBfMHg0NzBmZGVbXzB4MjNlMmJkKDB4MTFlKV07bGV0IF8weDE0NzhmYj1fMHg0NzBmZGVbXzB4MjNlMmJkKDB4MWFlKV0/LltfMHgyM2UyYmQoMHgxMGMpXT8uWydub2RlJ107cmV0dXJuIF8weDE0NzhmYiYmXzB4NGI3NDYzPT09XzB4MjNlMmJkKDB4ZGIpP18weDQ3MGZkZVsnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J109ITB4MTpfMHg0NzBmZGVbXzB4MjNlMmJkKDB4MTFlKV09XzB4MTQ3OGZifHwhXzB4MTA2NTQwfHxfMHg0NzBmZGVbXzB4MjNlMmJkKDB4ZWYpXT8uW18weDIzZTJiZCgweDEyYyldJiZfMHgxMDY1NDBbXzB4MjNlMmJkKDB4MWEwKV0oXzB4NDcwZmRlWydsb2NhdGlvbiddWydob3N0bmFtZSddKSxfMHg0NzBmZGVbXzB4MjNlMmJkKDB4MTFlKV07fSgoXzB4MTRhOGNjLF8weDM0OWI2YyxfMHgzYTlkNGUsXzB4NGJiYWUyLF8weDE2ZjE2YyxfMHg1ZGVhNjAsXzB4M2U3ZmFhLF8weDM4Y2JlNCxfMHg1NGE4NzApPT57dmFyIF8weDUxMmEzNz1fMHg0M2NjYmY7aWYoXzB4MTRhOGNjW18weDUxMmEzNygweDEwMSldKXJldHVybiBfMHgxNGE4Y2NbXzB4NTEyYTM3KDB4MTAxKV07aWYoIVgoXzB4MTRhOGNjLF8weDM4Y2JlNCxfMHgxNmYxNmMpKXJldHVybiBfMHgxNGE4Y2NbXzB4NTEyYTM3KDB4MTAxKV09eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9Mb2dNYW55JzooKT0+e30sJ2F1dG9UcmFjZU1hbnknOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319LF8weDE0YThjY1snX2NvbnNvbGVfbmluamEnXTtsZXQgXzB4MTZhMjIyPXsncHJvcHMnOjB4NjQsJ2VsZW1lbnRzJzoweDY0LCdzdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ3RvdGFsU3RyTGVuZ3RoJzoweDQwMCoweDMyLCdhdXRvRXhwYW5kTGltaXQnOjB4MTM4OCwnYXV0b0V4cGFuZE1heERlcHRoJzoweGF9LF8weDFiMDcxNz17J3Byb3BzJzoweDUsJ2VsZW1lbnRzJzoweDUsJ3N0ckxlbmd0aCc6MHgxMDAsJ3RvdGFsU3RyTGVuZ3RoJzoweDEwMCoweDMsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxZSwnYXV0b0V4cGFuZE1heERlcHRoJzoweDJ9LF8weDNmZjIyMj1IKF8weDE0YThjYyksXzB4M2Y1ZDJkPV8weDNmZjIyMltfMHg1MTJhMzcoMHgxNTEpXSxfMHgzOTk2Nzg9XzB4M2ZmMjIyW18weDUxMmEzNygweDEwNyldLF8weDRiOWE2MT1fMHgzZmYyMjJbXzB4NTEyYTM3KDB4MTU2KV0sXzB4NTg2ZWE0PXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4NTdjZjg2PV8weDJmOTg5OT0+e18weDU4NmVhNFsndHMnXVtfMHgyZjk4OTldPV8weDM5OTY3OCgpO30sXzB4NTA5YWFjPShfMHhmODJkM2EsXzB4Mjc3NDQ2KT0+e3ZhciBfMHgzNGIyYTg9XzB4NTEyYTM3O2xldCBfMHgzMmE4YjM9XzB4NTg2ZWE0Wyd0cyddW18weDI3NzQ0Nl07aWYoZGVsZXRlIF8weDU4NmVhNFsndHMnXVtfMHgyNzc0NDZdLF8weDMyYThiMyl7bGV0IF8weDRmYjcyOT1fMHgzZjVkMmQoXzB4MzJhOGIzLF8weDM5OTY3OCgpKTtfMHgxNzJjNzUoXzB4NGEyOTVhKF8weDM0YjJhOCgweDE0YiksXzB4ZjgyZDNhLF8weDRiOWE2MSgpLF8weDJlOTcxMyxbXzB4NGZiNzI5XSxfMHgyNzc0NDYpKTt9fSxfMHg3ZTYxZTY9XzB4MzAwNDdhPT5fMHg1OGRjODQ9Pnt2YXIgXzB4NTJkYzNlPV8weDUxMmEzNzt0cnl7XzB4NTdjZjg2KF8weDU4ZGM4NCksXzB4MzAwNDdhKF8weDU4ZGM4NCk7fWZpbmFsbHl7XzB4MTRhOGNjW18weDUyZGMzZSgweDE4YSldW18weDUyZGMzZSgweDE0YildPV8weDMwMDQ3YTt9fSxfMHgyMGY1NjE9XzB4NzRlYmRjPT5fMHgxMzA5MTY9Pnt2YXIgXzB4MjEzNzM2PV8weDUxMmEzNzt0cnl7bGV0IFtfMHgyN2ZhZWYsXzB4MmFmNjI1XT1fMHgxMzA5MTZbJ3NwbGl0J10oXzB4MjEzNzM2KDB4MWE0KSk7XzB4NTA5YWFjKF8weDJhZjYyNSxfMHgyN2ZhZWYpLF8weDc0ZWJkYyhfMHgyN2ZhZWYpO31maW5hbGx5e18weDE0YThjY1tfMHgyMTM3MzYoMHgxOGEpXVsndGltZUVuZCddPV8weDc0ZWJkYzt9fTtfMHgxNGE4Y2NbXzB4NTEyYTM3KDB4MTAxKV09eydjb25zb2xlTG9nJzooXzB4YmVmZjFiLF8weDNlMjZiNSk9Pnt2YXIgXzB4YTI1NmYxPV8weDUxMmEzNztfMHgxNGE4Y2NbXzB4YTI1NmYxKDB4MThhKV1bJ2xvZyddW18weGEyNTZmMSgweGU1KV0hPT1fMHhhMjU2ZjEoMHgxM2UpJiZfMHgxNzJjNzUoXzB4NGEyOTVhKCdsb2cnLF8weGJlZmYxYixfMHg0YjlhNjEoKSxfMHgyZTk3MTMsXzB4M2UyNmI1KSk7fSwnY29uc29sZVRyYWNlJzooXzB4NTgzYmE3LF8weDJjMjk1MCk9Pnt2YXIgXzB4MWM3ZDhiPV8weDUxMmEzNztfMHgxNGE4Y2NbXzB4MWM3ZDhiKDB4MThhKV1bXzB4MWM3ZDhiKDB4MTEyKV1bXzB4MWM3ZDhiKDB4ZTUpXSE9PV8weDFjN2Q4YigweDExNCkmJl8weDE3MmM3NShfMHg0YTI5NWEoXzB4MWM3ZDhiKDB4MTE1KSxfMHg1ODNiYTcsXzB4NGI5YTYxKCksXzB4MmU5NzEzLF8weDJjMjk1MCkpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHg5MzZiMmI9XzB4NTEyYTM3O18weDE0YThjY1tfMHg5MzZiMmIoMHgxOGEpXVtfMHg5MzZiMmIoMHgxNGIpXT1fMHg3ZTYxZTYoXzB4MTRhOGNjW18weDkzNmIyYigweDE4YSldW18weDkzNmIyYigweDE0YildKTt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt2YXIgXzB4MjVjNmM0PV8weDUxMmEzNztfMHgxNGE4Y2NbJ2NvbnNvbGUnXVtfMHgyNWM2YzQoMHgxMWIpXT1fMHgyMGY1NjEoXzB4MTRhOGNjW18weDI1YzZjNCgweDE4YSldW18weDI1YzZjNCgweDExYildKTt9LCdhdXRvTG9nJzooXzB4NDlkZTczLF8weDQ2NGE0Nyk9Pnt2YXIgXzB4NGZmNDljPV8weDUxMmEzNztfMHgxNzJjNzUoXzB4NGEyOTVhKF8weDRmZjQ5YygweDExMiksXzB4NDY0YTQ3LF8weDRiOWE2MSgpLF8weDJlOTcxMyxbXzB4NDlkZTczXSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4NGRmZDA0LF8weDFjZDNkZCk9Pnt2YXIgXzB4MjA5YzBjPV8weDUxMmEzNztfMHgxNzJjNzUoXzB4NGEyOTVhKF8weDIwOWMwYygweDExMiksXzB4NGRmZDA0LF8weDRiOWE2MSgpLF8weDJlOTcxMyxfMHgxY2QzZGQpKTt9LCdhdXRvVHJhY2UnOihfMHgxMTUwNzQsXzB4OGZmZGExKT0+e3ZhciBfMHhkNDMwYTg9XzB4NTEyYTM3O18weDE3MmM3NShfMHg0YTI5NWEoXzB4ZDQzMGE4KDB4MTE1KSxfMHg4ZmZkYTEsXzB4NGI5YTYxKCksXzB4MmU5NzEzLFtfMHgxMTUwNzRdKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDU4NzY2MCxfMHgxMWEwYjkpPT57dmFyIF8weDU5Y2I0MT1fMHg1MTJhMzc7XzB4MTcyYzc1KF8weDRhMjk1YShfMHg1OWNiNDEoMHgxMTUpLF8weDU4NzY2MCxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsXzB4MTFhMGI5KSk7fSwnYXV0b1RpbWUnOihfMHg1ZTZmODgsXzB4MmI4ZWE0LF8weDYwM2ViZik9PntfMHg1N2NmODYoXzB4NjAzZWJmKTt9LCdhdXRvVGltZUVuZCc6KF8weDMxMGVlZSxfMHgyYjU0NTksXzB4Mjg1YzYzKT0+e18weDUwOWFhYyhfMHgyYjU0NTksXzB4Mjg1YzYzKTt9fTtsZXQgXzB4MTcyYzc1PVYoXzB4MTRhOGNjLF8weDM0OWI2YyxfMHgzYTlkNGUsXzB4NGJiYWUyLF8weDE2ZjE2YyksXzB4MmU5NzEzPV8weDE0YThjY1snX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddO2NsYXNzIF8weDU2MTMwZHtjb25zdHJ1Y3Rvcigpe3ZhciBfMHg0MGYxMTQ9XzB4NTEyYTM3O3RoaXNbXzB4NDBmMTE0KDB4ZjIpXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbXzB4NDBmMTE0KDB4MTgzKV09L14oMHxbMS05XVswLTldKikkLyx0aGlzW18weDQwZjExNCgweGUxKV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1snX3VuZGVmaW5lZCddPV8weDE0YThjY1tfMHg0MGYxMTQoMHgxMjEpXSx0aGlzW18weDQwZjExNCgweDEwZCldPV8weDE0YThjY1tfMHg0MGYxMTQoMHgxYTEpXSx0aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ109T2JqZWN0WydnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXSx0aGlzW18weDQwZjExNCgweGYwKV09T2JqZWN0W18weDQwZjExNCgweDE2MyldLHRoaXNbXzB4NDBmMTE0KDB4MTUwKV09XzB4MTRhOGNjW18weDQwZjExNCgweDE0NCldLHRoaXNbJ19yZWdFeHBUb1N0cmluZyddPVJlZ0V4cFtfMHg0MGYxMTQoMHhmNyldW18weDQwZjExNCgweDEyMyldLHRoaXNbJ19kYXRlVG9TdHJpbmcnXT1EYXRlW18weDQwZjExNCgweGY3KV1bXzB4NDBmMTE0KDB4MTIzKV07fVsnc2VyaWFsaXplJ10oXzB4NTVhMmJiLF8weDFiNjYwNCxfMHgyODdiYTksXzB4MmQ5ODUyKXt2YXIgXzB4NGQyMmYyPV8weDUxMmEzNyxfMHgxNjYyZmE9dGhpcyxfMHg1YjgzMTI9XzB4Mjg3YmE5WydhdXRvRXhwYW5kJ107ZnVuY3Rpb24gXzB4YzViZTE2KF8weDU2OTAwZSxfMHhjMGI1YzEsXzB4NDQzM2ZjKXt2YXIgXzB4NGI4OGVkPV8weDIxNTI7XzB4YzBiNWMxWyd0eXBlJ109XzB4NGI4OGVkKDB4MWFhKSxfMHhjMGI1YzFbXzB4NGI4OGVkKDB4MTBhKV09XzB4NTY5MDBlW18weDRiODhlZCgweDE5YildLF8weDYwOTMyMD1fMHg0NDMzZmNbXzB4NGI4OGVkKDB4MTY5KV1bJ2N1cnJlbnQnXSxfMHg0NDMzZmNbXzB4NGI4OGVkKDB4MTY5KV1bXzB4NGI4OGVkKDB4MTU3KV09XzB4YzBiNWMxLF8weDE2NjJmYVtfMHg0Yjg4ZWQoMHhjNSldKF8weGMwYjVjMSxfMHg0NDMzZmMpO31pZihfMHgxYjY2MDQmJl8weDFiNjYwNFtfMHg0ZDIyZjIoMHgxMTYpXSlfMHhjNWJlMTYoXzB4MWI2NjA0LF8weDU1YTJiYixfMHgyODdiYTkpO2Vsc2UgdHJ5e18weDI4N2JhOVtfMHg0ZDIyZjIoMHgxM2EpXSsrLF8weDI4N2JhOVsnYXV0b0V4cGFuZCddJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4MWFkKV1bJ3B1c2gnXShfMHgxYjY2MDQpO3ZhciBfMHgyYWJmNzcsXzB4MTc5YmEzLF8weDQzN2E3MSxfMHgxZjQzMTgsXzB4MWY2YjI2PVtdLF8weDUxMjI3MT1bXSxfMHg0MDZjZjIsXzB4MjUyYWU0PXRoaXNbXzB4NGQyMmYyKDB4MTNiKV0oXzB4MWI2NjA0KSxfMHgzZTA0YTU9XzB4MjUyYWU0PT09XzB4NGQyMmYyKDB4MWFjKSxfMHgyYWJiMGE9ITB4MSxfMHg0ODI4YTE9XzB4MjUyYWU0PT09XzB4NGQyMmYyKDB4MTk4KSxfMHgzNGZmMjM9dGhpc1snX2lzUHJpbWl0aXZlVHlwZSddKF8weDI1MmFlNCksXzB4MzgwNjA3PXRoaXNbXzB4NGQyMmYyKDB4MTU4KV0oXzB4MjUyYWU0KSxfMHg2NzlkN2Y9XzB4MzRmZjIzfHxfMHgzODA2MDcsXzB4MzdhNWQ1PXt9LF8weDJlNjBmMz0weDAsXzB4MjIzMGY4PSEweDEsXzB4NjA5MzIwLF8weDNhY2I5OT0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4Mjg3YmE5W18weDRkMjJmMigweGQ4KV0pe2lmKF8weDNlMDRhNSl7aWYoXzB4MTc5YmEzPV8weDFiNjYwNFsnbGVuZ3RoJ10sXzB4MTc5YmEzPl8weDI4N2JhOVsnZWxlbWVudHMnXSl7Zm9yKF8weDQzN2E3MT0weDAsXzB4MWY0MzE4PV8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxMzApXSxfMHgyYWJmNzc9XzB4NDM3YTcxO18weDJhYmY3NzxfMHgxZjQzMTg7XzB4MmFiZjc3KyspXzB4NTEyMjcxW18weDRkMjJmMigweDFhNildKF8weDE2NjJmYVtfMHg0ZDIyZjIoMHgxNzIpXShfMHgxZjZiMjYsXzB4MWI2NjA0LF8weDI1MmFlNCxfMHgyYWJmNzcsXzB4Mjg3YmE5KSk7XzB4NTVhMmJiW18weDRkMjJmMigweGU5KV09ITB4MDt9ZWxzZXtmb3IoXzB4NDM3YTcxPTB4MCxfMHgxZjQzMTg9XzB4MTc5YmEzLF8weDJhYmY3Nz1fMHg0MzdhNzE7XzB4MmFiZjc3PF8weDFmNDMxODtfMHgyYWJmNzcrKylfMHg1MTIyNzFbXzB4NGQyMmYyKDB4MWE2KV0oXzB4MTY2MmZhW18weDRkMjJmMigweDE3MildKF8weDFmNmIyNixfMHgxYjY2MDQsXzB4MjUyYWU0LF8weDJhYmY3NyxfMHgyODdiYTkpKTt9XzB4Mjg3YmE5WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKz1fMHg1MTIyNzFbXzB4NGQyMmYyKDB4MTU1KV07fWlmKCEoXzB4MjUyYWU0PT09XzB4NGQyMmYyKDB4MTdlKXx8XzB4MjUyYWU0PT09XzB4NGQyMmYyKDB4MTIxKSkmJiFfMHgzNGZmMjMmJl8weDI1MmFlNCE9PSdTdHJpbmcnJiZfMHgyNTJhZTQhPT1fMHg0ZDIyZjIoMHgxNGUpJiZfMHgyNTJhZTQhPT1fMHg0ZDIyZjIoMHgxNTkpKXt2YXIgXzB4NWIxZGNlPV8weDJkOTg1MltfMHg0ZDIyZjIoMHgxMjkpXXx8XzB4Mjg3YmE5W18weDRkMjJmMigweDEyOSldO2lmKHRoaXNbXzB4NGQyMmYyKDB4MTgwKV0oXzB4MWI2NjA0KT8oXzB4MmFiZjc3PTB4MCxfMHgxYjY2MDRbXzB4NGQyMmYyKDB4MWE5KV0oZnVuY3Rpb24oXzB4MWVjNWY1KXt2YXIgXzB4M2ExMWI4PV8weDRkMjJmMjtpZihfMHgyZTYwZjMrKyxfMHgyODdiYTlbXzB4M2ExMWI4KDB4MTU0KV0rKyxfMHgyZTYwZjM+XzB4NWIxZGNlKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fWlmKCFfMHgyODdiYTlbXzB4M2ExMWI4KDB4MTYwKV0mJl8weDI4N2JhOVtfMHgzYTExYjgoMHhkZSldJiZfMHgyODdiYTlbXzB4M2ExMWI4KDB4MTU0KV0+XzB4Mjg3YmE5WydhdXRvRXhwYW5kTGltaXQnXSl7XzB4MjIzMGY4PSEweDA7cmV0dXJuO31fMHg1MTIyNzFbJ3B1c2gnXShfMHgxNjYyZmFbXzB4M2ExMWI4KDB4MTcyKV0oXzB4MWY2YjI2LF8weDFiNjYwNCxfMHgzYTExYjgoMHhkMCksXzB4MmFiZjc3KyssXzB4Mjg3YmE5LGZ1bmN0aW9uKF8weDIxNTJhNil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDIxNTJhNjt9O30oXzB4MWVjNWY1KSkpO30pKTp0aGlzW18weDRkMjJmMigweGYzKV0oXzB4MWI2NjA0KSYmXzB4MWI2NjA0Wydmb3JFYWNoJ10oZnVuY3Rpb24oXzB4MzUyYWJiLF8weDE1MGEwMil7dmFyIF8weDFlZTlhNz1fMHg0ZDIyZjI7aWYoXzB4MmU2MGYzKyssXzB4Mjg3YmE5W18weDFlZTlhNygweDE1NCldKyssXzB4MmU2MGYzPl8weDViMWRjZSl7XzB4MjIzMGY4PSEweDA7cmV0dXJuO31pZighXzB4Mjg3YmE5W18weDFlZTlhNygweDE2MCldJiZfMHgyODdiYTlbJ2F1dG9FeHBhbmQnXSYmXzB4Mjg3YmE5WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDI4N2JhOVtfMHgxZWU5YTcoMHgxYTcpXSl7XzB4MjIzMGY4PSEweDA7cmV0dXJuO312YXIgXzB4MWVhYTg1PV8weDE1MGEwMlsndG9TdHJpbmcnXSgpO18weDFlYWE4NVtfMHgxZWU5YTcoMHgxNTUpXT4weDY0JiYoXzB4MWVhYTg1PV8weDFlYWE4NVtfMHgxZWU5YTcoMHgxYTUpXSgweDAsMHg2NCkrXzB4MWVlOWE3KDB4MTMxKSksXzB4NTEyMjcxW18weDFlZTlhNygweDFhNildKF8weDE2NjJmYVtfMHgxZWU5YTcoMHgxNzIpXShfMHgxZjZiMjYsXzB4MWI2NjA0LCdNYXAnLF8weDFlYWE4NSxfMHgyODdiYTksZnVuY3Rpb24oXzB4M2ZjZGQyKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4M2ZjZGQyO307fShfMHgzNTJhYmIpKSk7fSksIV8weDJhYmIwYSl7dHJ5e2ZvcihfMHg0MDZjZjIgaW4gXzB4MWI2NjA0KWlmKCEoXzB4M2UwNGE1JiZfMHgzYWNiOTlbJ3Rlc3QnXShfMHg0MDZjZjIpKSYmIXRoaXNbXzB4NGQyMmYyKDB4Y2MpXShfMHgxYjY2MDQsXzB4NDA2Y2YyLF8weDI4N2JhOSkpe2lmKF8weDJlNjBmMysrLF8weDI4N2JhOVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDJlNjBmMz5fMHg1YjFkY2Upe18weDIyMzBmOD0hMHgwO2JyZWFrO31pZighXzB4Mjg3YmE5W18weDRkMjJmMigweDE2MCldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZGUpXSYmXzB4Mjg3YmE5W18weDRkMjJmMigweDE1NCldPl8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxYTcpXSl7XzB4MjIzMGY4PSEweDA7YnJlYWs7fV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxYTYpXShfMHgxNjYyZmFbJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDFmNmIyNixfMHgzN2E1ZDUsXzB4MWI2NjA0LF8weDI1MmFlNCxfMHg0MDZjZjIsXzB4Mjg3YmE5KSk7fX1jYXRjaHt9aWYoXzB4MzdhNWQ1W18weDRkMjJmMigweDE0OSldPSEweDAsXzB4NDgyOGExJiYoXzB4MzdhNWQ1W18weDRkMjJmMigweDEyOCldPSEweDApLCFfMHgyMjMwZjgpe3ZhciBfMHgxNDJiN2U9W11bJ2NvbmNhdCddKHRoaXNbJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJ10oXzB4MWI2NjA0KSlbJ2NvbmNhdCddKHRoaXNbXzB4NGQyMmYyKDB4YzYpXShfMHgxYjY2MDQpKTtmb3IoXzB4MmFiZjc3PTB4MCxfMHgxNzliYTM9XzB4MTQyYjdlW18weDRkMjJmMigweDE1NSldO18weDJhYmY3NzxfMHgxNzliYTM7XzB4MmFiZjc3KyspaWYoXzB4NDA2Y2YyPV8weDE0MmI3ZVtfMHgyYWJmNzddLCEoXzB4M2UwNGE1JiZfMHgzYWNiOTlbXzB4NGQyMmYyKDB4MThkKV0oXzB4NDA2Y2YyW18weDRkMjJmMigweDEyMyldKCkpKSYmIXRoaXNbJ19ibGFja2xpc3RlZFByb3BlcnR5J10oXzB4MWI2NjA0LF8weDQwNmNmMixfMHgyODdiYTkpJiYhXzB4MzdhNWQ1W18weDRkMjJmMigweDEwNCkrXzB4NDA2Y2YyWyd0b1N0cmluZyddKCldKXtpZihfMHgyZTYwZjMrKyxfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTU0KV0rKyxfMHgyZTYwZjM+XzB4NWIxZGNlKXtfMHgyMjMwZjg9ITB4MDticmVhazt9aWYoIV8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxNjApXSYmXzB4Mjg3YmE5W18weDRkMjJmMigweGRlKV0mJl8weDI4N2JhOVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgyODdiYTlbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHgyMjMwZjg9ITB4MDticmVhazt9XzB4NTEyMjcxW18weDRkMjJmMigweDFhNildKF8weDE2NjJmYVsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4MWY2YjI2LF8weDM3YTVkNSxfMHgxYjY2MDQsXzB4MjUyYWU0LF8weDQwNmNmMixfMHgyODdiYTkpKTt9fX19fWlmKF8weDU1YTJiYltfMHg0ZDIyZjIoMHgxNjIpXT1fMHgyNTJhZTQsXzB4Njc5ZDdmPyhfMHg1NWEyYmJbJ3ZhbHVlJ109XzB4MWI2NjA0W18weDRkMjJmMigweDE1MyldKCksdGhpc1snX2NhcElmU3RyaW5nJ10oXzB4MjUyYWU0LF8weDU1YTJiYixfMHgyODdiYTksXzB4MmQ5ODUyKSk6XzB4MjUyYWU0PT09XzB4NGQyMmYyKDB4ZTMpP18weDU1YTJiYltfMHg0ZDIyZjIoMHgxYjQpXT10aGlzW18weDRkMjJmMigweGNlKV1bXzB4NGQyMmYyKDB4MTg4KV0oXzB4MWI2NjA0KTpfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxNTkpP18weDU1YTJiYltfMHg0ZDIyZjIoMHgxYjQpXT1fMHgxYjY2MDRbJ3RvU3RyaW5nJ10oKTpfMHgyNTJhZTQ9PT0nUmVnRXhwJz9fMHg1NWEyYmJbXzB4NGQyMmYyKDB4MWI0KV09dGhpc1tfMHg0ZDIyZjIoMHgxYTgpXVtfMHg0ZDIyZjIoMHgxODgpXShfMHgxYjY2MDQpOl8weDI1MmFlND09PSdzeW1ib2wnJiZ0aGlzWydfU3ltYm9sJ10/XzB4NTVhMmJiWyd2YWx1ZSddPXRoaXNbXzB4NGQyMmYyKDB4MTUwKV1bXzB4NGQyMmYyKDB4ZjcpXVsndG9TdHJpbmcnXVtfMHg0ZDIyZjIoMHgxODgpXShfMHgxYjY2MDQpOiFfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZDgpXSYmIShfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxN2UpfHxfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxMjEpKSYmKGRlbGV0ZSBfMHg1NWEyYmJbXzB4NGQyMmYyKDB4MWI0KV0sXzB4NTVhMmJiW18weDRkMjJmMigweDExMSldPSEweDApLF8weDIyMzBmOCYmKF8weDU1YTJiYltfMHg0ZDIyZjIoMHhmZSldPSEweDApLF8weDYwOTMyMD1fMHgyODdiYTlbJ25vZGUnXVsnY3VycmVudCddLF8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxNjkpXVtfMHg0ZDIyZjIoMHgxNTcpXT1fMHg1NWEyYmIsdGhpc1tfMHg0ZDIyZjIoMHhjNSldKF8weDU1YTJiYixfMHgyODdiYTkpLF8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxNTUpXSl7Zm9yKF8weDJhYmY3Nz0weDAsXzB4MTc5YmEzPV8weDUxMjI3MVsnbGVuZ3RoJ107XzB4MmFiZjc3PF8weDE3OWJhMztfMHgyYWJmNzcrKylfMHg1MTIyNzFbXzB4MmFiZjc3XShfMHgyYWJmNzcpO31fMHgxZjZiMjZbXzB4NGQyMmYyKDB4MTU1KV0mJihfMHg1NWEyYmJbXzB4NGQyMmYyKDB4MTI5KV09XzB4MWY2YjI2KTt9Y2F0Y2goXzB4ODYyNDVlKXtfMHhjNWJlMTYoXzB4ODYyNDVlLF8weDU1YTJiYixfMHgyODdiYTkpO31yZXR1cm4gdGhpc1tfMHg0ZDIyZjIoMHgxNGQpXShfMHgxYjY2MDQsXzB4NTVhMmJiKSx0aGlzW18weDRkMjJmMigweGZkKV0oXzB4NTVhMmJiLF8weDI4N2JhOSksXzB4Mjg3YmE5W18weDRkMjJmMigweDE2OSldWydjdXJyZW50J109XzB4NjA5MzIwLF8weDI4N2JhOVsnbGV2ZWwnXS0tLF8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkZSldPV8weDViODMxMixfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZGUpXSYmXzB4Mjg3YmE5W18weDRkMjJmMigweDFhZCldW18weDRkMjJmMigweDEwNildKCksXzB4NTVhMmJiO31bJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnXShfMHg1YjNjOWQpe3ZhciBfMHgzMGVjZTQ9XzB4NTEyYTM3O3JldHVybiBPYmplY3RbXzB4MzBlY2U0KDB4ZmEpXT9PYmplY3RbXzB4MzBlY2U0KDB4ZmEpXShfMHg1YjNjOWQpOltdO31bXzB4NTEyYTM3KDB4MTgwKV0oXzB4MjBmYTk5KXt2YXIgXzB4NDAxNjVkPV8weDUxMmEzNztyZXR1cm4hIShfMHgyMGZhOTkmJl8weDE0YThjY1tfMHg0MDE2NWQoMHhkMCldJiZ0aGlzW18weDQwMTY1ZCgweGRhKV0oXzB4MjBmYTk5KT09PV8weDQwMTY1ZCgweGZjKSYmXzB4MjBmYTk5W18weDQwMTY1ZCgweDFhOSldKTt9W18weDUxMmEzNygweGNjKV0oXzB4MjNkYTMyLF8weDVmOWJiZCxfMHg1NjUzZWIpe3ZhciBfMHg1NWVjZTQ9XzB4NTEyYTM3O3JldHVybiBfMHg1NjUzZWJbXzB4NTVlY2U0KDB4MTM5KV0/dHlwZW9mIF8weDIzZGEzMltfMHg1ZjliYmRdPT0nZnVuY3Rpb24nOiEweDE7fVtfMHg1MTJhMzcoMHgxM2IpXShfMHg0MWFhN2Mpe3ZhciBfMHgzYTgwZDA9XzB4NTEyYTM3LF8weDMzOTFlYT0nJztyZXR1cm4gXzB4MzM5MWVhPXR5cGVvZiBfMHg0MWFhN2MsXzB4MzM5MWVhPT09XzB4M2E4MGQwKDB4MTk0KT90aGlzW18weDNhODBkMCgweGRhKV0oXzB4NDFhYTdjKT09PV8weDNhODBkMCgweDE0YSk/XzB4MzM5MWVhPSdhcnJheSc6dGhpc1tfMHgzYTgwZDAoMHhkYSldKF8weDQxYWE3Yyk9PT1fMHgzYTgwZDAoMHgxOWEpP18weDMzOTFlYT1fMHgzYTgwZDAoMHhlMyk6dGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4NDFhYTdjKT09PV8weDNhODBkMCgweDEwOCk/XzB4MzM5MWVhPSdiaWdpbnQnOl8weDQxYWE3Yz09PW51bGw/XzB4MzM5MWVhPSdudWxsJzpfMHg0MWFhN2NbXzB4M2E4MGQwKDB4ZGYpXSYmKF8weDMzOTFlYT1fMHg0MWFhN2NbJ2NvbnN0cnVjdG9yJ11bXzB4M2E4MGQwKDB4ZTUpXXx8XzB4MzM5MWVhKTpfMHgzMzkxZWE9PT1fMHgzYTgwZDAoMHgxMjEpJiZ0aGlzWydfSFRNTEFsbENvbGxlY3Rpb24nXSYmXzB4NDFhYTdjIGluc3RhbmNlb2YgdGhpc1tfMHgzYTgwZDAoMHgxMGQpXSYmKF8weDMzOTFlYT1fMHgzYTgwZDAoMHgxYTEpKSxfMHgzMzkxZWE7fVtfMHg1MTJhMzcoMHhkYSldKF8weDE1MjIzMil7dmFyIF8weDUwZGIxOT1fMHg1MTJhMzc7cmV0dXJuIE9iamVjdFsncHJvdG90eXBlJ11bXzB4NTBkYjE5KDB4MTIzKV1bJ2NhbGwnXShfMHgxNTIyMzIpO31bXzB4NTEyYTM3KDB4YzcpXShfMHgxZTE3N2Mpe3ZhciBfMHgxYTc5OTM9XzB4NTEyYTM3O3JldHVybiBfMHgxZTE3N2M9PT1fMHgxYTc5OTMoMHgxOTEpfHxfMHgxZTE3N2M9PT1fMHgxYTc5OTMoMHhlYyl8fF8weDFlMTc3Yz09PSdudW1iZXInO31bXzB4NTEyYTM3KDB4MTU4KV0oXzB4NTcxYjViKXt2YXIgXzB4MmIzMjIzPV8weDUxMmEzNztyZXR1cm4gXzB4NTcxYjViPT09XzB4MmIzMjIzKDB4MTJiKXx8XzB4NTcxYjViPT09J1N0cmluZyd8fF8weDU3MWI1Yj09PSdOdW1iZXInO31bXzB4NTEyYTM3KDB4MTcyKV0oXzB4MWRhOTYxLF8weDIyMzA0YyxfMHgyOTNmMWYsXzB4M2RjM2I3LF8weDFmOGY3ZCxfMHgzZjUyMWUpe3ZhciBfMHg0MTQ1OTE9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4Mjk0MTIyKXt2YXIgXzB4ZTIwNTdhPV8weDIxNTIsXzB4NGNhZjRlPV8weDFmOGY3ZFsnbm9kZSddWydjdXJyZW50J10sXzB4MTdjNTM4PV8weDFmOGY3ZFtfMHhlMjA1N2EoMHgxNjkpXVtfMHhlMjA1N2EoMHhlOCldLF8weDE4OTljOD1fMHgxZjhmN2RbXzB4ZTIwNTdhKDB4MTY5KV1bJ3BhcmVudCddO18weDFmOGY3ZFtfMHhlMjA1N2EoMHgxNjkpXVsncGFyZW50J109XzB4NGNhZjRlLF8weDFmOGY3ZFtfMHhlMjA1N2EoMHgxNjkpXVtfMHhlMjA1N2EoMHhlOCldPXR5cGVvZiBfMHgzZGMzYjc9PV8weGUyMDU3YSgweDFiMCk/XzB4M2RjM2I3Ol8weDI5NDEyMixfMHgxZGE5NjFbJ3B1c2gnXShfMHg0MTQ1OTFbXzB4ZTIwNTdhKDB4MTBiKV0oXzB4MjIzMDRjLF8weDI5M2YxZixfMHgzZGMzYjcsXzB4MWY4ZjdkLF8weDNmNTIxZSkpLF8weDFmOGY3ZFtfMHhlMjA1N2EoMHgxNjkpXVtfMHhlMjA1N2EoMHhkNyldPV8weDE4OTljOCxfMHgxZjhmN2RbJ25vZGUnXVtfMHhlMjA1N2EoMHhlOCldPV8weDE3YzUzODt9O31bXzB4NTEyYTM3KDB4ZTApXShfMHg0OWI5ZTUsXzB4MTUyZmUxLF8weDVhZWI3OCxfMHgzNjE5ODYsXzB4NGVkZjI0LF8weDI3ODhiZixfMHgzMTliZjkpe3ZhciBfMHgzNGQyNTQ9XzB4NTEyYTM3LF8weDFkMDBlOD10aGlzO3JldHVybiBfMHgxNTJmZTFbXzB4MzRkMjU0KDB4MTA0KStfMHg0ZWRmMjRbXzB4MzRkMjU0KDB4MTIzKV0oKV09ITB4MCxmdW5jdGlvbihfMHg1ZDJjYyl7dmFyIF8weDQxNDkzZj1fMHgzNGQyNTQsXzB4MTBkNDRkPV8weDI3ODhiZltfMHg0MTQ5M2YoMHgxNjkpXVtfMHg0MTQ5M2YoMHgxNTcpXSxfMHgxMDFmZDk9XzB4Mjc4OGJmW18weDQxNDkzZigweDE2OSldW18weDQxNDkzZigweGU4KV0sXzB4NDJkZTMxPV8weDI3ODhiZlsnbm9kZSddW18weDQxNDkzZigweGQ3KV07XzB4Mjc4OGJmWydub2RlJ11bXzB4NDE0OTNmKDB4ZDcpXT1fMHgxMGQ0NGQsXzB4Mjc4OGJmW18weDQxNDkzZigweDE2OSldW18weDQxNDkzZigweGU4KV09XzB4NWQyY2MsXzB4NDliOWU1W18weDQxNDkzZigweDFhNildKF8weDFkMDBlOFtfMHg0MTQ5M2YoMHgxMGIpXShfMHg1YWViNzgsXzB4MzYxOTg2LF8weDRlZGYyNCxfMHgyNzg4YmYsXzB4MzE5YmY5KSksXzB4Mjc4OGJmW18weDQxNDkzZigweDE2OSldW18weDQxNDkzZigweGQ3KV09XzB4NDJkZTMxLF8weDI3ODhiZltfMHg0MTQ5M2YoMHgxNjkpXVtfMHg0MTQ5M2YoMHhlOCldPV8weDEwMWZkOTt9O31bJ19wcm9wZXJ0eSddKF8weGQ4MmZjNyxfMHg1YmZhYTAsXzB4NWNjZTliLF8weDEzYzQ4YSxfMHg1NjU2Mjgpe3ZhciBfMHgxZjg2ZGM9XzB4NTEyYTM3LF8weDM3NzQxMz10aGlzO18weDU2NTYyOHx8KF8weDU2NTYyOD1mdW5jdGlvbihfMHhkMmRjMzYsXzB4NDM3MzY4KXtyZXR1cm4gXzB4ZDJkYzM2W18weDQzNzM2OF07fSk7dmFyIF8weDU4ZTFjOT1fMHg1Y2NlOWJbXzB4MWY4NmRjKDB4MTIzKV0oKSxfMHgxMjRmOGU9XzB4MTNjNDhhW18weDFmODZkYygweDE2YSldfHx7fSxfMHg0NTdhNjU9XzB4MTNjNDhhWydkZXB0aCddLF8weGUxYWQ5NT1fMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTYwKV07dHJ5e3ZhciBfMHg0Nzg0YWM9dGhpc1tfMHgxZjg2ZGMoMHhmMyldKF8weGQ4MmZjNyksXzB4MzVlYTliPV8weDU4ZTFjOTtfMHg0Nzg0YWMmJl8weDM1ZWE5YlsweDBdPT09J1xcXFx4MjcnJiYoXzB4MzVlYTliPV8weDM1ZWE5YltfMHgxZjg2ZGMoMHgxNzUpXSgweDEsXzB4MzVlYTliW18weDFmODZkYygweDE1NSldLTB4MikpO3ZhciBfMHgxY2FlYjA9XzB4MTNjNDhhW18weDFmODZkYygweDE2YSldPV8weDEyNGY4ZVtfMHgxZjg2ZGMoMHgxMDQpK18weDM1ZWE5Yl07XzB4MWNhZWIwJiYoXzB4MTNjNDhhW18weDFmODZkYygweGQ4KV09XzB4MTNjNDhhWydkZXB0aCddKzB4MSksXzB4MTNjNDhhWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ109ISFfMHgxY2FlYjA7dmFyIF8weDM1OWZhZj10eXBlb2YgXzB4NWNjZTliPT1fMHgxZjg2ZGMoMHhlZSksXzB4NWM3ZmNiPXsnbmFtZSc6XzB4MzU5ZmFmfHxfMHg0Nzg0YWM/XzB4NThlMWM5OnRoaXNbXzB4MWY4NmRjKDB4ZDIpXShfMHg1OGUxYzkpfTtpZihfMHgzNTlmYWYmJihfMHg1YzdmY2JbXzB4MWY4NmRjKDB4ZWUpXT0hMHgwKSwhKF8weDViZmFhMD09PSdhcnJheSd8fF8weDViZmFhMD09PV8weDFmODZkYygweDE3NikpKXt2YXIgXzB4MWM1OTcwPXRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXShfMHhkODJmYzcsXzB4NWNjZTliKTtpZihfMHgxYzU5NzAmJihfMHgxYzU5NzBbJ3NldCddJiYoXzB4NWM3ZmNiW18weDFmODZkYygweDE0MildPSEweDApLF8weDFjNTk3MFsnZ2V0J10mJiFfMHgxY2FlYjAmJiFfMHgxM2M0OGFbJ3Jlc29sdmVHZXR0ZXJzJ10pKXJldHVybiBfMHg1YzdmY2JbJ2dldHRlciddPSEweDAsdGhpc1tfMHgxZjg2ZGMoMHgxMzUpXShfMHg1YzdmY2IsXzB4MTNjNDhhKSxfMHg1YzdmY2I7fXZhciBfMHgyMzA2YTg7dHJ5e18weDIzMDZhOD1fMHg1NjU2MjgoXzB4ZDgyZmM3LF8weDVjY2U5Yik7fWNhdGNoKF8weDRkYWE1Myl7cmV0dXJuIF8weDVjN2ZjYj17J25hbWUnOl8weDU4ZTFjOSwndHlwZSc6XzB4MWY4NmRjKDB4MWFhKSwnZXJyb3InOl8weDRkYWE1M1tfMHgxZjg2ZGMoMHgxOWIpXX0sdGhpc1tfMHgxZjg2ZGMoMHgxMzUpXShfMHg1YzdmY2IsXzB4MTNjNDhhKSxfMHg1YzdmY2I7fXZhciBfMHhjNjUzOD10aGlzW18weDFmODZkYygweDEzYildKF8weDIzMDZhOCksXzB4MjZlN2NhPXRoaXNbXzB4MWY4NmRjKDB4YzcpXShfMHhjNjUzOCk7aWYoXzB4NWM3ZmNiW18weDFmODZkYygweDE2MildPV8weGM2NTM4LF8weDI2ZTdjYSl0aGlzW18weDFmODZkYygweDEzNSldKF8weDVjN2ZjYixfMHgxM2M0OGEsXzB4MjMwNmE4LGZ1bmN0aW9uKCl7dmFyIF8weDUwNTVjZT1fMHgxZjg2ZGM7XzB4NWM3ZmNiW18weDUwNTVjZSgweDFiNCldPV8weDIzMDZhOFtfMHg1MDU1Y2UoMHgxNTMpXSgpLCFfMHgxY2FlYjAmJl8weDM3NzQxM1tfMHg1MDU1Y2UoMHgxNzEpXShfMHhjNjUzOCxfMHg1YzdmY2IsXzB4MTNjNDhhLHt9KTt9KTtlbHNle3ZhciBfMHgxZDk5MGQ9XzB4MTNjNDhhWydhdXRvRXhwYW5kJ10mJl8weDEzYzQ4YVsnbGV2ZWwnXTxfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTM0KV0mJl8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxYWQpXVtfMHgxZjg2ZGMoMHgxNmMpXShfMHgyMzA2YTgpPDB4MCYmXzB4YzY1MzghPT1fMHgxZjg2ZGMoMHgxOTgpJiZfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTU0KV08XzB4MTNjNDhhW18weDFmODZkYygweDFhNyldO18weDFkOTkwZHx8XzB4MTNjNDhhW18weDFmODZkYygweDEzYSldPF8weDQ1N2E2NXx8XzB4MWNhZWIwPyh0aGlzWydzZXJpYWxpemUnXShfMHg1YzdmY2IsXzB4MjMwNmE4LF8weDEzYzQ4YSxfMHgxY2FlYjB8fHt9KSx0aGlzW18weDFmODZkYygweDE0ZCldKF8weDIzMDZhOCxfMHg1YzdmY2IpKTp0aGlzW18weDFmODZkYygweDEzNSldKF8weDVjN2ZjYixfMHgxM2M0OGEsXzB4MjMwNmE4LGZ1bmN0aW9uKCl7dmFyIF8weDE0MTkxYj1fMHgxZjg2ZGM7XzB4YzY1Mzg9PT1fMHgxNDE5MWIoMHgxN2UpfHxfMHhjNjUzOD09PV8weDE0MTkxYigweDEyMSl8fChkZWxldGUgXzB4NWM3ZmNiW18weDE0MTkxYigweDFiNCldLF8weDVjN2ZjYlsnY2FwcGVkJ109ITB4MCk7fSk7fXJldHVybiBfMHg1YzdmY2I7fWZpbmFsbHl7XzB4MTNjNDhhW18weDFmODZkYygweDE2YSldPV8weDEyNGY4ZSxfMHgxM2M0OGFbXzB4MWY4NmRjKDB4ZDgpXT1fMHg0NTdhNjUsXzB4MTNjNDhhWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ109XzB4ZTFhZDk1O319W18weDUxMmEzNygweDE3MSldKF8weDE4MGY5MCxfMHgxMWQ3NDcsXzB4MTU0ZGQ4LF8weDIxODkzZil7dmFyIF8weDU2ODI1ZT1fMHg1MTJhMzcsXzB4MTc2MDU2PV8weDIxODkzZltfMHg1NjgyNWUoMHgxOTcpXXx8XzB4MTU0ZGQ4WydzdHJMZW5ndGgnXTtpZigoXzB4MTgwZjkwPT09XzB4NTY4MjVlKDB4ZWMpfHxfMHgxODBmOTA9PT1fMHg1NjgyNWUoMHhmNSkpJiZfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV0pe2xldCBfMHgxZTcwNWM9XzB4MTFkNzQ3W18weDU2ODI1ZSgweDFiNCldW18weDU2ODI1ZSgweDE1NSldO18weDE1NGRkOFtfMHg1NjgyNWUoMHgxNWYpXSs9XzB4MWU3MDVjLF8weDE1NGRkOFtfMHg1NjgyNWUoMHgxNWYpXT5fMHgxNTRkZDhbXzB4NTY4MjVlKDB4MTMyKV0/KF8weDExZDc0N1tfMHg1NjgyNWUoMHgxMTEpXT0nJyxkZWxldGUgXzB4MTFkNzQ3W18weDU2ODI1ZSgweDFiNCldKTpfMHgxZTcwNWM+XzB4MTc2MDU2JiYoXzB4MTFkNzQ3W18weDU2ODI1ZSgweDExMSldPV8weDExZDc0N1tfMHg1NjgyNWUoMHgxYjQpXVsnc3Vic3RyJ10oMHgwLF8weDE3NjA1NiksZGVsZXRlIF8weDExZDc0N1tfMHg1NjgyNWUoMHgxYjQpXSk7fX1bXzB4NTEyYTM3KDB4ZjMpXShfMHgzYTk4NmIpe3ZhciBfMHgyZWY0MGI9XzB4NTEyYTM3O3JldHVybiEhKF8weDNhOTg2YiYmXzB4MTRhOGNjW18weDJlZjQwYigweDEzOCldJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHgzYTk4NmIpPT09XzB4MmVmNDBiKDB4MTM2KSYmXzB4M2E5ODZiW18weDJlZjQwYigweDFhOSldKTt9W18weDUxMmEzNygweGQyKV0oXzB4NDk1YmNmKXt2YXIgXzB4MjUyZTdkPV8weDUxMmEzNztpZihfMHg0OTViY2ZbXzB4MjUyZTdkKDB4MTg0KV0oL15cXFxcZCskLykpcmV0dXJuIF8weDQ5NWJjZjt2YXIgXzB4NDA4OTI4O3RyeXtfMHg0MDg5Mjg9SlNPTltfMHgyNTJlN2QoMHgxM2QpXSgnJytfMHg0OTViY2YpO31jYXRjaHtfMHg0MDg5Mjg9J1xcXFx4MjInK3RoaXNbXzB4MjUyZTdkKDB4ZGEpXShfMHg0OTViY2YpKydcXFxceDIyJzt9cmV0dXJuIF8weDQwODkyOFtfMHgyNTJlN2QoMHgxODQpXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDQwODkyOD1fMHg0MDg5MjhbJ3N1YnN0ciddKDB4MSxfMHg0MDg5MjhbXzB4MjUyZTdkKDB4MTU1KV0tMHgyKTpfMHg0MDg5Mjg9XzB4NDA4OTI4W18weDI1MmU3ZCgweDEyMildKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbXzB4MjUyZTdkKDB4MTIyKV0oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbJ3JlcGxhY2UnXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4NDA4OTI4O31bXzB4NTEyYTM3KDB4MTM1KV0oXzB4M2NlMzI3LF8weGEwNWZjMCxfMHgyODViZDcsXzB4Mjk4NTg1KXt2YXIgXzB4MmUxYjZiPV8weDUxMmEzNzt0aGlzW18weDJlMWI2YigweGM1KV0oXzB4M2NlMzI3LF8weGEwNWZjMCksXzB4Mjk4NTg1JiZfMHgyOTg1ODUoKSx0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4Mjg1YmQ3LF8weDNjZTMyNyksdGhpc1tfMHgyZTFiNmIoMHhmZCldKF8weDNjZTMyNyxfMHhhMDVmYzApO31bXzB4NTEyYTM3KDB4YzUpXShfMHgxZGY1Y2IsXzB4MWU2MDBlKXt2YXIgXzB4NTY5NTI0PV8weDUxMmEzNzt0aGlzW18weDU2OTUyNCgweGU3KV0oXzB4MWRmNWNiLF8weDFlNjAwZSksdGhpc1tfMHg1Njk1MjQoMHgxOTUpXShfMHgxZGY1Y2IsXzB4MWU2MDBlKSx0aGlzW18weDU2OTUyNCgweGM5KV0oXzB4MWRmNWNiLF8weDFlNjAwZSksdGhpc1tfMHg1Njk1MjQoMHgxMDkpXShfMHgxZGY1Y2IsXzB4MWU2MDBlKTt9W18weDUxMmEzNygweGU3KV0oXzB4NGEzMmQwLF8weDM2NWQxOSl7fVsnX3NldE5vZGVRdWVyeVBhdGgnXShfMHg4ZTI5ZWUsXzB4MTk2OWRiKXt9Wydfc2V0Tm9kZUxhYmVsJ10oXzB4OTU3ZjU0LF8weDMwNDNmZSl7fVtfMHg1MTJhMzcoMHgxNzQpXShfMHg0ZjI0NGQpe3ZhciBfMHgzMzMwNmU9XzB4NTEyYTM3O3JldHVybiBfMHg0ZjI0NGQ9PT10aGlzW18weDMzMzA2ZSgweDFhMildO31bJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDJmMmQ2NSxfMHg1YTc1NTQpe3ZhciBfMHgxYTk2NDg9XzB4NTEyYTM3O3RoaXNbXzB4MWE5NjQ4KDB4ZjEpXShfMHgyZjJkNjUsXzB4NWE3NTU0KSx0aGlzW18weDFhOTY0OCgweDExZildKF8weDJmMmQ2NSksXzB4NWE3NTU0Wydzb3J0UHJvcHMnXSYmdGhpc1tfMHgxYTk2NDgoMHgxODIpXShfMHgyZjJkNjUpLHRoaXNbJ19hZGRGdW5jdGlvbnNOb2RlJ10oXzB4MmYyZDY1LF8weDVhNzU1NCksdGhpc1tfMHgxYTk2NDgoMHgxNWEpXShfMHgyZjJkNjUsXzB4NWE3NTU0KSx0aGlzW18weDFhOTY0OCgweDE0NSldKF8weDJmMmQ2NSk7fVtfMHg1MTJhMzcoMHgxNGQpXShfMHgyMTg1OTYsXzB4MzliYjk5KXt2YXIgXzB4ZjcxMWRmPV8weDUxMmEzNzt0cnl7XzB4MjE4NTk2JiZ0eXBlb2YgXzB4MjE4NTk2W18weGY3MTFkZigweDE1NSldPT1fMHhmNzExZGYoMHgxYjApJiYoXzB4MzliYjk5WydsZW5ndGgnXT1fMHgyMTg1OTZbXzB4ZjcxMWRmKDB4MTU1KV0pO31jYXRjaHt9aWYoXzB4MzliYjk5Wyd0eXBlJ109PT1fMHhmNzExZGYoMHgxYjApfHxfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTYyKV09PT0nTnVtYmVyJyl7aWYoaXNOYU4oXzB4MzliYjk5Wyd2YWx1ZSddKSlfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTQ4KV09ITB4MCxkZWxldGUgXzB4MzliYjk5W18weGY3MTFkZigweDFiNCldO2Vsc2Ugc3dpdGNoKF8weDM5YmI5OVtfMHhmNzExZGYoMHgxYjQpXSl7Y2FzZSBOdW1iZXJbXzB4ZjcxMWRmKDB4MThjKV06XzB4MzliYjk5W18weGY3MTFkZigweDEwNSldPSEweDAsZGVsZXRlIF8weDM5YmI5OVtfMHhmNzExZGYoMHgxYjQpXTticmVhaztjYXNlIE51bWJlcltfMHhmNzExZGYoMHgxMDIpXTpfMHgzOWJiOTlbJ25lZ2F0aXZlSW5maW5pdHknXT0hMHgwLGRlbGV0ZSBfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MWI0KV07YnJlYWs7Y2FzZSAweDA6dGhpc1tfMHhmNzExZGYoMHgxOTApXShfMHgzOWJiOTlbJ3ZhbHVlJ10pJiYoXzB4MzliYjk5WyduZWdhdGl2ZVplcm8nXT0hMHgwKTticmVhazt9fWVsc2UgXzB4MzliYjk5W18weGY3MTFkZigweDE2MildPT09XzB4ZjcxMWRmKDB4MTk4KSYmdHlwZW9mIF8weDIxODU5NltfMHhmNzExZGYoMHhlNSldPT0nc3RyaW5nJyYmXzB4MjE4NTk2W18weGY3MTFkZigweGU1KV0mJl8weDM5YmI5OVtfMHhmNzExZGYoMHhlNSldJiZfMHgyMTg1OTZbXzB4ZjcxMWRmKDB4ZTUpXSE9PV8weDM5YmI5OVsnbmFtZSddJiYoXzB4MzliYjk5W18weGY3MTFkZigweDE1YildPV8weDIxODU5NlsnbmFtZSddKTt9WydfaXNOZWdhdGl2ZVplcm8nXShfMHgxODc4YzMpe3JldHVybiAweDEvXzB4MTg3OGMzPT09TnVtYmVyWydORUdBVElWRV9JTkZJTklUWSddO31bXzB4NTEyYTM3KDB4MTgyKV0oXzB4NGY2YmRjKXt2YXIgXzB4NTRiNDM2PV8weDUxMmEzNzshXzB4NGY2YmRjW18weDU0YjQzNigweDEyOSldfHwhXzB4NGY2YmRjW18weDU0YjQzNigweDEyOSldW18weDU0YjQzNigweDE1NSldfHxfMHg0ZjZiZGNbJ3R5cGUnXT09PV8weDU0YjQzNigweDFhYyl8fF8weDRmNmJkY1sndHlwZSddPT09J01hcCd8fF8weDRmNmJkY1tfMHg1NGI0MzYoMHgxNjIpXT09PSdTZXQnfHxfMHg0ZjZiZGNbXzB4NTRiNDM2KDB4MTI5KV1bXzB4NTRiNDM2KDB4MTc4KV0oZnVuY3Rpb24oXzB4NDQxMGVmLF8weDIwZTVhZil7dmFyIF8weDE1NzY4OT1fMHg1NGI0MzYsXzB4MmY0NjgyPV8weDQ0MTBlZltfMHgxNTc2ODkoMHhlNSldW18weDE1NzY4OSgweDFiMyldKCksXzB4MjQ5YTJmPV8weDIwZTVhZlsnbmFtZSddW18weDE1NzY4OSgweDFiMyldKCk7cmV0dXJuIF8weDJmNDY4MjxfMHgyNDlhMmY/LTB4MTpfMHgyZjQ2ODI+XzB4MjQ5YTJmPzB4MToweDA7fSk7fVsnX2FkZEZ1bmN0aW9uc05vZGUnXShfMHgzZTRmMGMsXzB4MTY2MjBkKXt2YXIgXzB4M2M0OTFkPV8weDUxMmEzNztpZighKF8weDE2NjIwZFsnbm9GdW5jdGlvbnMnXXx8IV8weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXXx8IV8weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXVtfMHgzYzQ5MWQoMHgxNTUpXSkpe2Zvcih2YXIgXzB4MzI0MjRkPVtdLF8weDExY2JiZT1bXSxfMHg0ZmU3YjQ9MHgwLF8weDNkOGQwYz1fMHgzZTRmMGNbXzB4M2M0OTFkKDB4MTI5KV1bXzB4M2M0OTFkKDB4MTU1KV07XzB4NGZlN2I0PF8weDNkOGQwYztfMHg0ZmU3YjQrKyl7dmFyIF8weDQ2YzM1MT1fMHgzZTRmMGNbXzB4M2M0OTFkKDB4MTI5KV1bXzB4NGZlN2I0XTtfMHg0NmMzNTFbXzB4M2M0OTFkKDB4MTYyKV09PT1fMHgzYzQ5MWQoMHgxOTgpP18weDMyNDI0ZFsncHVzaCddKF8weDQ2YzM1MSk6XzB4MTFjYmJlW18weDNjNDkxZCgweDFhNildKF8weDQ2YzM1MSk7fWlmKCEoIV8weDExY2JiZVtfMHgzYzQ5MWQoMHgxNTUpXXx8XzB4MzI0MjRkW18weDNjNDkxZCgweDE1NSldPD0weDEpKXtfMHgzZTRmMGNbXzB4M2M0OTFkKDB4MTI5KV09XzB4MTFjYmJlO3ZhciBfMHg0NmQ3MDk9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4MzI0MjRkfTt0aGlzWydfc2V0Tm9kZUlkJ10oXzB4NDZkNzA5LF8weDE2NjIwZCksdGhpc1tfMHgzYzQ5MWQoMHhmMSldKF8weDQ2ZDcwOSxfMHgxNjYyMGQpLHRoaXNbXzB4M2M0OTFkKDB4MTFmKV0oXzB4NDZkNzA5KSx0aGlzWydfc2V0Tm9kZVBlcm1pc3Npb25zJ10oXzB4NDZkNzA5LF8weDE2NjIwZCksXzB4NDZkNzA5WydpZCddKz0nXFxcXHgyMGYnLF8weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXVtfMHgzYzQ5MWQoMHgxMTkpXShfMHg0NmQ3MDkpO319fVtfMHg1MTJhMzcoMHgxNWEpXShfMHgzMDk5MTYsXzB4MzFhZGM1KXt9W18weDUxMmEzNygweDExZildKF8weDMzYzAxZCl7fVtfMHg1MTJhMzcoMHhjZildKF8weDJmMTRlZCl7dmFyIF8weDI5Y2FmOT1fMHg1MTJhMzc7cmV0dXJuIEFycmF5W18weDI5Y2FmOSgweDE5ZSldKF8weDJmMTRlZCl8fHR5cGVvZiBfMHgyZjE0ZWQ9PV8weDI5Y2FmOSgweDE5NCkmJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDJmMTRlZCk9PT1fMHgyOWNhZjkoMHgxNGEpO31bXzB4NTEyYTM3KDB4MTA5KV0oXzB4M2QyYjM1LF8weDVhMmFhZSl7fVtfMHg1MTJhMzcoMHgxNDUpXShfMHg1ZTg3NDkpe3ZhciBfMHgxZWM5MGM9XzB4NTEyYTM3O2RlbGV0ZSBfMHg1ZTg3NDlbXzB4MWVjOTBjKDB4MTg5KV0sZGVsZXRlIF8weDVlODc0OVtfMHgxZWM5MGMoMHhjYildLGRlbGV0ZSBfMHg1ZTg3NDlbXzB4MWVjOTBjKDB4MTkzKV07fVsnX3NldE5vZGVFeHByZXNzaW9uUGF0aCddKF8weDNlZGQzYyxfMHgzZTJlMGMpe31bXzB4NTEyYTM3KDB4MTAwKV0oXzB4NTZjZjZkKXt2YXIgXzB4MmNmNjNhPV8weDUxMmEzNztyZXR1cm4gXzB4NTZjZjZkP18weDU2Y2Y2ZFtfMHgyY2Y2M2EoMHgxODQpXSh0aGlzW18weDJjZjYzYSgweDE4MyldKT8nWycrXzB4NTZjZjZkKyddJzpfMHg1NmNmNmRbXzB4MmNmNjNhKDB4MTg0KV0odGhpc1tfMHgyY2Y2M2EoMHhmMildKT8nLicrXzB4NTZjZjZkOl8weDU2Y2Y2ZFtfMHgyY2Y2M2EoMHgxODQpXSh0aGlzW18weDJjZjYzYSgweGUxKV0pPydbJytfMHg1NmNmNmQrJ10nOidbXFxcXHgyNycrXzB4NTZjZjZkKydcXFxceDI3XSc6Jyc7fX1sZXQgXzB4Y2I2MjU1PW5ldyBfMHg1NjEzMGQoKTtmdW5jdGlvbiBfMHg0YTI5NWEoXzB4NTBkYjAwLF8weDQ1ZGFhNSxfMHhjNWFiMmQsXzB4MWZkNGI4LF8weGY5NDM1ZixfMHg1MWEwNGYpe3ZhciBfMHg0ODAxYjY9XzB4NTEyYTM3O2xldCBfMHg0MGRiNGEsXzB4MWEzNTE2O3RyeXtfMHgxYTM1MTY9XzB4Mzk5Njc4KCksXzB4NDBkYjRhPV8weDU4NmVhNFtfMHg0NWRhYTVdLCFfMHg0MGRiNGF8fF8weDFhMzUxNi1fMHg0MGRiNGFbJ3RzJ10+MHgxZjQmJl8weDQwZGI0YVtfMHg0ODAxYjYoMHgxNjYpXSYmXzB4NDBkYjRhW18weDQ4MDFiNigweDE0YildL18weDQwZGI0YVsnY291bnQnXTwweDY0PyhfMHg1ODZlYTRbXzB4NDVkYWE1XT1fMHg0MGRiNGE9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHgxYTM1MTZ9LF8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXT17fSk6XzB4MWEzNTE2LV8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVsndHMnXT4weDMyJiZfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bXzB4NDgwMWI2KDB4MTY2KV0mJl8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNGIpXS9fMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bXzB4NDgwMWI2KDB4MTY2KV08MHg2NCYmKF8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXT17fSk7bGV0IF8weDE2Yjk0Mj1bXSxfMHgzN2UyMDg9XzB4NDBkYjRhW18weDQ4MDFiNigweDE0MCldfHxfMHg1ODZlYTRbJ2hpdHMnXVtfMHg0ODAxYjYoMHgxNDApXT9fMHgxYjA3MTc6XzB4MTZhMjIyLF8weDQyNDVlOD1fMHg0ODg3ZjA9Pnt2YXIgXzB4MTFlMmFiPV8weDQ4MDFiNjtsZXQgXzB4NTRiMDMzPXt9O3JldHVybiBfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTI5KV09XzB4NDg4N2YwWydwcm9wcyddLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMzApXT1fMHg0ODg3ZjBbJ2VsZW1lbnRzJ10sXzB4NTRiMDMzW18weDExZTJhYigweDE5NyldPV8weDQ4ODdmMFtfMHgxMWUyYWIoMHgxOTcpXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTMyKV09XzB4NDg4N2YwW18weDExZTJhYigweDEzMildLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxYTcpXT1fMHg0ODg3ZjBbXzB4MTFlMmFiKDB4MWE3KV0sXzB4NTRiMDMzW18weDExZTJhYigweDEzNCldPV8weDQ4ODdmMFtfMHgxMWUyYWIoMHgxMzQpXSxfMHg1NGIwMzNbJ3NvcnRQcm9wcyddPSEweDEsXzB4NTRiMDMzW18weDExZTJhYigweDEzOSldPSFfMHg1NGE4NzAsXzB4NTRiMDMzW18weDExZTJhYigweGQ4KV09MHgxLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxM2EpXT0weDAsXzB4NTRiMDMzWydleHBJZCddPV8weDExZTJhYigweGQxKSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTZkKV09XzB4MTFlMmFiKDB4MTY0KSxfMHg1NGIwMzNbJ2F1dG9FeHBhbmQnXT0hMHgwLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxYWQpXT1bXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTU0KV09MHgwLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxYWIpXT0hMHgwLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxNWYpXT0weDAsXzB4NTRiMDMzW18weDExZTJhYigweDE2OSldPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weDU0YjAzMzt9O2Zvcih2YXIgXzB4MTFkZjgyPTB4MDtfMHgxMWRmODI8XzB4Zjk0MzVmWydsZW5ndGgnXTtfMHgxMWRmODIrKylfMHgxNmI5NDJbXzB4NDgwMWI2KDB4MWE2KV0oXzB4Y2I2MjU1W18weDQ4MDFiNigweDEyNyldKHsndGltZU5vZGUnOl8weDUwZGIwMD09PV8weDQ4MDFiNigweDE0Yil8fHZvaWQgMHgwfSxfMHhmOTQzNWZbXzB4MTFkZjgyXSxfMHg0MjQ1ZTgoXzB4MzdlMjA4KSx7fSkpO2lmKF8weDUwZGIwMD09PSd0cmFjZScpe2xldCBfMHgyMGYwMTE9RXJyb3JbXzB4NDgwMWI2KDB4MTMzKV07dHJ5e0Vycm9yW18weDQ4MDFiNigweDEzMyldPTB4MS8weDAsXzB4MTZiOTQyW18weDQ4MDFiNigweDFhNildKF8weGNiNjI1NVtfMHg0ODAxYjYoMHgxMjcpXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbXzB4NDgwMWI2KDB4MTQ3KV0sXzB4NDI0NWU4KF8weDM3ZTIwOCkseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbJ3N0YWNrVHJhY2VMaW1pdCddPV8weDIwZjAxMTt9fXJldHVybnsnbWV0aG9kJzpfMHg0ODAxYjYoMHgxMTIpLCd2ZXJzaW9uJzpfMHg1ZGVhNjAsJ2FyZ3MnOlt7J3RzJzpfMHhjNWFiMmQsJ3Nlc3Npb24nOl8weDFmZDRiOCwnYXJncyc6XzB4MTZiOTQyLCdpZCc6XzB4NDVkYWE1LCdjb250ZXh0JzpfMHg1MWEwNGZ9XX07fWNhdGNoKF8weDFjMmViZCl7cmV0dXJueydtZXRob2QnOl8weDQ4MDFiNigweDExMiksJ3ZlcnNpb24nOl8weDVkZWE2MCwnYXJncyc6W3sndHMnOl8weGM1YWIyZCwnc2Vzc2lvbic6XzB4MWZkNGI4LCdhcmdzJzpbeyd0eXBlJzpfMHg0ODAxYjYoMHgxYWEpLCdlcnJvcic6XzB4MWMyZWJkJiZfMHgxYzJlYmRbXzB4NDgwMWI2KDB4MTliKV19XSwnaWQnOl8weDQ1ZGFhNSwnY29udGV4dCc6XzB4NTFhMDRmfV19O31maW5hbGx5e3RyeXtpZihfMHg0MGRiNGEmJl8weDFhMzUxNil7bGV0IF8weDM5NmY5Nj1fMHgzOTk2NzgoKTtfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTY2KV0rKyxfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTRiKV0rPV8weDNmNWQyZChfMHgxYTM1MTYsXzB4Mzk2Zjk2KSxfMHg0MGRiNGFbJ3RzJ109XzB4Mzk2Zjk2LF8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNjYpXSsrLF8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVsndGltZSddKz1fMHgzZjVkMmQoXzB4MWEzNTE2LF8weDM5NmY5NiksXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldWyd0cyddPV8weDM5NmY5NiwoXzB4NDBkYjRhW18weDQ4MDFiNigweDE2NildPjB4MzJ8fF8weDQwZGI0YVtfMHg0ODAxYjYoMHgxNGIpXT4weDY0KSYmKF8weDQwZGI0YVsncmVkdWNlTGltaXRzJ109ITB4MCksKF8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNjYpXT4weDNlOHx8XzB4NTg2ZWE0WydoaXRzJ11bJ3RpbWUnXT4weDEyYykmJihfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bXzB4NDgwMWI2KDB4MTQwKV09ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4MTRhOGNjW18weDUxMmEzNygweDEwMSldO30pKGdsb2JhbFRoaXMsXzB4NDNjY2JmKDB4ZWIpLF8weDQzY2NiZigweDFiMSksXzB4NDNjY2JmKDB4MTY3KSxfMHg0M2NjYmYoMHgxN2IpLCcxLjAuMCcsXzB4NDNjY2JmKDB4ZmYpLF8weDQzY2NiZigweDE4NSksXzB4NDNjY2JmKDB4MTg3KSk7ZnVuY3Rpb24gXzB4NTc1MCgpe3ZhciBfMHg1MWZjZjM9WydzdHJpbmdpZnknLCdkaXNhYmxlZExvZycsJzZpUnp2UVInLCdyZWR1Y2VMaW1pdHMnLCdwb3J0Jywnc2V0dGVyJywncmVsb2FkJywnU3ltYm9sJywnX2NsZWFuTm9kZScsJ3VybCcsJ3N0YWNrJywnbmFuJywnX3BfbGVuZ3RoJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCd0aW1lJywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnQnVmZmVyJywnMzZVR3FLdngnLCdfU3ltYm9sJywnZWxhcHNlZCcsJ19jb25uZWN0aW5nJywndmFsdWVPZicsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywnbGVuZ3RoJywnbm93JywnY3VycmVudCcsJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJywnYmlnaW50JywnX2FkZExvYWROb2RlJywnZnVuY05hbWUnLCdjbG9zZScsJ2RhdGEnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ2FsbFN0ckxlbmd0aCcsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCcxOTEyNDI4cGVVa1pTJywndHlwZScsJ2dldE93blByb3BlcnR5TmFtZXMnLCdyb290X2V4cCcsJzcwNTUzTWt3b1RJJywnY291bnQnLFxcXCJjOlxcXFxcXFxcVXNlcnNcXFxcXFxcXGt1dHR1XFxcXFxcXFwudnNjb2RlXFxcXFxcXFxleHRlbnNpb25zXFxcXFxcXFx3YWxsYWJ5anMuY29uc29sZS1uaW5qYS0wLjAuMTgyXFxcXFxcXFxub2RlX21vZHVsZXNcXFwiLCdwYXRoVG9GaWxlVVJMJywnbm9kZScsJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZScsJ3dzOi8vJywnaW5kZXhPZicsJ3Jvb3RFeHByZXNzaW9uJywnMjEwMFRkb3diYScsJ19yZWNvbm5lY3RUaW1lb3V0JywnMTcxNDk0NWZjcE9PUycsJ19jYXBJZlN0cmluZycsJ19hZGRQcm9wZXJ0eScsJ29uZXJyb3InLCdfaXNVbmRlZmluZWQnLCdzdWJzdHInLCdFcnJvcicsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywnc29ydCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJzE0OVhiRVNqRScsJ3dlYnBhY2snLCcyNzJpWE9nV1knLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ251bGwnLCdqb2luJywnX2lzU2V0JywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdfc29ydFByb3BzJywnX251bWJlclJlZ0V4cCcsJ21hdGNoJyxbXFxcImxvY2FsaG9zdFxcXCIsXFxcIjEyNy4wLjAuMVxcXCIsXFxcImV4YW1wbGUuY3lwcmVzcy5pb1xcXCIsXFxcIkRFU0tUT1AtRVE5UVBVUlxcXCIsXFxcIjE5Mi4xNjguMS4zXFxcIl0sJ3JlYWR5U3RhdGUnLCcnLCdjYWxsJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywnY29uc29sZScsJ2hvc3QnLCdQT1NJVElWRV9JTkZJTklUWScsJ3Rlc3QnLCdoaXRzJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdDpcXFxceDIwJywnX2lzTmVnYXRpdmVaZXJvJywnYm9vbGVhbicsJ2h0dHBzOi8vdGlueXVybC5jb20vMzd4OGI3OXQnLCdfaGFzTWFwT25JdHNQYXRoJywnb2JqZWN0JywnX3NldE5vZGVRdWVyeVBhdGgnLCd3YXJuJywnc3RyTGVuZ3RoJywnZnVuY3Rpb24nLCdfV2ViU29ja2V0Q2xhc3MnLCdbb2JqZWN0XFxcXHgyMERhdGVdJywnbWVzc2FnZScsJ19zb2NrZXQnLCdvbmNsb3NlJywnaXNBcnJheScsJzM3MDQ2OWNNS0NMQicsJ2luY2x1ZGVzJywnSFRNTEFsbENvbGxlY3Rpb24nLCdfdW5kZWZpbmVkJywnaGFzT3duUHJvcGVydHknLCc6bG9nUG9pbnRJZDonLCdzbGljZScsJ3B1c2gnLCdhdXRvRXhwYW5kTGltaXQnLCdfcmVnRXhwVG9TdHJpbmcnLCdmb3JFYWNoJywndW5rbm93bicsJ3Jlc29sdmVHZXR0ZXJzJywnYXJyYXknLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywncHJvY2VzcycsJ2JpbmQnLCdudW1iZXInLCc0OTc1NycsJ2hydGltZScsJ3RvTG93ZXJDYXNlJywndmFsdWUnLCd1bnJlZicsJ1dlYlNvY2tldCcsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnX2lzUHJpbWl0aXZlVHlwZScsJ1xcXFx4MjBicm93c2VyJywnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ2RlZmF1bHQnLCdfaGFzU2V0T25JdHNQYXRoJywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdtYXAnLCdfZGF0ZVRvU3RyaW5nJywnX2lzQXJyYXknLCdTZXQnLCdyb290X2V4cF9pZCcsJ19wcm9wZXJ0eU5hbWUnLCdfY29ubmVjdFRvSG9zdE5vdycsJ19pbkJyb3dzZXInLCcxNDY0NTU4YndDSXZsJywncGVyZl9ob29rcycsJ3BhcmVudCcsJ2RlcHRoJywnYXN0cm8nLCdfb2JqZWN0VG9TdHJpbmcnLCdudXh0JywnZ2V0UHJvdG90eXBlT2YnLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywnYXV0b0V4cGFuZCcsJ2NvbnN0cnVjdG9yJywnX2FkZE9iamVjdFByb3BlcnR5JywnX3F1b3RlZFJlZ0V4cCcsJ29ub3BlbicsJ2RhdGUnLCdub2RlTW9kdWxlcycsJ25hbWUnLCdfZGlzcG9zZVdlYnNvY2tldCcsJ19zZXROb2RlSWQnLCdpbmRleCcsJ2NhcHBlZEVsZW1lbnRzJywncGFyc2UnLCcxMjcuMC4wLjEnLCdzdHJpbmcnLCdwZXJmb3JtYW5jZScsJ3N5bWJvbCcsJ2xvY2F0aW9uJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdfc2V0Tm9kZUxhYmVsJywnX2tleVN0clJlZ0V4cCcsJ19pc01hcCcsJ2dsb2JhbCcsJ1N0cmluZycsJzRHS2JVWnInLCdwcm90b3R5cGUnLCdzZW5kJywnX1dlYlNvY2tldCcsJ2dldE93blByb3BlcnR5U3ltYm9scycsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnW29iamVjdFxcXFx4MjBTZXRdJywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnY2FwcGVkUHJvcHMnLCcxNjg5NTgwMjYzNTQwJywnX3Byb3BlcnR5QWNjZXNzb3InLCdfY29uc29sZV9uaW5qYScsJ05FR0FUSVZFX0lORklOSVRZJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCdfcF8nLCdwb3NpdGl2ZUluZmluaXR5JywncG9wJywndGltZVN0YW1wJywnW29iamVjdFxcXFx4MjBCaWdJbnRdJywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ2Vycm9yJywnX3Byb3BlcnR5JywndmVyc2lvbnMnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCc2MjE0MGZCdWR4VScsJ3BhdGgnLCdnZXRXZWJTb2NrZXRDbGFzcycsJ2NhcHBlZCcsJ2xvZycsJ21ldGhvZCcsJ2Rpc2FibGVkVHJhY2UnLCd0cmFjZScsJ2FyZ3VtZW50UmVzb2x1dGlvbkVycm9yJywnX3dzJywnXFxcXHgyMHNlcnZlcicsJ3Vuc2hpZnQnLCcxME1vZXlpSicsJ3RpbWVFbmQnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCxcXFxceDIwc2VlXFxcXHgyMCcsJ19hbGxvd2VkVG9TZW5kJywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdfX2VzJysnTW9kdWxlJywndW5kZWZpbmVkJywncmVwbGFjZScsJ3RvU3RyaW5nJywnb25tZXNzYWdlJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLCdlbnVtZXJhYmxlJywnc2VyaWFsaXplJywnX3BfbmFtZScsJ3Byb3BzJywndGhlbicsJ0Jvb2xlYW4nLCdob3N0bmFtZScsJ19jb25uZWN0ZWQnLCcyMzM0eWtFU3hIJywnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnZWxlbWVudHMnLCcuLi4nLCd0b3RhbFN0ckxlbmd0aCcsJ3N0YWNrVHJhY2VMaW1pdCcsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdbb2JqZWN0XFxcXHgyME1hcF0nLCdfc2VuZEVycm9yTWVzc2FnZScsJ01hcCcsJ25vRnVuY3Rpb25zJywnbGV2ZWwnLCdfdHlwZScsJ3dzL2luZGV4LmpzJ107XzB4NTc1MD1mdW5jdGlvbigpe3JldHVybiBfMHg1MWZjZjM7fTtyZXR1cm4gXzB4NTc1MCgpO31cIik7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX29vKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZUxvZyhpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fdGUoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZUVuZCgpO31jYXRjaChlKXt9fTsvKmVzbGludCBlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9saXN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2VkaXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2dyaWQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2FkZDEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JdGltJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbiAgLS1idXR0b24tY29sb3I6IHJnYig0MiwgNDIsIDQzKTtcbiAgLS10cmFuc2l0aW9uLXRpbWU6IDAuNXM7XG4gIC0tYW5pbWF0aW9uLWRldGFpbHM6IGNvbmZpcm1hdGlvbkFuaW1hdGlvbiAwLjNzIGVhc2UtaW4tb3V0O1xuICAtLWZvbnQtbmFtZTogXCJJdGltXCIsIGN1cnNpdmU7XG4gIC0tZm9udC1jb2xvcjogYWxpY2VibHVlO1xufVxuXG5ib2R5IHtcbiAgLyogZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiOyAqL1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1uYW1lKTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1uYW1lKTtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjMWYyNzFiO1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1uYW1lKTtcbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiByZ2IoNDksIDE4MiwgMTgyKTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEsIDU2LCAxNSwgMC40ODYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NywgMTc2LCAxNzYsIDAuNDUyKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbmFtZSk7XG59XG5cbmZvcm0gPiBkaXYgPiBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xufVxuXG5pbnB1dFt0eXBlPWRhdGVdIHtcbiAgY3Vyc29yOiB0ZXh0O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1uYW1lKTtcbn1cblxuc2VsZWN0IHtcbiAgY3Vyc29yOiB0ZXh0O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1uYW1lKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xufVxuXG4ubW9kYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5zZWN0aW9uT25lIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgI2I4YjhhYTtcbn1cblxuLnNlY3Rpb25Ud28ge1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjYjhiOGFhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uc2VjdGlvblRocmVlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYXJyYW5nZVN0eWxlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMSwgNTYsIDE1LCAwLjQ4Nik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5hZGRUb2RvQ29uZmlybWF0aW9uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGdhcDogNXB4O1xuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IHZhcigtLWFuaW1hdGlvbi1kZXRhaWxzKTtcbn1cblxuLmRhdGVEaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zYXZlQnRuRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cblxuLnNhdmVCdG4sXG4uc2F2ZUJ0bkVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2MSwgMTYxLCAxNjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4O1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xufVxuXG4uY2FuY2VsQnRuLFxuLmNhbmNlbEJ0bkVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAxMDYsIDk2KTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjEsIDE2MSwgMTYxKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweDtcbn1cblxuLnN0YXR1c0J0bixcbi5zdGF0dXNCdG5FZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hZGRJdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDV4O1xufVxuXG4uaHVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGdhcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbjogMTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG59XG5cbi50b2RvTWFpbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMTIsIDIwMywgMC40ODYpO1xuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNTIxKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcbn1cblxuLnRvZG9EZXRhaWxzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnRvZG9OYW1lRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG59XG5cbi5hZGRUb2RvRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMSwgNTYsIDE1LCAwLjQ4Nik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogcmdiKDQ5LCAxODIsIDE4Mik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBnYXA6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcbn1cblxuLmFkZFRvZG9Pbk9mZiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGNlbnRlci9jb250YWluO1xufVxuXG4uYWRkVG9kb0J0biB7XG4gIGFsbDogdW5zZXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udG9kb1NpZ24ge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig3MCwgNjgsIDY4KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcbn1cblxuLnRvZG9JY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4udG9kb0RlbGV0ZUJ0biB7XG4gIGFsbDogdW5zZXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XG59XG5cbi50b2RvRWRpdEJ0biB7XG4gIGFsbDogdW5zZXQ7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XG59XG5cbi5pbWFnZVNvcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ubGlzdEljb24ge1xuICBhbGw6IHVuc2V0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XG59XG5cbi5ncmlkSWNvbiB7XG4gIGFsbDogdW5zZXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcbn1cblxuLnRvZG9NaW5pbWl6ZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XG59XG5cbi8qIG9uQ2xpY2sgY2xhc3NMaXN0ICovXG4ub25DbGlja0hpZGVUb0RvRGV0YWlscyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vbkNsaWNrVG9kb0RhdGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub25DbGlja1NlY3Rpb25UaHJlZVNocmluayB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xufVxuXG4ub25DbGlja1RvZG9NYWluU2hyaW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMTg5LCAxODkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMjA1cHg7XG4gIGFuaW1hdGlvbjogdmFyKC0tYW5pbWF0aW9uLWRldGFpbHMpO1xufVxuXG4ub25DbGlja1RvZG9EZXRhaWxzU2hyaW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm9uQ2xpY2tGaWxsVG9kb1NpZ24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG4ub25DbGlja0RlZmF1bHRUb2RvU2lnbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig3MCwgNjgsIDY4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi5zaWduU3R5bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uZWRpdFRvZG8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ub25DbGlja0VkaXRUb2RvTWFpblN0eWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyogaG92ZXIgU2VjdGlvbiAqL1xuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbmFtZSk7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xufVxuXG5zZWxlY3Q6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbi5hZGRUb2RvRGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGNvbG9yOiByZ2IoMjAyLCAxNjUsIDApO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTIsIDI1MiwgMjUyKSwgcmdiKDI1MCwgMjM3LCAxNjcpKTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4udG9kb1NpZ246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc4LCAyNDgsIDg2KTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uc2F2ZUJ0bjpob3Zlcixcbi5zYXZlQnRuRWRpdDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbn1cblxuLyogd29yayBvbmx5IHdoZW4gb25DbGlja0VkaXRUb2RvTWFpblN0eWxlIGlzIG5vdCB0aGVyZSAgKi9cbi50b2RvTWFpbjpob3Zlcjpub3QoLm9uQ2xpY2tFZGl0VG9kb01haW5TdHlsZSkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM0LCAxNjgsIDE0MywgMC40ODYpO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubGlzdEljb246aG92ZXIsXG4uZ3JpZEljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5hZGRUb2RvRGl2OmhvdmVyID4gZGl2IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSkgY2VudGVyL2NvbnRhaW47XG59XG5cbi50b2RvRGVsZXRlQnRuOmhvdmVyLFxuLnRvZG9FZGl0QnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udG9kb01pbmltaXplQnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuQGtleWZyYW1lcyBjb25maXJtYXRpb25BbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkRBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSx3SUFBQTtFQUNBLDZCQUFBO0FBQUY7O0FBR0E7O0VBRUUsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7QUFBRjs7QUFHQTtFQUNFLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7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Q0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0Esd0NBQUE7QUFMRjs7QUFRQTs7RUFFRSxxQkFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtFQUFBO0FBTEY7O0FBUUE7O0VBRUUscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxtQ0FBQTtFQUNBLFlBQUE7QUFMRjs7QUFRQTtFQUNFO0lBQ0UsVUFBQTtFQUxGO0VBUUE7SUFDRSxVQUFBO0VBTkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JdGltJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcXHJcXG4gIC0tYnV0dG9uLWNvbG9yOiByZ2IoNDIsIDQyLCA0Myk7XFxyXFxuICAtLXRyYW5zaXRpb24tdGltZTogMC41cztcXHJcXG4gIC0tYW5pbWF0aW9uLWRldGFpbHM6IGNvbmZpcm1hdGlvbkFuaW1hdGlvbiAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgLS1mb250LW5hbWU6IFxcXCJJdGltXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIC0tZm9udC1jb2xvcjogYWxpY2VibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIC8qIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7ICovXFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1uYW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxuICBjb2xvcjogIzFmMjcxYjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogcmdiKDQ5LCAxODIsIDE4Mik7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMSwgNTYsIDE1LCAwLjQ4Nik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NywgMTc2LCAxNzYsIDAuNDUyKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gZGl2ID4gaW5wdXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbmFtZSk7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1uYW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGN1cnNvcjogdGV4dDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5hbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uT25lIHtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiOGI4YWE7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uVHdvIHtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2I4YjhhYTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvblRocmVlIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFycmFuZ2VTdHlsZSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMSwgNTYsIDE1LCAwLjQ4Nik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG9Db25maXJtYXRpb24ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBhbmltYXRpb246IHZhcigtLWFuaW1hdGlvbi1kZXRhaWxzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVEaXYge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2F2ZUJ0bkRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNhdmVCdG4sXFxyXFxuLnNhdmVCdG5FZGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYxLCAxNjEsIDE2MSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWxCdG4sXFxyXFxuLmNhbmNlbEJ0bkVkaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMTA2LCA5Nik7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYxLCAxNjEsIDE2MSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHVzQnRuLFxcclxcbi5zdGF0dXNCdG5FZGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkSXRlbSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXg7XFxyXFxufVxcclxcblxcclxcbi5odWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb01haW4ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIxMiwgMjAzLCAwLjQ4Nik7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUyMSk7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RldGFpbHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9OYW1lRGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRUb2RvRGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEsIDU2LCAxNSwgMC40ODYpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBjb2xvcjogcmdiKDQ5LCAxODIsIDE4Mik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kb09uT2ZmIHtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9saXN0LnBuZ1xcXCIpIGNlbnRlci9jb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kb0J0biB7XFxyXFxuICBhbGw6IHVuc2V0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvU2lnbiB7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNzAsIDY4LCA2OCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvSWNvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RlbGV0ZUJ0biB7XFxyXFxuICBhbGw6IHVuc2V0O1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9kZWxldGUuc3ZnXFxcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9FZGl0QnRuIHtcXHJcXG4gIGFsbDogdW5zZXQ7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL2VkaXQuc3ZnXFxcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlU29ydCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0SWNvbiB7XFxyXFxuICBhbGw6IHVuc2V0O1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9saXN0LnBuZ1xcXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkSWNvbiB7XFxyXFxuICBhbGw6IHVuc2V0O1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9ncmlkLnBuZ1xcXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvTWluaW1pemVCdG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBvbkNsaWNrIGNsYXNzTGlzdCAqL1xcclxcbi5vbkNsaWNrSGlkZVRvRG9EZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5vbkNsaWNrVG9kb0RhdGUge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1NlY3Rpb25UaHJlZVNocmluayB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tUb2RvTWFpblNocmluayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAxODksIDE4OSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiAyMDVweDtcXHJcXG4gIGFuaW1hdGlvbjogdmFyKC0tYW5pbWF0aW9uLWRldGFpbHMpO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja1RvZG9EZXRhaWxzU2hyaW5rIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja0ZpbGxUb2RvU2lnbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm9uQ2xpY2tEZWZhdWx0VG9kb1NpZ24ge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDcwLCA2OCwgNjgpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduU3R5bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQwNCk7XFxyXFxuICBvcGFjaXR5OiAwLjI7XFxyXFxufVxcclxcblxcclxcbi5lZGl0VG9kbyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ub25DbGlja0VkaXRUb2RvTWFpblN0eWxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaG92ZXIgU2VjdGlvbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1uYW1lKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Q6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kb0Rpdjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiByZ2IoMjAyLCAxNjUsIDApO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgcmdiKDI1MiwgMjUyLCAyNTIpLFxcclxcbiAgICByZ2IoMjUwLCAyMzcsIDE2NylcXHJcXG4gICk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1NpZ246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OCwgMjQ4LCA4Nik7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbi5zYXZlQnRuOmhvdmVyLFxcclxcbi5zYXZlQnRuRWRpdDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxufVxcclxcblxcclxcbi8qIHdvcmsgb25seSB3aGVuIG9uQ2xpY2tFZGl0VG9kb01haW5TdHlsZSBpcyBub3QgdGhlcmUgICovXFxyXFxuLnRvZG9NYWluOmhvdmVyOm5vdCgub25DbGlja0VkaXRUb2RvTWFpblN0eWxlKSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzQsIDE2OCwgMTQzLCAwLjQ4Nik7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdEljb246aG92ZXIsXFxyXFxuLmdyaWRJY29uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG9EaXY6aG92ZXIgPiBkaXYge1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvYWRkMS5wbmdcXFwiKSBjZW50ZXIvY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EZWxldGVCdG46aG92ZXIsXFxyXFxuLnRvZG9FZGl0QnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb01pbmltaXplQnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNvbmZpcm1hdGlvbkFuaW1hdGlvbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIm5hbWVCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZXNjcmlwdGlvbkJ0biIsImRhdGVCdG4iLCJzYXZlQnRuIiwic3RhdHVzQnRuIiwiYWRkVG9kb0RpdiIsImFkZFRvZG9Db25maXJtYXRpb24iLCJ0b2RvTWFpbiIsInRvZG9EZXRhaWxzIiwidG9kb05hbWVEaXYiLCJ0b2RvU2lnbiIsInRvZG9OYW1lIiwidG9kb0Rlc2NyaXB0aW9uIiwidG9kb1N0YXR1cyIsInRvZG9EYXRlIiwidG9kb0ljb24iLCJ0b2RvRGVsZXRlQnRuIiwidG9kb01pbmltaXplQnRuIiwidG9kb0VkaXRCdG4iLCJzZWN0aW9uVGhyZWUiLCJjcmVhdGVFbGVtZW50IiwiYXJyYW5nZVN0eWxlIiwiZWRpdFRvZG8iLCJ0b2RvVUlDcmVhdGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZCIsInByZXBlbmQiLCJhZGRUb2RvQnRuIiwibmFtZUJ0bkVkaXQiLCJkZXNjcmlwdGlvbkJ0bkVkaXQiLCJzdGF0dXNCdG5FZGl0IiwiZGF0ZUJ0bkVkaXQiLCJncmlkSWNvbiIsImxpc3RJY29uIiwiY2FuY2VsQnRuIiwiY2FuY2VsQnRuRWRpdCIsIkxPQ0FMX1NUT1JBR0VfTElTVF9LRVkiLCJpc1RvZG9MaXN0T3JHcmlkU3R5bGUiLCJvYmoiLCJzaWtlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImN1cnJlbnRTdGF0dXMiLCJUb2RvQ2xhc3MiLCJjb25zdHJ1Y3RvciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwic3RhdHVzIiwidG9kb0FkZENhbmNlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkSXRlbUJ0biIsImZvY3VzIiwic3RhdHVzUHJpb3JpdHlDb2xvciIsInRvZG9TdGF0dXNBbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNlbGVjdGVkIiwiY29uc29sZSIsImxvZyIsIm9vX29vIiwiY29sb3IiLCJjbGVhclZhbHVlIiwidmFsdWUiLCJjbGVhclZhbHVlRWRpdCIsInNvcnRUb2RvTGlzdE9yR3JpZFN0eWxlIiwidG9kb01haW5BbGwiLCJ0b2RvRGV0YWlsc0FsbCIsInRvZG9EZXNjcmlwdGlvbkFsbCIsInRvZG9EYXRlQWxsIiwidG9kb0RlbGV0ZUJ0bkFsbCIsInRvZG9FZGl0QnRuQWxsIiwiaXRlbXMiLCJyZW1vdmUiLCJjb250YWlucyIsInRvZG9NaW5pbWl6ZUJ0bkFsbCIsImJ0bnMiLCJjbGlja1RvZG9MaXN0T3JHcmlkU3R5bGUiLCJtaW5pbWl6ZVRvZG9EZXRhaWxzRm5jIiwiY3VycmVudFRhcmdldCIsInBhcmVudE5vZGUiLCJwYXJlbnRFbGVtZW50IiwidG9nZ2xlIiwiY2hpbGROb2RlcyIsIm1pbmltaXplVG9kb0RldGFpbHMiLCJmaWxsU2lnblRvZG9GbmMiLCJlYWNoTWFpbiIsImRpc2FibGVkIiwic2V0VGltZW91dCIsImZpbGxTaWduVG9kbyIsInRvZG9TaWducyIsInJlbW92ZVRvZG8iLCJkZWxldGVBbGwiLCJpbmRleCIsInNwbGljZSIsImVuYWJsZUVkaXRCdG4iLCJpc1RvZG9FZGl0Q2xpY2tlZCIsInRvZG9FZGl0Q2FuY2VsIiwic2F2ZVRvZG9FYWNoQWZ0ZXJFZGl0Iiwic2F2ZUJ0bkVkaXRWYXJpYWJsZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkYXRlQnRuSW5kaWFuRm9ybWF0Iiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImVkaXRUb2RvRWFjaCIsInRvZG9SZW5kZXIiLCJwcmVkZWZpbmVkVG9kb0lucHV0IiwibGlzdEl0ZW1Ud28iLCJ1bnNoaWZ0IiwidXNlckNyZWF0ZVRvZG9JbnB1dCIsImxpc3RJdGVtIiwic2F2ZVRvZG8iLCJvb19jbSIsImV2YWwiLCJpIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInYiLCJBcnJheSIsIl9rZXkiLCJjb25zb2xlTG9nIiwib29fdHIiLCJfbGVuMiIsIl9rZXkyIiwiY29uc29sZVRyYWNlIiwib29fdHMiLCJjb25zb2xlVGltZSIsIm9vX3RlIiwiY29uc29sZVRpbWVFbmQiXSwic291cmNlUm9vdCI6IiJ9