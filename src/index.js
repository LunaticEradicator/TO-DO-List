import './style.css';
import {
    addTodoBtn, addTodoDiv, gridIcon, listIcon,
    nameBtnEdit, descriptionBtnEdit, statusBtnEdit, dateBtnEdit,
    sectionFour
} from './htmlElement';
import { nameBtn, saveBtn, descriptionBtn, dateBtn, statusBtn } from './addItem';
import todoUICreate, {
    todoMain, todoDetails, todoSign, todoName, todoDescription,
    todoStatus, todoDate, todoDeleteBtn, todoMinimizeBtn, todoEditBtn,
    editTodo
} from './eachTodoItem';

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
    addTodoBtn.addEventListener("click", () => {
        addTodoDiv.style.display = 'none';
        sectionFour.style.display = 'grid';
        // selectedStatus();
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
    todoDeleteBtn.addEventListener("click", (e) => {
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
            editTodo.style.display = 'grid';
            e.currentTarget.parentNode.parentElement.parentElement.append(editTodo);


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
                const dateBtnIndianFormat = dateBtnEdit.value.split('-').reverse().join('-');
                addTodoDiv.style.display = 'flex';
                editTodo.style.display = 'none';
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].style.display = 'grid';  // selects details
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[1].textContent = `${nameBtnEdit.value}`;
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].textContent = `${descriptionBtnEdit.value}`;
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[2].textContent = `${dateBtnIndianFormat}`;
                event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[3].textContent = `${statusBtnEdit.value}`;
                console.log(event.currentTarget.parentNode.parentElement.parentElement.parentElement.childNodes[0].childNodes[3]);
            })
        })
    })
}

function todoSectionCreate() {
    todoUICreate();  // from eachTodoItem.js
    todoName.textContent = `${obj.sike[0].title}`;
    todoDescription.textContent = `${obj.sike[0].description}`;
    todoDate.textContent = `${obj.sike[0].date}`;
    todoStatus.textContent = `${obj.sike[0].status}`;
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
    const dateBtnIndianFormat = dateBtn.value.split('-').reverse().join('-');
    const listItem = new TodoClass(nameBtn.value, descriptionBtn.value, dateBtnIndianFormat, statusBtn.value);
    obj.sike.unshift(listItem);
    todoSectionCreate();
}

function saveTodo() {
    saveBtn.addEventListener("click", () => {
        addTodoDiv.style.display = 'flex';
        sectionFour.style.display = 'none';
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



