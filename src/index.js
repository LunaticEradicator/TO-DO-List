import './style.css';
import { addTodoBtn, addTodoDiv } from './dom';
import { modal, saveBtn, descriptionBtn, dateBtn, statusBtnHigh, statusBtnLow, statusBtnOff, selectedStatusBtn } from './modalBar'
import todoCreatedOnSaveBtnPress, { sectionThree, sectionFour, todoMain, todoDetails, todoSign, todoName, todoDescription, todoStatus, todoDate, todoDeleteBtn, todoMinimizeBtn } from './eachTodoItem';


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
    addTodoBtn.addEventListener("click", () => {
        addTodoDiv.style.display = 'none';
        sectionFour.style.display = 'grid';
    });
}

function removeTodo() {
    todoDeleteBtn.addEventListener("click", (e) => {
        e.currentTarget.parentNode.parentElement.remove(); // select todoMain and remove
        // todoMain.remove();
        console.log('Delete')
    });
}


function DisplayTodoList() {
    console.log(obj.sike[0]);
    console.log(obj.sike[0].date);
    console.log(obj.sike[0].title);
    todoCreatedOnSaveBtnPress();
    todoName.textContent = `${obj.sike[0].title}`;
    todoDescription.textContent = `${obj.sike[0].description}`;
    todoDate.textContent = `${obj.sike[0].date}`;
    todoStatus.textContent = `${obj.sike[0].status}`;
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
    todoMinimizeBtn.addEventListener("click", minimizeTodoDetailsFnc);
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
    selectedStatusBtn.forEach(selected => {
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
    const dateBtnIndianFormat = dateBtn.value.split('-').reverse().join('-');
    console.log(dateBtnIndianFormat);
    const listItem = new TodoClass(nameBtn.value, descriptionBtn.value, dateBtnIndianFormat, obj.currentStatus);
    obj.sike.unshift(listItem);
}

function saveTodoBtn() {
    saveBtn.addEventListener("click", () => {
        userInputTodo()
        DisplayTodoList();
        minimizeTodoDetails();
        removeTodo();
        addTodoDiv.style.display = 'flex';
        sectionFour.style.display = 'none';
        fillSignTodo();
    });
}

selectedStatus();
predefinedTodo();
saveTodoBtn();
addTodo();


