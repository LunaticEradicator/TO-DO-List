import './style.css';
import {
    addTodoBtn, addTodoDiv, gridIcon, listIcon,
    nameBtnEdit, descriptionBtnEdit, statusBtnEdit, dateBtnEdit,
    addTodoConfirmation, cancelBtn, cancelBtnEdit
} from './htmlElement';
import { nameBtn, saveBtn, descriptionBtn, dateBtn, statusBtn } from './addItem';
import todoUICreate, {
    todoMain, todoDetails, todoSign, todoName, todoDescription,
    todoStatus, todoDate, todoDeleteBtn, todoMinimizeBtn, todoEditBtn,
    editTodo
} from './eachTodoItem';

const LOCAL_STORAGE_LIST_KEY = 'obj.sike';
const obj = {
    sike: JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [],
    currentStatus: '',
}

// function save() {
//     localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(obj.sike));
// }

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

// todoFunctionality !-


let isTodoListOrGridStyle;

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
    const todoDeleteBtnAll = document.querySelectorAll('.todoDeleteBtn');
    todoDeleteBtnAll.forEach((deleteAll, index) => {
        deleteAll.addEventListener("click", (e) => {
            console.log(index);
            obj.sike.splice(index, 1);
            e.currentTarget.parentNode.parentElement.parentElement.remove();
            console.log(obj.sike);
            // todoRenderAndSaveLocalStorage();
        });
    })
}

// Edit Button Functionality Starting

function enableEditBtn() {
    // Enable all the edit button until the clearBtnEdit is pressed [For cancel edit log above]
    const todoEditBtnAll = document.querySelectorAll('.todoEditBtn');
    todoEditBtnAll.forEach(isTodoEditClicked => {
        isTodoEditClicked.disabled = false; // disable todoEditBtn 
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

function saveTodoEachAfterEdit(e, index) {
    // const saveBtnEditVariable = e.currentTarget.parentNode.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[9].childNodes[1];// selects saveBtnEdit
    // const saveBtnEditAll = document.querySelectorAll('.saveBtnEdit');
    // saveBtnEditAll.forEach(saveBtnEditVariable => {
    //     saveBtnEditVariable.addEventListener('click', event => {
    //         const dateBtnIndianFormat = dateBtnEdit.value.split('-').reverse().join('-');
    //         addTodoDiv.style.display = 'flex';
    //         editTodo.style.display = 'none';

    //         // localStorage Edit Functionality
    //         const listItemEdit = new TodoClass(`${nameBtnEdit.value}`, `${descriptionBtnEdit.value}`, `${dateBtnIndianFormat}`, `${statusBtnEdit.value}`);
    //         obj.sike.splice(index, 1, listItemEdit)
    //         todoRenderAndSaveLocalStorage();
    //         enableEditBtn();
    //         console.log(obj.sike)
    //     })
    // })

    const saveBtnEditVariable = e.currentTarget.parentNode.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[9].childNodes[1];// selects saveBtnEdit
    saveBtnEditVariable.addEventListener('click', event => {
        const dateBtnIndianFormat = dateBtnEdit.value.split('-').reverse().join('-');
        addTodoDiv.style.display = 'flex';
        editTodo.style.display = 'none';
        event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].style.display = 'grid';  // selects details
        event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[1].textContent = `${nameBtnEdit.value}`;
        event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].textContent = `${descriptionBtnEdit.value}`;
        event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[2].textContent = `${dateBtnIndianFormat}`;
        event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[3].textContent = `${statusBtnEdit.value}`;
        // console.log(event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[3]);
        enableEditBtn();
    })

}
function editTodoEach() {
    const todoEditBtnAll = document.querySelectorAll('.todoEditBtn');
    todoEditBtnAll.forEach((items, index) => { // index parameter get the index position of the nodeList[of each todoEditBtn from todoEditBtnAll ]
        items.addEventListener("click", e => {
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
    // obj.sike.forEach(ok => {
    //     todoUICreate();  // from eachTodoItem.js
    //     todoName.textContent = `${ok.title}`;
    //     todoDescription.textContent = `${ok.description}`;
    //     todoDate.textContent = `${ok.date}`;
    //     todoStatus.textContent = `${ok.status}`;
    //     minimizeTodoDetails();
    //     fillSignTodo();
    //     removeTodo();
    //     editTodoEach();
    // })
    todoUICreate();  // from eachTodoItem.js
    todoName.textContent = `${obj.sike[0].title}`;
    todoDescription.textContent = `${obj.sike[0].description}`;
    todoDate.textContent = `${obj.sike[0].date}`;
    todoStatus.textContent = `${obj.sike[0].status}`;
}

// function clearElement() {
//     const todoMainAll = document.querySelectorAll('.todoMain');
//     todoMainAll.forEach(clear => {
//         clear.remove()
//     })
// }


// function todoRenderAndSaveLocalStorage() {
//      save(); // saves locally using local storage
//      clearElement(); // delete the elements [if skipped the todoMain element will be duplicated, since every element will be created when looping [todoRender]]
//      todoRender();
// }


function predefinedTodoInput() {
    const listItemTwo = new TodoClass('Messi ', 'GOAT', '2-11-1990', 'High');
    obj.sike.unshift(listItemTwo);
    // todoRenderAndSaveLocalStorage();
    // todo Functionality !-
    todoRender();
    minimizeTodoDetails();
    fillSignTodo();
    removeTodo();
    editTodoEach();
}

function userCreateTodoInput() {
    const dateBtnIndianFormat = dateBtn.value.split('-').reverse().join('-');
    const listItem = new TodoClass(nameBtn.value, descriptionBtn.value, dateBtnIndianFormat, statusBtn.value);
    obj.sike.unshift(listItem);
    todoRender();
    // todoRenderAndSaveLocalStorage();
    // obj.sike.splice(obj.sike.length, 0, listItem);
}

function saveTodo() {
    saveBtn.addEventListener("click", () => {
        addTodoDiv.style.display = 'flex';
        addTodoConfirmation.style.display = 'none';
        userCreateTodoInput();
        minimizeTodoDetails();
        fillSignTodo();
        removeTodo();
        editTodoEach();
        clickTodoListOrGridStyle();
        console.log(obj.sike)
    });
}
predefinedTodoInput();
// todoRenderAndSaveLocalStorage();
saveTodo();
addItemBtn();
sortTodoListOrGridStyle();
console.log(obj.sike)