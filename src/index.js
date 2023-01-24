import './style.css';
import { addTodoBtn, addTodoDiv } from './dom';
import { modal, nameBtn, saveBtn, descriptionBtn, dateBtn, selectedStatusBtn, statusBtn } from './modalBar'
import todoUICreate, { createNewSectionThree, sectionThree, sectionFour, todoMain, todoDetails, todoSign, todoName, todoDescription, todoStatus, todoDate, todoDeleteBtn, todoMinimizeBtn } from './eachTodoItem';


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

function selectedStatus() {
    selectedStatusBtn.forEach(selected => {
        selected.addEventListener("click", () => {
            obj.currentStatus = selected.value;
            console.log(obj.currentStatus);
            console.log();
        });
    });
}

function addItemBtn() {
    addTodoBtn.addEventListener("click", () => {
        addTodoDiv.style.display = 'none';
        sectionFour.style.display = 'grid';
        selectedStatus();
    });
}

// todoFunctionality !-

function minimizeTodoDetailsFnc(e) {
    e.currentTarget.parentNode.parentElement.classList.toggle(`onClickTodoMainShrink`); // Selects todoMain
    e.currentTarget.parentElement.classList.toggle('onClickTodoDetailsShrink'); // Selects todoDetails
    e.currentTarget.parentNode.childNodes[1].classList.toggle('onClickHideToDoDetails'); // Selects todoDescription
    e.currentTarget.parentNode.childNodes[2].classList.toggle('onClickTodoDate'); // Selects todoDate
    e.currentTarget.parentNode.childNodes[3].classList.toggle('onClickHideToDoDetails'); // Selects todoStatus

    if (e.currentTarget.parentNode.parentElement.classList.contains(`onClickTodoMainShrink`)) {
        e.currentTarget.parentNode.childNodes[5].textContent = 'Maximize';
    }
    else {
        e.currentTarget.parentNode.childNodes[5].textContent = 'Minimize';
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
        e.currentTarget.parentNode.parentElement.remove(); // select todoMain and remove
        console.log('Deleted')
    });
}

// todoFunctionality -!
function todoSectionCreate() {
    todoUICreate(); // // from eachTodoItem.js
    todoName.textContent = `${obj.sike[0].title}`;
    todoDescription.textContent = `${obj.sike[0].description}`;
    todoDate.textContent = `${obj.sike[0].date}`;
    todoStatus.textContent = `${obj.sike[0].status}`;
}

function predefinedTodoInput() {
    const listItemTwo = new TodoClass('Messi', 'GOAT', '2-11-1990', 'High');
    // todoUICreate(); // from eachTodoItem.js
    obj.sike.push(listItemTwo);
    todoSectionCreate();
    // todo Functionality !-
    removeTodo();
    minimizeTodoDetails();
    fillSignTodo();
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
        // todo functionality !-
        userCreateTodoInput();
        minimizeTodoDetails();
        removeTodo();
        fillSignTodo();
        // console.log(obj.sike);
    });
}
predefinedTodoInput();
addItemBtn();
saveTodo();



