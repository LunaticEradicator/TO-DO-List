import './style.css';
import {
    addTodoBtn, addTodoDiv, gridIcon, listIcon,
    nameBtnEdit, descriptionBtnEdit, statusBtnEdit, dateBtnEdit,
    addTodoConfirmation, cancelBtn, cancelBtnEdit
} from './htmlElement';
import { nameBtn, saveBtn, descriptionBtn, dateBtn, statusBtn } from './addItem';
import todoUICreate, {
    todoMain, todoDetails, todoName, todoDescription,
    todoStatus, todoDate, todoDeleteBtn, todoMinimizeBtn, todoEditBtn,
    editTodo
} from './eachTodoItem';

const LOCAL_STORAGE_LIST_KEY = 'obj.sike';
let isTodoListOrGridStyle;
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
    cancelBtn.addEventListener("click", e => {
        addTodoConfirmation.style.display = 'none';
        addTodoDiv.style.display = 'flex';
    })
}

function addItemBtn() {
    addTodoBtn.addEventListener("click", () => {
        addTodoDiv.style.display = 'none';
        addTodoConfirmation.style.display = 'grid';
        nameBtn.focus(); // adds cursor when addBtn is pressed;
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
    nameBtn.value = '';
    descriptionBtn.value = '';
    dateBtn.value = '';
    statusBtn.value = 'None';
}

function clearValueEdit() {
    nameBtnEdit.value = '';
    descriptionBtnEdit.value = '';
    dateBtnEdit.value = '';
    statusBtnEdit.value = 'None';
}

// todoFunctionality !-


function sortTodoListOrGridStyle() { // Check for EventListener and create sorting order [grid or list]
    listIcon.addEventListener('click', e => {
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


    gridIcon.addEventListener('click', e => {
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
        todoMinimizeBtn.textContent = 'Maximize'
        todoMain.classList.add('onClickTodoMainShrink');
        todoDetails.classList.add('onClickTodoDetailsShrink');
        todoDescription.classList.add('onClickHideToDoDetails');
        todoStatus.classList.add('onClickHideToDoDetails');
        todoDate.classList.add('onClickTodoDate');
        todoDeleteBtn.classList.add('onClickHideToDoDetails');
        todoEditBtn.classList.add('onClickHideToDoDetails');
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
    todoMinimizeBtn.addEventListener("click", minimizeTodoDetailsFnc);
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
    cancelBtnEdit.addEventListener("click", e => {
        editTodo.style.display = 'none';
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
        if (nameBtnEdit.value === "" || descriptionBtnEdit.value === "" || dateBtnEdit.value === "" || statusBtnEdit.value === "") {
            // HTML required field will show
        }
        else {
            event.preventDefault()
            const dateBtnIndianFormat = dateBtnEdit.value.split('-').reverse().join('-');
            addTodoDiv.style.display = 'flex';
            editTodo.style.display = 'none';
            event.currentTarget.parentNode.parentElement.parentElement.parentElement.parentElement.style.border = 'none';  // selects details with respect to editBtn
            event.currentTarget.parentNode.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = 'rgb(230, 230, 230)';  // selects details with respect to editBtn
            event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].style.display = 'grid';  // selects details
            event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[1].textContent = `${nameBtnEdit.value}`;
            event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].textContent = `${descriptionBtnEdit.value}`;
            event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[2].textContent = dateBtnIndianFormat;
            event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[3].textContent = `${statusBtnEdit.value}`;
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
            editTodo.style.display = 'grid';
            e.currentTarget.parentNode.parentElement.parentElement.append(editTodo); // display editUI on edit click
            // Disable all the edit button until the saveBtnEdit is pressed [For cancelEdit function above]
            todoEditBtnAll.forEach(isTodoEditClicked => {
                isTodoEditClicked.disabled = true;
                saveTodoEachAfterEdit(e, index);
            })
            // focus the name when clicked [used autofocus property on the html element]
            nameBtnEdit.focus();
        })
        todoEditCancel();
    })
}

// Edit Button Functionality Ending

function todoRender() {
    todoUICreate();  // from eachTodoItem.js
    todoName.textContent = `${obj.sike[0].title}`;
    todoDescription.textContent = `${obj.sike[0].description}`;
    todoDate.textContent = `${obj.sike[0].date}`;
    todoStatus.textContent = `${obj.sike[0].status}`;
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
    const dateBtnIndianFormat = dateBtn.value.split('-').reverse().join('-');
    const listItem = new TodoClass(nameBtn.value, descriptionBtn.value, dateBtnIndianFormat, statusBtn.value);
    obj.sike.unshift(listItem);
    todoRender();
}

function saveTodo() {
    saveBtn.addEventListener("click", () => {
        if (nameBtn.value === "" || descriptionBtn.value === "" || dateBtn.value === "" || statusBtn.value === "") {
            // HTML required field will show
        }
        else {
            event.preventDefault()
            addTodoDiv.style.display = 'flex';
            addTodoConfirmation.style.display = 'none';
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

// predefinedTodoInput();
// saveTodo();
// addItemBtn();
// sortTodoListOrGridStyle();